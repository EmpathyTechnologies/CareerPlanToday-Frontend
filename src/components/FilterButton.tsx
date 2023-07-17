interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  color: "btn-blue" | "btn-green" | "btn-red";
  type?: "submit" | "button" | "reset" | undefined;
}

function Button({ text, onClick, color, type }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={`btn ${color}`} onClick={handleClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
