import React from "react";
import "./Sidebar.css"
import TwitterIcon from "@mui/icons-material/BarChartRounded";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LocalPostOfficeRoundedIcon from '@mui/icons-material/LocalPostOfficeRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import SidebarOptions from "./SidebarOptions";
import { Button } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Our Icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/* Home Option */}
      <SidebarOptions active text={"Home"} Icon={HomeRoundedIcon}/>
      {/* Search Option */}
      <SidebarOptions text={"Search"} Icon={SearchRoundedIcon}  />
      {/* Notification Option */}
      <SidebarOptions text={"Notification"} Icon={NotificationsRoundedIcon} />
      {/* Direct Message Option */}
      <SidebarOptions text={"Direct Message"} Icon={LocalPostOfficeRoundedIcon} />
      {/* Crypto Price Option */}
      <SidebarOptions text={"Crypto Price"} Icon={SavingsRoundedIcon} />
      {/* Misc Option (Contains settings, contact us) */}
      <SidebarOptions text={"Settings"} Icon={MiscellaneousServicesRoundedIcon} />

      {/* Tweet Option */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>Post</Button>
    </div>
  );
};

export default Sidebar;
