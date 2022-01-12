export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const addUser = (id, name) => dispatch => {
    dispatch({
        type: "add_user",
        payload: {
            id,
            name
        }
    })
}
