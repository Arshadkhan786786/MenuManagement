import React from "react";
import "./App.css";
const Card = ({ menuData }) => {
  return (
    <>
      {menuData.map((ele) => {
        return (
        <div className="container" key={ele.id}>
          <div className="serial">{ele.id}</div>
          <div className="name">{ele.Name}</div>
          <div className="type">{ele.Type}</div>
          <div className="desc">{ele.Description}</div>
          <img src={ele.image} alt="" />
        </div>
      )
      })}
    </>
  );
};

export default Card;
