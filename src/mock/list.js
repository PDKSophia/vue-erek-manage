const Mock = require('mockjs');

// 获取 `列表 - 表格` 数据
Mock.mock('/api/erek-list/table', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 20,
      list: [
        {
          id: 1,
          username: '彭道宽',
          staffID: 1982,
          actiontype: '财务复审',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '研发部',
          type: 'Web前端工程师',
          status: '在职',
          phone: '189****8869',
          time: 1539670042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 2,
          username: '懒羊羊',
          staffID: 2938,
          actiontype: '部门初审',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          department: '技术部',
          type: '员工',
          status: '休假',
          phone: '182****8321',
          time: 1539630042000,
          desc: '正在进行部门初审，审核资料不齐全。'
        },
        {
          id: 3,
          username: '沸羊羊',
          staffID: 1920,
          actiontype: '提交订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
          department: '销售部',
          type: '部长',
          status: '在职',
          phone: '178****8312',
          time: 1539630042000,
          desc: '标准购买订单已提交，请耐心等候商家发货'
        },
        {
          id: 4,
          username: '喜洋洋',
          staffID: 1231,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '研发部',
          type: '员工',
          status: '在职',
          phone: '182****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 5,
          username: '美羊羊',
          staffID: 2716,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '运营部',
          type: '员工',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 6,
          username: '灰太狼',
          staffID: 4271,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '运营部',
          type: '部长',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 7,
          username: '红太狼',
          staffID: 5212,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
          department: '销售部',
          type: '经理',
          status: '在职',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 8,
          username: '哆啦A梦',
          staffID: 7612,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '编辑部',
          type: '员工',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 9,
          username: '大熊',
          staffID: 2716,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
          department: '运营部',
          type: '在职',
          status: '休假',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        },
        {
          id: 10,
          username: '胖虎',
          staffID: 8612,
          actiontype: '创建订单',
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
          department: '研发部',
          type: '在职',
          status: '在职',
          phone: '138****8321',
          time: 1539630042000,
          desc: '那是一种内在的东西， 他们到达不了，也无法触及的'
        }
      ]
    }
  };
});

// 获取 `标准列表` 待办任务
Mock.mock('/api/erek-list/standard/all-task', () => {
  return {
    code: 1,
    msg: '获取所有待办任务',
    list: [
      {
        text: '未完成任务',
        value: 12
      },
      {
        text: '全部任务',
        value: 41
      },
      {
        text: '部门任务',
        value: 25
      }
    ]
  };
});

// 获取 `列表 - 标准列表` 数据
Mock.mock('/api/erek-list/standard', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 3,
      list: [
        {
          id: 1,
          username: '彭道宽',
          content: '那是一种内在的东西， 他们到达不了，也无法触及的',
          staffID: 6312,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 2,
          username: '朱晓武',
          content:
            '土地是以它的肥沃和收获而被估价的；才能也是土地，不过它生产的不是粮食，而是真理。',
          staffID: 5214,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '人力部'
        },
        {
          id: 3,
          username: '何惟禹',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 1412,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '技术部'
        },
        {
          id: 4,
          username: '符权',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 5212,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '编辑部'
        },
        {
          id: 5,
          username: '谢通',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 2512,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 6,
          username: '郑师枢',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 5421,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 7,
          username: '周书玄',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 5421,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        },
        {
          id: 8,
          username: '向尧',
          content:
            '这世界要是没有爱情，它在我们心中还会有什么意义！这就如一盏没有亮光的走马灯',
          staffID: 5421,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
          phone: '189****8869',
          department: '研发部'
        }
      ]
    }
  };
});

// 获取 `列表 - 卡片列表` 数据
Mock.mock('/api/erek-list/card', () => {
  return {
    code: 1,
    msg: '获取成功',
    data: {
      current: 1,
      size: 10,
      total: 3,
      list: [
        {
          id: 1,
          departName: '技术部',
          departDesc:
            '服务于企业级产品的设计体系，基于确定和自然的设计价值观上的模块化解决方案，让设计者和开发者专注于更好的用户体验.',
          departId: 1982,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 2,
          departName: '营运部',
          departDesc:
            '营运部作为一个综合职能部门，是对公司经营管理的全过程进行计划执行和控制。对公司的各个门店日常经营行为及业务、财务等运营流程和相互衔接执行具体的指导、协调和监督职能。在操作过程中，应做到指导有方、协调有度、监督有力.',
          departId: 62,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 3,
          departName: '编辑部',
          departDesc:
            '一般是负责报纸刊物的市场调研，选题开发，选题列选，选题报批，约稿，出版合同，审稿，成本开支估算，发稿，审读校样，签发付印样，审读样书，结算稿费等事务的部门。',
          departId: 521,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 4,
          departName: '市场部',
          departDesc:
            '市场部的工作主要目标是树立品牌，扩大品牌知名度、提升美誉度，给客户提供产品购买的理由和刺激。而销售部门的工作就是如何把产品送到客户面前，并成功的收回资金，实现商品的价值.',
          departId: 52,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 5,
          departName: '销售部',
          departDesc:
            '销售部是企业市场营销工作中满足市场需求的重要部门。企业在面对市场需求的时候，需要利用销售的手段满足市场的需求。但由于市场的需求方式、需求形态多种多样，也就造成了企业在销售行为的形式上、销售形态的管理上存在着不同的差异性。销售部门的成立与管理需要注意的是根据市场的形态制订相应的销售策略，而相应的策略达成也需要与之相匹配的管理形式才能实现。',
          departId: 42,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 6,
          departName: '审核部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 41,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 7,
          departName: '视频部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 421,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 8,
          departName: '人力资源部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 141,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        },
        {
          id: 9,
          departName: '研发部',
          departDesc:
            '审核是为获得审核证据并对其进行客观评价，以确定满足审核准则的程度所进行的系统的、独立的并形成文件的过程；审查是对某项事情、情况的核实、核查。',
          departId: 410,
          avatar:
            'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'
        }
      ]
    }
  };
});
