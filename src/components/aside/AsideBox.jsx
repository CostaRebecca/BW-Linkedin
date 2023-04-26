import { useSelector } from "react-redux";
import AsideCard from "./AsideCard";

const AsideBox = ({ title }) => {
  const users = useSelector((state) => state.users);
  return (
    <div className="p-3 border rounded bg-white">
      <h2 className="fs-6">{title}</h2>
      {users.map((user) => (
        <AsideCard key={user._id} username={`${user.name} ${user.surname}`} title={user.title} image={user.image} />
      ))}
    </div>
  );
};
export default AsideBox;
