const Menu = [
        { text: '任务', icon: 'fa-tasks', component: "task"},
        { text: '统计', icon: 'fa-chart-line', component: "home"},
        { text: '日志', icon: 'fa-calendar-check', component: "log"},
        { text: '邮件', icon: 'fa-mail-bulk', component: "mail"},
        { text: '文件', icon: 'fa-link', component: "upload"},
]

Menu.forEach(item => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase()
      let textB = y.title.toUpperCase()
      return textA < textB ? -1 : textA > textB ? 1 : 0
    })
  }
})

export default Menu
