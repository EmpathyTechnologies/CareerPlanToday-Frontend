import useSignUpFormContext from "../hooks/use-signUpForm-context";


const FirstNameSignUpEntry = () => {
    const {handleFirstNameChange} = useSignUpFormContext();
    return (
        <div className="form-floating mb-3">
            <input type="FirstName" className="form-control" id="FirstName" placeholder="First Name" onChange={handleFirstNameChange}/>
            <label htmlFor="FirstName">First Name</label> 
        </div>
    )
}

export default FirstNameSignUpEntry;