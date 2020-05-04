<template>
  
<form @submit.prevent="exec">
        <div>
            id : <input type="text" v-model="id">
        </div>
        <div>
            password : <input type="password" v-model="password">
        </div>
        <div>
            <input type="submit">
        </div>
    </form>
  
</template>
<script>

    let login = () =>{
        return new Promise(function(resolve, reject){
            
        });
    }

    export default{

        data:  function () {
            return{
                id : "" ,
                password : "",
            }

        },
        methods:{
            exec(){
                console.log("id " + this.id);
                console.log("password "+this.password)

            }
        },
        computed:{

        }
    }
</script>
<style>

</style>
