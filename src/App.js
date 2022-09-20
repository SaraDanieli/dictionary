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
      </div>
    </div>
  );
}

export default App;
