<template>
    <div>
        Hello world{{number}}
        <button @click="plus">
            +
        </button>
        <button @click="minus">
            -
        </button>
        <div v-if=flag>
            true
        </div>
        <div v-else>
            false
        </div>
        <button @click="changeFlg">
            changeFlg
        </button>
        <div>
            {{revert}}
        </div>
        <div :class="['hide', {seven: number===7 }]">
            click 7 times
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                number : 1,
                hello : "hello",
                flag : false,
            }
        },
        methods:{
            plus(){
                this.number++;
            },
            minus(){
                this.number--;
            },
            changeFlg(){
                this.flag = !this.flag;
            }
        },
        computed:{
            revert(){
                return this.hello.split('').reverse().join('')
            }
        },
        mounted(){
            console.log('mounted');
        }
    }
</script>
<style lang="scss">
.hide{
    display: none;
    &.seven{
        display: block;
    }
}
</style>