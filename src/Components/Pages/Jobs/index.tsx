import React, { useEffect, useState } from 'react';
import HeaderOrganism from '../../Organisms/Header';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Jobs: React.FC = () => {

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
                    <title>Jobs | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
        <div className="loader"></div>
      ) : (<div>
            <HeaderOrganism />
            <div className='bg-gray-100 grid grid-cols-3 gap-2'>
                <ProfileSideBar key="profile-side-bar" />
                <FeedPostSection />
                <Widget />
            </div> </div>)}
        </div>
    );
}

export default Jobs;