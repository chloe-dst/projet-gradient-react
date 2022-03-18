import React from "react";

export default function Colorpicker({id, hexa, colors, setColors }){
    const handleChange = (e) => {
        e.preventDefault();
        const key = e.target.id;
        const newColor = e.target.value;
        setColors(prev => [...prev.hexa, newColor]);
    }
    
    return (
      <>
        <label> Color {id} : 
          <input type="color" name="hexa" value={hexa} id={id} onChange={handleChange}/>
        </label>
        <br></br>
      </>
    )
  }