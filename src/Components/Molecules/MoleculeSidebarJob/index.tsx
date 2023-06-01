
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import AtomicNetworkSidebarItem from '../../Atoms/AtomicNetworkSidebarItem';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';

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
        { title: 'My jobs', icon: SupervisorAccount, value: '' },
        { title: 'Job alerts', icon: SupervisorAccount, value: '' },
        { title: 'Demonstrate skills', icon: SupervisorAccount, value: '' },
        { title: 'Interview prep', icon: SupervisorAccount, value: '' },
        { title: 'Premium resume insights', icon: SupervisorAccount, value: '' },
        { title: 'Job seeker guidance', icon: SupervisorAccount, value: '' },
        { title: 'Application settings', icon: SupervisorAccount, value: '' }
    ];



    return (
        <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl bg-white mt-5 ml-10">
            {listOption.map((option, index) => (
                <AtomicNetworkSidebarItem key={index} title={option.title} value={option.value} Icon={option.icon} styleClass="text-black font-bold"/>
            ))}
        </div>
    );
};

export default MoleculeSidebarJob;
