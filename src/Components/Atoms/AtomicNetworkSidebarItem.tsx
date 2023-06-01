import { ReactElement } from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface AtomicNetworkSidebarItemProps {
    title: string;
    value: any;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    styleClass?:string;
}

const AtomicNetworkSidebarItem: React.FC<AtomicNetworkSidebarItemProps> = ({
    title,
    Icon,
    value,
    styleClass = "text-gray-600"
}): ReactElement => {
    return (
        <div className={`flex ml-5 mt-2 justify-between mb-2 ${styleClass}`} >
            <div className="flex">
                <Icon sx={{color:'gray'}}/>
                <span className="text-sm ml-3">
                    {title}
                </span>
            </div>
            <span className="text-sm mr-4">
                {value}
            </span>
        </div>
    );
};

export default AtomicNetworkSidebarItem;