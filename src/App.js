import './App.css';
import { Navbar, Brand, CTA } from './components';
import { Features, Header, Possibility, WhatGPT3 } from './containers';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
    </div>
  );
}

export default App;
