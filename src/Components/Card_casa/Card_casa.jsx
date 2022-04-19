import { generatePath, Link } from 'react-router-dom'
import './Card_casa.css'

export default function ({casa}){
    return(
    <>

       {casa.logoURL && ( 

            <Link to={generatePath('/casas/:name', { name:casa.name })}>
               
            <div>
          
              <figure key={casa.id}>
               <img class="imagen-casa" src={casa.logoURL} alt=""/>
            <h2>{casa.name}</h2> 
            </figure>
          </div>
          </Link>)} </>
          )
}
