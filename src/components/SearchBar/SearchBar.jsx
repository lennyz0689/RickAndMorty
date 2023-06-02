import style from './SearchBar.module.css'

function SearchBar({characterID}) {
   return (
      <div className={style.search}>
         <div className={style.buscar}>
         <input type='search'/>
         <button onClick={characterID}>Agregar</button>
         </div>
      </div>
   );
}

export default SearchBar
