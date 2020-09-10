<template>
  <div>
    <svg-icon icon-class="back"></svg-icon>
    <svg-icon icon-class="right"></svg-icon>
    <div class="event">
        <h1>事件代理</h1>
        <ul @click="changeColor">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  },
  methods: {
    changeColor (event) {
      event.target.style.background = 'red'
    }
  }
}
</script>

<style lang="less" scoped>
    .svg-icon {
      color: #3190e8;
    }
    .event {
      ul {
        li {
          width: 200px;
          height: 20px;
          background-color: chocolate;
          list-style: none;
          margin-top: 20px;
        }
      }
    }
</style>
