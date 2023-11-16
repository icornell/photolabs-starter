import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({isFavs, toggleFavClick, photoId}) => {
  
  const colourCheck = isFavs.includes(photoId);

  return (
    <div className="photo-list__fav-icon" onClick={()=>toggleFavClick(photoId)}>
      <div className="photo-list__fav-icon-svg"> 
        <FavIcon selected={colourCheck}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;
