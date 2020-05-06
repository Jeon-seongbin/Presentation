<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/privacy">privacy</router-link> |
      <router-link to="/user/1">user</router-link>
      <!-- <router-link :to="{
          name:'user',
          params:{
            id:2,
          },
          query:{
            q:'abc',
          }
        }">User</router-link> -->
    </div>
    <router-view/>
    <!-- router-view 에서 router에서 선택한 컴포넌트를 표시한다 (url도 변경) -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
