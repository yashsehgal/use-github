import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const HookSignature = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="hook-signature">
      <h2>Hook signature</h2>
      <div className="space-y-4">
        <CodeBlock
          language="tsx"
          content={
            'const useGitHub = ({ username, personalAccessToken }: IUseGitHubHookProps): IUseGitHubHookReturn;'
          }
        />
        <div className="space-y-3" id="hook-signature--params">
          <h3>Parameters</h3>
          <p>
            <code className="inline-code">username</code> (string): The GitHub
            username for which the data is to be fetched. This is a required
            parameter.
          </p>
          <p>
            <code className="inline-code">personalAccessToken</code> (optional,
            string): To pass the GitHub generated Personal Access Token for
            using features like{' '}
            <a href="#fetching-pinned-repositories">
              <code className="inline-code">getRepositories().pinned()</code>
            </a>{' '}
            etc.
          </p>
          <div className="inline-info">
            Know how to generate a{' '}
            <a
              href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
              target="_blank"
              rel="noreferrer">
              Personal Access Token on GitHub
            </a>
          </div>
        </div>
        <div className="space-y-3" id="hook-signature--return-value">
          <p>The hook returns an object with the following properties:</p>
          <ul>
            <li>
              <code className="inline-code">userInfo</code> An object containing
              detailed information about the GitHub user.
            </li>
            <li>
              <code className="inline-code">metadata</code> An object containing
              metadata about the GitHub API request.
            </li>
            <li>
              <code className="inline-code">getRepositories</code>: A function
              that returns an object with methods for filtering and retrieving
              repository data.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { HookSignature };
