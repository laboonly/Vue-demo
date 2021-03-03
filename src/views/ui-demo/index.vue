<template>
  <div>
    <div class="table autoscroll">
        <div class="table-header">
            <div class="table-tr">告警时间</div>
            <div class="table-tr">告警来源</div>
            <div class="table-tr">所属街道</div>
            <div class="table-tr">污染构成</div>
            <div class="table-tr">处理状态</div>
        </div>
        <div class="table-content ">
            <AutoScroll :height="130">
            <div class="table-list" v-for="item in tableData" :key="item.time">
                <div class="table-td">{{ item.time }}</div>
                <div class="table-td">{{ item.source }}</div>
                <div class="table-td">{{ item.street }}</div>
                <div class="table-td">{{ item.pollution }}</div>
                <div class="table-td status">{{ item.status }}</div>
            </div>
            </AutoScroll>
        </div>
    </div>
     <div class="button-class">
      <hc-button>按钮1</hc-button>
      <hc-button type="info">按钮2</hc-button>
      <hc-button type="primary">按钮3</hc-button>
      <hc-button type="primary" disabled>禁用</hc-button>
      <hc-button type="text">文字按钮-默认</hc-button>
      <hc-button type="text" disabled>文字按钮-禁用状态</hc-button>
      <!-- <hc-button type="info" icon="icon-btn-upload">按钮2</hc-button> -->
   </div>

</div>
</template>

<script>

export default {
  data () {
    return {
      tableData: [
        {
          time: '12:00:00',
          source: '监测告警',
          street: '福海街道',
          pollution: '工业污染',
          status: '未生成'
        },
        {
          time: '11:54:12',
          source: '监测告警',
          street: '石岩街道',
          pollution: '工业污染',
          status: '未生成'
        },
        {
          time: '11:50:12',
          source: '监测告警',
          street: '沙井街道',
          pollution: '工业污染',
          status: '未生成'
        },
        {
          time: '10:50:12',
          source: '巡河上报',
          street: '西乡街道',
          pollution: '工业污染',
          status: '未生成'
        },
        {
          time: '10:38:12',
          source: '监测告警',
          street: '航程街道',
          pollution: '工业污染',
          status: '未生成'
        },
        {
          time: '09:38:12',
          source: '监测告警',
          street: '燕罗街道',
          pollution: '工业污染',
          status: '未生成'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.autoscroll {
    /* height: 240px; */
    width: 370px;
    margin: 50px auto;
}
.table {
    // height: 240px;
    .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #15355e;
    padding: 12px 0;
    .table-tr {
        width: 70px;
        // height: 40px;
        text-align: center;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #6d8db5;
        line-height: 16px;
    }
    }
    .table-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        // background: #15355e;
        padding: 12px 0;
        .table-td {
            width: 70px;
            text-align: center;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #cfd6e2;
            line-height: 16px;
        }
        .status {
            color: #ff3433;
        }
    }
}
</style>
