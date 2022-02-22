import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
      </div>
      <footer>
        This project was coded by Sarah Francis and is open-sourced on{" "}
        <a
          href="https://github.com/SarahKatherineFrancis/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
