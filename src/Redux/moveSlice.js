import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allmoves = createAsyncThunk('getmoves/allmoves', async()=>{
    const resp = await axios.get('https://pokeapi.co/api/v2/move')
    return resp.data.results
})

const moveSlice = createSlice({
    name: "move",
    initialState:{
        moves: [],
        isLoading: null,
        error: null,
    },
    extraReducers:{
        [allmoves.pending]:(state,action)=>{
            return{
                isLoading : true
            }
        },
        [allmoves.fulfilled]:(state,action)=>{
            return{
                isLoading: false , moves: action.payload
            }
        },
        [allmoves.rejected]:(state,action)=>{
            return{
                isLoading: false,
                error: 'not found'
            }
        }
    }
})


export const movesReducer = moveSlice.reducer;