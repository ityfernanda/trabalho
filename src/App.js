import logo from './skz.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Os melhores da quarta geração</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          skz <code>os melhores</code> !!

        </p>
        <a
          className="App-link"
          href="https://youtu.be/dBDkYofMUs4?si=FD_vs6uMoCsdYXfQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          clique aqui!!
        </a>
      </header>
    </div>
  );
}

export default App;
