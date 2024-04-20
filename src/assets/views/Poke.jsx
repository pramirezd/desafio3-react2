import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Pokedex from '../components/Pokedex';

function Poke() {

    const { pokemon } = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/pokemones');
    }

    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <Pokedex pokemon={pokemon} />
            <button 
                onClick={goBack}
                className='btn btn-secondary btn-md m-3'
            >
            Regresar
            </button>
        </div>
    )
}

export default Poke