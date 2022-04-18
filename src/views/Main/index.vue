<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 5px ">
      <el-card shadow="hover" style="height:350px ">
        <div class="user">
          <img :src="userImg"/>
          <div class="userinfo">
            <p class="name">yezonggang</p>
            <p class="acess">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>本次登录的时间:<span>2022-04-15</span></p>
          <p>本次登录的地点:<span>郑州</span></p>
        </div>
      </el-card>
    </el-card>
    <el-card style="margin-top:20px; height:420px;">
        <el-table :data="tableData">
            <el-table-column v-for="(val,key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            >
            </el-table-column>
        </el-table>

    </el-card>   
     </el-col>

    <el-col sytle="margin-top:20px " :span="16">
      <div class="num">
        <el-card
          class="cardall"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ padding: 0 }"
        >
          <span><i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i></span>
          <span class="detail">
            <p class="num-detail" style="margin-top: 10px">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </span>
        </el-card>
      </div>
      <el-card style="height: 330px; border:10px">
        <!-- 折线图  -->
        <echart :chartData="echartData.order" style="height: 330px" />
      </el-card>
      <div class="graphclass">
        <el-card class="sub" style="height: 330px">
          <!-- 柱状图 -->
          <echart :chartData="echartData.user" style="height: 330px" />
        </el-card>
        <el-card class="sub" style="height: 330px ">
          <!-- 饼图 -->
          <echart
            :chartData="echartData.video"
            :isAxisChart="false"
            style="height: 330px"
          />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>


<script>
import { getData } from '../../api/dataRequest'
import Echart from '../../../src/components/ECharts.vue'

export default {
  components: {
    Echart
  },
  data() {
    return {
      userImg: require('../../../src/assets/logo.png'),
      tableData: [
        {
          name: 'oppo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: 'vivo',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '苹果',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '小米',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '三星',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        },
        {
          name: '魅族',
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800
        }
      ],
      tableLabel: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      },
      countData: [
        {
          name: '今日支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: 1234,
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: 210,
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: 1234,
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
      }
    }
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res
      console.log(res)
      if (code === 20000) {
        this.tableData = data.tableData

        const order = data.orderData
        const xData = order.date
        const keyAarry = Object.keys(order.data[0])
        const series = []
        keyAarry.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: 'line'
          })
        })
        this.echartData.order.xData = xData
        this.echartData.order.series = series
        this.echartData.user.xData = data.userData.map((item) => item.date)
        this.echartData.user.series = [
          {
            name: '新增用户',
            data: data.userData.map((item) => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: data.userData.map((item) => item.active),
            type: 'bar'
            // bar 表示柱状图
          }
        ]
        this.echartData.video.series = [
          {
            data: data.videoData,
            type: 'pie'
          }
        ]
      }
    })
  }
}
</script>

<style lang="less" scoped>
.num {
  display: flex;
  justify-content: space-between;
}
.cardall {
  display: inherit;
  margin: 20px 0px;
  background: color #444;
  width: 150px;
}
.graphclass {
  display: flex;
  flex-grow: 0;
  height: 200px;
  border: 10px;
}
.sub {
  flex: 1;
}
</style>