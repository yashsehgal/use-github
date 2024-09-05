import React from 'react';
import { Conclusion } from './components/sections/conclusion';
import { FetchGitHubRepositories } from './components/sections/docs/fetch-github-repositories';
import { FetchGitHubUserInfo } from './components/sections/docs/fetch-github-user-info';
import { FilteringRepositoriesByLanguage } from './components/sections/docs/filtering-repositories-by-language';
import { GettingTopNRepositories } from './components/sections/docs/getting-top-n-repositories';
import { HandlingErrors } from './components/sections/docs/handling-errors';
import { HookSignature } from './components/sections/docs/hook-signature';
import { Installation } from './components/sections/docs/installation';
import { DocumentationIndex } from './components/sections/documentation-index';
import { HeroSection } from './components/sections/hero';
import { Introduction } from './components/sections/introduction';

const App = (): JSX.Element => {
  return (
    <div className="App-container p-12 space-y-24 mb-56">
      <HeroSection />
      <Introduction />
      <DocumentationIndex />
      <Installation />
      <HookSignature />
      <FetchGitHubUserInfo />
      <FetchGitHubRepositories />
      <FilteringRepositoriesByLanguage />
      <GettingTopNRepositories />
      <HandlingErrors />
      <Conclusion />
    </div>
  );
};

export default App;
