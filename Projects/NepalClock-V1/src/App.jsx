import Heading from "./components/CurrentHeading";
import Slogan from "./components/CurrentSlogan";
import CurrentDate from "./components/CurrentDateTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <div>
        <Heading />
      </div>

      <div>
        <Slogan />
      </div>

      <div>
        <CurrentDate />
      </div>
    </center>
  );
}

export default App;
