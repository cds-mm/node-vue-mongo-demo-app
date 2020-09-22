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
        '$route': {
            handler: (to, from) => {
                document.title = to.meta.title || 'Test App'
            },
            immediate: true            
        }
    }
}
</script>