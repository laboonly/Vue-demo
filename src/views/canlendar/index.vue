<template>
    <div class="task-canlendar">
        <div class="container">
            <div class="">
                <div class="date-picker-content">
                    <div class="back" @click="preMonth">
                        <svg-icon icon-class="back"></svg-icon>
                    </div>
                    <div class="date-picker-input-content">
                        <input type="text" class="date-picker-input" placeholder="日期选择" v-model="date">
                    </div>
                    <div class="next" @click="nextMonth">
                        <svg-icon icon-class="right"></svg-icon>
                    </div>
                </div>
            </div>
            <table border="1"   >
                <tbody>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                    <tr v-for="(items, indexs) in total_calendar_list" :key="indexs">
                        <template  v-for='(item, index) in items'>
                                <td :key="index" :class="{ active: item.type }" > {{ item.content }} </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDay(),
      total_calendar_list: []
    }
  },
  created () {
    this.C_calender(this.year, this.month)
  },
  computed: {
    nowYear () {
      return new Date().getFullYear()
    },
    nowMonth () {
      return new Date().getMonth()
    },
    nowDay () {
      return new Date().getDay()
    },
    date () {
      return this.year + '-' + this.month + '-' + this.day
    }
  },
  methods: {
    getWeekday (year, month, day) { // 获取星期几
      let nowdDate = year + '-' + month + '-' + day
      return new Date(nowdDate).getDay()
    },
    getMonthDays (year, month) { // 获取一个月有几天
      return new Date(year, month, 0).getDate()
    },
    C_calender (year, month) {
      this.total_calendar_list = []
      let daysInMonth = this.getMonthDays(year, month) // 当前月份一共有几天
      let targetDay = this.getWeekday(year, month, 1) // 当前月份第一天是星期几
      //   let preNum = targetDay + 1 //

      if (targetDay > 0) {
        for (let i = 0; i < targetDay; i++) {
          let obj = {
            type: false,
            content: ''
          }
          this.total_calendar_list.push(obj)
        }
      }
      for (let i = 1; i <= daysInMonth; i++) {
        let obj
        if (i === this.day && year === this.year && month === this.month) {
          obj = {
            type: true,
            content: i
          }
        } else {
          obj = {
            type: false,
            content: i
          }
        }
        this.total_calendar_list.push(obj)
      }
      let nextNum
      if (this.month < 12) {
        nextNum = 6 - this.getWeekday(year, month + 1, 1)
      } else {
        nextNum = 6 - this.getWeekday(year + 1, 1, 1)
      }
      if (nextNum !== 6) {
        for (let i = 0; i <= nextNum; i++) {
          let obj = {
            type: false,
            content: ''
          }
          this.total_calendar_list.push(obj)
        }
      }
      let res = []
      for (let i = 0; i < 6; i++) {
        let temp = this.total_calendar_list.slice(i * 7, i * 7 + 7)
        res.push(temp)
      }
      this.total_calendar_list = res
    },
    nextMonth () {
      if (this.month < 12) {
        this.month = this.month + 1
      } else {
        this.month = 1
        this.year = this.year + 1
      }
      this.C_calender(this.year, this.month)
    },
    preMonth () {
      if (this.month > 1) {
        this.month = this.month - 1
      } else {
        this.month = 12
        this.year = this.year - 1
      }

      this.C_calender(this.year, this.month)
    }
  }
}
</script>

<style lang="less" scoped>
    .task-canlendar {
        .container {
            text-align: center;
            table {
                margin: 0 auto;
                border: 1px solid gray;
                border-collapse:collapse;
                box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
                th {
                    width: 64px;
                    height: 40px;
                    background-color: #ea6151;
                    color: #fff;
                    border-color: #ea6151;
                }
                td {
                    width: 64px;
                    height: 74px;
                    background-color: #ffffff;
                }
                .active {
                    background-color: #409EFF;
                }
            }
        }
    }
    .date-picker-content {
        display: flex;
        justify-content: center;
        .date-picker-input-content {
            .date-picker-input {
                border: 1px solid #dcdfe6;
                color: #606266;
                display: inline-block;
                margin-bottom: 10px;
                height: 40px;
                line-height: 40px;
                width: 200px;
                border-radius: 4px;
                background-color: #fff;
                border: 1px solid #dcdfe6;
                padding: 0 15px;
                cursor: pointer;
            }
        }
        .back {
            margin-right: 20px;
            padding-top: 6px;
        }
        .next {
            margin-left: 20px;
            padding-top: 6px;
            cursor: pointer;
        }
        .svg-icon {
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }

    }
</style>
