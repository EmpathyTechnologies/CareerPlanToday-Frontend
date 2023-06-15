import {useContext} from 'react'
import LoginFormContext from '../context/LoginFormContext';

function useLoginFormContext() {
    return useContext(LoginFormContext);
}

export default useLoginFormContext;