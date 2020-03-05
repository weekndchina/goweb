<template>
  <v-chart :options="pie"></v-chart>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/pie";

export default {
  components: {
    "v-chart": ECharts
  },
  props: ["name"],
  data() {
    return {
      pie: {
        //tooltip: {
        //  trigger: "item",
        //  backgroundColor: "#f60",
        //  formatter: "{a} <br/>{b}: {c} ({d}%)"
        // },
        legend: {
          top: 0,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          textStyle: {
            color: 'grey',
            fontSize: 10,
            lineHeight: 10
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{a}"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              smooth: true
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    const that = this;
    window.onresize = () => {
    //   let myChart = this.v - chart;
    //   myChart.resize();
    };
  }
};
</script>


<style scoped>
.echarts {
  width: 100%;
  height: 300px;
}
</style>