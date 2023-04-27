export default function NavigationBar(props: any) {
  const { setNavbarSelected } = props;

  const containerStyle = {
    height: "64px",
    background: "var(--Humpback)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    fontSize: "24px",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
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
      <a href='/colleges' onClick={() => setNavbarSelected("Colleges")} style={aTag}>
        Colleges
      </a>
      <a href='/calculator' onClick={() => setNavbarSelected("Calculator")} style={aTag}>
        Calculator
      </a>
    </div>
  );
}
