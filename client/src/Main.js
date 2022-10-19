import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default () => {
    // const [ message, setMessage ] = useState("Loading...")
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res=>{
                console.log(res.data)
                setPokemon(res.data)
            })       
    }, []);
    return (
        <div>

                {pokemon.map((key, index)=>{
                    return (
                        <div key={index}>
                            <h2 >
                                {key.name}
                            </h2>
                            <img  src={key.image}/>
                            
                        </div>
                    )
                })
                }
        </div>
    )
}

