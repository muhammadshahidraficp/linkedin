import styles from "./Post.module.css";
import InputOptions from "../../Atoms/AtomicInputOption";

import { Avatar } from "@mui/material";
import { ThumbsUpDown, ChatOutlined, ShareOutlined, SendOutlined } from "@mui/icons-material";
import { PostData } from "../../Organisms/FeedPostSection";

function Post({ post }: { post: PostData }) {
  return (
    <div className={styles.post}>
      <div className={styles.post__header}>
        <Avatar src={post.avatar} />
        <div className={styles.post__info}>
          <h2>{post.name}</h2>
          <p>{post.description}</p>
        </div>
      </div>
      <div className={styles.post__body}>
        {post.message}
        <div className="py-4">
          {!!post.imageUrl ? <img src={post.imageUrl} className="w-full" alt={`post-${post.imageUrl}`}/> : post.sourceUrl ? <div>
            <video width="100%" controls>
              <source src={post.sourceUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> : null}
        </div>
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
