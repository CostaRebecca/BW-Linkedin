import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardSlider from "./CardSlider";
import ExperiencesModal from "../experience/ExperiencesModal";
import { userCards } from "../../helpers/cards";
import ProfilePhotoModal from "./ProfilePhotoModal";
import ModificaProfilo from "./ModificaProfilo";

const UserMain = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <>
      {userData && (
        <div className="col-12">
          <div className="card user-main">
            <img src={userData.image} className="card-img-top placeholder" />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div className="top-card--photo">
                  <div className="top-card__photo-wrapper">
                    <div className="top-card__edit-photo">
                      {userData.image ? <img src={userData.image} /> : <i class="bi bi-camera"></i>}
                      <button
                        aria-label="Modifica foto"
                        className="top-card__edit-photo-button"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#UploadPhotoProfile"
                      ></button>
                    </div>
                  </div>
                </div>
                <ProfilePhotoModal />
                <Link
                  className="btn rounded-circle btn-linkedin"
                  data-bs-toggle="modal"
                  data-bs-target="#profiloForm"
                  to="/ModificaProfilo"
                >
                  <i className="bi bi-pencil"></i>
                </Link>
                <ModificaProfilo />
              </div>
              <h5 className="card-title">{`${userData.name} ${userData.surname}`}</h5>
              <p className="mb-1">
                {userData.area}&#xa0; &#183;&#xa0;<Link to="/"> Informazioni di contatto</Link>
              </p>
              <Link to="/">5 collegamenti</Link>
              <div className="mt-2 mb-4">
                <button className="btn btn-primary rounded-pill">Disponibile per</button>
                <button className="btn btn-outline-primary rounded-pill mx-2">Aggiungi sezione profilo</button>
                <button className="btn btn-outline-secondary rounded-pill">Altro</button>
              </div>
              <CardSlider cards={userCards} />
            </div>
          </div>
          <ExperiencesModal />
        </div>
      )}
    </>
  );
};
export default UserMain;
