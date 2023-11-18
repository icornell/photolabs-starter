import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span className="topic-list__item__title" onClick={() => props.handleTopicClick(props.label)}>
        {props.label}
      </span>
    </div>
  );
};

export default TopicListItem;
