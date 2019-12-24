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
        children: [
          { name: '学生信息', url: 'studentInfo'},
          { name: '宗教信仰', url: 'religion'},
          { name: '少数民族', url: 'minority'},
          { name: '行为失范', url: 'anomie'},
          { name: '学困生', url: 'learnDifficultStu'},
          { name: 'A类贫困生', url: 'ApoorStu'},
          { name: '数据汇总', url: 'summaryData'},
        ]
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