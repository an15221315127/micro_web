

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
    namespace: true,
    state,
    mutation
}