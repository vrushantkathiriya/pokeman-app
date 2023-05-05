import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { pokemondetail } from '../../redux/teamSlice'
import { moredetailpokemon } from '../../redux/teamSlice'
import backbutton from '../images/ChevronLeft.png'
import './pokemondetail.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
const Pokemondetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { isLoading, detail, error } = useSelector((state) => state.pokemondetail)
  const { moredetail } = useSelector((state) => state.moredetail)
  const navigate = useNavigate()
  console.log(moredetail);
  useEffect(() => {
    dispatch(pokemondetail(id))
    dispatch(moredetailpokemon(id))
  }, [id])
  return (
    <div className="detail_container"  >
      {(isLoading) && (<h1>Loading</h1>)}
      {(error) && (<h1>{error}</h1>)}
      {(detail) && (
        <div className='deail_inner_container'>
          <div className='header_detail'>{detail.name}
          </div>
          <div className='img_des_info'>
            <div className='name_img_firstdiv'>
              <img src={detail?.sprites?.front_default}/>
              <p>#0{detail.id}</p>
            </div>
            <div className='backbutton'onClick={()=>navigate('/yourteam')}>
              <img src={backbutton} />
            </div>
            <div className='des_info_parentdiv'>
              <div className='description'>
                <h4>Description</h4>
                <p>A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
              </div>
              <div className='pokemon_info'>
                <h4>info</h4>
                <div className='info_detail'>
                  <div>weight<br />{detail.weight}</div>
                  <div>height<br />{detail.height}</div>
                  <div>Ability<br />{detail.abilities[0].ability.name}</div>
                  <div>category<br />{detail.abilities[1].ability.name}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='status'>
            <div className='pokemon_stats'>
              <p>Stats</p>
              <div className='pokemon_stats_detail'>
                <div className='pokemon_hp'>
                  <span>{detail.stats[0].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                  text={`${detail.stats[0].base_stat}%`} 
                  styles={buildStyles({textSize:'18px', pathColor:"green",textColor:"green" , backgroundColor:"grey"})} 
                  value={detail.stats[0].base_stat}/>
                </div>
                <div className='pokemon_attack'>
                  <span>{detail.stats[1].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                  text={`${detail.stats[1].base_stat}%`}
                  styles={buildStyles({textSize:'18px',pathColor:"yellow",textColor:"yellow",backgroundColor:"grey"})} 
                  value={detail.stats[0].base_stat}/> 
                </div>
                <div className='pokemon_defense'>
                  <span>{detail.stats[2].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                  text={`${detail.stats[2].base_stat}%`}
                   styles={buildStyles({textSize:'18px',pathColor:"red",textColor:"red",backgroundColor:"grey"})} 
                   value={detail.stats[0].base_stat}/>
                </div>
                <div className='pokemon_special-attack'>
                  <span>{detail.stats[3].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                  text={`${detail.stats[3].base_stat}%`} 
                  styles={buildStyles({textSize:'18px',pathColor:"blue", textColor:"blue",backgroundColor:"grey"})} 
                  value={detail.stats[0].base_stat}/>
                </div>
                <div className='pokemon_special-defense'>
                  <span>{detail.stats[4].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                   text={`${detail.stats[4].base_stat}%`} 
                   styles={buildStyles({textSize:'18px',pathColor:"purple", textColor:"purple",backgroundColor:"grey"})} 
                   value={detail.stats[0].base_stat}/>
                </div>
                <div className='pokemon_speed'>
                  <span>{detail.stats[5].stat.name}</span><br /><br />
                  <CircularProgressbar className='rate_percentage' 
                  text={`${detail.stats[5].base_stat}%`} 
                  styles={buildStyles({textSize:'18px',pathColor:"blue", textColor:"blue",backgroundColor:"grey"})} 
                  value={detail.stats[0].base_stat}/>
                </div>
              </div>
            </div>
            <div className='capture_rate'>
              <p>Capture Rate</p>
              <div className='rate_percentage'><CircularProgressbar 
              text={`${moredetail.capture_rate}%`}
               styles={buildStyles({textSize:'18px',pathColor:"#09BC8A" , textColor:"#09BC8A;",backgroundColor:"grey"})} 
               value={moredetail.capture_rate}/></div>
            </div> 
          </div>
          <div className='evolutions'>
            <p>Evolutions</p>
            <div className='totalevolutions'>
            <div className='evolution1'>evolution1</div>
            <div className='evolution2'>evolution2</div>
            <div className='evolution3'>evolution3</div>
            </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default Pokemondetail;
