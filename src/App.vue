<template>
  <header class="d-none">
      <nav>
        <RouterLink class="item" to="/">Home</RouterLink>
        <RouterLink class="item" to="/about">About</RouterLink>
        <RouterLink class="item" to="/student">Student</RouterLink>
        <RouterLink class="item" to="/news">News Page</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="css">
nav .item{
    margin: 10px
}
</style>
