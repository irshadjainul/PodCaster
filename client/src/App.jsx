import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AuthLayout from "./layout/AuthLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import AddPodcast from "./pages/AddPodcast";
import AllPodcasts from "./pages/AllPodcasts";
import CategoriesPage from "./pages/CategoriesPage";
import DescriptionPage from "./pages/DescriptionPage";

function App() {

  const dispatch=useDispatch()
  useEffect(() => {
    const fetch = async () => {
      const res =await axios.get("https://pod-caster-api-04.vercel.app/api/v1/user/check-cookie", {
        withCredentials: true,
      });
      if(res.data.message){
        dispatch(authActions.login())
      }
    };
    fetch()
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addPodcast" element={<AddPodcast />} />
          <Route path="/allPodcasts" element={<AllPodcasts/>}/>
          <Route path="/categories/:cat" element={<CategoriesPage/>}/>
          <Route path="/description/:id" element={<DescriptionPage/>}/>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
