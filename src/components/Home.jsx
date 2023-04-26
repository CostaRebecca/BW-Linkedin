import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import PostCard from "./posts/PostCard";
import PostsModal from "./posts/PostsModal";
import PhotoUploadModal from "./profile/PhotoUploadModal";
import { getUserPosts } from "../redux/action/posts";
import ProfilePhotoModal from "./profile/ProfilePhotoModal";
import { Link } from "react-router-dom";
import Pagination from "./utils/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.userData);
  const [selectedId, setSelectedId] = useState();
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(50);
  return (
    <div className="container">
      <div className="row">
        <div className=" col-12 col-md-4 col-lg-3 col-xl-3">
          <div className="card">
            <div>
              {userData && userData.image ? (
                <img className="card-img-top" src={userData.image} />
              ) : (
                <i className="bi bi-camera"></i>
              )}
            </div>
            <div className="card-body">
              <h5 className="card-title">Ti diamo il benvenuto {userData && userData.name}!</h5>
              <Link to="/" data-bs-toggle="modal" data-bs-target="#UploadPhotoProfile" className="small">
                Aggiungi una foto
              </Link>
              <ProfilePhotoModal />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item footer-links">Collegamenti</li>
              <li className="list-group-item">
                <Link className="text-decoration-none" to="/">
                  <div className="d-flex justify-content-center"></div>
                  <p
                    className=""
                    style={{
                      fontSize: "small",
                      maxWidth: "125px",
                      textDecoration: "underline",
                      lineHeight: "15px",
                    }}
                  >
                    Prova Premium gratuitamente
                  </p>
                </Link>
              </li>
              <li className="list-group-item footer-links">I miei elementi</li>
            </ul>
          </div>
          <div className="card mt-2 sticky-top">
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-card-home">Gruppi</li>
              <li className="list-group-item text-card-home">Eventi</li>
              <li className="list-group-item text-card-home">Hashtag seguiti</li>
            </ul>
          </div>
        </div>

        <div className=" col-12 col-md-8 col-lg-6">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex mb-3 align-items-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt="Vai al profilo di mauro simoni"
                  className="photo-circle flex-shrink-0"
                />
                <button
                  className="rounded-pill flex-grow-1 mx-2 py-2 border-1 border-0"
                  data-bs-toggle="modal"
                  data-bs-target="#PostsForm"
                >
                  Avvia un post
                </button>
                <button className="btn btn-linkedin rounded-circle " onClick={() => dispatch(getUserPosts())}>
                  <i class="bi bi-arrow-repeat"></i>
                </button>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-linkedin">
                  <i className="bi bi-image-fill"></i>
                  <span className="ps-2">Foto</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-play-btn-fill"></i>
                  <span className="ps-2">Video</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-calendar-date"></i>
                  <span className="ps-2">Evento</span>
                </button>
                <button className="btn btn-linkedin">
                  <i className="bi bi-text-indent-left"></i>
                  <span className="ps-2">Scrivi un articolo</span>
                </button>
              </div>
            </div>
          </div>
          <Pagination total={posts.length} start={start} stop={stop} setStart={setStart} setStop={setStop} />
          {posts.slice(start, stop).map((post) => (
            <PostCard key={post._id} edit post={post} setId={setSelectedId} />
          ))}
          <PostsModal id={selectedId} />
          <PhotoUploadModal id={selectedId} dataProp="post" />
        </div>
        <div className="col-12 col-lg-3 col-xl-3">
          {/*  <aside>
            <AsideBox title="Persone che potresti conoscere" />
          </aside> */}

          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                <h6> Linkedin notizie</h6>
              </li>
              <li className="list-group-item border-0 py-0">
                <p className="mb-1 mt-0 list-home"> Linkedin notizie</p>
                <p className="copyright mb-1 mt-0">Notizia</p>
              </li>
              <li className="list-group-item border-0 py-0">
                <p className="mb-1 mt-0 list-home"> Linkedin notizie</p>

                <p className="copyright mb-1 mt-0">Notizia</p>
              </li>
              <li className="list-group-item border-0 py-0">
                <p className="mb-1 mt-0 list-home"> Linkedin notizie</p>

                <p className="copyright mb-1 mt-0">Notizia</p>
              </li>
              <li className="list-group-item border-0 py-0">
                <p className="mb-1 mt-0 list-home"> Linkedin notizie</p>

                <p className="copyright mb-1 mt-0">Notizia</p>
              </li>
              <li className="list-group-item border-0 py-0">
                <p className="mb-1 mt-0 list-home"> Linkedin notizie</p>

                <p className="copyright mb-1 mt-0">Notizia</p>
              </li>
            </ul>
          </div>
          <img
            src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt="Advertise on LinkedIn"
            border="0"
            className="sticky-top mt-2 rounded img-fluid"
            // style={{ width: "262px" }}
          ></img>

          <div className="mt-4 footer-home">
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Informazioni
                </Link>
              </div>
              <div>
                <Link to="/" alt="footer link" className="footer-links">
                  Accessibilità
                </Link>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-2">
                <Link to="/" alt="footer link" className="footer-links">
                  Centro Assistenza
                </Link>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="btn bg-trasparent btn-sm dropdown-toggle p-0 m-0 footer-links"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Privacy e Condizioni
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sulla privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Contratto di licenza
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sui cookie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sul copyright
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/" alt="footer link" className="footer-links">
                Opzioni per gli annunci pubblicitari
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Pubblicità
                </Link>
              </div>
              <div>
                <div className="dropdown">
                  <button
                    className="btn bg-trasparent btn-sm dropdown-toggle p-0 m-0 footer-links"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Servizi alle aziende
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sulla privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Contratto di licenza
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sui cookie
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item " to="/">
                        Informativa sul copyright
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <Link to="/" alt="footer link" className="footer-links">
                  Scarica l'app Linkedin
                </Link>
              </div>
              <div>
                <Link to="/" alt="footer link" className="footer-links">
                  Altro
                </Link>
              </div>
            </div>
            <div className="text-center mb-2 mt-2 fw-light copyright"> Linkedin Corporation © 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
