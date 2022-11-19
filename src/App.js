import './App.css';
import { Navbar, Brand } from './components';
import { Features, Header, WhatGPT3 } from './containers';

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
    </div>
  );
}

export default App;
