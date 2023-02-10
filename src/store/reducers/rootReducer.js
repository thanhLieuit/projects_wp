
const initState = {
    users: [
        { id: 1, name: 'thanh Lieu' },
        { id: 2, name: 'thanh lieu 1' }
    ],
    post: []
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run delete user:', action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };

        case 'ADD_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }

}

export default rootReducer;