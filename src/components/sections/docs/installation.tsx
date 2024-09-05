import React from 'react';
import { CodeBlock } from '../../elements/code-block';
import { ResponsiveContentControl } from '../../layouts/responsive-content-control';

const Installation = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="installation">
      <h2>Installation</h2>
      <div className="space-y-4">
        <p>
          Before you start using the <code>useGitHub</code> hook, ensure you
          have <code>axios</code> installed in your project, as this hook relies
          on it to make HTTP requests.
        </p>
        <CodeBlock content="npm install axios" />
        <CodeBlock content='npm install use-github-react' />
      </div>
    </ResponsiveContentControl>
  );
};

export { Installation };
