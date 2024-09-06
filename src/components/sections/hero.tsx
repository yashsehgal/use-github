import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';
import { useGitHub } from '../../hooks/use-github';

const HeroSection = (): JSX.Element => {
  const { getRepositories } = useGitHub({ username: 'yashsehgal' });
  return (
    <ResponsiveContentControl>
      <h1>useGitHub</h1>
      <p className="text-neutral-500">Utility hook for GitHub Rest API</p>
      <span>
        {getRepositories()
          .pinned()
          .map((repo) => repo.name)}
      </span>
    </ResponsiveContentControl>
  );
};

export { HeroSection };
