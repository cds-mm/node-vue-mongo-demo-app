<template>
    <div>
        <div class="field">
            <label class="label">Student Number</label>
            <div class="control">
                <input class="input" type="text" disabled v-model="student.student_num">
            </div>
        </div>
        <div class="field">
            <label class="label">First Name</label>
            <div class="control">
                <input class="input" type="text" v-model="student.firstnm">
            </div>
        </div>
        <div class="field">
            <label class="label">Last Name</label>
            <div class="control">
                <input class="input" type="text" v-model="student.lastnm">
            </div>
        </div>
        <div class="field">
            <label class="label">Course</label>
            <div class="control">
                <input class="input" type="text" disabled v-model="student.course">
            </div>
        </div>
        <div class="field">
            <label class="label">Course Start</label>
            <div class="control">
                <input class="input" type="text" disabled v-model="student.course_end_dtm">
            </div>
        </div>
        <div class="field">
            <label class="label">Course End</label>
            <div class="control">
                <input class="input" type="text" disabled v-model="student.course_start_dtm">
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
    props: ['p_student'],

    data() {
        return {
            student: Object.assign({}, this.p_student)
        }
    },

    methods: {
        submit(){
            // axios.patch('/api/student/' + this.student._id, this.student)
            //     .then(response => {
            //         this.$emit('updated', this.student)
            //     }).catch(error => {
            //         console.log(error.response)
            //     });            
        
            this.$emit('updated', this.student);
        },

        reset(){
            this.student = Object.assign({}, this.p_student)
        }
    },

    watch: {
        p_student: function () { this.reset() }
    }
}
</script>