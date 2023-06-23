import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'

function Nav() {
    return (
        <div className={style.contend}>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )

}
export default Nav
