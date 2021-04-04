import { 
    FETCH_DATA_REQUEST, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAILURE,
    } from './sensorsTypes';

const initialState = {
    loading: true,
    data: [],
    error: ''
}

const sensorsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case FETCH_DATA_SUCCESS: 
            return {
                loading: false,
                data: action.payload,
                error: ''
            }

        case FETCH_DATA_FAILURE: 
            return {
                loading: false,
                data: [],
                error: action.payload
            }

        default: return state
    }

}

export default sensorsReducer