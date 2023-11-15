<template>
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            userData: null
        }
    },
    mounted(){
        this.userData = this.loadUserData();
    },
    methods:{
        loadUserData(){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        name: 'Matt Maribojoc',
                        pic: 'https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png',
                        bio: 'I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.',
                    })
                }, 4000)
            })
        }
    }
}
</script>
<style>
    
</style>