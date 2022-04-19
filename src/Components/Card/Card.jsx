
import { generatePath, Link } from "react-router-dom"
import "./Card.css";
export default function({character}) {
    return(<>
        {character.image &&(
        <Link to={generatePath('/characters/:name', {name: character.name})}>
            <div>
                <section key={character.id}>
                    <img class="imagen-personajes" src={character.image} alt={character.id}/>
                   <article>
                   <h1 class="character-name">{character.name}</h1>
                   </article>
                </section>
        </div>
        </Link>)}</>
    )
}