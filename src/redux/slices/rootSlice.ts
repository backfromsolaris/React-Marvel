import { createSlice } from '@reduxjs/toolkit';

// initial State object that will hold default values of hero data
const rootSlice = createSlice({
    name: "root",
    initialState: {
        hero_name: '',
        description: '',
        comics_appeared_in: '',
        super_power: ''
    },
    reducers: {
        chooseHeroName: (state, action) => { state.hero_name = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseComicsAppearedIn: (state, action) => { state.comics_appeared_in = action.payload},
        chooseSuperPower: (state, action) => { state.super_power = action.payload}
    },
})

// Export Reducer
// this is how values get added to the State object
export const reducer = rootSlice.reducer;
export const { chooseHeroName, chooseDescription, chooseComicsAppearedIn, chooseSuperPower } = rootSlice.actions;