import AtomicHeaderOptions from "../../Atoms/AtomicHeader";
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from "react";
import { Search } from "@mui/icons-material";
import logo from "../../../Assets/logo.svg";

interface HeaderOrganismProps { }

const HeaderOrganism: React.FC<HeaderOrganismProps> = () => {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <div className="sticky top-0 bg-white border-b border-gray-200 flex justify-evenly w-full h-15 z-10">
            <div className="flex items-center justify-center h-full">
                <img src={logo} alt="logo" className="object-contain h-8 mr-3" />
                <div className="flex items-center h-5 rounded-5 p-10 bg-eef3f8">
                    <Search />
                    <input type="text" placeholder='search' className="bg-eef3f8" />
                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <div onClick={() => setSelectedTab("Home")} >
                    <AtomicHeaderOptions Icon={Home} title="Home" isSelected={selectedTab === "Home" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("My Network")} >
                    <AtomicHeaderOptions Icon={SupervisorAccount} title="My Network" isSelected={selectedTab === "My Network" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Jobs")} >
                    <AtomicHeaderOptions Icon={BusinessCenter} title="Jobs" isSelected={selectedTab === "Jobs" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Chat")} >
                    <AtomicHeaderOptions Icon={Chat} title="Chat" isSelected={selectedTab === "Chat" ? true : false} avatar={""} />
                </div>
                <div onClick={() => setSelectedTab("Notification")} >
                    <AtomicHeaderOptions Icon={Notifications} title="Notification" isSelected={selectedTab === "Notification" ? true : false} avatar={""} />
                </div>
                <AtomicHeaderOptions avatar="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" title="Me" />
            </div>
        </div>
    )
}

export default HeaderOrganism;