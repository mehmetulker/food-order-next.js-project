import React from "react";

function Title({ children, addClass = "" }) {
  console.log(addClass);
  return <div className={`${addClass} font-dancing font-bold`}>{children}</div>;
}

export default Title;
