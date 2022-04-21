export const SET_USERS = 'SET_USERS'

export const setUsers = users => dispatch => {
    dispatch({
        type:SET_USERS,
        payload : users
    })
}