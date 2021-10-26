import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IModalState {
    smallThanks: boolean,
    bigThanks: boolean,
    description: boolean,
    order: boolean,
    countDiet: boolean,
}

const modalState: IModalState = {
    smallThanks: false,
    bigThanks: false,
    description: false,
    order: false,
    countDiet: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState: modalState,
    reducers: {
        openSmallThanks(state, action:PayloadAction<boolean>){
            state.smallThanks = action.payload;
        },
        openBigThanks(state, action:PayloadAction<boolean>){
            state.bigThanks = action.payload;
        },
        openDescription(state, action:PayloadAction<boolean>){
            state.description = action.payload;
        },
        openOrder(state, action:PayloadAction<boolean>){
            state.order = action.payload;
        },
        openCountDiet(state, action:PayloadAction<boolean>){
            state.countDiet = action.payload;
        },
        closeAll(state){
            state.bigThanks = false;
            state.countDiet = false;
            state.description = false;
            state.order = false;
            state.smallThanks = false;
        }
    }
})

export default modalSlice.reducer;