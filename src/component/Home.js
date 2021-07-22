import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
export default function Home(){
    return(
        <div className = 'home'>
            <Link to ={'/booklist'}>
            <img src = '/images/thumb-1920-26102.jpeg'>

</img>
            </Link>
                
        </div>

    )
}