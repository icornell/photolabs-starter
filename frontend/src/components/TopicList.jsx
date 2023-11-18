import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topicData, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((topic) => (
        <TopicListItem
          key={topic.id}
          topicId={topic.id}
          label={topic.title}
          onTopicClick={onTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
