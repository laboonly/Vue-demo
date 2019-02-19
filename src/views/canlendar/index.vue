<template>
    <div class="task-canlendar">
        <div class="container">
            <div class="">

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
                    <tr v-for="item in number" :key="item">
                        <td> {{item}} </td>
                        <td> {{item}} </td>
                        <td> {{item}} </td>
                        <td> {{item}} </td>
                        <td> {{item}} </td>
                        <td> {{item}} </td>
                        <td> {{item}} </td>
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
      number: 7
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
</style>
