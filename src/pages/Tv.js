import React, { Component } from 'react';

import { Link } from "react-router-dom"
import Box from '../components/Box';
import '../App.css';

const API = 'https://api.themoviedb.org/3';
const DEFAULT_QUERY = '?api_key=347e5fe5f85757e218ff7a8184236af6';

class Tv extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            newData: [],
            path : window.location.pathname.split("/")
        }
        this.handleChanges = this.handleChanges.bind(this)
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.handleChanges()
        }

    }

    handleChanges() {
        fetch(API + '/tv/popular/' + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => {
                this.setState(prevState => {
                    return { ...prevState, data: data.results }
                })
            });

    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { data } = this.state;
        // console.log("ojsaaa!#", data)
        return (
            
            <div className='ItemHolder'>
        {
        data ? data.slice(0, 10).map((box) => (
            <Link to={`/details/${this.state.path[1]}/${box.id}`} className="details"  key={box.id} >
          <div  className='ItemBox' key={box.id} >
             <Box box={box} key={box.id} />
          </div></Link>
        )): <h1>Something went wrong</h1>}
</div>
        );
    }
}
export default Tv;



