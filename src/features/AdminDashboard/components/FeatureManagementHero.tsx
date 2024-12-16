import Link from "next/link";
import React  from "react";
import {  AiOutlineMoneyCollect } from "react-icons/ai";

import { MdBorderClear } from "react-icons/md";
import FeatureData from "./FeatureData";

const FeatureManagementHero = () => {
  return (
    <div className="w-full p-8 bg-white">
      <div className="mb-10">
        <h1 className="text-[20px] text-black font-medium pb-1">Feature Management</h1>
        <p className="text-[#475367]">Switch on and off features on virtuo </p>
      </div>
      <div>
        <FeatureData />
      </div>
    </div>
  );
};

export default FeatureManagementHero;
