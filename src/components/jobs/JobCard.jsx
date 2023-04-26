import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";
import { jobAddToBookmark, jobRemoveFromBookmark } from "../../redux/action/jobs";

const JobCard = ({ job, details, back }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  return (
    <div key={job._id} className="card mb-3">
      <div className="card-body">
        <div className="d-flex card-title align-items-center">
          {back && (
            <Link className="btn btn-linkedin rounded-circle" to="/jobs">
              <i className="bi bi-arrow-left"></i>
            </Link>
          )}
          <Link to={`/currentjob/${job._id}`} className="ps-2 flex-grow-1 link-primary">
            {job.title}
          </Link>
          <button className="btn btn-linkedin" onClick={() => dispatch(jobRemoveFromBookmark(job))}>
            <i className="bi bi-eye-slash"></i>
          </button>
          <button className="btn btn-linkedin" onClick={() => dispatch(jobAddToBookmark(job))}>
            <i className="bi bi-bookmark"></i>
          </button>
        </div>
        <div className="card-text">
          <span>{job.company_name}</span>
          &#160; &#183; &#160;
          <span>
            {new Date(job.publication_date).toLocaleDateString("it-IT", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </span>
        </div>
        <div className="card-text mb-2">
          <span>{job.candidate_required_location}</span>
          &#160; &#183; &#160;
          <span>{job.job_type}</span>
        </div>
        {details && Parser(job.description)}
      </div>
    </div>
  );
};
export default JobCard;
