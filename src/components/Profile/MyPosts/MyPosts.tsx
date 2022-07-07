import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsType} from "../Profile";

export const MyPosts: React.FC <MyPostsType> = (props) => {

  const PostElement = props.posts.map((p) => <Post key={p.id} message={p.message} likesCounter={p.likesCounter} />)

  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>
        {PostElement}
      </div>
    </div>
  );
}