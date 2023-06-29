import { useState } from "react";

const Donot = () => {
    const colors = [
        "/fondo1.jpg",
        "/fondo2.jpg",
        "/fondo3.jpg",
        "/fondo4.jpg"
      ];
  const [fondo, setFondo] = useState(0);
  const [ click, setClick ] = useState(false);    
  const doNot = () => {
    if(!click){
    alert("¡NO! los cambios de fondo son feos, por favor presiona F5 para cuidar tus ojos");
    setClick(true);
    }
    if (fondo < colors.length - 1) {
      setFondo(fondo + 1);
    } else {
      setFondo(0);
    }
    document.body.style.backgroundImage =  `url(${colors[fondo]})`
  };

  return (
    <div className="container-donot">
      <button className="button-donot" onClick={doNot}>
        <span className="span-donot">DO NOT PRESS - USE F5</span>
      </button>
    </div>
  );
};

export default Donot;