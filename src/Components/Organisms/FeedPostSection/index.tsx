import React, { useState } from "react";
import AtomicInputOption from "../../Atoms/AtomicInputOption";
import Post from "../../Molecules/Post";

import Image from '@mui/icons-material/Image';
import Subscriptions from '@mui/icons-material/Subscriptions';
import EventNote from '@mui/icons-material/EventNote';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import { Avatar, Dialog, Divider } from "@mui/material";

export interface PostData {
  avatar: string;
  name: string;
  description: string;
  message: string;
  type: string;
  sourceUrl?: string;
  thumbUrl?: string;
  imageUrl?: string;
}

export const posts: PostData[] = [
  {
    avatar: "https://i.pravatar.cc/300",
    name: "Cybersquare",
    description: "Trainer",
    message: "Visit our website today to learn more and sign up for a free trial",
    type: 'video',
    sourceUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbUrl: ""
  },
  {
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Vinu",
    description: "Google",
    message: "Software Engineer",
    type: 'photo',
    sourceUrl: '',
    thumbUrl: "",
    imageUrl: "https://placehold.co/600x400"
  },
  {
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Cybersquare",
    description: "baabte",
    message: "With XYZ Solution, you can streamline workflows, enhance productivity, and drive growth like never before. Our advanced features include real-time collaboration, automated task management, and powerful analytics. 💼",
    type: 'text',
    sourceUrl: '',
    thumbUrl: ""
  },
  {
    avatar: "",
    name: "Cybersquare",
    description: "baabte",
    message: "Excited to announce the launch of our new product! 🎉",
    type: 'video',
    sourceUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbUrl: ""
  },
  {
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Cybersquare",
    description: "baabte",
    message: "Lorem ipsum",
    type: 'photo',
    sourceUrl: '',
    thumbUrl: "",
    imageUrl: "https://placehold.co/600x400"
  },
  {
    avatar: "https://i.pravatar.cc/150?img=6",
    name: "Cybersquare",
    description: "baabte",
    message: "Lorem ipsum",
    type: 'text',
    sourceUrl: '',
    thumbUrl: ""
  },
];

const FeedPostSection: React.FC = () => {
  const [open, setOpen] = useState("");

  return (
    <div className="flex-2 mt-10 ml-10">
      {
        !!open ? <Dialog open={!!open} onClose={() => setOpen("")} sx={{ top: "0xp !important", bottom: "auto", borderRadius: 30 }} maxWidth="lg">
          <div className="p-8" style={{ minWidth: 600, minHeight: 300 }}>Create a {open}</div>
        </Dialog> : null
      }
      <div className="py-4 pr-10 pl-10 bg-white mb-10 rounded-lg">
        <div className=" flex justify-center pb-4 items-center gap-2">
          <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" sx={{ width: 50, height: 50 }} />
          <div className="w-full items-center h-12 rounded-full px-3 font-bold text-sm focus-within:border-red-500 border flex text-gray-400 cursor-pointer" onClick={() => setOpen("post")}>Start a post</div>
        </div>
        <div className="flex justify-between">
          <AtomicInputOption IconComponent={Image} title="Photo" color="#70B5F9" onClick={() => setOpen("photo")} />
          <AtomicInputOption IconComponent={Subscriptions} title="Video" color="#E7833E" onClick={() => setOpen("video")} />
          <AtomicInputOption IconComponent={EventNote} title="Event" color="#C0CBCD" onClick={() => setOpen("event")} />
          <AtomicInputOption IconComponent={CalendarViewDay} title="Write article" color="#7FC15E" onClick={() => setOpen("article")} />
        </div>
      </div>
      <Divider sx={{ mb: 4 }} />
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default FeedPostSection;
