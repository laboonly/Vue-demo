<template>
    <div>
         <sidebar-item :routes="permission_routers"></sidebar-item>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers'
    ])
  },
  mounted () {
    console.log(this.permission_routers)
  }
}
</script>
