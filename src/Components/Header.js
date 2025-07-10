import styled from "styled-components";
const HeaderTitle = styled.span`
  color: #000000;
  font-size: 1.2rem;
  font-weight: 700;
`;
export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#a0a0f9",
        cursor: "pointer",
        gap: "10px",
        height: "100%",
        padding: "0.3rem",
      }}
    >
      <img
        src="./logo.png"
        alt="logo"
        style={{
          height: "10vh",
          marginLeft: "1rem",
        }}
        onClick={() => window.location.reload()}
      />
      <HeaderTitle onClick={() => window.location.reload()}>
        PhotoFolio
      </HeaderTitle>
    </header>
  );
}
