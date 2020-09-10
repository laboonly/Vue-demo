<template>
  <div class="css-demo">
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
      <h1>3. 1px边线</h1>
      <div class="onepx">
          <div class="box"></div>
          <div class="box2"></div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scped>
    .css-demo {
        padding-bottom: 100px;
    }
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
    .onepx {
        .box {
            height: 10px;
            background-color: #FFFFFF;
            box-shadow: 0  -1px 1px -1px #000000; //上边线
            width: 100%;
        }
        .box2 {
            width: 100%;
            height: 10px;
            margin-top: 50px;
            background-color: #FFFFFF;
            position: relative;
            &::after{
                position: absolute;
                content: '';
                background-color: #000000;
                display: block;
                width: 100%;
                height: 1px; /*no*/
                transform: scale(1, 0.5);
                top: 0;
                left: 0;
            }
        }
    }
</style>
