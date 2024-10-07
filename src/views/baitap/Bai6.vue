<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
const Home = { template: '<h2>Home</h2>' };
const About = { template: '<h2>About</h2>' };

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    router
});
</script>

<style>

</style>