import React from "react";
import img from "../../../assets/images/admission.jpg";
import "./styles/admission.scss";

const img1 =
  "https://ik.imagekit.io/snpublicschoolara/images/assembly.jpeg?updatedAt=1702019189127";
const Admission = () => {
  return (
    <>
      <div className="header">
        <div className="lefta">
          <p className="h1_add">ADMISSION</p>
        </div>
        <div className="righta">
          <img className="header_img" src={img1} />
        </div>
      </div>
      <div className="admissionprocess">
        <h1 className="adm_heading">Admission Process</h1>
        <h2 className="adm_lkg"> Admission to LKG and UKG</h2>
        <p className="adm_lkg_content">
          Students are admitted to L.K.G.. Applications for this class are
          ordinarily done two months prior to the commencement of the academic
          year. The dates of application are announced every year on the school
          Bulletin Board. The academic year begins in the first week of April.
        </p>

        <h2 className="adm_lkg"> Admission in Class I-VIII</h2>
        <p className="adm_lkg_content">
          Normally casual vacancies, if any, in other classes are filled in
          after the commencement of the academic year.
        </p>
        <h2 className="adm_lkg">
          {" "}
          Registration for Admission to Classes NUR to VIII (Session 2024-25)
        </h2>
        <p className="adm_lkg_content">
          <ul className="adm_bullet">
            <li>Registration for admission starts from 15th March 2024</li>
            <li>
              Registration forms are available at the School Reception - Counter
              & Online also.
            </li>
            <li>
              Timing for obtaining and submitting the duly filled up forms -
              [8:00 AM - 3:00 PM]
            </li>
            <li>
              Direct Admission is going on for the Classes - Nur to Std I.
            </li>
          </ul>
        </p>

        <h2 className="adm_lkg">
          {" "}
          Required Documents(Docments to be Submitted at the time of Admission)
        </h2>
        <p className="adm_lkg_content1">
          <ul className="adm_bullet">
            <li>Three passport size recent photographs of the student</li>
            <li>
              Passport size photograph of parents with student. (Family
              Photograph)
            </li>
            <li>
              Date of birth certificate from Competent Authority. [Xerox copy]
            </li>
            <li>Aadhar Card of parents and the student [Xerox copy]</li>
            <li>Voter ID Card of Parents [Xerox copy]</li>
            <li>Immunization Card of the Student [Xerox copy]</li>
            <li>Blood Group of the Student</li>
          </ul>
          <p className="note">
            <b>Note:</b> Any change will be displayed immediately.
          </p>
        </p>
        <div className="adm_division"></div>
        {/* Courses */}
        <h1 className="adm_heading">COURSES</h1>
        <h2 className="adm_lkg">1. Course of Studies</h2>
        <p className="adm_lkg_content">
          The School prepares the students for the All India Secondary School
          (Class I-VIII) and the All India Senior School Certificate
          Examinations (Class I-VIII) conducted by the Central Board of
          Secondary Education, New Delhi.
        </p>
        <h2 className="adm_lkg">2. Medium of Instruction</h2>
        <p className="adm_lkg_content1">
          Using the language of the child as medium of instruction has
          undeniable inherent educational advantages. For many years SN Public
          School has been following English medium of instruction in the Primary
          section, bilingual (Hindi and English) from Class I-VIII (Social
          Studies and Moral Science in Hindi) and English medium. However, over
          the years English has become a tool of empowerment in the world.
          Indeed it has become the most important language in the world today.
          This changes has taken place in india since globalization in early
          1990s. Therefore, in the changed context of today, we have decided to
          change the medium of instruction into English in the following phased
          out manner from academic year 2018-19.
        </p>
      </div>
    </>
  );
};
export default Admission;
