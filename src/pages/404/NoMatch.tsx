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
