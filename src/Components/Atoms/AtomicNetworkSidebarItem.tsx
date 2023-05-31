import { ReactElement } from "react";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface AtomicNetworkSidebarItemProps {
    title: string;
    value: any;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
}

const AtomicNetworkSidebarItem: React.FC<AtomicNetworkSidebarItemProps> = ({
    title,
    Icon,
    value
}): ReactElement => {
    return (
        <div className="flex ml-5 mt-2 justify-between mb-2" >
            <div className="flex">
                <Icon />
                <span className="text-sm text-gray-600 ml-3">
                    {title}
                </span>
            </div>
            <span className="text-sm text-gray-600 mr-4">
                {value}
            </span>
        </div>
    );
};

export default AtomicNetworkSidebarItem;