import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        className="photo-list__fav-icon"
        isFavs={props.isFavs}
        toggleFavClick={props.toggleFavClick}
        photoId={props.photo.id}
      />
      <img
        src={props.photo.urls.regular}
        alt={props.photo.id}
        className="photo-list__image"
        onClick={() => props.setPhotoDetailsInModal(props.photo)}
      />
      <div className="photo-list__item_info">
        <div className="photo-list__user-details">
          <img
            src={props.photo.user.profile}
            alt={props.photo.user.name}
            className="photo-list__user-profile"
          />
          <span className="photo-list__user-info">
            {props.photo.user.name}
            <div className="photo-list__user-location">
              <span>{props.photo.location.city + ", "}</span>
              <span>{props.photo.location.country}</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
