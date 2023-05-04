import React, { useState } from 'react'
import './Firstpage.css'
import bulbasaur from '../images/bulbasaur 1.png'
import pokeball1 from '../images/pokeball 1.png'
import pokeball2 from '../images/pokeball 2.png'
import pokeball3 from '../images/pokeball 3.png'
import moves from '../images/move 1.png'
import ampharos from '../images/ampharos 1.png'  
import Blissey from '../images/Blissey 1.png'
import garchomp1 from '../images/garchomp 1.png' 
import gardevoir from '../images/gardevoir 1.png'
import gengar1 from '../images/gengar 1.png'
import politoad from '../images/politoad 1.png'
import moonicon from '../images/moon.png'
import sunicon from '../images/sun.png'
// import  Moves from './components/firstpage/Moves';    
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [darkmode, setDarkmode] = useState(false)
    let history = useNavigate();

    const ClickMoves = () =>{
        history("/Moves");
    }
    return (
        <>
            <div>
                <div className={`header ${darkmode ? "header_darkmode_active" : "" }`}>Pokedex
                    <button onClick={() => setDarkmode(!darkmode)}>{darkmode? <div><img src={moonicon}/></div> : <div><img src={sunicon}/></div>}</button></div>
                <div className={`container ${darkmode ? "container_darkmode_active" : ""}`}>
                    <div className={`pokemons ${darkmode ? "pokemons_darkmode_active" : ""}`} onClick={()=>console.log("pokemons")}><p>Pokemons</p>
                        <img src={bulbasaur} className='bulbasaur' />
                    </div>
                    <div className={`items ${darkmode ? "items_darkmode_active" : ""}`} onClick={()=>console.log("items")}><p>Items</p>
                        <img src={pokeball1} className='pokeball1' />
                        <img src={pokeball2} className='pokeball2' />
                        <img src={pokeball3} className='pokeball3' />
                    </div>
                    <div className={`moves ${darkmode ? "moves_darkmode_active" : ""}`} onClick={ClickMoves}><p>Moves</p>
                        <img src={moves} className='moveimg' /></div>
                    <div className={`team ${darkmode ? "team_darkmode_active" : ""}`} onClick={()=>console.log('team')}><p>Your Team</p>
                        <img src={politoad} className='politoad' />
                        <img src={gengar1} className='gengar1' />
                        <img src={Blissey} className='Blissey' />
                        <img src={ampharos} className='ampharos' />
                        <img src={garchomp1} className='garchomp1' />
                        <img src={gardevoir} className='gardevoir' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstPage
