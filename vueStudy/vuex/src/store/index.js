import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testText:"----helloVuex",
    counter : 0,
  },
  mutations: {
    increment(state){
      state.counter++;
    }
  },
  getters:{
    getCounterMultiply2(state){
      return state.counter * 2;
    },
    reverseTestText(state){
      return state.testText.split("").reverse().join("");
    },
  },
  actions: {
    increment(context){
      setTimeout(() => {
        context.commit("increment");
      },1000);
    },
    increment2(context){
      setTimeout(() => {
        context.commit("increment");
      },1000);
    },
  },
  modules: {
  }
})
