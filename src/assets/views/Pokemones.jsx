import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Pokemones = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonData, setPokemonData] = useState([]);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const pokemonList = async () => {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=300');
                const data = await res.json();
                const dataPokemon = data.results.map((pokemon) => pokemon.name);
                setPokemonData(dataPokemon);
            } catch (error) {
                console.log(error);
            }
        };

        pokemonList();
    }, []);

    const pokemonInfo = () => {
        if (!pokemon) {
            setError('Debes elegir un pokémon');
            navigate('/pokemones');
        } else {
            setError('');
            navigate(`/pokemones/${pokemon}`);
        }
    };

    return (
        <section className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mt-2'>Selecciona un Pokémon</h1>
            <select 
                onChange={({ target }) => setPokemon(target.value)}
                className='form-select-lg mb-3'
            >
                <option value="">Pokemones </option>
                {pokemonData.map((name, index) => (
                <option 
                    key={index} 
                    value={name}
                >
                {name}
                </option>
                ))}
            </select>
            <button 
                onClick={pokemonInfo}
                className='btn btn-secondary btn-md'
            >
            Ver Detalles
            </button>
            <p>{error}</p>            
        </section>
    )
}

export default Pokemones