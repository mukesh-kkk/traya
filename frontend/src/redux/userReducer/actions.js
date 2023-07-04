import ActionType from "./actionTypes";

export function saveUserData(data) {
    return {
        type: ActionType.SAVE_USER_DATA,
        payload: data
    }
}