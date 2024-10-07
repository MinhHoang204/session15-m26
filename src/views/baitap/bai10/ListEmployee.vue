<template>
    <div>
      <h1>Danh sách nhân viên</h1>
      <ul>
        <li v-for="employee in employees" :key="employee.id">
          <p><strong>Tên:</strong> {{ employee.name }}</p>
          <p><strong>Vị trí:</strong> {{ employee.position }}</p>
          <router-link :to="`/employees/${employee.id}`">Xem chi tiết</router-link>
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    name: "ListEmployee",
    data() {
      return {
        employees: [
          { id: 1, name: "Nguyễn Văn A", position: "Developer" },
          { id: 2, name: "Trần Thị B", position: "Designer" },
          { id: 3, name: "Lê Minh C", position: "Manager" },
        ],
      };
    },
  };
</script>
  
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 15px;
  }
</style>