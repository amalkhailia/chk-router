import React from "react";
import { Rate } from "antd";
import "./Raiting.css";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Raiting = ({FilterRaiting, movieRaiting, setValue,value}) => {
 

  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div className="raiting">
      {FilterRaiting ? 
        <span>
          <Rate tooltips={desc} onChange={handleChange} value={value} />
        </span>
       : 
        <span>
          <Rate disabled value={movieRaiting} />
        </span>
      }
    </div>
  );
};

export default Raiting;
