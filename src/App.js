import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Deatil from './components/Deatil/Deatil';
import { useState } from 'react';
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      const characterFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(characterFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
         <Route path='/home' element={
            <Cards characters={characters} onClose={onClose}/>
         }/>
         <Route path='/about' element={
            <About />
         }/>
         <Route path='/deatil/:id' element={
            <Deatil />
         }/>
         </Routes>
      </div>
   );
}

export default App;
