import './App.css';
import Main from './components/Main/Main.tsx'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav-container">
          <div className="nav-logo"></div>
          <div className="nav-links">
            <a>Mission</a>
            <a>Vision</a>
            <a>History</a>
            <a></a>
          </div>
        </nav>
      </header>
      <Main />
    </div>
  );
}

export default App;
