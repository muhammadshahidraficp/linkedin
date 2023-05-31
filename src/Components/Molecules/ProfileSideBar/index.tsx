import Avatar from '@mui/material/Avatar';
import React from 'react';
import Banner from "../../../Assets/banner.png";
import AtomicSideBarStat from '../../Atoms/AtomicSideBarStat';
import styles from "../../Atoms/AtomicSideBarStat.module.css";
import AtomicRecentItem from '../../Atoms/AtomicRecentItem';

interface recentItemType {
    name: string
}


const ProfileSideBar: React.FC = () => {

    const recentItems: recentItemType[] = [{ name: "Events" }, { name: "Programming languages" },
    { name: "Groups" }];


    return (<div className="flex sticky top-70 flex-1 h-fit-content mt-10 flex-col ml-10">
        <div className="sticky top-0 flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
            <img src={Banner} alt="sidebar banner" />
            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="avatar" className="border-2 border-white" />
            <h2 >Muhammad Shahid Rafi C P</h2>
            <h4>Content development</h4>
        </div>
        <div className={styles.sidebar__stats}>
            <AtomicSideBarStat text="Who has viewed your profile" value="121" />
            <AtomicSideBarStat text="Impressions of your post" value="33" />
        </div>
        <div className={styles.sidebar__bottom}>
            <p>Recent</p>
            {
                recentItems.map((item, index) => {
                    return <AtomicRecentItem name={item.name} key={index} />
                })
            }
        </div>
    </div>);
}

export default ProfileSideBar;