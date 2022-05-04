import React, { useContext, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RobotContext } from "../../context";

const Robot = ({
  students,
  robotId,
  firstName,
  lastName,
  email,
  company,
  skill,
  average,
  pic,
  tags,
  displayGrades,
}) => {
  const { displayTags, addTag, calcAvg, showGrades, isShowingGrades } =
    useContext(RobotContext);

  return (
    <div className="studentContainer">
      <>
        <img
          className="studentPic"
          src={pic}
          alt={`${firstName}${lastName}pic`}
        />
      </>
      <div className="studentInfoContainer">
        <h1 className="StudentNameHeading">
          {firstName} {lastName}
        </h1>
        <p className="StudentInfo">
          Email: {email}
          <br />
          Company: {company}
          <br />
          Skill : {skill}
          <br />
          Average: {Math.floor(calcAvg(average))}%
        </p>
        <div id={company + robotId} style={{ display: "none" }}>
          {average.map((test, index) => {
            return (
              <div key={`${lastName}` + index}>
                Grade {(index += 1)}: {test}%
              </div>
            );
          })}
        </div>

        <div className="displayTag">{displayTags && displayTags(tags)}</div>

        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTag(robotId);
          }}
        >
          <br />{" "}
          <input
            id={`tag${robotId}`}
            type="text"
            name="tag"
            placeholder="type tag here"
          />
        </form>
      </div>
      <div className="gradesButtonWrap">
        <button
          className="gradesButton"
          onClick={() => showGrades(company + robotId)}
        >
          <i id={lastName + robotId} className="FaPlus">
            {isShowingGrades ? <FaMinus /> : <FaPlus />}
          </i>
        </button>
      </div>
    </div>
  );
};
export default Robot;
