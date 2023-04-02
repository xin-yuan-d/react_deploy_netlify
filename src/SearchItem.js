// functional component that shows a search bar: like add item
const SearchItem = ({ search, setSearch }) => {
    return (
        // on submit, prevent the page from refreshing right away
        // set search just sets the variable search in app.js to whatever it received upon event e
        <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchItem
