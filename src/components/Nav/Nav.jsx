import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './Nav.module.css'

function Nav({onSearch}) {
    return (
        <div className={style.contend}>
            <Link></Link>
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to='/about'>About</Link>
            </button>
            <button>
                <Link to='/home'>Home</Link>
            </button>
        </div>
    )
}
export default Nav
