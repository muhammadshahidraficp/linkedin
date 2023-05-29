import React from "react";
import styles from "./Feed.module.css";
import AtomicInputOption from "../../Atoms/AtomicInputOption";
import Post from "../../Molecules/Post";

import Image from '@mui/icons-material/Image';
import Subscriptions from '@mui/icons-material/Subscriptions';
import EventNote from '@mui/icons-material/EventNote';
import CalendarViewDay from '@mui/icons-material/CalendarViewDay';
import { Avatar } from "@mui/material";
import { posts } from "../../Organisms/FeedPostSection";


const Feed: React.FC = () => {

  return (
    <div className={styles.feed}>
      <div className={styles.feed__input_container}>
        <div className={styles.feed__input}>
          <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
          <input type="text" placeholder="Start a post" />
        </div>
        <div className={styles.feed__input_options}>
          <AtomicInputOption IconComponent={Image} title="Photo" color="#70B5F9" />
          <AtomicInputOption IconComponent={Subscriptions} title="Video" color="#E7833E" />
          <AtomicInputOption IconComponent={EventNote} title="Event" color="#C0CBCD" />
          <AtomicInputOption IconComponent={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Feed;
