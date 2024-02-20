import React from "react";
import Card from "../assets/Card.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";
import Card5 from "../assets/Card5.png";
import Card6 from "../assets/Card6.png";
import Card7 from "../assets/Card7.png";

import backgroundImage from "./backgroundImage.jpg";

import "./Dashboard.css";
import { Sidebar, Navbar } from "../components";

export const Dashboard = () => {

  return (
    <div
      className="flex h-screen bg-gray-100 flex-col bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="flex w-full">
        <div className="w-3/8">
          <Sidebar />
        </div>
        <div className="w-full pt-4 h-full flex justify-around h-full bg-gradient-to-br from-yellow-100 to-green-200">
          <div>
            <img src={Card} className="w-80" />
            <img src={Card2} className="w-80" />
          </div>
          <div>
            <img src={Card3} className="w-80" />
            <img src={Card4} className="w-80" />
          </div>
          <div>
            <img src={Card5} className="w-80" />
            <img src={Card6} className="w-80" />
            <img src={Card7} className="w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};
