import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const DOCUMENTATION_INDEX: { name: string; id: string }[] = [
  { name: 'Installation', id: 'installation' },
  { name: 'Hook signature', id: 'hook-signature' },
  { name: 'Fetching GitHub user info', id: 'fetching-github-user-info' },
  { name: 'Fetching GitHub Repositories', id: 'fetching-github-repositories' },
  {
    name: 'Filtering Repositories by Language',
    id: 'filtering-repositories-by-language',
  },
  { name: 'Getting the Top N Repositories', id: 'getting-top-n-repositories' },
  { name: 'Handling Errors', id: 'handling-errors' },
];

const DocumentationIndex = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="documentation-index">
      <h2>Documentation table of contents</h2>
      <ul>
        {DOCUMENTATION_INDEX.map((documentationItem, index) => {
          return (
            <li key={index}>
              <a href={`#${documentationItem.id}`}>{documentationItem.name}</a>
            </li>
          );
        })}
      </ul>
    </ResponsiveContentControl>
  );
};

export { DocumentationIndex };
