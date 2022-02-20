import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by Sarah Francis and is open-sourced on{" "}
        <a href="">GitHub</a> and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
