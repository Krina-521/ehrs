import React from "react";
import {
  BsArrowBarLeft,
  BsFillDatabaseFill,
  BsFillPersonPlusFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
// import { IoIosPeople } from "react-icons/io";
// import { GiNurseMale, GiNurseFemale } from "react-icons/gi";
// import { RiNurseFill } from "react-icons/ri";
// import {
//   MdOutlineLocalPharmacy,
//   MdOutlineAccountBalance,
// } from "react-icons/md";
// import { ImLab } from "react-icons/im";
// import { BiReceipt } from "react-icons/bi";
// import { GrBaby } from "react-icons/gr";
import { TbReportMedical } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "../../common.constants";

import "./sideNav.css";

function SideNav() {
  // useEffect(() => {
  //   renderTabs();
  // }, []);

  const arr = [
    { key: 0, name: "Dashboard", icon: RxDashboard, link: AppRoutes.Dashboard },
    // { key: 1, name: "Data", icon: BsFillDatabaseFill, link: AppRoutes. },
    { key: 1, name: "Reports", icon: TbReportMedical, link: AppRoutes.Report },
    {
      key: 2,
      name: "Add Details",
      icon: BsFillPersonPlusFill,
      link: AppRoutes.AddDetails,
    },
    {
      key: 3,
      name: "Show Details",
      icon: BsFillPersonLinesFill,
      link: AppRoutes.ShowDetails,
    },
    { key: 4, name: "Profile", icon: CgProfile, link: AppRoutes.Profile },
  ];

  // const renderTabs = () => {
  //   const sideNav = document.getElementsByClassName("sideNav")[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     const anchorComp = document.createElement("a");
  //     anchorComp.classList.add("sideNavBtn");
  //     anchorComp.href = arr[i].link;
  //     const iconComp = document.createElement(arr[i].icon);
  //     const spanComp = document.createElement("span");
  //     spanComp.innerHTML = arr[i].name;
  //     anchorComp.appendChild(iconComp);
  //     anchorComp.appendChild(spanComp);
  //     sideNav.appendChild(anchorComp);
  //   }
  // };

  return (
    <div className="sideNav">
      <BsArrowBarLeft className="arrowBarLeft" />
      {arr.map((tabObj) => {
        return (
          <a href={tabObj.link} className="sideNavBtn">
            <tabObj.icon />
            <span>{tabObj.name}</span>
          </a>
        );
      })}

      {/*
      <BsArrowBarLeft className="arrowBarLeft" />
      <div className="sideNavBtn">
        <RxDashboard />
        <a href="/">Dashboard</a>
      </div>
      <a href="/" className="sideNavBtn">
        <BsFillDatabaseFill />
        <span>Data</span>
      </a>
      <div className="sideNavBtn">
        <TbReportMedical />
        <a href="/">Reports</a>
      </div>
      <div className="sideNavBtn">
        <BsFillPersonPlusFill />
        <a href="/">Add Details</a>
      </div>
      <div className="sideNavBtn">
        <BsFillPersonLinesFill />
        <a href="/">Show Details</a>
      </div>
      <div className="sideNavBtn">
        <CgProfile />
        <a href="/">Profile</a>
      </div>
      <div className="sideNavBtn">
        <GiNurseFemale />
        <a href="/">Nurses</a>
      </div>
      <div className="sideNavBtn">
        <MdOutlineLocalPharmacy />
        <a href="/">Pharmacist</a>
      </div>
      <div className="sideNavBtn">
        <ImLab />
        <a href="/">Laboratorists</a>
      </div>
      <div className="sideNavBtn">
        <MdOutlineAccountBalance />
        <a href="/">Accountants</a>
      </div>
      <div className="sideNavBtn">
        <BiReceipt />
        <a href="/">Receptionist</a>
      </div>
      <div className="sideNavBtn">
        <GrBaby />
        <a href="/">Birth Report</a>
      </div>
      <div className="sideNavBtn">
        <TbCross />
        <a href="/">Death Report</a>
      </div>
      <div className="sideNavBtn">
        <CgProfile />
        <a href="/">Profile</a>
  </div> */}
    </div>
  );
}
export default SideNav;

/* 
- Array of tabs content
- Loop over the list to render the tab component (<a>)

*/
