import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
const Feed = () => {
  return (
    <div className="feed">
      {/* Header */}

      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
      <Post
        displayName={"Aryan Sharma"}
        username={"dumbTryingLuck"}
        verified={false}
        text={"Hello World! My first react project"}
        image={"https://c.tenor.com/fJQ_h8L3ox0AAAAC/drake-lets-go.gif"}
        avatar={
          "https://pbs.twimg.com/profile_images/1488613700693262336/SxPYk_L6_400x400.jpg"
        }
      />
    </div>
  );
};

export default Feed;
