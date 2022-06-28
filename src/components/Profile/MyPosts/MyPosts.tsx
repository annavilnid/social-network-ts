import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
          <button>Add post</button>
          <button>Remove post</button>
      </div>
      <div className={style.posts}>
        <Post message={"Hi, how are you?"} likesCounter={5} />
        <Post message={"It's my first post"} />
        </div>
    </div>
  );
}