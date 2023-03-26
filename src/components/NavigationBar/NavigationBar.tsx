export default function NavigationBar(props: any) {
  const { navbarSelected, setNavbarSelected } = props;

  const containerStyle = {
    height: "40px",
    background: "var(--Humpback)",
    borderBottom: "3px solid var(--Swan)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "50px",
  };

  const btnActive = {
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "3px solid var(--Polar)",
    borderRadius: 0,
  };

  const btnInactive = {
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    borderBottom: "none",
  };

  const aTag = {
    textDecoration: "none",
    color: "var(--Polar)",
    background: "var(--Humpback)",
    marginRight: "20px",
  };

  return (
    <div style={containerStyle}>
      <a
        href='./careers'
        onClick={() => setNavbarSelected("Careers")}
        style={
          aTag
          // navbarSelected === "Careers" ? { ...btnActive, ...aTag } : { ...btnInactive, ...aTag }
        }
      >
        Careers
      </a>
      <a
        href='./colleges'
        onClick={() => setNavbarSelected("Colleges")}
        style={
          aTag
          // navbarSelected === "Colleges" ? { ...btnActive, ...aTag } : { ...btnInactive, ...aTag }
          // navbarSelected === "Colleges" ? { ...btnActive, } : { ...btnInactive, ...aTag }
        }
      >
        Colleges
      </a>
    </div>
  );
}
