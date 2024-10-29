import { ACTION_TYPES } from "../actions/dCandidateAction";

const initialState = {
    list : []
}

export const dCandidatesReducer = (state=initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list : [...action.payload]
            }
        default:
            return state
    }
}