import '../styles/confirmation_code.css'

type Props = {
    value: string,
    onChange: (newValue: string, newIndex: number)=> void,
    index: number
}
const SingleDigitInput = ({ value, onChange, index }: Props) => {

  const handleInputChange = (event:any) => {
    const inputValueRegex = /^[0-9]?$/; // Regular expression for single-digit number between 0 and 9

    const newValue = event.target.value;

    if (inputValueRegex.test(newValue)) {
      onChange(newValue, index + 1); // Move to the next input
    }
  };

  const handleBackspace = (event:any) => {
    if (event.key === 'Backspace' && value === '') {
      onChange('', index - 1); // Move to the previous input
    }
  };

  return (
    <input type="text" onKeyDown={handleBackspace} value={value} onChange={handleInputChange} autoComplete="one-time-code" id={`otc-${index}`} className="single-digit-input" readOnly={value!==''} required/>
  );
};

export default SingleDigitInput;