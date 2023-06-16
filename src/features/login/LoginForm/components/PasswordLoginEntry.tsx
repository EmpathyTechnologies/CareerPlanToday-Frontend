import useLoginFormContext from "../hooks/use-loginForm-context";

const PasswordLoginEntry = () => {
    const {handlePasswordChange} = useLoginFormContext();
    return (
        <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange}/>
            <label htmlFor="floatingPassword">Password</label>
        </div>
    )
}

export default PasswordLoginEntry;