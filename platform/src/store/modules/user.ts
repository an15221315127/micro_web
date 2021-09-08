

const state = () => ({
    token: "",
    nickName: "",
    role: "",
    avatar: ""
})

const mutations = {
    set_token(state, token) {
        state.token = token
    }
}



export default {
    namespace: true,
    state,
    mutations
}