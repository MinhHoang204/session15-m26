<template>
    <nav>
      <router-link
        to="/"
        class="nav-link"
        :class="{ active: $route.path === '/' }"
      >
        Home
      </router-link>
      <router-link
        to="/product"
        class="nav-link"
        :class="{ active: $route.path === '/product' }"
      >
        Product
      </router-link>
      <router-link
        to="/detail"
        class="nav-link"
        :class="{ active: $route.path === '/detail' }"
      >
        Detail
      </router-link>
    </nav>
</template>
  
<script>
  export default {
    name: "Header",
  };
</script>
  
<style scoped>
  nav {
    display: flex;
    gap: 20px;
  }
  
  .nav-link {
    padding: 10px 20px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 5px;
    color: black;
  }
  
  .active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border-color: #007bff;
  }
</style>