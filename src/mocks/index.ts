import { v4 } from "uuid";

type Carousel = { id: string; src: string; author: string }
export const carousels: Carousel[] = [
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/1/background.jpg', author: '谜肘' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/2/background.jpg', author: 'SamAshton' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/3/background.jpg', author: 'lolidrop' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/4/background.jpg', author: '吟子' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/5/background.jpg', author: 'SamAshton' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/6/background.jpg', author: '大咩宝' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/7/background.jpg', author: '谜肘' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/8/background.jpg', author: '谜肘' },
  { id: v4(), src: 'https://image-assets.mihuashi.com/misc/background/9/background.jpg', author: '薯子Imoko' },
]
type Slider = { id: string; thumbnailUrl: string; author: string }
export const sliders: Slider[] = [
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/1.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/2.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/3.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/4.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/5.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/6.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/7.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/8.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/9.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/10.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/11.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/12.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/13.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/14.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/15.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/16.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/17.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/18.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/19.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/20.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/22.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/23.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/24.jpg!carousel",
    "author": ""
  },
  {
    id: v4(),
    "thumbnailUrl": "https://image-assets.mihuashi.com/misc/carousel/25.jpg!carousel",
    "author": ""
  }
]

type Summary = { id: string; title: string; description: string; icon: string }
export const summarys: Summary[] = [
  {
    id: v4(),
    "title": "简单便捷的沟通",
    "description": "<p> 在线即时聊天，与画师一对一沟通 </p>,<p> 需求意向实时传达，提高合作效率 </p>",
    "icon": "https://image-assets.mihuashi.com/misc/home/mock/v1.png"
  },
  {
    id: v4(),
    "title": "轻松高效的管理",
    "description": "<p> 自定义稿件验收阶段和详细报表 </p>,<p> 轻松管理百位合作画师 </p>",
    "icon": "https://image-assets.mihuashi.com/misc/home/mock/v2.png"
  },
  {
    id: v4(),
    "title": "可信赖的加密服务",
    "description": "<p> 附件、企划、稿件均可加密 </p>,<p> 保证项目资料及信息不会泄露 </p>",
    "icon": "https://image-assets.mihuashi.com/misc/home/mock/v3.png"
  },
  {
    id: v4(),
    "title": "专业的企业服务",
    "description": "<p> 还在困扰财务/合同/发票？ </p>,<p> 专属商务经理将协助您解决！ </p>",
    "icon": "https://image-assets.mihuashi.com/misc/home/mock/v4.png"
  }
]

type Comment = { id: string; role: string; user: string; icon: string; description: string }
export const comments: Comment[] = [
  {
    id: v4(),
    "role": " 西山居 约稿负责人 ",
    "user": "3蓝诺3",
    "description": "<p> 页面设计很直观，画师风格鲜明，约稿面板的流程清晰约稿很方便，网站客服热心。 </p>,<p> 画师和企划方都可以有更多收益，体感很NICE，期待更多合作。 </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/5.png"
  },
  {
    id: v4(),
    "role": " 星辉天拓 约稿负责人 ",
    "user": "EARVA",
    "description": "<p> 画师众多，找画师也方便，基本上各种风格的画师都能在这里找到。 </p>,<p> 约稿流程清晰，有问题也能马上反馈，希望合作能越来越多，帮助项目越做越好！ </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/1.png"
  },
  {
    id: v4(),
    "role": " 网易 倩女幽魂项目组 ",
    "user": "网易（杭州）",
    "description": "<p> 专业的平台，优质的服务。画师资源十分丰富，风格多样。 </p>,<p> 约稿流程清晰明确，操作方便。期待以后有更深入的合作！ </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/2.png"
  },
  {
    id: v4(),
    "role": " 完美世界 梦间集研发组 ",
    "user": "OuYang",
    "description": "<p> 米画师平台画师质量有品控保障，使用方便还可在平台上“货比三家”，省去寻找画师的麻烦。 </p>,<p> 帮助企业简化外包的流程，并且完工速度快，助力项目提升开发效率。米画师平台已成为我们长期合作的优质供应商。 </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/3.png"
  },
  {
    id: v4(),
    "role": " 中手游 约稿负责人 ",
    "user": "终而复始",
    "description": "<p> 平台通过本身的专业能力，降低了合作项目与画师的沟通成本。 </p>,<p> 并且资源储备丰富，各种风格需求，都能够快速地找到合适画师，有效减少了绘制以外的沟通时间，非常赞！ </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/4.png"
  },
  {
    id: v4(),
    "role": " 香港网易互动娱乐 ",
    "user": "啊樹",
    "description": "<p> 米画师提供了一个对双方很好的平台，给双方提供了更多的利益，减少了企划方和画师之间的相互猜疑，可以更好更放心的去完成工作。目前我们正在密切合作中~ </p>",
    "icon": "https://image-assets.mihuashi.com/misc/logos/6.png"
  }
]
export const companysImage = `https://image-assets.mihuashi.com/misc/home/enterprise-logo.png!artwork.detail`

type Preview = { id: string; title: string; subtitle: string; icon: string; previewImageSrc: string }
export const previews: Preview[] = [
  {
    id: v4(),
    "title": "海量画师应征",
    "subtitle": "可获得数十位画师应征\n作品、信誉透明，供您全面评估\n轻松找到心仪画师",
    "icon": "https://image-assets.mihuashi.com/misc/homepage/i1.png!avatar.normal",
    previewImageSrc: 'https://image-assets.mihuashi.com/misc/homepage/p1.png'
  },
  {
    id: v4(),
    "title": "流畅合作管理",
    "subtitle": "轻松管理百位画师\n分段担保资金、分步审查稿件\n告别跑单、拖稿、失联",
    "icon": "https://image-assets.mihuashi.com/misc/homepage/i2.png!avatar.normal",
    previewImageSrc: 'https://image-assets.mihuashi.com/misc/homepage/p2.png'
  },
  {
    id: v4(),
    "title": "在线实时沟通",
    "subtitle": "随时随地反馈修改意见\n与合作画师一对一直接沟通\n共同创作优秀作品",
    "icon": "https://image-assets.mihuashi.com/misc/homepage/i3.png!avatar.normal",
    previewImageSrc: 'https://image-assets.mihuashi.com/misc/homepage/p3.png'
  }
]
