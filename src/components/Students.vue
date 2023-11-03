<template lang="">
    <div @click="bosildi">
        {{name}}
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
    methods:{
        bosildi(){
            alert(`Name: ${this.name}`)
        }
    }
}
</script>
<style lang="">
    
</style>