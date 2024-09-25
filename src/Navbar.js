import React from "react";
import './Navbar.css'
import menu from "./Menu";

const Navbar = ({setMenuData}) => {
    function filter(value){
        if (value==='All'){
            setMenuData(menu)
            return;
        }
        const arr = menu.filter((ele)=>{
            return ele.Type===value;
        })
        setMenuData(arr);

    }
  return (
    <div className="bigd">
      <button className="smalld" onClick={()=>{filter("Salad")}}>Salad</button>
      <button className="smalld" onClick={()=>{filter("Pasta")}}>Pasta</button>
      <button className="smalld" onClick={()=>{filter("Pizza")}}>Pizza</button>
      <button className="smalld" onClick={()=>{filter("All")}}>All</button>
    </div>
  );
};

export default Navbar;
