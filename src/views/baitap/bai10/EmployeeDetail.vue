<template>
    <div>
      <h2>Chi tiết nhân viên</h2>
      <nav>
        <router-link :to="`/employees/${employeeId}/profile`">Thông tin cá nhân</router-link> |
        <router-link :to="`/employees/${employeeId}/projects`">Dự án</router-link> |
        <router-link :to="`/employees/${employeeId}/contact`">Liên hệ</router-link>
      </nav>
      <router-view />
    </div>
</template>
  
<script>
  export default {
    name: "EmployeeDetail",
    data() {
      return {
        employeeId: this.$route.params.id,
      };
    },
  };
</script>
  
<style scoped>
  nav {
    margin-bottom: 20px;
  }
</style>