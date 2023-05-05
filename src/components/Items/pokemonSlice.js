import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  pokemonList: [],
  pokemonItems: [],
  isLoading: false,
  error: null,
};

export const getItemById = createAsyncThunk(
    "item/getItemById",
    async (id, thunkAPI) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/item/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getItemById.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.pokemonItems.push(action.payload);
            })
            .addCase(getItemById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default pokemonSlice.reducer;
