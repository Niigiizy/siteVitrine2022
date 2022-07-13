import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { GlobalState } from '../../types/slice.type';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';

const initialState: GlobalState = {
    id_affiche_selectionner: 0
}

export const globalSlice: Slice<GlobalState> = createSlice({
    name: "global",
    initialState,
    reducers: {
        id_afficher_actualisation: (state, action: PayloadAction<number>) => {
            console.log("dans id afficher actualisation : ", action.payload)
            state.id_affiche_selectionner = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
})

export const {
    id_afficher_actualisation
} = globalSlice.actions

export default globalSlice.reducer