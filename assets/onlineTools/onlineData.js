const toolsData = [
  {
    title: '在线文档',
    key: 'doc',
    children: [
      // 云笔记
      {
        src: require('./onlineImages/ydy.png'),
        title: '有道云笔记',
        describe:
          '3G免费超大空间，支持文字/图片/语音/手写/OCR/Markdown等多种形式',
        address: 'http://note.youdao.com/',
      },
      {
        src: require('./onlineImages/yxbj.png'),
        title: '印象笔记',
        describe: '作为你的第二大脑,简化你的工作、学习与生活。',
        address: 'https://www.yinxiang.com/',
      },
      {
        src: require('./onlineImages/sm.png'),
        title: '石墨文档',
        describe:
          '全新一代云Office办公软件,多人协作，独有内容级安全,全过程留痕可追溯。',
        address: 'https://shimo.im/welcome',
      },
    ],
  },
  {
    title: '图片编辑',
    key: 'ps',
    children: [
      {
        src: require('./onlineImages/iloveimg.png'),
        title: 'iLoveimg',
        describe:
          '小白用户的最爱，汇聚了各种直观、简便、实用的图片处理工具，0基础就可以上手。',
        address: 'https://www.iloveimg.com/zh-cn',
      },
      {
        src: require('./onlineImages/fotojet.png'),
        title: 'FotoJet',
        describe:
          '丰富的模板及资源，强大的工具，上手简单，无需注册，可以用于设计图片，制作拼图，编辑照片',
        address: 'https://www.fotojet.com/cn/',
      },
      {
        src: require('./onlineImages/photopea.png'),
        title: 'Photopea',
        describe:
          '大神开发，在线PS设计软件,支持PSD、XD、SKETCH、XCF、RAW、及图片的所有格式',
        address: 'https://www.photopea.com/',
      },
    ],
  },
  {
    title: '压缩图片',
    key: 'tiny',
    children: [
      {
        src: require('./onlineImages/tiny-tiny.png'),
        title: 'tinypng',
        describe:
          '最优质png和jgp图片压缩工具，免费，智能有损压缩，压缩幅度大，压缩质量高。',
        address: 'https://tinypng.com/',
      },
      {
        src: require('./onlineImages/tiny-picdiet.png'),
        title: 'picdiet',
        describe:
          '压缩效果大于常规压缩软件，能压缩80%的图片大小，能时时对比压缩效果',
        address: 'https://www.picdiet.com/zh-cn',
      },
      {
        src: require('./onlineImages/tiny-scb.png'),
        title: '色彩笔',
        describe: '免费的在线图片压缩小工具,依赖专业算法,将图片大小优化到极限',
        address: 'http://www.secaibi.com/',
      },
    ],
  },
  {
    title: '文件处理',
    key: 'file',
    children: [
      {
        src: require('./onlineImages/file-pdf.png'),
        title: 'iLovePdf',
        describe: '完全免费、易于使用、丰富的PDF处理工具',
        address: 'https://www.ilovepdf.com/',
      },
      {
        src: require('./onlineImages/file-woodo.png'),
        title: '吾道',
        describe:
          '海量PPT模板免费下载，随时随地多人协同在线编辑，自动保存同步，手机管理文档，一键导出',
        address: 'https://www.woodo.cn/',
      },
      {
        src: require('./onlineImages/file-convertio.png'),
        title: 'Convertio文件转换',
        describe: '将您的文件转换成任意格式。',
        address: 'https://convertio.co/zh/',
      },
    ],
  },
  {
    title: '表单问卷',
    key: 'form',
    children: [
      {
        src: require('./onlineImages/form-tx.png'),
        title: '腾讯问卷',
        describe: '跨终端，跨平台，自适应，支持多种方式创建',
        address: 'https://wj.qq.com/',
      },
      {
        src: require('./onlineImages/form-wjw.png'),
        title: '问卷网',
        describe: '免费易用，支持问卷调研，报名表单，考试测评',
        address: 'https://www.wenjuan.com/',
      },
      {
        src: require('./onlineImages/form-wjx.png'),
        title: '问卷星',
        describe:
          '考试就用问卷星：支持所有科目考试题型，客观题可自动阅卷，主观题可批量阅卷',
        address: 'https://www.wjx.cn/',
      },
    ],
  },
  {
    title: '思维导图',
    key: 'mindmap',
    children: [
      // 思维导图
      {
        src: require('./onlineImages/bdnt.png'),
        title: '百度脑图',
        describe:
          '在线直接创建、保存并分享你的思路。免安装 云存储 易分享 体验舒适 功能丰富。',
        address: 'https://naotu.baidu.com/',
      },
      {
        src: require('./onlineImages/zhi.png'),
        title: 'ProcessOn',
        describe: '免费思维导图，比收费的还好用。',
        address: 'https://zhimap.com/',
      },
      {
        src: require('./onlineImages/process.png'),
        title: 'ProcessOn',
        describe: '支持流程图、思维导图、原型图、UML、网络拓扑图、组织结构图等',
        address: 'https://www.processon.com/',
      },
    ],
  },
  {
    title: '在线H5制作',
    key: 'h5',
    children: [
      {
        src: require('./onlineImages/h5-ih5.png'),
        title: 'iH5',
        describe: '专业的h5在线制作工具',
        address: 'https://www.ih5.cn/',
      },
      {
        src: require('./onlineImages/h5-xm.png'),
        title: '秀米',
        describe:
          '丰富的页面模板和页面组件，独有的长图文页面，让你制作不一样的H5',
        address: 'https://xiumi.us/',
      },
      {
        src: require('./onlineImages/h5-yqx.png'),
        title: '易企秀',
        describe:
          '老牌产品，海量模板。提供免费的H5微场景、海报、长图、表单、视频、互动游戏、建站、小程序等产品的制作工具及秀推智能营销平台',
        address: 'https://store.eqxiu.com/index/',
      },
    ],
  },
  {
    title: '数据统计',
    key: 'h5',
    children: [
      {
        src: require('./onlineImages/data-bd.png'),
        title: '百度统计',
        describe: '最大的中文网站分析平台，多维度数据分析，精确监控流量',
        address: 'https://tongji.baidu.com/web/welcome/login',
      },
      {
        src: require('./onlineImages/data-ym.png'),
        title: '友盟',
        describe: '国内领先的第三方全域数据智能服务商',
        address: 'https://www.umeng.com/',
      },
      {
        src: require('./onlineImages/data-tx.png'),
        title: '腾讯移动分析',
        describe: '专业的移动app数据统计平台，全面分析用户行为，助力于产品增长',
        address: 'https://mta.qq.com/',
      },
    ],
  },
];
export default toolsData;
