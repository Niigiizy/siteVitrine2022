import { AnyAction, combineReducers } from "redux"
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import globalReducer from "../slice/globalSlice"

const reducerFinal = {
    global: globalReducer
}

const rootReducer = combineReducers(reducerFinal)

// const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//       ...action.payload, // apply delta from hydration
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

export default rootReducer