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
            loggedIn: true,
            isSubscribed: true
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
  },
  actions:{},
  getters:{
    auth(state) {
        return state.user
    }
  },
  modules:{}
})

export default store