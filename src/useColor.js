import { useState } from 'react';

function useColor() {
  const [color, setColor] = useState(getRandomColor());

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  return color
}

export default useColor;
