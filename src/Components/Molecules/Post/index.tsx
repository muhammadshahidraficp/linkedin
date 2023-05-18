import styles from "./Post.module.css";
import InputOptions from "../../Atoms/AtomicInputOption";

import { Avatar } from "@mui/material";
import { ThumbsUpDown, ChatOutlined, ShareOutlined, SendOutlined } from "@mui/icons-material";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <Avatar />
        <div className={styles.post__info}>
          <h2>Name</h2>
          <p>Description</p>
        </div>
      </div>
      <div className={styles.post__body}>
        Message goes here
      </div>
      <div className={styles.post__button}>
        <InputOptions IconComponent={ThumbsUpDown} title="Like" color="#70B5F9" />
        <InputOptions IconComponent={ChatOutlined} title="Comment" color="#70B5F9" />
        <InputOptions IconComponent={ShareOutlined} title="Share" color="#70B5F9" />
        <InputOptions IconComponent={SendOutlined} title="Send" color="#70B5F9" />
      </div>
    </div>
  );
}

export default Post;
