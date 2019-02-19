<template>
    <div class="slider">
        <div class="center" >
            <ul class="container" :style="containerStyle">
                <li>
                    <img :src="images[images.length -1].img" />
                </li>
                <li v-for="(item ,idx) in images" :key="idx">
                    <img :src="item.img" alt="">
                </li>
                <li>
                    <img :src="images[0].img" />
                </li>
            </ul>
        </div>
        <div class="carousel-nav">
            <button type="button" class="carousel-prev" @click="move(600, 1, 30)">
                <svg-icon icon-class="back"></svg-icon>
            </button>
             <button type="button" class="carousel-next" @click="move(600, -1, 30)">
                <svg-icon icon-class="right"></svg-icon>
             </button>
        </div>
        <div class="bullet">
            <button v-for='(item,idx) in images.length' :class="{'active':idx === mark}" :key="idx"  @click='change(idx)'>
            <span ></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mark: 0,
      distance: -600,
      transitionEnd: true,
      speed: this.initialSpeed,
      images: [
        {
          img: require('@/assets/156a0c13fd369e473e7074c20ab1ee79b99d7aef.jpg')
        },
        {
          img: require('@/assets/20120611175238_aCNGz.jpeg')
        },
        {
          img: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          img: require('@/assets/111.jpg')
        },
        {
          img: require('@/assets/222.jpg')
        }
      ]
    }
  },
  computed: {
    containerStyle () {
      return {
        transform: `translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval () {
      return this.initialInterval * 1000
    }
  },
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 2
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.play()
      window.onblur = function () { this.stop() }.bind(this)
      window.onfocus = function () { this.play() }.bind(this)
    },
    move (offset, direction, speed) {
      // 节流
      if (!this.transitionEnd) return // 这里是闸
      this.transitionEnd = false // 开闸以后再把闸关上

      direction === -1 ? this.mark += offset / 600 : this.mark -= offset / 600

      //   this.distance += offset * direction
      if (this.mark < 0) {
        this.mark = this.images.length - 1
      }
      if (this.mark > 4) {
        this.mark = 0
      }
      console.log(this.distance, this.mark)

      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate (des, direc, speed) {
      if (this.temp) {
        window.clearInterval(this.temp)
        this.temp = null
      }
      const temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(temp)
          this.distance = des
          if (des < -3000) this.distance = -600
          if (des > -600) this.distance = -3000
        }
      }, 20)
    },
    change (idx) {
      const direction = idx - this.mark >= 0 ? -1 : 1 // 获取滑动方向
      const offset = Math.abs(idx - this.mark) * 600 // 获取滑动距离
      const jumpSpeed = Math.abs(idx - this.mark) === 0 ? this.speed : Math.abs(idx - this.mark) * this.speed
      this.move(offset, direction, jumpSpeed)
    },
    play () {
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(600, -1, this.speed)
      }, this.interval)
    },
    stop () {
      window.clearInterval(this.timer)
      this.timer = null
    }

  }
}
</script>

<style lang="less" scoped>
    *{
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    ol,ul{
        list-style: none;
    }
    .slider{
        position: relative;
        text-align: center;
    }
    .center{
        position:relative;
        width:600px;
        height:400px;
        margin:0 auto;
        overflow:hidden;
        .container {
            display: flex;
            position: absolute;
            img {
                width: 600px;
                height:400px;
            }
        }
    }
    .bullet {
        text-align: center;
        padding: 0 auto;
        button {
        display: inline-block;
        border: none;
        padding: 0;
        color: inherit;
        zoom: 1;
        background: 0 0;
        margin-top: 10px;
        &:hover {
            span {
            background: #869791;
            }
        }
        span {
            display: block;
            width: 10px;
            height: 10px;
            margin: 5px 7px;
            background: #D6D6D6;
            border-radius: 30px;
        }
        }
    }
    .carousel-nav{
        position: absolute;
        width: 100%;
        text-align: center;
        top: 200px;
        transform: translateY(-50%);
        .carousel-prev {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            opacity: 0.5;
            margin-right: 200px;
            cursor: pointer;
        }
        .carousel-next {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            opacity: 0.5;
            margin-left: 200px;
            cursor: pointer;
        }
    }
    .active {
        span {
            background-color: #869791!important;
        }

    }

</style>
