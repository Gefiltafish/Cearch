import data from "../api-response.json";
import SeaUrchin from "./assets/C-EARCH.png";

function Results() {
  return (
    <>
      <img src={SeaUrchin} alt="Sea urchin" />
      <h2>Results</h2>
      <ul className="" style={{ listStyle: "none" }}>
        {data.hits.hits[3].map((user, i) => (
          <li>
            <a
              target="_blank"
              href={`https://app.cinode.com/tretton37/organisation/employees/${user.id}/${user.seoId}`}
            >
              {user.firstname} {user.lastname}
            </a>
            {user.location ? ", " + user.location : ""},{" "}
            {i % 3 === 0 ? "Between Assignments" : "Currently Assigned"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Results;
