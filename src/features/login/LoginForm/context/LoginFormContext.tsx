import { createContext, useEffect, useState } from "react";

type LoginFormContextType = {
    handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    toggleRememberPassword: () => void,
    handleSignIn: () => void
}

const LoginFormContext = createContext<LoginFormContextType>({
    handleEmailChange: () => {},
    handlePasswordChange: () => {},
    toggleRememberPassword: () => {},
    handleSignIn: () => {},
});


type Props = {
    children?: React.ReactNode;
}

function LoginFormProvider({ children }:Props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    useEffect(() => {
        setEmail('');
        setPassword('');
      }, []);
    
      const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

      const toggleRememberPassword = () => {
        setRememberPassword(!rememberPassword);
      }
    
      const handleSignIn = () => {
        // Perform validation or API call with email and password
        // For demonstration purposes, let's log the values to the console
        console.log('Email:', email);
        console.log('Password:', password);
    
        // Reset form fields
        setEmail('');
        setPassword('');
      };

      const valueToShare = {
        email,
        password,
        rememberPassword,
        handleEmailChange,
        handlePasswordChange,
        toggleRememberPassword,
        handleSignIn
      }

      return (
        <LoginFormContext.Provider value={valueToShare}>
            {children}
        </LoginFormContext.Provider>
      )
}

export {LoginFormProvider};
export default LoginFormContext;