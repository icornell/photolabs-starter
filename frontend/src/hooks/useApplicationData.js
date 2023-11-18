import React, { useReducer, useEffect } from "react";

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const initialState = {
  photoDetailsInModal: null,
  isFavs: [],
  photoData: [],
  topicData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        isFavs: [...state.isFavs, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        isFavs: state.isFavs.filter((fav) => fav !== action.payload.id),
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        photoDetailsInModal: action.payload.photoDetailsInModal,
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const togglePhotoDetailsInModal = (photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      payload: { photoDetailsInModal: photo },
    });
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
      method: "GET",
    })
      .then((response) => response.json())
      .then((photo) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photo })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/topics`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((topic) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topic })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onTopicClick = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((topic) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: topic })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    state,
    togglePhotoDetailsInModal,
    toggleFavClick,
    onTopicClick,
  };
};

export default useApplicationData;
