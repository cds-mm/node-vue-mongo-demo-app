<template>
    <div>
        <ul>
            <li v-for="student in students" :key="student">{{student.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            students: [{name: 'Alice'}, {name: 'John'}, {name: 'Steven'}]
        }
    },

    methods: {
        getStudents(){
            // axios request to get students
        }
    },

    mounted(){
        this.getStudents()
    }
}
</script>