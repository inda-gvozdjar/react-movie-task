import React, { useState } from 'react'
import axios from 'axios'
import Search from './Search'
import Results from './Results'


const API = 'https://api.themoviedb.org/3/search/'
const DEFAULT_QUERY = '&api_key=347e5fe5f85757e218ff7a8184236af6'


function SearchApp(type) {
    const [state, setState] = useState({
        results: []
    })

    const handleInput = (e) => {
        let path = window.location.pathname.split("/")
        let quest = path[1]
        //if (type.location.pathname === "/movie/popular") {
        //    quest = "movie"
        //  }
        //  else if (type.location.pathname === "/tv/popular") {
        //     quest = "tv"
        // }
        // console.log(quest, type.location.pathname)
        // console.log("history", browserHistory.listen)
        if (e.target.value.length >= 3) {
            getContent(quest, e)
        } else if (e.target.value.length === 0) {
            setState({ results: [] })
        }
    }

    const getContent = (quest, e) => {
        if (quest === "tv" || quest === "movie") {
            axios(API + quest + "?query=" + e.target.value + DEFAULT_QUERY).then(({ data }) => {
                let results = data.results
                setState(prevState => {
                    return { ...prevState, results: results }
                })
            })
        }
    }
    return (
        <div>
            <main>
                <Search handleInput={handleInput} />
            </main>
            <Results results={state.results} />
        </div>
    )
}   

export default SearchApp