<template>
    <div class="slider">
        <div class="center">
            <ul class="container">
                <li v-for="(item ,idx) in images" :key="idx">
                    <img :src="item.img" alt="">
                </li>
            </ul>
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
          img: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          img: require('@/assets/20140214120558_2f4NN.jpeg')
        },
        {
          img: require('@/assets/20140214120558_2f4NN.jpeg')
        }
      ]
    }
  },
  methods: {

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
</style>
