
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './PokemonDetails.module.css';

import axios from "axios";


export default () => {
    const  {idPokemon} = useParams();
    const [data, setData] = useState([]);    
    const [url, setUrl] = useState(`http://localhost:8000/api/${idPokemon}`)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    
    
    useEffect(() => {
        axios.get(url)
        .then( res =>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err=>{
            console.log(err)    
        })  
    }, [])
    
    
    
    return(
        <div className={styles.infoContainer}>
            <img className={styles.detailImg} src={data.image} alt="pokemons"/>
            <div className={styles.detailInfo} >
                <h2>Name:{data.name}</h2>
                <p>Description:{data.description}</p>
                <p>Type:{data.type}</p>
                <p>Evolutions:{data.evolution}</p>
                <p>Height:{data.height}</p>
                <p>Weight:{data.weight}</p>
                <button onClick={()=>{navigate('/')}}>Back</button>            
            </div>
        </div>
    )
    
}