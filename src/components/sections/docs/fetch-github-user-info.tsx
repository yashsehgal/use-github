import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `import React from 'react';
import { useGitHub } from 'use-github-react/dist/use-github';

const UserProfile = ({ username }) => {
  const { userInfo } = useGitHub({ username });

  if (!userInfo) return <p>Loading...</p>;

  return (
    <div>
      <h1>{userInfo.name}</h1>
      <p>{userInfo.bio}</p>
      <p>Public Repositories: {userInfo.public_repos}</p>
    </div>
  );
};

export default UserProfile;
` as const;

const FetchGitHubUserInfo = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="fetching-github-user-info">
      <h2>Fetching GitHub user info</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The hook fetches user information from GitHub using the provided
            <code className="inline-code">username</code>. This data is stored
            in the <code className="inline-code">userInfo</code> state, which
            includes details like the user&apos;s name, bio, public repository
            count, and more.
          </p>
          <CodeBlock content={EXAMPLE_CODE} language="tsx" />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>
              Do ensure the <code className="inline-code">username</code> prop
              is passed correctly to the hook.
            </li>
            <li>
              Do handle the loading state gracefully as data is fetched
              asynchronously.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Don&apos;t assume <code className="inline-code">userInfo</code>{' '}
              will always contain data. Always check if it&apos;s null before
              accessing properties.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { FetchGitHubUserInfo };
