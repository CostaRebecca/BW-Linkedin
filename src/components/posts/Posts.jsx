import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../../redux/action";
import { getUserPosts } from "../../redux/action/posts";
import CardTitle from "../profile/CardTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "./PostListCard";
import PostsModal from "./PostsModal";
import PostsMain from "./PostsMain";

const Posts = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userPosts = useSelector((state) => state.posts);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
    /*
    if (!userPosts.length) {
      dispatch(getUserPosts(userData._id));
    }
    */
  }, []);
  useEffect(() => {
    if (userData) {
      /*
    if (!users.length) {
      dispatch(addUsers());
    }*/
      if (!userPosts.length) {
        dispatch(getUserPosts(userData._id));
      }
    }
  }, [userData]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-1 d-none d-lg-block"></div>
        <div className="col-8 col-md-12">
          <PostsMain back />
        </div>
      </div>
      <PostsModal id={selectedId} />
    </div>
  );
};
export default Posts;
