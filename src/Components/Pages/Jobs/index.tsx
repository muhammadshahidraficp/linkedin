import React, { useEffect, useState } from 'react';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoleculeSidebarJob from '../../Molecules/MoleculeSidebarJob';
import { buttonStyle } from '../../../Utility/constants';
import EditNoteIcon from '@mui/icons-material/EditNote';

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
            ) : ((<div className='bg-gray-100 min-h-screen'>
                <div className='grid grid-cols-4 gap-2 m-auto' style={{ maxWidth: "1500px" }}>
                    <div className='ml-10'>
                        <MoleculeSidebarJob key="profile-side-bar" />
                        <div className={`${buttonStyle} py-3 flex items-center justify-center`}>
                            <EditNoteIcon/>
                            Post a free job
                        </div>
                    </div>
                    <div className='col-span-2'>
                        Jobs
                    </div>
                    <Widget />
                </div> </div>))}
        </div>
    );
}

export default Jobs;