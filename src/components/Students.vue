<template lang="">
    <div>
        <p @click="bosildi">Name: {{name}}</p>
        <p @click="counterHandler">Count: {{counter}}</p>
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
        },
        counterHandler(){
            this.counter ++;
        }
    }
}
</script>
<style lang="">
    
</style>