import { configureStore } from "@reduxjs/toolkit";
import { moredetailReducer, pokemon, pokemondetailReducer } from './teamSlice'
export const store = configureStore({
    reducer: {
        pokemon: pokemon,
        // pokemonSearch: pokemonSearch,
        pokemondetail: pokemondetailReducer,
        moredetail: moredetailReducer,
    }
})