import React from "react";
import "../Css/Main.css";
import Animation from "./animation";

export default function Main() {
  return (
    <main>
      <section>
        {" "}
        <div className="overlay">
          <div className="container"></div>
          <div className="wave-container">
            <svg id="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path id="wavePath" fill="#6c63ff" d="" />
            </svg>
          </div>
          <Animation />
        </div>
      </section>
    </main>
  );
}
