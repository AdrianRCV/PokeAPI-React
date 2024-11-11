import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        // Función para obtener 10 Pokémon aleatorios
        const fetchRandomPokemons = async () => {
            let randomIds = [];
            let randomPokemons = [];

            // Generamos 10 IDs aleatorios entre 1 y 151
            while (randomPokemons.length < 10) {
                const randomId = Math.floor(Math.random() * 151) + 1;
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()).then(data => ({numero: data.id,img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,imgJuego: data.sprites.front_default,imgCvg: data.sprites.other.dream_world.front_default,nombre: data.name,experiencia: data.base_experience,hp: data.stats[0].base_stat,ataque: data.stats[1].base_stat,defensa: data.stats[2].base_stat,especial: data.stats[3].base_stat,}));
                    randomPokemons.push(pokemonData);
                }
            }
            setPokemons(randomPokemons);  // Guardamos los 10 Pokémon aleatorios en el estado
        };
        
        fetchRandomPokemons();  // Llamamos a la función
    }, []);

    return (
        <div className="pokemon-list" >
            {pokemons.map((pokemon, index) => (
                <Card key={index} style={{ height: '400px', margin: '10px', width: '220px'}}>
                    <h3> Número: {pokemon.numero} - {pokemon.nombre}</h3>
                    <img src={pokemon.img} alt="pokemon" style={{ width: '100%', height: 'auto' }} />
                    <p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p>
                </Card>
            ))}
        </div>
    );
};
