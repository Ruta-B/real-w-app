import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <a
            href="https://github.com/Ruta-B"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ruta Baumane
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ruta-B/real-w-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open -sourced on github{" "}
          </a>{" "}
          and netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
