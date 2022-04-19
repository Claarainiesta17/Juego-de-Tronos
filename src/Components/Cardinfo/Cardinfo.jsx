import Navigator from '../../NavFooter/Navigator';
import './Cardinfo.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function Cardinfo({character}){
    const { t, i18n } = useTranslation("translation");

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
    };

    const [casa, setCasas] = useState({});

    useEffect(() => {
        axios({
            url: `https://api.got.show/api/show/houses/${character.house}`,
        })
        .then((response) => {
            setCasas(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        });
}, [character.house, setCasas]);

const [appearances, setAppearances] = useState({});
useEffect(()=>{
    axios({
        url: `https://api.got.show/api/show/characters/${character.appearances}`,
    })
    .then((response)=>{
        setAppearances(response.data);
    })
    .catch((error) => {
        console.log(error);
    });
}, [character.appearances, setAppearances]);

    return(
        <div key={character.id}>
        <Navigator/>
        <a href="http://localhost:3000/characters" className="flecha"><img className="flecha-img" src="https://cdn.zeplin.io/5e1c73baff24c3be01ba9cca/assets/e042365d-a1dc-4fef-ab6c-245a7c85f922.svg" alt="" /></a>
            <figure className="b-section">
                
            <img className="foto" src={character.image} alt=""/>
            <h2 className="nombre">{character.name}</h2>
            </figure>
            <div className="toda-seccion">


            <figure>
            <h3>{t("house")}</h3>
            {casa && <img className="logo-casa" src={casa.logoURL} alt=""/>}
            <p>{character.house}</p>
            </figure>


            <figure>
                
            <h3>{t("allegiances")}</h3>
            <p>{character.allegiances}</p>
            
            </figure>
    

            <figure>
        
            <h3 className='apariencias'>{t("appearances")}</h3>
            <SimpleBar style={{ maxHeight: 350 }}>
            <p>{character.appearances}</p>
            </SimpleBar>
           </figure>


            <figure>
            
            <h3>{t("father")}</h3>
            <p>{character.father}</p>
        
            </figure>
        
    
            <figure>
            <h3>{t("siblings")}</h3>
            <p>{character.siblings}</p>
        </figure>


            <figure>
            <h3>{t("titles")}</h3>
            <SimpleBar style={{ maxHeight: 350 }}>
            <p>{character.titles}</p>
            </SimpleBar>
            </figure>
            </div>
        </div>
    )


}