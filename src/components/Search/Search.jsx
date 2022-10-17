import './Search.style.css'

const Search =({search,setSearch})=>{
    const searchHandler =(e)=>{
        setSearch(e.target.value)
    }

    return(
        <div>
            <div className='search-container'>
                <input className='search-input' onChange={searchHandler} value={search} placeholder={'search ...'} />
            </div>
        </div>
    )
}

export default Search;