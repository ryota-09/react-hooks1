import React, { useState } from "react";
import { useContext } from "react";

import { FragContext } from "../providers/FragProvider";

const Button = (props) => {
  const contextValue = useContext(FragContext);
  const check = () =>{
    console.log(contextValue);
    console.log(props.children);
  }

  return (
    <div>
      <button onClick={check} >ボタン</button>
      <p>{contextValue.name}</p>
    </div>
  );
}



export default Button;
