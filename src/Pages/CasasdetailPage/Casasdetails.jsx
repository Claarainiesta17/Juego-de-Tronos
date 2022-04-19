import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card_casa_info from "../../Components/Card_casa_info/Card_casa_info";
import './Casasdetail.css';
export default function Casasdetails(){
     const urlCasas = 'https://api.got.show/api/show/houses/'
     const [casa, setCasa] = useState ("")
     let {name} = useParams('name')

     useEffect(()=>{
         const getCasas = async () =>{
             const res = await axios.get(`${urlCasas}/${name}`)
             console.log(res.data)
             setCasa(res.data[0])
         }
         getCasas()
         console.log(Casasdetails)
     }, [])
      return(
          <div>
      <Card_casa_info casa={casa}/>
      </div>

      )}
