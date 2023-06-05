import React, { useEffect, useState } from 'react';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Divider } from '@mui/material';
import { Search, StarBorder, VideoCameraFront } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';

const Messaging: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedTab, setselectedTab] = useState("tab1");

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className="loader-container">
            <HelmetProvider>
                <Helmet>
                    <title>Messages | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
                <div className="loader"></div>
            ) : ((<div className='bg-gray-100 h-screen'>
                <div className='grid grid-cols-4 gap-2 m-auto' style={{ maxWidth: "1500px" }}>
                    <div className='h-50 w-25 bg-white rounded-2xl mt-5'>
                        <div className='font-bold text-black ml-5 mt-5 flex flex-row justify-between'>
                            Messaging
                            <div className='flex justify-between items-center gap-5'>
                                <MoreHorizIcon/>
                                <EditNoteIcon/>
                            </div>
                        </div>
                        <Divider style={{marginTop:5}}/>
                        <div className="my-2 mx-2 flex items-center h-8 rounded-md px-2 bg-eef3f8 focus-within:border-red-500 border justify-between">
                            <Search />
                            <input type="text" placeholder='Search mesages' className="bg-eef3f8 border-none outline-none" />
                            <TuneIcon/>
                        </div>
                        <div className="flex border-b">
                        <div
                            className={`flex-1 p-4 cursor-pointer font-bold ${
                                selectedTab === 'tab1' ? 'text-green-500 border-b-2 border-green-600' : ''
                            }`}
                            onClick={() => setselectedTab('tab1')}
                        >
                           Focused
                        </div>
                        <div
                            className={`flex-1 p-4 cursor-pointer font-bold ${
                                selectedTab === 'tab2' ? 'text-green-500  border-b-2 border-green-600' : ''
                            }`}
                            onClick={() => setselectedTab('tab2')}
                        >
                            others
                        </div>
                        </div>
                    </div>
                    <div className='col-span-2 h-50 w-25 bg-white rounded-2xl mt-5'>
                            <div className='h-screen'>
                                <div className='flex justify-between px-4 pt-2 pb-2 border-b border-gray-200 items-center'>
                                    <div>
                                        <span>Muhammed Shahid Rafi CP</span>
                                        <div className='text-sm text-gray-400'>Software Engineer</div>
                                    </div>
                                    <div className='flex gap-4'>
                                            <MoreHorizIcon />
                                            <VideoCameraFront />
                                            <StarBorder />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <Widget />
                </div> </div>))}
        </div>
    );
}

export default Messaging;