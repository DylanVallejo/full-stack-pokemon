
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styles from './PokemonDetails.module.css';

import axios from "axios";


const  PokemonDetails =  () => {
    
    const {idPokemon} = useParams();
    const [data, setData] = useState([]);  
    const url = `http://localhost:8000/api/${idPokemon}`
    // const [url, setUrl] = useState(`http://localhost:8000/api/${idPokemon}`)
    // const [errors, setErrors] = useState([])
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    
    return(
        <div className={styles.infoMainContainer}>
            <div className={styles.detailImgContainer}>
                <h2>Name:{data.name}</h2>
                <img className={styles.detailImg} src={data.image} alt="pokemons"/>
            </div>
            <div className={styles.detailInfoContainer}>
                
                <table className={styles.tableData}>
                    <tbody>
                        <tr>
                            <th>Properties</th>
                            <th>values</th>
                        </tr>
                        <tr>
                            <td><span className={styles.spanLines}>Description</span></td>
                            <td><span className={styles.spanLines}>Description</span></td>
                            <td><span className={styles.spanLines}>Description</span></td>
                        </tr>
                        <tr>
                            <td><p>{data.description}</p></td>
                            <td><p>{data.description}</p></td>
                            <td><p>{data.description}</p></td>
                        </tr>
                    </tbody>
                </table>
                <p><span className={styles.spanLines}>Description</span>: {data.description}</p>
                <p><span className={styles.spanLines}>Type</span>: {data.type}</p>
                <p><span className={styles.spanLines}>Evolutions</span>: {data.evolution}</p>
                <p><span className={styles.spanLines}>Height</span>: {data.height}</p>
                <p><span className={styles.spanLines}>Weight</span>: {data.weight}</p>
                <Button className={styles.detailBtn} onClick={()=>{navigate('/')}}>Back</Button>            
            </div>
        </div>
    )
    
}

export default PokemonDetails;