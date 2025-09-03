import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import AddProducts from "./Pages/AddProducts";
import ListProducts from "./Pages/ListProducts";
import Orders from "./Pages/Orders";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token") : "");

  useEffect(() => {
    localStorage.setItem("token", token ?? "");
  }, [token]);


  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken}/>
      ) : (
        <>
          <Navbar setToken={setToken}/>
          <hr />

          <div className="flex w-full">
            <Sidebar />

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<AddProducts token={token} />} />
                <Route path="/list" element={<ListProducts />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
