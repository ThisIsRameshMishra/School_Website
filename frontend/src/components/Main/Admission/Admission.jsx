import React from "react";
import img from "../../../assets/images/img.jpg"
import "./styles/admission.css"
const Admission=()=>{
return(
    <>
    <div className="header">
        <div className="lefta"><div className="leftb">
        <p className="h1_add">ADMISSION</p>
        <p>-</p>
        </div></div>
        <div className="righta">
        <img className="header_img" src={img}/>
        </div>
    </div>
    
    </>
)
}
export default Admission;