import "./App.css";
import { JobSearch } from "./JobSearch";
import SeaUrchin from "./assets/C-EARCH.png";

function App() {
  return (
    <div className="bg-base-100 w-screen h-screen">
      <img src={SeaUrchin} alt="Sea urchin" />
      <JobSearch />
    </div>
  );
}

export default App;
