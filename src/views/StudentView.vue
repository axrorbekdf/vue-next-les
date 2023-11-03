<template>
    <div>
        <Students :name="'Ahrorbek Davronov 1'"/>
        <Students :name="'Ahrorbek Davronov 2'"/>
        <Students :name="'Ahrorbek Davronov 3'"/>
        <Students :name="'Ahrorbek Davronov 4'"/>
        <Students :name="'Ahrorbek Davronov 5'"/>
        <Students :name="'Ahrorbek Davronov 6'"/>
        <Students/>
    </div>
</template>
<script>
import Students from '../components/Students.vue';
export default {
    components: {Students}
}
</script>
<style>
    
</style>