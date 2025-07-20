import Folder from "./Folder";
import { useEffect } from "react";
import { db } from "../firebaseInit";
import { collection, query, onSnapshot } from "firebase/firestore";
import Loader from "./Loader";

export default function AlbumList({ dispatch, state }) {
  useEffect(() => {
    // Setup real-time listener on albums collection
    const unsubscribe = onSnapshot(collection(db, "albums"), (snapshot) => {
      const fetchedAlbums = snapshot.docs.map((doc) => {
        let randObj = doc.data();
        randObj = { albumID: doc.id, ...randObj };
        return randObj;
      });
      dispatch({ type: "SET_ALBUMS", payload: fetchedAlbums });
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [dispatch]);
  if (!state || !state.albums) {
    return <Loader />;
  }
  function handleAlbumClick(album) {
    dispatch({ type: "ShowImages", payload: album });
  }
  return (
    <>
      <div className="flex justify-center bg-sky-200 p-4">
        <a
          href="#"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => dispatch({ type: "TOGGLE_ALBUM_FORM" })}
        >
          Add Album
        </a>
      </div>
      <div className="bg-sky-200 h-screen grid grid-cols-4 gap-4 items-center justify-center">
        {state.albums.map((album, index) => {
          // Using the Folder component to display each album
          return (
            <Folder
              key={index}
              folderName={album.title}
              handleAlbumClick={() => handleAlbumClick(album)}
              albumID={album.albumID}
              state={state}
              dispatch={dispatch}
            />
          );
        })}
        {/* Example folders for demonstration */}
        {/* <Folder folderName="Travel Diaries" />
        <Folder folderName="Vacation Photos" />
        <Folder folderName="Family Album" />
        <Folder folderName="Work Projects" />
        <Folder folderName="Personal Documents" /> */}
      </div>
    </>
  );
}
