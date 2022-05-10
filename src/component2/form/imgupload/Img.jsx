import React ,{ useState } from 'react';
import "./Img.sass"
import avatar from "../../../assets/img/avatar3.png"

export const UploadAndDisplayImage = () => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
          console.log("picture: ", e.target.files);
          setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            setImgData(reader.result);
          });
          reader.readAsDataURL(e.target.files[0]);
        }
    };
    return (
        <div>
            <div className="img">
                <img  src={imgData ? imgData : avatar} alt="" />
                <i className="fa fa-camera cam">
                    <input 
                      type="file"
                      name="myImage"
                      onChange={onChangePicture}
                    />
                </i>

            </div>
            
        </div>
    );
}

