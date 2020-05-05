<template>
  <div class="home">

    
    <!-- {{$store.state.testText}}-->
    {{testText}}
    
    <!--{{$store.state.counter}} -->
    {{counter}}
    
    
    {{getCounter}}
    {{reverseTestText}};
    <input type="button" value="counter + 1" @click="increment()"/>
    <!-- <input type="button" value="counter + 1 ( actions)" @click="incrementAction()"/> -->
    <input type="button" value="counter + 2 ( actions)" @click="increment2()"/>
  </div>
</template>
<script>
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';

export default {
  name: 'Home',
  methods:{
    // increment(){
    //   this.$store.commit("increment");
    // },
    ...mapMutations([
      'increment',
    ]),

    // incrementAction(){
    //   this.$store.dispatch("increment");
    // }
    ...mapActions(
      
      ["increment2",]
    ),
  },
  computed: {
    ...mapState([
      'testText',
      'counter',
    ]),
    ...mapGetters([
      "reverseTestText",
    ]),
    getCounter(){
      return this.$store.getters.getCounterMultiply2;
    }
  },
}
</script>