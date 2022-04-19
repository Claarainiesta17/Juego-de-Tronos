import { useEffect, useState } from "react"; 
import axios from "axios"; 
import Card from "../../Components/Card/Card"; 
import "./character.css" 
import Navigator from "../../NavFooter/Navigator";
import Footer from "../../Components/Footer/Footer";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Icono from "../../Components/Icono/Icono";

export default function CharactersPage(){ 
    const [characters, setCharacters]= useState([]) 
    const [charfiltered, setCharFiltered] = useState([]) 
    const [search, setSearch] = useState("") 
 
    const handleSearch = (ev)=>{ 
      setSearch (ev.target.value) 
      console.log(ev.target.value) 
    } 
 
  const filtrar = ()=>{ 
    if ( search !=""){ 
      const filtrados = characters.filter((character)=> character.name.toLowerCase().includes(search.toLowerCase())) 
    setCharFiltered(filtrados);
 
    } 
     
     
     
  } 
 
    const getCharacters = async ()=>{ 
      const res = await axios.get(`https://api.got.show/api/show/characters/`) 
 
      console.log(res.data) 
      setCharacters(res.data) 
      setCharFiltered(res.data) 
 
 
  } 
    useEffect(()=>{ 
        
        getCharacters() 
    },[]) 
 
    useEffect(()=>{

      filtrar()
  },[search])

  return (
    <section>
    <div className="b-navbuscador">
      <div className="b-Buscador">
      <Icono/>
      <Navigator/>
      <img className="lupa" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/15bd4fae-6df6-4fca-8e4a-4889bba7186c.svg" alt=""/>
    <input placeholder= { "    Buscar..."} className="input" type="text" onChange={handleSearch}/>
    </div>
    </div>
    <SimpleBar style={{ maxHeight: 400}}>
    <div className="c-gallery">
      {charfiltered.map((character) => (
        <Card character={character} />
      ))}
    </div>
    </SimpleBar>
    <Footer/>
    </section>
  )

}