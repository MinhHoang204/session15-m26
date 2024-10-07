<template>
    <nav>
      <router-link
        to="/dashboard"
        class="nav-link"
        :class="{ active: $route.path === '/dashboard' }"
      >
        Dashboard
      </router-link>
      <router-link
        to="/account"
        class="nav-link"
        :class="{ active: $route.path === '/account' }"
      >
        Account
      </router-link>
      <router-link
        to="/product"
        class="nav-link"
        :class="{ active: $route.path === '/product' }"
      >
        Product
      </router-link>
    </nav>
</template>
  
<script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    gap: 20px;
    padding: 10px;
  }
  
  .nav-link {
    padding: 10px 20px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 5px;
    color: black;
    font-weight: 400;
  }
  
  .active {
    background-color: blue;
    color: #fff;
    font-weight: 700;
  }
</style>