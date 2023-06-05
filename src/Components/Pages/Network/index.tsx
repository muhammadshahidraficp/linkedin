import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoleculeSibarMyNetwork from '../../Molecules/MoleculeSidebarMyNetwork';
import MoleculePendingInvitation from '../../Molecules/MoleculePendingInvitation';
import MoleculeCelebration from '../../Molecules/MoleculeCelebration';
import MoleculePeopleYouKnow from '../../Molecules/MoleculePeopleYouKnow';

const Network: React.FC = () => {

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
                    <title>Network | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
                <div className="loader"></div>
            ) : (<div className='bg-gray-100 min-h-screen'>
                <div className='grid grid-cols-4 gap-2 m-auto' style={{ maxWidth: "1500px" }}>
                    <MoleculeSibarMyNetwork />
                    <div className='col-span-3 mt-5 ml-5 mr-5'>
                        <MoleculePendingInvitation />
                        <MoleculeCelebration />
                        <MoleculePeopleYouKnow />
                    </div>
                </div> </div>)}
        </div>
    );
}

export default Network;