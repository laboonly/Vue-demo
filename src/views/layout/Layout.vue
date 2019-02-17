<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Sidebar, AppMain } from '@/views/layout/components'
export default {
  name: 'layout',
  components: {
    Sidebar,
    AppMain
  },
  computed: {
    // sidebar () {
    //   return this.$store.state.app.sidebar
    // }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-wrapper {
        position: relative;
        height: 100%;
        width: 100%;
    }
    .main-container {
        min-height: 100%;
        transition: margin-left .28s;
        margin-left: 230px;
    }
    .sidebar-container {
        transition: width .28s;
        width: 230px !important;
        height: 100%;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
        background-color: rgb(48, 65, 86);
        a {
            display: inline-block;
            width: 100%;
            text-decoration: none;
        }
    }
</style>
