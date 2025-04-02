import {useState} from 'react'
import toast from "react-hot-toast"
import { useAuthContext } from '../context/AuthContext';


type SignupInputs = {
    fullName : string;
    username: string;
    password: string;
    confirmPassword: string;
    gender: string;
}

function useSignup() {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async(inputs : SignupInputs) => {
        // const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        // if(!success) return;
        try {
            setLoading(true);
            const res = await fetch('/api/auth/signup',{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(inputs)
            })
            const data = await res.json();
            // console.log(data)
            if(!res.ok) throw new Error(data.error);
            setAuthUser(data);
        } catch (error :any) {
            toast.error("error.message")
        }finally{
            setLoading(false);
        }
    }
    return {loading, signup}
}

export default useSignup

// function handleInputErrors({fullName, username, password, confirmPassword, gender}){
//     if(!fullName || !username || !password || !confirmPassword || !gender){
//         toast.error("Plese fill all fields")
//         return false
//     }
//     if(password !== confirmPassword){
//         toast.error("Passwords do not match!")
//         return false
//     }
//     if(password.length < 6){
//         toast.error('Password must be at least 6 characters')
//         return false
//     }

//     return true;
// }