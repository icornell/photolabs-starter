import React, { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({
  isFavs,
  toggleFavClick,
  setPhotoDetailsInModal,
  photoData,
  topicData,
  onTopicClick,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topicData={topicData}
        isFavPhotoExist={isFavs.length > 0}
        onTopicClick={onTopicClick}
      />
      <PhotoList
        photoData={photoData}
        isFavs={isFavs}
        toggleFavClick={toggleFavClick}
        setPhotoDetailsInModal={setPhotoDetailsInModal}
      />
    </div>
  );
};

export default HomeRoute;
