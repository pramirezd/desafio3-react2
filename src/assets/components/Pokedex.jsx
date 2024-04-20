import React, { useEffect, useState } from 'react'

function Pokedex( { pokemon } ) {

    const [pokedex, setPokedex] = useState({
        name: '',
        img: '',
        stats: [],
        type: [],
    });

    useEffect(() => {
        const pokedexInfo = async () => {
          try {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
            );
            const data = await res.json();
            setPokedex({
              name: data.name,
              img: data.sprites.other.showdown.front_default,
              stats: data.stats,
              type: data.types,
            });
          } catch (error) {
            console.error(error);
          }
        };
    
        pokedexInfo();
      }, []);

    return (
        <div className="card flex-row align-items-center">
            <img
                src={pokedex.img}
                alt={pokedex.name}
                width={100}
            />
            <div className="card-body">
                <h2>{pokedex.name}</h2>
                <ul>
                    {pokedex.stats.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                    ))}
                    <li>{pokedex.type.map(
                            (type, index) =>
                                <span
                                    key={index}
                                    className="badge bg-secondary"
                                >
                                {type.type.name}
                                </span>)
                            }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pokedex