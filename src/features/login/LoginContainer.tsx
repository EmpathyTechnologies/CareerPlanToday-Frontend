type Props = {
    children?:JSX.Element[];
}
const LoginContainer = ({ children }:Props) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto" >
                    <div className="border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-lg-5">
                            {children}
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginContainer;