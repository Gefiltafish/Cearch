import "./App.css";

function App() {
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Job search</label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea
            placeholder="Paste job description"
            style={{ height: "24rem", width: "36rem" }}
          ></textarea>
          <button type="submit">GO</button>
        </div>
      </form>
    </div>
  );
}

export default App;
