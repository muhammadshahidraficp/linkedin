import React from 'react';
import HeaderOrganism from '../../Organisms/Header';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Feed: React.FC = () => {
    return (
        <div className="">
            <HelmetProvider>
                <Helmet>
                    <title>Feed | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            <HeaderOrganism />
            <div className='bg-gray-100 flex flex-1/5 mt-10'>
                <ProfileSideBar key="profile-side-bar" />
                <FeedPostSection />
                <Widget />
            </div>
        </div>
    );
}

export default Feed;