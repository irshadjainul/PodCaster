import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import ErrorPage from "./ErrorPage";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [Values, setValues] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "https://pod-caster-api-04.vercel.app/api/v1/user/login",
        Values,
        { withCredentials: true }
      );
      dispatch(authActions.login());
      navigate("/profile");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <ErrorPage />
      ) : (
        <div className="h-screen bg-green-100 flex items-center justify-center ">
          <ToastContainer position="top-center" />
          <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
            <Link to="/" className="text-2xl font-semibold">
              PODCASTER
            </Link>
            <div className="mt-6 w-full">
              <div className="w-full flex flex-col">
                <label htmlFor="" className="flex pl-2 left-0 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="px-2 py-2 mb-2 border-1 bg-gray-100 rounded-xl"
                  name="email"
                  value={Values.email}
                  onChange={change}
                  placeholder="Enter email"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="" className="pl-2 flex left-0 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className=" px-2 py-2 mb-2 border-1 bg-gray-100 rounded-xl"
                  name="password"
                  value={Values.password}
                  onChange={change}
                  placeholder="Enter password"
                />
              </div>
              <div className="w-full flex flex-col">
                <button
                  className="font-semibold text-xl bg-green-700 cursor-pointer text-white rounded-xl py-2 mt-4"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className="w-full flex flex-col mt-3">
                <p className="text-center font-semibold">
                  Don't have an acoount?{" "}
                  <Link
                    className="hover:text-black font-semibold text-green-900"
                    to="/register"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
