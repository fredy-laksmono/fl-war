import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HowToPlay from "./components/HowToPlay";
import About from "./components/About";
import NewAccount from "./components/NewAccount";
import Account from "./components/Account";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Home new="true" />} />
          <Route path="/new/:userId/:name" element={<NewAccount />} />
          <Route path="/howToPlay" element={<HowToPlay />} />
          <Route path="/about" element={<About />} />
          <Route path="/account/:userId" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
