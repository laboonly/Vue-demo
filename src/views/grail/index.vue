<template>
  <div class="css-demo">
      <div class="grail">
        <h1>1. 圣杯布局</h1>
        <input ref="range" type="range" value="100">
        <div class="grail-content" :style="{ width }">
            <div class="left"></div>
            <div class="center">
                <p>A paragraph of filler text. La la la de dah de dah de dah de la.</p>
            </div>
            <div class="right"></div>
        </div>
      </div>
      <div class="content2">
        <h1>2. 半透明边框</h1>
        <div class="transborder">
            <input id="pb" type="checkbox" checked/>
            <label for="pb">padding-box(默认)</label>
            <div class="box">
            </div>
        </div>
      </div>
      <div class="content3">
        <h1>3. 1px边线</h1>
        <div class="onepx">
            <div class="box"></div>
            <div class="box2"></div>
        </div>
      </div>
      <div class="content4">
        <h1>4. 条纹背景</h1>
        <div class="progress-outer">
            <div class="progress-enter">
                <div class="progress-bg"></div>
            </div>
        </div>
        <h1>5. 不规则卡片</h1>
        <div class="coupon-card">

        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '100%'
    }
  },
  mounted () {
    this.$refs.range.oninput = ({ target: { value } }) => {
      this.width = `${60 + value * 0.4}%`
    }
  }
}
</script>

<style lang="less" scped>
    .css-demo {
        padding: 100px 50px;
    }
    .grail {
        /* input range */
        input[type="range"] {
            width: 100%;
            cursor: ew-resize;
        }
    }
    .grail-content {
        width: 100%;
        overflow: hidden;
        .left {
            position: relative;
            width: 119px;
            left: 0;
            margin-right: -119px;

        }
        .right {
            position: relative;
            width: 119px;
            right: 0;
            margin-left: -119px;

        }
        .center {
            width: 100%;
            padding: 0 119px;
        }
        div {
            float: left;
            height: 500px;
            background: #b4a078;
            box-sizing: border-box;
        }
    }
    .transborder {
        width: 100%;
        height: 300px;
        background: #b4a078;
        padding: 20px 0;
        .box {
            width: 300px;
            height: 200px;
            margin: 20px auto;
            background-color: white;
            border: 10px solid hsla(0, 0%, 100%, .5);
        }
         label{
            color: #f4f0ea;
        }
        input[id="pb"]:checked ~ .box{
            background-clip: padding-box;
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
    .content4 {
        width: 100%;
        padding: 80px 0px;

        .progress-outer {
            width: 60%; height: 12px;
            border-radius: 8px;
            overflow: hidden;
            position: relative;
        }
        .progress-enter {
            height: inherit;
            background: rgba(180, 160, 120, .2);
        }
        .progress-bg {
            width: 60%;
            height: inherit;
            border-radius: 6px;
            background: repeating-linear-gradient(-45deg, #D9CFBB  25%, #C3B393 0, #C3B393 50%,
                    #D9CFBB 0, #D9CFBB 75%, #C3B393 0);
            background-size: 16px 16px;
            animation: panoramic 20s linear infinite;
        }
        @keyframes panoramic{
            to {
                background-position: 200% 0;
            }
        }
        .coupon-card {
            width: 200px;
            height: 120px;
            background-image: radial-gradient(circle at 100px -8px, transparent 20px, #b4a078 21px);
        }
    }
</style>
