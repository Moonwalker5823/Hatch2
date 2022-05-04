import { useContext } from "react";
import { RobotContext } from "../../context";

const SearchByName = () => {
  const { searchName, setSearchName } = useContext(RobotContext);

  const getSearchName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <input
      id="SearchByName"
      type="text"
      name="searchName"
      value={searchName}
      placeholder="Search by name"
      onChange={getSearchName}
    ></input>
  );
};

export default SearchByName;
