export default function NavigationBar(props: any) {
  const { setNavbarSelected } = props;

  const containerStyle = {
    height: "40px",
    background: "var(--Humpback)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
  };

  const aTag = {
    textDecoration: "none",
    color: "var(--Polar)",
    background: "var(--Humpback)",
    marginRight: "20px",
  };

  return (
    <div style={containerStyle}>
      <a href='/careers' onClick={() => setNavbarSelected("Careers")} style={aTag}>
        Careers
      </a>
    </div>
  );
}
