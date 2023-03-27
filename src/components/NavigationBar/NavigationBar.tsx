export default function NavigationBar(props: any) {
  const { setNavbarSelected } = props;

  const containerStyle = {
    height: "40px",
    background: "var(--Humpback)",
    borderBottom: "3px solid var(--Swan)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "50px",
  };

  const aTag = {
    textDecoration: "none",
    color: "var(--Polar)",
    background: "var(--Humpback)",
    marginRight: "20px",
  };

  return (
    <div style={containerStyle}>
      <a href='./careers' onClick={() => setNavbarSelected("Careers")} style={aTag}>
        Careers
      </a>
      {/* <a href='./colleges' onClick={() => setNavbarSelected("Colleges")} style={aTag}>
        Colleges
      </a> */}
    </div>
  );
}