import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const HookSignature = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="hook-signature">
      <h2>Hook signature</h2>
      <div className="space-y-4">
        <CodeBlock
          content={
            'const useGitHub = ({ username }: IUseGitHubHookProps): IUseGitHubHookReturn;'
          }
        />
        <div className="space-y-3" id="hook-signature--params">
          <h3>Parameters</h3>
          <p>
            <code>username</code> (string): The GitHub username for which the
            data is to be fetched. This is a required parameter.
          </p>
        </div>
        <div className="space-y-3" id="hook-signature--return-value">
          <p>The hook returns an object with the following properties:</p>
          <ul>
            <li>
              <code>userInfo</code> An object containing detailed information
              about the GitHub user.
            </li>
            <li>
              <code>metadata</code> An object containing metadata about the
              GitHub API request.
            </li>
            <li>
              <code>getRepositories</code>: A function that returns an object
              with methods for filtering and retrieving repository data.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { HookSignature };
