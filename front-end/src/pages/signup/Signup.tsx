import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from '../../hooks/useSignup';

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    

    // type Gender = "male" | "female"

    const {loading, signup} = useSignup();

    const handleSubmitForm = async (e : React.FormEvent) =>{
        e.preventDefault();
        console.log(inputs);
        signup(inputs);
        // await signup(inputs);
    }

    const handleCheckboxChange = (gender : "male" | "female") =>{
        setInputs({...inputs, gender});
    }


  return <div className='flex flex-col item-center justify-center min-w-96 max-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backgrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Signup
                </h1>    

        <form onSubmit={handleSubmitForm}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text"> Full Name</span>
                </label>
                <input type="text" className="w-full input input-bordered h-10" 
                value={inputs.fullName}
                onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}/>
            </div>

            <div>
                <label className="label p-2">
                    <span className="text-base label-text"> Username</span>
                </label>
                <input type="text" className="w-full input input-bordered h-10" 
                value={inputs.username}
                onChange={(e)=> setInputs({...inputs, username: e.target.value})}/>
            </div>

            <div>
                <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" 
                value={inputs.password}
                onChange={(e)=> setInputs({...inputs, password: e.target.value})}/>
            </div>
                
            <div>
            <label className="label p-2">
                <span className="text-base label-text"> Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" 
                value={inputs.confirmPassword}
                onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}/>
            </div>

            {/*gendercheckbox*/}
            <GenderCheckbox selectedGender={inputs.gender} onCheckBoxChange={handleCheckboxChange} />


            <div>
            <Link  to="/login"className="text-sm hover:underline text-gray-400 hover:text-gray-200 mt-4 ml-0.5 inline-block" >
                    Already have an account?
            </Link>
            </div>

            <div>
                <button className="btn btn-block btn-smmt-2" disabled = {loading}>{loading ? "Loading..." : "SignUp"}</button>
            </div>



        </form>
            </div>
        </div>
  
}

export default Signup