import EmailLoginEntry from "./components/EmailLoginEntry";
import LoginButton from "./components/LoginButton";
import PasswordLoginEntry from "./components/PasswordLoginEntry";
import RememberPassword from "./components/RememberPassword";
import { LoginFormProvider } from './context/LoginFormContext';


const LoginForm = () => {
    return (
        <form>
            <LoginFormProvider>
                <EmailLoginEntry/>
                <PasswordLoginEntry/>
                <RememberPassword/>
                <LoginButton/>
            </LoginFormProvider>
        </form>
        )
};

export default LoginForm;