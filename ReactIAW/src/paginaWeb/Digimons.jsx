import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export const Digimon = () => {
    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        const fetchRandomDigimons = async () => {
            let randomDigimons = [];

            while (randomDigimons.length < 10) {
                const randomId = Math.floor(Math.random() * 1460) + 1;

                const response = await fetch(`https://digi-api.com/api/v1/digimon/${randomId}`);
                const digimonData = await response.json();

                if (digimonData && !randomDigimons.some(d => d.nombre === digimonData.name)) {
                    randomDigimons.push({
                        id: digimonData.id,
                        nombre: digimonData.name,
                        img: digimonData.images && digimonData.images[0] ? digimonData.images[0].href : '', 
                        nivel: digimonData.levels && digimonData.levels[0] ? digimonData.levels[0].level : '' ||'Sin definir', 
                        tipo: digimonData.types && digimonData.types[0] ? digimonData.types[0].type: '' ||'Sin definir', 
                    });
                }
            }
            setDigimons(randomDigimons);
        };
        fetchRandomDigimons();
    }, []); 

    return (
        <div className="digimon-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', textAlign:'center' }}>
            {digimons.map((digimon, index) => (
                <Card key={index} style={{ height: 'auto', margin: '10px', width: '230px' }}>
                    <h3>Número: {digimon.id}   {digimon.nombre}</h3>
                    <img src={digimon.img} alt={digimon.nombre} style={{ width: '100%', height: '100%' }} />
                    <p>Nivel: {digimon.nivel} - Tipo: {digimon.tipo}</p>
                </Card>
            ))}
        </div>
    );
};
