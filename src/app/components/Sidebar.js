'use client'
import { useState } from "react";
import { ChatBubbleOutline, } from "@mui/icons-material";
import  defaultBg from "../../../public/pexel.jpg"
import Image from "next/image";

const Sidebar = () => {
  return (
  <div className="flex">
  <div className="w-20 h-screen bg-blue-400">Sidebar</div>
    <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      <h1>Sidebar</h1>
    </div>
  </div>
 )};
export default Sidebar;
