import React from 'react'
import '../App.css';

function Search({ handleInput }) {
    return (
        
        <section className="searchbox-wrap">
            
            <input
                type="text"
                color='white'
                label="Search.."
                className="searchbox"
                onChange={handleInput}
            />
            <i className="fa fa-search icon"></i>
        </section>
    )
}

export default Search