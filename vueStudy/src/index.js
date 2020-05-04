console.log("hello world");

// 최신 브라우저에서는 돌아가지 않는다

import Vue from "vue";
import App from "./App.vue";

new Vue({
    render:(h) => h(App),
}).$mount("#app");