import './App.css';
// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {

   const [characters, setcharacters] = useState([])

   const onSearch = () =>{
      setcharacters([...characters, example])
   }

   return (
      <div className='App'>
         <Nav/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
