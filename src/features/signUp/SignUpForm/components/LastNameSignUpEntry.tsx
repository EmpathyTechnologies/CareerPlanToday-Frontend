import useSignUpFormContext from "../hooks/use-signUpForm-context";


const LastNameSignUpEntry = () => {
    const {handleLastNameChange} = useSignUpFormContext();
    return (
        <div className="form-floating mb-3">
            <input type="LastName" className="form-control" id="LastName" placeholder="Last Name" onChange={handleLastNameChange}/>
            <label htmlFor="LastName">Last Name</label> 
        </div>
    )
}

export default LastNameSignUpEntry;