
// 私有属性不需要被外部访问
var transform = getTransform()

export function Drag (selector) {
  // 构造函数 属于每个实例单独都有的属性

  // 目标元素
  // eslint-disable-next-line valid-typeof
  this.elem = typeof selector === 'Object' ? selector : document.getElementById(selector)

  // 声明2个变量对象用来保存鼠标初始位置的x，y坐标
  this.startX = 0
  this.startY = 0

  // 声明2个变量来保存目标元素初始位置的x，y坐标
  this.sourceX = 0
  this.sourceY = 0

  // 初始化函数
  this.init()
}

// 原型
Drag.prototype = {
  // 第一步永远是将构造函数指回自己
  constructor: Drag,

  // 在原型上添加一些共享方法

  // 初始化方法
  init: function () {
    // 初始时需要做些什么事情， 这里是绑定移动的事件。
    this.setDrag()
  },
  // 获取元素的当前属性
  getStyle: function (property) {
    return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(this.elem, false)[property] : this.elem.currentStyle[property]
  },
  // 获取当前元素的位置信息
  getPosition: function () {
    var pos = {x: 0, y: 0}
    if (transform) {
      var transformValue = this.getStyle(transform)
      if (transformValue === 'none') {
        this.elem.style[transform] = 'translate(0, 0)'
        return pos
      } else {
        var temp = transformValue.match(/-?\d+/g)
        // eslint-disable-next-line no-return-assign
        return pos = {
          x: parseInt(temp[4].trim()),
          y: parseInt(temp[5].trim())
        }
      }
    } else {
      if (this.getStyle('position') === 'static') {
        this.elem.style.position = 'relative'
        return pos
      } else {
        // eslint-disable-next-line no-return-assign
        return pos = {
          x: parseInt(this.getStyle('left') ? this.getStyle('left') : 0),
          y: parseInt(this.getStyle('top') ? this.getStyle('top') : 0)
        }
      }
    }
  },
  // 设置元素位置
  setPosition: function (pos) {
    if (transform) {
      this.elem.style[transform] = 'translate(' + pos.x + 'px, ' + pos.y + 'px)'
    } else {
      this.elem.style.left = pos.x + 'px'
      this.elem.style.top = pos.y + 'px'
    }
  },
  // 设置监听事件
  setDrag: function () {
    let self = this

    this.elem.addEventListener('mousedown', start, false)

    // 绑定在mousedown上的回调，event为传入的事件对象
    function start (event) {
      // 获取鼠标初始位置
      self.startX = event.pageX
      self.startY = event.pageY

      // 获取元素初始位置
      var pos = self.getPosition(this.elem)

      self.sourceX = pos.x
      self.sourceY = pos.y

      // 绑定
      document.addEventListener('mousemove', move, false)
      document.addEventListener('mouseup', end, false)
    }

    function move (event) {
      // 获取鼠标当前位置
      var currentX = event.pageX
      var currentY = event.pageY

      // 计算差值
      var distanceX = currentX - self.startX
      var distanceY = currentY - self.startY

      // 计算并且设置元素当前位置

      self.setPosition({
        x: (self.sourceX + distanceX).toFixed(),
        y: (self.sourceY + distanceY).toFixed()
      })
    }

    function end (event) {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseup', end)
    }
  }

}

// 获取当前浏览器支持的transform兼容写法
function getTransform () {
  let transform = ''
  let divStyle = document.createElement('div').style
  // 可能涉及到的几种兼容性写法，通过循环找出浏览器识别的那一个
  let transformArr = ['transform', 'webkitTransform', 'MozTransform', 'msTransform', 'OTransform']

  let i = 0
  let len = transformArr.length

  for (; i < len; i++) {
    if (transformArr[i] in divStyle) {
      // 找到之后立即返回，结束函数
      // eslint-disable-next-line no-return-assign
      return transform = transformArr[i]
    }
  }

  // 如果没有找到，就直接返回空字符串
  return transform
}

// 对外暴露方法
