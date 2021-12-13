import '../App.css';
import { Link } from "react-router-dom"

function Box({ box }) {
  return (
    <div className='ItemBox' >
  
        <img src={box.poster_path ? "http://image.tmdb.org/t/p/w185/" + box.poster_path : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-no-image-available-icon-vector-flat.jpg"} popularity={box.popularity} overview={box.overview}  className="ItemImage" alt='img'/>
        <h1 className='ItemTitle'>{box.name ? box.name : box.title}</h1>
        </div>
  );
}

export default Box;