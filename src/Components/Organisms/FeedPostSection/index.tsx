import React from "react";
import AtomicInputOption from "../../Atoms/AtomicInputOption";
import Post from "../../Molecules/Post";

import Image from '@mui/icons-material/Image';
import Subscriptions from '@mui/icons-material/Subscriptions';
import EventNote from '@mui/icons-material/EventNote';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import { Avatar, Divider } from "@mui/material";

interface PostData {
  avatar: string;
  name: string;
  description: string;
  message: string;
}

const FeedPostSection: React.FC = () => {
  const posts: PostData[] = [
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
    { avatar: "", name: "Cybersquare", description: "baabte", message: "Lorem ipsum" },
  ];

  return (
    <div className="flex-2 mt-10 ml-10">
      <div className="py-4 pr-10 pl-10 bg-white mb-10 rounded-lg">
        <div className=" flex justify-center pb-4 items-center gap-2">
          <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{width:50, height:50}} />
          <input type="text" placeholder="Start a post" className="w-full items-center h-12 rounded-full px-3 font-bold text-sm focus-within:border-red-500 border"/>
        </div>
        <div className="flex justify-between">
          <AtomicInputOption IconComponent={Image} title="Photo" color="#70B5F9" />
          <AtomicInputOption IconComponent={Subscriptions} title="Video" color="#E7833E" />
          <AtomicInputOption IconComponent={EventNote} title="Event" color="#C0CBCD" />
          <AtomicInputOption IconComponent={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>
      <Divider sx={{mb: 4}} />
      {posts.map((post, index) => (
        <Post key={index} />
      ))}
    </div>
  );
}

export default FeedPostSection;
