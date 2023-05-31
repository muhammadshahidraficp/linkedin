import React, { useEffect, useState } from 'react';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Notifications: React.FC = () => {

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
                    <title>Notifications | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
                <div className="loader"></div>
            ) : (<div className='bg-gray-100'>
                <div className='grid grid-cols-4 gap-2 m-auto' style={{ maxWidth: "1500px" }}>
                    <ProfileSideBar key="profile-side-bar" />
                    <div className='col-span-2'>
                        Notification
                    </div>
                    <Widget />
                </div> </div>)}
        </div>
    );
}

export default Notifications;