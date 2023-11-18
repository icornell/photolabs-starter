import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photoData,
  isFavs,
  toggleFavClick,
  setPhotoDetailsInModal,
}) => {
  return (
    <ul className="photo-list">
      {photoData &&
        photoData.map((photo, index) => {
          return (
            <PhotoListItem
              className="photo-list:after"
              key={index}
              photo={photo}
              isFavs={isFavs}
              toggleFavClick={toggleFavClick}
              setPhotoDetailsInModal={setPhotoDetailsInModal}
            />
          );
        })}
    </ul>
  );
};

export default PhotoList;
