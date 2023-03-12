import React from "react";
import i1 from "../../../assets/SchoolActivites/sn13_directors.jpeg";

const Messagebox = () => {
  return (
    <>
      <section className="director-section">
        <div className="dir-container">
          <div className="row">
            <div className="direc-image">
              <img className="diri-img" src={i1} />
            </div>
            <div className="dir-msg">
              <h2 className="director-heading">Director's Message</h2>
              <h5 className="quote">
                "There will always be a reason why you meet people. Either you
                need them to change your life or you're the one that will change
                theirs"
              </h5>
              <p className="msg1">
                Welcome to our new school, where learning is an adventure and
                curiosity is celebrated! We are excited to offer a dynamic and
                engaging educational experience for students of all ages. Our
                school is designed to meet the needs of today's learners, with
                state-of-the-art facilities, modern technology, and a range of
                extracurricular activities to foster creativity and growth. We
                are committed to providing a safe and inclusive learning
                environment that encourages critical thinking, problem-solving,
                and collaboration.
              </p>
              <p className="msg2">
                At our school, students will benefit from a diverse and highly
                qualified team of educators who are passionate about teaching
                and dedicated to helping each child reach their full potential.
                Our curriculum is designed to meet the highest academic
                standards while also promoting social-emotional learning and
                character development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Messagebox;
