import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `import React from 'react';
import { useGitHub } from 'use-github-react/dist/use-github';

const TopRepositories = ({ username, count }) => {
  const { getRepositories } = useGitHub({ username });
  const topRepos = getRepositories().top(count);

  return (
    <ul>
      {topRepos.map((repo) => (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default TopRepositories;
` as const;

const GettingTopNRepositories = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="getting-top-n-repositories">
      <h2>Getting the Top N Repositories</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The <code className="inline-code">getRepositories</code> function
            also provides a <code className="inline-code">top</code> method to
            retrieve the top N repositories based on their order in the list
            (sorted by update time).
          </p>
          <CodeBlock content={EXAMPLE_CODE} language="tsx" />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Do pass a valid number to the{' '}
              <code className="inline-code">top</code> method to get the desired
              number of repositories.
            </li>
            <li>
              Do handle cases where there are fewer repositories than the
              requested top N.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Do not assume that the user has enough repositories to meet your
              request for the top N.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { GettingTopNRepositories };
