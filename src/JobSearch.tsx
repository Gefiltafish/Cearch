import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const JobSearch = () => {
  const [showResults, setShowResults] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 1500);
  };
  const handleGoPress = () => {
    navigate("/results");
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Job search</label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <textarea
              placeholder="Paste job description"
              style={{ height: "24rem", width: "36rem" }}
            ></textarea>
            <button type="submit">Generate</button>
          </div>
        </form>
      </div>
      {isLoading && <span>Loading...</span>}
      {showResults && (
        <div style={{ height: "24rem", width: "36rem" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <label>Typescript</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Java</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>React</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Preact</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Management</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Vue</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Angular</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Friendly</label>
              <input type="checkbox" defaultChecked></input>
            </li>
            <li>
              <label>Office bound</label>
              <input type="checkbox" defaultChecked></input>
            </li>
          </ul>
          <button type="button" onClick={handleGoPress}>
            Find consultants
          </button>
        </div>
      )}
    </div>
  );
};
