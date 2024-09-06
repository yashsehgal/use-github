import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const EXAMPLE_CODE: string = `// Inside a custom component
const { userInfo, metadata } = useGitHub({ username: 'nonexistent-user' });

useEffect(() => {
  if (!userInfo) {
    console.error('User not found. Check the username or try again later.');
  }
}, [userInfo]);
`;

const HandlingErrors = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="handling-errors">
      <h2>Handling Errors</h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <p>
            The hook is designed to handle errors that might occur during API
            requests. It logs these errors to the console, allowing developers
            to debug any issues easily.
          </p>
          <CodeBlock content={EXAMPLE_CODE} language="tsx" />
        </div>
        <div className="space-y-4">
          <h3>Do&apos;s</h3>
          <ul>
            <li>Do check for errors in the console when API requests fail.</li>
            <li>
              Do provide user-friendly messages in the UI when data cannot be
              fetched.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3>Don&apos;ts</h3>
          <ul>
            <li>
              Don't ignore error handling; always consider how to manage
              failures gracefully.
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContentControl>
  );
};

export { HandlingErrors };
