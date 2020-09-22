<template>
<!-- <body> -->
    <div>
        <router-view></router-view>
    </div>
<!-- </body> -->
</template>

<script>
export default {
    watch: {
        /**
         * Change page title based on meta.title tag from displayed route
         */
        '$route': {
            handler: (to, from) => {
                document.title = to.meta.title || 'Test App'
            },
            immediate: true            
        }
    }
}
</script>