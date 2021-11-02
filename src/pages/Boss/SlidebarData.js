import React from "react";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import { FcGlobe } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FcExport } from "react-icons/fc";

export const SidebarData = [
  {
    title: "الاحصائيات",
    path: "/statics",
    icon: <FcComboChart/>,
    cName: "nav-text"
  },
  {
    title: "المناطق",
    path: "/regions",
    icon: <FcGlobe/>,
    cName: "nav-text"
  },

  {
    title: " المهندسين",
    path: "/Admin",
    icon: <FcBusinessman/>,
    cName: "nav-text"
  },
  {
    title: "تسكين المهندسين",
    path: "/Admin",
    icon: <FcBusinessman/>,
    cName: "nav-text"
  },
  {
    title: "تسجيل خروج",
    path: "/sign-in",
    icon: <FcExport/>,
    cName: "nav-text",
    // teet: logout()
  },
  // {
  //   title: "تسجيل خروج",
  //   path: "/",
  //   icon: <FaIcons.FaCartPlus/>,
  //   cName: "nav-text" 
  // },
];


  // {
  //   title: "الاشعارات",
  //   path: "/notifications",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text"
  // },