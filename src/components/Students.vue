<template lang="">
    <div class="thumbail">
        <p @click="bosildi">Name: {{name}}</p>
        <p class="badge badge-secondary" >Count: {{counter}}</p>
        <button @click="counterHandler" type="button" class="btn btn-primary">
            Count <span class="badge text-bg-secondary">{{ counter }}</span>
        </button>
        <Button />
    </div>
</template>
<script>
import Button from './Button.vue';
export default {
    components:{Button},
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