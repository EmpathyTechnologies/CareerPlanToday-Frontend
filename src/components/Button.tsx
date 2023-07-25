import Button from "react-bootstrap/esm/Button";

interface BtnProps {
  cn?: string;
  name: string;
}

function Btn(props: BtnProps) {
  return (
    <div className={props.cn} style={{ display: "inline-block" }}>
      <Button className='custom-btn'>{props.name}</Button>
    </div>
  );
}

export default Btn;
