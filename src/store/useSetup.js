import {
  useState,
  useEffect,
  createContext,
  useMemo,
  useCallback,
} from "react";
import axios from "axios";

export const Context = createContext();

export const useSetup = () => {
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchTag, setSearchByTag] = useState("");
  const [isShowingGrades, setIsShowingGrades] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL)
      .then((res) => {
        setStudents(
          res.data.students.map((el) => ({
            ...el,
            tags: [],
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  //Function to add a new tag to a student
  const displayTags = useCallback(
    (tags) => {
      return tags.map((tag, index) => {
        return (
          <div key={tag + index} className="studentTag">
            {tag}
          </div>
        );
      });
    },
    [students]
  );

  const addTag = useCallback(
    (id) => {
      let tagName = document.getElementById(`tag${id}`).value;
      let index = students.findIndex((el) => el.id === id);
      const currentStudent = students[index];
      currentStudent.tags.push(tagName);
      setStudents([
        ...students.slice(0, index),
        currentStudent,
        ...students.slice(index + 1),
      ]);
      document.getElementById(`tag${id}`).value = "";
    },
    [students]
  );

  const calcAvg = useCallback(
    (...arr) => arr.reduce((a, b) => a + parseInt(b), 0) / arr.length,
    [students]
  );

  const showGrades = useCallback(
    (a, b) => {
      const x = document.getElementById(a);
      if (!isShowingGrades) {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      setIsShowingGrades(!isShowingGrades);
    },
    [isShowingGrades]
  );

  return useMemo(
    () => ({
      students,
      searchName,
      setSearchName,
      displayTags,
      addTag,
      calcAvg,
      showGrades,
      isShowingGrades,
      setIsShowingGrades,
      searchTag,
      setSearchByTag,
    }),
    [
      students,
      searchName,
      setSearchName,
      displayTags,
      addTag,
      calcAvg,
      showGrades,
      isShowingGrades,
      setIsShowingGrades,
      searchTag,
      setSearchByTag,
    ]
  );
};
