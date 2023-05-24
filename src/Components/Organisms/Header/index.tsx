import AtomicHeaderOptions from "../../Atoms/AtomicHeader";
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import Home from '@mui/icons-material/Home';
import Chat from '@mui/icons-material/Chat';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from "react";
import { Search } from "@mui/icons-material";
import logo from "../../../Assets/logo.svg";
import Profile from "./Profile";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface HeaderOrganismProps { }

interface headerTabListType {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
};

const HeaderOrganism: React.FC<HeaderOrganismProps> = () => {
    const [selectedTab, setSelectedTab] = useState("Home");

    const headerTabList: headerTabListType[] = [{ title: "Home",icon:Home }, { title: "My Network" ,icon:SupervisorAccount}, { title: "Jobs",icon: BusinessCenter}, { title: "Messaging",icon: Chat}, { title: "Notifications",icon:Notifications }];

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
                        headerTabList.map((tab) => <div onClick={() => setSelectedTab(tab.title)} className="flex items-center">
                            <AtomicHeaderOptions Icon={tab.icon} title={tab.title} isSelected={selectedTab === "Home" ? true : false} avatar={""} />
                        </div>)
                    }
                </div>
                <div className="ml-20">
                    <Profile />
                </div>

            </div>
        </div>
    )
}

export default HeaderOrganism;