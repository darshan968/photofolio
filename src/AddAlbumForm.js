export default function AddAlbumForm({ useRef }) {
  return (
    <form
      style={{
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        width: "60vw",
        height: "20vh",
        marginLeft: "20vw",
      }}
    >
      <h1 style={{ fontWeight: "900", fontSize: "2rem", marginLeft: "10vw" }}>
        Create an album
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginLeft: "10vw",
          marginTop: "2vh",
        }}
      >
        <input
          type="text"
          name="albumName"
          placeholder="Album Name"
          ref={useRef}
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            width: "50%",
            marginBottom: "10px",
          }}
        />
        <button
          type="reset"
          style={{
            backgroundColor: "#ff1300",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          style={{
            backgroundColor: "#07f",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Create
        </button>
      </div>
    </form>
  );
}
