<template>
  <v-chart :options="polar" autoresize />
</template>


<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/polar";

export default {
  components: {
    "v-chart": ECharts
  },
  props: ["histogram"],
  data() {
    return {
      polar: {
        title: {
          text: "Map关系",
          textStyle: {
            color: ""
          }
        },
        legend: {
          data: ["code"],
          textStyle: {
            color: "#fff"
          }
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        textStyle: {
          color: "#fff"
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "code",
            type: "line",
            showSymbol: false,
            data: this.histogram
          }
        ],
        animationDuration: 2000
      }
    };
  }
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>