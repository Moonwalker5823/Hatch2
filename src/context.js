import React, { useState, useEffect, createContext} from 'react'
import axios from 'axios';

export const Context = createContext();

export const Provider = (props) => {
    
    const [students , setStudents] = useState([])
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_URL)
            .then(res => {
                setStudents(res.data.students)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <Context.Provider value={students} >
            {props.children}
        </Context.Provider>
    )
}


