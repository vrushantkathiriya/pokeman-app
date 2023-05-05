import React, { useEffect, useState } from 'react'
import './yourteam.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getallpokemon } from '../../redux/teamSlice'
import balbasaur from '../images/bulbasaur 1.png'
const YourTeam = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [darkmode, setDarkmode] = useState(false)
  const [name, setName] = useState('')
  const { isLoading, pokemon, error } = useSelector((state) => state.pokemon)
  console.log(pokemon)
  const onchangeinput = (e) => {
    setName(e.target.value)
    if (e.target.value == '') {
      dispatch(getallpokemon())
    }
  }
  const fetchpokemon = () => {
    if (name == "") {
      window.alert("please enter pokemon name")
    } else {
      dispatch(getallpokemon(name))
    }
  }
  useEffect(() => {
    dispatch(getallpokemon())
  }, [])
  // const onBlur = () => {
  //   setUserOnInput(true)
  // }
  // const onFocus = () => {
  //   // setUserOnInput(false)
  // }
  console.log(pokemon,'fdhfdhdd')
  return (
    <>
      <div className={`team_container ${darkmode ? "team_container_darkmode" : ""}`}>
        <div className={`header ${darkmode ? "header_darkomde" : ""}`}>
          {/* <button  onClick={() => setDarkmode(!darkmode)}>{darkmode ? <img src={moonicon} /> : <img src={sunicon} />}</button> */}
          <h5>Your Team</h5>
        </div>
        <div>
          <h3>You can select your team with below pokemons..</h3>
          <div className='search'>
            <input placeholder='Search...' onChange={onchangeinput}  />
            <button className='searchbtn' onClick={fetchpokemon}>Search</button>
          </div>
        </div>
        <div className='searchedpokemon'>
          {(isLoading) && (<h1>Loading</h1>)}
          {(error) && (<h1>{error}</h1>)}
          {
            pokemon  && 
            pokemon.map((item, index) => {
              return (
                <div className='detailpokemon' key={index}> 
                  <p className='name'> {item.name}</p><br />
                  <Link to={`/pokemon/${item.url.charAt(item.url.length-2)}`} className='link'><img src={balbasaur} className='img' alt='img' /></Link>
                  <button className='addbtn' onClick={() => navigate(`/pokemon/addteam/${item.url.charAt(item.url.length-2)}`)}>Add to team</button>
               </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
            
export default YourTeam;
