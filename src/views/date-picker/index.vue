<template>
  <div class="date-picker-content">
      <div class="date-picker-input-content">
        <input type="text" class="date-picker-input" placeholder="日期选择" v-model="date">
      </div>
      <h1>图表</h1>
      <div class="chart-content">

      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '2019 - 3 - 4'
    }
  }
}
</script>

<style lang="less" scoped>
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
