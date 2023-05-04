import React, { useEffect } from 'react';
import "./filter.css";
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type').then((response) => {
      setPost(response.data.results);
    });
  }, []);

  if (!post) return null;
  console.log(post);
  return (
    <div className='filter_moves'>
      <div>
        <div>
          <h4>Filters</h4>
          <div>
            <span className='filter_opt gray'>National <i className="fa fa-times" aria-hidden="true"></i></span>
            <span className='filter_opt green'>Grass <i className="fa fa-times" aria-hidden="true"></i></span>
          </div>
        </div>
        <div>
        <h4>Regions</h4>
          <div>
            <span className='filter_opt gray'>National </span>
            <span className='filter_opt gray'>Kanto </span>
            <span className='filter_opt gray'>Johto </span>
            <span className='filter_opt gray'>Hoenn </span>
          </div>
        </div>
        <div>
        <h4>Regions</h4>
          <div className='filter_move_type'>
            {
              post.map((item) => (
                <span className='filter_opt green'>{item.name}</span>
              ))
            }
            
            {/* <span className='filter_opt green'>Grass </span>
            <span className='filter_opt green'>Grass </span>
            <span className='filter_opt green'>Grass </span>
            <span className='filter_opt green'>Grass </span> */}
          </div>
          <button className='click'> Apply </button>
        </div>
      </div>
    </div>
  )
}
// const Filter = () => {
// useEffect(()=>{
//   const resp =  axios.get('https://pokeapi.co/api/v2/type')
//   axios.get(resp).then((response) => {
//     console.log(response.results);
//   })
//   //  resp.data
  
// },[])
   
//   }
 


// export default Filter