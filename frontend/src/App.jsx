import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import PhotoFavButton from "components/PhotoFavButton";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

const App = () => {
  //call the useApplicationData hook and destructure the state and the functions as needed below
  const { state, togglePhotoDetailsInModal, toggleFavClick, onTopicClick } =
    useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photoData={state.photoData} //access the photoData from the state
        topicData={state.topicData} //access the topicData from the state
        setPhotoDetailsInModal={togglePhotoDetailsInModal} //to send the photo detalils to the modal
        isFavs={state.isFavs} //to see if the photo is in the favs or not
        toggleFavClick={toggleFavClick} //to allow the fav button to be clicked anywhere
        onTopicClick={onTopicClick} //to allow the topic to be clicked in the nav bar
      />
      {state.photoDetailsInModal && (
        <PhotoDetailsModal
          photo={state.photoDetailsInModal}
          closePhotoDetailsModal={() => togglePhotoDetailsInModal(null)} //close the modal with the close button
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
