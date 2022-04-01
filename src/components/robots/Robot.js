import React from 'react'
import { Context } from '../../context'
 

const Robot = (props) => {

  const calcAvg = (...arr) => 
   arr.reduce((a, b) => a + parseInt(b), 0) /
    arr.length

  const {firstName, lastName, email, company, skill, average, pic, displayGrades} = props
  return (
    <div className='studentContainer'>
      <>
      <img className="studentPic" src={pic} alt={`${firstName}${lastName}pic`}/>
      </>
      <div className="studentInfoContainer">
      <h1 className="StudentNameHeading">{firstName} {lastName}</h1>
      <p className='StudentInfo'>Email: {email}<br/>
        Company: {company}<br/>
        Skill : {skill}<br/>
        Average: {Math.floor(calcAvg(average))}%</p>
        <button id="button" className='btn-sm btn-secondary'>new tag</button><br/>      <input className="input"type="text" name='tag' placeholder='add a tag'/>   
      </div>
      <hr/>
   </div>
  )
}
export default Robot
  