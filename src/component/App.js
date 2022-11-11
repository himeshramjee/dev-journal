import logo from '../img/logo.svg';
import '../css/App.css';
import JournalEntry from './journal-entry.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DJ - The Dev Journal
        </p>
        <small>
          <p>A side project used to learn how to build&nbsp;
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          &nbsp;Web Applications.
          </p>
        </small>
      </header>

      <div className="App-body-left">
        <JournalEntry maxCharacterLimit={250} inputPlaceholderText="Write a journal entry..." />
      </div>

      <div className="App-body-right">
        {/* <JournalEntry maxCharacterLimit={250} inputPlaceholderText="Write a journal entry..." /> */}
      </div>
    </div>
  );
}

export default App;