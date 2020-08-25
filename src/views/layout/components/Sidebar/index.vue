<template>
    <div>
         <sidebar-item :routes="permission_routes"></sidebar-item>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  }
}
</script>
