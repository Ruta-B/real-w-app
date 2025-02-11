import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
