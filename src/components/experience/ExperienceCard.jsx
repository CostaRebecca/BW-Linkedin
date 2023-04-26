import { monthArray } from "../../helpers/mixed";
const ExperienceCard = ({ experience, edit, setId }) => {
  const startDate = new Date(experience.startDate);
  const endDate = experience.endDate ? new Date(experience.endDate) : null;
  const editProps = {
    "data-bs-toggle": "modal",
    "data-bs-target": "#UploadPhoto",
    onClick: () => setId(experience._id)
  };
  return (
    <li className="d-flex border-bottom py-3 ">
      <button aria-label="Modifica foto" className="btn" type="button" {...(edit && { ...editProps })}>
        {experience.image ? (
          <img src={experience.image ? experience.image : ""} alt={experience.username} height="50px" width="50px" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-image-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
          </svg>
        )}
      </button>
      <div className="ps-1 flex-grow-1">
        <h3 className="fs-6 footer-links m-0">
          <span>{experience.company}</span>&#160;&#8208;&#160;<span>{experience.role}</span>
        </h3>
        <div>
          <span>{monthArray[startDate.getMonth()]}</span>&#160;
          <span>{startDate.getFullYear()}</span> &#160;&#8208;&#160;
          {endDate ? (
            <>
              <span>{monthArray[endDate.getMonth()]}</span>&#160;
              <span>{endDate.getFullYear()}</span>
            </>
          ) : (
            <span>in corso</span>
          )}
        </div>
        <div>{experience.description}</div>
      </div>
      {edit && (
        <button
          className="btn"
          data-bs-toggle="modal"
          data-bs-target="#experiencesForm"
          onClick={() => setId(experience._id)}
        >
          <i className="bi bi-pencil"></i>
        </button>
      )}
    </li>
  );
};
export default ExperienceCard;
