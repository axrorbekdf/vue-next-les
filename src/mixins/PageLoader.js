export default {
    data(){
        return {
            isLoading: true,
        }
    },
    mounted() {
        this.pageLoaded();
    },
    methods: {
        pageLoaded(){
            this.isLoading = false;
            console.log("Page success yuklandi!");
        }
    },
}