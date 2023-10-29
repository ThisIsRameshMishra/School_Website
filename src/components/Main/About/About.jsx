import React from "react";
import img from "../../../assets/images/admission.jpg";
import vis from "../../../assets/SchoolActivites/Vission.jpg";
import "./styles/about.scss";
const About = () => {
  return (
    <>
    <div className="aboutpage">
    <h1 className="aboutschool">ABOUT SN PUBLIC SCHOOL</h1>
    <h1 className="aboutus">About Us</h1>
    <hr className="line"/> 
      <div className="ourschool">
      
        <h1 className="os_heading">OUR SCHOOL</h1>
        <div>
          <img className="school_img" src={img} />
        </div>
        <p className="os_content">
          St. Michael’s High School, located at Digha Ghat in Patna, is a
          Catholic Missionary educational instition, founded in 1858, by the
          first Bishop of Patna, Dr. Anastasius Hartmann (of the Franciscan
          (Capuchin) Missionary Society). Begun as a boarding school for poor
          and orphan boys under the Catholic Chruch at Kurji, the School has
          witnessed tremendous growth in terms of strength of students on its
          rolls, and physical infrastructure. With over 3000 students (both boys
          and girls) on its rolls today, the school is poised for further growth
          as it moves into the 155th year of its founding. Since 1968, the
          School is managed by the Patna Jesuit Society, the Bihar provincial
          unit of the world-wide Catholic missionary organization called the
          Society of Jesus (Jesuit Society). Founded in 1540 by St. Ignatius of
          Loyola, the Society of Jesus has been active in the field of education
          throughout the world since its origin. In India, the Society of Jesus
          is presently running some 270 schools (Primary, middle and high), 80
          higher secondary/Inter-colleges, 45 degree colleges catering to some
          360,000 students belonging to different social classes, communities
          and linguistic groups, through the medium of ten regional languages
          and English. St. Michael’s High School is a Minority Charitable
          Institution affiliated to the Central Board of Secondary Education for
          the All India Secondary School Examination (Class X) and the All India
          Senior School Certificate Examination (Class XII).
        </p>
        <h1 className="os_heading">VISION & MISSION</h1>
        <div>
          <img className="school_img" src={vis} />
        </div>
        <p className="os_content">
          Jesuit Education is inspired by the life and teachings of Jesus
          Christ, the founder of Christianity. It is also based on the
          principles of CHARACTER formation elaborated by St. lgnatius of
          Loyola, the founder of the Society of Jesus. With Jesus Christ as our
          model and rooted in the charism of the Society of Jesus, the Patna
          Jesuits in their education ministry aim at the integral growth of
          their students, forming them to be women and men for others, persons
          of conscience, competence and compassionate commitment, and agents for
          building a just and humane society. We believe in a Christian social
          ethic which demands justice as an absolute requirement of faith in God
          as our Father and Mother and the acceptance of each other as brothers
          and sisters in God’s sight. The vision and the principles give Jesuit
          Educational Institutions a distinct character and set before the staff
          and the students high ideals of humanism and service. St. Michael’s
          High School is a Minority Charitable Institution affiliated to the
          Central Board of Secondary Education for the All India Secondary
          School Examination (Class X) and the All India Senior School
          Certificate Examination (Class XII).
        </p>
        <h1 className="os_heading">OUR MISSION</h1>
        <p className="os_content">
          The Jesuit-run St. Michael’s High School thus aims at making its own
          contribution towards a radical transformation of the present-day
          society so that the principles of social justice, equality of
          opportunity, genuine freedom and respect for the religious and moral
          values enshrined in the Constitution of India may prevail and the
          possibility of living a fully human existence may be open to all
          Indians. Our mission is to form young men and women for others, who
          will distinguish themselves by their academic excellence, sound
          character, spirit of selfless services, and leadership qualities. They
          will commit themselves to the task of ushering in the much needed
          radical transformation of present day social conditions and, thus,
          contribute towards building a just and eco-friendly human society
          where genuine freedom, equality of opportunities and respect for
          religious, moral and social values exist. We do all this with the aid
          of a committed, interactive and disciplined teaching-learning process
          based on the methodology evolved by our Founder, St. lgnatius of
          Loyola (lgnatian Pedagogical Paradigm-IPP), with its inter-play of
          context, experience, reflection, action and evaluation, and by
          creating an environment of trustful, open and friendly relationships
          in our Educational Institutions.
        </p>
        <h1 className="os_heading">AIMS & OBJECTIVES</h1>
        <p className="os_content">
          As Jesuit educators our effort is to develop our students into a fully
          human, fully Indian and truly modern person. We want our students to
          be intellectually competent, open to growth, to be religious and
          loving committed to faith and justice. We facilitate our students to
          realize the sense of worth and dignity of themselves and of others as
          human persons, especially of those whose human rights and dignity are
          violated and in need of liberation and protection. We strive towards
          the all-round integral developments of each student, a sound
          intellectual formation that develops all the cognitive, imaginative,
          affective, creative and spiritual dimensions of each student. In the
          integral development of student we give due emphasis to
          extra-curricular activities such as sports, inter and intra school
          tournaments, arts, music, debates etc. Implied in our education
          ministry is the task to go out into those frontiers of education where
          children are deprived of education due to various reasons. We pledge
          to eradicate illiteracy from the face of Bihar in a systematic and
          sustained manner. We, in collaboration with other’s, develop in our
          students a sense of personal as well as corporate responsibility for
          the family, the society, the nation and the world. This will be
          expressed and exercised in the living out their chosen careers and
          vocations.
        </p>
      </div>
      </div>
    </>
  );
};
export default About;
