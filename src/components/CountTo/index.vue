<template>
    <div class="">
        <span ref="countup"></span>
    </div>
</template>

<script>
import CountUp from 'countup.js'
export default {
  name: 'countup-demo',
  data () {
    return {
      numAnim: null
    }
  },
  mounted () {
    this.initCountUp()
  },
  methods: {
    initCountUp () {
      this.numAnim = new CountUp(this.$refs.CountUp, 0, 2020)
      this.numAnim.start()
    }
  }
}

</script>

<style>

</style>
