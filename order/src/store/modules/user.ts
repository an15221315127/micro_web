

const state = {
    token: "",
    nickName: "",
    role: "",
    avatar: ""
}

const mutation = {
    set_token(state, token) {
        state.token = token
    }
}



export default {
    namespaced: true,
    state,
    mutation
}