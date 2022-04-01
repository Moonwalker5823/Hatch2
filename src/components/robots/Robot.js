import React from 'react'
import { Context } from '../../context'
 


const Robot = (props) => {

const calcAvg = (...arr) => 
   arr.reduce((a, b) => a + parseInt(b), 0) /
  arr.length

  const {firstName, lastName, email, company, skill, average, pic} = props
  return (
    <div>
      <>
      <img id="studentPic" src={pic} alt={`${firstName}${lastName}pic`}/>
      </>
      <h1 id="StudentNameHeading">{firstName} {lastName}</h1>
      <p>Email: {email}<br/>
        Company: {company}<br/>
        Skill : {skill}<br/>
        Average: {calcAvg(average)}%</p>
        <button id="button" className='btn btn-secondary'>new tag</button>
      <hr/>
   </div>
  )
}
export default Robot
  