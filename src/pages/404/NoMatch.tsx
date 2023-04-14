
// import Footer from "../../layouts/Footer";
// import Button from "react-bootstrap/Button";
// import NotFound from "../../assets/notfound1.jpg";
// import { Link } from "react-router-dom";
// import Figure from "react-bootstrap/Figure";
// import styles from "../../NoMatch.module.css";
// import Page1NotFound from "./Page1NotFound";
// import Page2NotFound from "./Page2NotFound";


// export default function NoMatch(props: any) {
//   const random404Components = [Page1NotFound, Page2NotFound];

//   return (
//     <div>
//   {      const randomPage = random404Components[Math.floor(Math.random() * random404Components.length)];
// }     <randomPage />


//     </div>
//   );
// }


// import React from "react";
// import Footer from "../../layouts/Footer";
// import Button from "react-bootstrap/Button";
// import NotFound from "../../assets/notfound1.jpg";
// import { Link } from "react-router-dom";
// import Figure from "react-bootstrap/Figure";
// import styles from "../../NoMatch.module.css";
import Page1NotFound from "./Page1NotFound";
import Page2NotFound from "./Page2NotFound";
import Page3NotFound from "./Page3NotFound";
import Page4NotFound from "./Page4NotFound ";

export default function NoMatch(props: any) {
  const random404Components = [Page1NotFound, Page2NotFound, Page3NotFound, Page4NotFound];
  const RandomPage = random404Components[Math.floor(Math.random() * random404Components.length)];
  
  return (
    <div>
      <RandomPage />
    </div>
  );
}
