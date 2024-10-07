<template>
    <div>
      <h1>Danh sách người dùng</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Address:</strong> {{ user.address }}</p>
          <button @click="viewUserDetail(user.id)">Xem chi tiết</button>
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: "ListUser",
    data() {
      return {
        users: [
          { id: 1, name: "John Doe", email: "john@example.com", address: "123 Main St" },
          { id: 2, name: "Jane Smith", email: "jane@example.com", address: "456 Oak St" },
          { id: 3, name: "Mark Johnson", email: "mark@example.com", address: "789 Pine St" },
        ],
      };
    },
    methods: {
      viewUserDetail(id) {
        this.$router.push(`/users/${id}`);
      },
    },
  };
</script>
  
<style scoped>
  li {
    margin-bottom: 20px;
    list-style-type: none;
  }
  button {
    background-color: blue;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: darkblue;
  }
</style>