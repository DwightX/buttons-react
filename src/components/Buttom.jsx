import React from "react";
import cn from "classnames";
import '../typography.css';

// Defining the HTML tag that the component will support
// Create a functional component that take 
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component
const Button = ({ variant,starticon,endicon,children,size,color,disabled}) => {
// If the variant exists in variantsMapping, we use it. 
// Otherwise, use p tag instead.

  return (
    <button
      className={variant || size || color} starticon={starticon} endicon={endicon} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;