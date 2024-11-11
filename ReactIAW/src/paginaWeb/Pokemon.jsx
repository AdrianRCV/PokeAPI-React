import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
  
    useEffect(() => {
        const fetchRandomPokemons = async () => {
            let randomIds = [];
            let randomPokemons = [];

            while (randomPokemons.length < 10) {
                const randomId = Math.floor(Math.random() * 151) + 1;
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()).then(data => ({numero: data.id,img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,imgJuego: data.sprites.front_default,imgCvg: data.sprites.other.dream_world.front_default,nombre: data.name,experiencia: data.base_experience,hp: data.stats[0].base_stat,ataque: data.stats[1].base_stat,defensa: data.stats[2].base_stat,especial: data.stats[3].base_stat,}));
                    randomPokemons.push(pokemonData);
                }
            }
            setPokemons(randomPokemons); 
        };
        
        fetchRandomPokemons();
    }, []);

    return (
        <div className="pokemon-list" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center', textAlign:'center'}}>
            {pokemons.map((pokemon, index) => (
                <Card key={index} style={{ height: '350px', margin: '10px', width: '230px',}}>
                    <h3> Número: {pokemon.numero}   {pokemon.nombre}</h3>
                    <img src={pokemon.img} alt="pokemon" style={{ width: '100%', height: 'auto' }} />
                    <p>HP:{pokemon.hp} Ataque:{pokemon.ataque} Defensa:{pokemon.defensa}</p>
                </Card>
            ))}
        </div>
    );
};

export const Pokemon2 = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchRandomPokemons = async () => {
            let randomIds = [];
            let randomPokemons = [];

            while (randomPokemons.length < 10) {
                const randomId = Math.floor(Math.random() * (251 - 152 + 1)) + 152;
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()).then(data => ({numero: data.id,img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,imgJuego: data.sprites.front_default,imgCvg: data.sprites.other.dream_world.front_default,nombre: data.name,experiencia: data.base_experience,hp: data.stats[0].base_stat,ataque: data.stats[1].base_stat,defensa: data.stats[2].base_stat,especial: data.stats[3].base_stat,}));
                    randomPokemons.push(pokemonData);
                }
            } 
            setPokemons(randomPokemons);
        }; 
        fetchRandomPokemons();
    }, []);

    return (
        <div className="pokemon-list" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center', textAlign:'center'}}>
            {pokemons.map((pokemon, index) => (
                <Card key={index} style={{ height: '350px', margin: '10px', width: '230px',}}>
                    <h3> Número: {pokemon.numero}   {pokemon.nombre}</h3>
                    <img src={pokemon.img} alt="pokemon" style={{ width: '100%', height: 'auto' }} />
                    <p>HP:{pokemon.hp} Ataque:{pokemon.ataque} Defensa:{pokemon.defensa}</p>
                </Card>
            ))}
        </div>
    );
};

export const Pokemon3 = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchRandomPokemons = async () => {
            let randomIds = [];
            let randomPokemons = [];

            while (randomPokemons.length < 10) {
                const randomId = Math.floor(Math.random() * (386 - 252 + 1)) + 252;
                if (!randomIds.includes(randomId)) {
                    randomIds.push(randomId);
                    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(res => res.json()).then(data => ({numero: data.id,img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,imgJuego: data.sprites.front_default,imgCvg: data.sprites.other.dream_world.front_default,nombre: data.name,experiencia: data.base_experience,hp: data.stats[0].base_stat,ataque: data.stats[1].base_stat,defensa: data.stats[2].base_stat,especial: data.stats[3].base_stat,}));
                    randomPokemons.push(pokemonData);
                }
            } 
            setPokemons(randomPokemons);
        }; 
        fetchRandomPokemons();
    }, []);

    return (
        <div className="pokemon-list" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center', textAlign:'center'}}>
            {pokemons.map((pokemon, index) => (
                <Card key={index} style={{ height: '350px', margin: '10px', width: '230px',}}>
                    <h3> Número: {pokemon.numero}   {pokemon.nombre}</h3>
                    <img src={pokemon.img} alt="pokemon" style={{ width: '100%', height: 'auto' }} />
                    <p>HP:{pokemon.hp} Ataque:{pokemon.ataque} Defensa: {pokemon.defensa}</p>
                </Card>
            ))}
        </div>
    );
};