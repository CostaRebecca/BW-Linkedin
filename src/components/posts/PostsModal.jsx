import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserPost, postUserPost, putUserPost } from "../../redux/action/posts";
const PostsModal = ({ id = null }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const userPosts = useSelector((state) => state.posts);
  const [save, setSave] = useState(true);

  const [text, setText] = useState("");

  /*
  {
    "_id": "5d93ac84b86e220017e76ae1", 				// server generated
    "text": "this is a post text",  		// the only property you need to send
    "username": "admin", 											// server generated
    "createdAt": "2019-10-01T19:44:04.496Z", 	// server generated
    "updatedAt": "2019-10-01T19:44:04.496Z", 	// server generated
    "__v": 0 																	// server generated
}
*/
  useEffect(() => {
    if (id) {
      const post = userPosts.find((post) => post._id === id);
      setText(post.text);
    } else {
      setText("");
    }
  }, [id]);

  const handleDelete = () => {
    dispatch(deleteUserPost(id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formPost = {
      text: text
    };
    id
      ? dispatch(putUserPost(userData, id, JSON.stringify(formPost)))
      : dispatch(postUserPost(userData, id, JSON.stringify(formPost)));
  };
  return (
    <>
      <div className="modal fade modal-lg" id="PostsForm" tabIndex="-1" aria-labelledby="PostsForm" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {userData && `${userData.name} ${userData.surname}`}
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <p>Pubblica:Chiunque</p>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="mb-3"></div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Tipo di Impiego
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="3"
                        placeholder="Di cosa vorresti parlare?"
                        onChange={(e) => setText(e.target.value)}
                        required
                        value={text}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mb-3"></div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Chiudi
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#confirmPostModal"
                onClick={() => setSave(true)}
              >
                {id ? "Modifica" : "Salva"}
              </button>
              {id && (
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmPostModal"
                  onClick={() => setSave(false)}
                >
                  Elimina
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="confirmPostModal" tabIndex="-1" aria-labelledby="confirmModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="confirmPostModalLabel">
                Conferma operazione
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">IL post verrà {save ? (id ? "Modificata" : "Salvata") : "Eliminata"}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Annulla
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={save ? handleSubmit : handleDelete}
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostsModal;
