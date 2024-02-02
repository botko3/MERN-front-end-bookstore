import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const {logOut} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    logOut().then(()=>{
      alert("Sign out successful");
      navigate(from,{replace:true})

    }).catch(error=>{

    })
  }
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        type="button"
        class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        onClick={handleLogOut}
      >
        LogOut
      </button>
    </div>
  );
};

export default Logout;
