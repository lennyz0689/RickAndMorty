import './App.css';
// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

function App() {

   const [characters, setcharacters] = useState([])

   return (
      <div className='App'>
         <Nav/>
         <Cards characters={characters} />
      </div>
   );
}

export default App;
