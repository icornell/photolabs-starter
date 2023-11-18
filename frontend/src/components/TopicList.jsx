import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ( {topicData, handleTopicClick} ) => {
  console.log("test from topicList ", topicData);
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((data) => (
        <TopicListItem key={data.id} label={data.title} handleTopicClick={handleTopicClick}/>
      ))}
    </div>
  );
};

export default TopicList;
