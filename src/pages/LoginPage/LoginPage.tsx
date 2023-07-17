import LoginForm from "../../features/login/LoginForm/LoginForm";
import LoginContainer from "../../features/login/LoginContainer";
import LoginHeader from "../../features/login/LoginHeader";
import GoogleLogin from "../../features/login/LoginForm/features/GoogleLogin/GoogleLogin";

const Login = () => {
  return (
    <LoginContainer>
      <LoginHeader />
      <LoginForm />
      <hr className='my-4' />
      <GoogleLogin />
    </LoginContainer>
  );
};

export default Login;
