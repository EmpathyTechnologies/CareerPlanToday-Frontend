import { useState } from "react";
//import { Amplify, Auth } from "aws-amplify";
import './styles/confirmation_code.css'
import SingleDigitInput from "./components/singleDigitInput";

const ConfirmationCode = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '','','']); // An array to store values for multiple inputs

    const handleInputChange = (newValue: string, nextIndex: number) => {
        const newInputValues = [...inputValues];
        if(newValue===''){
            newInputValues[nextIndex] = newValue;
        }else{   
            newInputValues[nextIndex-1] = newValue;
        }
        moveInputPointer(nextIndex);
        setInputValues(newInputValues);
        //sendConfirmationCode();
    };

    const moveInputPointer = (newIndex: number) => {
        if (newIndex < inputValues.length && 0<=newIndex) {
            // Move focus to the next input
            const nextInput = document.getElementById(`otc-${newIndex}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    }

    // const sendConfirmationCode = () => {
    //     try{
    //         const res = Auth.confirmSignUp("username",inputValues.toString());
    //         console.log('Signup success. Result: ', res)
    //     }catch(e){
    //         console.log('Signup fail. Error: ', e)
    //     }
    // }

    
  return (
    <div>
        <form className="otc" name="one-time-code" action="#">
            <fieldset>
                <legend>Validation Code</legend>
                
                <div>
                    {inputValues.map((value, index) => (
                        <SingleDigitInput
                        key={index}
                        value={value}
                        onChange={handleInputChange}
                        index={index}
                        />
                    ))}
                </div>
            </fieldset>
      </form>
    </div>
  );
}

export default ConfirmationCode;