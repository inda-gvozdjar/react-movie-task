import React, { Component } from 'react'
import '../App.css'


const API = 'https://api.themoviedb.org/3/';
const DEFAULT_QUERY = '?api_key=347e5fe5f85757e218ff7a8184236af6';


class Selected extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
        this.selected = this.selected.bind(this)
    }

    componentDidMount() {
        this._isMounted = true;
        let path = window.location.pathname.split("/")
        if (path[3])
            this.selected(path[2] + '/' + path[3])
    }

    selected(match) {
        fetch(API + match + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            })
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const infos = this.state.data;
        return (
            <div>
                <div className='details-main' >
                    <div className='left-side'>
                    <h1>{infos.name ? infos.name : infos.title ? infos.title : <span>Title not available! </span>}</h1>
                        {infos.poster_path ? <img className="detail-image" alt="img" src={"http://image.tmdb.org/t/p/w185/" + infos.poster_path} /> : <span>Image not available!</span>}
                        </div>
                    <div className="detail-info">
                        <span> {infos.overview ? infos.overview : <span >Description is not available!</span>}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Selected;





