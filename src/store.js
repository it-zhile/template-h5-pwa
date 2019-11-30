import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        userInfo: null,
        lang: 'zh'
    },
    mutations: {
        setToken(state, data) {
            state.token = data
        },
        setUserInfo(state, data) {
            state.userInfo = data
        },
        setLang(state, data) {
            state.lang = data
        }
    },
    actions: {
    },
    modules: {
    }
})
