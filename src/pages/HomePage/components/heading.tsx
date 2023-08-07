import { HomeHeadingType } from "../../../types/HomeHeadingType";

function Heading(props: HomeHeadingType) {
  return (
    <div className={props.classname}>
      <h1 className='secondary-heading'>{props.text}</h1>
    </div>
  );
}

export default Heading;
