import { Avatar } from "@mui/material";
import styles from "./Header.module.css";
import React from 'react';



interface AtomicHeaderOptionsProps {
    avatar: string; Icon?: any; title: string; isSelected?: Boolean;
}

const AtomicHeaderOptions: React.FC<AtomicHeaderOptionsProps> = ({ avatar, Icon, title, isSelected }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer text-gray-500 ml-20">
            {Icon && <Icon fontSize="10px" />}
            {avatar && <Avatar src={avatar} className="object-contain-25" sizes="10px" />}
            <h3 className={isSelected ? styles.header__options__title_selected : styles.header__options__title}>
                {title}
            </h3>

        </div>
    )
}

export default AtomicHeaderOptions;