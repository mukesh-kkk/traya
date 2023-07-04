// Define your initial state
import ActionType from "./actionTypes";
const initialState = {

    user: {}
};

// Define your reducer function
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SAVE_USER_DATA:
            {

                return {
                    ...state,
                    user: action.payload
                };
            }

        default:
            return state;
    }
};

export default userReducer;
