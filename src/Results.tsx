import data from "../api-response.json";

function Results() {
  return (
    <>
      <h1>Results</h1>
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
