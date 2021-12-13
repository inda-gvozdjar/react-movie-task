import React from 'react'

import { Link } from "react-router-dom"
import Box from './Box'

function Results({ results }) {
    return (
        <div className='ItemHolder'>
        { results.map(result => (
            <Link to={`/details/${window.location.pathname.split("/")[1]}/${result.id}`} className="details"  key={result.id} >
          <div  className='ItemBox' key={result.id} >
             <Box key={result.id} box={result} />
          </div></Link>
        ))}
        
</div>

        
    )
}

export default Results

