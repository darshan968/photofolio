export default function Folder({ albumID, folderName, handleAlbumClick }) {
  return (
    <>
      <div
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center cursor-pointer"
        onClick={handleAlbumClick}
      >
        <img
          src="folder.png"
          alt="folder-icon"
          className="w-30 text-center bg-yellow-200  p-2 mb-2"
        />
        <p className="font-bold text-center">{folderName}</p>
      </div>
    </>
  );
}
