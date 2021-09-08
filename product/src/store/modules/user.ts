

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
    namespaced: true,
    state,
    mutations
}