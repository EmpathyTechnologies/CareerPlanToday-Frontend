import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './GoogleLoginButton';

const GoogleLogin = () => {

    return (
        <div>
            <GoogleOAuthProvider clientId="<your_client_id>">
                <GoogleLoginButton />
            </GoogleOAuthProvider>
        </div>
        )
};

export default GoogleLogin;