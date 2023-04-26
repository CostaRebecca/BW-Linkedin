import { Link } from "react-router-dom";

const CardTitle = ({ title, edit }) => {
  return (
    <div className="card-title">
      <div className="d-flex">
        <h2 className="fs-5 m-0 flex-grow-1">{title}</h2>
        {edit && (
          <Link className="btn" to={edit}>
            <i className="bi bi-pencil"></i>
          </Link>
        )}
      </div>

      <p className="small text-secondary">
        <i className="bi bi-eye-fill pe-1"></i>
        Solo per te
      </p>
    </div>
  );
};
export default CardTitle;
