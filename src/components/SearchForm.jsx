import React, { useState } from 'react'

function SearchForm() {
  const [search, setSearch] = useState('')

  const onSearch = (e) => {
    setSearch(e.target.value)
   
  }

  return (
    <form id='search'>
        <input id='search'
        onChange={onSearch} 
        value={search}
        type='text' 
        placeholder='search recent transaction...'
        />
        <button type='submit'>search</button>


    </form>
  )
}

export default SearchForm;