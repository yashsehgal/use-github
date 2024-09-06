import React from 'react';
import { ResponsiveContentControl } from '../layouts/responsive-content-control';

const Conclusion = (): JSX.Element => {
  return (
    <ResponsiveContentControl id="conclusion">
      <h2>Conclusion</h2>
      <p>
        The <code className="inline-code">useGitHub</code> hook provides a
        powerful and flexible way to interact with GitHub's REST API within a
        React application. By abstracting away the complexities of API requests
        and data management, this hook allows developers to focus on building
        feature-rich applications that leverage real-time GitHub data. Whether
        you need to fetch user profiles, retrieve repositories, or filter them
        by language, this hook offers a straightforward and effective solution.
      </p>
      <a
        href="https://x.com/yashsehgaldev"
        target="_blank"
        rel="noreferrer"
        className="mt-12 block">
        yash
      </a>
    </ResponsiveContentControl>
  );
};

export { Conclusion };
