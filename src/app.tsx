import { HeroSection } from './components/sections/hero';
import { Introduction } from './components/sections/introduction';

const App = (): JSX.Element => {
  return (
    <div className="App-container p-12 space-y-12">
      <HeroSection />
      <Introduction />
    </div>
  );
};

export default App;
