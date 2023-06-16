import useLoginFormContext from "../hooks/use-loginForm-context";

const LoginButton = () => {
    const {handleSignIn} = useLoginFormContext();

    return (
        <div className="d-grid">
            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleSignIn}>
                Sign in
            </button>
        </div>
    )
}

export default LoginButton;