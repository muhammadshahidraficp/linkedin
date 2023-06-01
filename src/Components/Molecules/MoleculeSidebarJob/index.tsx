
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import AtomicNetworkSidebarItem from '../../Atoms/AtomicNetworkSidebarItem';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import CheckIcon from '@mui/icons-material/Check';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

export interface MoleculeSidebarJobProp {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    title: string;
    value: any;
}


const MoleculeSidebarJob: React.FC = () => {
    const [showMore, setShowMore] = useState(true);

    const listOption: MoleculeSidebarJobProp[] = [
        { title: 'My jobs', icon: TurnedInIcon, value: '' },
        { title: 'Job alerts', icon: NotificationsIcon, value: '' },
        { title: 'Demonstrate skills', icon: CheckIcon, value: '' },
        { title: 'Interview prep', icon: SupervisorAccount, value: '' },
        { title: 'Premium resume insights', icon: SupervisorAccount, value: '' },
        { title: 'Job seeker guidance', icon: SmartDisplayIcon, value: '' },
        { title: 'Application settings', icon: SettingsIcon, value: '' }
    ];



    return (
        <div className="flex flex-col rounded-2xl bg-white mt-5">
            {listOption.map((option, index) => (
                <AtomicNetworkSidebarItem key={index} title={option.title} value={option.value} Icon={option.icon} styleClass="text-black font-bold mb-5 mt-5"/>
            ))}
        </div>
    );
};

export default MoleculeSidebarJob;
