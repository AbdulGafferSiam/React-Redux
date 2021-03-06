import { BUY_BOOK } from './BookType';

const initialState = {
    numOfBooks: 10
}

const bookReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_BOOK: return {
            ...state,
            numOfBooks: state.numOfBooks - action.payload
        }
        default: return state;
    }
}

export default bookReducer;