import React from 'react';
import { Helmet } from 'react-helmet';
import HeaderOrganism from '../../Organisms/Header';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";

const Feed: React.FC = () => {
    return (
        <div className="">
            <Helmet>
                <title>Feed | LinkedIn</title>
            </Helmet>
            <HeaderOrganism />
            <div className='bg-gray-100 flex flex-1/5 mt-10'>
                <ProfileSideBar />
                <FeedPostSection />
                <Widget />
            </div>
        </div>
    );
}

export default Feed;