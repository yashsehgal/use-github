import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `import React from 'react';
import { useGitHub } from 'use-github-react/dist/use-github';

const UserRepositories = ({ username }) => {
  const { getRepositories } = useGitHub({ username });
  const repositories = getRepositories().all();

  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          {repo.language && <span> - {repo.language}</span>}
        </li>
      ))}
    </ul>
  );
};

export default UserRepositories;
` as const;

const FetchGitHubRepositories = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="fetching-github-repositories">
      <h2>Fetching GitHub Repositories</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The hook also retrieves a list of repositories for the specified
            user. This data is stored in the{' '}
            <code className="inline-code">repositories</code> state, which is an
            array of objects representing each repository.
          </p>
          <CodeBlock content={EXAMPLE_CODE} language="tsx" />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Do use the{' '}
              <code className="inline-code">getRepositories().all()</code>{' '}
              method to retrieve the full list of repositories.
            </li>
            <li>
              Do iterate over the repositories array to display each
              repository&apos;s information.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            Don&apos;t assume the list of repositories will always contain data.
            Always check if the array is empty.
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { FetchGitHubRepositories };
