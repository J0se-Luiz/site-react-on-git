import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div className="container">
          <div className="arrowRight">➔</div>
          <a
            className="colorLink"
            href="https://github.com/J0se-Luiz/site-react-on-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            Site estático React, publicado no github. clique aqui e leia o README
          </a>
        </div>

      </header>
    </div>
  );
}

export default App;
