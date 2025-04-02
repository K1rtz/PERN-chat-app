import  Login  from "./pages/login/Login.tsx"
import Signup from "./pages/signup/Signup.tsx"
import  Home  from "./pages/home/Home.tsx"
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext.tsx"

function App() {
  const {authUser, isLoading} = useAuthContext();
  console.log("Auth User", authUser);
  if(isLoading) {
    return null;
    // console.log(isLoading)
  };
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser?<Home/> : <Navigate to={"/login"}/> }/>
        <Route path="/signup" element={ authUser ? <Navigate to={"/"} /> : <Signup/>} />
        <Route path="/login" element={authUser ? <Navigate to={"/"}/> : <Login />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
