import { useEffect, useState } from "react";
import Navigator from "../../NavFooter/Navigator";
import axios from "axios";
import './Cronologia.css';
import Footer from "../../Components/Footer/Footer";
import Icono from "../../Components/Icono/Icono";
export default function Cronologia(){
 
  
   const [characters, setCharacters] = useState([]);
   const [showCronology, setShowCronology] = useState(false);
   
     const getCharacters = async ()=>{ 
        const res = await axios.get(`https://api.got.show/api/show/characters/`) 
   
        console.log(res.data) ;
        setCharacters(res.data); 
        filterCharacter(res.data);
       
     };
     const filterCharacter = (charact) =>{
       setShowCronology(!showCronology);
       const characterFilt = charact
       .filter((character)=> character.age && character.age.age)
       .sort((prev, next) =>{
         return showCronology
         ? next.age.age - prev.age.age 
         : prev.age.age - next.age.age
       })
       setCharacters(characterFilt)
     };
     useEffect(()=>{
       getCharacters()
     }, []);
     console.log(characters);

     const parCharacter = [];
     const inparCharacter = [];

     for (let i = 0; i < characters.length; i++){
       if (i % 2 === 0){
         parCharacter.push(characters[i]);
       }else {
         inparCharacter.push(characters[i]);
       }
     }
     
      
      return(
<div>
        <div>
        <Icono/>
            <Navigator/>
        </div>
        <section className="timeline-container">
<div className="contenedorCronology">
        <div className="box-izq">
          <button
          id="asc"
          className="b-redondo" onClick={()=>filterCharacter(characters)}
          >
            {parCharacter[0] && parCharacter[0].age.age}
          </button>
          <img src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/26cb7354-51d3-4c56-b9bb-2f455e369f0a.svg" width="20px" alt="" className={showCronology ? "flecha" : "flecha_reves"}/>
          {parCharacter.map((character)=>(
            <div className="box-izq-small" key={character.name}>
              {character.age && (
                <p className="box-izq-small_age">{character.age.age}</p>
              )}

                <p>{character.name}</p>
                <img className="box-izq-small_img" src={character.image} alt="img"/> </div>
          ))}

        </div>
<div className="der-box-big">
  {inparCharacter.map((character)=>(
    <div className="der-box-small" key={character.name}>
      {character.age  && (
        <p className="der-box-small_age">{character.age.age}</p>
      )}
      <p>{character.name}</p>
      <img className="der-box-small_img"
      src={character.image} alt="img"/>

    </div>
  ))}
</div>
      </div>
      </section>
      <Footer/>
      </div>
    )
}