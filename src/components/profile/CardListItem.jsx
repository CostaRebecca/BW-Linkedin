import { Link } from "react-router-dom";

const CardListItem = ({ title, icon = false, txt, badge = false }) => {
  return (
    <li className="d-flex border-bottom mt-3">
      {icon && (
        <Link to="/" className="link-secondary fs-4">
          <i className={`bi ${icon}`}></i>
        </Link>
      )}
      <Link to="/" className={`link-secondary text-decoration-none ${icon ? "ps-2" : ""}`}>
        <h3 className="fs-6 m-0">
          {title} {badge ? <span className="badge bg-secondary">{badge}</span> : ""}
        </h3>
        <p className="small text-body">{txt}</p>
      </Link>
    </li>
  );
};
export default CardListItem;
