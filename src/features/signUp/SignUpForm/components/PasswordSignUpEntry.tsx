import useSignUpFormContext from "../hooks/use-signUpForm-context";


const PasswordSignUpEntry = () => {
    const {handlePasswordChange} = useSignUpFormContext();
    return (
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}/>
            <label htmlFor="floatingPassword">Password</label>
        </div>
    )
}

export default PasswordSignUpEntry;