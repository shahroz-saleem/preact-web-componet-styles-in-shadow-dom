import { h } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";

import Home from "./components/home";
import WC1 from "./components/shadowDomWebComp1";
import WC2 from "./components/shadowDomWebComp2";
import WC3 from "./components/shadowDomWebComp3";

const App = () => (
  <div id="app">
    <Header />
    <main>
      <Router>
        <Home path="/" />
        <WC1 path="/wc1" />
        <WC2 path="/wc2" />
        <WC3 path="/wc3" />
      </Router>
    </main>
  </div>
);

export default App;
