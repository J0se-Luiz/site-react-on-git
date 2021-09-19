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
        <a className="colorLink"
          href="https://github.com/J0se-Luiz/site-react-on-git/blob/56262b91852f36bff0d0d864687f0e79617198be/README.md"
        > 
          React + Github, click to see the README!
        </a>
        <div>&nbsp;</div>
        <div>&nbsp;</div>

      </header>
    </div>
  );
}

export default App;
