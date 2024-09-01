import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `import React from 'react';
import { useGitHub } from 'use-github-react';

const PythonRepositories = ({ username }) => {
  const { getRepositories } = useGitHub({ username });
  const pythonRepos = getRepositories().withLanguage(['python']);

  return (
    <ul>
      {pythonRepos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default PythonRepositories;
`;

const FilteringRepositoriesByLanguage = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="filtering-repositories-by-language">
      <h2>Filtering Repositories by Language</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The <code>getRepositories</code> function provides a method
            <code>withLanguage</code> that allows you to filter repositories
            based on specific programming languages.
          </p>
          <CodeBlock content={EXAMPLE_CODE} />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Do pass an array of valid programming languages (in lowercase) to
              the <code>withLanguage</code> method.
            </li>
            <li>Do check the filtered list for content before rendering.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Don't use incorrect casing for language names. The{' '}
              <code>withLanguage</code>
              method expects lowercase language names.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { FilteringRepositoriesByLanguage };
