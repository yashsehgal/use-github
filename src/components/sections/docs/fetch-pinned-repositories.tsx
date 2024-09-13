import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `import React from 'react';
import { useGitHub } from 'use-github-react/dist/use-github';

const PinnedRepositories = ({ username }) => {
  const { getRepositories } = useGitHub({ 
    username, 
    personalAccessToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN 
  });
  const pinnedRepos = getRepositories().pinned();

  return (
    <div>
      <h2>Pinned Repositories</h2>
      <ul>
        {pinnedRepos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            {repo.description && <p>{repo.description}</p>}
            <p>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PinnedRepositories;` as const;

export const DEMO_RESPONSE_CODE: string = `{
  "id": "123456",
  "name": "my-cool-repo",
  "description": "This is a description of the repository.",
  "html_url": "https://github.com/username/my-cool-repo",
  "stargazers_count": 50,
  "forks_count": 10,
  "language": "javascript"
}
` as const;

const FetchingPinnedRepositories = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="fetching-pinned-repositories">
      <h2>Fetching pinned repositories</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            In addition to fetching regular repositories, the{' '}
            <code className="inline-code">useGitHub</code> hook can now retrieve
            a user&apos;s pinned repositories using GitHub&apos;s GraphQL API.
            This feature allows you to display repositories that a user has
            specifically chosen to highlight on their GitHub profile.
          </p>
          <p>
            The hook fetches the first six pinned repositories for the provided
            <code className="inline-code">username</code> and most importantly,{' '}
            the <code className="inline-code">personalAccessToken</code>. The
            pinned repositories are returned through the
            <code className="inline-code">getRepositories</code> method, using
            the <code className="inline-code">pinned()</code> function.
          </p>
          <CodeBlock content={EXAMPLE_CODE} language="typescript" />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Make sure to use{' '}
              <code className="inline-code">personalAccessToken</code> inside
              the hook configuration. Use{' '}
              <a
                href="https://create-react-app.dev/docs/adding-custom-environment-variables/"
                target="_blank"
                rel="noreferrer">
                env variables
              </a>{' '}
              for storing your personal access token.
            </li>
            <li>
              Do use the{' '}
              <code className="inline-code">getRepositories().pinned()</code>{' '}
              method to retrieve pinned repositories, which will return an array
              of the user&apos;s pinned repositories.
            </li>
            <li>
              Do check for any available{' '}
              <code className="inline-code">description</code>,
              <code className="inline-code">stargazers_count</code>, and{' '}
              <code className="inline-code">forks_count</code> to enrich the
              repository data displayed.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Do not assume every pinned repository will have a description or
              primary language. Always check before rendering these properties.
            </li>
            <li>
              Do not forget to handle loading states or potential API errors
              when fetching the data.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Returned Data Format</h3>
          <p>
            The pinned repositories data returned will have the following
            structure:
          </p>
          <ul>
            <li>
              <code className="inline-code">id</code> The unique identifier for
              the repository.
            </li>
            <li>
              <code className="inline-code">name</code> The name of the
              repository.
            </li>
            <li>
              <code className="inline-code">description</code> A brief
              description of the repository (if available).
            </li>
            <li>
              <code className="inline-code">html_url</code> The URL to the
              repository on GitHub.
            </li>
            <li>
              <code className="inline-code">stargazers_count</code> The number
              of stars the repository has received.
            </li>
            <li>
              <code className="inline-code">forks_count</code> The number of
              forks the repository has.
            </li>
            <li>
              <code className="inline-code">language</code> The primary
              programming language used in the repository (if available).
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Example data</h3>
          <CodeBlock content={DEMO_RESPONSE_CODE} />
          <p>
            By leveraging this feature, you can provide your users with a way to
            showcase their most important repositories directly in your
            application.
          </p>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { FetchingPinnedRepositories };
