import React from "react";
import "../Css/Main.css";

export default function Main() {
  return (
    <main>
      <section>
        {" "}
        <div className="overlay">
          <div className="container"></div>
          {/* <Animation /> */}
        </div>
      </section>
      <div className="content1">
        <div className="modal1">
          <h1>
            MarketPlace<span>.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi
            impedit aliquid ea atque dignissimos similique accusantium, eius
            eaque nihil id eos ad assumenda sit ipsa veniam architecto
            perspiciatis tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A, animi impedit aliquid ea atque dignissimos
            similique accusantium, eius eaque nihil id eos ad assumenda sit ipsa
            veniam architecto perspiciatis tempora. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A, animi impedit aliquid ea atque
            dignissimos similique accusantium, eius eaque nihil id eos ad
            assumenda sit ipsa veniam architecto perspiciatis tempora. Lorem
          </p>
          <button>Visit our Products !</button>
        </div>
        <div className="modal2"></div>
      </div>
      <div className="content2">
        <div className="modal1"></div>
        <div className="modal2">
          <h1>
            Our Vision<span>.</span>{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur fugit distinctio ad repudiandae blanditiis tenetur et
            commodi, officiis est, explicabo nulla magnam velit iste saepe harum
            doloremque. Eligendi, eius consectetur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur fugit distinctio ad
            repudiandae blanditiis tenetur et commodi, officiis est, explicabo
            nulla magnam velit iste saepe harum doloremque. Eligendi, eius
            consectetur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequuntur fugit distinctio ad repudiandae blanditiis
            tenetur et commodi, officiis est, explicabo nulla magnam velit iste
            saepe harum doloremque. Eligendi, eius consectetur!
          </p>
          <button>Know more about us !</button>
        </div>
      </div>
      <div className="content3">
        <div className="modal1">
          <h1>
            Our Gaols<span>.</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            nesciunt! Commodi nobis sapiente eius consequatur explicabo eaque
            magnam dolorum. Esse delectus magni quidem eaque sequi amet sapiente
            quisquam deserunt accusamus?Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Maiores, nesciunt! Commodi nobis sapiente eius
            consequatur explicabo eaque magnam dolorum. Esse delectus magni
            quidem eaque sequi amet sapiente quisquam deserunt accusamus?Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
            nesciunt! Commodi nobis sapiente eius consequatur explicabo eaque
            magnam dolorum. Esse delectus magni quidem eaque sequi amet sapiente
            quisquam deserunt accusamus?
          </p>
          <button>Visit our Community !</button>
        </div>
        <div className="modal2"></div>
      </div>
    </main>
  );
}
