import React from "react";
import NavBox from "./NavBox";

const HomePage = () => {
  return (
    <div>
      homepage
      <NavBox text="Up your longboarding game" />
      <NavBox text="Freestyle" nav={true} />
      <NavBox text="Dance" nav={true} />
      <NavBox text="Downhill" nav={true} />
    </div>
  );
};

export default HomePage;
