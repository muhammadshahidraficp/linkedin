
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import AtomicNetworkSidebarItem from '../../Atoms/AtomicNetworkSidebarItem';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface MoleculeSibarMyNetworkProp {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    title: string;
    value: any;
}


const MoleculeSibarMyNetwork: React.FC = () => {

    const listOption: MoleculeSibarMyNetworkProp[] = [
        { title: 'Connections', icon: SupervisorAccount, value: 120 },
        { title: 'Contacts', icon: SupervisorAccount, value: 120 },
        { title: 'Following and followers', icon: SupervisorAccount, value: 120 },
        { title: 'Groups', icon: SupervisorAccount, value: 120 },
        { title: 'Events', icon: SupervisorAccount, value: 120 },
        { title: 'Pages', icon: SupervisorAccount, value: 120 },
        { title: 'Newsletters', icon: SupervisorAccount, value: 120 },
        { title: 'Hashtags', icon: SupervisorAccount, value: 120 }
    ];



    return (
        <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl bg-white mt-5 ml-10">
            <span className='text-left ml-5 mt-5'>Mangage my network</span>
            {listOption.map((option, index) => (
                <AtomicNetworkSidebarItem key={index} title={option.title} value={option.value} Icon={option.icon} />
            ))}
        </div>
    );
};

export default MoleculeSibarMyNetwork;
