import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const DOCUMENTATION_INDEX: { name: string; id: string; isNew?: boolean }[] = [
  { name: 'Installation', id: 'installation' },
  { name: 'Hook signature', id: 'hook-signature' },
  { name: 'Fetching GitHub user info', id: 'fetching-github-user-info' },
  { name: 'Fetching GitHub Repositories', id: 'fetching-github-repositories' },
  {
    name: 'Filtering Repositories by Language',
    id: 'filtering-repositories-by-language',
  },
  { name: 'Getting the Top N Repositories', id: 'getting-top-n-repositories' },
  {
    name: 'Fetching pinned repositories',
    id: 'fetching-pinned-repositories',
    isNew: true,
  },
  {
    name: 'Language Distribution',
    id: 'language-distribution',
    isNew: true,
  },
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
              <a href={`#${documentationItem.id}`}>{documentationItem.name}</a>{' '}
              {documentationItem.isNew && (
                <span className="new-badge">new</span>
              )}
            </li>
          );
        })}
      </ul>
    </ResponsiveContentControl>
  );
};

export { DocumentationIndex };
