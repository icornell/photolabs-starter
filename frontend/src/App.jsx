import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoFavButton from "components/PhotoFavButton";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

const App = () => {
  const { state, togglePhotoDetailsInModal, toggleFavClick, onTopicClick } =
    useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photoData={state.photoData}
        topicData={state.topicData}
        setPhotoDetailsInModal={togglePhotoDetailsInModal}
        isFavs={state.isFavs}
        toggleFavClick={toggleFavClick}
        onTopicClick={onTopicClick}
      />
      {state.photoDetailsInModal && (
        <PhotoDetailsModal
          photo={state.photoDetailsInModal}
          closePhotoDetailsModal={() => togglePhotoDetailsInModal(null)}
          PhotoFavButton={PhotoFavButton}
          isFavs={state.isFavs}
          toggleFavClick={toggleFavClick}
          setPhotoDetailsInModal={togglePhotoDetailsInModal}
        />
      )}
    </div>
  );
};

export default App;
