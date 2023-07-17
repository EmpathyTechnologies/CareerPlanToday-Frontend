import Button from "react-bootstrap/esm/Button";

function Btn(props: any) {
  return (
    <div className={props.cn} style={{ display: "inline-block" }}>
      <Button className='custom-btn'>{props.name}</Button>
    </div>
  );
}

export default Btn;
