import "./App.css";
import SearchBar from "./components/layout/SearchBar";
import Robots from "./components/robots/Robots";
import { RobotContext } from "./context";
import { useSetup } from "./store";

export const App = () => {
  const { students, searchName, setSearchName, addTag, displayTags,calcAvg, showGrades, isShowingGrades, setIsShowingGrades,searchTag, setSearchByTag} = useSetup();
  return (
    <RobotContext.Provider value={{ students, searchName, setSearchName, addTag, displayTags,calcAvg, showGrades, isShowingGrades, setIsShowingGrades,searchTag, setSearchByTag }}>
      <div id="appContainer">
        <div id="robotBox">
          <SearchBar />
          <div id="robotContainer">
            <Robots />
          </div>
        </div>
      </div>
    </RobotContext.Provider>
  );
};
