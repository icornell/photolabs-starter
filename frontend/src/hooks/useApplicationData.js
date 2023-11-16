import React, { useReducer, useEffect } from "react";

const initialState = {
  photoDetailsInModal: null,
  isFavs: [],
  photoData: [],
  topicData: [],
};

const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        isFavs: [...state.isFavs, action.payload.id]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        isFavs: state.isFavs.filter(fav => fav !== action.payload.id)
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        photoDetailsInModal: action.payload.photoDetailsInModal
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload.photoData
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload.topicData
      };
      case ACTIONS.SELECT_TOPIC:
        return {
          ...state,
          selectedTopic: action.payload.selectedTopic
        };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    photoDetailsInModal: null,
    isFavs: [],
  });

  const togglePhotoDetailsInModal = (photo) => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photoDetailsInModal: photo } });
  };

  const toggleFavClick = (photoId) => {
    if (state.isFavs.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  useEffect(() => {
    fetch("/api/photos", {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((photo) => dispatch({ type: actionTypes.setPhotoData, payload: photo }))
      .catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    fetch(`/api/topics`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(topic => dispatch({ type: actionTypes.setTopicData, payload: topic }))
      .catch((error) => {
        console.log(error);
      })
   }, [])

   const handleTopicClick = (topicId) => {
    fetch(`/api/topics/${topicId}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(topic => dispatch({ type: actionTypes.setTopicData, payload: topic }))
      .catch((error) => {
        console.log(error);
      })
   }

  return {
    state,
    photoData,
    topicData,
    togglePhotoDetailsInModal,
    toggleFavClick,
    handleTopicClick,
  };
};

export default useApplicationData;
