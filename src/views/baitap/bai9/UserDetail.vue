<template>
    <div>
      <h1>Chi tiết người dùng</h1>
      <div v-if="user">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Address:</strong> {{ user.address }}</p>
      </div>
      <div v-else>
        <p>Không tìm thấy người dùng.</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: "UserDetail",
    data() {
      return {
        user: null,
      };
    },
    mounted() {
      const userId = this.$route.params.id;
      const users = [
        { id: 1, name: "John Doe", email: "john@example.com", address: "123 Main St" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", address: "456 Oak St" },
        { id: 3, name: "Mark Johnson", email: "mark@example.com", address: "789 Pine St" },
      ];
      this.user = users.find(user => user.id === parseInt(userId));
    },
  };
</script>
  
<style scoped>
  div {
    margin-top: 20px;
  }
</style>