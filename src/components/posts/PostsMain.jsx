import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhotoUploadModal from "../profile/PhotoUploadModal";
import PostsModal from "./PostsModal";
import PostListCard from "./PostListCard";

const PostsMain = ({ edit, back = false }) => {
  const posts = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.userData);

  const [selectedId, setSelectedId] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    if (userData)
      setUserPosts(
        posts.filter((post) => {
          if (post.user) return post.user._id === userData._id;
        })
      );
  }, [posts, userData]);

  return (
    <div className="card mt-2">
      <div className="card-body pb-0">
        <div className="card-title">
          <div className="d-flex align-items-center">
            {back && (
              <Link className="btn btn-linkedin rounded-circle" to="/profile">
                <i className="bi bi-arrow-left"></i>
              </Link>
            )}
            <div className="flex-grow-1 ps-2">
              <h2 className="fs-5 m-0 ">Attività</h2>
              <p className="small text-secondary m-0">
                <i className="bi bi-eye-fill pe-1"></i>
                Solo per te
              </p>
            </div>
            <button
              className="btn btn-linkedin rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#PostsForm"
              onClick={() => setSelectedId("")}
            >
              <i className="bi bi-plus"></i>
            </button>
            {edit && (
              <Link className="btn btn-linkedin rounded-circle" to="/posts">
                <i className="bi bi-pencil"></i>
              </Link>
            )}
          </div>
        </div>
        <ul className="list-unstyled items-list m-0">
          {edit
            ? userPosts.slice(0, 5).map((post) => <PostListCard key={post._id} post={post} />)
            : userPosts.map((post) => <PostListCard key={post._id} edit post={post} setId={setSelectedId} />)}
        </ul>
      </div>
      {edit && (
        <div className="card-footer bg-white text-body text-center">
          <Link to="/posts" className="text-secondary text-decoration-none">
            Mostra tutte le attività {userPosts.length ? <>&#40; {userPosts.length} &#41;</> : ""}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}

      <PostsModal id={selectedId} />
      <PhotoUploadModal id={selectedId} dataProp="post" />
    </div>
  );
};
export default PostsMain;
