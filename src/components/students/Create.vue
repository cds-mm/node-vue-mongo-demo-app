<template>
    <div>
        <div class="field">
            <label class="label">Student Number</label>
            <div class="control">
                <input class="input" type="text" v-model="student.student_num" required>
            </div>
        </div>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" v-model="student.firstnm" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" v-model="student.lastnm" required>
            </div>
        </div>
        <div class="field">
            <label class="label">Course</label>
            <div class="control">
                <input class="input" type="text" v-model="student.course">
            </div>
        </div>
        <div class="field">
            <label class="label">Course Start</label>
            <div class="control">
                <input class="input" type="text" v-model="student.course_end_dtm">
            </div>
        </div>
        <div class="field">
            <label class="label">Course End</label>
            <div class="control">
                <input class="input" type="text" v-model="student.course_start_dtm">
            </div>
        </div>
        <div class="field is-grouped is-grouped-centered">
            <p class="control"><button class="button" type="button" @click="submit()">Submit</button></p>
            <p class="control"><button class="button" type="button" @click="reset()">Reset</button></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            student: {
                student_num: "",
                firstnm: "",
                lastnm: "",
                address: "",
                course: "",
                course_start_dtm: "",
                course_end_dtm: ""
            }
        }
    },

    methods:{
        submit(){
            console.log('This does nothing at the moment')
        },

        reset(){
            Object.keys(this.student).forEach(key => {
                this.student[key] = "";
            });
        }
    }
}
</script>