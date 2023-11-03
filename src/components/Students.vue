<template lang="">
    <div @click="bosildi">
        <p>Name: {{name}}</p>
        <p>Count: {{count}}</p>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type: String,
            required: true,
            default: "noma'lum"
        }
    },
    data(){
        return {
            counter: 0
        }
    },
    methods:{
        bosildi(){
            alert(`Name: ${this.name}`)
        }
    }
}
</script>
<style lang="">
    
</style>