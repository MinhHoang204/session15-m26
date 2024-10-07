<template>
  <h1>UserName: {{ name }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const {name} = route.name
</script>

<style>

</style>