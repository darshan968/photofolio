import { useEffect } from "react";
import { db } from "../firebaseInit";
import { collection, query, onSnapshot } from "firebase/firestore";
export default function ImageList({ dispatch, state }) {
  let images = [];
  useEffect(() => {
    // Setup real-time listener on albums collection
    // const q = query(collection(db, "Images"), where("albumID", "==", state.));
    const unsubscribe = onSnapshot(collection(db, "Images"), (snapshot) => {
      const fetchedAlbums = snapshot.docs.map((doc) => doc.data());
      fetchedAlbums.forEach((item, index) => {
        if (item.albumID == state.showAlbumInfo.albumID) {
          images.push(item);
        }
      });

      dispatch({ type: "setImageList", payload: images });
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  if (!state.showImageInfo || state.showImageInfo.length === 0) {
    return (
      <>
        <div className="flex justify-center bg-sky-200 p-4">
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => dispatch({ type: "TOGGLE_IMAGE_FORM" })}
          >
            Add Images
          </a>
        </div>
        <div className="text-center mt-10">No images available</div>
      </>
    );
  }
  return (
    <>
      <div className="flex justify-center bg-sky-200 p-4">
        <a
          href="#"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => dispatch({ type: "TOGGLE_IMAGE_FORM" })}
        >
          Add Images
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-sky-200 h-screen">
        {state.showImageInfo.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image.url}
              alt={image.title || "Image"}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </>
  );
}
