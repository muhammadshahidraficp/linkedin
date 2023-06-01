import React, { useEffect, useState } from 'react';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoleculeSidebarJob from '../../Molecules/MoleculeSidebarJob';
import { buttonStyle } from '../../../Utility/constants';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface jobRecentSearchType {
    jobKeyword:string;
    count:number;
    subtitleInfo:string;
}


const Jobs: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);

    const jobList:jobRecentSearchType[] = [
        {jobKeyword:'nodejs',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'ai',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'flutter',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'modena',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'backend',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'baabtra',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'ios',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"},
        {jobKeyword:'nodejs',count:5,subtitleInfo:"Alert On · United Arab Emirates · Apply on LinkedIn"}
    ];

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
                    <div className='col-span-2 flex flex-col m-5'>
                        <div className='bg-white  rounded-2xl'>
                        <div className=' flex flex-row justify-between'>
                            <span className='ml-5 mt-2 font-bold text-base'>Recent job searches</span>
                            <div className={`mt-2 mr-2 w-20 h-8 flex justify-center items-center py-0.1 hover:bg-gray-100 hover:border-3 rounded-2xl cursor-pointer`}><span className="ml-1 text-xs text-ash font-semibold">Clear</span></div>
                        </div>
                        {
                        showMore?
                        jobList.map((option,index)=>{
                            return  <div className='mt-3 ml-5 mr-5'>
                                <div className='flex flex-row items-center'>
                                    {option.jobKeyword}
                                    <span className='text-green-500 font-bold ml-1 text-xs'>{option.count} new</span>
                                </div>
                                <span className='text-xs font-bold text-gray-400'>{option.subtitleInfo}</span>
                                <Divider/>
                            </div>
                        }): jobList.slice(0, 3).map((option,index)=>{
                            return  <div className='mt-3 ml-5 mr-5'>
                                <div className='flex flex-row items-center'>
                                    {option.jobKeyword}
                                    <span className='text-green-500 font-bold ml-1 text-xs'>{option.count} new</span>
                                </div>
                                <span className='text-xs font-bold text-gray-400'>{option.subtitleInfo}</span>
                                <Divider/>
                            </div>
                        }) }
                        <div className='flex justify-center h-20 items-center'>
                            <div className='text-blue-600 font-bold bg-blue-200 pl-2' onClick={()=>{setShowMore(!showMore)}}><span className='text-center'>{showMore?"Show less":"Show more"}</span> <KeyboardArrowDownIcon/></div>
                        </div>
                        </div>
                    </div>
                    <Widget />
                </div> </div>))}
        </div>
    );
}

export default Jobs;