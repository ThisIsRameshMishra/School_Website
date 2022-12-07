import React from "react";
import './styles/gallery.css';

const Gcard = (props) => {
  return (


    <>
            <h1 className="gh">{props.text}</h1>
              <div className="g_img_column">
                <div className="g_img_row">
                  <img  src={props.img} className="g_imgs" alt="..." />
                  
                </div>
                <div>

</div>
                </div>        


    </>
  );
};
export default Gcard;
