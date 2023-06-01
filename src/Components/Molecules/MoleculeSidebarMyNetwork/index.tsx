
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import AtomicNetworkSidebarItem from '../../Atoms/AtomicNetworkSidebarItem';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useState } from 'react';

export interface MoleculeSibarMyNetworkProp {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    title: string;
    value: any;
}


const MoleculeSibarMyNetwork: React.FC = () => {
    const [showMore, setShowMore] = useState(true);

    const listOption: MoleculeSibarMyNetworkProp[] = [
        { title: 'Connections', icon: SupervisorAccount, value: 1172 },
        { title: 'Contacts', icon: SupervisorAccount, value: 4286 },
        { title: 'Following and followers', icon: SupervisorAccount, value: '' },
        { title: 'Groups', icon: SupervisorAccount, value: 100 },
        { title: 'Events', icon: SupervisorAccount, value: 8 },
        { title: 'Pages', icon: SupervisorAccount, value: 645 },
        { title: 'Newsletters', icon: SupervisorAccount, value: 17 },
        { title: 'Hashtags', icon: SupervisorAccount, value: 384 }
    ];



    return (
        <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl bg-white mt-5 ml-10">
            <span className='text-left ml-5 mt-5'>Mangage my network</span>
            {showMore ? listOption.map((option, index) => (
                <AtomicNetworkSidebarItem key={index} title={option.title} value={option.value} Icon={option.icon} />
            )): <AtomicNetworkSidebarItem title={listOption[0].title} value={listOption[0].value} Icon={listOption[0].icon} />}
            <span onClick={()=> setShowMore(s=> !s)} className="px-6 mt-4 text-gray-500 cursor-pointer">Show {showMore ? "less": "more"}</span>
        </div>
    );
};

export default MoleculeSibarMyNetwork;
