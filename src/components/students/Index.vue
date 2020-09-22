<template>
    <div>
        <table>
            <tr>
                <th>Student Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Course</th>
                <th>Start Date</th>
                <th>End Date</th>
            </tr>
            <tr v-for="student in students">
                <td>{{student.student_num}}</td>
                <td>{{student.firstnm}}</td>
                <td>{{student.lastnm}}</td>
                <td>{{student.course}}</td>
                <td>{{student.course_start_dtm}}</td>
                <td>{{student.course_end_dtm}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
// const axios = require('axios');

export default {
    data(){
        return {
            students: []
        }
    },

    methods: {
        getStudents(){
            // axios request to get students
        }
    },

    mounted(){
        axios.get('/api/students').then(res => (this.students = res.data))
    }
}
</script>