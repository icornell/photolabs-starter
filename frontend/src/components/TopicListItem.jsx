import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div
      className="topic-list__item"
      onClick={() => props.onTopicClick(props.topicId)}
    >
      <span className="topic-list__item__title">{props.label}</span>
    </div>
  );
};

export default TopicListItem;
