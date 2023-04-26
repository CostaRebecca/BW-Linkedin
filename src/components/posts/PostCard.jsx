import { useSelector } from "react-redux";

const PostCard = ({ post, edit, setId }) => {
  const userData = useSelector((state) => state.userData);
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex">
          <h5 className="card-title flex-grow-1">
            {post.user && (
              <>
                <span>{post.user.name}</span>&#160;<span>{post.user.surname}</span>
              </>
            )}
          </h5>
          {edit && post.user && post.user._id === userData._id && (
            <>
              <button
                className="btn btn-linkedin rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#PostsForm"
                onClick={() => setId(post._id)}
              >
                <i className="bi bi-pencil"></i>
              </button>
              <button
                className="btn btn-linkedin rounded-circle"
                data-bs-toggle="modal"
                data-bs-target="#UploadPhoto"
                onClick={() => setId(post._id)}
              >
                <i className="bi bi-image"></i>
              </button>
            </>
          )}
        </div>
        <p className="card-text small">
          {new Date(post.updatedAt).toLocaleDateString("it-IT", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </p>
        <p className="card-text">{post.text}</p>
        {post.image && <img src={post.image} className="img-fluid" />}
        <div className="d-flex justify-content-between">
          <button className="btn btn-linkedin">
            <i className="bi bi-image-fill"></i>
            <span className="ps-2">Consiglia</span>
          </button>
          <button className="btn btn-linkedin">
            <i className="bi bi-play-btn-fill"></i>
            <span className="ps-2">Commenta</span>
          </button>
          <button className="btn btn-linkedin">
            <i className="bi bi-calendar-date"></i>
            <span className="ps-2">Diffondi il post</span>
          </button>
          <button className="btn btn-linkedin">
            <i className="bi bi-text-indent-left"></i>
            <span className="ps-2">Invia</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
