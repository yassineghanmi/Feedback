import React from "react";
import Card from "./shared/Card";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>
          Feedback – Powerful application to capture feedback of customers
          through tablets, smartphones and touch screen kiosks
        </p>
        <p>Version: 0.0.1</p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutUs;
