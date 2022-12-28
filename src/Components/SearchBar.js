import React from 'react'

const SearchBar = ({ search }) => {
  return (
    <div className='search-container'>
      <input className='search-inp' type="search" placeholder='Search by name, email or role' onChange={(e) => search(e.target.value.toLowerCase())} />
    </div>
  )
}

export default SearchBar
