import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({
  photo,
  closePhotoDetailsModal,
  isFavs,
  toggleFavClick,
  setPhotoDetailsInModal,
}) => {
  //to get the similar photos from the photo object
  const similarPhotos = [];
  for (const similarPhoto in photo.similar_photos) {
    similarPhotos.push(photo.similar_photos[similarPhoto]);
  }
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => closePhotoDetailsModal(null)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          className="photo-details-modal__fav-button"
          isFavs={isFavs}
          toggleFavClick={toggleFavClick}
          photoId={photo.id}
        />
        <img
          src={photo.urls.regular}
          alt={photo.title}
          className="photo-details-modal__image"
        />
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={photo.user.name}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">
              {photo.user.name}
            </div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Related Photos</div>
      </div>
      <div className="photo-details-modal__images">
        {
          <PhotoList
            photoData={similarPhotos} //replace the photoData with the similarPhotos to render in the modal
            isFavs={isFavs}
            toggleFavClick={toggleFavClick}
            setPhotoDetailsInModal={setPhotoDetailsInModal}
          />
        }
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
