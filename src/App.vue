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

  <!-- <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense> -->
</template>

<script setup>
import ProfileCard from './components/ProfileCard.vue'
import ProfileCardSkeleton from './components/ProfileCardSkeleton.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="css">
nav .item{
    margin: 10px
}
</style>
