import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const HeroSection = (): JSX.Element => {
  return (
    <ResponsiveContentControl>
      <h1>useGitHub</h1>
      <p className="text-neutral-500">Utility hook for GitHub Rest API</p>
    </ResponsiveContentControl>
  );
};

export { HeroSection };
