import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { pokemondetail, actions } from '../../redux/teamSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import './addteam.css'
const Addteam = ({ }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, detail, error, addedMembers } = useSelector((state) => state.pokemondetail)
  // const member = [
  //   {
  //     name : detail?.name,
  //     img : detail?.sprites.front_default
  //   }
  // ]
  const newteam =()=>{
    window.location.reload(true)
  }
  useEffect(() => {
    dispatch(pokemondetail(id))
    if (detail) {
      dispatch(actions.addmember(<div className='added_name'>{detail.name}</div>))
      dispatch(actions.addmember(<img className='img_member' src={detail.sprites.front_default} />))
    }
  }, [id])
  return (
    <div className='addedmember_container'>
      <div className='addedmember_header'>
        <h2>Your Selected Team Member</h2>
      </div>
      <div className='addedmember'>
        {(isLoading) && (<h1>Loading</h1>)}
        {(error) && (<h4>{error}</h4>)}
        {(addedMembers?.length) && (
          addedMembers.map((item, index) => {
            return (
              <div className='divdiv'>
                {item}
              </div>
        
            )
          })
        )}
        <div className='addmemberbtn'>
          <button className='submitbtn1' onClick={() => navigate('/yourteam')} >Add More</button>
          <button className='submitbtn2' onClick={() => navigate('/')}> go Back to Main Page </button>
          <button className='submitbtn3' onClick={() => newteam()}> Destroy Team  </button>
        </div>
      </div>
    </div>
  )
}

export default Addteam;
