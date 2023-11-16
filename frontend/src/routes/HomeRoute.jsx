import React, { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

import "../styles/HomeRoute.scss";

const HomeRoute = ({ isFavs, toggleFavClick, setPhotoDetailsInModal, state, photoData, topicData, handleTopicClick}) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topicData} isFavPhotoExist={isFavs.length > 0} handleTopicClick={handleTopicClick} />
      <PhotoList
        photos={photoData}
        isFavs={isFavs}
        toggleFavClick={toggleFavClick}
        setPhotoDetailsInModal={setPhotoDetailsInModal}
      />
    </div>
  );
};

export default HomeRoute;
