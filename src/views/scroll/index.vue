<template>
  <div class="container">
    <ul>
      <li class="item" v-for="(l, i) in inContainerList" :key="i">
        <template>
          <img style="width: 200px; height: 100px" :src="img" />
          <div style="margin-left: 10px;">
            <span style="color: #064879;"><strong>{{ l.title }}</strong></span> <br>
            <span>{{ l.des }}</span>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
      lists: [], // 维护视图中出现的列表
      itemHeight: 130, //  元素的高度
      inContainerList: [],
      scrollBottomNum: 0,
      scrollTop: 0,
      scrollHeight: 0
    }
  },
  mounted () {
    this.inContainerList = this.getList()
    this.scroll = this.debounce(this.scrollAction)
    window.onscroll = this.scroll
  },
  methods: {
    debounce (fn, delay = 2000) { // 防抖函数
      let timer = null
      return () => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, delay)
      }
    },
    isInContainer (lists) {
      if (this.scrollBottomNum <= 1) {
        return this.lists
      }
      const _this = this
      const includeList = lists.filter(l => {
        return l.height >= _this.scrollTop + _this.scrollHeight * (_this.scrollBottomNum - 1)
      })
      console.log(includeList)
      return includeList
    },
    initList () { // 初始化列表 title 列表的名字 des 描述
      let lists = []
      for (let i = 0; i < 7; i++) {
        const list = {
          title: `Course ${this.lists.length + i + 1}第${i + 1}节`,
          des: '快来报名学习，快来报名学习，快来报名学习，快来报名学习，快来报名学习'
        }
        lists.push(list)
      }
      return lists
    },
    getList () { // 模拟获取列表的 api
      const lists = this.initList()
      const oldListLength = this.lists.length // 之前的整个lists 的高度。
      lists.forEach((l, i) => {
        l.height = this.itemHeight * (oldListLength + i + 1) // 设置 list 在整个文档当中的高度
      })
      this.lists.push(...lists)
      return lists
    },
    scrollAction () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 当前页面滚动条纵坐标的位置
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight // 当前文档的高度，可见区域高度
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight // 文档总的高度
      console.log(scrollTop, clientHeight, scrollHeight)
      if (scrollTop + clientHeight >= scrollHeight - this.itemHeight) {
        this.scrollBottomNum++
        if (this.scrollBottomNum === 1) {
          this.scrollTop = scrollTop
          this.scrollHeight = scrollHeight
        }
        this.inContainerList = [...this.isInContainer(this.inContainerList), ...this.getList()]
        const _this = this
        this.$nextTick(function () {
          console.log(_this.scrollTop)
          if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = _this.scrollTop
          } else {
            document.body.scrollTop = _this.scrollTop
          }
        })
      } else if (scrollTop <= this.itemHeight && this.scrollBottomNum > 1) {
        // console.log('top')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 5rem;
  margin-left: 250px;
  width: 100%;
  height: 100vh;
}
.item {
  display: flex;
  margin-top: 30px;
  height: 100px;
}
li {
  list-style: none;
  text-align: left;
}
ul {
  padding: 0;
  margin: 0;
}
</style>
