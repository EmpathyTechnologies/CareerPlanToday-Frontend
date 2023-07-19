import useSignUpFormContext from "../hooks/use-signUpForm-context";


const CreateAccountButton = () => {
    const {handleSignUp} = useSignUpFormContext();

    return (
        <div className="d-grid">
            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit" onClick={handleSignUp}>
                Sign in
            </button>
        </div>
    )
}

export default CreateAccountButton;