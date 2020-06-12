import Mock from "mockjs";

const Random = Mock.Random;
const domain = "http://mockjs.com/api";
const code = 200;

const userData = function(options) {
  const { username, password } = { ...JSON.parse(options.body) };
  if (username === "admin" && password === "123456") {
    return { code: 200, data: { token: "123456" }, msg: "登陆成功" };
  } else {
    return { code: 403, data: { token: "" }, msg: "账号密码错误！账号admin，密码123456" };
  }
};

const watchData = function() {
  let data;
  data = {
    code: 200,
    data: {
      statics: [
        { type: "每日活跃数", cnt: "800", icon: "fa-arrow-up" },
        { type: "每日新增数", cnt: "30", icon: "fa-arrow-up" },
        { type: "总数", cnt: "1000", icon: "fa-arrow-down" },
        { type: "注销用户", cnt: "20", icon: "fa-arrow-up" },
        { type: "非活跃用户", cnt: "10", icon: "fa-arrow-down" },
        { type: "剔除傻逼", cnt: "8", icon: "fa-arrow-down" }
      ]
    },
    msg: "登陆成功"
  };
  return data;
};

const avatorImages = () => {
  return {
    code: 200,
    data: {
      images: [
        "/img/1.jpeg",
        "/img/2.jpeg",
        "/img/3.jpeg",
        "/img/4.jpeg",
        "/img/5.jpeg",
        "/img/6.jpeg",
        "/img/7.jpeg",
        "/img/8.jpeg",
        "/img/9.jpeg",
        "/img/10.jpeg",
        "/img/11.jpeg",
        "/img/12.jpeg",
        "/img/13.jpeg",
        "/img/14.jpeg",
        "/img/15.jpeg",
        "/img/16.jpeg",
        "/img/17.jpeg",
        "/img/18.jpeg",
        "/img/19.jpeg",
        "/img/20.jpeg"
      ]
    }
  };
};

const treeLists = () => {
  return {
    code: 200,
    data: {
      items: [
        {
          id: '1',
          name: '.git',
          path: '/.git/',
        },
        {
          id: '2',
          name: 'node_modules',
          path: '/node_modules/',
        },
        {
          id: '3',
          name: 'public',
          path: '/public/',
          children: [
            {
              id: '4',
              name: 'static',
              path: '/public/static/',
              children: [{
                name: 'logo.png',
                file: 'png',
                path: '/public/static/',
                fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
              }],
            },
            {
              id: '5',
              name: 'favicon.ico',
              file: 'png',
              path: '/public/static/',
              fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
            },
            {
              id: '6',
              name: 'index.html',
              file: 'html',
              path: '/public/static/',
              fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
            },
          ],
        },
        {
          id: '7',
          name: '.gitignore',
          file: 'txt',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
        {
          id: 8,
          name: 'babel.config.js',
          file: 'js',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
        {
          id: 9,
          name: 'package.json',
          file: 'json',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
        {
          id: 10,
          name: 'README.md',
          file: 'md',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
        {
          id: 11,
          name: 'vue.config.js',
          file: 'js',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
        {
          id: 12,
          name: 'yarn.lock',
          file: 'txt',
          path: '/',
          fuuid: '32DF1BCB7CAA0CED3D0385D1825FE8EC',
        },
      ]
    },
    msg: "get ok"
  }
}


const fileDetails = (name) => {
  return {
    code: 200,
    data: {
      items: [
        {
          path: '/',
        },
        {
          name: 'node_modules',
        },
      ]
    },
    msg: "get ok"
  }
}



// 定义请求链接，类型，还有返回数据
Mock.mock(`${domain}/login`, "post", userData);

Mock.mock(`${domain}/watch`, "get", watchData);

Mock.mock(`${domain}/getImages`, "get", avatorImages);

Mock.mock(`${domain}/getFiles`, "get", treeLists);
