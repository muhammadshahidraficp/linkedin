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
import {RouteConstants} from "../../../Utility/RouteConstantUtility";
import {  useNavigate } from "react-router-dom";

interface HeaderOrganismProps { }

interface headerTabListType {
    title: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    navigationTo: string;
};

const HeaderOrganism: React.FC<HeaderOrganismProps> = () => {

    const navigate = useNavigate();
    
    const headerTabList: headerTabListType[] = [
        { title: "Home",icon:Home, navigationTo:RouteConstants.feed },
        { title: "My Network" ,icon:SupervisorAccount, navigationTo:RouteConstants.network},
        { title: "Jobs",icon: BusinessCenter, navigationTo:RouteConstants.jobs},
        { title: "Messaging",icon: Chat, navigationTo:RouteConstants.messaging},
        { title: "Notifications",icon:Notifications, navigationTo:RouteConstants.notifications }
    ];
    const [selectedTab, setSelectedTab] = useState(headerTabList[0].title);

    const [placeholder, setPlaceholder]=useState("Search");

    return (
        <div className="sticky top-0  border-b border-gray-200 flex justify-evenly z-10">
            <div className="flex items-center justify-center">
                <img src={logo} alt="logo" className="object-contain h-8 mr-3" />
                <div className="flex items-center h-10 rounded-md px-3 bg-eef3f8 focus-within:border-red-500 border">
                    <Search />
                    <input type="text" placeholder={placeholder} className="bg-eef3f8 border-none outline-none" />
                </div>
            </div>
            <div className="flex items-center justify-center h-full">
                <div className="flex flex-row gap-5">
                    {
                        headerTabList.map((tab) => <div onClick={() => { 
                                setSelectedTab(tab.title);
                                navigate(tab.navigationTo)
                                    setPlaceholder( tab.title === headerTabList[2].title ? "Search by title, skill, or company" : "Search");
                            }
                        } className="flex items-center">
                            <AtomicHeaderOptions key={tab.title} Icon={tab.icon} title={tab.title} isSelected={selectedTab === tab.title ? true : false} avatar={""} />
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