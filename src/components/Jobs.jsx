import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import JobCard from "./jobs/JobCard";
import JobListCard from "./jobs/JobListCard";
import BookmarksCard from "./jobs/BookmarksCard";
import { jobSearchKindUpdate } from "../redux/action/jobs";
const Jobs = () => {
  const items = useSelector((state) => state.job.searchResults);
  const jobsBookmark = useSelector((state) => state.job.bookmarks);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobSearchKindUpdate("search"));
  }, []);
  const menuLink = [
    //  { icon: "bi-bookmark-fill", text: "Le mie offerte di lavoro" },
    { icon: "bi-bell-fill", text: "Avvisi offerte di lavoro" },
    { icon: "bi-journal-check", text: "Valutazioni delle competenze" },
    { icon: "bi-play-btn-fill", text: "Indicazioni per chi cerca" },
    { icon: "bi-gear-fill", text: "Impostazioni candidatura" }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className=" col-12 col-md-4 col-lg-3 col-xl-3">
          <div className="card sticky-top">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <button
                  className="btn text-decoration-none d-flex align-items-center"
                  data-bs-toggle="collapse"
                  data-bs-target="#jobsBookmark"
                >
                  <i className="fs-4 me-2 bi bi-bookmark-fill"></i>
                  Le mie offerte di lavoro
                </button>
                <div class="collapse" id="jobsBookmark">
                  <ul className="list-unstyled items-list m-0">
                    {jobsBookmark.slice(0, 5).map((job) => (
                      <JobListCard key={job._id} job={job} edit />
                    ))}
                  </ul>
                </div>
              </li>
              {menuLink.map((item, i) => (
                <li key={`jobs-menu-${i}`} className="list-group-item">
                  <Link to="/" className="text-decoration-none d-flex align-items-center">
                    <i className={`fs-4 me-2 bi ${item.icon}`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card mb-4">
            <div className="card-body">
              <h3>Seleziona tipo di ricerca</h3>
              <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  defaultChecked
                  onClick={() => dispatch(jobSearchKindUpdate("search"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("company"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  onClick={() => dispatch(jobSearchKindUpdate("category"))}
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          {!id ? (
            <>
              {items.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
            </>
          ) : (
            <JobCard back details job={items[0]} />
          )}
        </div>
        <div className=" col-12 col-lg-3 col-xl-3">
          <div className="sticky-top">
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
export default Jobs;
/*
          <div className="card">
            <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Generale
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">
                  Azienda
                </label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Categoria
                </label>
              </div>
            </div>
          </div>
          */
