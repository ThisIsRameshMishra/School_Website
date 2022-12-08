import React, { useState } from 'react';
import './styles/contact.css';

const Contact=()=>{
    const [data,setData]=useState({
        fullname:'',
        phonenumber:'',
        email:'',
        msg:''
    });
    const InputEvent=(event)=>{
const {name,value}=event.target;
setData((preval)=>{
    return{
        ...preval,
        [name]:value,
    }
})
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My phone number is ${data.phonenumber}. My email is ${data.email}. I want to say ${data.msg}  `);
    };
return(
    <>
    <div className="wholecontact">
    <div className="contactpage">
    <div className="contactheading">
    <p className="contacttext">CONTACT US</p>
    <div className="border"></div>
    <p className="schoolname">SN PUBLIC SCHOOL</p>

    </div>

    </div>
    <div className="reachus">
        <span className="addressheading">Reach Us</span>
        <div className="reachborder"></div>
        <div className="Add">
        <p className="text">Sy. No. 58 & 67, Kanthaiahana Palya Pipeline Road,</p>

<p className="text">Kaggalipura Kanakapura Road, Bangalore-560116</p>

<p className="text">Ph: +91 7338522728 / 7899762728</p>

<p className="text">E-Mail: davbangalore@gmail.com</p>
</div>
    </div>
    <div className="form">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                 name="fullname"
                                value={data.fullname}
                                onChange={InputEvent} 
                                placeholder="Enter Your Name" />
                               
                                
                            </div>



                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Gender</label>
                               <select class="form-control" id="gender">
                               <option>Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                               </select>
                               
                                
                            </div>





                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" 
                                 name="phonenumber"
                                value={data.phonenumber}
                                onChange={InputEvent}
                                placeholder="mobile number" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" 
                                 name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" />
                                
                               
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" 
                                 name="msg"
                                value={data.msg}
                                onChange={InputEvent}id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
    </div>
    </>
)
}
export default Contact;