import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';

//  const URL = 'https://api.hatchways.io/assessment/students'
export const Context = createContext();

export const Provider = (props) => {
    
    const [students , setStudents] = useState([])
    
    //Function that runs as page loads and fetches data from API using useEffect Hook
    // useEffect(() => {
    //     fetch(URL) 
    //       .then((res) => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         setStudents(data.students);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }, []);
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_URL)
            .then(res => {
                setStudents(res.data.students)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <Context.Provider value={students}>
            {props.children}
        </Context.Provider>
    )
}


