import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <a>Hello there!</a>
        <p>
          I was changed!
        </p>
      </header>
    </div>
  );
}

export default App;
