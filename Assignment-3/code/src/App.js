import React from "react";
import "./App.css";

const person = {
  name: "Alan Ford",
  EmployeeID: "00005152",
  email: "alan.form@email.nl",
  phone: "+31123456789",
  Appointment: "9:00 (24-05-2016)",
  Status: "In progress",
  Door: "Mark",
  time: "10:30 (25-05-2016)",
  image: "https://www.w3schools.com/howto/img_avatar.png",
  product_name: "Boltart Bosbessen",
  product_description:
    "This is some random description about the product mentioned above",
};

var arrow = "<";
function App() {
  return (
    <div className="site-container">
      <div className="emp-name-id">
        <div className="arrow">{"<"}</div>
        <div className="name-id">
          <div className="name">{person.name}</div>
          <div className="id">{person.EmployeeID}</div>
        </div>
        <div className="print">Print</div>
      </div>
      <div className="customer-info">
        <div className="appointment" style={{ marginLeft: "1vw" }}>
          <span style={{ fontWeight: "bolder" }}>Appointment:</span>
          {person.Appointment}
        </div>
        <div className="email" style={{ marginLeft: "1vw" }}>
          <span style={{ fontWeight: "bolder" }}>Email:</span>
          {person.email}
        </div>
        <div className="phone" style={{ marginLeft: "1vw" }}>
          <span style={{ fontWeight: "bolder" }}>Phone:</span>
          {person.phone}
        </div>
      </div>
      <div className="order-info">
        <div className="status">
          <div>
            <h3>Status</h3>
          </div>
          <div style={{ marginTop: "1vh" }}>
            <li>{person.Status}</li>
          </div>
        </div>
        <div className="door">
          <div>
            <h3>Door</h3>
          </div>
          <div style={{ marginTop: "1vh" }}>{person.Door}</div>
        </div>
        <div className="time">
          <div>
            <h3>Time</h3>
          </div>
          <div style={{ marginTop: "1vh" }}>
            <p>{person.time}</p>
          </div>
        </div>
      </div>
      <div className="product-list">
        <div className="checkbox-parent">
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="image">
          <img src={person.image} alt="person-image" />
        </div>
        <div className="description">
          <h2>{person.product_name}</h2>
          <p>{person.product_description}</p>
        </div>
        <div className="right-arrow">{">"}</div>
      </div>
    </div>
  );
}

export default App;
