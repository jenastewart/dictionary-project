import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="twilight" />
        </main>
        <footer className="App-footer">
          <small>Coded by Jena Stewart</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
