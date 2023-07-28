import { Link } from 'react-router-dom';
import style from './Card.module.css'

function Card(props) {
   const {onClose} = props;
   return (
      <div className={style.contenedor}>
         <div >
            <div className={style.close}>
               <button onClick={()=> onClose(props.id)} className={style.botonClose}>X</button>
            </div>
            <Link to={`/deatil/${props.id}`}>
            <div className={style.nombre}>
            <h2>{props.name}</h2>
            <img src={props.image} alt='' />
            </div>
            </Link>
         </div>
         <div className={style.description}>
            <h3>State: {props.status}</h3>
            <h3>Specie: {props.species}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>{props.origin.name}</h3>
         </div>
      </div>
   );
}

export default Card