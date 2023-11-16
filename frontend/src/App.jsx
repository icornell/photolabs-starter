import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoFavButton from "components/PhotoFavButton";
import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { state, togglePhotoDetailsInModal, toggleFavClick } =
    useApplicationData();

  const { photoDetailsInModal, isFavs } = state;

  return (
    <div className="App">
      <HomeRoute
        photoData={photoData}
        topicData={topicData}
        setPhotoDetailsInModal={togglePhotoDetailsInModal}
        isFavs={isFavs}
        toggleFavClick={toggleFavClick}
      />
      {photoDetailsInModal && (
        <PhotoDetailsModal
          photo={photoDetailsInModal}
          closePhotoDetailsModal={() => togglePhotoDetailsInModal(null)}
          PhotoFavButton={PhotoFavButton}
          isFavs={isFavs}
          toggleFavClick={toggleFavClick}
          setPhotoDetailsInModal={togglePhotoDetailsInModal}
        />
      )}
    </div>
  );
};

export default App;
