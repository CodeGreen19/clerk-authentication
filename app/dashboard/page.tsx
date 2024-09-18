import { UserButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <UserButton />
    </div>
  );
};

export default Dashboard;
