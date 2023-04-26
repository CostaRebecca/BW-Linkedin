import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUserData } from "../../redux/action";

const ModificaProfilo = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");

  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setSurname(userData.surname);
      setEmail(userData.email);
      setBio(userData.bio);
      setTitle(userData.title);
      setArea(userData.area);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      surname: surname,
      email: email,
      bio: bio,
      title: title,
      area: area
    };

    dispatch(putUserData(JSON.stringify(formData)));
  };
  return (
    <>
      <div
        className="modal fade modal-lg"
        id="profiloForm"
        tabIndex="-1"
        aria-labelledby="profiloForm"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modifica il tuo profilo</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12"></div>
                    <div className="mb-3">
                      <label htmlFor="role" className="form-label">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="role"
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)}
                        required
                        value={name}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Cognome
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="surname"
                        aria-describedby="role"
                        placeholder="Cognome"
                        onChange={(e) => setSurname(e.target.value)}
                        required
                        value={surname}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        value={email}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">
                        Bio
                      </label>
                      <textarea
                        className="form-control"
                        id="bio"
                        rows="3"
                        placeholder="Parlaci di te?"
                        onChange={(e) => setBio(e.target.value)}
                        required
                        value={bio}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">
                        Titolo
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="area"
                        placeholder="Titolo"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        value={title}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="area" className="form-label">
                        Località
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="area"
                        placeholder="Località"
                        onChange={(e) => setArea(e.target.value)}
                        required
                        value={area}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Chiudi
              </button>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#confirmProfiloFormModal"
              >
                Salva
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="confirmProfiloFormModal"
        tabIndex="-1"
        aria-labelledby="confirmModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Conferma operazione</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Sicuro di voler modificare i tuoi dati?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Annulla
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                Conferma
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModificaProfilo;
