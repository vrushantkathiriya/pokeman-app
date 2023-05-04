import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// export const getsearchedpokemon = createAsyncThunk('pokemon/getpokemon', async (name) => {
//     return name.data
// })
export const getallpokemon = createAsyncThunk('pokemon/getallpokemon', async (name) => {
    let resp
    if (name) {
        resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        resp.data.url = resp.data.species.url
        return [resp.data]
    }
    else {
        resp = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        return resp.data.results
    }
})
export const pokemondetail = createAsyncThunk('pokemon/getpokemondetail', async (id) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return resp.data
})
export const moredetailpokemon = createAsyncThunk('pokemon/getmoredetail', async(id)=>{
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    return resp.data
})

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: {
        iscomponentLoading: null,
        pokemon: [],
        error: null
        // detail: [],
    },
    extraReducers: {
        [getallpokemon.pending]: (state, action) => {
            return {
                iscomponentLoading: true
            }
        },
        [getallpokemon.fulfilled]: (state, action) => {
            return {
                iscomponentLoading: false, pokemon: action.payload
            }
        },
        [getallpokemon.rejected]: (state, action) => {
            return {
                iscomponentLoading: false, error: '............not found'
            }
        },
    }
})

const pokemondeatilSlice = createSlice({
    name: "pokemon",
    initialState: {
        isLoading: null,
        detail: null,
        error: null,
        member: 0,
        addedMembers: [],
        removeaddedMember:[],
    },
    reducers: {
        addmember(state, action) {
            if (state.member<=9) {
                // console.log(action, 'actionaction')
                return {
                    ...state,
                    addedMembers:[...state.addedMembers,action.payload],
                    member: state.member + 1
                }
            }
            else {
                return {
                    ...state,
                    error : "you can add only 5 team members......."
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(pokemondetail.pending, (state) => {
                return {
                    ...state,
                    isLoading: true
                }
            })
            .addCase(pokemondetail.fulfilled, (state, action) => {
                return {
                    ...state,
                    isLoading: false, detail: action.payload
                }
            })
            .addCase(pokemondetail.rejected, (state) => {
                return {
                    ...state,
                    isLoading: false, error: 'Not found'
                }
            });
    },
});


const aboutpokemon = createSlice({
    name:'aboutpokemon',
    initialState:{
        moredetail:[],
    },
    extraReducers:{
      [moredetailpokemon.pending]:(state,action)=>{
        console.log("pending")
      },
      [moredetailpokemon.fulfilled]:(state,action)=>{
          return{
            moredetail: action.payload
          }
      },
      [moredetailpokemon.rejected]:(state,action)=>{
        console.log("rejected...")
      }
    }
})

export const actions = pokemondeatilSlice.actions
export const pokemon = pokemonSlice.reducer
export const pokemondetailReducer = pokemondeatilSlice.reducer
export const moredetailReducer= aboutpokemon.reducer


