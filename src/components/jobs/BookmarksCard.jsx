import { useSelector } from "react-redux";
import JobListCard from "./JobListCard";
import { Link } from "react-router-dom";
const BookmarksCard = () => {
  const jobsBookmark = useSelector((state) => state.job.bookmarks);
  return (
    <div className="card sticky-top">
      <div className="card-body pb-0">
        <div className="card-title">
          <h2 className="m-0">Le mie offerte di lavoro</h2>
        </div>
        <ul className="list-unstyled items-list m-0">
          {jobsBookmark.slice(0, 5).map((job) => (
            <JobListCard key={job._id} job={job} edit />
          ))}
        </ul>
      </div>
      {jobsBookmark.length > 5 && (
        <div className="card-footer bg-white text-body text-center">
          <Link to="/jobs/bookmark" className="text-secondary text-decoration-none">
            Mostra tutti i Bookmark {jobsBookmark.length ? <>&#40; {jobsBookmark.length} &#41;</> : ""}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      )}
    </div>
  );
};
export default BookmarksCard;
