//import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <span>
              <FontAwesomeIcon icon={faComment} size="lg" />
            </span>
            Dictionary
          </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="friend" />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/sara-danieli-55399b213/">me</a>{" "}
          and it is open-sourced on{" "}
          <a href="https://github.com/SaraDanieli/dictionary">GitHub</a> and
          hosted on{" "}
          <a href="https://dashing-rugelach-af4053.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
