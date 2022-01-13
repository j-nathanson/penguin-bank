const userReducer = (state = [], action) => {
    switch (action.type) {
        case "add_user":
            return [...state, action.payload]
        default:
            return state;
    }
}
const test = "";
export default userReducer;