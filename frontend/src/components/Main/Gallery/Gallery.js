import React from "react";
import Gcard from "./gal_card";
import gdata from "./gdata";
import './styles/gallery.css';

const Gallery=()=>{
return(
    <>
    <div className="gall">
        {
            gdata.map((val,ind)=>{
                return <Gcard
                text={val.text}
                img={val.img}/>
            })
        }
    </div>
    </>
)
}
export default Gallery;