import { useDispatch, useSelector } from "react-redux";
import { postPicture, postUserPicture } from "../../redux/action";
import { useState } from "react";

function PhotoUploadModal({ id, dataProp }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [photo, setPhoto] = useState();

  const handleFile = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append(dataProp, photo);
    console.log(formData);
    dispatch(postPicture(id, formData, dataProp, userData));
    //postPicture = (id, body, userId, type)
    //dispatch(postUserPicture(userData._id, formData));
  };
  return (
    <div className="modal fade" id="UploadPhoto" tabIndex="-1" aria-labelledby="upload" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="upload">
              Aggiungi foto
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center px-5 py-4">
            {photo ? (
              <img src={URL.createObjectURL(photo)} alt="" className="img-fluid" />
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
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <div>
              <label htmlFor="files" className="btn btn-primary fw-bold rounded-pill">
                Seleziona Immagine
              </label>
              <input id="files" className="d-none" type="file" onChange={handleFile} />
            </div>
            <button data-bs-dismiss="modal" onClick={handleSubmit}>
              Carica
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoUploadModal;
