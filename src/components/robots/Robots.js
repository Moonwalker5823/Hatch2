import React, { useContext } from "react";
import Robot from "./Robot";
import Spinner from "../layout/Spinner";
import { RobotContext } from "../../context";

const Robots = () => {
  const { students, searchName, searchTag } = useContext(RobotContext);
  console.log(searchTag, searchName);
  return !students ? (
    <Spinner />
  ) : (
    <div>
      {students
        .filter((student) => {
          //Nothing to search
          if (searchName === "" && searchTag === "") return student;
          else if (searchName !== "" && searchTag === "") {
            return student.firstName
              .concat(" ")
              .concat(student.lastName)
              .toUpperCase()
              .includes(searchName.toUpperCase());
          }

          //Search by tag only
          else if (searchTag !== "" && searchName === "") {
            if (!student.tags) return false;
            else if (student.tags) {
              let found = false;
              student.tags.forEach((tag) => {
                if (tag.toUpperCase().includes(searchTag.toUpperCase())) {
                  found = true;
                }
              });
              return found;
            }
          }
          // Search by both name and tag
          else if (searchTag !== "" && searchName !== "") {
            if (!student.tags) return false;
            else if (students.tags) {
              let found = false;
              student.tags.forEach((tag) => {
                if (tag.toUpperCase().includes(searchTag.toUpperCase())) {
                  found = true;
                }
              });

              let findNameMatch = student.firstName
                .concat(" ")
                .concat(student.lastName)
                .toUpperCase()
                .includes(searchName.toUpperCase());

              return findNameMatch && found ? true : false;
            }
          }
          return true;
        })

        // students
        //   .filter((el) =>
        //     `${el.firstName} + ${el.lastName}`
        //       .toUpperCase()
        //       .includes(searchName.toUpperCase()) ||
        //      ` ${el.tags}`.includes(searchTag)
        //   )

        .map((item) => (
          <Robot
            key={item.id}
            robotId={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            company={item.company}
            skill={item.skill}
            average={item.grades}
            pic={item.pic}
            tags={item.tags}
          />
        ))}
    </div>
  );
};
export default Robots;
