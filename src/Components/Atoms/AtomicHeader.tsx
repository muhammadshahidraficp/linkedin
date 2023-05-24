import { Avatar } from "@mui/material";
import styles from "./Header.module.css";
import React from 'react';



interface AtomicHeaderOptionsProps {
    avatar: string; Icon?: any; title: string; isSelected?: Boolean;
}

const AtomicHeaderOptions: React.FC<AtomicHeaderOptionsProps> = ({ avatar, Icon, title, isSelected }) => {
    return (
        <div className="text-center">
            {Icon && <Icon fsx={{ width : '20px' , height:"20px" }}/>}
            {avatar && <Avatar src={avatar} className="object-contain-25" />}
            <h3 className={isSelected ? styles.header__options__title_selected : styles.header__options__title}>
                {title}
            </h3>

        </div>
    )
}

export default AtomicHeaderOptions;