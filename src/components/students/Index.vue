<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <tr>
                    <th>Student Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Course</th>
                    <th>Course Start</th>
                    <th>Course End</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-for="student in students" :key="student.student_num">
                    <td>{{student.student_num}}</td>
                    <td>{{student.firstnm}}</td>
                    <td>{{student.lastnm}}</td>
                    <td>{{student.course}}</td>
                    <td>{{student.course_start_dtm}}</td>
                    <td>{{student.course_end_dtm}}</td>
                    <td><span class="icon clickable"><i class="fas fa-pencil-alt" @click="showStudent(student)"></i></span></td>
                    <td><span class="icon clickable"><i class="fas fa-trash-alt" @click="deleteStudent(student)"></i></span></td>
                </tr>
            </table>
        </div>
        <div class="column">
            <div style="text-align: center; margin-bottom: 15px;">
                <button v-if="showStudentDetails" class="button is-small is-rounded is-link" @click="showStudentDetails = false">Create New Student</button>
            </div>
            <student-show v-if="showStudentDetails" :p_student="selectedStudent" @updated="updatedStudent"></student-show>
            <student-create v-else></student-create>
        </div>
    </div>
</template>

<script>
import StudentShow from './Show'
import StudentCreate from './Create'

export default {
    data(){
        return {
            students: [],
            showStudentDetails: false,
            selectedStudent: {}
        }
    },

    components: {
        'student-show': StudentShow,
        'student-create': StudentCreate
    },

    methods: {
        showStudent(student){
            this.selectedStudent = student;
            this.showStudentDetails = true;
        },

        deleteStudent(student){
            if(this.selectedStudent._id === student._id){
                this.showStudentDetails = false;
            }

            // delete student
            // axios.delete('/api/student/' + student._id).then(res => (console.log(res)));
        },

        updatedStudent(student){
            this.students
                .filter(s => (s._id === student._id))
                .forEach(s => {
                    Object.keys(s).forEach(key => {
                        s[key] = student[key]
                    })
                });
        }
    },

    mounted(){
        axios.get('/api/students').then(res => (this.students = res.data))
        this.selectedStudent = this.students[0];
    }
}
</script>