import React  from "react";
import UserOveriew from "./UserOveriew";
import UserList from "./UserList";
import Overview from "./Overview";

const Dashboard = () => {
  
  return (
   <div className="w-full px-5 py-4 gap-4 flex flex-col">
    <Overview/>
    <UserOveriew/>
    <UserList />
   </div>
  );
};

export default Dashboard;
