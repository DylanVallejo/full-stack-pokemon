import React, { useEffect, useState } from 'react'
import styles from './Main.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default () => {
    // const [ message, setMessage ] = useState("Loading...")
    const [pokemon, setPokemon] = useState([])
    
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>{
                console.log(res.data)
                setPokemon(res.data)
            })       
    }, [pokemon]);
    return (
        <div className={styles.mainContainer}>

                {pokemon.map((key, index)=>{
                    return (
                        <div className={styles.mapContainer} key={index}>
                            <img className={styles.imgApi} src={key.image}/>
                            <h2 >
                                {key.name}
                            </h2>
                            <p>{key.description}</p>
                            <button className='cardDetailBtn' onClick={()=>{navigate('api/'+ key._id)}}>Detalles</button>
                            
                        </div>
                    )
                })
                }
                
        </div>
    )
}

