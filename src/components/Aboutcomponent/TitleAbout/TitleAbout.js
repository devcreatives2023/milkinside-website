import React from "react";

const TitleAbout = ({ title }) => {
  return (
    <div>
      <h1
        className="xl:text-[2rem] lg:text-[1.5rem] capitalize text-lg w-[90%] px-3 xl:w-[100%] lg:w-[100%] xl:px-0 lg:px-0
       leading-[40px]"
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleAbout;
