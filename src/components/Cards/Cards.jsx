import Card from '../Card/Card';
import style from './Cards.module.css'

function Cards({ characters }) {
   return (
      <div className={style.contenedor}>
         {characters.map(({id, name, status, species, gender, origin, image}) => {
            return <Card
               key={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         })}
      </div>
   )
}

export default Cards
