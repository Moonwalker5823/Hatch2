import { useContext } from "react";
import { RobotContext } from "../../context";

const SearchByTag = () => {
  const { searchTag, setSearchByTag } = useContext(RobotContext);

  const getSearchTag = (e) => {
    setSearchByTag(e.target.value);
  };

  return (
    <input
      id="SearchByTag"
      type="text"
      name="searchTag"
      value={searchTag}
      placeholder="Search by tag"
      onChange={getSearchTag}
    ></input>
  );
};

export default SearchByTag;
