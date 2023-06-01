import React, { useEffect, useState } from 'react';
import FeedPostSection from '../../Organisms/FeedPostSection';
import ProfileSideBar from '../../Molecules/ProfileSideBar';
import Widget from "../../Molecules/Widget";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Avatar } from '@mui/material';

interface notificationType {
    name:string;
    title:string;
    subTitle:string;
    reactionCount:number;
    time:string;
    avatar:string;
}

const Notifications: React.FC = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [selectedButton, setselectedButton] = useState("All");

    const notifications:notificationType[]= [
        {
            name:'Chetan Nanda',
            title:' liked your post',
            subTitle:'Have you ever wondered how #blockchain technology works? 🤔',
            reactionCount:44,
            time:"8 hours ago",
            avatar:'1'
        },
        {
            name:'Ravui',
            title:'Chetan Nanda liked your post',
            subTitle:'Have you ever wondered how #blockchain technology works? 🤔',
            reactionCount:1,
            time:"5 hours ago",
            avatar:'2'
        },
        {
            name:'Muhammad',
            title:'Chetan Nanda liked your post',
            subTitle:'Have you ever wondered how #blockchain technology works? 🤔',
            reactionCount:9,
            time:"8 day ago",
            avatar:'3'
        },
        {   name:'bilal',
            title:'Chetan Nanda liked your post',
            subTitle:'Have you ever wondered how #blockchain technology works? 🤔',
            reactionCount:45,
            time:"1 week ago",
            avatar:'4'
        }
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
                    <title>Notifications | LinkedIn</title>
                </Helmet>
            </HelmetProvider>
            {isLoading ? (
                <div className="loader"></div>
            ) : (<div className='bg-gray-100 min-h-screen'>
                <div className='grid grid-cols-4 gap-2 m-auto' style={{ maxWidth: "1500px" }}>
                    <div className='rounded-2xl bg-white h-24 w-50 mt-5'> 
                        <div className='font-bold ml-5 mt-5'>Manage your Notifications</div>
                        <p className="ml-2 mt-5 hover:underline text-blue-500 font-bold text-sm">View Settings</p>
                    </div>
                    <div className='col-span-2'>
                        <div className='mt-5'>
                            <div className='rounded-2xl bg-white h-20 w-50 mt-5 flex flex-row justify-start'>
                                <div className='flex justify-center h-20 items-center gap-3 ml-5'>
                                    <div onClick={()=>{setselectedButton("All")}} className={`border font-bold  pl-2 rounded-2xl py-3 px-4 ${selectedButton=='All'?'bg-green-500 text-white':null}`} ><span className='text-center'>All</span></div>
                                    <div onClick={()=>{setselectedButton("myPost")}} className={`border font-bold pl-2 rounded-2xl py-3 px-4 ${selectedButton=='myPost'?'bg-green-500 text-white':null}`} ><span className='text-center'>My Posts</span></div>
                                    <div onClick={()=>{setselectedButton("mentions")}} className={`border font-bold pl-2 rounded-2xl py-3 px-4  ${selectedButton=='mentions'?'bg-green-500 text-white':null}`} ><span className='text-center'>Mentions</span></div>
                                </div>
                            </div>
                            <div className='rounded-2xl bg-white h-full w-50 mt-5 flex flex-col '>
                                {
                                    notifications.map((notification,index)=>{
                                        return <div className="flex gap-2 my-2">
                                        <Avatar src={`https://i.pravatar.cc/150?img=${notification.avatar}`} sx={{width: 50, height: 50}} />
                                        <div className='flex flex-col'>
                                            <div className="flex flex-row gap-2">
                                                <span className="font-bold block hover:bg-gray-200">{notification.name}</span> <span>{notification.title}</span>
                                            </div>
                                            <div className="text-xs hover:bg-gray-200 border p-6">{notification.subTitle}</div>
                                            <div className="text-xs hover:bg-gray-200">{notification.reactionCount} Reactions</div>
                                        </div>
                                    </div>
                                    })
                                }
                            </div>
                        <div>
                    </div>    
                </div>
            </div>
        <Widget />
                </div> </div>)}
        </div>
    );
}

export default Notifications;