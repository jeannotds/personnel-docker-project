import React from "react";
import BennerHome from "./Banner/BennerHome";
import Statistics from "./Stat/Statistics";
import RecentTasks from "./Task/RecentTasks";
import RapidAccess from "./Task/RapidAccess";

const Home = () => {
  return (
    <div>
      <BennerHome />
      <Statistics />
      <div className="px-16 grid grid-cols-[70%_30%] w-full gap-8">
        <RecentTasks />
        <RapidAccess />
      </div>
    </div>
  );
};

export default Home;
