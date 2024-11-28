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
          <small>
            Coded by{" "}
            <a
              href="https://github.com/jenastewart"
              target="_blank"
              rel="noreferrer"
            >
              Jena Stewart,{" "}
            </a>
            is open-sourced on{" "}
            <a
              href="https://github.com/jenastewart/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://jenas-dictionary-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
