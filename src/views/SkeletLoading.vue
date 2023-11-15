<template>
    <Suspense>
    <template #default>
      <ProfileCard />
    </template>
    <template #fallback>
      <ProfileCardSkeleton />
    </template>
  </Suspense>
</template>
<script>
// import Suspense from 'App'
import ProfileCard from '@/components/ProfileCard.vue';
import ProfileCardSkeleton from '@/components/ProfileCardSkeleton.vue'
export default {
    
}
</script>
<style>
    
</style>