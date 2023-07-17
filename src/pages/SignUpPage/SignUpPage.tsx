import SignUpContainer from "../../features/signUp/SignUpContainer";
import SignUpForm from "../../features/signUp/SignUpForm/SignUpForm";
import SignUpHeader from "../../features/signUp/SignUpHeader";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpHeader />
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;
