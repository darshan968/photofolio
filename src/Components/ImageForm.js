import { db } from "../firebaseInit";
import { collection, addDoc } from "firebase/firestore";
import dayjs from "dayjs";
import Loader from "./Loader";
export default function ImageForm({ state, dispatch }) {
  if (!state) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex justify-center bg-sky-200 p-4">
        <a
          href="#"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => dispatch({ type: "ImageFormToImageList" })}
        >
          Back to Image List
        </a>
      </div>
      <div className="bg-sky-200 h-screen flex flex-col items-center ">
        <h1 className="text-center text-black-200 font-bold">Add an Image</h1>
        <form
          className="flex  flex-col items-center"
          action="/"
          method="post"
          onSubmit={(e) => {
            e.preventDefault();
            const imageTitle = e.target.imageTitle.value;
            const imageUrl = e.target.imageUrl.value;
            if (imageTitle && imageUrl) {
              async function addImage() {
                // Add a new document with a generated id.
                await addDoc(collection(db, "Images"), {
                  albumID: state.showAlbumInfo.albumID,
                  title: imageTitle,
                  url: imageUrl,
                  createdOn: dayjs().format("YYYY-MM-DD HH:mm"),
                });
              }
              addImage();
              // Dispatch action to add album
              dispatch({ type: "ADD_IMAGE", payload: imageTitle });
              e.target.reset(); // Reset the form
            }
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="albumTitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image Title
            </label>
            <input
              type="text"
              id="imageTitle"
              name="imageTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter image title"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Image URL"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Album
          </button>
        </form>
      </div>
    </>
  );
}
