import useSignUpFormContext from "../hooks/use-signUpForm-context";

const EmailSignUpEntry = () => {
    const {handleEmailChange} = useSignUpFormContext();
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
        </div>
    )
}

export default EmailSignUpEntry;