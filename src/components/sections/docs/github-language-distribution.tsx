import React from 'react';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';
import { CodeBlock } from '../../elements/code-block';

const EXAMPLE_CODE_WITH_ALL_METHOD: string = `import React from 'react';
import { useGitHub } from './useGitHub';

const LanguageDistribution = ({ username }) => {
  const { getRepositories } = useGitHub({ username });
  const languageDist = getRepositories().all.languageDistribution();

  return (
    <div>
      <h2>Language Distribution</h2>
      <ul>
        {languageDist.map((lang) => (
          <li key={lang.language}>
            {lang.language}: {(lang.percentage * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};` as const;

const EXAMPLE_CODE_WITH_LANGUAGE_LIST: string = `import React from 'react';
import { useGitHub } from './useGitHub';

const SelectedLanguagesDistribution = ({ username }) => {
  const { getRepositories } = useGitHub({ username });
  const languageDist = getRepositories()
    .withLanguage(['javascript', 'typescript'])
    .languageDistribution();

  return (
    <div>
      <h2>Language Distribution (Filtered by JavaScript, TypeScript)</h2>
      <ul>
        {languageDist.map((lang) => (
          <li key={lang.language}>
            {lang.language}: {(lang.percentage * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedLanguagesDistribution;
` as const;

const EXAMPLE_CODE_WITH_PINNED: string = `import React from 'react';
import { useGitHub } from './useGitHub';

const PinnedRepositoriesLanguageDistribution = ({ username }) => {
  const { getRepositories } = useGitHub({ username, personalAccessToken: 'YOUR_PERSONAL_ACCESS_TOKEN' });
  const languageDist = getRepositories().pinned.languageDistribution();

  return (
    <div>
      <h2>Language Distribution (Pinned Repositories)</h2>
      <ul>
        {languageDist.map((lang) => (
          <li key={lang.language}>
            {lang.language}: {(lang.percentage * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedRepositoriesLanguageDistribution;
` as const;

const EXAMPLE_CODE_WITH_TOP_REPOSITORIES: string = `import React from 'react';
import { useGitHub } from './useGitHub';

const TopRepositoriesLanguageDistribution = ({ username, topN }) => {
  const { getRepositories } = useGitHub({ username });
  const languageDist = getRepositories().top(topN).languageDistribution();

  return (
    <div>
      <h2>Language Distribution (Top {topN} Repositories)</h2>
      <ul>
        {languageDist.map((lang) => (
          <li key={lang.language}>
            {lang.language}: {(lang.percentage * 100).toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRepositoriesLanguageDistribution;
` as const;

const EXAMPLE_CODE_RETURNED_DATA_FORMAT: string = `[
  {
    "language": "javascript",
    "percentage": 0.4
  },
  {
    "language": "typescript",
    "percentage": 0.3
  },
  {
    "language": "python",
    "percentage": 0.2
  }
]
` as const;

const GitHubLanguageDistribution = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="language-distribution">
      <h2>Language Distribution</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The hook supports a{' '}
            <code className="inline-code">languageDistribution</code> feature
            that provides insights into the programming languages used across a
            user&apos;s repositories. This feature is useful for visualizing or
            analyzing the diversity and frequency of languages in a user&apos;s
            public GitHub repositories.
          </p>
          <h3>How it works</h3>
          <p>
            The <code className="inline-code">languageDistribution</code>{' '}
            function calculates the percentage of repositories written in each
            language. The hook aggregates the languages used across all
            repositories and returns a percentage breakdown of the usage.
          </p>
        </div>
        <div className="space-y-4">
          <h2>
            Using <code className="inline-code">all()</code>
          </h2>
          <p>
            Fetch the language distribution across all repositories for a user.
          </p>
          <CodeBlock content={EXAMPLE_CODE_WITH_ALL_METHOD} language="tsx" />
        </div>
        <div className="space-y-4">
          <h2>
            Using{' '}
            <code className="inline-code">withLanguages([LANGUAGES])</code>
          </h2>
          <p>
            Fetch the language distribution for repositories that are written in
            a specific set of languages.
          </p>
          <CodeBlock content={EXAMPLE_CODE_WITH_LANGUAGE_LIST} language="tsx" />
        </div>
        <div className="space-y-4">
          <h2>
            Using <code className="inline-code">pinned()</code>
          </h2>
          <p>Fetch the language distribution for the pinned repositories.</p>
          <CodeBlock content={EXAMPLE_CODE_WITH_PINNED} language="tsx" />
        </div>
        <div className="space-y-4">
          <h2>
            Using <code className="inline-code">top(NUMBER)</code>
          </h2>
          <p>
            Fetch the language distribution for the top N repositories, sorted
            by the most recently updated.
          </p>
          <CodeBlock
            content={EXAMPLE_CODE_WITH_TOP_REPOSITORIES}
            language="tsx"
          />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Do use the{' '}
              <code className="inline-code">languageDistribution()</code> method
              to get an array of objects, each containing a{' '}
              <code className="inline-code">language</code> and its
              corresponding <code className="inline-code">percentage</code> of
              repositories.
            </li>
            <li>
              Do handle the fact that some repositories may not have a language
              specified.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Don&apos;t assume every repository will have a{' '}
              <code className="inline-code">language</code> defined. Some may
              not have a language field, and these are ignored in the
              calculation.
            </li>
            <li>
              Don&apos;t forget to account for repositories that use languages
              not explicitly recognized by GitHub.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2>Returned Data Format</h2>
          <p>
            The language distribution data returned by{' '}
            <code className="inline-code">languageDistribution()</code>
            will have the following structure:
          </p>
          <ul>
            <li>
              <code className="inline-code">language</code>: The programming
              language (e.g., JavaScript, Python).
            </li>
            <li>
              <code className="inline-code">percentage</code>: The percentage of
              repositories written in this language.
            </li>
          </ul>
          <h3>Example response</h3>
          <CodeBlock content={EXAMPLE_CODE_RETURNED_DATA_FORMAT} lang="json" />
          <p>
            In this example, 40% of the user&apos;s repositories are written in
            JavaScript, 30% in TypeScript, and 20% in Python.
          </p>
        </div>
        <div className="space-y-4">
          <h2>Use Cases</h2>
          <ul>
            <li>
              <b>All repositories</b>: To see the overall language diversity for
              the user.
            </li>
            <li>
              <b>Filtered by specific languages</b>: To focus on repositories
              written in certain programming languages.
            </li>
            <li>
              <b>Pinned repositories</b>: To understand the language usage in
              the user&apos;s most significant projects.
            </li>
            <li>
              <b>Top N repositories</b>: To get language statistics for the most
              active or recently updated repositories.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { GitHubLanguageDistribution };
