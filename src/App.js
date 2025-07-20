import Header from "./Components/Header";
import AlbumList from "./Components/AlbumList";
import AlbumForm from "./Components/AlbumForm";
import SuccessAlert from "./Components/successAlert";
import ImageList from "./Components/ImageList";
import ImageForm from "./Components/ImageForm";
import { useReducer, useEffect } from "react";
function App() {
  // Initialize state or any necessary set`up here
  const initialState = {};
  const reducer = (state, action) => {
    switch (action.type) {
      // Define your actions here
      case "ADD_IMAGE":
        return {
          ...state,
          showImages: true,
        };
      case "ImageFormToImageList":
        return {
          ...state,
          showImages: true,
          showAlbumForm: false,
        };
      case "TOGGLE_IMAGE_FORM":
        return {
          ...state,
          showImageForm: true,
          showAlbumForm: false,
          showImages: false,
          showImageInfo: [],
        };
      case "setImageList":
        return {
          ...state,
          showImageInfo: action.payload,
        };
      case "ShowImages":
        return {
          ...state,
          showImages: true,
          showAlbumInfo: action.payload,
          showAlbumForm: false,
        };
      case "HideImages":
        return {
          ...state,
          showImages: false,
          showAlbumForm: true,
          showImageInfo: [],
        };
      case "hideAlert":
        return { ...state, showAlert: false, showImageInfo: [] };
      case "showAlert":
        return { ...state, showAlert: true, showImageInfo: [] };
      case "SET_ALBUMS":
        return { ...state, albums: action.payload, showImageInfo: [] };
      case "ADD_ALBUM":
        return {
          ...state,
          albums: [...(state.albums || []), action.payload],
          showAlbumForm: false, // Hide form after adding album,
          showAlert: true, // Show alert after adding album
          showImageInfo: [],
        };
      case "REMOVE_ALBUM":
        return {
          ...state,
          albums: state.albums.filter((album) => album !== action.payload),
          showImageInfo: [],
        };
      case "TOGGLE_ALBUM_FORM":
        return {
          ...state,
          showAlbumForm: !state.showAlbumForm,
          showAlert: false,
          showImageInfo: [],
        };
      case "SET_ALBUMS":
        return { ...state, albums: action.payload, showImageInfo: [] };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Header />
      {state.showAlbumForm ? (
        <AlbumForm dispatch={dispatch} state={state} />
      ) : state.showImages ? (
        <ImageList dispatch={dispatch} state={state} />
      ) : state.showImageForm ? (
        <ImageForm dispatch={dispatch} state={state} />
      ) : (
        <AlbumList dispatch={dispatch} state={state} />
      )}
      {state.showAlert ? (
        <SuccessAlert
          message="Album added successfully!"
          dispatch={dispatch}
          state={state}
        />
      ) : null}

      {/* <AlbumForm /> */}
    </>
  );
}

export default App;
