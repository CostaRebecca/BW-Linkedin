import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Experiences from "./components/experience/Experiences";
import Posts from "./components/posts/Posts";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUserData, addUsers, getUserExperiences } from "./redux/action";
import { getUserPosts } from "./redux/action/posts";

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const userExperiences = useSelector((state) => state.experieces);

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
  }, []);
  useEffect(() => {
    if (userData) {
      if (!users.length) {
        dispatch(addUsers());
      }
      if (!userExperiences.length) {
        dispatch(getUserExperiences(userData._id));
      }
      if (!posts.length) {
        dispatch(getUserPosts(userData._id));
      }
    }
  }, [userData]);
  return (
    <BrowserRouter>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/currentjob/:id" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
