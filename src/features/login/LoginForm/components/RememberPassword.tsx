import useLoginFormContext from "../hooks/use-loginForm-context";

const RememberPassword = () => {
    const {toggleRememberPassword} = useLoginFormContext();
    return (
        <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" onClick={toggleRememberPassword} />
                <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                </label>
        </div>
    )
}

export default RememberPassword;