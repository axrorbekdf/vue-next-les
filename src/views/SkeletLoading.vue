<template>
    <Suspense>
        <template #default>
        <profile />
        </template>
        <template #fallback> Loading... </template>
    </Suspense>
</template>
<script>
import Profile from '../components/Profile.vue';
export default {
    
}
</script>
<style>
    
</style>