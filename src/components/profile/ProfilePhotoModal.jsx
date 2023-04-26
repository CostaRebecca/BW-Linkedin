import { useDispatch, useSelector } from "react-redux";
import { postUserPicture } from "../../redux/action";

function PhotoModal() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const handleFile = (e) => {
    //setFile(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("profile", e.target.files[0]);

    dispatch(postUserPicture(userData._id, formData));
  };
  return (
    <div className="modal fade" id="UploadPhotoProfile" tabIndex="-1" aria-labelledby="upload" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="upload">
              Aggiungi foto
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center px-5 py-4">
            <p className="fs-4">
              La tua foto non deve per forza essere <br /> un tuo primo piano! <br />
              Ma qualcosa che ti rappresenti.
            </p>
            <img src={userData && userData.image} alt="eeeeeeeeh sapessi" />
            <p className="text-center text-dark-emphasis py-4" style={{ fontSize: "small" }}>
              Chiediamo agli utenti di Linkedin di utilizzare le loro vere identità, quindi scatta o <br />
              carica una tua foto. Poi ritagliala, applica dei filtri e perfezionala come vuoi.
            </p>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <div>
              <button type="button" className="btn btn-transparent text-primary fw-bold">
                Fotogrammi
              </button>
            </div>
            <div className="gap-3 d-flex">
              <button
                type="button"
                className="btn btn-transparent text-primary border border-primary fw-bold rounded-pill"
              >
                Usa fotocamera
              </button>
              <label htmlFor="files" className="btn btn-primary fw-bold rounded-pill">
                Carica foto
              </label>
              <input id="files" className="d-none" type="file" onChange={handleFile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
