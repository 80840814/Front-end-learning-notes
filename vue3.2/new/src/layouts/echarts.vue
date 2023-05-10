<template>
   
  <div id="main" style="width: 600px; height: 400px"></div>
</template>
<script setup>
import * as echarts from 'echarts'
import { onMounted, reactive, ref } from 'vue'
let chart = ref()
let option = reactive({
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  legend: {
    data: ['销量'],
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    axisLine: {
      lineStyle: {
        color: '#ccc',
      },
    },
    axisLable: {
      rotate: 45,
      formatter: val.split('').join('\n'),
    },
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
})
onMounted(() => {
  var myChart = echarts.init(chart.value)
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
})
</script>

<style></style>
