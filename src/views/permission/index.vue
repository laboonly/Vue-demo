<template>
  <div>
        <div>
            <h1>权限指令</h1>
            <!-- Admin can see this -->
            <el-tag v-permission="['admin']">admin</el-tag>

            <!-- Editor can see this -->
            <el-tag v-permission="['editor']">editor</el-tag>

            <!-- Editor can see this -->
            <el-tag v-permission="['admin','editor']">Both admin or editor can see this</el-tag>
        </div>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js'
export default {
  directives: {
    permission
  }
}
</script>

<style>

</style>
