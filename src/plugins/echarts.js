import Vue from 'vue'
import "echarts"
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'

// 注册组件后即可使用
Vue.use('v-chart', ECharts)