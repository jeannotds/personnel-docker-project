import Home from "@/components/Home/Home";
import React from "react";

export const dynamic = "force-dynamic";
const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Home />
    </div>
  );
};

export default HomePage;
