import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const Login = ({setToken}:any) => {

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = async (e:any) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://backend-clothing-store-q0jh.onrender.com/api/user/adminlogin", {email, password})
      console.log(response);
      
      if(response.data.success){
        setToken(response.data.token)
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  }


  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2x1 font-bold mb-5">Admin Panel</h1>
        <form action="" onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2"> Email</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2"> Password</p>
            <input onChange={(e) => setPassword(e.target.value)} value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 cursor-pointer" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
