import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const Introduction = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="introduction">
      <h2>Introduction</h2>
      <div className="space-y-2">
        <p>
          APIs are a big part of web development today, helping apps get
          real-time data from different sources.{' '}
          <a href="https://api.github.com" target="_blank" rel="noreferrer">
            GitHub&apos;s REST API
          </a>{' '}
          is one of the useful ones, letting you access details about user
          profiles, repositories, and programming languages in projects.
        </p>
        <p>
          To make it easier to work with this data in React apps, we&apos;ve
          created a custom hook called <code>useGitHub</code>. The{' '}
          <code>useGitHub</code> hook makes connecting to the GitHub API simple
          and takes care of the data you get from it. It fetches user info and
          repositories, handles errors, and lets you filter repositories by
          programming language. Using React-based tools for managing state and
          updates, the hook keeps the data current and easy to use, making it a
          practical tool for developers looking to add GitHub data to their
          apps.
        </p>
      </div>
    </ResponsiveContentControl>
  );
};

export { Introduction };
