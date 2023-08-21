import { useState } from "react";
import SignUpContainer from "../../features/signUp/SignUpContainer";
import SignUpForm from "../../features/signUp/SignUpForm/SignUpForm";
import SignUpHeader from "../../features/signUp/SignUpHeader";
import ConfirmationCode from "../../features/confirmationCode/confirmation_code";

const SignUp = () => {
  const [stepNumber, setStepNumber] = useState(0);
  function renderSignUpPhase(){
    switch(stepNumber){
      case 0:
        return (<SignUpContainer>
          <SignUpHeader />
          <SignUpForm />
        </SignUpContainer>);
      case 1:
        return <ConfirmationCode />;
      default:
        return <p>An error has occured</p>
    }
  }
  return (<div>
      {stepNumber ? <ConfirmationCode /> : (<SignUpContainer>
          <SignUpHeader />
          <SignUpForm />
        </SignUpContainer>)}
  </div>
    
  );
};

export default SignUp;
