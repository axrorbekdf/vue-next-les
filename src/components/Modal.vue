<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-danger" id="exampleModalLabel">Add new students</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputFirst1" class="form-label">First</label>
                                <input v-model="first" type="text" class="form-control" id="exampleInputFirst1" aria-describedby="FirstHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputLast1" class="form-label">Last</label>
                                <input v-model="last" type="text" class="form-control" id="exampleInputLast1" aria-describedby="LastHelp">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputUsername1" class="form-label">Username</label>
                                <input v-model="username" type="text" class="form-control" id="exampleInputUsername1" aria-describedby="UsernameHelp">
                            </div>
                            <button type="submit" @click="addHandler" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            first: '',
            last: '',
            username: ''
        }
    },
    methods:{
        addHandler(e){
            e.preventDefault();
            
            const newStudent = {
                id: Date.now(),
                first: this.first,
                last: this.last,
                username: this.username
            }

            this.$emit('addHandler', newStudent)
            document.documentElement.querySelector(".modal-header .btn-close").click();

            this.first = '';
            this.last = '';
            this.username = '';
        }
    }
}
</script>
<style>
    
</style>