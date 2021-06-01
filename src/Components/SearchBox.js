import React from 'react'

const SearchBox = (props) => {
    const {searchChange} = props;
    return(
        <div>
            <input className="ba b--green pa2 bg-lightest-blue" type="search" placeholder="Search Robots" onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;