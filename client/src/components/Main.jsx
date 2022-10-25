import React, { useEffect, useState } from 'react'
import styles from './Main.module.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const Main =  () => {
    // const [ message, setMessage ] = useState("Loading...")
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState(" ");
    const [errors, setErrors] = useState([])
    
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>{
                console.log(res.data)
                setPokemon(res.data)
            })      
            .catch(err=>{
                console.log(err)    
            })  
    }, []);
    return (
        <div className={styles.mainContainer}>
                <div className={styles.searchContainer}>
                    <label htmlFor="searchBar">Search</label>
                    <input onChange={event=>{setSearch(event.target.value)}} className={styles.searchBar} />
                </div>
                {pokemon.map((key, index)=>{
                    return (
                        <div className={styles.mapContainer} key={index}>
                            <img className={styles.imgApi} src={key.image} alt="pokemons"/>
                            <div className={styles.infoContainer}>
                                <h2 className={styles.infoTitle} >
                                    {key.name}
                                </h2>
                                <p>{key.description}</p>
                                <Button variant="primary" className={styles.cardDetailBtn} onClick={()=>{navigate('api/'+ key._id)}}>Detalles</Button>
                            </div>
                        </div>
                    )})
                }
        </div>
    )
}

export default Main;