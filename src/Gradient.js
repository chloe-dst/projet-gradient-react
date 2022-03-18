import React, { useState } from "react";

export default function Gradient({colorList}){
const GradientColors = "linear-gradient("+colorList+")";

return (
  <div>
    <h2>Mon gradient</h2>
    <div style={{
        height:"100px", 
        background: GradientColors
      }}
    ></div>
    <p>{GradientColors}</p>
  </div>
)
}