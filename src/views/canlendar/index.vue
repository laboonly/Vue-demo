<template>
    <div class="task-canlendar">
        <div class="container">
            <div class="">
                <div class="date-picker-content">
                    <div class="date-picker-input-content">
                        <input type="text" class="date-picker-input" placeholder="日期选择" v-model="date">
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
                                <td :key="index"> {{ item.content }} </td>
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
      total_calendar_list: [],
      date: null // 将要被熏染的列表
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
    }
  },
  methods: {
    getWeekday (year, month, day) { // 获取星期几
      return new Date(year / month / day).getDay()
    },
    getMonthDays (year, month) { // 获取一个月有几天
      return new Date(year, month, 0).getDate()
    },
    C_calender (year, month) {
      let daysInMonth = this.getMonthDays(year, month)
      let targetDay = this.getWeekday(year, month, 1)
      let preNum = targetDay + 1 //
      if (targetDay > 0) {
        for (let i = 0; i < preNum; i++) {
          let obj = {
            type: 'pre',
            content: ''
          }
          this.total_calendar_list.push(obj)
        }
      }
      for (let i = 1; i <= daysInMonth; i++) {
        let obj = {
          type: 'pre',
          content: i
        }
        this.total_calendar_list.push(obj)
      }
      let nextNum = 6 - this.getWeekday(year, month + 1, 1)
      console.log(nextNum)
      for (let i = 0; i < nextNum; i++) {
        let obj = {
          type: 'pre',
          content: ''
        }
        this.total_calendar_list.push(obj)
      }
      console.log(this.total_calendar_list)
      let res = []
      for (let i = 0; i < 6; i++) {
        let temp = this.total_calendar_list.slice(i * 7, i * 7 + 7)
        res.push(temp)
      }
      this.total_calendar_list = res
      console.log(this.total_calendar_list)
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
            }
        }
    }
    .date-picker-content {
        .date-picker-input-content {
        .date-picker-input {
            border: 1px solid #dcdfe6;
            color: #606266;
            display: inline-block;
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
    }
</style>
