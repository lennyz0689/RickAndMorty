import style from './SearchBar.module.css'

function SearchBar({onSearch}) {
   return (
      <div className={style.search}>
         <div className={style.buscar}>
         <input type='search'/>
         <button onClick={onSearch}>Agregar</button>
         </div>
      </div>
   );
}

export default SearchBar
