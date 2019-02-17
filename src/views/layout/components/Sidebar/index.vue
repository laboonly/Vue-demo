<template>
    <div>
         <sidebar-item :routes="routes"></sidebar-item>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
    components: { SidebarItem },
    computed: {
        routes() {
            return this.$router.options.routes
        },
    }
}
</script>
