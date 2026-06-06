import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const [UserData, setUserData] = useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await axios.get("https://pod-caster-api-04.vercel.app/api/v1/user/userDetails", {
        withCredentials: true,
      });
      setUserData(res.data.user);
    };
    fetchUserDetails();
  }, []);
  const logoutHandler = async () => {
    const res = await axios.post("https://pod-caster-api-04.vercel.app/api/v1/user/logout", {
      withCredentials: true,
    });
    console.log(res)
    dispatch(authActions.logout())
    navigate("/")
  };
  return (
    <>
      {UserData && (
        <div className="bg-green-900 rounded py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between lg:px-12">
          <div className="flex flex-col items-center md:items-start ">
            <p className="text-zinc-300">Profile</p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center">
              {UserData.username}
            </h1>

            <h1 className="text-zinc-300 mt-1">{UserData.email}</h1>
          </div>
          <div>
            <button
              onClick={logoutHandler}
              className="bg-white px-4 py-2 cursor-pointer rounded text-zinc-950 font-semibold hover:shadow-xl transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
