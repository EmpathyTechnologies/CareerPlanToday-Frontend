import useSignUpFormContext from "../hooks/use-signUpForm-context";


const ConfirmPasswordSignUpEntry = () => {
    const {handleConfirmPasswordChange} = useSignUpFormContext();
    return (
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" onChange={handleConfirmPasswordChange}/>
            <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
    )
}

export default ConfirmPasswordSignUpEntry;