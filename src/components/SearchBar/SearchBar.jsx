import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={style.search}>
         <div className={style.buscar}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=>onSearch(id)}>Agregar</button>
         </div>
      </div>
   );
}

export default SearchBar
