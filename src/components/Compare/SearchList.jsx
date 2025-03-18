

const SearchList = () => {


    return (
        <div className='search-list'>
            <div className="search-container">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pretraga namirnica..."
                />
            </div>
            <ul>
                {filteredFoods.map((item, index) => (
                    <li key={index}>
                        
                        <label>{item.name}</label>
                        {/* <button  onClick={() => addToComapreList(item)}>+</button> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchList;