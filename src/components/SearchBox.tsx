import iconSearch from '../assets/search.svg'

export const SearchBox = () => {

    return (
        <div className="searchBox">
            <input
                type="text"
                placeholder="Search here..."
                required
            />
            <button onClick={()=>{}}>
                <img src={iconSearch} alt="search icon" />
            </button>
        </div>
    )
}