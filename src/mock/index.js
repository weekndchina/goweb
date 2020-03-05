import Mock from 'mockjs'


const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200

const userData = function() {
    let data;
    data = {"code": 200, "data":{"token": "123456"}, "msg": "登陆成功"}
    return data
}

const watchData = function() {
    let data
    data = {
                "code": 200,
                "data":{
                    "statics": [
                        {"type":"每日活跃数","cnt":"800","icon":"fa-arrow-up"},
                        {"type":"每日新增数","cnt":"30","icon":"fa-arrow-up"},
                        {"type":"总数","cnt":"1000","icon":"fa-arrow-down"},
                        {"type":"注销用户","cnt":"20","icon":"fa-arrow-up"},
                        {"type":"非活跃用户","cnt":"10","icon":"fa-arrow-down"},
                        {"type":"剔除傻逼","cnt":"8","icon":"fa-arrow-down"},
                        ],
                    },
                "msg": "登陆成功"
            }
    return data
}
// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/login`, 'get', userData);

Mock.mock(`${domain}/watch`, 'get', watchData);

