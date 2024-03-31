import React from "react";
import "./Usercard.css";
function User(props) {
  return (
    <div className="card-container">
      <span className="pro online">ONLINE</span>
      <img src="images/arunimg.jpeg" alt="userimg" className="img"></img>
      <h3>{props.name} </h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skills, index) => (
            <li key={index}>{skills}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default function Usercard() {
  return (
    <User
      name="ARUNKUMAR P"
      city="Coimbatore"
      description="FullStack Developer"
      skills={[
        "HTML",
        "CSS",
        "BOOTSTRAP",
        "REACT JS",
        "PYTHON",
        "MONGO DB",
        "NODE JS",
        "EXPRESS JS",
      ]}
    />
  );
}
