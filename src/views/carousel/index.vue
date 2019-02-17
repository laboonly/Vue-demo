<template>
  <div class="carousel-container">
    <header>轮播图</header>
    <transition-group tag="ul" name="carousel">
      <li v-for="(item, idx) in mybanner" :key="item.banner" v-show="idx === mark">
        <a href="" class="bannera">
          <img :src="item.banner" alt="">
        </a>
      </li>
    </transition-group>
    <div class="bullet">
        <span v-for='(item,idx) in mybanner.length' :class="{'active':idx === mark}" :key="idx"  @click='change(idx)'></span>
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
     ]
    }
  },
  created() {
    this.play()
  },
  methods: {
   change(i) {
     this.mark = i
   },
   autoPlay() {
      this.mark++
      if (this.mark === this.len) { //len在data中定义了，为banner的个数
          this.mark = 0
          return
      }
    },
    play() {
       setInterval(this.autoPlay, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
  ul{
    height: 200px;
    list-style-type: none;
    position: relative;
    padding: 0 0 0 0;
    display: flex;
    justify-content: center;
    li {
      position: absolute;
      a {
        display: block;
        text-decoration: none;
        img {
          width: 200px;
          height: 200px;
          margin-left: 10px;
          margin-right: 10px;
        }
      }
    }
  }
  
  
  .bullet {
    display: flex;
    justify-content: space-between;
    width: 320px;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    span {
      display: block;
      width: 100px;
      height: 50px;
      background-color: black;
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

