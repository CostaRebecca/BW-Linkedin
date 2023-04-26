import UserMainCard from "./UserMainCard";
/*
<UserMainCard button={{ type: "button", txt: "aggiungi una competenza" }} />
      <UserMainCard button={{ type: "button", txt: "aggiungi una competenza" }} />
      <UserMainCard button={{ type: "link", txt: "aggiungi una competenza" }} />
*/

const CardSlider = ({ cards }) => {
  return (
    <div className="d-flex flex-row overflow-x-auto gap-3 flex-nowrap slider">
      {cards.map((card, i) => (
        <UserMainCard key={`card-${i}`} card={card} />
      ))}
    </div>
  );
};
export default CardSlider;
