import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    type: '',
    pop_up: false,
    language: 'eng'
};

const RootReducer = createReducer(initialState, builder => {
    builder 
    .addCase('CHANGELANGUGE', (state, action) => {
        return {
            ...state,
            language: state.language === 'eng' ? 'rus' : 'eng'
          }
    })
    .addCase('TOGGLEPOPUP', (state) => {
        state.pop_up = !state.pop_up;
    })

});

export default RootReducer;