import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
const TweetBox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1488613700693262336/SxPYk_L6_400x400.jpg" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter Image URL"
          className="tweetbox__imageInput"
        />
        <Button className="tweetbox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
