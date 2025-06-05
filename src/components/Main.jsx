import React from "react";
import "../Css/Main.css";
import Animation from "../components/animation";

export default function Main() {
  return (
    <main>
      <section>
        {" "}
        <div className="overlay">
          <div className="container"></div>
          <Animation />
        </div>
      </section>
      <div className="content">
      <img src="/" alt="" />
      </div>
    </main>
  );
}
