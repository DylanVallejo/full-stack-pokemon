import React, { useEffect, useState } from 'react'
import styles from './Main.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Main =  () => {
    // const [ message, setMessage ] = useState("Loading...")
    const [pokemon, setPokemon] = useState([]);
    const [search, setSearch] = useState(" ");
    
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>{
                console.log(res.data)
                setPokemon(res.data)
            })       
    }, []);
    
    

    return (
        <div className={styles.mainContainer}>
                {/* <input/> */}
                <input onChange={event=>{setSearch(event.target.value)}} className={styles.searchBar} />
                {pokemon.map((key, index)=>{
                    return (
                        <div className={styles.mapContainer} key={index}>
                            <img className={styles.imgApi} src={key.image} alt="pokemons"/>
                            <h2 >
                                {key.name}
                            </h2>
                            <p>{key.description}</p>
                            <button className={styles.cardDetailBtn} onClick={()=>{navigate('api/'+ key._id)}}>Detalles</button>
                        </div>
                    )})
                };
        </div>
    )
}

export default Main;