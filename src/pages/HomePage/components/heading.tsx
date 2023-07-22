interface HeadingProps {
  cn?: string;
  title: string;
}

function Heading(props: HeadingProps) {
  return (
    <div className={props.cn}>
      <h1 className='secondary-heading'>{props.title}</h1>
    </div>
  );
}

export default Heading;
