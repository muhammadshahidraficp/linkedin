import React, { useEffect, useState } from 'react';
import HeaderOrganism from '../../Organisms/Header';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Feed: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className="loader-container">
            <HelmetProvider>
                <Helmet>
                    <title>Feed | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
        <div className="loader"></div>
      ) : (<div>
            <HeaderOrganism />
            <div className='bg-gray-100 flex flex-1/5 '>
                <ProfileSideBar key="profile-side-bar" />
                <FeedPostSection />
                <Widget />
            </div> </div>)}
        </div>
    );
}

export default Feed;