import Mock from 'mockjs'


const Random = Mock.Random
const domain = 'http://mockjs.com/api'
const code = 200

const userData = function() {
    let data;
    data = {"code": 200, "data":{"token": "123456"},"msg": "登陆成功"}
    return {data: data}
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/login`, 'get', userData);
