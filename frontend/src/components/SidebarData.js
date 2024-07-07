import { PiMonitorFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaTablet } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";

export const SidebarData = [
  {
    title: "Computers",
    path: "product-list/category/Computers",
    icon: <FaComputer />,
    cName: "nav-text",
  },
  {
    title: "Games",
    path: "product-list/category/Games",
    icon: <IoGameController />,
    cName: "nav-text",
  },
  {
    title: "Cameras",
    path: "product-list/category/Cameras",
    icon: <FaCamera />,
    cName: "nav-text",
  },
  {
    title: "Οθώνες",
    path: "product-list/category/Monitors",
    icon: <PiMonitorFill />,
    cName: "nav-text",
  },
  {
    title: "Ταινίες",
    path: "product-list/category/Movies",
    icon: <BiSolidCameraMovie />,
    cName: "nav-text",
  },
  {
    title: "Εκτυπωτές",
    path: "product-list/category/Printers",
    icon: <BsFillPrinterFill />,
    cName: "nav-text",
  },
  {
    title: "Software",
    path: "product-list/category/Software",
    icon: <SiPaloaltosoftware />,
    cName: "nav-text",
  },
  {
    title: "Tablets",
    path: "product-list/category/Tablets",
    icon: <FaTablet />,
    cName: "nav-text",
  },
  {
    title: "Βιβλία",
    path: "product-list/category/Books",
    icon: <FaBookOpen />,
    cName: "nav-text",
  },
];
