import React from 'react'
import SeacrhByName from './SeacrhByName'
import SearchByTag from './SearchByTag'

 const SearchBar = () => {
  return (
    <nav id='SearchBar'>
        <SeacrhByName/>
        <SearchByTag/>
    </nav>
  ) 
}

export default SearchBar