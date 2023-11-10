import { createStore } from 'vuex'
// import articles from '../modules/articles'
// import auth from '../modules/auth'
// import counter from '../modules/counter'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        count: 0,
        user: {
            loggedIn: false,
            isSubscribed: false
        }
    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // },
    // decrement (state) {
    //     if(state.count != 0){
    //         state.count --
    //     }
    // },
    auth(state) {
        return state.user
    }
  },
  actions:{},
  getters:{},
  modules:{}
})

export default store