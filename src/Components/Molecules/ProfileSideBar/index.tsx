import Avatar from '@mui/material/Avatar';
import React from 'react';
import Banner from "../../../Assets/banner.png";

const ProfileSideBar: React.FC = () => {

    // const recentItems = [{ "name": "Events" }, { "name": "Programming languages" },
    // { "name": "Groups" }, { "name": "Hash tags" }];


    return (<div className="flex sticky top-70 flex-1 h-fit-content mt-10 flex-col ml-10">
        <div className="flex flex-col rounded-tl-2xl rounded-tr-2xl items-center bg-white">
            <img src={Banner} alt="sidebar banner" />
            <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                alt="avatar" className="border-2 border-white" />
            <h2 >Monish Mohan V T</h2>
            <h4>Content development</h4>
        </div>

        {/* <div className={styles.sidebar__stats}>
            <SidebarStat text="Who has viewed your profile" data="121" />
            <SidebarStat text="Impressions of your post" data="33" />
        </div> */}
        {/* <div className={styles.sidebar__bottom}>
            <p>Recent</p>
            {
                recentItems.map((item, index) => {
                    return <RecentItems item={item} key={index} />
                })
            }
        </div> */}
    </div>);
}

export default ProfileSideBar;