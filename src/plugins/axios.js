import Vue from 'vue'
import axios from "axios"


axios.defaults.baseURL = 'http://mockjs.com/api'
// axios 不能直接在其他组建中使用
Vue.prototype.$http = axios