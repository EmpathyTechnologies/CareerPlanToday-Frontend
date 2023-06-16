import { useGoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
    const signIn  = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
        onError: errorResponse => console.log(errorResponse)
      });
    
      return (
        <div className="d-grid mb-2">
          <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit" onClick={() => signIn}>
            <i className="fab fa-google me-2"></i> Sign in with Google
          </button>
        </div>
      );
}

export default GoogleLoginButton;