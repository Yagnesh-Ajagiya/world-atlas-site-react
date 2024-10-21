import React from 'react'

function SearchFilter({search, setSearch, filter, setFilter,countries , setCountries}) {
    const handleInputChange = (e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSelectChange =(e)=>{
        setFilter(e.target.value)
    }

    const sortCountries = (value) =>{
       const sortCountry = [...countries].sort((a,b)=>{
            return value === "asc"
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
       })

       setCountries(sortCountry)
    }
        


  return (
    <section className="section-searchFilter container ">
        <input type="text" name="" id="" placeholder='Search' value={search} onChange={handleInputChange}/>

        <div className='sorting-button'>
        <div>
            <button onClick={() => sortCountries("asc")}>Ascending</button>
        </div>

        <div>
            <button onClick={() => sortCountries("des")}>Descending</button>
        </div>
        </div>

        <div>
            <select name="" id="" className='select-section' value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>

    </section>
  )
}

export default SearchFilter