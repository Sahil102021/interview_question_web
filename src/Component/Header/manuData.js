import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { Typography } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaC } from "react-icons/fa6";




let manuData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Resources",
    icon: <KeyboardArrowDownIcon  />,
    list: [
      {
        name: "python page",
        link: "/question/python",
        icon: <FaPython />,
      },
      {
        name: "C ++ page",
        link: "/question/c++",
        icon: <SiCplusplus />,
      },
      {
        name: "C page",
        link: "/question/c",
        icon: <FaC />,
      },
      {
        name: "javascript page",
        link: "/question/javascript",
        icon: <IoLogoJavascript />,
      },
      {
        name: "react js page",
        link: "/question/react",
        icon: <FaReact />,
      },
      {
        name: "node js page",
        link: "/question/node",
        icon: <FaNode />,
      },
    ],
  },
  {
    name: "Online IDE",
    icon: <KeyboardArrowDownIcon />,
    list: [
      {
        name: "Online C++ Complier",
        link: "https://www.programiz.com/cpp-programming/online-compiler/",
        icon: <FeaturedPlayListIcon />,
      },
      {
        name: "Online C Complier",
        link: "https://www.programiz.com/c-programming/online-compiler/",
        icon: <FeaturedPlayListIcon />,
      },
      {
        name: "Online pyton Complier",
        link: "https://www.programiz.com/python-programming/online-compiler/",
        icon: <FeaturedPlayListIcon />,
      },
      {
        name: "Online java Complier",
        link: "https://www.programiz.com/java-programming/online-compiler/",
        icon: <FeaturedPlayListIcon />,
      },
      {
        name: "Online JavaScript Complier",
        link: "https://www.programiz.com/javascript/online-compiler/",
        icon: <FeaturedPlayListIcon />,
      },
    ],
  },

  {
    name: "Events",
    link: "/event",
  },

  {
    name: "About",
    link: "/about",
  },
];

export default manuData;
