import React from 'react'
import Robot from './Robot'
import { Context } from '../../context'
import Spinner from '../layout/Spinner'


const Robots = () => {
  return (
    <Context.Consumer>
    {value => {
        console.log(value)
        if(value === undefined) {
          return <Spinner/>
        } else {
          return (
            <div>
                {value.map(item => (
                <Robot 
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                company={item.company}
                skill={item.skill}
                average={item.grades}
                pic={item.pic}/>
                ))}
            </div>
          );
        }
    }
    }
  </Context.Consumer>
)
}

export default Robots
