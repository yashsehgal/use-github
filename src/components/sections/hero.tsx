import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const HeroSection = (): JSX.Element => {
  return (
    <ResponsiveContentControl>
      <h1 className="text-xl">useGitHub</h1>
      <p className="text-neutral-500">Utility hook for GitHub Rest API</p>
    </ResponsiveContentControl>
  );
};

export { HeroSection };
