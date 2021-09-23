import React from "react";

const ColorfulMessage = (props) => {
  const { color, messeage } = props;
  const contentStyle = {
    color,
    fontsize: "20px"
  };
  return <p style={contentStyle}>{messeage}</p>;
};

export default ColorfulMessage;
