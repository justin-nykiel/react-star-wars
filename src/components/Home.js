import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './common/Spinner'
import './Home.css'

function Home() {

    const[starship, setStarships] = useState([])
    const[loading,setLoading] = useState(true)

    useEffect(()=>{
        let url1 = 'https://swapi.dev/api/starships/'
        let url2 = 'http://swapi.dev/api/starships/?page=2'
        let url3 = 'http://swapi.dev/api/starships/?page=3'
        const myarray = []
        Promise.all([axios.get(url1),axios.get(url2), axios.get(url3)])
        .then(responses=>{
        responses.map(response=>myarray.push(...response.data.results))
        setStarships(myarray)
        setLoading(false)
        })
    },[])
    const arrStar = starship.map(starship =>
        <div className="ship"><Link to={{pathname: '/starship', state: starship}} key={starship.name}>{starship.name}</Link></div>)
    const display = () => {
        if(loading){
            return <Spinner/>
        } else {
            return <div className="mainCont">{arrStar}</div>
        }
    }
  return (
      <div >
        <div >{display()}</div>
      </div>
    
    )
}

export default Home;

