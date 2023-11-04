<template>
    <table class="table text-center">
        <thead class="bg-secondary">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Avatar</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Username</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in students" :key="item.id" style="vertical-align: middle;">
                <th scope="row">{{ item.id }}</th>
                <td style="width: 25px;">
                    <img src="https://github.com/fluidicon.png" class="card-img-top " style="width: 28px;" alt="">
                </td>
                <td>{{ item.first }}</td>
                <td>{{ item.last }}</td>
                <td>{{ item.username }}</td>
                <td>
                    <a href="#">Edit </a>
                    <a href="#"> Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props:{
        students:{
            type: Array,
            default: []
        }
    }
}
</script>
<style>
    
</style>