import React from 'react';
// Import the Conclusion section component
import { Conclusion } from './components/sections/conclusion';
// Import the component to fetch GitHub repositories
import { FetchGitHubRepositories } from './components/sections/docs/fetch-github-repositories';
// Import the component to fetch GitHub user information
import { FetchGitHubUserInfo } from './components/sections/docs/fetch-github-user-info';
// Import the component for filtering repositories by programming language
import { FilteringRepositoriesByLanguage } from './components/sections/docs/filtering-repositories-by-language';
// Import the component to get the top N repositories
import { GettingTopNRepositories } from './components/sections/docs/getting-top-n-repositories';
// Import the error handling documentation component
import { HandlingErrors } from './components/sections/docs/handling-errors';
// Import the hook signature documentation component
import { HookSignature } from './components/sections/docs/hook-signature';
// Import the installation guide component
import { Installation } from './components/sections/docs/installation';
// Import the documentation index or table of contents component
import { DocumentationIndex } from './components/sections/documentation-index';
// Import the hero section component
import { HeroSection } from './components/sections/hero';
// Import the introduction section component
import { Introduction } from './components/sections/introduction';
// Import the component to fetch pinned repositories
import { FetchingPinnedRepositories } from './components/sections/docs/fetch-pinned-repositories';
// Import the component to display GitHub language distribution
import { GitHubLanguageDistribution } from './components/sections/docs/github-language-distribution';

const App = (): JSX.Element => {
  return (
    <div className="App-container p-12 space-y-24 mb-24">
      <HeroSection />
      <Introduction />
      <DocumentationIndex />
      <Installation />
      <HookSignature />
      <FetchGitHubUserInfo />
      <FetchGitHubRepositories />
      <FilteringRepositoriesByLanguage />
      <GettingTopNRepositories />
      <FetchingPinnedRepositories />
      <GitHubLanguageDistribution />
      <HandlingErrors />
      <Conclusion />
    </div>
  );
};

export default App;
