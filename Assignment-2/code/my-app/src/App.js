import "./App.css";

function App({ employee }) {
  return (
    <div className="container">
      <img className="image" src={employee.profileImg} alt="employee-image" />
      <div className="info">
        <br />
        <h1 style={{ color: "dodgerblue" }}>{employee.name}</h1>
        <br />
        <h3 style={{ color: "darkgrey" }}>location</h3>
        <h2>{employee.location}</h2>
        <br />
        <h3 style={{ color: "darkgrey" }}>Blood Group</h3>
        <h2>{employee.bloodGroup}</h2>
        <br />
        <h3 style={{ color: "darkgrey" }}>Age</h3>
        <h2>{employee.age}</h2>
      </div>
    </div>
  );
}

export default App;
