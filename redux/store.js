import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import sensorsReducer from './sensors/sensorsReducer'

const store = createStore(
    sensorsReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;