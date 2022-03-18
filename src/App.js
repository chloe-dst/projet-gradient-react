import React, { useState } from "react";
import Colorpicker from "./Colorpicker";
import Gradient from "./Gradient";

function App() {
  const [colors, setColors] = useState([
    {
      id: 1,
      hexa: "#657334" 
    }, 
    {
      id: 2,
      hexa: "#FFFFFF" 
    }, 
    {
      id: 3,
      hexa: "#000000" 
    }, 
  ]);

  const colorList = colors.map((color) => color.hexa).join(',');

  return (
    <div>
      {colors.map((color) => (
        <Colorpicker hexa={color.hexa} key={color.id} colors={colors} setColors={colors} />
      ))  }
      <Gradient colorList={colorList} colors={colors} /> 
    </div>
  );
}

export default App;
