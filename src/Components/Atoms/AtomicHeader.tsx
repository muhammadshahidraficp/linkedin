import { Avatar, SvgIconTypeMap } from "@mui/material";
import styles from "./Header.module.css";
import React from 'react';
import { OverridableComponent } from "@mui/material/OverridableComponent";



interface AtomicHeaderOptionsProps {
    avatar: string; Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }; title: string; isSelected?: Boolean;
}

const AtomicHeaderOptions: React.FC<AtomicHeaderOptionsProps> = ({ avatar, Icon, title, isSelected }) => {
    return (
        <div className="text-center w-25">
            {Icon && <Icon color={isSelected?"error":"inherit"}/>}
            {avatar && <Avatar src={avatar} className="object-contain-25"/>}
            <h3>
                {title}
                {isSelected && <hr className="mt-1 border-b-2 border-black w-full" />} {/* Horizontal line */}
            </h3>

        </div>
    )
}

export default AtomicHeaderOptions;