import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { Search } from "@mui/icons-material";
const Widget = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"1490774730017628161"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CPractice63"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widget;
