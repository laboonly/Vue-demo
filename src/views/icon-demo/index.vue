<template>
  <div>
    <svg-icon icon-class="back"></svg-icon>
    <svg-icon icon-class="right"></svg-icon>
    <div>
       <count-up></count-up>
    </div>
  </div>
</template>

<script>
import CountUp from '@/components/CountTo'

export default {
  components: {
    CountUp
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
    // .icon {
    //    width: 1em; height: 1em;
    //    vertical-align: -0.15em;
    //    fill: currentColor;
    //    overflow: hidden;
    // }
    .svg-icon {
      color: #3190e8;
    }
</style>
