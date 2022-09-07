
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function RenderizadoFormulario() {
  const [img] = useState([{direccion:"https://pbs.twimg.com/media/EgSfz_zXoAQZVkR.jpg", nombre: "Messiento", descripcion: "Melhor jogador do mundo"}, 
  {direccion: "https://ih1.redbubble.net/image.868605449.9765/fposter,small,wall_texture,product,750x1000.jpg", nombre: "Bichinho", descripcion: "Campeão europeu"}, 
  {direccion: "https://img.ifunny.co/images/0af0c98236e4d63a04c505ef428f54e8e1ba8f37a3f34604e57ad9bd81cffe0a_1.jpg", nombre: "Neymar", descripcion: "neimar"}]);

  return(
    <div className='Card'>
    <h2>Jugadores</h2>
    {img.map(jugador => <Card direc={jugador.direccion} nombre={jugador.nombre} descripcion={jugador.descripcion}/>)}
    </div>
  )
}

function App(){
  const [text, setText] = useState('Hola mundinho');

  const onAppButtonClick = () => {
    console.log("Click en App!");
    setText('Nuevo texto');
  }

  return (
    <div className="App">
      <h1>{text}</h1>
      <Button 
      ButtonClick = {onAppButtonClick}
      name="Aceptar"/>
      <RenderizadoFormulario/>
    </div>
  );


}



export default App;