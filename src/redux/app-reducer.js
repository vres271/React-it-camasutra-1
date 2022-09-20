import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

export const appReducer = (state=initialState,action) => {

    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = ()=>({type: INITIALIZED_SUCCESS})
export const initializeApp = () => (dispatch)=>{
    Promise.all([
        dispatch(getAuth())
    ])
        .then(()=>{
            dispatch(initializedSuccess());
        })
    
        
    
}

export default appReducer;