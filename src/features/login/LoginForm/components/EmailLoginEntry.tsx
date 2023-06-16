import useLoginFormContext from "../hooks/use-loginForm-context";

const EmailLoginEntry = () => {
    const {handleEmailChange} = useLoginFormContext();
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
        </div>
    )
}

export default EmailLoginEntry;