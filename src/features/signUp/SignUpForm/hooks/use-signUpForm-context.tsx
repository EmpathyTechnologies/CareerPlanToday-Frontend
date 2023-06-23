import {useContext} from 'react'
import SignUpFormContext from '../context/SignUpFormContext';


function useSignUpFormContext() {
    return useContext(SignUpFormContext);
}

export default useSignUpFormContext;