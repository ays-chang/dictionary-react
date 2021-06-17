import Dictionary from "./Dictionary";

import logo from "./fox_icon.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/ays-chang/dictionary-react"
            rel="noreferrer"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://creativealice.com" rel="noreferrer" target="_blank">
            Alice Chang
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
