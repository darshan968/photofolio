import Header from "./Components/Header";
import AddAlbumForm from "./AddAlbumForm";
import { useRef } from "react";
function App() {
  const albumRef = useRef(null);
  
  return (
    <>
      <Header />
      <AddAlbumForm useRef={albumRef} />
      {/* <h1>App</h1> */}
    </>
  );
}

export default App;
