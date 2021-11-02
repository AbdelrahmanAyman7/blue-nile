import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "الاحصائيات",
    path: "/statics",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "المناطق",
    path: "/regions",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  // {
  //   title: "الاشعارات",
  //   path: "/notifications",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text"
  // },
  {
    title: "المهندسين",
    path: "/Admin",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  // {
  //   title: "الدعم",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text"
  // }
];
