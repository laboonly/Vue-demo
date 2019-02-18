<template>
  <div class="carousel-container">
    <header>轮播图</header>
    <transition-group tag="ul" name="carousel">
      <li v-for="(item, idx) in mybanner" :key="idx + 1" v-show="idx === mark">
        <a href="" class="bannera">
          <img :src="item.banner" alt="">
        </a>
      </li>
    </transition-group>
    <div class="bullet">
        <button v-for='(item,idx) in mybanner.length' :class="{'active':idx === mark}" :key="idx"  @click='change(idx)'>
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
      len: 3,
      mybanner: [
        {
          banner: require('@/assets/156a0c13fd369e473e7074c20ab1ee79b99d7aef.jpg')
        },
        {
          banner: require('@/assets/20120611175238_aCNGz.jpeg')
        },
        {
          banner: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          banner: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          banner: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          banner: require('@/assets/20140214120558_2f4NN.jpeg')
        }
      ]
    }
  },
  created () {
    // this.play()
  },
  methods: {
    change (i) {
      this.mark = i
    },
    autoPlay () {
      this.mark++
      if (this.mark === this.len) { // len在data中定义了，为banner的个数
        this.mark = 0
      }
    },
    play () {
      setInterval(this.autoPlay, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    position: relative;
    list-style-type: none;
    padding: 0 0 0 0;
    display: flex;
    justify-content: center;
    height: 200px;
    li {
      position: absolute;
      a {
        display: block;
        text-decoration: none;
        img {
          height: 200px;
          margin-left: 10px;
          margin-right: 10px;
        }
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
  .carousel-enter-active {
      transform: translateX(0);
      transition: all 1s ease-in-out;
  }
  .carousel-leave-active {
      transform: translateX(-100%);
      transition: all 1s ease-in-out;
  }
  .carousel-enter {
    transform: translateX(100%)
  }
  .carousel-leave {
      transform: translateX(0)
  }
</style>
