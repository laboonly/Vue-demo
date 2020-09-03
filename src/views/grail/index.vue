<template>
  <div class="">
      <h1>1. 圣杯布局</h1>
      <div class="grail-content">
          <div class="left"></div>
          <div class="center">
              <p>A paragraph of filler text. La la la de dah de dah de dah de la.</p>
          </div>
          <div class="right"></div>
      </div>
      <h1>2. 半透明边框</h1>
      <div class="transborder">
          <div class="box">

          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scped>
    .grail-content {
        width: 100%;
        overflow: hidden;
        .left {
            position: relative;
            width: 119px;
            left: 0;
            margin-right: -119px;
            background-color: hotpink;
        }
        .right {
            position: relative;
            width: 119px;
            right: 0;
            margin-left: -119px;
            background-color: hotpink;
        }
        .center {
            width: 100%;
            padding: 0 119px;
        }
        div {
            float: left;
            height: 500px;
            background: #FFFFFF;
            box-sizing: border-box;
        }
    }
    .transborder {
        width: 100%;
        height: 300px;
        background: #b4a078;

        .box {
            width: 300px;
            height: 200px;
            margin: 20px auto;
            background-color: white;
        }
    }
</style>
