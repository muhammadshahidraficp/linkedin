import AtomicHeaderOptions from "../../Atoms/AtomicHeader";
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from "react";
import { Search } from "@mui/icons-material";
import logo from "../../../Assets/logo.svg";
import Avatar from "@mui/material/Avatar";
import Profile from "./Profile";

interface HeaderOrganismProps { }

const HeaderOrganism: React.FC<HeaderOrganismProps> = () => {
    const [selectedTab, setSelectedTab] = useState("Home");
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
      };

    return (
        <div className="sticky top-0  border-b border-gray-200 flex justify-evenly z-10">
            <div className="flex items-center justify-center">
                <img src={logo} alt="logo" className="object-contain h-8 mr-3" />
                <div className="flex items-center h-5 rounded-5 p-2 bg-eef3f8">
                    <Search />
                    <input type="text" placeholder='search' className="bg-eef3f8 border-none" />
                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <div className="flex flex-row gap-20">
                {
                    ["" , "" , "" ,""].map(() =>   <div onClick={() => setSelectedTab("Home")} className="flex items-center">
                    <AtomicHeaderOptions Icon={Home} title="Home" isSelected={selectedTab === "Home" ? true : false} avatar={""} />
                </div>)
                }
                </div>
              
              
                {/* <div onClick={() => setSelectedTab("My Network")} className="flex items-center">
                    <AtomicHeaderOptions Icon={SupervisorAccount} title="My Network" isSelected={selectedTab === "My Network" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Jobs")} className="flex items-center">
                    <AtomicHeaderOptions Icon={BusinessCenter} title="Jobs" isSelected={selectedTab === "Jobs" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Chat")} className="flex items-center">
                    <AtomicHeaderOptions Icon={Chat} title="Chat" isSelected={selectedTab === "Chat" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Notification")} className="flex items-center">
                    <AtomicHeaderOptions Icon={Notifications} title="Notification" isSelected={selectedTab === "Notification" ? true : false} avatar={""} />
                </div> */}
                <div className="ml-20">
                <Profile />
                </div>
              
            </div>
        </div>
    )
}

export default HeaderOrganism;