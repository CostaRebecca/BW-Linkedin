import { useDispatch, useSelector } from "react-redux";
import UserMain from "./profile/UserMain";
import { useEffect } from "react";
import { addUserData, addUsers, getUserExperiences } from "../redux/action";
import CardTitle from "./profile/CardTitle";
import CardListItem from "./profile/CardListItem";
import { Link } from "react-router-dom";
import CardSlider from "./profile/CardSlider";
import AsideBox from "./aside/AsideBox";
import { suggestedCards } from "../helpers/cards";
import ExperienceCard from "./experience/ExperienceCard";
import ExperiencesMain from "./experience/ExperiencesMain";
import PostsMain from "./posts/PostsMain";
import Footer from "./Footer";
const Profile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const users = useSelector((state) => state.users);
  const userExperiences = useSelector((state) => state.experieces);
  /*
  useEffect(() => {
    if (!userData) {
      dispatch(addUserData());
    }
  }, []);
  useEffect(() => {
    if (userData) {
      if (!users.length) {
        dispatch(addUsers());
      }
      if (!userExperiences.length) {
        dispatch(getUserExperiences(userData._id));
      }
    }
  }, [userData]);
  */
  return (
    <>
      <div className="container">
        <div className="row">
          {/*}   <main className="col-7 offset-2">
          <div className="row">
            <UserMain />
            <div className="col-12">
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Consigliato per te" />
                  <CardSlider />
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Analisi" />
                  <ul className="list-unstyled">
                    <CardListItem
                      icon="bi-people-fill"
                      title="0 visualizzazioni del profilo"
                      txt="Aggiorna il tuo profilo per attrarre visitatori."
                    />
                  </ul>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Risorse" />
                  <ul className="list-unstyled">
                    <CardListItem
                      icon="bi-broadcast-pin"
                      title="Modalità creazione contenuti"
                      txt="Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione"
                      badge="no"
                    />
                    <CardListItem
                      icon="bi-people-fill"
                      title="La mia rete"
                      txt="Salva e gestisci i tuoi collegamenti e interessi."
                    />
                  </ul>
                </div>
                <div className="card-footer bg-white text-body text-center">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Attività" />
                  <ul className="list-unstyled">
                    <CardListItem
                      title="Modalità creazione contenuti"
                      txt="Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione"
                    />
                  </ul>
                </div>
                <div className="card-footer bg-white text-body text-center">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Mostra tutte le attività <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col-3">
          <AsideBox title="Persone che potresti conoscere" />
        </aside> */}
          <div className="col-12 col-md-8">
            <UserMain />
            <div>
              <div className="card mt-2">
                <div className="card-body">
                  <CardTitle title="Consigliato per te" />
                  <CardSlider cards={suggestedCards} />
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body pb-0">
                  <CardTitle title="Analisi" />
                  <ul className="list-unstyled items-list m-0">
                    <CardListItem
                      icon="bi-people-fill"
                      title="0 visualizzazioni del profilo"
                      txt="Aggiorna il tuo profilo per attrarre visitatori."
                    />
                  </ul>
                </div>
              </div>
              <div className="card mt-2">
                <div className="card-body pb-0">
                  <CardTitle title="Risorse" />
                  <ul className="list-unstyled items-list m-0">
                    <CardListItem
                      icon="bi-broadcast-pin"
                      title="Modalità creazione contenuti"
                      txt="Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione"
                      badge="no"
                    />
                    <CardListItem
                      icon="bi-people-fill"
                      title="La mia rete"
                      txt="Salva e gestisci i tuoi collegamenti e interessi."
                    />
                  </ul>
                </div>
                <div className="card-footer bg-white text-body text-center">
                  <Link to="/" className="text-secondary text-decoration-none">
                    Mostra tutte le risorse <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
              <PostsMain edit />
              <ExperiencesMain edit />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3 col-xl-3">
            <aside>
              <AsideBox title="Persone che potresti conoscere" />
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Profile;
