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
      <div class="content5">
          <h1>6. 类订单布局</h1>
          <section >
            <span class="left">
                <div
                v-for="ele in elements"
                @click="handleClick"
                class="item" :key="ele">
                {{symbol}}
                </div>
            </span>
            <span class="center">Vertical centering<br>Vertical centering Vertical centering</span>
            <span class="right">Vertical centering</span>
          </section>
      </div>
      <div class="content6">
          <h1>7. 浮动定位，跟绝对定位</h1>
          <section>
              <div class="floatbox"></div>
              <div class="abox"></div>
          </section>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: '100%',
      elements: Array(2).fill(1),
      symbol: '➕'
    }
  },
  mounted () {
    this.$refs.range.oninput = ({ target: { value } }) => {
      this.width = `${60 + value * 0.4}%`
    }
  },
  methods: {
    handleClick () {
      this.elements.length == 2 ? (_ => {
        this.elements.push(1)
        this.symbol = '➖'
      })() : (_ => {
        this.elements.pop()
        this.symbol = '➕'
      })()
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
         padding: 39px 29px;
        input[type="range"] {
            width: 100%;
            cursor: ew-resize;
        }
    }
    .grail-content {
        width: 100%;
        padding: 0 129px;
        box-sizing: border-box;
        &::after {
            content: '';
            display: block;
            clear: both;
        }
        div {
            float: left;
            height: 229px;
            padding: 29px 12px;
            color: white;
            background: #b4a078;
            box-sizing: border-box;
        }
        .left {
            position: relative;
            width: 119px;
            left: -129px;
            margin-right: -100%;

        }
        .right {
            position: relative;
            width: 119px;
            margin-left: -119px;
            left: 129px;
        }
        .center {
            width: 100%;
            text-align: justify;
            hyphens: auto;
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
    .content5 {
        width: 100%;
        padding: 39px 29px;
        font-size: 12px;
        box-sizing: border-box;
        section {
            width: 100%;
            box-shadow: 0 0 0 1px #eee;
            overflow: hidden;
            span {
                width: 20%;
                display: inline-block;
                vertical-align: middle;
                margin-left: -3px;
                padding-left: 12px;
                .item {
                    width: 100%;
                    height: 85px;
                    text-align: center;
                    line-height: 85px;
                    background: rgba(180,160,120,.1);
                    position: relative;
                    &:not(:first-child) {
                        margin-top: 24px;
                    }
                    &:not(:first-child)::before {
                        content: '';
                        position: absolute;
                        top: -12px; right: -12px; left: -12px;
                        border-top: 1px solid #eee;
                    }
                }
            }
            .left {
                width: 45%;
                margin-left: 0;
                padding: 12px;
            }
            .center {
                width: 35%;
                border: 1px solid #eee;
                padding-top: 999px;       /* h */
                padding-bottom: 999px;    /* a */
                margin-top: -999px;       /* c */
                margin-bottom: -999px;    /* k */
                position: relative;
            }
            &::after {
                content: '';
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
        }

    }
    .content6 {
        width: 100%;
        padding: 39px 29px;
        font-size: 12px;
        box-sizing: border-box;
        section {
            padding: 200px 200px;
            border: 1px solid #eee;
            overflow: hidden;
            position: relative;
        }
        .floatbox {
            float: left;
            // position: relative;
            left: -100px;
            // margin-left: -100px;
            width: 200px;
            height: 200px;
            background: red;
        }
        .abox {
            position: absolute;
            // left: 200px;
            margin-left: 100px;
            width: 200px;
            height: 200px;
            background: #b4a078;
        }
    }
</style>
