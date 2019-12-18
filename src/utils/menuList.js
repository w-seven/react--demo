// 后端传递的数据
const menuList = [
    {
        name: '首页',
        url: 'home',
        icon: 'home',
        children: [
            { name: '用户管理', url: 'userInfo' },
            { name: '角色管理', url: 'roleInfo' }
        ]
      },
      {
        name: '导入模板',
        url: 'template',
        icon: 'pie-chart'
      },
      {
        name: '学生基本信息管理',
        url: 'baskInfo',
        icon: 'user',
      },
      {
        name: '学生成绩管理',
        url: 'gradeInfo',
        icon: 'team',
      },
      {
        name: '学生请假管理',
        url: 'leaveInfo',
        icon: 'bars',
      },
]
export default menuList