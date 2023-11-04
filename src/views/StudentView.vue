<template>

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-8">
                <h1>Students</h1>

                <div class="card">
                    <div class="card-body p-0">
                        <div class="card-title d-flex justify-content-between p-2">
                               <div class="col-12 col-md-3">
                                <div class="input-group">
                                    <span class="input-group-text bg-white" id="basic-addon1">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <input v-model="term" type="text" class="form-control border-start-0" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                                </div>
                               </div>
                               <div class="col-12 col-md-4">
                                <button type="button" class="btn btn-light btn-sm border bg-white m-1">
                                    <i class="fa-solid fa-filter"></i>
                                </button>
                                <button type="button" class="btn btn-light btn-sm border bg-white m-1">
                                    Download CSV <i class="fa-solid fa-download"></i>
                                </button>

                                <button type="button" class="btn btn-success btn-sm border m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Create <i class="fa-solid fa-plus"></i>
                                </button>
   
                                <button type="button" class="btn btn-light btn-sm border bg-white m-1">
                                    <i class="fa-solid fa-gear"></i>
                                </button>
                                
                               </div>
                        </div>
                        <Table :students="searchHandler(students,term)"/>
                    </div>
                </div>
            </div>
        </div>

        <Modal @addHandler="addStudentHandler"/>
    </div>
</template>
<script>
import Modal from '../components/Modal.vue';
import Table from '../components/Table.vue';


export default {
    components: {Modal, Table},

    data(){
        return {
            students: [
                {
                    id: 1,
                    first: "Ahrorbek",
                    last: "Davronov",
                    username: "@admin123"
                },
                {
                    id: 2,
                    first: "Husanboy",
                    last: "Ulugboyev",
                    username: "@boy_45"
                },
                {
                    id: 3,
                    first: "Sardor",
                    last: "Temurov",
                    username: "@karim_123"
                },
                {
                    id: 4,
                    first: "Alisher",
                    last: "Dosmatov",
                    username: "@alisher.mu"
                },
                {
                    id: 5,
                    first: "Komalddin",
                    last: "Aliyer",
                    username: "@kaskatka"
                },
                {
                    id: 6,
                    first: "Davronjon",
                    last: "Lutfullayer",
                    username: "@lutfulla.243"
                },
                {
                    id: 7,
                    first: "Jahongir",
                    last: "Ermatov",
                    username: "@ermatov312"
                },
                {
                    id: 8,
                    first: "Temur",
                    last: "Kamilov",
                    username: "@temur_admin"
                },
                {
                    id: 9,
                    first: "Ganisher",
                    last: "Qobilev",
                    username: "@qobilov.off"
                },
                {
                    id: 10,
                    first: "Amir",
                    last: "Halilov",
                    username: "@amir.shoh"
                }
            ],
            term: ''
        }
    },
    methods: {
        addStudentHandler(newStudent){
            this.students.push(newStudent)
        },

        searchHandler(data, term){
            
            
            if(data.length == 0){
                return this.data;
            }

            return data.filter(c => c.first.toLowerCase().indexOf(this.term) > -1 || c.last.toLowerCase().indexOf(this.term) > -1);
        }
    }
}
</script>
<style>
    
</style>