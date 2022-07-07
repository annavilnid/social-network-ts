import React from "react";
import style from'./Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {DataType} from "../App";

export type MyPostsType = {
  posts: DataType["posts"]
}

export const Profile: React.FC<MyPostsType> = (props) => {
  return (
    <div className={style.profile}>
      <img className={style.picture}
           /*src={picture}*/
           src="https://img.freepik.com/free-vector/vector-illustration-mountains-ridge-morning-haze-panoramic-view_149326-1560.jpg?w=2000"
           alt="горы и деревья"/>
      <div>
        ava + description
      </div>
      <MyPosts posts={props.posts} />
    </div>
  );
}