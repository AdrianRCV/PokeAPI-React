import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

export const Digimon = () => {
    const [digimons, setDigimons] = useState([]);

    useEffect(() => {
        const fetchRandomDigimons = async () => {
            let randomDigimons = [];

            // Intentamos obtener 10 Digimons aleatorios
            while (randomDigimons.length < 10) {
                const randomId = Math.floor(Math.random() * 100) + 1; // Aquí podemos ajustar el rango dependiendo de cuántos Digimons haya disponibles

                // Fetch de la API para obtener información sobre el Digimon
                const response = await fetch(`https://digi-api.com/api/v1/digimon/${randomId}`);
                const digimonData = await response.json();

                // Si el Digimon tiene datos, lo agregamos al array
                if (digimonData && !randomDigimons.some(d => d.nombre === digimonData.name)) {
                    randomDigimons.push({
                        nombre: digimonData.name,
                        img: digimonData.img, // Imagen del Digimon
                        nivel: digimonData.level, // Nivel del Digimon
                        tipo: digimonData.type || 'Desconocido', // Tipo (si existe en la respuesta)
                    });
                }
            }

            setDigimons(randomDigimons);
        };

        fetchRandomDigimons();
    }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

    return (
        <div className="digimon-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
            {digimons.map((digimon, index) => (
                <Card key={index} style={{ height: '350px', margin: '10px', width: '230px' }}>
                    <h3>Nombre: {digimon.nombre}</h3>
                    <img src={digimon.img} alt={digimon.nombre} style={{ width: '100%', height: 'auto' }} />
                    <p>Nivel: {digimon.nivel}</p>
                    <p>Tipo: {digimon.tipo}</p>
                </Card>
            ))}
        </div>
    );
};
