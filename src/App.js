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

        <div>&nbsp;</div>
        <a
          href="src/logo.svg"
          download="teste_visualdicas"
        >
          {" "}
          Download README{" "}
        </a>
        <div>&nbsp;</div>
        <div>&nbsp;</div>

      </header>
    </div>
  );
}

export default App;
