import { useDispatch } from "react-redux";
import { jobAddToBookmark, jobRemoveFromBookmark } from "../../redux/action/jobs";
import { Link } from "react-router-dom";

const PostListCard = ({ job, edit }) => {
  const dispatch = useDispatch();
  return (
    <li className=" border-bottom py-3 ">
      <div className="d-flex ">
        <Link to={`/currentjob/${job._id}`} className="flex-grow-1 link-primary">
          {job.title}
        </Link>
        {edit && (
          <>
            <button className="btn btn-linkedin" onClick={() => dispatch(jobRemoveFromBookmark(job))}>
              <i className="bi bi-eye-slash"></i>
            </button>
            <button className="btn btn-linkedin" onClick={() => dispatch(jobAddToBookmark(job))}>
              <i className="bi bi-bookmark"></i>
            </button>
          </>
        )}
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
    </li>
  );
};
export default PostListCard;
