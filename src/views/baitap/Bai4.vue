<template>
    <div class="login-container">
      <h2>Login account</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Your email</label>
          <input type="email" id="email" v-model="email" placeholder="name@company.com" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login an account</button>
      </form>
      <p>Already have an account? <a href="/register">Register here</a></p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Logic đăng nhập người dùng
        console.log('User logged in:', this.email);
      }
    }
  };
</script>
  
<style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  form div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  p {
    text-align: center;
  }
  a {
    color: #007bff;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
  