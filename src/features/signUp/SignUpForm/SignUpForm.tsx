import ConfirmPasswordSignUpEntry from "./components/ConfirmPaswordSignUpEntry";
import CreateAccountButton from "./components/CreateAccountButton";
import EmailSignUpEntry from "./components/EmailSignUpEntry";
import FirstNameSignUpEntry from "./components/FirstNameSignUpEntry";
import LastNameSignUpEntry from "./components/LastNameSignUpEntry";
import PasswordSignUpEntry from "./components/PasswordSignUpEntry";
import { SignUpProvider } from "./context/SignUpFormContext";

const SignUpForm = () => {
    return (
        <form>
            <SignUpProvider>
                <FirstNameSignUpEntry/>
                <LastNameSignUpEntry />
                <EmailSignUpEntry/>
                <PasswordSignUpEntry/>
                <ConfirmPasswordSignUpEntry/>
                <CreateAccountButton/>
            </SignUpProvider>
        </form>
        )
};

export default SignUpForm;