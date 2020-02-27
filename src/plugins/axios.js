import axios from "axios"
// axios 不能直接在其他组建中使用
Vue.prototype.$http = axios