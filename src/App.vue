<template>
  <div>
    <nav>
      <router-link active-class="active-link" to="/">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <Header></Header>
    <nav>
      <button @click="goToHome">Home</button>
      <button @click="goToAbout">About</button>
      <button @click="goToContact">Contact</button>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from './views/baitap/bai7/Header.vue';
const router = useRouter();

const goToHome = () => {
  // Điều hướng qua trang home
  router.push("/");
};

const goToAbout = () => {
  // Điều hướng qua trang home
  router.push({name: "/about"});
};

const goToContact = () => {
  // Điều hướng qua trang home
  router.push({name: "/contact"});
};

// setTimeout(() => {
//   router.push({ name: "contact"});
// }, 3000);
</script>

<style>
nav{
  display: flex;
  gap: 20px;
}

.active-link {
  
}
</style>