import Button from "react-bootstrap/esm/Button";

interface BtnProps {
  cn?: string;
  name: string;
  href?:string
}

function Btn(props: BtnProps) {
  return (
    <div className={props.cn} style={{ display: "inline-block" }}>
      <Button className='custom-btn' href={props.href}>{props.name}</Button>
    </div>
  );
}

export default Btn;
