<template>
  <div>
    <div id="target">

    </div>
  </div>
</template>

<script>

import { Drag } from '@/utils/drag.js'

export default {
  data () {
    return {

    }
  },
  mounted () {
    let demo = new Drag('target')
    demo()
  }
}
</script>

<style lang="less">

#target {

  width: 100px;
  height: 100px;
  background-color: hotpink;
  cursor: move;
}

</style>
