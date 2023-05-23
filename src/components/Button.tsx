interface ButtonProps {
  text: string | any;
  onClick?: () => void;
  color: "btn-blue" | "btn-green" | "btn-red";
  type?: "submit" | "button" | "reset" | undefined;
}

function Button({ text, onClick, color, type }: ButtonProps) {
  return (
    <button className={`btn ${color}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
