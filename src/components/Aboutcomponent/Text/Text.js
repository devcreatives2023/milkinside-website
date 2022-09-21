import React from "react";

const Text = ({ p1, p2, p3 }) => {
  return (
    <div
      className="px-6 w-[90%] xl:px-0 xl:w-[100%]
    lg:px-0 lg:w-[100%]
    xl:text-left"
    >
      <p className="mt-3">{p1} </p>
      <p className="mt-5">{p2}</p>
      <p className="mt-5">{p3} </p>
    </div>
  );
};

export default Text;
