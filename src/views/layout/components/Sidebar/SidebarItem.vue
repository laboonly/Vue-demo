<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <router-link v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <div class="menu-item">
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  },
  mounted () {
    console.log(this.routes)
  }
}

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .menu-wrapper {
    padding-top: 50px;
    a {
      text-decoration: none;
      // &:hover {
      //   cursor: pointer;
      //   color: inherit;
      //   text-decoration: none;
      // }
    }
  }
  .menu-item {
      height: 56px;
      line-height: 56px;
      padding-left: 20px;
      color: rgb(255, 255, 255);
      background-color: rgb(48, 65, 86);
      &:hover {
        background-color: rgb(38, 52, 96);
      }
    }
</style>
