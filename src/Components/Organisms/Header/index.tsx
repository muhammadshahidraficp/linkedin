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
                <div onClick={() => setSelectedTab("Home")} className="flex items-center">
                    <AtomicHeaderOptions Icon={Home} title="Home" isSelected={selectedTab === "Home" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("My Network")} className="flex items-center">
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
                </div>
                <div className="flex flex-col items-center cursor-pointer text-gray-500 ml-20">
                    <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className="object-contain-25" sizes="10px" />
                    <h3 onClick={toggleMenu} className="relative">Me</h3>
                </div>
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10">
                    {/* Menu items go here */}
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Item 3</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HeaderOrganism;