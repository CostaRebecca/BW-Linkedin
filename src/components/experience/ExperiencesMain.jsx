import { useSelector } from "react-redux";
import { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import ExperiencesModal from "./ExperiencesModal";
import { Link } from "react-router-dom";
import PhotoUploadModal from "../profile/PhotoUploadModal";

const ExperiencesMain = ({ edit, back = false }) => {
  const items = useSelector((state) => state.experieces);
  const [selectedId, setSelectedId] = useState("");

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
              <h2 className="fs-5 m-0 ">Esperienze</h2>
              <p className="small text-secondary m-0">
                <i className="bi bi-eye-fill pe-1"></i>
                Solo per te
              </p>
            </div>

            <button
              className="btn btn-linkedin rounded-circle"
              data-bs-toggle="modal"
              data-bs-target="#experiencesForm"
              onClick={() => setSelectedId("")}
            >
              <i className="bi bi-plus"></i>
            </button>
            {edit && (
              <Link className="btn btn-linkedin rounded-circle" to="/experience">
                <i className="bi bi-pencil"></i>
              </Link>
            )}
          </div>
        </div>
        <ul className="list-unstyled items-list m-0">
          {edit
            ? items.slice(0, 5).map((experience) => <ExperienceCard key={experience._id} experience={experience} />)
            : items.map((experience) => (
                <ExperienceCard key={experience._id} edit experience={experience} setId={setSelectedId} />
              ))}
        </ul>
      </div>
      {edit && (
        <div className="card-footer bg-white text-body text-center">
          <Link to="/experience" className="text-secondary text-decoration-none">
            Mostra tutte le attività {items.length ? <>&#40; {items.length} &#41;</> : ""}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}

      <ExperiencesModal id={selectedId} />
      <PhotoUploadModal id={selectedId} dataProp="experience" />
    </div>
  );
};
export default ExperiencesMain;
