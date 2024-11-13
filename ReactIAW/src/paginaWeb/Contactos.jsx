import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

export const RandomAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.results[0].picture.large); 
      })
  }, []); 

  if (!avatarUrl) {
    return <div>Cargando avatar...</div>; 
  }

  return (
    <div>
      <Image src={avatarUrl} roundedCircle width={100} height={100} style={{margin:'0 auto',display:'block'}} />
    </div>
  );
};

