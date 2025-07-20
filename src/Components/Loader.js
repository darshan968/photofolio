import Spinner from "react-spinner-material";
export default function Loader() {
  return (
    <>
      <Spinner
        radius={120}
        color={"#333"}
        stroke={2}
        visible={true}
        height={"10%"}
        width={"10%"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          marginLeft: "40%",
        }}
      />
    </>
  );
}
