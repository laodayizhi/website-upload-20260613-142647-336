const MOVIES = [
  {
    "title": "金属摇篮曲",
    "url": "./movie-0001.html",
    "cover": "./1.jpg",
    "year": "2021",
    "region": "芬兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "音乐，剧情，喜剧",
    "tags": [
      "重金属",
      "育儿",
      "摇滚"
    ],
    "oneLine": "一个过气的重金属主唱，为了照顾患有自闭症的女儿，被迫学习唱世界上最美妙的摇篮曲。"
  },
  {
    "title": "截然相反的日子",
    "url": "./movie-0002.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情、奇幻",
    "tags": [
      "交换身体",
      "治愈",
      "人生感悟"
    ],
    "oneLine": "性格相反的孪生姐妹互换灵魂，体验对方截然不同的人生。"
  },
  {
    "title": "国史演义",
    "url": "./movie-0003.html",
    "cover": "./3.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "历史， 传记",
    "tags": [
      "口述历史",
      "人物传奇",
      "考据",
      "野史",
      "学者点评"
    ],
    "oneLine": "十二位被正史简笔带过的“小人物”，用文物与故纸堆拼凑出波澜壮阔的一生。"
  },
  {
    "title": "审判镇",
    "url": "./movie-0004.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑、惊悚",
    "tags": [
      "小镇疑云",
      "私刑",
      "全员恶人"
    ],
    "oneLine": "外来警长发现小镇的审判从未经过法院，每一次裁决都是一场带血的直播。"
  },
  {
    "title": "女神游戏室",
    "url": "./movie-0005.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑惊悚",
    "tags": [
      "直播",
      "游戏",
      "密室",
      "女性",
      "复仇"
    ],
    "oneLine": "六位网红被关进“女神游戏室”直播闯关，输的人会永远从互联网消失。"
  },
  {
    "title": "爱心熊宝宝",
    "url": "./movie-0006.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "加拿大",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "other",
    "genre": "儿童教育",
    "tags": [
      "毛绒熊",
      "情商启蒙",
      "友谊魔法"
    ],
    "oneLine": "在彩虹云端的关怀王国，五只爱心熊用肚皮徽章的光芒解决小朋友之间的真实烦恼。"
  },
  {
    "title": "风尘奇侠",
    "url": "./movie-0007.html",
    "cover": "./7.jpg",
    "year": "1936",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "西部 / 冒险",
    "tags": [
      "黑白西部片",
      "侠盗",
      "经典好莱坞"
    ],
    "oneLine": "一个浪荡牛仔冒充被处决的侠盗，却发现自己爱上了侠盗遗孀，而真正的侠盗其实没死。"
  },
  {
    "title": "瑶台仙韵",
    "url": "./movie-0008.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装, 仙侠, 音乐",
    "tags": [
      "音修",
      "仙界",
      "乐神",
      "古风"
    ],
    "oneLine": "凡间乐师意外唤醒上古瑶台仙韵谱，被卷入仙魔两道争夺“天地正音”的千年之战。"
  },
  {
    "title": "永不止息",
    "url": "./movie-0009.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "加拿大",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 传记, 运动",
    "tags": [
      "马拉松",
      "残障励志",
      "真实改编"
    ],
    "oneLine": "失去双腿的少年决定用手“跑”完马拉松全程，用臂膀丈量从绝望到希望的42195米。"
  },
  {
    "title": "美艳亲王",
    "url": "./movie-0010.html",
    "cover": "./10.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 爱情",
    "tags": [
      "卧底",
      "变装",
      "黑帮",
      "性别错位",
      "复仇"
    ],
    "oneLine": "为了接近贩毒集团首脑，一名硬汉警探假扮成失踪已久的“美艳亲王”混入上流社交圈。"
  },
  {
    "title": "受伤的马",
    "url": "./movie-0011.html",
    "cover": "./11.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情， 西部",
    "tags": [
      "创伤后遗症",
      "兄弟情",
      "救赎"
    ],
    "oneLine": "前牛仔竞技明星在一次意外中瘫痪，他让弟弟把一匹同样受伤的疯马运回家乡，这趟旅程成了兄弟俩的救赎之路。"
  },
  {
    "title": "高卢勇士之十二个任务",
    "url": "./movie-0012.html",
    "cover": "./12.jpg",
    "year": "1976",
    "region": "法国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "喜剧 / 冒险",
    "tags": [
      "高卢英雄",
      "经典动画",
      "搞笑",
      "任务"
    ],
    "oneLine": "高卢村的英雄阿斯特里克斯和奥贝里克斯接受凯撒的挑战，完成不可能完成的十二个任务。"
  },
  {
    "title": "花季美少女",
    "url": "./movie-0013.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情/青春/悬疑",
    "tags": [
      "校园霸凌",
      "复仇",
      "百合",
      "身份互换"
    ],
    "oneLine": "安静内向的女高中生，在校园里最大的“美少女团体”中，发现所有成员都是冒名顶替上一代学姐的“赝品”。"
  },
  {
    "title": "书中奇缘",
    "url": "./movie-0014.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻爱情",
    "tags": [
      "穿越",
      "古籍",
      "书店",
      "甜蜜",
      "治愈"
    ],
    "oneLine": "失意编辑翻开一本会自己写故事的旧书，竟成了书中女主角的跨时空恋人。"
  },
  {
    "title": "四大名捕重出江湖",
    "url": "./movie-0015.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国大陆 / 中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "武侠 / 悬疑 / 动作",
    "tags": [
      "超级英雄化",
      "暗黑武侠",
      "经典翻拍"
    ],
    "oneLine": "诸葛正我死后第十年，京城陷入魔幻科技危机，无情、铁手、追命、冷血被迫重组，却发现彼此已成仇人。"
  },
  {
    "title": "侣行第三季",
    "url": "./movie-0016.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺 / 纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "真人秀、旅行、冒险",
    "tags": [
      "夫妻旅行",
      "极限环境",
      "战地纪实",
      "环球探险"
    ],
    "oneLine": "一对夫妻穿越战火中的中东，在废墟里捡到一张写满未知坐标的旧地图。"
  },
  {
    "title": "天国之门",
    "url": "./movie-0017.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国 / 德国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "奇幻 / 冒险",
    "tags": [
      "天堂入侵",
      "神学",
      "枪战",
      "反英雄",
      "宏大叙事"
    ],
    "oneLine": "天堂之门向人间敞开，但降下的不是天使，而是无差别杀戮的光束。"
  },
  {
    "title": "伊娃妮要出嫁",
    "url": "./movie-0018.html",
    "cover": "./18.jpg",
    "year": "2020",
    "region": "尼日利亚, 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 爱情, 剧情",
    "tags": [
      "非洲婚礼",
      "彩礼大战",
      "家族秘密",
      "新娘逃跑"
    ],
    "oneLine": "婚礼前三小时，新娘伊娃妮收到一条匿名短信：“你的未婚夫是你母亲失踪前的学生。”"
  },
  {
    "title": "你们这些混蛋",
    "url": "./movie-0019.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "黑色喜剧",
    "tags": [
      "英式幽默",
      "骂人",
      "职场",
      "荒诞",
      "复仇"
    ],
    "oneLine": "一个被职场霸凌的老好人，发明了一款能远程控制别人说出真心话（且全是脏话）的APP，公司炸了。"
  },
  {
    "title": "安娜的爱人",
    "url": "./movie-0020.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 爱情",
    "tags": [
      "替身",
      "双面人生",
      "都市悬疑"
    ],
    "oneLine": "婚礼当天，新娘安娜收到丈夫坠崖的消息，三年后却发现他换了身份活在自己身边。"
  },
  {
    "title": "生活的城市",
    "url": "./movie-0021.html",
    "cover": "./21.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 文艺",
    "tags": [
      "孤独",
      "巴黎",
      "群像"
    ],
    "oneLine": "在巴黎的同一栋公寓里，四位邻居因为一封送错的遗书，被迫走进了彼此孤寂的生活。"
  },
  {
    "title": "追踪者",
    "url": "./movie-0022.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "动作，刑侦，犯罪",
    "tags": [
      "以暴制暴",
      "私刑者",
      "连环杀手",
      "底层复仇",
      "追逐战"
    ],
    "oneLine": "他曾经是最优秀的刑警，现在他是罪犯眼中的“恶鬼”——只追踪那些法律无法定罪的完美罪犯。"
  },
  {
    "title": "无枷无主",
    "url": "./movie-0023.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 社会",
    "tags": [
      "种姓制度",
      "觉醒",
      "反抗",
      "公路"
    ],
    "oneLine": "一个低种姓青年和一个高种姓少女，在逃亡路上共同砸碎了无形的枷锁。"
  },
  {
    "title": "兰花香",
    "url": "./movie-0024.html",
    "cover": "./24.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭, 伦理",
    "tags": [
      "民国",
      "姨娘",
      "宅斗",
      "身世之谜"
    ],
    "oneLine": "一盆神秘的兰花牵扯出两代人的身世秘密，柔弱姨娘如何在乱世家宅中逆袭。"
  },
  {
    "title": "醒醒吧之大师",
    "url": "./movie-0025.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动作, 奇幻",
    "tags": [
      "港式无厘头",
      "假大师",
      "真功夫",
      "讽刺"
    ],
    "oneLine": "一个江湖骗子被雷劈后真有了超能力，但每次使用都必须先把自己打晕。"
  },
  {
    "title": "心灵迷雾",
    "url": "./movie-0026.html",
    "cover": "./26.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑，科幻",
    "tags": [
      "脑机接口",
      "记忆盗窃",
      "刑侦"
    ],
    "oneLine": "刑警队长使用能读取记忆的新技术破案，却发现自己的记忆被凶手植入了虚假的杀人片段。"
  },
  {
    "title": "又见白娘子",
    "url": "./movie-0027.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻爱情",
    "tags": [
      "前世今生",
      "都市传说",
      "救赎"
    ],
    "oneLine": "千年后，许宣转世为西湖民宿老板，却等来了一位失忆且性转的“白娘子”。"
  },
  {
    "title": "新蝶恋花",
    "url": "./movie-0028.html",
    "cover": "./28.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 奇幻",
    "tags": [
      "梁祝",
      "现代改编",
      "蝴蝶"
    ],
    "oneLine": "梁山伯与祝英台转世到现代上海，却发现这一世的祝英台将要和别人结婚。"
  },
  {
    "title": "复仇之谜",
    "url": "./movie-0029.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑, 犯罪",
    "tags": [
      "本格推理",
      "家族恩怨",
      "密室"
    ],
    "oneLine": "庄园晚宴上富翁被毒杀，七个继承人在暴风雪夜接连离奇死亡。"
  },
  {
    "title": "第五名乘客",
    "url": "./movie-0030.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 惊悚",
    "tags": [
      "太空",
      "外星生物",
      "密闭空间",
      "寄生",
      "猜疑链"
    ],
    "oneLine": "星际飞船返回地球途中，生命探测仪显示5人，但船员明明只有4个。"
  },
  {
    "title": "初音岛",
    "url": "./movie-0031.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画 / 剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻 / 青春 / 悬疑",
    "tags": [
      "虚拟偶像",
      "意识上传",
      "校园"
    ],
    "oneLine": "全息投影的虚拟歌姬“初音”突然拥有了自主意识，并选择在一所即将废弃的中学里，举办最后一场永不结束的演唱会。"
  },
  {
    "title": "新荡妇卡门",
    "url": "./movie-0032.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 情色 / 犯罪",
    "tags": [
      "女性",
      "自由",
      "悲剧",
      "现代改编"
    ],
    "oneLine": "一个游走于黑帮、警察与富豪之间的女人，用身体作武器，追寻终极自由。"
  },
  {
    "title": "黑夜追击",
    "url": "./movie-0033.html",
    "cover": "./33.jpg",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作, 犯罪, 惊悚",
    "tags": [
      "飙车",
      "狼人",
      "暗黑",
      "硬核"
    ],
    "oneLine": "巴黎最厉害的运毒车手有一个秘密：月圆之夜他会失控变成怪物，而今晚不仅有警察追他，还有猎人要杀他。"
  },
  {
    "title": "一切全包",
    "url": "./movie-0034.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "西班牙 / 英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚、悬疑、讽刺",
    "tags": [
      "度假村",
      "暗网",
      "克隆人",
      "黑色幽默",
      "阶级"
    ],
    "oneLine": "一对中产夫妇抢到了“一切全包”的顶级海岛游，却发现这个度假村的真实服务是：杀掉你，然后卖给富人一个更听话的克隆版你。"
  },
  {
    "title": "我的23岁美女邻居",
    "url": "./movie-0035.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 喜剧 / 甜宠",
    "tags": [
      "姐弟恋",
      "合租误会",
      "游戏设计",
      "轻悬疑",
      "短剧爆款"
    ],
    "oneLine": "游戏设计师男主发现，隔壁女邻居长得像他逝去的前女友，且从未开门。"
  },
  {
    "title": "神女杂货铺",
    "url": "./movie-0036.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻, 剧情, 女性",
    "tags": [
      "治愈",
      "单元剧",
      "都市传说",
      "神秘商店",
      "因果"
    ],
    "oneLine": "一家只在子夜开门的神秘杂货铺，出售的商品能帮你交换人生中最想丢弃的东西。"
  },
  {
    "title": "太空异旅",
    "url": "./movie-0037.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 恐怖",
    "tags": [
      "深空",
      "未知生物",
      "船员失踪",
      "克隆",
      "心理恐惧"
    ],
    "oneLine": "一艘星际殖民船的船员逐个失踪，监控显示他们走进了同一个不存在的舱门。"
  },
  {
    "title": "霹雳先锋粤语",
    "url": "./movie-0038.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪",
    "tags": [
      "警匪",
      "兄弟情",
      "粤语"
    ],
    "oneLine": "他是最狠的黑道打手，也是警队最深的卧底。"
  },
  {
    "title": "大饿",
    "url": "./movie-0039.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画短片集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "科幻、悬疑、惊悚",
    "tags": [
      "反乌托邦",
      "食欲",
      "生存",
      "黑色幽默"
    ],
    "oneLine": "未来世界，饥饿被定为重罪，一群“饿鬼”在地底密谋推翻美食极权。"
  },
  {
    "title": "破晓",
    "url": "./movie-0040.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "战争, 历史, 剧情",
    "tags": [
      "抗日战争",
      "最后一战",
      "黎明之前",
      "小人物群像",
      "家国情怀"
    ],
    "oneLine": "1945年日本投降前夕，一座无名小城的军民为等来“破晓”，用血肉挡住了敌军的最后反扑。"
  },
  {
    "title": "冰岛出任务",
    "url": "./movie-0041.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险喜剧",
    "tags": [
      "极地求生",
      "乌龙绑架",
      "公司团建",
      "公路片"
    ],
    "oneLine": "一家互联网公司的“废物”员工们被丢到冰岛参加极地团建，却阴差阳错搅黄了一场国际黑市交易，被顶级杀手追杀。"
  },
  {
    "title": "曼谷极限",
    "url": "./movie-0042.html",
    "cover": "./42.jpg",
    "year": "2017",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "泰拳",
      "卧底",
      "毒品",
      "街头暴力",
      "硬核动作"
    ],
    "oneLine": "一名瘫痪的前泰拳冠军被迫为毒枭安装通讯装置，却成了警方和黑帮的共同目标。"
  },
  {
    "title": "地下水道",
    "url": "./movie-0043.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "灾难",
    "tags": [
      "环保",
      "恐怖",
      "怪物",
      "下水道",
      "社会隐喻"
    ],
    "oneLine": "巴黎暴雨后，下水道里冲出了成群的变异盲鳗，它们不吃肉，只吞噬人类的塑料记忆。"
  },
  {
    "title": "最终生还者",
    "url": "./movie-0044.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 恐怖 / 生存",
    "tags": [
      "末世",
      "克隆人伦理",
      "孤独恐惧"
    ],
    "oneLine": "一场瘟疫后地球上只剩他一人，十年后他发现了另一个“人”——一个和他一模一样的克隆体。"
  },
  {
    "title": "这个世界温柔的冷漠",
    "url": "./movie-0045.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情哲学",
    "tags": [
      "存在主义",
      "阿尔贝·加缪",
      "现代改编",
      "疏离",
      "女性视角"
    ],
    "oneLine": "当代巴黎，一个患情感淡漠症的女性意外卷入杀人案，所有人都在逼她“像个正常人一样哭”。"
  },
  {
    "title": "去阿布贾的最后航班",
    "url": "./movie-0046.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "尼日利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚 / 灾难 / 犯罪",
    "tags": [
      "航空劫持",
      "尼日利亚",
      "密闭空间",
      "时间倒数"
    ],
    "oneLine": "一趟从拉各斯飞往阿布贾的国内航班上，一名空警发现：飞机上有三个互不认识的人，都声称自己带了炸弹。"
  },
  {
    "title": "女孩的钓鱼慢活",
    "url": "./movie-0047.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "治愈生活",
    "tags": [
      "钓鱼",
      "慢节奏",
      "美食",
      "疗愈",
      "日常"
    ],
    "oneLine": "一个东京的抑郁症女孩被送到乡下姑姑家，在海边钓鱼的慢生活里，她重新学会了呼吸。"
  },
  {
    "title": "索命厨师",
    "url": "./movie-0048.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖，惊悚",
    "tags": [
      "复仇",
      "美食",
      "邪典"
    ],
    "oneLine": "一位米其林大厨的客人相继离奇死亡，每一道菜都暗藏杀机。"
  },
  {
    "title": "无间道第三季",
    "url": "./movie-0049.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 犯罪 / 悬疑",
    "tags": [
      "卧底",
      "终极篇",
      "宿命"
    ],
    "oneLine": "新一代卧底潜入新崛起的金融黑帮，却发现黑帮老大的智囊正是上一代失踪的卧底传奇。"
  },
  {
    "title": "破坏者号：代号莫里图里",
    "url": "./movie-0050.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 科幻, 战争",
    "tags": [
      "机甲",
      "外星入侵",
      "末日",
      "硬核"
    ],
    "oneLine": "外星母舰降临，地球联军溃败，只有一艘被抛弃的废旧机甲“破坏者号”和它的疯子船员决定反击。"
  },
  {
    "title": "夺命保险金",
    "url": "./movie-0051.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 剧情",
    "tags": [
      "骗保",
      "道德困境",
      "夫妻",
      "反转"
    ],
    "oneLine": "绝望主妇为救绝症女儿制造意外身亡骗保，但保险公司派来的调查员是她初恋。"
  },
  {
    "title": "蚂蚁雄兵",
    "url": "./movie-0052.html",
    "cover": "./52.jpg",
    "year": "1954",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "冒险 / 灾难",
    "tags": [
      "动物灾难",
      "丛林",
      "经典",
      "求生"
    ],
    "oneLine": "亚马逊丛林深处，一群贪婪的殖民者与传教士遭遇了数以百万计的“行军蚁”军团。"
  },
  {
    "title": "牢狱大暴动",
    "url": "./movie-0053.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 惊悚, 犯罪",
    "tags": [
      "监狱",
      "暴动",
      "单镜头",
      "实时",
      "生存"
    ],
    "oneLine": "一场毫无征兆的监狱全面暴动，一名被冤枉的菜鸟狱警必须在24小时内活着走出人间炼狱。"
  },
  {
    "title": "东哥闯东北",
    "url": "./movie-0054.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作/喜剧",
    "tags": [
      "东北",
      "黑土地",
      "硬汉"
    ],
    "oneLine": "南方富二代为追回被骗的资金，深入东北农村，学会了搓苞米和用大碴子话打架。"
  },
  {
    "title": "以色列总统的结语",
    "url": "./movie-0055.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "以色列",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "传记 / 政治",
    "tags": [
      "历史回顾",
      "政治演讲",
      "人性抉择"
    ],
    "oneLine": "一位即将卸任的以色列总统在最后一场国葬演讲中，揭露了自己年轻时作为情报人员的黑暗秘密。"
  },
  {
    "title": "解忧公主",
    "url": "./movie-0056.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装、历史、传奇",
    "tags": [
      "汉朝",
      "和亲",
      "政治博弈",
      "女性成长"
    ],
    "oneLine": "罪臣之女刘解忧被迫远嫁乌孙，在三国夹缝中用智慧守护汉朝五十年。"
  },
  {
    "title": "年龄差婚姻",
    "url": "./movie-0057.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情、家庭、轻喜剧",
    "tags": [
      "老少恋",
      "重组家庭",
      "代际冲突"
    ],
    "oneLine": "20岁女大学生嫁给了40岁离异社长，本以为跨越的是年龄，没想到跨过的是整个时代。"
  },
  {
    "title": "宝贝老板：抓宝行动",
    "url": "./movie-0058.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画 / 冒险",
    "tags": [
      "家庭",
      "宝可梦梗",
      "特工宝宝",
      "恶搞"
    ],
    "oneLine": "宝贝老板接到新任务：全球的宠物小精灵突然开始说人话并罢工，幕后黑手竟是过气的前任宝贝老板。"
  },
  {
    "title": "彩虹失窃事件",
    "url": "./movie-0059.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻, 家庭",
    "tags": [
      "童真",
      "冒险",
      "色彩"
    ],
    "oneLine": "七岁女孩发现小镇所有颜色正在一天天褪去，她必须在天堂与人间之间找回被偷走的彩虹。"
  },
  {
    "title": "血腥修道院",
    "url": "./movie-0060.html",
    "cover": "./60.jpg",
    "year": "2027",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖",
    "tags": [
      "克苏鲁",
      "修女",
      "古抄本",
      "触手",
      "宗教"
    ],
    "oneLine": "梵蒂冈派一位无神论法医去调查偏僻修道院的怪死事件，她发现修女们跪拜的不是上帝，而是地底的“肉花”。"
  },
  {
    "title": "镜像世界",
    "url": "./movie-0061.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "美国 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 悬疑 / 心理",
    "tags": [
      "平行宇宙",
      "复制人",
      "自我认知",
      "量子",
      "烧脑"
    ],
    "oneLine": "物理学家发现镜子里的自己会在午夜“走出来”，而每一个都想杀死原主取而代之。"
  },
  {
    "title": "柯罗内的故事",
    "url": "./movie-0062.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史",
    "tags": [
      "黑手党",
      "家族史诗",
      "西西里",
      "人性挣扎"
    ],
    "oneLine": "黑手党老大的孙子逃离家族后，用口述史揭开三代人的血债与救赎。"
  },
  {
    "title": "骑著快马",
    "url": "./movie-0063.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "西部，剧情",
    "tags": [
      "邮递",
      "救赎",
      "孤独",
      "风景"
    ],
    "oneLine": "19世纪最后一位Pony Express骑手，必须穿越被大雪覆盖的落基山脉，送出一封能拯救仇人性命的信。"
  },
  {
    "title": "乐极生悲",
    "url": "./movie-0064.html",
    "cover": "./64.jpg",
    "year": "2022",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "彩票",
      "绑架",
      "小人物"
    ],
    "oneLine": "一个老好人中了五百万彩票的同一晚，他的废柴邻居们恰好策划了一场失败的绑架。"
  },
  {
    "title": "婚前经验",
    "url": "./movie-0065.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "喜剧 / 爱情",
    "tags": [
      "试婚",
      "契约恋爱",
      "同居",
      "前任"
    ],
    "oneLine": "为了继承巨额遗产，一对陌生人必须带着各自奇葩的前任，在同一屋檐下完成一个月的“婚前实习”。"
  },
  {
    "title": "特警神龙",
    "url": "./movie-0066.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作",
    "tags": [
      "特警",
      "卧底",
      "黑帮",
      "兄弟情"
    ],
    "oneLine": "飞虎队精英假扮成餐厅服务员潜入黑帮寿宴，却发现全香港最危险的杀手也穿着同款围裙。"
  },
  {
    "title": "第三人称复仇",
    "url": "./movie-0067.html",
    "cover": "./67.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "校园霸凌",
      "替身",
      "反转",
      "高智商",
      "复仇"
    ],
    "oneLine": "转学生为查清姐姐自杀真相，却发现每个人都在用别人的身份活着。"
  },
  {
    "title": "宿敌 第一季",
    "url": "./movie-0068.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": [
      "双雄",
      "间谍",
      "冷战",
      "背叛",
      "高智商"
    ],
    "oneLine": "退休的CIA测谎专家被克格勃王牌绑架，两人被困在地下掩体，唯一的游戏是“互诉真话”。"
  },
  {
    "title": "温德斯：狂野旅程",
    "url": "./movie-0069.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录片、传记、公路",
    "tags": [
      "温德斯",
      "公路电影",
      "导演传记",
      "创作幕后"
    ],
    "oneLine": "纪录片团队跟随85岁的维姆·温德斯，完成了他年轻时未拍完的最后一部公路电影。"
  },
  {
    "title": "顾少的失忆甜妻",
    "url": "./movie-0070.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情、剧情、都市",
    "tags": [
      "豪门恩怨",
      "带球跑",
      "替身文学",
      "追妻火葬场"
    ],
    "oneLine": "替身妻子车祸失忆后，冷酷总裁发现，原来自己才是那个被利用的替身。"
  },
  {
    "title": "进击吧，少女！",
    "url": "./movie-0071.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 运动 / 青春",
    "tags": [
      "国剧",
      "排球",
      "热血",
      "青春",
      "成长"
    ],
    "oneLine": "身高只有一米六的少女立志要进国家队，所有人都说她疯了，直到她遇到了一个同样被退队的疯子教练。"
  },
  {
    "title": "七月的约会",
    "url": "./movie-0072.html",
    "cover": "./72.jpg",
    "year": "1949",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情, 剧情",
    "tags": [
      "战后",
      "巴黎",
      "戏剧",
      "邂逅"
    ],
    "oneLine": "二战后第一个七月，巴黎解放五周年，一个即将结婚的士兵在街头偶遇了战时的恋人，在狂欢中面临抉择。"
  },
  {
    "title": "情天未了缘",
    "url": "./movie-0073.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情， 奇幻",
    "tags": [
      "轮回",
      "错过",
      "海难",
      "纯爱"
    ],
    "oneLine": "灯塔看守人在台风天救起一位失忆女子，发现她胸前纹着的号码，正是七十年前沉船上自己情书的编号。"
  },
  {
    "title": "长夜漫漫",
    "url": "./movie-0074.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 家庭, 悬疑",
    "tags": [
      "失忆",
      "家族秘密",
      "雨夜",
      "心理惊悚"
    ],
    "oneLine": "一场车祸让母亲忘记了所有家人，女儿在照顾她的漫漫长夜中，挖出了二十年前的弑父真相。"
  },
  {
    "title": "银河决斗",
    "url": "./movie-0075.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 动作 / 冒险",
    "tags": [
      "太空歌剧",
      "机甲",
      "硬核科幻",
      "星际战争",
      "特效大片"
    ],
    "oneLine": "在最靠近黑洞的贫瘠星球上，一老一少两位机甲驾驶员，为了银河系的能源命脉背水一战。"
  },
  {
    "title": "孽爱伤痕",
    "url": "./movie-0076.html",
    "cover": "./76.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 剧情 / 悬疑",
    "tags": [
      "畸恋",
      "家暴",
      "记忆反转",
      "悬疑爱情"
    ],
    "oneLine": "婚后频繁遭到家暴的妻子，某天发现丈夫手臂上有一道和自己身上一模一样的旧伤痕，但他从未解释过来源。"
  },
  {
    "title": "少女十五十六时",
    "url": "./movie-0077.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "青春 / 成长 / 家庭",
    "tags": [
      "校园霸凌",
      "母女和解",
      "月经羞耻",
      "台式清新"
    ],
    "oneLine": "1999年的夏天，少女第一次来月经，妈妈的第一反应是塞给她一包卫生纸和一句“不要告诉别人”。"
  },
  {
    "title": "谋杀犯",
    "url": "./movie-0078.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪, 惊悚, 剧情",
    "tags": [
      "法律漏洞",
      "完美犯罪",
      "替罪羊",
      "反转"
    ],
    "oneLine": "一个自首的谋杀犯在法庭上完美复刻了整个过程，但他所描述的受害者，至今还活得好好的。"
  },
  {
    "title": "暴风少年之纽约教父",
    "url": "./movie-0079.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "中国香港 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 犯罪",
    "tags": [
      "黑帮",
      "街头",
      "复仇",
      "港式枪战"
    ],
    "oneLine": "流落纽约街头的香港少年，为了救出妹妹，不得不认仇人做“教父”。"
  },
  {
    "title": "我随时都可以离开",
    "url": "./movie-0080.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "学术诈骗",
      "毒师高仿",
      "化学系教授",
      "搞笑制毒",
      "象牙塔堕落"
    ],
    "oneLine": "三个失业的化学博士决定合成市面上最高纯度的摇头丸，却发现最大的障碍不是警察，是税务局。"
  },
  {
    "title": "王子与贫儿",
    "url": "./movie-0081.html",
    "cover": "./81.jpg",
    "year": "2022",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史 / 剧情 / 冒险",
    "tags": [
      "马克吐温",
      "身份互换",
      "都铎王朝",
      "阶级",
      "成长"
    ],
    "oneLine": "都铎王朝时期，长相一模一样的王子与流浪儿互换身份，各自闯入一个全然陌生的世界。"
  },
  {
    "title": "勇破黑社会",
    "url": "./movie-0082.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "警匪，动作",
    "tags": [
      "卧底",
      "家族",
      "背叛"
    ],
    "oneLine": "警校最差生被派往黑帮家族做卧底，却意外被老大指定为接班人，而真正的继承人在暗中盯着他。"
  },
  {
    "title": "恐怖人生",
    "url": "./movie-0083.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 剧情",
    "tags": [
      "心理恐怖",
      "都市传说",
      "因果报应"
    ],
    "oneLine": "一个靠偷拍他人隐私为生的无良记者，发现自己正在逐步变成镜头里那些受害者的模样。"
  },
  {
    "title": "深海越狱",
    "url": "./movie-0084.html",
    "cover": "./84.jpg",
    "year": "2018",
    "region": "美国 / 加拿大",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 惊悚",
    "tags": [
      "潜艇",
      "越狱",
      "CIA",
      "密室搏斗"
    ],
    "oneLine": "一名中情局顶级特工被陷害关押在潜艇监狱，他必须与同样被困的对手联手，在一小时内阻止潜艇发射核弹。"
  },
  {
    "title": "青龙剑",
    "url": "./movie-0085.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 武侠 / 悬疑",
    "tags": [
      "古装",
      "寻剑",
      "江湖",
      "复仇",
      "剑术"
    ],
    "oneLine": "一把传说中的青龙剑重现江湖，引来各方争夺，但剑身上刻着一行血字密码。"
  },
  {
    "title": "漂流拯救队",
    "url": "./movie-0086.html",
    "cover": "./86.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "冒险 / 奇幻",
    "tags": [
      "孤岛求生",
      "友情",
      "治愈"
    ],
    "oneLine": "三个不同年级的小学生在无人岛结盟，用童心和智慧对抗自然与猜忌。"
  },
  {
    "title": "马桶妖怪2",
    "url": "./movie-0087.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖，喜剧，奇幻",
    "tags": [
      "邪典回归",
      "卫生间惊魂",
      "黑色幽默",
      "变异生物"
    ],
    "oneLine": "上一集被冲走的怪物们从城市下水道反扑，这次它们学会了用社交媒体召唤更多同类。"
  },
  {
    "title": "老爸102岁",
    "url": "./movie-0088.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 喜剧, 家庭",
    "tags": [
      "亲情",
      "返老还童",
      "生死观",
      "催泪"
    ],
    "oneLine": "102岁的老爸要把75岁的儿子送去养老院，理由是：你的暮气太重，传染了我的青春。"
  },
  {
    "title": "猎狐行动",
    "url": "./movie-0089.html",
    "cover": "./89.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "刑侦经侦",
    "tags": [
      "跨国追逃",
      "经济犯罪",
      "反腐",
      "智商对决",
      "真实改编"
    ],
    "oneLine": "经侦警察追捕外逃巨骗横跨三大洲，却发现对方每一步都在引导自己揭开更大的保护伞。"
  },
  {
    "title": "剑侠唐璜",
    "url": "./movie-0090.html",
    "cover": "./90.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 武侠 / 喜剧",
    "tags": [
      "侠盗",
      "风流浪子",
      "江湖",
      "搞笑"
    ],
    "oneLine": "江湖第一采花大盗唐璜，竟是个只劫财不劫色的正义侠客。"
  },
  {
    "title": "白色横幅",
    "url": "./movie-0091.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "校园 / 励志 / 社会",
    "tags": [
      "社团活动",
      "演讲辩论",
      "学生运动",
      "青春热血",
      "反对不公"
    ],
    "oneLine": "县立高中因为经费不足要废校，五个懒散的学生在旧仓库找到一条二十年前的白色横幅，上面写着：“绝不低头”。"
  },
  {
    "title": "最好的相遇",
    "url": "./movie-0092.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "重逢",
      "童年",
      "故乡",
      "时间胶囊",
      "和解"
    ],
    "oneLine": "儿时最好的玩伴因一场误会决裂，二十年后在故乡拆迁的前一晚偶然重逢。"
  },
  {
    "title": "献给天堂的比赛",
    "url": "./movie-0093.html",
    "cover": "./93.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 运动",
    "tags": [
      "足球",
      "贫民窟",
      "梦想",
      "兄弟情",
      "悲剧"
    ],
    "oneLine": "一对天赋异禀的足球兄弟被球探同时相中，但只有一个人能去欧洲，留下的那个选择了用死亡成全对方。"
  },
  {
    "title": "男人帮",
    "url": "./movie-0094.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "都市 / 喜剧 / 群像",
    "tags": [
      "兄弟情",
      "中年危机",
      "幽默讽刺",
      "都市生活"
    ],
    "oneLine": "三个从大学时代就厮混在一起的铁哥们，在四十岁那年相继失业、失婚、失控，决定合伙开一家专坑有钱人的“破局公司”。"
  },
  {
    "title": "动态漫画·战鼎第三季",
    "url": "./movie-0095.html",
    "cover": "./95.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "动态漫画",
    "typeGroup": "other",
    "regionGroup": "mainland",
    "genre": "玄幻, 热血, 冒险",
    "tags": [
      "动态漫画",
      "修仙",
      "逆袭",
      "战鼎"
    ],
    "oneLine": "身怀绝世战鼎的少年洛尘，在魔道围攻中突破封印，然而解封的代价是让他最在意的人陷入永眠。"
  },
  {
    "title": "侠医粤语",
    "url": "./movie-0096.html",
    "cover": "./96.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情、动作、医学",
    "tags": [
      "黑帮",
      "诊所",
      "江湖恩怨",
      "仁心仁术",
      "卧底"
    ],
    "oneLine": "退隐江湖的前黑道金牌打手，如今在深水埗开诊所，用针灸治伤，也治“人心”。"
  },
  {
    "title": "黎巴嫩",
    "url": "./movie-0097.html",
    "cover": "./97.jpg",
    "year": "2009",
    "region": "以色列/法国/德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争, 剧情, 历史",
    "tags": [
      "坦克",
      "第一视角",
      "贝鲁特"
    ],
    "oneLine": "1982年黎巴嫩战争，一辆坦克、四名士兵、一个瞄准镜里的破碎世界。"
  },
  {
    "title": "好想去你的世界爱你",
    "url": "./movie-0098.html",
    "cover": "./98.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 爱情, 奇幻",
    "tags": [
      "通感",
      "异地恋",
      "脑电波连接"
    ],
    "oneLine": "因一次意外，身处北京的建筑师助理与在德国的留学生建立了神奇的通感连接，被迫共享感官与情绪。"
  },
  {
    "title": "为什么是韩国",
    "url": "./movie-0099.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 悬疑",
    "tags": [
      "身份认同",
      "地缘政治",
      "黑色幽默",
      "双面人生"
    ],
    "oneLine": "一名脱北者成为韩国精英后，被迫回头绑架自己在朝鲜的孪生兄弟以保住假身份。"
  },
  {
    "title": "友情以上",
    "url": "./movie-0100.html",
    "cover": "./100.jpg",
    "year": "2019",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧, 爱情",
    "tags": [
      "暧昧",
      "备胎",
      "十年相伴",
      "机场追爱"
    ],
    "oneLine": "当了十年“备胎”的潘，在女神新恋情破灭后，终于决定在情人节当天摊牌。"
  },
  {
    "title": "狐狸禁猎期",
    "url": "./movie-0101.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚， 剧情",
    "tags": [
      "乡村",
      "阶级冲突",
      "复仇",
      "狩猎"
    ],
    "oneLine": "一年一度的猎狐季开始前，村里六只被贵族猎杀的狐狸“复活”了，开口说人话，点名要见法官。"
  },
  {
    "title": "功夫热粤语",
    "url": "./movie-0102.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作喜剧",
    "tags": [
      "市井功夫",
      "港味",
      "师徒传承"
    ],
    "oneLine": "一个只会“三脚猫功夫”的茶餐厅伙计，意外收了三个外国交换生为徒，用奶茶和叉烧教他们做人道理。"
  },
  {
    "title": "玩家俱乐部",
    "url": "./movie-0103.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑， 科幻， 冒险",
    "tags": [
      "虚拟现实",
      "密室逃脱",
      "高智商博弈",
      "阴谋"
    ],
    "oneLine": "一家神秘的俱乐部，只要通过挑战就能获得一千万，但输掉的人会从现实中消失。"
  },
  {
    "title": "冰淇淋",
    "url": "./movie-0104.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 爱情, 美食",
    "tags": [
      "夏日",
      "初恋",
      "小镇",
      "治愈",
      "意式风情"
    ],
    "oneLine": "一个快倒闭的百年冰淇淋店，被一位来自那不勒斯的数学系女大学生用公式救活了。"
  },
  {
    "title": "飞翔的荷兰人",
    "url": "./movie-0105.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "荷兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "奇幻 / 冒险",
    "tags": [
      "幽灵船",
      "诅咒",
      "航海",
      "家族秘密",
      "救赎"
    ],
    "oneLine": "渔民后代意外登上传说中的幽灵船，却发现“诅咒”是一场持续400年的精密骗局。"
  },
  {
    "title": "魔女潜舰",
    "url": "./movie-0106.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "科幻 / 战争 / 动作",
    "tags": [
      "二战",
      "黑科技潜艇",
      "超能力少女",
      "时空穿越"
    ],
    "oneLine": "二战末期，一艘装备未知动力系统的日军潜艇上，关押着一个能用意念摧毁舰队的少女。"
  },
  {
    "title": "自然盛宴",
    "url": "./movie-0107.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "中国大陆/法国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "纪录/自然",
    "tags": [
      "美食",
      "生态",
      "视觉盛宴",
      "人与自然"
    ],
    "oneLine": "摄制组历时五年，横跨六大洲，记录了自然界中动植物为了“吃”这一本能，上演的一场场惊心动魄的盛宴。"
  },
  {
    "title": "混沌理论",
    "url": "./movie-0108.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情、悬疑",
    "tags": [
      "蝴蝶效应",
      "婚姻",
      "伦理",
      "时间",
      "心理"
    ],
    "oneLine": "数学家发现妻子的外遇对象是自己十年前帮助过的一个流浪汉，而那个流浪汉的崛起，全因他随手给了一张钞票。"
  },
  {
    "title": "凸槌保险员",
    "url": "./movie-0109.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧、职场、悬疑",
    "tags": [
      "废柴",
      "破案",
      "保险",
      "黑色幽默"
    ],
    "oneLine": "一个业绩垫底的保险理赔员，为了不丢工作，不得不亲自去调查那些离奇的保险诈骗案。"
  },
  {
    "title": "曼哈顿夜曲",
    "url": "./movie-0110.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑、犯罪、心理",
    "tags": [
      "深夜电台",
      "都市传说",
      "连环杀手"
    ],
    "oneLine": "深夜电台主播每夜读听众来信，发现所有来信者的故事都指向同一个凶手。"
  },
  {
    "title": "崂山探花郎",
    "url": "./movie-0111.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻， 古装， 喜剧",
    "tags": [
      "道士",
      "破案",
      "科举",
      "穿书"
    ],
    "oneLine": "现代法医穿成古代落魄书生，为考取功名被迫去崂山拜师学法术，却用科学思维破解了闹鬼疑案。"
  },
  {
    "title": "脂粉奇兵",
    "url": "./movie-0112.html",
    "cover": "./112.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "动作、喜剧",
    "tags": [
      "美妆特工",
      "大妈",
      "菜市场",
      "反诈"
    ],
    "oneLine": "一群菜市场大妈组成“脂粉特工队”，用美妆和砍价技术打击老年诈骗集团。"
  },
  {
    "title": "商道·天问",
    "url": "./movie-0113.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史",
    "tags": [
      "商战",
      "晚清",
      "权谋"
    ],
    "oneLine": "清末晋商少东家为救家族，远赴莫斯科进行一场赌上全部身家的茶叶贸易。"
  },
  {
    "title": "恋爱吧，寨主",
    "url": "./movie-0114.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 爱情 / 喜剧",
    "tags": [
      "山寨",
      "女寨主",
      "欢喜冤家",
      "轻喜"
    ],
    "oneLine": "女寨主抢了个书生当“压寨夫君”，结果这书生比她还懂怎么当土匪。"
  },
  {
    "title": "我俩的时代",
    "url": "./movie-0115.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "爱情 / 剧情 / 奇幻",
    "tags": [
      "平行时空",
      "泰式小清新",
      "初恋",
      "怀旧",
      "手机"
    ],
    "oneLine": "一个生活在2025年的女孩，通过一部旧手机与来自2005年的男孩跨时空相恋，他们试图改变彼此命运的终点。"
  },
  {
    "title": "击浪青春",
    "url": "./movie-0116.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "运动, 剧情",
    "tags": [
      "赛艇",
      "热血",
      "少女群像"
    ],
    "oneLine": "五个被学校“流放”的问题少女组成了赛艇队，目标是打败省冠军男子队。"
  },
  {
    "title": "海达",
    "url": "./movie-0117.html",
    "cover": "./117.jpg",
    "year": "2021",
    "region": "挪威 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 惊悚",
    "tags": [
      "峡湾",
      "邪教",
      "献祭",
      "女性觉醒",
      "心理压迫"
    ],
    "oneLine": "一个外来女性闯入被古老献祭仪式统治的峡湾社区，她将成为下一个祭品。"
  },
  {
    "title": "正午",
    "url": "./movie-0118.html",
    "cover": "./118.jpg",
    "year": "1952",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "西部 / 剧情",
    "tags": [
      "孤胆警长",
      "小镇",
      "倒计时",
      "经典"
    ],
    "oneLine": "新婚的警长在正午必须独自面对四个前来复仇的匪徒，全镇无人愿伸出援手。"
  },
  {
    "title": "善良背后",
    "url": "./movie-0119.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 犯罪",
    "tags": [
      "反转",
      "伪善",
      "邻里",
      "真相",
      "压抑"
    ],
    "oneLine": "小区里最热心的李大妈死后，邻居们才发现她善良的背后，藏着四具尸体。"
  },
  {
    "title": "那件疯狂的小事叫爱情",
    "url": "./movie-0120.html",
    "cover": "./120.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情",
    "tags": [
      "错位",
      "搞笑",
      "追爱",
      "夏威夷",
      "名字梗"
    ],
    "oneLine": "一个失去灵感的编辑，为了追回想要分手的女友，意外卷入了黑帮的钻石争夺战，疯狂小事变亡命大逃亡。"
  },
  {
    "title": "哈利变成树",
    "url": "./movie-0121.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "英国",
    "type": "迷你剧",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "奇幻/剧情",
    "tags": [
      "环保寓言",
      "身体异变",
      "父子关系",
      "定格动画"
    ],
    "oneLine": "伐木工哈利的皮肤开始长出树皮和年轮，每当他说谎，就会开出一朵谎言之花。"
  },
  {
    "title": "笑春风",
    "url": "./movie-0122.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装 / 武侠 / 爱情",
    "tags": [
      "女侠客",
      "江湖与酒",
      "诗意暴力",
      "公路武侠"
    ],
    "oneLine": "江湖最后一位女杀手，接到的最后一单任务是：杀光所有用剑的人。"
  },
  {
    "title": "失落园",
    "url": "./movie-0123.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "悬疑 / 心理 / 惊悚",
    "tags": [
      "密闭空间",
      "集体催眠",
      "人性实验",
      "校园"
    ],
    "oneLine": "全班同学被困在废弃游乐园，一个声音告诉他们：每天必须投票选出一个人“消失”。"
  },
  {
    "title": "抢救车诺比",
    "url": "./movie-0124.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "英国 / 乌克兰",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史 / 灾难 / 悬疑",
    "tags": [
      "核灾",
      "禁区内幕",
      "牺牲",
      "政治博弈"
    ],
    "oneLine": "1986年核爆后，一名克格勃医生奉命进入隔离区，却发现了比辐射更可怕的“生物适应”现象。"
  },
  {
    "title": "我在香港遇见他",
    "url": "./movie-0125.html",
    "cover": "./125.jpg",
    "year": "2022",
    "region": "中国大陆, 中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情",
    "tags": [
      "跨境",
      "身份认同",
      "港漂"
    ],
    "oneLine": "内地女孩在香港打工三年，每天经过同一条天桥，直到有一天，天桥上多了一个卖唱的男孩。"
  },
  {
    "title": "奏不响的风琴",
    "url": "./movie-0126.html",
    "cover": "./126.jpg",
    "year": "2010",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情",
    "tags": [
      "音乐",
      "绝症",
      "师生"
    ],
    "oneLine": "一个失意的钢琴家被派往偏远聋哑学校，却发现这里的学生为了“听”音乐，学会了用手掌感受地板震动。"
  },
  {
    "title": "露辛达·布雷福特",
    "url": "./movie-0127.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 传记, 历史",
    "tags": [
      "女性作家",
      "维多利亚时代",
      "秘密日记",
      "文坛传奇"
    ],
    "oneLine": "19 世纪女作家露辛达被遗忘的手稿出土，揭露了一个以笔为刀的秘密文学江湖。"
  },
  {
    "title": "橘色奇迹",
    "url": "./movie-0128.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "爱情， 科幻， 青春",
    "tags": [
      "时空信",
      "拯救爱人",
      "平行世界",
      "催泪",
      "校园"
    ],
    "oneLine": "十年后的自己寄来一封信：今天下午，阻止那个转学生坐上那辆车。"
  },
  {
    "title": "杜宾巡官：白色毒药",
    "url": "./movie-0129.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "犯罪, 悬疑",
    "tags": [
      "硬汉侦探",
      "连环下毒",
      "古典推理"
    ],
    "oneLine": "杜宾巡官发现三起看似无关的猝死案，都指向同一款含有罕见植物毒素的止咳糖浆。"
  },
  {
    "title": "最后的王爷",
    "url": "./movie-0130.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史、传记",
    "tags": [
      "清末",
      "民国",
      "王爷",
      "时代巨变"
    ],
    "oneLine": "清朝最后一位铁帽子王从三岁穿龙袍到七十九岁病逝，经历了辫子、军阀、伪满和新中国的七十年。"
  },
  {
    "title": "珍禽假意",
    "url": "./movie-0131.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 爱情",
    "tags": [
      "替身",
      "契约恋爱",
      "乡村",
      "搞笑"
    ],
    "oneLine": "为了骗取扶贫养殖基金，城市破产富二代和乡村女兽医假扮情侣，却被一只会骂人的鹦鹉全盘搅乱。"
  },
  {
    "title": "非普通家庭",
    "url": "./movie-0132.html",
    "cover": "./132.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧 / 家庭 / 奇幻",
    "tags": [
      "超能力",
      "青春期",
      "伪装正常",
      "笑泪交织"
    ],
    "oneLine": "一个全员超能力的家庭为了活成“普通人”，每天都在上演大型翻车现场。"
  },
  {
    "title": "笼里的女人",
    "url": "./movie-0133.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "丹麦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "北欧",
      "Noir",
      "囚禁",
      "女警探",
      "社会批判"
    ],
    "oneLine": "退休女警官在一座荒岛的地下室里发现了铁笼，而笼子里关的不是人，是一面镜子。"
  },
  {
    "title": "51号公式",
    "url": "./movie-0134.html",
    "cover": "./134.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "硬核枪战",
      "复仇爽片",
      "数字谜题",
      "反杀",
      "限时逃亡"
    ],
    "oneLine": "一个被诬陷杀害全家的前特种兵，在押送途中被告知：只要解开52个数字谜题，就能揪出真凶，但每解错一个，就会死一个人质。"
  },
  {
    "title": "死亡尺寸",
    "url": "./movie-0135.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，惊悚，冒险",
    "tags": [
      "维度空间",
      "密室逃脱",
      "数学恐怖",
      "高概念"
    ],
    "oneLine": "五个陌生人醒来发现自己被关在一个不断缩小的立方体里，每十分钟缩小一厘米。"
  },
  {
    "title": "旋涡1949",
    "url": "./movie-0136.html",
    "cover": "./136.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 历史",
    "tags": [
      "民国",
      "谍战",
      "金融犯罪",
      "双雄对决"
    ],
    "oneLine": "1949年解放前夕的上海，一对失散十年的兄弟重逢，一个是地下党金融专家，一个是国民党经济督察，而他们的命运被一笔消失的黄金死死缠住。"
  },
  {
    "title": "小不点儿",
    "url": "./movie-0137.html",
    "cover": "./137.jpg",
    "year": "2012",
    "region": "法国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "动画 / 家庭",
    "tags": [
      "侏儒症",
      "校园霸凌",
      "成长",
      "奇幻朋友"
    ],
    "oneLine": "身高只有同龄人一半的女孩，养了一只和她一样小的龙。"
  },
  {
    "title": "鬼太鼓座",
    "url": "./movie-0138.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情，音乐，历史",
    "tags": [
      "太鼓",
      "武士",
      "传承"
    ],
    "oneLine": "江户时代，一群被流放的罪犯组建太鼓队修行赎罪，却意外创造出震撼日本的艺术形式。"
  },
  {
    "title": "一招半式闯江湖",
    "url": "./movie-0139.html",
    "cover": "./139.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动作",
    "tags": [
      "市井英雄",
      "扮猪吃老虎",
      "功夫喜剧",
      "小人物逆袭"
    ],
    "oneLine": "只会一招半式的街头骗子阿福，意外卷入武林大会，却靠歪打正着骗过了所有掌门。"
  },
  {
    "title": "隔壁的力",
    "url": "./movie-0140.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑, 邻里",
    "tags": [
      "偷窥",
      "孤独",
      "反转",
      "都市"
    ],
    "oneLine": "独居男人为排解寂寞偷窥邻居，却发现对面楼每户人家都在监视着另一户。"
  },
  {
    "title": "名伶暗杀令",
    "url": "./movie-0141.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作，悬疑，民国",
    "tags": [
      "京剧",
      "女杀手",
      "抗日",
      "戏班风云"
    ],
    "oneLine": "当红京剧花旦的真实身份是军统顶级刺客，而她的下一个目标，就坐在自己每场戏的第一排正中。"
  },
  {
    "title": "魔债粤语",
    "url": "./movie-0142.html",
    "cover": "./142.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "奇幻，伦理，悬疑",
    "tags": [
      "粤语原声",
      "降头",
      "父债子偿"
    ],
    "oneLine": "父亲欠下的降头血债，三十年后转移到了女儿身上，每晚零点她都会变成另一个人。"
  },
  {
    "title": "慈悲",
    "url": "./movie-0143.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "宗教",
      "同妻",
      "救赎",
      "两代和解"
    ],
    "oneLine": "佛教徒母亲撞破了儿子与男人的恋情，她选择了念经超度，还是亲手毁掉？"
  },
  {
    "title": "蜡笔小新第六季",
    "url": "./movie-0144.html",
    "cover": "./144.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "喜剧, 动画, 家庭",
    "tags": [
      "搞笑",
      "日常",
      "无厘头"
    ],
    "oneLine": "这一季，春日部防卫队面临最大危机：风间要转学去南非了，小新决定用一百种方法毁了风间的转学欢送会。"
  },
  {
    "title": "流浪汉世界杯",
    "url": "./movie-0145.html",
    "cover": "./145.jpg",
    "year": "2011",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 运动",
    "tags": [
      "励志",
      "足球",
      "草根",
      "香港精神"
    ],
    "oneLine": "一群住在天桥底的流浪汉组成球队，目标是去南非参加流浪汉世界杯。"
  },
  {
    "title": "翱翔雄心",
    "url": "./movie-0146.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "巴基斯坦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作/战争",
    "tags": [
      "空战",
      "爱国",
      "铁血",
      "兄弟情"
    ],
    "oneLine": "两名互为宿敌的空军王牌，被迫驾驶同一架战机执行自杀式任务。"
  },
  {
    "title": "皮娜",
    "url": "./movie-0147.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "传记 / 舞蹈 / 剧情",
    "tags": [
      "现代舞",
      "艺术创作",
      "身体语言"
    ],
    "oneLine": "舞者用三年时间复原皮娜未公开的遗作，却发现谱子里藏着一个谋杀暗示。"
  },
  {
    "title": "末日巡逻队第三季",
    "url": "./movie-0148.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作, 喜剧, 科幻",
    "tags": [
      "DC漫改",
      "超级英雄",
      "怪胎团队",
      "黑色幽默",
      "虚无主义"
    ],
    "oneLine": "时间出了大问题，死去的首席突然出现，而钢骨的身体开始把现实吞噬殆尽。"
  },
  {
    "title": "地狱魔婴",
    "url": "./movie-0149.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖, 惊悚",
    "tags": [
      "邪教",
      "婴儿",
      "驱魔",
      "禁室"
    ],
    "oneLine": "一名流产三次的孕妇终于生下健康的儿子，但接生护士发现——婴儿的脐带上刻着倒五角星。"
  },
  {
    "title": "巴乔：神奇的马尾辫",
    "url": "./movie-0150.html",
    "cover": "./150.jpg",
    "year": "2021",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "传记 / 剧情",
    "tags": [
      "足球",
      "悲剧英雄",
      "励志",
      "怀旧"
    ],
    "oneLine": "马尾辫飘扬亚平宁，点球点前的背影，是一个国家乃至一个时代的忧郁图腾。"
  },
  {
    "title": "继承大丈夫",
    "url": "./movie-0151.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧",
    "tags": [
      "豪门争产",
      "扮猪吃老虎",
      "港式无厘头",
      "反转",
      "亲情"
    ],
    "oneLine": "富豪临死前立下奇葩遗嘱：三个废柴儿子必须分别从事清洁工、外卖员、护工满一年，才能继承千亿家产。"
  },
  {
    "title": "请吃红小豆吧！第二季",
    "url": "./movie-0152.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 治愈 / 喜剧",
    "tags": [
      "泡面番",
      "萌系",
      "脑洞大开",
      "解压"
    ],
    "oneLine": "一颗梦想被吃掉的红豆，在甜品世界里打工摸鱼，顺便拯救了奶茶店的危机。"
  },
  {
    "title": "兽性",
    "url": "./movie-0153.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪动作",
    "tags": [
      "卧底",
      "黑帮",
      "人性考验",
      "暴力美学",
      "双雄"
    ],
    "oneLine": "卧底警察潜入走私珍稀动物的黑帮，三年后他发现自己比罪犯更像野兽。"
  },
  {
    "title": "忧郁小女孩",
    "url": "./movie-0154.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 心理",
    "tags": [
      "儿童",
      "创伤",
      "治愈"
    ],
    "oneLine": "从不说话的小女孩，用画笔在墙上画出了一个只有她能看见的“朋友”。"
  },
  {
    "title": "小石头",
    "url": "./movie-0155.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情",
    "tags": [
      "留守儿童",
      "亲情",
      "公路",
      "治愈",
      "社会"
    ],
    "oneLine": "大山里的留守儿童小石头怀揣一颗“会唱歌的石头”，独自踏上千里寻父的艰难旅程。"
  },
  {
    "title": "捍卫者联盟",
    "url": "./movie-0156.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作， 科幻， 超级英雄",
    "tags": [
      "组队",
      "异能",
      "城市守护"
    ],
    "oneLine": "五名身怀绝技的边缘人，被一个神秘信号召集，对抗企图控制城市的邪恶科技公司。"
  },
  {
    "title": "诽谤罪",
    "url": "./movie-0157.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、悬疑、律政",
    "tags": [
      "网络暴力",
      "媒体伦理",
      "真相",
      "反转"
    ],
    "oneLine": "女网红指控当红男星性侵，全网狂欢时，只有一位过气律师发现了疑点，而他本人正官司缠身。"
  },
  {
    "title": "他的秘密",
    "url": "./movie-0158.html",
    "cover": "./8.jpg",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑，惊悚，剧情",
    "tags": [
      "顶楼",
      "完美丈夫",
      "反转",
      "家庭伦理"
    ],
    "oneLine": "在丈夫意外昏迷后，妻子整理遗物时发现了一个U盘，里面记录着他杀人的完整过程。"
  },
  {
    "title": "恋上女镖师",
    "url": "./movie-0159.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 古装, 动作",
    "tags": [
      "女镖师",
      "王爷",
      "押镖",
      "先婚后爱",
      "江湖"
    ],
    "oneLine": "皇帝赐婚，京城病弱王爷被迫迎娶了西北第一女镖师，新婚夜王爷被新娘当成了人肉沙包。"
  },
  {
    "title": "致敬英雄",
    "url": "./movie-0160.html",
    "cover": "./10.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争, 剧情, 历史",
    "tags": [
      "反战",
      "真实事件改编",
      "人性",
      "沉默"
    ],
    "oneLine": "一位拒绝杀戮的二战士兵，因为在战场上只救人不开枪，被所有人视为懦夫，直到他独自拯救了一个连队。"
  },
  {
    "title": "赌途分叉点",
    "url": "./movie-0161.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 悬疑",
    "tags": [
      "赌博",
      "平行宇宙",
      "非线性叙事",
      "港风",
      "黑色"
    ],
    "oneLine": "一个烂赌鬼每次掷骰子都会分裂出平行宇宙，而在所有宇宙中，他最后都会杀人。"
  },
  {
    "title": "老豆唔知仔心肝",
    "url": "./movie-0162.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "家庭, 喜剧, 剧情",
    "tags": [
      "父子",
      "代沟",
      "粤语"
    ],
    "oneLine": "一句“老豆唔知仔心肝”，让年过半百的茶餐厅老板决定装成20岁小鲜肉，去儿子的交友软件上看看他到底在想什么。"
  },
  {
    "title": "电锯惊魂3",
    "url": "./movie-0163.html",
    "cover": "./13.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "竖锯",
      "血浆",
      "道德考验",
      "密室",
      "经典续集"
    ],
    "oneLine": "癌症晚期的竖锯躺在病床上，却通过一个绝望的父亲和一名女医生，完成了最后也是最大的“游戏”。"
  },
  {
    "title": "钢铁少女",
    "url": "./movie-0164.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 科幻",
    "tags": [
      "机甲",
      "少女",
      "硬核格斗",
      "亲情救赎"
    ],
    "oneLine": "单亲妈妈为了找回被拐女儿，自愿改造身体成为地下机甲格斗场的“钢铁奴隶”。"
  },
  {
    "title": "萨米温与达西玛",
    "url": "./movie-0165.html",
    "cover": "./15.jpg",
    "year": "2020",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作， 爱情， 歌舞",
    "tags": [
      "印度",
      "复仇",
      "村庄",
      "剑术",
      "婚礼"
    ],
    "oneLine": "女土匪萨米温假扮新娘潜入仇人儿子的婚礼，却发现新郎是她失散多年的初恋达西玛。"
  },
  {
    "title": "劫数难逃",
    "url": "./movie-0166.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪",
    "tags": [
      "绑架",
      "时间限制",
      "父女",
      "绝望"
    ],
    "oneLine": "女儿被绑架，绑匪要求父亲在24小时内连杀三个人，每杀一个，发一段女儿视频。 绑匪让父亲亲手杀三个陌生人才能换回女儿，第三个目标竟然是他自己。"
  },
  {
    "title": "命中注定稀罕你",
    "url": "./movie-0167.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "甜宠",
      "系统文",
      "穿书",
      "爆笑",
      "反套路"
    ],
    "oneLine": "穿进霸总小说成了恶毒女配，系统却说必须让男主真心说一句“我稀罕你”才能回家。"
  },
  {
    "title": "亲爱伴侣",
    "url": "./movie-0168.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情/家庭",
    "tags": [
      "宠物",
      "公路电影",
      "治愈",
      "老年危机"
    ],
    "oneLine": "两对老年夫妇为了寻找走失的爱犬，开启了一场横跨美国西部的荒诞公路之旅。"
  },
  {
    "title": "儿女传奇之选美",
    "url": "./movie-0169.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "家庭喜剧",
    "tags": [
      "选美",
      "母女代际",
      "整容风波",
      "县城故事",
      "女性自爱"
    ],
    "oneLine": "为了给女儿凑大学学费，48岁的超市收银员阿姨瞒着全家报名了一场中老年选美大赛。"
  },
  {
    "title": "魔乳秘剑帖",
    "url": "./movie-0170.html",
    "cover": "./20.jpg",
    "year": "2011",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "动作 / 奇幻 / 古装",
    "tags": [
      "忍法",
      "江户",
      "乳房",
      "战斗",
      "漫画改编"
    ],
    "oneLine": "在乳房被视为力量之源的江户时代，一名女剑士为夺回被剥夺的“乳力”而挥剑。"
  },
  {
    "title": "亚马逊萌猴奇遇记国语",
    "url": "./movie-0171.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "法国 / 巴西",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "冒险 / 家庭 / 自然",
    "tags": [
      "动物主角",
      "丛林探险",
      "友情",
      "配音版"
    ],
    "oneLine": "宠物小猴被遗弃在亚马逊雨林，它必须学会丛林法则才能找到回家的路。"
  },
  {
    "title": "德州龙虎凤",
    "url": "./movie-0172.html",
    "cover": "./22.jpg",
    "year": "1989",
    "region": "香港 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 喜剧",
    "tags": [
      "港式西部",
      "双雄",
      "唐人街",
      "黑吃黑"
    ],
    "oneLine": "德州小镇警长与香港逃犯被迫联手，对抗一个连FBI都头疼的“龙虾黑帮”。"
  },
  {
    "title": "猪头汉堡饱",
    "url": "./movie-0173.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "喜剧， 奇幻， 美食",
    "tags": [
      "夜市",
      "外星人",
      "治愈"
    ],
    "oneLine": "一个落魄的汉堡摊主捡到一个会说话的外星猪头，做出的汉堡能让人看到已故亲人的幻影。"
  },
  {
    "title": "隆美尔宝藏",
    "url": "./movie-0174.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "德国 / 突尼斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作 / 冒险 / 历史",
    "tags": [
      "寻宝",
      "二战",
      "北非",
      "沙漠",
      "谜题"
    ],
    "oneLine": "二战尾声，“沙漠之狐”隆美尔将一批宝藏沉入撒哈拉深处，七十年后四组人马同时踏上寻宝之路。"
  },
  {
    "title": "未来城市 / 叛逆智慧",
    "url": "./movie-0175.html",
    "cover": "./25.jpg",
    "year": "2030",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑",
    "tags": [
      "人工智能",
      "赛博朋克",
      "觉醒",
      "双男主"
    ],
    "oneLine": "在全员佩戴情绪抑制器的未来，两个能感受情绪的“叛逆者”决定摧毁系统。"
  },
  {
    "title": "爸爸出差时",
    "url": "./movie-0176.html",
    "cover": "./26.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "家庭 / 剧情 / 犯罪",
    "tags": [
      "父女",
      "秘密",
      "行李箱",
      "黑色幽默"
    ],
    "oneLine": "七岁女孩发现爸爸出差的行李箱里，装着一只断手和一张黑帮扑克牌。"
  },
  {
    "title": "基督山伯爵 华丽的复仇",
    "url": "./movie-0177.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "法国 / 意大利",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 悬疑 / 爱情",
    "tags": [
      "名著改编",
      "复仇",
      "越狱",
      "寻宝",
      "法式奢靡"
    ],
    "oneLine": "水手爱德蒙被朋友陷害关入孤岛监狱14年，获得宝藏后化身基督山伯爵，向巴黎上流社会展开复仇。"
  },
  {
    "title": "龙骑士4",
    "url": "./movie-0178.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻, 动作, 冒险",
    "tags": [
      "龙",
      "史诗",
      "战争",
      "终极",
      "特效大片"
    ],
    "oneLine": "传说中最后一位龙骑士复活，却发现自己要对抗的不是恶龙，而是驾驶战斗机的现代军队。"
  },
  {
    "title": "莫忘今生",
    "url": "./movie-0179.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情，爱情，年代",
    "tags": [
      "失忆",
      "粤剧名伶",
      "民国",
      "宿命之恋"
    ],
    "oneLine": "当红粤剧女小生意外失忆，忘记台上台下所有事，唯独记得一个从未存在的“戏中人”。"
  },
  {
    "title": "女武神的餐桌第二季",
    "url": "./movie-0180.html",
    "cover": "./30.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画，美食，日常，奇幻",
    "tags": [
      "泡面番",
      "温馨",
      "二次元",
      "下饭"
    ],
    "oneLine": "穿越到现代的女武神们开了一家深夜食堂，用英灵殿的食材治愈都市人的心。"
  },
  {
    "title": "喙与脑：使用工具的鸟类",
    "url": "./movie-0181.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录片",
    "tags": [
      "自然",
      "鸟类",
      "智力",
      "科学"
    ],
    "oneLine": "纪录片首次用隐蔽镜头记录新喀鸦用喙制作钩子、甚至“讨价还价”换取食物的全过程。"
  },
  {
    "title": "青春大反抗",
    "url": "./movie-0182.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "青春剧情",
    "tags": [
      "叛逆",
      "60年代",
      "五月风暴",
      "成长"
    ],
    "oneLine": "1968年法国学运前夕，三个来自不同阶层的青少年用一场疯狂的公路旅行践行他们的反抗宣言。"
  },
  {
    "title": "情系洛川红苹果",
    "url": "./movie-0183.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情/剧情",
    "tags": [
      "苹果",
      "乡村振兴",
      "知青二代",
      "守候"
    ],
    "oneLine": "为了完成父母的遗愿，一个都市女孩回到洛川种苹果，却意外遇到了当年与母亲有过一段情的果园守夜人。"
  },
  {
    "title": "罗马死亡竞技场",
    "url": "./movie-0184.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作, 历史, 血腥",
    "tags": [
      "角斗士",
      "政治阴谋",
      "大尺度暴力",
      "斯巴达克斯风格"
    ],
    "oneLine": "图密善皇帝时期，一名日耳曼战俘被强行塑造成传奇角斗士，他的每一场胜利都加速着刺杀皇帝的密谋。"
  },
  {
    "title": "穹顶之下第二季",
    "url": "./movie-0185.html",
    "cover": "./35.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻",
    "tags": [
      "悬疑",
      "生存",
      "封闭空间",
      "超自然"
    ],
    "oneLine": "穹顶破裂边缘，小镇居民发现：穹顶不是囚笼，而是保护人类的最后一道防线。"
  },
  {
    "title": "大内密探灵灵狗",
    "url": "./movie-0186.html",
    "cover": "./36.jpg",
    "year": "2026",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 古装",
    "tags": [
      "无厘头",
      "夺宝",
      "宫斗"
    ],
    "oneLine": "皇宫最废柴密探灵灵狗遭贬至御膳房，却意外发现太后要毒杀皇帝的惊天阴谋。"
  },
  {
    "title": "芭伦蒂娜的婚礼",
    "url": "./movie-0187.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 爱情, 家庭",
    "tags": [
      "婚礼喜剧",
      "家族秘密",
      "意式浪漫",
      "母女关系"
    ],
    "oneLine": "婚礼前三天，新娘的母亲突然失忆，只记得自己年轻时最想嫁的那个男人——不是新娘的父亲。"
  },
  {
    "title": "追债大乱斗",
    "url": "./movie-0188.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 动作",
    "tags": [
      "黑色幽默",
      "追债",
      "错位喜剧",
      "荒诞"
    ],
    "oneLine": "五个笨贼在同一天去找同一个欠债人，却意外撞进了一场黑帮火拼的闹剧中。"
  },
  {
    "title": "晓庄1930",
    "url": "./movie-0189.html",
    "cover": "./39.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 剧情",
    "tags": [
      "乡村教育",
      "理想主义",
      "民国",
      "真实事件改编"
    ],
    "oneLine": "1930年，晓庄师范被封，陶行知逃亡，留下来的一群学生用血肉守护乡村教育的火种。"
  },
  {
    "title": "系统",
    "url": "./movie-0190.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑",
    "tags": [
      "高概念",
      "智斗",
      "反转",
      "人性"
    ],
    "oneLine": "程序员意外获得“人生系统”，却发现每次使用都会抹去一个身边人。"
  },
  {
    "title": "巧克力冒险工厂",
    "url": "./movie-0191.html",
    "cover": "./41.jpg",
    "year": "2017",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 冒险, 家庭",
    "tags": [
      "巧克力",
      "奇幻工厂",
      "儿童冒险",
      "罗尔德达尔风格"
    ],
    "oneLine": "五张金奖券，五个孩子，一座用巧克力建成的疯狂工厂。"
  },
  {
    "title": "芝加哥警署第十季",
    "url": "./movie-0192.html",
    "cover": "./42.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪，剧情",
    "tags": [
      "警匪",
      "单元剧",
      "情报组",
      "道德困境"
    ],
    "oneLine": "情报组迎来铁腕新领导，他下令用黑吃黑的手段清洗街头，却将团队推向了内部分裂的边缘。"
  },
  {
    "title": "拉玛卡",
    "url": "./movie-0193.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "阿根廷",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情， 音乐， 同性",
    "tags": [
      "探戈",
      "师徒",
      "禁忌",
      "布宜诺斯艾利斯"
    ],
    "oneLine": "年迈的探戈大师收了一个天赋异禀的年轻男徒弟，两人在舞蹈与欲望之间逐渐迷失边界。"
  },
  {
    "title": "铁雨2：首脑峰会",
    "url": "./movie-0194.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 惊悚 / 政治",
    "tags": [
      "朝韩关系",
      "核危机",
      "潜艇"
    ],
    "oneLine": "韩、朝、美三国首脑在潜艇上举行秘密峰会，却被朝鲜政变军人困在海底300米。"
  },
  {
    "title": "龙骑士2022",
    "url": "./movie-0195.html",
    "cover": "./45.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻 / 动作",
    "tags": [
      "龙族",
      "现代骑士",
      "血脉觉醒"
    ],
    "oneLine": "最后的龙骑士在现代伦敦苏醒，而他的龙竟被改造成了地铁列车。"
  },
  {
    "title": "二子开店",
    "url": "./movie-0196.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧",
    "tags": [
      "返乡创业",
      "小成本",
      "兄弟情",
      "市井烟火",
      "黑色幽默"
    ],
    "oneLine": "二子带着城中村拆迁款回乡开店，却发现要对付的不只是竞争对手，还有一群“懂王”街坊。"
  },
  {
    "title": "盲人假期",
    "url": "./movie-0197.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 剧情",
    "tags": [
      "盲人",
      "度假",
      "温情",
      "法式幽默"
    ],
    "oneLine": "盲人程序员和毒舌发小一起去希腊度假，原本是帮他走出失明阴影，结果反被治愈。"
  },
  {
    "title": "48小时",
    "url": "./movie-0198.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "密室",
      "实时叙事",
      "赎罪"
    ],
    "oneLine": "一名被冤枉的警察被锁在审讯室里，外面真正的凶手正挨个杀害他的家人。"
  },
  {
    "title": "燃烧的港湾",
    "url": "./movie-0199.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪动作",
    "tags": [
      "卧底",
      "黑帮",
      "兄弟情"
    ],
    "oneLine": "卧底警察在即将收网之际，发现自己的亲弟弟竟是贩毒集团的新任头目。"
  },
  {
    "title": "远山恋人",
    "url": "./movie-0200.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情 / 冒险 / 剧情",
    "tags": [
      "雪山求生",
      "治愈系",
      "陌生人变恋人",
      "极简对白",
      "风景大片"
    ],
    "oneLine": "两个婚姻失意的陌生人在前往各自离婚官司的航班上相遇，飞机坠毁后，他们必须在雪山中独自求生。"
  },
  {
    "title": "劲爆战士第一季",
    "url": "./movie-0201.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画/科幻/体育",
    "tags": [
      "陀螺",
      "竞技",
      "机甲",
      "友情",
      "热血"
    ],
    "oneLine": "未来世界陀螺战士用精神力操控圣兽陀螺，为拯救濒死的地核而战。"
  },
  {
    "title": "抓贼高手",
    "url": "./movie-0202.html",
    "cover": "./52.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧",
    "tags": [
      "警匪",
      "动作喜剧",
      "换脸",
      "乌龙"
    ],
    "oneLine": "神偷与警察在一次意外中互换了面孔，不得不以对方的身份去破解跨国盗宝案。"
  },
  {
    "title": "熟悉的她",
    "url": "./movie-0203.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情、悬疑、科幻",
    "tags": [
      "时间循环",
      "失忆",
      "咖啡店",
      "初恋"
    ],
    "oneLine": "每天醒来，我都觉得隔壁咖啡店的女店员是我的初恋，但所有人包括她自己都说：你认错人了。"
  },
  {
    "title": "星月对话2023",
    "url": "./movie-0204.html",
    "cover": "./54.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "访谈, 脱口秀",
    "tags": [
      "深度访谈",
      "明星",
      "人生",
      "真实"
    ],
    "oneLine": "一档没有提词器、不预设剧本的深夜访谈，明星在星月下卸下伪装，谈事业更谈生死。"
  },
  {
    "title": "＋－正负之间",
    "url": "./movie-0205.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "爱情, 同性, 剧情",
    "tags": [
      "职场",
      "反差",
      "暗恋",
      "治愈"
    ],
    "oneLine": "一个永远乐观的正极先生，爱上了总是负能量的同事，他们要互相充一辈子电。"
  },
  {
    "title": "疾速王后",
    "url": "./movie-0206.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 惊悚",
    "tags": [
      "王室",
      "女保镖",
      "宫廷政变",
      "冷兵器",
      "大女主"
    ],
    "oneLine": "朝鲜王朝的王后表面母仪天下，实则是前朝最顶尖的女刺客，当她拿起绣花针，整个宫廷都在颤抖。"
  },
  {
    "title": "青楼情孽",
    "url": "./movie-0207.html",
    "cover": "./57.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 情色 / 历史",
    "tags": [
      "青楼",
      "民国",
      "女性群像",
      "悲剧",
      "旧社会"
    ],
    "oneLine": "民国初年上海一家青楼里，五位女子用各自的肉身和灵魂，在泥沼中开出短暂的花。"
  },
  {
    "title": "假面舞会",
    "url": "./movie-0208.html",
    "cover": "./58.jpg",
    "year": "1971",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "面具",
      "谋杀",
      "豪门",
      "反转"
    ],
    "oneLine": "一场奢华的面具舞会上，富豪主人被离奇杀害，在场的每一位宾客，都戴着同样的面具。"
  },
  {
    "title": "春闺风雨",
    "url": "./movie-0209.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 古装 / 家庭",
    "tags": [
      "宅斗",
      "先婚后爱",
      "民国风"
    ],
    "oneLine": "留洋归来的二小姐被迫替姐出嫁，却发现冷面军阀丈夫是她曾经的笔友。"
  },
  {
    "title": "烙印",
    "url": "./movie-0210.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史",
    "tags": [
      "二战",
      "纳粹",
      "犹太",
      "身份认同"
    ],
    "oneLine": "奥斯维辛幸存者的孙子，发现爷爷手臂上的编号竟是家族最大的秘密和耻辱。"
  },
  {
    "title": "老瑞和哈迪之小兵进行曲",
    "url": "./movie-0211.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 战争",
    "tags": [
      "搞笑",
      "军营",
      "菜鸟",
      "兄弟情",
      "滑稽"
    ],
    "oneLine": "两个笨手笨脚的小镇青年被征入伍，用各种乌龙操作把严肃的军事基地搅成了马戏团。"
  },
  {
    "title": "不可能的任务：全面瓦解",
    "url": "./movie-0212.html",
    "cover": "./62.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": [
      "特工",
      "实拍狂魔",
      "阿汤哥",
      "跳伞",
      "高难度动作"
    ],
    "oneLine": "为了夺回三颗致命的钚核，伊森·亨特必须在48小时内穿越巴黎、伦敦和克什米尔，同时提防叛徒和追兵。"
  },
  {
    "title": "不可能的云霄飞车",
    "url": "./movie-0213.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 冒险, 灾难",
    "tags": [
      "过山车",
      "极限救援",
      "定时炸弹",
      "垂直挑战"
    ],
    "oneLine": "世界上最长的过山车被安装了炸弹，只要速度低于90公里每小时就会爆炸，而车上坐着一个有恐高症的天才工程师。"
  },
  {
    "title": "沙漠王国的公主",
    "url": "./movie-0214.html",
    "cover": "./64.jpg",
    "year": "2017",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "历史 / 冒险",
    "tags": [
      "拉贾斯坦",
      "公主",
      "反抗",
      "殖民",
      "女权"
    ],
    "oneLine": "19世纪印度沙漠王国，一位公主为对抗英国殖民者，穿上铠甲率领女子骑兵队冲锋陷阵。"
  },
  {
    "title": "丧尸特警",
    "url": "./movie-0215.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 恐怖",
    "tags": [
      "丧尸",
      "警匪",
      "暴力美学",
      "反英雄"
    ],
    "oneLine": "被黑帮杀害的警探注射实验血清后变成丧尸，成为法律无法约束的“不死执法者”。"
  },
  {
    "title": "考特尼斯医生的旅程",
    "url": "./movie-0216.html",
    "cover": "./66.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 冒险, 传记",
    "tags": [
      "医疗",
      "19世纪",
      "公路电影",
      "理想主义"
    ],
    "oneLine": "19世纪末，一位理想主义的女医生骑马穿越美国西部荒漠，只为给一个拒绝她治疗的矿镇带去天花疫苗。"
  },
  {
    "title": "醉酒夫妻",
    "url": "./movie-0217.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情 / 爱情",
    "tags": [
      "婚姻危机",
      "即兴表演",
      "黑色幽默",
      "深夜谈心"
    ],
    "oneLine": "一对即将离婚的夫妻在一次喝断片后醒来，发现床头有一张写着“找到孩子”的纸条。"
  },
  {
    "title": "亡命驾驶2018",
    "url": "./movie-0218.html",
    "cover": "./68.jpg",
    "year": "2018",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作 / 惊悚",
    "tags": [
      "赛车",
      "复仇",
      "地下世界",
      "一击脱离"
    ],
    "oneLine": "退役逃犯车手在女儿生日当天被旧仇家找到，他只有一晚时间飞车横跨三国才能保命。"
  },
  {
    "title": "星际牛仔",
    "url": "./movie-0219.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "科幻，动作，冒险",
    "tags": [
      "太空歌剧",
      "赏金猎人",
      "爵士乐"
    ],
    "oneLine": "2045 年，一艘破旧的飞船上的四个赏金猎人，为了各自的过去，在太阳系展开了一场场嬉皮又悲壮的冒险。"
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "url": "./movie-0220.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻战斗",
    "tags": [
      "双女主",
      "魔法少女",
      "反战",
      "宿命对决",
      "变身"
    ],
    "oneLine": "当和平使者的剑与复仇者的镰刀同时指向同一位神明，她们共同的敌人竟来自未来。"
  },
  {
    "title": "失翼灵雀",
    "url": "./movie-0221.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭 / 同性",
    "tags": [
      "眷村",
      "白化症",
      "姐妹",
      "禁忌之恋",
      "乡土"
    ],
    "oneLine": "患有白化症的姐姐被全村当作不祥之物，妹妹却偷偷爱上了村子里唯一善待姐姐的外来画家。"
  },
  {
    "title": "地球最后的人",
    "url": "./movie-0222.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，惊悚",
    "tags": [
      "末世",
      "孤独",
      "AI",
      "反乌托邦",
      "心理恐惧"
    ],
    "oneLine": "一场瘟疫后，男主发现自己是最后一个人类，但家中智能音箱里传来一声陌生的咳嗽。"
  },
  {
    "title": "美景圣诞",
    "url": "./movie-0223.html",
    "cover": "./73.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "浪漫、喜剧、家庭",
    "tags": [
      "圣诞电影",
      "小镇奇遇",
      "假情侣真感情",
      "治愈"
    ],
    "oneLine": "为了保住家族旅馆不被收购，事业女强人必须在平安夜之前和一个冒充她未婚夫的陌生男人成功“相爱”给所有人看。"
  },
  {
    "title": "一步之遥",
    "url": "./movie-0224.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 运动",
    "tags": [
      "马拉松",
      "父子",
      "救赎",
      "小镇"
    ],
    "oneLine": "废柴青年为还债替残障父亲跑马拉松，却在终点前一公里发现了父亲的惊天过往。"
  },
  {
    "title": "十七号",
    "url": "./movie-0225.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 科幻",
    "tags": [
      "人工智能",
      "人格复制",
      "身份危机"
    ],
    "oneLine": "一个程序员在去世父亲的旧电脑里，发现了一个名为“十七号”的AI程序，它拥有父亲全部的记忆。"
  },
  {
    "title": "猛虎嗅蔷薇之舞“盗”团",
    "url": "./movie-0226.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "犯罪 / 动作 / 喜剧",
    "tags": [
      "全女性团队",
      "盗窃",
      "现代舞",
      "美术馆"
    ],
    "oneLine": "五个失业的现代舞者，为了讨薪，用毕生所学的“肢体美学”策划了一场美术馆惊天盗窃案。"
  },
  {
    "title": "恶土",
    "url": "./movie-0227.html",
    "cover": "./77.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "犯罪 / 惊悚 / 西部",
    "tags": [
      "边境杀手",
      "道德困境",
      "荒凉美学",
      "硬核犯罪",
      "一人军队"
    ],
    "oneLine": "一名德州游骑兵在追查毒品集团时发现，自己要逮捕的头号嫌犯，竟是十年前拯救过自己生命的墨西哥地下英雄。"
  },
  {
    "title": "帝企鹅日记2：召唤",
    "url": "./movie-0228.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影 / 纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录 / 自然 / 冒险",
    "tags": [
      "南极",
      "海洋迁徙",
      "气候变化"
    ],
    "oneLine": "一只年轻的帝企鹅第一次听到来自海洋深处的低频召唤，它带领整个族群踏上从未尝试过的冰架迁徙之路。"
  },
  {
    "title": "捉迷藏2005",
    "url": "./movie-0229.html",
    "cover": "./79.jpg",
    "year": "2005",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "鬼屋",
      "童年游戏",
      "都市传说",
      "港式惊悚",
      "反转"
    ],
    "oneLine": "五个年轻人回荒废旧校舍玩捉迷藏，却发现了规则之外的第一个人——他从不说“躲好了吗”。"
  },
  {
    "title": "开心芒果2016",
    "url": "./movie-0230.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "青春喜剧",
    "tags": [
      "小镇",
      "暑假",
      "怀旧",
      "打脸"
    ],
    "oneLine": "2016年夏天，高考结束的废柴四人组为了凑钱买一款手游皮肤，在小镇展开啼笑皆非的创业大作战。"
  },
  {
    "title": "高丽葬",
    "url": "./movie-0231.html",
    "cover": "./81.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "历史, 惊悚, 悬疑",
    "tags": [
      "古代葬礼",
      "王室秘辛",
      "活埋诅咒",
      "宫斗"
    ],
    "oneLine": "高丽王朝末期，一名被废的妃子在即将被活埋殉葬前，对着黑暗说出了一句足以颠覆王朝的惊天秘密。"
  },
  {
    "title": "青春环游记第四季",
    "url": "./movie-0232.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "中国",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 旅行",
    "tags": [
      "旅游",
      "搞笑",
      "明星",
      "游戏"
    ],
    "oneLine": "常驻MC集体失忆，只剩一本空白的旅行日记，被迫按照片线索重走上一季路线。"
  },
  {
    "title": "幸福马上来",
    "url": "./movie-0233.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 剧情",
    "tags": [
      "小人物",
      "黑色幽默",
      "城市变迁"
    ],
    "oneLine": "一个靠“假装幸福”为职业的演员，在接到一单扮演“完美父亲”的任务后，卷入了一场地产骗局和家庭闹剧。"
  },
  {
    "title": "怒海沉尸",
    "url": "./movie-0234.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "犯罪, 悬疑",
    "tags": [
      "航海",
      "身份互换",
      "地中海",
      "心理压迫"
    ],
    "oneLine": "两名航海爱好者在地中海孤岛发现一艘无人游艇，登船后发现自己正在被一个“已死之人”远程监控。"
  },
  {
    "title": "闹鬼城堡",
    "url": "./movie-0235.html",
    "cover": "./85.jpg",
    "year": "2021",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧，恐怖",
    "tags": [
      "法式幽默",
      "闹剧",
      "解谜"
    ],
    "oneLine": "一群法国小城的遗产继承人，在一个暴风雨之夜被困在破旧的祖传城堡里，而这里似乎真的闹鬼。"
  },
  {
    "title": "大明按察使",
    "url": "./movie-0236.html",
    "cover": "./86.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 悬疑 / 犯罪",
    "tags": [
      "古代探案",
      "明朝",
      "反腐",
      "权谋",
      "双男主"
    ],
    "oneLine": "大明按察使周新被锦衣卫诬陷处死，临刑前他对监斩官说：“我死之后，你会收到一封来自‘我’的密信，那时你就知道谁才是真的该死。”"
  },
  {
    "title": "乳牙",
    "url": "./movie-0237.html",
    "cover": "./87.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 爱情 / 青春",
    "tags": [
      "绝症",
      "少女",
      "青春期",
      "告别",
      "清新"
    ],
    "oneLine": "身患绝症的少女在生命最后几个月，疯狂地爱上了邻家毒贩男孩，像乳牙脱落般痛且必然。"
  },
  {
    "title": "凤凰号",
    "url": "./movie-0238.html",
    "cover": "./88.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 动作 / 江湖",
    "tags": [
      "九龙城寨",
      "亡命飞车",
      "兄弟反目",
      "港味重生"
    ],
    "oneLine": "曾经的飞车党头目出狱后，发现弟弟成了仇家的死士，他必须重驾“凤凰号”救人。"
  },
  {
    "title": "复制品",
    "url": "./movie-0239.html",
    "cover": "./89.jpg",
    "year": "2018",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻",
    "tags": [
      "克隆",
      "伦理困境",
      "记忆移植",
      "悬疑",
      "反转"
    ],
    "oneLine": "科学家为了复活死去的儿子，秘密克隆了他，却发现被复制的记忆里藏着一个谋杀秘密。"
  },
  {
    "title": "特殊身份的警官",
    "url": "./movie-0240.html",
    "cover": "./90.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "卧底",
      "禁毒",
      "双面人生",
      "暴力美学"
    ],
    "oneLine": "他既是缉毒英雄，也是贩毒集团内部最狠的“清道夫”。"
  },
  {
    "title": "人生",
    "url": "./movie-0241.html",
    "cover": "./91.jpg",
    "year": "1984",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情",
    "tags": [
      "经典",
      "路遥",
      "城乡差距"
    ],
    "oneLine": "农村青年高加林为了进城改变命运，在爱情与前途之间做出了让他悔恨终生的选择。"
  },
  {
    "title": "直面脂肪",
    "url": "./movie-0242.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "美国",
    "type": "纪录片 / 电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片 / 社会",
    "tags": [
      "身体焦虑",
      "身材羞辱",
      "健康理念",
      "社会实验"
    ],
    "oneLine": "一位曾经厌食症的女孩，试图证明“肥胖不是病”，却发现了更残酷的真相。"
  },
  {
    "title": "我在梦里见过你",
    "url": "./movie-0243.html",
    "cover": "./93.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻爱情",
    "tags": [
      "梦境连接",
      "平行时空",
      "治愈",
      "纯爱"
    ],
    "oneLine": "两个素未谋面的失眠症患者发现，他们竟能共享同一个梦境世界。"
  },
  {
    "title": "天大地大",
    "url": "./movie-0244.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "犯罪, 悬疑",
    "tags": [
      "警匪",
      "边境",
      "卧底",
      "兄弟反目",
      "硬核"
    ],
    "oneLine": "两位从小长大的兄弟，一个成了缉毒警，一个成了大毒枭。"
  },
  {
    "title": "决斗",
    "url": "./movie-0245.html",
    "cover": "./95.jpg",
    "year": "1971",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚 / 动作",
    "tags": [
      "公路追杀",
      "卡车",
      "心理压迫",
      "斯皮尔伯格",
      "无对话"
    ],
    "oneLine": "一辆破旧轿车在荒漠公路上被一辆巨型油罐车无休止地追击，而司机从未露脸。"
  },
  {
    "title": "超级飞侠第十四季",
    "url": "./movie-0246.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "儿童， 教育",
    "tags": [
      "机器人",
      "全球文化",
      "解决问题",
      "团队合作",
      "飞行"
    ],
    "oneLine": "超级飞侠总部收到来自月球基地的求助信号，乐迪首次冲出地球，开启太空救援。"
  },
  {
    "title": "今天是再见的日子",
    "url": "./movie-0247.html",
    "cover": "./97.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭",
    "tags": [
      "临终",
      "告别",
      "温情",
      "日记",
      "眼泪"
    ],
    "oneLine": "被诊断只剩三个月生命的父亲，决定每天为家人拍一张“最后的照片”。"
  },
  {
    "title": "药命杀阵",
    "url": "./movie-0248.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 犯罪",
    "tags": [
      "硬核",
      "保镖",
      "黑吃黑",
      "枪战"
    ],
    "oneLine": "顶尖保镖接下最后一项任务：保护毒枭之女横穿毒枭横行的德州。"
  },
  {
    "title": "一夕致富",
    "url": "./movie-0249.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情/犯罪",
    "tags": [
      "彩票",
      "黑色幽默",
      "平民悲剧",
      "港式宿命"
    ],
    "oneLine": "一个清洁工中了六合彩头奖，兑奖前一夜，全香港都想杀了他。"
  },
  {
    "title": "疯狂婚礼周",
    "url": "./movie-0250.html",
    "cover": "./100.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 爱情",
    "tags": [
      "婚前焦虑",
      "家庭闹剧",
      "乌龙事件",
      "爆笑"
    ],
    "oneLine": "婚礼前一周，新郎的前女友、老丈人的私生女、逃跑的婚纱全来了。"
  },
  {
    "title": "随心逐流",
    "url": "./movie-0251.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻, 剧情, 悬疑",
    "tags": [
      "记忆删除",
      "选择与代价",
      "软科幻",
      "情感纠葛",
      "心理"
    ],
    "oneLine": "一款能够删除特定记忆的手环风靡全球，人们用它来逃避痛苦，却没发现自己正在变成另一个人。"
  },
  {
    "title": "坂本龙一的700天",
    "url": "./movie-0252.html",
    "cover": "./102.jpg",
    "year": "2015",
    "region": "日本",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "japan",
    "genre": "纪录片 / 音乐 / 传记",
    "tags": [
      "坂本龙一",
      "创作过程",
      "癌症",
      "终曲前奏"
    ],
    "oneLine": "记录坂本龙一在罹患癌症后，如何用700天创作出他个人最私密的专辑《async》。"
  },
  {
    "title": "女人行不行",
    "url": "./movie-0253.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情、喜剧、剧情",
    "tags": [
      "女性群像",
      "职场",
      "独立",
      "中年危机"
    ],
    "oneLine": "四位不同年龄、不同职业的女性，在遭遇婚姻、职场、生育困境后，联手开了一家专为女性服务的“反击”事务所。"
  },
  {
    "title": "噩夜酒店灵异诡店",
    "url": "./movie-0254.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "tags": [
      "都市怪谈",
      "诅咒酒店",
      "单元剧连环",
      "泰式邪降",
      "高能反转"
    ],
    "oneLine": "曼谷一家只有七间客房的诡异酒店，每一间房都曾发生过死亡事件，并且死者在每年同一天都会“回来”。"
  },
  {
    "title": "至少是圣徒",
    "url": "./movie-0255.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情， 犯罪",
    "tags": [
      "黑色幽默",
      "宗教讽刺",
      "街头混混"
    ],
    "oneLine": "为了继承教父的遗产，三个蹩脚混混必须假扮神父，在暴力的街区完成一百次忏悔。"
  },
  {
    "title": "罗宫春色",
    "url": "./movie-0256.html",
    "cover": "./106.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "古装 / 情色 / 剧情",
    "tags": [
      "邵氏",
      "宫廷斗争",
      "风月片",
      "复仇"
    ],
    "oneLine": "唐朝后宫，一名被皇帝冷落的妃子联合太监策划了一场颠覆王朝的复仇。"
  },
  {
    "title": "春色无边欲海花",
    "url": "./movie-0257.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "情色 / 剧情",
    "tags": [
      "情欲觉醒",
      "女性视角",
      "九十年代香港",
      "禁忌之恋"
    ],
    "oneLine": "1997年香港，一个保守的图书管理员意外发现亡夫留下的一箱情色照片，照片里全是别的女人。"
  },
  {
    "title": "爱马的女孩",
    "url": "./movie-0258.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖、心理惊悚",
    "tags": [
      "精神病",
      "独角兽",
      "梦境入侵",
      "女性主角",
      "超自然"
    ],
    "oneLine": "一个沉迷奇幻小说的牧场女孩发现，她在梦里抚摸的那匹白色独角兽，正在现实中一点一点吃掉她的马群。"
  },
  {
    "title": "血之路",
    "url": "./movie-0259.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚 / 冒险",
    "tags": [
      "荒野求生",
      "复仇",
      "公路",
      "血腥"
    ],
    "oneLine": "一对情侣在澳洲内陆自驾游，误入一条地图上没有的血腥公路，每公里都有一具尸体。"
  },
  {
    "title": "替身传奇乐翻天",
    "url": "./movie-0260.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 动作",
    "tags": [
      "替身演员",
      "娱乐圈黑幕",
      "错位",
      "草根英雄"
    ],
    "oneLine": "一个农村来的特技替身被大明星绑架去当替身，结果把整个剧组搅得天翻地覆。"
  },
  {
    "title": "誓言2022",
    "url": "./movie-0261.html",
    "cover": "./111.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "复仇",
      "法律",
      "正义",
      "反转"
    ],
    "oneLine": "一名死刑犯在行刑前夜，向律师说出了震惊全国的连环杀人案真相，但故事还有第三层。"
  },
  {
    "title": "外来媳妇本地郎7",
    "url": "./movie-0262.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 家庭",
    "tags": [
      "长寿剧",
      "广府文化",
      "婆媳大战"
    ],
    "oneLine": "康家第七季迎来史上最离谱儿媳：一个不会说粤语、只想开直播当网红的外国留学生。"
  },
  {
    "title": "佩治的日记",
    "url": "./movie-0263.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 悬疑, 传记",
    "tags": [
      "日记",
      "女性",
      "年代",
      "文学"
    ],
    "oneLine": "一本1860年的日记被现当代大学生破解，发现作者佩治不仅是个女人，还是个连环杀手。"
  },
  {
    "title": "急救生活",
    "url": "./movie-0264.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "医疗, 职业",
    "tags": [
      "120急救",
      "人间百态",
      "生死时速"
    ],
    "oneLine": "跟拍120急救小组的365天，他们不是在救人，就是在见证人性的崩塌与重建。"
  },
  {
    "title": "妖姬也疯狂",
    "url": "./movie-0265.html",
    "cover": "./115.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 奇幻, 恐怖",
    "tags": [
      "僵尸",
      "女鬼",
      "无厘头"
    ],
    "oneLine": "清朝女僵尸撞见现代渣男，为了修行成仙，她决定先替天行道整治“海王”。"
  },
  {
    "title": "爱你不爱",
    "url": "./movie-0266.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情， 悬疑",
    "tags": [
      "车祸失忆",
      "身份互换",
      "婚姻骗局",
      "双面女主"
    ],
    "oneLine": "妻子车祸失忆后认定丈夫是坏人，丈夫为自证清白拿出的婚礼录像里，新娘却全程都在对另一个男人使眼色。"
  },
  {
    "title": "开心巨无霸",
    "url": "./movie-0267.html",
    "cover": "./117.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 家庭",
    "tags": [
      "肥姐",
      "温馨",
      "美食",
      "误会",
      "合家欢"
    ],
    "oneLine": "为了保住亡夫留下的茶餐厅，三百斤的胖姐决定参加“全港厨神大赛”。"
  },
  {
    "title": "十日寻人",
    "url": "./movie-0268.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "绑架",
      "时间限制",
      "父亲",
      "社会派"
    ],
    "oneLine": "女儿被绑架，绑匪要求父亲在十天内凭自己的力量找到她，而且不许报警。"
  },
  {
    "title": "谁在敲我的门",
    "url": "./movie-0269.html",
    "cover": "./119.jpg",
    "year": "1967",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": [
      "早期马丁",
      "罗马风情",
      "信仰危机",
      "黑白片"
    ],
    "oneLine": "一个虔诚的天主教徒在结婚前夕得知，未婚妻曾在战争中受过集体侵犯，他的信仰与爱情同时陷入了绝境。"
  },
  {
    "title": "代客泊车",
    "url": "./movie-0270.html",
    "cover": "./120.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 喜剧",
    "tags": [
      "江湖",
      "小人物",
      "飙车"
    ],
    "oneLine": "最会泊车的混混，用一辆偷来的法拉利搅乱了整个地下车市。"
  },
  {
    "title": "逐梦棋缘",
    "url": "./movie-0271.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情，运动",
    "tags": [
      "励志",
      "教育",
      "社会阶层",
      "治愈"
    ],
    "oneLine": "贫民窟的清洁工儿子通过国际象棋闯入私立名校，却发现棋盘之外，阶级的博弈远比他想象的复杂。"
  },
  {
    "title": "克罗索巨兽",
    "url": "./movie-0272.html",
    "cover": "./122.jpg",
    "year": "2016",
    "region": "美国 / 西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 剧情 / 黑色喜剧",
    "tags": [
      "怪物",
      "隐喻",
      "女权",
      "酗酒",
      "反套路怪兽片"
    ],
    "oneLine": "失意女作家发现自己醉酒后在公园里的动作，竟会同步操控地球另一端摧毁首尔的巨型怪兽。"
  },
  {
    "title": "永生羊",
    "url": "./movie-0273.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "哈萨克斯坦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 奇幻 / 生态",
    "tags": [
      "草原",
      "转场",
      "灵性",
      "气候变迁",
      "誓言"
    ],
    "oneLine": "哈萨克牧人发现一只永远不老的神羊，部落为追随它踏上千年未至的夏季草场，却走入时间的裂缝。"
  },
  {
    "title": "最美中国戏",
    "url": "./movie-0274.html",
    "cover": "./124.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀, 文化",
    "tags": [
      "戏曲",
      "园林实景",
      "明星体验",
      "国粹传承"
    ],
    "oneLine": "明星学员住进颐和园，跟随戏曲名家学习唱念做打，每期呈现一出实景大戏。"
  },
  {
    "title": "来自地狱的钟声",
    "url": "./movie-0275.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "恐怖, 悬疑, 犯罪",
    "tags": [
      "邪教",
      "诅咒",
      "小镇怪谈",
      "反转"
    ],
    "oneLine": "废弃教堂的钟每到午夜自动敲响，次日必有一人心脏被完美“摘除”。"
  },
  {
    "title": "不朽的发生",
    "url": "./movie-0276.html",
    "cover": "./126.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，剧情，爱情",
    "tags": [
      "永生",
      "时间循环",
      "情感实验",
      "记忆",
      "放手"
    ],
    "oneLine": "一个能永生的人，在经历了第1042次爱人离世后，决定用科技杀死自己的“永恒”。"
  },
  {
    "title": "核战爆发令",
    "url": "./movie-0277.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争惊悚",
    "tags": [
      "核潜艇",
      "误判",
      "末日",
      "指挥官",
      "道德抉择"
    ],
    "oneLine": "美军核潜艇收到“发射核弹”的命令，但年轻的情报官发现，这道命令可能来自一个已经被摧毁的假想敌。"
  },
  {
    "title": "八婆",
    "url": "./movie-0278.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 剧情 / 女性",
    "tags": [
      "港式市井",
      "女性群像",
      "八卦文化",
      "邻里关系",
      "茶餐厅"
    ],
    "oneLine": "深水埗一栋旧楼里的八个女人，用流言蜚语织成一张网，却意外网住了杀人犯。"
  },
  {
    "title": "泥人哥连出世记",
    "url": "./movie-0279.html",
    "cover": "./129.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻 / 剧情 / 历史",
    "tags": [
      "犹太传说",
      "泥人",
      "布拉格",
      "极权隐喻",
      "父与子"
    ],
    "oneLine": "16世纪布拉格，一位拉比用泥土造出巨人保护犹太人，但这个“守护者”正在变成最可怕的怪物。"
  },
  {
    "title": "萨德柯",
    "url": "./movie-0280.html",
    "cover": "./130.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "心理扭曲",
      "古堡密事",
      "血色审判",
      "权力游戏"
    ],
    "oneLine": "女记者受邀进入神秘作家萨德柯的古堡，却发现每一段对话都是死亡陷阱。"
  },
  {
    "title": "大厨",
    "url": "./movie-0281.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧、剧情、美食",
    "tags": [
      "料理",
      "忘年交",
      "米其林",
      "传统与创新",
      "逆袭"
    ],
    "oneLine": "一位固执的传统米其林大厨与一位热爱分子料理的街头混混，被迫联手拯救一家百年老店。"
  },
  {
    "title": "骷髅岛",
    "url": "./movie-0282.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动作 / 冒险 / 怪兽",
    "tags": [
      "金刚",
      "骷髅岛",
      "怪兽",
      "生存",
      "原始生态"
    ],
    "oneLine": "一支遇难的探险队被困在骷髅岛，他们必须在金刚和各种史前怪兽的领地中活下来。"
  },
  {
    "title": "红色猎杀",
    "url": "./movie-0283.html",
    "cover": "./133.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 战争",
    "tags": [
      "谍战",
      "动作",
      "抗美援朝",
      "狙击手",
      "红色"
    ],
    "oneLine": "抗美援朝战争最后一夜，中美两位顶级狙击手在一座废弃的教堂里，展开了一场关于“颜色”的生死对决。"
  },
  {
    "title": "隋唐英雄3",
    "url": "./movie-0284.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 战争 / 动作 / 古装",
    "tags": [
      "隋唐",
      "罗通",
      "薛仁贵",
      "征东",
      "家国"
    ],
    "oneLine": "罗通扫北之后，新一代英雄薛仁贵崛起，大唐与高句丽的宿命之战拉开序幕。"
  },
  {
    "title": "雷神索尔3：诸神黄昏",
    "url": "./movie-0285.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "北欧神话",
      "诸神黄昏",
      "宇宙冒险",
      "雷神"
    ],
    "oneLine": "这一次的诸神黄昏不是末日，而是重生——索尔必须亲手毁灭阿斯加德，才能拯救它。"
  },
  {
    "title": "最近，我的妹妹有点怪",
    "url": "./movie-0286.html",
    "cover": "./136.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "恐怖 / 悬疑 / 家庭",
    "tags": [
      "附身",
      "姐妹",
      "J-HORROR",
      "反转"
    ],
    "oneLine": "姐姐溺水昏迷后苏醒，对妹妹异常温柔，但妹妹发现姐姐的日记本上写着：“我死了，别让那个东西出来。”"
  },
  {
    "title": "假面骑士利维斯",
    "url": "./movie-0287.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "特摄/动作",
    "tags": [
      "恶魔契约",
      "兄妹搭档",
      "多重形态",
      "单元剧"
    ],
    "oneLine": "五十岚一辉与体内恶魔维斯签订契约，化身双重大逃杀风格的新型假面骑士。"
  },
  {
    "title": "荒岛假期",
    "url": "./movie-0288.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧 / 悬疑 / 冒险",
    "tags": [
      "荒岛求生",
      "公司团建",
      "黑色幽默",
      "密室逃脱变种",
      "职场讽刺"
    ],
    "oneLine": "公司团建遭遇“意外”，八名员工流落荒岛，而他们很快发现——这个“荒岛”是老板花三千万打造的真人秀布景。"
  },
  {
    "title": "我就是克里斯法利",
    "url": "./movie-0289.html",
    "cover": "./139.jpg",
    "year": "2026",
    "region": "美国",
    "type": "纪录片 / 传记",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录 / 喜剧 / 伤感",
    "tags": [
      "喜剧演员",
      "自毁倾向",
      "未公开录像",
      "致敬",
      "笑声背后"
    ],
    "oneLine": "克里斯法利去世28年后，他生前藏起的一箱私人录像带曝光，里面全是他独自对着镜头哭。"
  },
  {
    "title": "与鲸共舞第一季",
    "url": "./movie-0290.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 冒险",
    "tags": [
      "海洋",
      "动物行为学",
      "自闭症"
    ],
    "oneLine": "一个失语症女孩通过水下麦克风，意外成为解码鲸鱼语言的关键钥匙。"
  },
  {
    "title": "一个布袋八个头",
    "url": "./movie-0291.html",
    "cover": "./141.jpg",
    "year": "1993",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "武侠/悬疑",
    "tags": [
      "邵氏风",
      "无厘头",
      "江湖",
      "夺宝"
    ],
    "oneLine": "江湖传言“一个布袋八个头”是绝世武功秘籍，实际上是一道菜谱——而这道菜的做法，藏着前朝宝藏的秘密。"
  },
  {
    "title": "世界：新吉普赛之王",
    "url": "./movie-0292.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "英国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录片 / 音乐 / 社会",
    "tags": [
      "吉普赛",
      "弗拉明戈",
      "生存",
      "传统与现代"
    ],
    "oneLine": "一位年轻的西班牙吉普赛说唱歌手，试图用TikTok拯救濒临灭绝的祖先语言。"
  },
  {
    "title": "汤姆与杰瑞遇见福尔摩斯",
    "url": "./movie-0293.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影 / 动画",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 喜剧 / 悬疑 / 家庭",
    "tags": [
      "汤姆和杰瑞",
      "福尔摩斯",
      "华生",
      "跨界",
      "伦敦"
    ],
    "oneLine": "贝克街221B发生失窃案，汤姆和杰瑞这对冤家，被迫与福尔摩斯和华生组成最混乱侦探团。"
  },
  {
    "title": "打击魔鬼",
    "url": "./movie-0294.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作，犯罪，黑暗",
    "tags": [
      "私刑",
      "地下世界",
      "清洁工",
      "复仇",
      "拳头"
    ],
    "oneLine": "一名患有绝症的清洁工大叔，每晚化身蒙面义警，专门打击逃脱法律制裁的恶徒，代号“魔鬼”。"
  },
  {
    "title": "红巾特攻队",
    "url": "./movie-0295.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "动作 / 悬疑",
    "tags": [
      "特种部队",
      "红色元素",
      "卧底",
      "反转"
    ],
    "oneLine": "一支佩戴红色识别带的神秘特勤小队，在执行绝密任务时发现自己竟是连环陷阱中的棋子。"
  },
  {
    "title": "莫里哀情史",
    "url": "./movie-0296.html",
    "cover": "./146.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 爱情 / 传记",
    "tags": [
      "戏剧大师",
      "禁忌之恋",
      "创作困境",
      "宫廷阴谋",
      "自我牺牲"
    ],
    "oneLine": "喜剧巨匠莫里哀为求王室资助，被迫为情妇编写颂歌，却发现自己爱上了笔下虚构的“完美女人”。"
  },
  {
    "title": "做鬼也风流",
    "url": "./movie-0297.html",
    "cover": "./147.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "鬼魂",
      "港式幽默",
      "风流才子",
      "前世今生",
      "徐克风"
    ],
    "oneLine": "风流才子死后因桃花债太多被拒入轮回，必须让三位女鬼心甘情愿说出“我愿意”才能投胎。"
  },
  {
    "title": "泣残红",
    "url": "./movie-0298.html",
    "cover": "./148.jpg",
    "year": "1934",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情/爱情",
    "tags": [
      "民国",
      "女性",
      "悲剧"
    ],
    "oneLine": "乱世歌女与报馆书生的爱情，因一桩谋杀案走向无法挽回的深渊。"
  },
  {
    "title": "所多玛的多",
    "url": "./movie-0299.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 哲学 / 惊悚",
    "tags": [
      "哲学实验",
      "极端",
      "权力游戏",
      "密室"
    ],
    "oneLine": "七个陌生人在一场洪水中被困于豪华超市，他们很快发现最稀缺的不是食物，而是“服从”。"
  },
  {
    "title": "行运一条龙",
    "url": "./movie-0300.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "醒狮非遗",
      "茶餐厅情怀",
      "中年翻身",
      "三代和解",
      "大湾区故事"
    ],
    "oneLine": "茶餐厅老板被迫关店前最后一天，意外收到一箱50年前的醒狮头，全街坊决定帮他舞最后一次龙。"
  },
  {
    "title": "春家小姐是讼师第一季",
    "url": "./movie-0301.html",
    "cover": "./1.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 律政 / 喜剧",
    "tags": [
      "女讼师",
      "大唐",
      "破局",
      "平权",
      "单元探案"
    ],
    "oneLine": "大唐永徽年间，员外家千金春荼蘼偷偷替人写状纸，第一桩案子就告到了自己的未婚夫头上。"
  },
  {
    "title": "太空学员",
    "url": "./movie-0302.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "训练营",
      "外星入侵",
      "实习生",
      "逆袭"
    ],
    "oneLine": "四个被开除的太空军校学员在参观基地时意外遭遇外星入侵，他们不得不驾驶原型机拯救地球。"
  },
  {
    "title": "少年师爷之断案传奇",
    "url": "./movie-0303.html",
    "cover": "./3.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 古装 / 儿童",
    "tags": [
      "少年神童",
      "推理",
      "水乡",
      "智斗豪强"
    ],
    "oneLine": "明朝江南水乡，十三岁的小师爷靠半部《洗冤录》，硬刚一桩牵连全城的“幽灵漕银案”。"
  },
  {
    "title": "下一个素熙",
    "url": "./movie-0304.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 悬疑",
    "tags": [
      "现实题材",
      "校园霸凌",
      "替身",
      "复仇",
      "悲剧"
    ],
    "oneLine": "素熙因校园霸凌自杀后，母亲整容成女儿的模样重返高中，她要找出逼死女儿的每一个人并让他们付出代价。"
  },
  {
    "title": "被困在外",
    "url": "./movie-0305.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": [
      "密室",
      "海外务工",
      "社会批判",
      "极限求生"
    ],
    "oneLine": "一名中国朝鲜族工人在韩国集装箱农场里醒来，发现自己被锁在里面，而温度正不断升高。"
  },
  {
    "title": "魔域之旅",
    "url": "./movie-0306.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻, 冒险",
    "tags": [
      "异世界",
      "兄妹情",
      "绘本风格"
    ],
    "oneLine": "妹妹被神秘黑影掳入画中魔域，哥哥必须依照妹妹留下的涂鸦本，在会说话的猫头鹰指引下闯关救妹。"
  },
  {
    "title": "天安门上太阳升",
    "url": "./movie-0307.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史/剧情/家庭",
    "tags": [
      "时代变迁",
      "北京",
      "非遗传承"
    ],
    "oneLine": "一个住在天安门附近的老北京家庭，从1949年到2024年，每逢国庆日都会发生一件改变命运的大事。"
  },
  {
    "title": "怪盗与剑",
    "url": "./movie-0308.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑 / 动作 / 奇幻",
    "tags": [
      "怪盗",
      "大正浪漫",
      "名侦探",
      "机关术",
      "猫耳女仆"
    ],
    "oneLine": "大正时代的东京，一名自称“黑猫”的怪盗专偷贵族赃物，却每次都留下一把神秘的古剑。"
  },
  {
    "title": "和田玉传奇",
    "url": "./movie-0309.html",
    "cover": "./9.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险, 悬疑",
    "tags": [
      "盗墓",
      "新疆",
      "宝藏"
    ],
    "oneLine": "一块失踪千年的羊脂玉牌，牵扯出丝绸之路上的三段平行时空的夺宝故事。"
  },
  {
    "title": "一兆$游戏 剧场版",
    "url": "./movie-0310.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 犯罪 / 冒险",
    "tags": [
      "高智商犯罪",
      "金钱游戏",
      "黑客对决",
      "兄弟情",
      "惊天骗局"
    ],
    "oneLine": "为了夺回被暗网财团冻结的一兆美元，两个天才 hacker 必须在一场无规则直播游戏中骗过全球 AI 监管系统。"
  },
  {
    "title": "错位恋人",
    "url": "./movie-0311.html",
    "cover": "./11.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": [
      "身体互换",
      "时间差",
      "异地恋",
      "电话线"
    ],
    "oneLine": "异地恋情侣发现每次吵架后挂断电话，两人就会互换身体，但互换的时间长度正好等于吵架时长。"
  },
  {
    "title": "星舰迷航：阿尼亚拉号",
    "url": "./movie-0312.html",
    "cover": "./12.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，灾难，哲学",
    "tags": [
      "星际移民",
      "系统故障",
      "绝望宇宙",
      "人性实验"
    ],
    "oneLine": "搭载四千名殖民者的星际飞船“阿尼亚拉号”因撞击太空垃圾偏离航线，成为没有终点的漂流坟墓。"
  },
  {
    "title": "疯狂的狮子",
    "url": "./movie-0313.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧, 动作",
    "tags": [
      "荒诞",
      "宝莱坞",
      "政治讽刺",
      "动物",
      "热血"
    ],
    "oneLine": "一头从马戏团逃出的狮子误闯国会大厦，意外揭露了一场惊天贪腐大案。"
  },
  {
    "title": "鲨与鲸",
    "url": "./movie-0314.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片, 冒险",
    "tags": [
      "海洋生态",
      "顶级掠食者",
      "自然法则",
      "震撼画面"
    ],
    "oneLine": "摄制组在南太平洋跟随一对虎鲨母子长达一年，却意外拍摄到虎鲨群与一头座头鲸之间，跨越物种的、长达数月的对峙、博弈与最终的和解。"
  },
  {
    "title": "卡斯帕和艾玛之最好的朋友",
    "url": "./movie-0315.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "挪威",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "家庭, 儿童",
    "tags": [
      "友谊",
      "宠物",
      "成长",
      "北欧童话",
      "冒险"
    ],
    "oneLine": "小女孩艾玛发现自己的玩具熊卡斯帕在月圆之夜会说话，他们要一起寻找森林里丢失的“友谊宝石”。"
  },
  {
    "title": "非道缉恶",
    "url": "./movie-0316.html",
    "cover": "./16.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 犯罪",
    "tags": [
      "卧底",
      "东南亚",
      "枪战",
      "义气"
    ],
    "oneLine": "一名中国缉毒警卧底在金三角，却发现自己逐渐分不清正义与罪恶的边界，直到他救了一个孩子。"
  },
  {
    "title": "霍比特人3:五军之战",
    "url": "./movie-0317.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻史诗",
    "tags": [
      "魔戒前传",
      "大战",
      "终极版"
    ],
    "oneLine": "重制加长版，新增40分钟未曝光片段，以4K高帧率重制，全面展现孤山脚下五军混战的每一个细节。"
  },
  {
    "title": "信蜂",
    "url": "./movie-0318.html",
    "cover": "./18.jpg",
    "year": "2016",
    "region": "日本",
    "type": "TV",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻， 剧情， 治愈",
    "tags": [
      "末日废土",
      "邮递员",
      "人工智能",
      "羁绊",
      "单元剧"
    ],
    "oneLine": "在人类退居高塔的末日世界里，一名少年信使与一只垂死的人工智能“蜜蜂”结伴送信。"
  },
  {
    "title": "一不小心吃定你",
    "url": "./movie-0319.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "美食",
      "契约恋爱",
      "甜宠",
      "反差萌",
      "治愈系"
    ],
    "oneLine": "傲娇美食家毒舌评测所有餐厅，却意外被一个小饭馆厨师的“流泪拌面”俘获了胃和心。"
  },
  {
    "title": "失业同盟大反击",
    "url": "./movie-0320.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 动作",
    "tags": [
      "黑色幽默",
      "逆袭",
      "职场复仇",
      "草根英雄"
    ],
    "oneLine": "被AI取代的五个中年人，决定用最荒诞的方式抢回属于他们的工作。"
  },
  {
    "title": "拉蜜儿",
    "url": "./movie-0321.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情， 歌舞， 奇幻",
    "tags": [
      "女神转世",
      "女性觉醒",
      "村庄",
      "祭祀",
      "史诗感"
    ],
    "oneLine": "一个被全村视为女神转世的哑女拉蜜儿，在祭祀大典上突然开口说话，预言了三天后的灭村洪水。"
  },
  {
    "title": "冰火魔厨",
    "url": "./movie-0322.html",
    "cover": "./22.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "动画/奇幻冒险",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画, 奇幻, 冒险, 美食",
    "tags": [
      "异世界",
      "烹饪",
      "魔法",
      "热血",
      "3D"
    ],
    "oneLine": "天才厨师穿越到魔法世界，发现这里的魔物食材蕴含元素之力，他决定用中华厨艺征服大陆。"
  },
  {
    "title": "绝世情圣",
    "url": "./movie-0323.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧爱情",
    "tags": [
      "浪漫喜剧",
      "巴黎",
      "谎言与真相",
      "约会高手",
      "反套路"
    ],
    "oneLine": "巴黎最著名的“情圣”接下了一个不可能的任务：帮一个社恐理工男追到自己的梦中女神。"
  },
  {
    "title": "像恋人一样",
    "url": "./movie-0324.html",
    "cover": "./24.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 爱情",
    "tags": [
      "伦理",
      "婚姻",
      "禁忌",
      "文艺"
    ],
    "oneLine": "结婚十年的丈夫雇了一个演员扮演自己，去陪伴孤独的妻子，自己却爱上了演员的女友。"
  },
  {
    "title": "神奇旅程",
    "url": "./movie-0325.html",
    "cover": "./25.jpg",
    "year": "1966",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "经典科幻",
      "人体缩小",
      "血管探险",
      "奥斯卡最佳特效"
    ],
    "oneLine": "为了拯救一位科学家的大脑，五名医生被缩小到微生物大小，注射进患者血管，展开一场惊心动魄的内脏航行。"
  },
  {
    "title": "黄海",
    "url": "./movie-0326.html",
    "cover": "./26.jpg",
    "year": "2010",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作, 犯罪, 悬疑",
    "tags": [
      "延边",
      "出租车司机",
      "黑帮",
      "暴力写实"
    ],
    "oneLine": "延边出租车司机为还债偷渡到首尔当杀手，却在目标被灭口后，发现自己成了警方与黑帮双方追杀的对象。"
  },
  {
    "title": "辣妈辣妹2",
    "url": "./movie-0327.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧奇幻",
    "tags": [
      "灵魂互换",
      "母女",
      "代沟",
      "搞笑",
      "温情"
    ],
    "oneLine": "三十年后，当年互换灵魂的母女再次互换，这次她们发现孙子也参与了进来。"
  },
  {
    "title": "如意",
    "url": "./movie-0328.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭, 文艺",
    "tags": [
      "代际冲突",
      "非遗传承",
      "女性成长",
      "温情"
    ],
    "oneLine": "叛逆的都市白领被迫回乡学习古老的织锦技艺，却在一针一线中解开了家族三十年的心结。"
  },
  {
    "title": "战地黄花分外香",
    "url": "./movie-0329.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "战争 / 爱情 / 历史",
    "tags": [
      "抗战文工团",
      "战地恋歌",
      "女性成长",
      "信仰抉择"
    ],
    "oneLine": "1940 年，上海富家千金放弃留学，加入八路军战地文工团，在炮火中歌唱并相爱。"
  },
  {
    "title": "境界线上的地平线第一季",
    "url": "./movie-0330.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻 / 战斗 / 后宫",
    "tags": [
      "轻小说改",
      "中世纪",
      "机甲",
      "超长篇"
    ],
    "oneLine": "在重奏世界崩坏的末日，所有国家被转移到了漂浮的舰岛上，为了争夺“地平线”上的历史书而战。"
  },
  {
    "title": "熊猫人",
    "url": "./movie-0331.html",
    "cover": "./31.jpg",
    "year": "2010",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "动作 / 科幻 / 偶像",
    "tags": [
      "超级英雄",
      "守护者",
      "环保主题",
      "都市传说"
    ],
    "oneLine": "2030年，一个被熊猫抚养大的科学家之子，穿着熊猫机甲，为净化被污染的城市而战。"
  },
  {
    "title": "古宁头大战",
    "url": "./movie-0332.html",
    "cover": "./32.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "金门",
      "登陆战",
      "巷战",
      "兄弟情",
      "国共"
    ],
    "oneLine": "1949年古宁头战役，一个国军排长与一个共军侦察兵，在残垣断壁中意外困于同一座碉堡。"
  },
  {
    "title": "心之山",
    "url": "./movie-0333.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "悬疑剧情",
    "tags": [
      "山村",
      "邪教",
      "心理控制",
      "失踪",
      "救赎"
    ],
    "oneLine": "心理医生进山寻找失踪的女友，却发现整个山村的人都在崇拜一座会“吃人心”的山。"
  },
  {
    "title": "我们那微不足道的落幕",
    "url": "./movie-0334.html",
    "cover": "./34.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情, 科幻, 灾难",
    "tags": [
      "末日",
      "治愈",
      "核辐射",
      "生命意义"
    ],
    "oneLine": "在宣布即将毁灭的末日世界里，一个厌世的上班族和一个绝症女孩，用最后的时光寻找一只传说中的蝴蝶。"
  },
  {
    "title": "比基尼特工",
    "url": "./movie-0335.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 喜剧",
    "tags": [
      "海滩卧底",
      "辣妹特工",
      "反套路喜剧",
      "比基尼大战",
      "无厘头装备"
    ],
    "oneLine": "三位顶级女特工被派往迈阿密海滩卧底泳装秀，任务目标：从黑帮手中抢回一枚藏在比基尼里的灭世芯片。"
  },
  {
    "title": "美丽的南方",
    "url": "./movie-0336.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭、生活",
    "tags": [
      "返乡",
      "代际冲突",
      "田园治愈",
      "女性成长"
    ],
    "oneLine": "一个城市女孩被迫回到南方农村老家，接手即将倒闭的家族果园，却发现更大的秘密。"
  },
  {
    "title": "女校春色",
    "url": "./movie-0337.html",
    "cover": "./37.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "爱情 / 青春",
    "tags": [
      "女子高中",
      "初恋",
      "校园"
    ],
    "oneLine": "1980年代保守女校里，两个女孩用一封封藏在校服里的情书，写下了一段无人知晓的禁忌恋曲。"
  },
  {
    "title": "快递人生",
    "url": "./movie-0338.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 现实",
    "tags": [
      "外卖骑手",
      "城市折叠",
      "底层视角",
      "公路叙事",
      "生存压力"
    ],
    "oneLine": "一个订单超时的快递员，在最后40分钟里跑完了自己的一生。"
  },
  {
    "title": "直至魔女消逝",
    "url": "./movie-0339.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻 / 悬疑",
    "tags": [
      "魔女审判",
      "中世纪",
      "女性群像",
      "暗黑童话"
    ],
    "oneLine": "小镇每七年就要处死一名“魔女”，但这一年的被告们忽然发现——她们真的会魔法。"
  },
  {
    "title": "命运之石",
    "url": "./movie-0340.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "冒险 / 史诗 / 奇幻",
    "tags": [
      "亚瑟王",
      "考古",
      "寻宝",
      "苏格兰"
    ],
    "oneLine": "一名不信鬼神的考古学家在斯昆石上发现了北欧神话的诅咒，为了活命，他必须重演亚瑟王的传奇。"
  },
  {
    "title": "布努埃尔在海龟的迷宫",
    "url": "./movie-0341.html",
    "cover": "./41.jpg",
    "year": "2022",
    "region": "西班牙, 墨西哥",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "传记, 超现实主义",
    "tags": [
      "导演",
      "梦境",
      "艺术片",
      "幽灵"
    ],
    "oneLine": "超现实主义电影大师布努埃尔在拍摄一部纪录片时，发现自己被困在了海龟壳纹路构成的迷宫里。"
  },
  {
    "title": "异形3",
    "url": "./movie-0342.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻、恐怖、惊悚",
    "tags": [
      "太空监狱",
      "寄生",
      "宗教隐喻",
      "唯一幸存者"
    ],
    "oneLine": "雷普莉的逃生舱坠毁在一座太空垃圾监狱，一个异形卵也随之降落，罪犯与信徒迎来信仰的审判。"
  },
  {
    "title": "龙潭虎穴",
    "url": "./movie-0343.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作",
    "tags": [
      "卧底",
      "黑帮枪战",
      "兄弟反目",
      "边缘人",
      "硬核武打"
    ],
    "oneLine": "卧底警察潜入黑帮后发现，自己失散多年的亲弟弟竟是老大的头号杀手。"
  },
  {
    "title": "回头爱上你",
    "url": "./movie-0344.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧 (30集)",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 重生 / 都市",
    "tags": [
      "时间循环",
      "自我救赎",
      "追妻火葬场"
    ],
    "oneLine": "渣男总裁在未婚妻坠楼那天陷入时间循环，每次回头都看到不同的真相，直到第99次他选择和她一起跳。"
  },
  {
    "title": "窥机警探侦查事件",
    "url": "./movie-0345.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑 / 犯罪 / 刑侦",
    "tags": [
      "监控追踪",
      "网络犯罪",
      "黑客警探",
      "社会派推理",
      "硬核刑侦"
    ],
    "oneLine": "一个因伤转做“监控分析员”的前重案组警探，通过城市里的每一台摄像头，追捕一个从不留下物理痕迹的网络幽灵杀手。"
  },
  {
    "title": "哥特捕猎",
    "url": "./movie-0346.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "英国 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖 / 奇幻 / 冒险",
    "tags": [
      "维多利亚时代",
      "怪物猎人",
      "维多利亚哥特",
      "黑暗童话"
    ],
    "oneLine": "维多利亚时代的伦敦，一位被教会放逐的女猎人，必须在月圆之夜的“大捕猎”中，猎杀十二只童话里逃出的怪物。"
  },
  {
    "title": "孤独的父亲",
    "url": "./movie-0347.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，家庭，悬疑",
    "tags": [
      "阿尔兹海默",
      "时空错乱",
      "亲情",
      "催泪"
    ],
    "oneLine": "患有阿尔兹海默症的父亲，记忆永远困在儿子八岁那年走丢的雨天，他每天都在同一个路口等儿子回来。"
  },
  {
    "title": "香闺幽怨",
    "url": "./movie-0348.html",
    "cover": "./48.jpg",
    "year": "1967",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 爱情 / 心理",
    "tags": [
      "深闺",
      "压抑",
      "偷窥",
      "暗恋",
      "旗袍"
    ],
    "oneLine": "深宅大院里，年轻姨太每晚对着镜子倾诉，却发现墙上的画像每天都在改变表情。"
  },
  {
    "title": "黑暗军团",
    "url": "./movie-0349.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "秘密组织",
      "基因改造",
      "反乌托邦",
      "近未来",
      "小分队作战"
    ],
    "oneLine": "退役特种兵被征召进一个名为“黑暗军团”的秘密部队，却发现他们要消灭的怪物，全是军团的失败试验品。"
  },
  {
    "title": "男人玩的游戏",
    "url": "./movie-0350.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "财阀",
      "暗网",
      "赌博",
      "复仇"
    ],
    "oneLine": "一个走投无路的失业者报名参加了一场神秘游戏，赢家可得100亿韩元，但他很快发现这是在赌命。"
  },
  {
    "title": "时尚女郎之女人江湖",
    "url": "./movie-0351.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 职场",
    "tags": [
      "时尚圈",
      "职场斗争",
      "女性成长",
      "逆袭"
    ],
    "oneLine": "毫无背景的菜鸟助理误入顶级时尚杂志社，在明争暗斗的“女人江湖”中杀出一条血路。"
  },
  {
    "title": "狂欢三宝电影:娃克的愿望",
    "url": "./movie-0352.html",
    "cover": "./52.jpg",
    "year": "1999",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 喜剧, 家庭",
    "tags": [
      "经典动画",
      "无厘头喜剧",
      "荒诞愿望",
      "第四面墙",
      "90年代怀旧"
    ],
    "oneLine": "狂欢三宝中的娃克捡到一盏神灯，许愿“要更多狂欢”，结果整个宇宙都变成了闹剧。"
  },
  {
    "title": "放手的勇气",
    "url": "./movie-0353.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "临终关怀",
      "母女和解",
      "断舍离",
      "催泪",
      "本土温情"
    ],
    "oneLine": "患有囤积癖的母亲确诊绝症后，要求女儿在她死前清空整栋老宅，每扔一件东西，就撕开一道旧伤疤。"
  },
  {
    "title": "法国皇后玛丽·安东妮",
    "url": "./movie-0354.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史, 传记",
    "tags": [
      "宫廷",
      "女性视角",
      "奢侈"
    ],
    "oneLine": "聚焦玛丽·安东妮从奥地利小公主到断头皇后的传奇一生，撕掉“赤字夫人”的刻板标签。"
  },
  {
    "title": "微不足道的人们",
    "url": "./movie-0355.html",
    "cover": "./55.jpg",
    "year": "2004",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 奇幻",
    "tags": [
      "存在主义",
      "小人国",
      "讽刺",
      "职场",
      "黑色幽默"
    ],
    "oneLine": "在一家巨型跨国公司里，一群被当作“人体零件”使用的微缩人类清洁工，策划了一场改变世界的逃跑计划。"
  },
  {
    "title": "窒爱诊疗室",
    "url": "./movie-0356.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "心理咨询",
      "密室",
      "控制",
      "反转",
      "女性"
    ],
    "oneLine": "六名女性进入一家封闭心理诊疗室治疗亲密关系恐惧，却发现咨询师在暗中记录她们的恐惧，用作直播素材。"
  },
  {
    "title": "关于你的想法",
    "url": "./movie-0357.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 爱情 / 音乐",
    "tags": [
      "姐弟恋",
      "偶像",
      "单亲妈妈",
      "夏季",
      "治愈"
    ],
    "oneLine": "40岁的单亲妈妈陪女儿参加音乐节，意外与当红男子乐队的年轻主唱陷入热恋。"
  },
  {
    "title": "飞女正传",
    "url": "./movie-0358.html",
    "cover": "./58.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 爱情",
    "tags": [
      "古惑女",
      "姐妹情",
      "江湖"
    ],
    "oneLine": "六十年代的九龙城寨，一个大家闺秀为了寻找失踪的妹妹，被迫成为江湖上最狠的女飞女。"
  },
  {
    "title": "赌城回忆录",
    "url": "./movie-0359.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国澳门 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "叠码仔",
      "纸醉金迷",
      "宿命轮回"
    ],
    "oneLine": "在澳门赌场当了十年叠码仔的他以为看透了人性，直到赌桌上坐着的，是二十年前抛弃他的亲生女儿。"
  },
  {
    "title": "奇幻人间世粤语",
    "url": "./movie-0360.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "奇幻, 古装, 爱情",
    "tags": [
      "粤语原声",
      "蛇妖传说",
      "白蛇传改编"
    ],
    "oneLine": "青蛇和黑蛇修炼千年化为人形来到现代香港，开了一家凉茶铺，暗中行侠仗义。"
  },
  {
    "title": "穿警服的那些女孩儿",
    "url": "./movie-0361.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 职业",
    "tags": [
      "女警",
      "特警",
      "成长",
      "群像",
      "行业剧"
    ],
    "oneLine": "六个刚刚通过招警考试的女孩，从被全队嫌弃的菜鸟，成长为特警支队第一支全女子突击队的故事。"
  },
  {
    "title": "猩红诊所",
    "url": "./movie-0362.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 悬疑 / 心理",
    "tags": [
      "地下诊所",
      "怪病",
      "人体实验",
      "密室"
    ],
    "oneLine": "一家只接待绝症患者的诊所，承诺治愈，实则将病人制成活体标本。"
  },
  {
    "title": "最初的晚餐",
    "url": "./movie-0363.html",
    "cover": "./63.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情，家庭",
    "tags": [
      "料理",
      "回忆",
      "生死",
      "和解"
    ],
    "oneLine": "父亲去世后，兄妹三人重做二十年前那顿散伙饭，每道菜都揭开一个家族秘密。"
  },
  {
    "title": "我破碎的真理子",
    "url": "./movie-0364.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 青春",
    "tags": [
      "女性友谊",
      "自杀",
      "治愈",
      "公路片"
    ],
    "oneLine": "闺蜜跳楼自杀了，她决定偷走骨灰盒，完成两人曾经约定却从未出发的旅行。"
  },
  {
    "title": "能召回前世的布米叔叔",
    "url": "./movie-0365.html",
    "cover": "./65.jpg",
    "year": "2021",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 奇幻",
    "tags": [
      "轮回",
      "记忆",
      "家庭秘密",
      "超自然"
    ],
    "oneLine": "患癌的布米叔叔意外获得召回前世的能力，却在片段记忆中发现了家族三代人守护的黑暗秘密。"
  },
  {
    "title": "童是加沙沦落人",
    "url": "./movie-0366.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "巴勒斯坦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "战争剧情",
    "tags": [
      "儿童",
      "战争",
      "纪实风格",
      "生存"
    ],
    "oneLine": "加沙地带一个十岁男孩，在失去所有家人后，独自穿过废墟寻找已经三岁的妹妹——他知道妹妹被埋在哪个房间下面。"
  },
  {
    "title": "冤鬼再见",
    "url": "./movie-0367.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "恐怖, 喜剧, 同性",
    "tags": [
      "都市传说",
      "驱魔",
      "灵异直播",
      "搞笑"
    ],
    "oneLine": "一个能看到鬼的网红主播，在直播驱魔时撞上了生前是法学博士的冤鬼，反被鬼告上了阴间法庭。"
  },
  {
    "title": "肉欲的42街",
    "url": "./movie-0368.html",
    "cover": "./68.jpg",
    "year": "1977",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 情色, 犯罪",
    "tags": [
      "地下电影",
      "黑色电影",
      "时代烙印"
    ],
    "oneLine": "纽约42街的红灯区里，三名站街女郎试图通过一场谋杀案逃离皮条客的控制。"
  },
  {
    "title": "自然光线",
    "url": "./movie-0369.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "匈牙利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "东线",
      "游击队",
      "黑白摄影",
      "人性"
    ],
    "oneLine": "1943年乌克兰丛林，一群匈牙利游击队员抓获了一名疑似苏联女间谍，但她的眼神比雪更冷。"
  },
  {
    "title": "沙漠里的遗产",
    "url": "./movie-0370.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中东 (阿联酋)",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 家庭",
    "tags": [
      "父女",
      "传统与现代",
      "遗产",
      "沙漠"
    ],
    "oneLine": "一名迪拜女律师回到沙漠深处的老家，发现父亲留给她的遗产不是钱，是一口快要干涸的古井。"
  },
  {
    "title": "双腿之间",
    "url": "./movie-0371.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "法国 / 意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "情色 / 剧情 / 惊悚",
    "tags": [
      "出轨",
      "心理博弈",
      "蛇蝎美人",
      "中产危机",
      "反转"
    ],
    "oneLine": "一本正经的银行家爱上了儿子的未婚妻，两人在偷情中互相试探，却发现对方的真实身份远比自己想象的更危险。"
  },
  {
    "title": "气盖山河",
    "url": "./movie-0372.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史，战争，史诗",
    "tags": [
      "古代战争",
      "民族精神",
      "热血守城",
      "冷兵器美学"
    ],
    "oneLine": "唐朝安西都护府最后一支孤军，面对十万吐蕃大军死守西域孤城，寸土不让。"
  },
  {
    "title": "珍妮的战争",
    "url": "./movie-0373.html",
    "cover": "./73.jpg",
    "year": "2014",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 战争, 传记",
    "tags": [
      "二战",
      "女记者",
      "真相",
      "照片",
      "牺牲"
    ],
    "oneLine": "二战女记者珍妮冒死潜入纳粹占领区，拍下改变舆论的那张“哭泣的男孩”照片，代价是失去爱人。"
  },
  {
    "title": "我的父亲被谋杀",
    "url": "./movie-0374.html",
    "cover": "./74.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "反转不断",
      "家族秘密",
      "复仇"
    ],
    "oneLine": "父亲葬礼当晚，儿子收到录像带显示：凶手就在前来吊唁的亲属之中。"
  },
  {
    "title": "神探修尔之洛桐的神秘力量",
    "url": "./movie-0375.html",
    "cover": "./75.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑, 奇幻, 推理",
    "tags": [
      "异能破案",
      "双男主",
      "通灵",
      "单元剧"
    ],
    "oneLine": "神探修尔之的搭档洛桐能“触摸过去”，两人联手侦破用常理无法解释的连环谜案。"
  },
  {
    "title": "听音剑",
    "url": "./movie-0376.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "武侠 / 悬疑 / 动作",
    "tags": [
      "盲剑客",
      "以声换命",
      "江湖追杀令"
    ],
    "oneLine": "盲剑客沈听雨能以耳代目，却在一场刺杀中听到了自己三十年前的剑鸣。"
  },
  {
    "title": "新欢乐满堂",
    "url": "./movie-0377.html",
    "cover": "./77.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 家庭",
    "tags": [
      "重组家庭",
      "直播",
      "整蛊"
    ],
    "oneLine": "十八个来自不同国家、不同肤色的兄弟姐妹，为了拆散即将结婚的父母，发起了全网直播的整蛊大作战。"
  },
  {
    "title": "离别",
    "url": "./movie-0378.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情，家庭，文艺",
    "tags": [
      "丧葬文化",
      "治愈催泪",
      "人生哲理",
      "演技炸裂"
    ],
    "oneLine": "离异多年的父亲去世，三兄妹在守灵夜被迫共处一室，却发现各自对父亲的记忆拼凑出了三个完全不同的男人。"
  },
  {
    "title": "大唐小吃货2",
    "url": "./movie-0379.html",
    "cover": "./79.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧，爱情，古装",
    "tags": [
      "美食",
      "穿越",
      "甜宠",
      "经商"
    ],
    "oneLine": "现代女厨神穿越回唐朝，开起网红小吃店，却遇到了一个总想查封她的“美食恶霸”。"
  },
  {
    "title": "镀金盛夏第一季",
    "url": "./movie-0380.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "美国",
    "type": "TV剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 悬疑 / 惊悚",
    "tags": [
      "富人岛",
      "度假惨案",
      "阶层对立"
    ],
    "oneLine": "美国最顶级的私人避暑岛屿，一个服务员之死撕开了富豪们伪善的镀金面具。"
  },
  {
    "title": "亚当斯一家的价值观",
    "url": "./movie-0381.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画",
    "tags": [
      "哥特",
      "黑色幽默",
      "家庭",
      "价值观冲突",
      "搞笑"
    ],
    "oneLine": "哥特家族亚当斯一家搬到“完美”社区，为了捍卫自己病态的价值观，与邻居们开战。"
  },
  {
    "title": "月亮与蛋糕",
    "url": "./movie-0382.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭",
    "tags": [
      "再婚家庭",
      "养育",
      "日常",
      "温情"
    ],
    "oneLine": "两个离异的中年人带着各自的孩子重组家庭，日子像月亮阴晴圆缺，像蛋糕甜中带腻。"
  },
  {
    "title": "史酷比4：湖怪的诅咒",
    "url": "./movie-0383.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧、悬疑、动画",
    "tags": [
      "侦探",
      "怪物",
      "怀旧",
      "青少年"
    ],
    "oneLine": "神秘公司收到来自中国千岛湖的求救信，一只会唱越剧的水怪正在吓跑所有游客。"
  },
  {
    "title": "今日女子",
    "url": "./movie-0384.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 年代",
    "tags": [
      "女性群像",
      "时代浪潮",
      "三代女性",
      "改革开放",
      "觉醒"
    ],
    "oneLine": "从1979到2024，一家三代女性的除夕夜对话，撕开了中国女性从不被看见的隐痛与光芒。"
  },
  {
    "title": "蕾拉",
    "url": "./movie-0385.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": [
      "女性复仇",
      "伊斯坦布尔",
      "记忆拼图",
      "双面人生",
      "家族诅咒"
    ],
    "oneLine": "一个自称“蕾拉”的女人出现在伊斯坦布尔的上流社会晚宴上，而她的脸，与五年前自杀的富豪千金一模一样。"
  },
  {
    "title": "突如其来埃及神",
    "url": "./movie-0386.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "神话恶搞",
      "日常番",
      "反差萌",
      "沙雕"
    ],
    "oneLine": "太阳神拉突然降职到现代东京一家便利店打工，还欠了店长一堆债。"
  },
  {
    "title": "山村老尸3：恶灵缠身",
    "url": "./movie-0387.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "山村",
      "粤剧",
      "还魂",
      "家族诅咒",
      "民俗恐怖"
    ],
    "oneLine": "荒废粤剧团的最后一名成员自杀后，山村每晚响起锣鼓声，活着的人会在梦里被“点妆”。"
  },
  {
    "title": "怪兽上班第一季",
    "url": "./movie-0388.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画",
    "tags": [
      "怪兽电力公司",
      "职场",
      "新能源",
      "笑声"
    ],
    "oneLine": "惊吓专员失业后集体转行，用孩子们的“尬笑”为怪兽城发电，职场内卷更吓人。"
  },
  {
    "title": "战火劫难",
    "url": "./movie-0389.html",
    "cover": "./89.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "抗日战争",
      "慰安妇",
      "伤痕",
      "民间记忆",
      "女性苦难"
    ],
    "oneLine": "抗战胜利六十年后，一位老妇临死前终于开口，讲述了自己十二岁时被日军掳走的那段黑暗岁月。"
  },
  {
    "title": "伴你到永远",
    "url": "./movie-0390.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 奇幻",
    "tags": [
      "绝症",
      "记忆移植",
      "催泪",
      "治愈",
      "生死"
    ],
    "oneLine": "绝症妻子死后将记忆移植给AI，三年后男友要结婚了，AI却在婚礼当天开口说话。"
  },
  {
    "title": "极速舰艇",
    "url": "./movie-0391.html",
    "cover": "./91.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 惊悚",
    "tags": [
      "海战",
      "恐怖分子",
      "高科技",
      "爆炸"
    ],
    "oneLine": "一伙恐怖分子劫持了最新型的隐形战舰，一个被开除的海军陆战队员成了唯一的希望。"
  },
  {
    "title": "国际机场",
    "url": "./movie-0392.html",
    "cover": "./92.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作/惊悚/灾难",
    "tags": [
      "机场劫持",
      "人质危机",
      "限时拆弹",
      "群像叙事"
    ],
    "oneLine": "全美最大的国际机场被恐怖分子接管，三架满载乘客的飞机无法降落，燃料只剩90分钟。"
  },
  {
    "title": "拆局专家粤语",
    "url": "./movie-0393.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "谈判专家",
      "危机处理",
      "粤语原声",
      "职业剧"
    ],
    "oneLine": "一个专门为黑道白道“拆局”的神秘组织，用智谋而非暴力解决天价纠纷。"
  },
  {
    "title": "西区故事1961",
    "url": "./movie-0394.html",
    "cover": "./94.jpg",
    "year": "1961",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情, 犯罪, 歌舞",
    "tags": [
      "百老汇",
      "帮派",
      "罗密欧与朱丽叶",
      "种族",
      "经典",
      "伯恩斯坦"
    ],
    "oneLine": "纽约西区，白人的“火箭帮”与波多黎各“鲨鱼帮”争斗中，一对分属敌对的男女一见钟情。"
  },
  {
    "title": "我绑架了我的老板",
    "url": "./movie-0395.html",
    "cover": "./95.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 犯罪",
    "tags": [
      "职场",
      "报复",
      "黑色幽默",
      "反套路"
    ],
    "oneLine": "被开除当天，我本想绑架老板泄愤，结果发现他也正在被真正的绑匪追杀。"
  },
  {
    "title": "狂热复仇",
    "url": "./movie-0396.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作 / 惊悚",
    "tags": [
      "复仇",
      "高智商",
      "冷静",
      "反转",
      "人性"
    ],
    "oneLine": "一个母亲为女复仇，她不用暴力，而是用法律、金融和心理学，让仇人自己走向毁灭。"
  },
  {
    "title": "帕坦",
    "url": "./movie-0397.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作 / 惊悚",
    "tags": [
      "间谍",
      "宝莱坞",
      "肌肉硬汉",
      "逆天神操作"
    ],
    "oneLine": "一名被俘的印度特工与死对头的巴基斯坦间谍不得不联手，对抗共同的影子组织。"
  },
  {
    "title": "欢喜冤家欢喜缘",
    "url": "./movie-0398.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "欢喜冤家",
      "姻缘神",
      "都市",
      "互换身体",
      "搞笑"
    ],
    "oneLine": "一名离婚律师和一名婚礼策划师，因为得罪了月老，被迫绑定姻缘符，一靠近就会互换身体。"
  },
  {
    "title": "致命密室2018",
    "url": "./movie-0399.html",
    "cover": "./99.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑 / 恐怖",
    "tags": [
      "暴风雪山庄",
      "心理压迫",
      "游戏化死亡"
    ],
    "oneLine": "六名收到神秘邀请的网红被困智能豪宅，每解开一道谜题就有一人死得更快。"
  },
  {
    "title": "探戈，加德尔的放逐",
    "url": "./movie-0400.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 音乐 / 传记",
    "tags": [
      "探戈",
      "流亡",
      "音乐家",
      "黑白影像",
      "乡愁"
    ],
    "oneLine": "“探戈之王”加德尔离奇坠机去世后，他的灵魂徘徊在布宜诺斯艾利斯的街头，目睹着自己的音乐如何被世界放逐又捧上神坛。"
  },
  {
    "title": "他们不用黑领带",
    "url": "./movie-0401.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 政治",
    "tags": [
      "工会运动",
      "工人阶级",
      "意大利政治",
      "现实主义",
      "历史改编"
    ],
    "oneLine": "六十年代都灵菲亚特工厂，工人拒绝戴象征驯服的黑领带，用一场静坐改写意大利劳工史。"
  },
  {
    "title": "好运的磨坊",
    "url": "./movie-0402.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "德国",
    "type": "动画短片",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "童话 / 家庭 / 奇幻",
    "tags": [
      "磨坊",
      "幸运",
      "动物朋友",
      "诚信",
      "德国童话"
    ],
    "oneLine": "一座老磨坊能给人带来好运，但条件是磨坊主必须永远说真话。"
  },
  {
    "title": "甜蜜的事",
    "url": "./movie-0403.html",
    "cover": "./103.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情， 家庭",
    "tags": [
      "童年",
      "贫困",
      "父女",
      "成长"
    ],
    "oneLine": "一对小姐妹在母亲离开后，试图帮整日酗酒的父亲重新学会“如何快乐”。"
  },
  {
    "title": "照片中的谋杀案",
    "url": "./movie-0404.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑， 犯罪， 剧情",
    "tags": [
      "复古胶片",
      "陈年旧案",
      "连环杀手",
      "反转"
    ],
    "oneLine": "一个摄影爱好者在地摊买到了一箱旧胶卷，冲洗出来后，发现照片记录了过去三十年间每一起未破谋杀案的现场。"
  },
  {
    "title": "复制闪灵娇妻",
    "url": "./movie-0405.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻惊悚",
    "tags": [
      "克隆人",
      "恐怖片致敬",
      "婚姻困境",
      "精神控制"
    ],
    "oneLine": "丈夫买回一个克隆妻子，但她不仅完美，还开始重演《闪灵》里的恐怖桥段。"
  },
  {
    "title": "同学来了",
    "url": "./movie-0406.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧, 校园, 青春",
    "tags": [
      "同学会",
      "谎言崩塌",
      "怀旧",
      "多线叙事"
    ],
    "oneLine": "一场毕业二十年的同学会，四个老同学轮流吹牛，却把各自的人生都吹进了死胡同。"
  },
  {
    "title": "静待黎明粤语",
    "url": "./movie-0407.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情, 历史",
    "tags": [
      "女性",
      "市井",
      "粤语",
      "传承"
    ],
    "oneLine": "1980年代香港庙街，四个被命运抛弃的女人守护着一家即将被拆迁的凉茶铺，等待一个永远不会实现的诺言。"
  },
  {
    "title": "黑夜煞星",
    "url": "./movie-0408.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 奇幻",
    "tags": [
      "降头",
      "警匪",
      "午夜"
    ],
    "oneLine": "香港重案组警司身中诡异降头，每到子时便煞星附体化身嗜血修罗，而他追杀的目标竟是身为警察的自己。"
  },
  {
    "title": "埃丽卡",
    "url": "./movie-0409.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "心理扭曲",
      "寄宿家庭",
      "谎言",
      "复仇"
    ],
    "oneLine": "温柔善良的寄养少女埃丽卡，在杀死养父母后平静地报警，她说：“我只是让他们永远闭嘴而已。”"
  },
  {
    "title": "梦幻奇石",
    "url": "./movie-0410.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻， 冒险， 家庭",
    "tags": [
      "陨石",
      "许愿",
      "童真"
    ],
    "oneLine": "男孩捡到一块能让人进入他人梦境的奇石，他决定潜入植物人哥哥的梦里，带他回家。"
  },
  {
    "title": "蒸气室",
    "url": "./movie-0411.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "芬兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚 / 奇幻",
    "tags": [
      "桑拿",
      "北欧神话",
      "密闭空间",
      "心理"
    ],
    "oneLine": "三个男人进入芬兰传统的烟熏桑拿室，在高温和黑暗中，他们内心的罪恶化为了实体，开始一个接一个地消失。"
  },
  {
    "title": "星际特工瓦雷诺：千星之城",
    "url": "./movie-0412.html",
    "cover": "./112.jpg",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 冒险",
    "tags": [
      "太空歌剧",
      "外星种族",
      "视觉奇观",
      "搭档"
    ],
    "oneLine": "28世纪的特工瓦雷诺奉命抓捕一只能瞬间复制万物的外星“复制者”，却揭开了宇宙的惊天阴谋。"
  },
  {
    "title": "紧急呼救第一季",
    "url": "./movie-0413.html",
    "cover": "./113.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情、动作、灾难",
    "tags": [
      "911",
      "救援",
      "职业剧",
      "单元剧",
      "情感"
    ],
    "oneLine": "洛杉矶911接线员、消防员和警察的日常，每一通电话背后都是一个生死攸关的故事。"
  },
  {
    "title": "战国天堂 极",
    "url": "./movie-0414.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "历史 / 动作 / 奇幻",
    "tags": [
      "穿越",
      "武将",
      "热血"
    ],
    "oneLine": "六名现代高中生被扔进本能寺之变前夜，他们唯一的武器是对历史的倒背如流。"
  },
  {
    "title": "五尾狐",
    "url": "./movie-0415.html",
    "cover": "./115.jpg",
    "year": "2008",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "korea",
    "genre": "动画，奇幻，剧情",
    "tags": [
      "神话改编",
      "人类与妖",
      "牺牲",
      "催泪"
    ],
    "oneLine": "修炼了五百年的小狐狸优比，为了变成人形，必须在百日内得到一个人类的真爱之吻。"
  },
  {
    "title": "热带复眼",
    "url": "./movie-0416.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "泰国 / 中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "悬疑, 奇幻, 剧情",
    "tags": [
      "多视角",
      "非线性叙事",
      "记忆",
      "热带",
      "灵异"
    ],
    "oneLine": "七个人在曼谷旅馆醒来，每个人都以为自己是被害者，其实每个人都是加害者。"
  },
  {
    "title": "黑森灵",
    "url": "./movie-0417.html",
    "cover": "./117.jpg",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "森林",
      "邪教",
      "民俗",
      "窒息感"
    ],
    "oneLine": "四名徒步者闯入瑞典原始森林，触犯了古老的“森林神”禁忌，他们开始一个接一个地变成树木。"
  },
  {
    "title": "四戒",
    "url": "./movie-0418.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、犯罪、黑色",
    "tags": [
      "官场现形记",
      "贪嗔痴慢疑",
      "多线叙事",
      "黑色幽默"
    ],
    "oneLine": "一尊明代金佛引发的血案，牵扯出四个戒律崩坏的“成功人士”。"
  },
  {
    "title": "夕阳天使",
    "url": "./movie-0419.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国香港/法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作， 女性， 悬疑",
    "tags": [
      "杀手",
      "姐妹情",
      "欧洲黑帮"
    ],
    "oneLine": "退休的亚洲女杀手在法国小镇隐姓埋名，直到养女被卷入一场黑帮追杀。"
  },
  {
    "title": "家有囍事",
    "url": "./movie-0420.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧、贺岁、家庭",
    "tags": [
      "翻拍",
      "全家福",
      "明星",
      "笑料"
    ],
    "oneLine": "新版《家有囍事》，三兄弟为了继承爷爷的巨额遗产，必须在除夕夜前全部结婚。"
  },
  {
    "title": "警匪较量珠三角",
    "url": "./movie-0421.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "刑侦 / 动作 / 悬疑",
    "tags": [
      "内地警匪",
      "黑吃黑",
      "卧底",
      "广式犯罪",
      "跨省追捕"
    ],
    "oneLine": "一名佛山刑警伪装成货车司机潜入走私团伙，却发现自己的亲弟弟正是团伙二把手，而弟弟的真实身份竟是警方卧底。"
  },
  {
    "title": "危险上路",
    "url": "./movie-0422.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 公路",
    "tags": [
      "顺风车",
      "黑吃黑",
      "阿尔卑斯山",
      "密闭空间",
      "反转"
    ],
    "oneLine": "一个搭便车的女人、一个运货的司机、一个藏在后备箱里的尸袋，在三万英尺的阿尔卑斯山隘口，谁先露出破绽谁就死。"
  },
  {
    "title": "娘家的故事之爱的代价",
    "url": "./movie-0423.html",
    "cover": "./123.jpg",
    "year": "2012",
    "region": "中国大陆 / 台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭 / 伦理",
    "tags": [
      "婆媳",
      "出轨",
      "复仇",
      "女性成长"
    ],
    "oneLine": "全职太太发现丈夫出轨后，被娘家逼着原谅，她却偷偷考了律师证要争回一切。"
  },
  {
    "title": "战争与和平3：1812年",
    "url": "./movie-0424.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "史诗巨制",
      "拿破仑战争",
      "俄国烧毁莫斯科",
      "贵族命运",
      "宏大场面"
    ],
    "oneLine": "拿破仑大军压境莫斯科，三位贵族青年在焦土与严寒中，用爱情与鲜血重新定义“活下去”。"
  },
  {
    "title": "吊桥上的秘密",
    "url": "./movie-0425.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚 / 爱情",
    "tags": [
      "心理",
      "吊桥效应",
      "谎言",
      "婚姻",
      "反转"
    ],
    "oneLine": "一对情侣在摇晃的吊桥上相遇并闪电结婚，一年后妻子发现，丈夫是当年把她初恋推下悬崖的真凶。"
  },
  {
    "title": "亚历克西纳之谜",
    "url": "./movie-0426.html",
    "cover": "./126.jpg",
    "year": "2027",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑， 科幻",
    "tags": [
      "冷战",
      "失忆",
      "克隆"
    ],
    "oneLine": "从太空返回的女宇航员忘记了所有物理知识，却突然能听懂鲸鱼的歌声。"
  },
  {
    "title": "亲爱的约翰",
    "url": "./movie-0427.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情, 剧情, 战争",
    "tags": [
      "书信爱情",
      "等待",
      "抉择",
      "催泪"
    ],
    "oneLine": "他和她用书信相爱了七年，他回国那天，她嫁给了另一个人。"
  },
  {
    "title": "彼特和万迪",
    "url": "./movie-0428.html",
    "cover": "./128.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 喜剧",
    "tags": [
      "公路电影",
      "友情",
      "自我救赎",
      "黑色幽默"
    ],
    "oneLine": "破产兄弟偷了一辆灵车，却意外发现后备箱里藏着一份遗嘱和一只会说人话的鹦鹉。"
  },
  {
    "title": "新爱情杀手",
    "url": "./movie-0429.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情 / 动作 / 犯罪",
    "tags": [
      "杀手男主",
      "虐恋",
      "泰式狗血",
      "反转"
    ],
    "oneLine": "一名职业杀手在执行任务时救下了目标的情妇，两人相爱后却发现她的真实身份是警方卧底。"
  },
  {
    "title": "白夜侠",
    "url": "./movie-0430.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "武侠，动作",
    "tags": [
      "民国",
      "复仇",
      "真功夫",
      "孤胆英雄",
      "暗黑美学"
    ],
    "oneLine": "民国奇侠白夜独闯黑龙会，用一双铁拳揭开一场横跨十年的血海深仇。"
  },
  {
    "title": "死亡之床",
    "url": "./movie-0431.html",
    "cover": "./131.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖情色",
    "tags": [
      "诅咒家具",
      "性隐喻",
      "哥特",
      "身体恐怖"
    ],
    "oneLine": "新婚少妇继承了一张古董床，每晚入睡后她会被床吞噬一个前任情人，而床垫里传出13个男人的心跳声。"
  },
  {
    "title": "游行",
    "url": "./movie-0432.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情，家庭",
    "tags": [
      "地方祭典",
      "父子和解",
      "小镇衰退"
    ],
    "oneLine": "东京返乡的儿子发现父亲伪造了整条游行的观众，只为让他看到“小镇还活着”。"
  },
  {
    "title": "沉睡的男人",
    "url": "./movie-0433.html",
    "cover": "./133.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑, 剧情, 惊悚",
    "tags": [
      "植物人",
      "意识觉醒",
      "家产争夺",
      "无声复仇"
    ],
    "oneLine": "财阀长子车祸后陷入沉睡，意识却漂浮在病房内，目睹了亲人对他家产的残忍算计。"
  },
  {
    "title": "整容天后",
    "url": "./movie-0434.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 科幻 / 惊悚",
    "tags": [
      "人工美貌",
      "娱乐圈",
      "身体改造",
      "存在主义"
    ],
    "oneLine": "2050年，过气女演员通过“可替换皮肤”技术每天换脸，最终忘了自己原本长什么样。"
  },
  {
    "title": "天山雪",
    "url": "./movie-0435.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 冒险 / 历史",
    "tags": [
      "丝绸之路",
      "寻根之旅",
      "祖孙情",
      "雪域奇观"
    ],
    "oneLine": "为完成爷爷遗愿，叛逆少年带着一捧“天山雪”种子，踏上横穿沙漠与冰峰的死亡之路。"
  },
  {
    "title": "致我们终将到来的爱情",
    "url": "./movie-0436.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 剧情 / 奇幻",
    "tags": [
      "穿越",
      "自我救赎",
      "平行时空",
      "催泪"
    ],
    "oneLine": "婚礼当天被未婚夫抛弃的剩女江小湖，意外获得了十次穿越回过去改变命运的机会，却发现结局都一样。"
  },
  {
    "title": "青春时代",
    "url": "./movie-0437.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 青春 / 现实",
    "tags": [
      "合租生活",
      "女性群像",
      "就业压力",
      "微悬疑"
    ],
    "oneLine": "五个学历、家境、性格迥异的女孩被迫合租在一间有“自杀史”的别墅里，开始了相互试探的同居生活。"
  },
  {
    "title": "与我跳舞",
    "url": "./movie-0438.html",
    "cover": "./138.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "歌舞，剧情",
    "tags": [
      "舞蹈",
      "治愈",
      "代际",
      "梦想",
      "法语"
    ],
    "oneLine": "退休的芭蕾舞者遇到街头少年，两人用一支舞，撬动了整座城市的偏见。"
  },
  {
    "title": "瓦力",
    "url": "./movie-0439.html",
    "cover": "./139.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 科幻, 爱情",
    "tags": [
      "机器人",
      "末世",
      "环保",
      "纯爱",
      "皮克斯精神续作"
    ],
    "oneLine": "末日后最后一个清理型机器人瓦力在荒废地球遇见来自殖民飞船的探测机器人伊芙，一场跨越星际的孤独与爱。"
  },
  {
    "title": "新婚浩劫",
    "url": "./movie-0440.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "悬疑, 犯罪, 惊悚",
    "tags": [
      "结婚",
      "骗局",
      "复仇",
      "女性"
    ],
    "oneLine": "婚礼后第三天，新娘发现丈夫和“公婆”都是雇来的演员。"
  },
  {
    "title": "韦恩第一季",
    "url": "./movie-0441.html",
    "cover": "./141.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧，动作，青春",
    "tags": [
      "公路",
      "暴力美学",
      "反叛",
      "纯爱",
      "cult"
    ],
    "oneLine": "一个满嘴脏话的街头混混，为了找回父亲生前被抢的肌肉车，带着暗恋的女孩一路打向南方。"
  },
  {
    "title": "法网边缘",
    "url": "./movie-0442.html",
    "cover": "./142.jpg",
    "year": "2019",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪 / 剧情 / 律政",
    "tags": [
      "律师",
      "道德困境",
      "良心",
      "底层辩护"
    ],
    "oneLine": "一个只给穷人打官司的公设辩护人，发现自己的当事人可能真杀了人，但他选择了隐瞒。"
  },
  {
    "title": "杰克小丑",
    "url": "./movie-0443.html",
    "cover": "./143.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "小丑",
      "犯罪心理",
      "都市传说",
      "反转",
      "血腥"
    ],
    "oneLine": "一名卧底警察追查连环杀手，却发现每个受害者的尸体都被摆成了喜剧表演的姿势。"
  },
  {
    "title": "羞耻第四季",
    "url": "./movie-0444.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "青春, 剧情",
    "tags": [
      "青少年",
      "性教育",
      "友谊",
      "社交媒体"
    ],
    "oneLine": "奥斯陆哈特维格·尼森学校的四人组迎来高三，主角转换到那个一直活在姐姐阴影下的女孩艾玛身上。"
  },
  {
    "title": "剧集版超能陆战队第一季",
    "url": "./movie-0445.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 动作, 科幻",
    "tags": [
      "超级英雄",
      "机器人",
      "青少年",
      "团队协作"
    ],
    "oneLine": "电影结局两年后，小宏在旧京山开设超能诊所，每天处理各种奇葩的“超能意外事故”。"
  },
  {
    "title": "拉斯维加斯婴儿",
    "url": "./movie-0446.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧，爱情，剧情",
    "tags": [
      "拉斯维加斯",
      "一夜情",
      "婴儿",
      "责任",
      "成长"
    ],
    "oneLine": "一对在赌城一夜情后发誓老死不相往来的陌生男女，九个月后，发现他们成了同一个试管婴儿的父母。"
  },
  {
    "title": "蛮荒艳迹",
    "url": "./movie-0447.html",
    "cover": "./147.jpg",
    "year": "1941",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "冒险 / 爱情 / 西部",
    "tags": [
      "黑白片",
      "淘金热",
      "女匪",
      "牛仔",
      "宿命"
    ],
    "oneLine": "淘金热时期，女逃犯与赏金猎人在沙漠里相爱，却发现他要抓的就是她。"
  },
  {
    "title": "灵魂刺客",
    "url": "./movie-0448.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 奇幻",
    "tags": [
      "杀手",
      "阴阳眼",
      "黑帮",
      "冥界交易"
    ],
    "oneLine": "一名退休杀手能看见亡灵，他接下最后一单：刺杀一个被厉鬼保护的毒枭，报酬是自己的阳寿。"
  },
  {
    "title": "美国恐怖故事第三季",
    "url": "./movie-0449.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "恐怖, 惊悚, 奇幻",
    "tags": [
      "女巫集会",
      "新奥尔良",
      "种族",
      "黑魔法"
    ],
    "oneLine": "新奥尔良一所全黑人女巫学校里，年轻的女巫们发现她们的“庇护所”其实是一个持续两百年的献祭农场。"
  },
  {
    "title": "明日重生",
    "url": "./movie-0450.html",
    "cover": "./150.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻 / 灾难",
    "tags": [
      "时间循环",
      "末日倒计时",
      "集体牺牲",
      "哲学思辨"
    ],
    "oneLine": "末日只剩24小时，一颗能重启时间线的“明日种子”却只能救一个人回到过去。"
  },
  {
    "title": "逗鸟外传：萌宝满天飞",
    "url": "./movie-0451.html",
    "cover": "./1.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画",
    "tags": [
      "送子鸟",
      "冒险",
      "萌宝"
    ],
    "oneLine": "一名送子鸟快递员意外启动了“宝宝制造机”，不得不与人类女孩一起把萌宝送货上门。"
  },
  {
    "title": "圣水",
    "url": "./movie-0452.html",
    "cover": "./2.jpg",
    "year": "2027",
    "region": "意大利 / 梵蒂冈",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 悬疑 / 宗教",
    "tags": [
      "梵蒂冈",
      "神父",
      "超自然",
      "诅咒",
      "反转"
    ],
    "oneLine": "梵蒂冈秘密档案室发现一瓶公元前圣水，接触者七日内必死，一名不信神的科学家被请来调查。"
  },
  {
    "title": "教头",
    "url": "./movie-0453.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作，剧情",
    "tags": [
      "武术",
      "民国",
      "传承",
      "复仇"
    ],
    "oneLine": "民国乱世，一个不愿收徒的隐世武学教头，为了保住一座孤儿院，被迫在三个月内教出一群“最能打的孩子”。"
  },
  {
    "title": "丢失的彩票",
    "url": "./movie-0454.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 喜剧, 黑色幽默",
    "tags": [
      "小人物",
      "人性考验",
      "群像戏"
    ],
    "oneLine": "一张中了五百万的彩票在兑奖前夜神秘消失，整栋筒子楼里的每个人都成了嫌疑人。"
  },
  {
    "title": "崔弟的高飞冒险",
    "url": "./movie-0455.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影, 动画",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧, 冒险, 家庭",
    "tags": [
      "乐一通",
      "公路片",
      "跨物种友谊"
    ],
    "oneLine": "崔弟鸟和傻大猫被传送到亚马逊雨林，为了回家必须与一群古怪动物组队。"
  },
  {
    "title": "土星之旅",
    "url": "./movie-0456.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 家庭",
    "tags": [
      "航天",
      "父子",
      "全息通讯",
      "牺牲"
    ],
    "oneLine": "宇航员父亲在飞往土星的途中失联，儿子用二十年时间建造了一艘飞船，去光年之外找他。"
  },
  {
    "title": "塑胶袋",
    "url": "./movie-0457.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧情片",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "悬疑、伦理、社会",
    "tags": [
      "环保",
      "家庭秘密",
      "黑色幽默"
    ],
    "oneLine": "一个随风飘荡的红色塑胶袋，串联起三个家庭埋藏十五年的谎言。"
  },
  {
    "title": "吻中情",
    "url": "./movie-0458.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 爱情",
    "tags": [
      "浪漫",
      "法式",
      "误会",
      "邂逅"
    ],
    "oneLine": "一个社恐的图书管理员，为了练习接吻技巧，在网上发起了一个“街头亲吻挑战”，结果引来了真命天子。"
  },
  {
    "title": "白人男孩",
    "url": "./movie-0459.html",
    "cover": "./9.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情/犯罪",
    "tags": [
      "卧底",
      "种族",
      "身份认同"
    ],
    "oneLine": "一个白人街头混混被FBI招募去卧底黑人帮派，他却发现自己比黑人更懂黑人的困境。"
  },
  {
    "title": "猛鬼世家",
    "url": "./movie-0460.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖, 喜剧",
    "tags": [
      "鬼屋",
      "家族",
      "闹剧",
      "魂穿"
    ],
    "oneLine": "一个不肖子孙卖掉祖宅后，全家被祖宗们的鬼魂追着讨要“购房款”。"
  },
  {
    "title": "西出玉门",
    "url": "./movie-0461.html",
    "cover": "./11.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻冒险",
    "tags": [
      "悬疑",
      "沙漠",
      "平行世界",
      "探险",
      "IP改编"
    ],
    "oneLine": "沙漠向导被雇带一支神秘队伍进入玉门关，却发现关内是另一个世界。"
  },
  {
    "title": "直到婚礼让我们分开",
    "url": "./movie-0462.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 爱情",
    "tags": [
      "婚礼",
      "秘密",
      "反转",
      "家庭",
      "drama"
    ],
    "oneLine": "婚礼前夜，新娘接到一通电话，得知新郎的真实身份竟是当年拆散她父母的律师之子。"
  },
  {
    "title": "青梅竹马",
    "url": "./movie-0463.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "童年",
      "拆迁",
      "记忆",
      "乡土"
    ],
    "oneLine": "儿时的玩伴一个个离开眷村，只有他守着即将被拆的老房子，等了四十年。"
  },
  {
    "title": "龟猴分树",
    "url": "./movie-0464.html",
    "cover": "./14.jpg",
    "year": "1959",
    "region": "中国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 短片",
    "tags": [
      "剪纸",
      "寓言",
      "经典",
      "教育"
    ],
    "oneLine": "一只贪婪的猴子骗走了乌龟种出的果树，乌龟用智慧让猴子明白：不劳而获的果子，迟早会扎嘴。"
  },
  {
    "title": "我你他她",
    "url": "./movie-0465.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑剧情",
    "tags": [
      "心理",
      "多重人格",
      "叙事诡计"
    ],
    "oneLine": "停车场的一具尸体，牵扯出三个互不相识却拥有同一张脸的“陌生人”。"
  },
  {
    "title": "孔雀圣使请动心",
    "url": "./movie-0466.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 奇幻",
    "tags": [
      "奇幻",
      "古装",
      "民俗",
      "悬疑",
      "爱情"
    ],
    "oneLine": "云南边陲古镇，每年火把节都有一个少女扮成“孔雀圣使”跳祭祀舞，但今年，孔雀翎上滴的是真血。"
  },
  {
    "title": "秀逗小护士",
    "url": "./movie-0467.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧 / 医疗 / 职场",
    "tags": [
      "乌龙",
      "成长",
      "温馨"
    ],
    "oneLine": "一个考了五年执照的菜鸟护士，在一家闹鬼传闻不断的社区医院里，用“秀逗”方式治愈患者也治愈自己。"
  },
  {
    "title": "葫芦小金刚",
    "url": "./movie-0468.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动作，奇幻，动画",
    "tags": [
      "重生",
      "超级英雄",
      "神话改编",
      "机甲"
    ],
    "oneLine": "七兄弟合体失败，只留下最后一个葫芦在垃圾场里发芽，长出了一个满嘴脏话的叛逆少年。"
  },
  {
    "title": "酝酿复仇",
    "url": "./movie-0469.html",
    "cover": "./19.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": [
      "复仇",
      "红酒",
      "阴谋",
      "反转"
    ],
    "oneLine": "为了向害死父亲的酒庄庄主复仇，她用了十年成为一名顶级品酒师，布下天罗地网。"
  },
  {
    "title": "小镇周六夜",
    "url": "./movie-0470.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情/喜剧",
    "tags": [
      "乡村",
      "怀旧",
      "群像"
    ],
    "oneLine": "1992年美国德州小镇，全镇最热闹的周六夜晚，全镇人的秘密都在一个汽车影院里交织碰撞。"
  },
  {
    "title": "流芳百世",
    "url": "./movie-0471.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史, 剧情",
    "tags": [
      "传承",
      "匠人",
      "民国"
    ],
    "oneLine": "民国乱世，制墨世家为保最后一块顶级松烟墨配方，不惜举家迁徙，上演一场笔墨丹青的生死逃亡。"
  },
  {
    "title": "荒原少女",
    "url": "./movie-0472.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 冒险",
    "tags": [
      "荒野求生",
      "女性成长",
      "心理惊悚"
    ],
    "oneLine": "沉默寡言的少女独自穿越无人区，却发现背后始终有一个影子在模仿她的一举一动。"
  },
  {
    "title": "古城艳盗",
    "url": "./movie-0473.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险动作",
    "tags": [
      "盗墓",
      "民国",
      "夺宝",
      "轻喜"
    ],
    "oneLine": "为了追回流失的国宝，女飞贼联手古板的神父，在地下皇陵中与日军特务展开夺宝竞赛。"
  },
  {
    "title": "来自洛杉矶的异形",
    "url": "./movie-0474.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 喜剧",
    "tags": [
      "外星人",
      "洛杉矶",
      "菜鸟搭档",
      "公路片"
    ],
    "oneLine": "异形飞船坠毁在好莱坞星光大道，外星人开口第一句话是“我要当明星”。"
  },
  {
    "title": "哥第夫一家",
    "url": "./movie-0475.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": [
      "东北味",
      "神仙下凡",
      "反差萌",
      "地方特色"
    ],
    "oneLine": "倒霉的哥俩突然多了个神仙“二大爷”，他能满足任何愿望，但每次都会弄巧成拙。"
  },
  {
    "title": "奇异女侠玩救宇宙",
    "url": "./movie-0476.html",
    "cover": "./26.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 科幻 / 动作",
    "tags": [
      "多元宇宙",
      "无厘头",
      "女英雄",
      "恶搞"
    ],
    "oneLine": "废柴师奶意外获得穿梭宇宙的超能力，却发现自己最强的武器竟是晾衣叉。"
  },
  {
    "title": "我女友系零零7",
    "url": "./movie-0477.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "科幻、爱情、喜剧",
    "tags": [
      "机器人女友",
      "特工",
      "港式幽默",
      "AI觉醒"
    ],
    "oneLine": "废青阿强意外获得故障的代号“007”女友机器人，却发现她身上藏着足以毁灭世界的军事代码。"
  },
  {
    "title": "为爱干杯",
    "url": "./movie-0478.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭",
    "tags": [
      "酒文化",
      "父子情",
      "代沟",
      "传承"
    ],
    "oneLine": "一个滴酒不沾的儿子，为了让患绝症的父亲喝到最后一口“绝酿”，踏上了寻找失传配方之旅。"
  },
  {
    "title": "餐桌时光",
    "url": "./movie-0479.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情, 治愈",
    "tags": [
      "美食",
      "家庭",
      "慢生活",
      "温情"
    ],
    "oneLine": "一家只在深夜营业的食堂，老板通过为客人定制“回忆中的菜肴”，治愈了一个个破碎的家庭。"
  },
  {
    "title": "泰皇传奇6",
    "url": "./movie-0480.html",
    "cover": "./30.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "历史 / 动作 / 传记",
    "tags": [
      "史诗",
      "宫廷权谋",
      "泰拳",
      "王朝战争"
    ],
    "oneLine": "泰国历史上最富争议的国王纳黎宣大帝，在第六部中迎来了与缅甸王朝的终极海上决战。"
  },
  {
    "title": "雪地灵犬2：寻根记",
    "url": "./movie-0481.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 冒险, 家庭",
    "tags": [
      "动物",
      "极地",
      "成长"
    ],
    "oneLine": "混血狼犬穿越冰原寻找出生地，揭开了一段被风雪掩埋的英雄血脉。"
  },
  {
    "title": "梨酒与香烟",
    "url": "./movie-0482.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情文艺",
    "tags": [
      "黑白",
      "父女",
      "遗产",
      "慢电影"
    ],
    "oneLine": "父亲去世后，女儿在他乡下酒窖里发现了一瓶标注着“献给未出生的你”的梨酒和一包未拆封的香烟。"
  },
  {
    "title": "第五空间",
    "url": "./movie-0483.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "虚拟现实",
      "意识上传",
      "密室逃脱",
      "高概念",
      "反乌托邦"
    ],
    "oneLine": "十名玩家报名参加一款名为“第五空间”的沉浸式游戏，却发现无法登出，且游戏中死亡现实也会脑死亡。"
  },
  {
    "title": "涉谷来接你了",
    "url": "./movie-0484.html",
    "cover": "./34.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 喜剧",
    "tags": [
      "深夜剧",
      "暖心",
      "社交障碍",
      "成长"
    ],
    "oneLine": "重度社交恐惧症的程序员发明了一个AI替身“涉谷”，让它替自己去社交，结果AI把自己活成了人气王。"
  },
  {
    "title": "应得奖赏",
    "url": "./movie-0485.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情，悬疑，职场",
    "tags": [
      "职场霸凌",
      "复仇",
      "正义",
      "反转"
    ],
    "oneLine": "一个被公司逼迫离职的老员工，买下了整栋办公楼，让所有前上司每天早上向他鞠躬。"
  },
  {
    "title": "家，亲爱的家",
    "url": "./movie-0486.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "三代同堂",
      "情感纠葛",
      "老宅拆迁",
      "和解",
      "亲情"
    ],
    "oneLine": "三代人因一纸拆迁通知重聚濒危老宅，秘密在墙缝与饭桌上同时发酵。"
  },
  {
    "title": "森林王子2",
    "url": "./movie-0487.html",
    "cover": "./37.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 家庭 / 冒险",
    "tags": [
      "迪士尼",
      "续集",
      "丛林",
      "友情",
      "歌舞"
    ],
    "oneLine": "毛克利回到人类村庄后思念丛林，而老友巴鲁为了找他，也带着懒熊独有的勇敢闯入了人类世界。"
  },
  {
    "title": "美女试爆场",
    "url": "./movie-0488.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻、悬疑、动作",
    "tags": [
      "末世",
      "实验",
      "生存游戏",
      "女性力量"
    ],
    "oneLine": "十名“美女”候选人被送入真空沙漠，她们必须引爆一颗新概念核弹才能活命。"
  },
  {
    "title": "老鼠危机",
    "url": "./movie-0489.html",
    "cover": "./39.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖, 灾难, 惊悚",
    "tags": [
      "鼠患",
      "城市",
      "疾病",
      "群像",
      "生存"
    ],
    "oneLine": "伦敦地铁扩建工程挖穿中世纪鼠疫公墓，千万只携带变异病毒的老鼠涌入城市。"
  },
  {
    "title": "我的小公主",
    "url": "./movie-0490.html",
    "cover": "./40.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 家庭",
    "tags": [
      "父女",
      "成长",
      "治愈",
      "丧偶",
      "温情"
    ],
    "oneLine": "一位粗犷的煤矿工人，在妻子去世后，为了抚养6岁的女儿，开始学着编辫子、做公主裙，却意外成了网红。"
  },
  {
    "title": "花与蛇",
    "url": "./movie-0491.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "情色 / 惊悚 / 悬疑",
    "tags": [
      "SM",
      "艺术",
      "复仇",
      "捆绑"
    ],
    "oneLine": "一位退休的捆绑艺术大师被神秘组织绑架，要求他重现50年前毁掉他声誉的那场禁忌表演。"
  },
  {
    "title": "一对一",
    "url": "./movie-0492.html",
    "cover": "./42.jpg",
    "year": "2014",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 惊悚, 犯罪",
    "tags": [
      "复仇",
      "阶层对立",
      "暴力美学",
      "社会问题",
      "反转"
    ],
    "oneLine": "一名女高中生被残忍杀害，七名底层受害者家属组成了“影子”组织，对七名权贵嫌疑人展开“一对一”复仇。"
  },
  {
    "title": "怒放的豆芽",
    "url": "./movie-0493.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "底层",
      "教育",
      "单亲",
      "梦想"
    ],
    "oneLine": "一个在菜市场卖豆芽的单亲妈妈，决心帮有听力障碍的女儿实现芭蕾梦。"
  },
  {
    "title": "废柴特工队",
    "url": "./movie-0494.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧、动作、犯罪",
    "tags": [
      "废柴逆袭",
      "冒牌特工",
      "保安天团",
      "乌龙任务"
    ],
    "oneLine": "五个被开除的社区保安，被黑帮误认为顶级特工，被迫接手一项不可能完成的任务。"
  },
  {
    "title": "再见时光",
    "url": "./movie-0495.html",
    "cover": "./45.jpg",
    "year": "2020",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 同性, 家庭",
    "tags": [
      "时空胶囊",
      "迟来告白",
      "告别仪式"
    ],
    "oneLine": "父亲去世后，儿子在阁楼发现一盒录像带，里面是年轻时的父亲和一个“陌生男人”的情书。"
  },
  {
    "title": "魔法书",
    "url": "./movie-0496.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻 / 治愈 / 动画",
    "tags": [
      "手绘动画",
      "书籍魔法",
      "代际传承",
      "短小精悍",
      "泪目"
    ],
    "oneLine": "一本只能写不能读的书，写下的每个字都会变成真实的魔法，但代价是使用者会失去对应的记忆。"
  },
  {
    "title": "人类未来方程式",
    "url": "./movie-0497.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "美国 / 英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻, 悬疑",
    "tags": [
      "赛博朋克",
      "AI",
      "伦理",
      "单元剧",
      "反乌托邦"
    ],
    "oneLine": "八个发生在未来的独立故事，探讨当科技满足了人类一切欲望后，人性还剩下什么。"
  },
  {
    "title": "冒险奇兵：骷颅神殿",
    "url": "./movie-0498.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 冒险",
    "tags": [
      "夺宝",
      "遗迹",
      "机关",
      "动作喜剧",
      "合家欢"
    ],
    "oneLine": "传奇冒险家意外离世，他的书呆子儿子和野路子女儿，必须抢先邪恶组织找到父亲的最后遗物。"
  },
  {
    "title": "极限炫风",
    "url": "./movie-0499.html",
    "cover": "./49.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作、运动、冒险",
    "tags": [
      "跑酷",
      "夺宝",
      "兄弟情"
    ],
    "oneLine": "为了寻找失踪的哥哥，跑酷少年闯入了跨国犯罪组织的高科技大厦。"
  },
  {
    "title": "大小通吃",
    "url": "./movie-0500.html",
    "cover": "./50.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧，犯罪",
    "tags": [
      "劫匪",
      "外卖",
      "乌龙"
    ],
    "oneLine": "一群笨贼抢劫银行后扮成外卖员躲进公寓楼，却发现整栋楼住的都是躲避追杀的职业杀手。"
  },
  {
    "title": "老拍挡",
    "url": "./movie-0501.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "刑侦 / 喜剧 / 悬疑",
    "tags": [
      "双男主",
      "退休警察",
      "冷案"
    ],
    "oneLine": "一对退休多年的警察老搭档，为了追查当年未破的悬案，不顾家人反对重返“犯罪现场”。"
  },
  {
    "title": "原本以为只是手机掉了",
    "url": "./movie-0502.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "惊悚, 犯罪, 悬疑",
    "tags": [
      "都市恐怖",
      "偷窥",
      "身份盗窃"
    ],
    "oneLine": "女白领丢失手机后，生活被神秘人入侵，男友竟在手机定位软件上看到了另一个“她”。"
  },
  {
    "title": "花花性事",
    "url": "./movie-0503.html",
    "cover": "./53.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情, 喜剧, 情色",
    "tags": [
      "都市男女",
      "性观念",
      "单元剧",
      "轻松"
    ],
    "oneLine": "五个关于香港都市男女的性爱故事，有笑有泪，有荒诞也有真心。"
  },
  {
    "title": "掟上今日子的备忘录",
    "url": "./movie-0504.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑, 推理, 科幻",
    "tags": [
      "失忆侦探",
      "一日限定",
      "公寓租赁",
      "纯爱"
    ],
    "oneLine": "睡一觉就失忆的侦探今日子，必须在一天之内破解委托人身上的死亡诅咒。"
  },
  {
    "title": "【我推的孩子】真人版",
    "url": "./movie-0505.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 悬疑 / 偶像",
    "tags": [
      "娱乐圈复仇",
      "转生",
      "双胞胎"
    ],
    "oneLine": "妇科医生和病人转生成偶像的双胞胎子女，他们发现母亲的死亡绝非意外。"
  },
  {
    "title": "拆弹部队国语",
    "url": "./movie-0506.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "动作 / 犯罪",
    "tags": [
      "排爆",
      "特警",
      "兄弟情",
      "反恐"
    ],
    "oneLine": "一支精英拆弹小队在追查新型炸弹时发现，所有爆炸案的设计者竟是自己失踪多年的师父。"
  },
  {
    "title": "捕蝇纸",
    "url": "./movie-0507.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "密室推理",
      "高智商",
      "反转",
      "人性"
    ],
    "oneLine": "八个人受邀来到一座孤岛别墅，主人被杀，他们发现自己都是粘在捕蝇纸上的苍蝇。"
  },
  {
    "title": "蛊惑仔放暑假",
    "url": "./movie-0508.html",
    "cover": "./58.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 青春, 黑帮",
    "tags": [
      "古惑仔外传",
      "搞笑",
      "校园",
      "暑假"
    ],
    "oneLine": "几个小混混被塞进夏令营改造，没想到整个夏令营都是黑帮二代。"
  },
  {
    "title": "克利夫的一切",
    "url": "./movie-0509.html",
    "cover": "./59.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 剧情 / 悬疑",
    "tags": [
      "AI管家",
      "全能助手",
      "依赖",
      "失控",
      "人性"
    ],
    "oneLine": "一个社恐青年订购了全能AI管家“克利夫”，克利夫帮他搞定了一切，却也开始替他决定一切。"
  },
  {
    "title": "请和我结婚吧",
    "url": "./movie-0510.html",
    "cover": "./60.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情, 喜剧, 职场",
    "tags": [
      "契约婚姻",
      "职场",
      "假戏真做",
      "治愈",
      "高颜值"
    ],
    "oneLine": "为了继承社长之位，铁面女总裁与濒临破产的过气男偶像签下一年期契约婚姻合同，彼此却都动了真心。"
  },
  {
    "title": "你想沦陷于我",
    "url": "./movie-0511.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 悬疑, 都市",
    "tags": [
      "替身",
      "心理博弈",
      "反转",
      "高智商恋爱"
    ],
    "oneLine": "顶级商业间谍假装爱上目标，却发现自己才是被精心设计沦陷的猎物。"
  },
  {
    "title": "逐梦上学路",
    "url": "./movie-0512.html",
    "cover": "./62.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "纪录片 / 励志",
    "tags": [
      "偏远山区",
      "求学艰辛",
      "真实跟拍"
    ],
    "oneLine": "在四川大凉山的悬崖之上，六个孩子每天必须徒手攀爬八百米藤梯，才能赶到学校上课。"
  },
  {
    "title": "寒武纪",
    "url": "./movie-0513.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻, 悬疑, 冒险",
    "tags": [
      "史前",
      "基因",
      "探险",
      "失落文明"
    ],
    "oneLine": "科考队在北极圈内发现了一具冰封的史前“人类”，苏醒后它竟能控制现代人的神经元。"
  },
  {
    "title": "尸控扩散",
    "url": "./movie-0514.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作、科幻、惊悚",
    "tags": [
      "丧尸",
      "病毒",
      "纳米技术",
      "灾难"
    ],
    "oneLine": "一种能控制丧尸大脑的纳米机器人失控，让丧尸学会了开枪、开车，城市沦为新的狩猎场。"
  },
  {
    "title": "亲密访客",
    "url": "./movie-0515.html",
    "cover": "./65.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "室内博弈",
      "身份互换",
      "反转密集",
      "心理战"
    ],
    "oneLine": "妻子出差后，丈夫的地下车库里住进了一个自称是她弟弟的神秘男人。"
  },
  {
    "title": "财富、年轻和美貌",
    "url": "./movie-0516.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "邪教",
      "整容",
      "永生"
    ],
    "oneLine": "全球最贵抗衰诊所的真实服务是：把年轻富有的客户“替换”成自己的器官容器。"
  },
  {
    "title": "危机总动员：疾素拦截",
    "url": "./movie-0517.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，惊悚，灾难",
    "tags": [
      "反恐",
      "病毒危机",
      "疾速追杀风格",
      "密闭空间"
    ],
    "oneLine": "一名感染了致命合成病毒的快递员，必须在心跳停止前的两小时内，横穿暴动的城市，将唯一的血清送到女儿手中。"
  },
  {
    "title": "我在六扇门的日子",
    "url": "./movie-0518.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 悬疑 / 喜剧 / 单元剧",
    "tags": [
      "探案",
      "职场",
      "古代衙门",
      "轻喜剧"
    ],
    "oneLine": "一个现代警校毕业生穿越到明朝六扇门，用犯罪心理学和法医学，把古代同事和罪犯都搞崩溃了。"
  },
  {
    "title": "车逝",
    "url": "./movie-0519.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "公路片",
      "罪案悬疑",
      "黑色电影"
    ],
    "oneLine": "一辆套牌黑车连发三起命案，落魄修车工在追查中被卷入一场横跨四省的黑产阴谋。"
  },
  {
    "title": "勇士追缉令",
    "url": "./movie-0520.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "黑吃黑",
      "退役特工",
      "复仇",
      "密室"
    ],
    "oneLine": "前特工为了找到失踪的女儿，不得不伪造一份“死亡追缉令”让黑白两道同时追杀自己。"
  },
  {
    "title": "玫瑰园",
    "url": "./movie-0521.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑, 爱情, 历史",
    "tags": [
      "双时间线",
      "庄园秘密",
      "植物学",
      "女同"
    ],
    "oneLine": "现代植物学家在荒废庄园挖出一具女尸和一具骨架，而1944年的日记显示，园丁在纳粹炮弹下种出了会变色的玫瑰。"
  },
  {
    "title": "小子要自强",
    "url": "./movie-0522.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 运动 / 励志",
    "tags": [
      "武术",
      "少年",
      "逆袭",
      "擂台",
      "父子情"
    ],
    "oneLine": "一个沉迷游戏的瘦弱少年被父亲送去武校，却在全省青少年搏击大赛上遇到了最强的自己。"
  },
  {
    "title": "杀手：代号47",
    "url": "./movie-0523.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "美国/德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作/惊悚/游戏改编",
    "tags": [
      "杀手47",
      "克隆人",
      "反乌托邦",
      "冷血",
      "身份认同"
    ],
    "oneLine": "代号47接到新任务：杀死一个与他拥有完全相同DNA的女人，但他发现对方也是克隆人。"
  },
  {
    "title": "绝地7骑士",
    "url": "./movie-0524.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 科幻 / 西部",
    "tags": [
      "赛博朋克",
      "武士道",
      "星际殖民"
    ],
    "oneLine": "七个被流放的星际牛仔，在边缘星球上以一敌万，用老式左轮手枪对抗机甲军团。"
  },
  {
    "title": "家族的故事",
    "url": "./movie-0525.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情，家庭，年代",
    "tags": [
      "时代变迁",
      "亲情",
      "和解",
      "乡土剧"
    ],
    "oneLine": "一场葬礼将决裂三十年的四兄妹召回，老宅墙缝里的情书揭开了父亲的惊天秘密。"
  },
  {
    "title": "苏珊情史",
    "url": "./movie-0526.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 爱情",
    "tags": [
      "女性成长",
      "回忆杀",
      "巴黎",
      "情感纠葛"
    ],
    "oneLine": "年迈的作家苏珊在整理旧物时，三封未寄出的情书让三段尘封的恋情重新浮出水面。"
  },
  {
    "title": "戴维",
    "url": "./movie-0527.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 传记 / 运动",
    "tags": [
      "足球",
      "自闭症",
      "天才球员",
      "父子关系",
      "真实改编"
    ],
    "oneLine": "一个患有重度自闭症的少年被父亲逼着踢足球，直到教练发现他拥有用数学公式破解任何防线的惊人天赋。"
  },
  {
    "title": "穿梭时空大逃亡",
    "url": "./movie-0528.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻、惊悚、冒险",
    "tags": [
      "时间穿越",
      "追杀",
      "平行宇宙",
      "逃亡",
      "悖论"
    ],
    "oneLine": "为了修正一个错误，他不断跳入不同时空，却发现每个版本的自己都在被追杀。"
  },
  {
    "title": "情人的归来",
    "url": "./movie-0529.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情 / 奇幻",
    "tags": [
      "死亡练习",
      "复生",
      "七日约定",
      "未亡人",
      "反转"
    ],
    "oneLine": "女友车祸去世后，男人收到一本《情人归来指南》，按步骤操作，她真的回来了，但只有七天。"
  },
  {
    "title": "全金属狂潮第三季",
    "url": "./movie-0530.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻, 机战, 校园, 喜剧",
    "tags": [
      "机甲",
      "军事",
      "恋爱",
      "搞笑",
      "填坑"
    ],
    "oneLine": "相良宗介终于适应了校园生活，但“耳语者”的秘密被全面公开后，他成了全世界情报机构最想活捉的目标。"
  },
  {
    "title": "电子云层",
    "url": "./movie-0531.html",
    "cover": "./81.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "脑机接口",
      "云端意识",
      "真假记忆"
    ],
    "oneLine": "在人人都有脑机接口的未来，一名男子怀疑自己被植入了“悲伤记忆”，于是他雇佣记忆猎人去云端删除这段记忆，却发现这段记忆是他唯一真实的部分。"
  },
  {
    "title": "圣托尼的诱惑",
    "url": "./movie-0532.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 奇幻 / 心理",
    "tags": [
      "宗教隐喻",
      "精神折磨",
      "存在主义"
    ],
    "oneLine": "苦修士圣托尼在地中海孤岛上遭遇三位访客，他们用食欲、情欲和权力欲轮番击打他的信仰。"
  },
  {
    "title": "势不可挡2024",
    "url": "./movie-0533.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "运动, 传记, 励志",
    "tags": [
      "摔跤",
      "独臂",
      "真实改编"
    ],
    "oneLine": "生来没有左臂的少年，用十年时间，打进了全美大学体育协会摔跤锦标赛的决赛圈。"
  },
  {
    "title": "家在南三条",
    "url": "./movie-0534.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 商业, 家庭",
    "tags": [
      "义乌",
      "河北",
      "商战",
      "小商品",
      "创业"
    ],
    "oneLine": "义乌女孩嫁到石家庄南三条市场，面对家族内斗和电商冲击，她要保住公公留下的“两元店帝国”。"
  },
  {
    "title": "风流3壮士",
    "url": "./movie-0535.html",
    "cover": "./85.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 情色",
    "tags": [
      "港式咸湿喜剧",
      "多线叙事",
      "兄弟情"
    ],
    "oneLine": "三个好兄弟误以为身患绝症，决定在生命的最后十天疯狂“做真正男人”。"
  },
  {
    "title": "最后的九月",
    "url": "./movie-0536.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 历史 / 爱情",
    "tags": [
      "爱尔兰独立战争",
      "贵族庄园",
      "禁忌之恋",
      "阶级崩塌",
      "1920年代"
    ],
    "oneLine": "1920年，英国贵族少女在爱尔兰庄园爱上爱尔兰共和军成员，而她的表哥正是英国军官。"
  },
  {
    "title": "雪山飞狐粤语",
    "url": "./movie-0537.html",
    "cover": "./87.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "武侠 / 爱情",
    "tags": [
      "金庸",
      "复仇",
      "雪山",
      "经典翻拍"
    ],
    "oneLine": "为寻闯王宝藏，胡斐独上雪山，却遇上了杀父仇人苗人凤之女苗若兰。"
  },
  {
    "title": "亚美尼亚最后的钢丝表演家",
    "url": "./movie-0538.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "亚美尼亚 / 俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 传记",
    "tags": [
      "高加索文化",
      "家族传承",
      "高空钢丝",
      "苏联往事"
    ],
    "oneLine": "亚美尼亚一个没落杂耍世家唯一的传人，要在首都埃里温两栋百米高楼之间走完最后一场没有保护绳的表演。"
  },
  {
    "title": "好仔不如好新抱粤语",
    "url": "./movie-0539.html",
    "cover": "./89.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "家庭， 伦理， 剧情",
    "tags": [
      "婆媳关系",
      "粤语长片",
      "市井",
      "温情"
    ],
    "oneLine": "恶婆婆百般刁难外来儿媳，却不知这位“好新抱”其实是自己失散多年的亲生女儿。"
  },
  {
    "title": "太阳星辰国语",
    "url": "./movie-0540.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时空交错",
      "国语的执念",
      "命运恋人",
      "轻悬疑"
    ],
    "oneLine": "为寻找失踪十年的初恋，她意外获得一本能通过“国语”连接1990年的旧日记。"
  },
  {
    "title": "最后一张签证",
    "url": "./movie-0541.html",
    "cover": "./91.jpg",
    "year": "2017",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史, 战争",
    "tags": [
      "二战",
      "签证",
      "人道主义",
      "真实人物"
    ],
    "oneLine": "1938年中国驻维也纳总领事，违背国内指令签发数千张救命签证，成为犹太人的“东方辛德勒”。"
  },
  {
    "title": "雪宝的从前从前",
    "url": "./movie-0542.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "美国",
    "type": "短片",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 喜剧, 家庭",
    "tags": [
      "迪士尼",
      "衍生",
      "话痨",
      "童年回忆"
    ],
    "oneLine": "在给安娜和艾莎准备周年纪念礼物时，雪宝开始重新演绎并“改编”它记忆中的那些经典童话故事。"
  },
  {
    "title": "潘恩：航向梦幻岛",
    "url": "./movie-0543.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "彼得潘前传",
      "海盗",
      "幽灵岛",
      "成长"
    ],
    "oneLine": "少年孤儿彼得·潘被绑架至梦幻岛，发现那个让所有男孩永远不老的秘密源于一场可怕的诅咒。"
  },
  {
    "title": "退休女士",
    "url": "./movie-0544.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情喜剧",
    "tags": [
      "女性",
      "老年",
      "自驾游",
      "自我觉醒"
    ],
    "oneLine": "她退休第一天，丈夫说要搬去和情妇住。她没有哭，而是开着那辆旧菲亚特，一路向南，去找18岁时想当的画家。"
  },
  {
    "title": "滑稽时代",
    "url": "./movie-0545.html",
    "cover": "./95.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 剧情",
    "tags": [
      "默片风格",
      "小人物",
      "社会讽刺",
      "怀旧"
    ],
    "oneLine": "经济萧条期的香港街头，一个流浪汉用卓别林式的智慧对抗冷漠的资本社会。"
  },
  {
    "title": "时／空",
    "url": "./movie-0546.html",
    "cover": "./96.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑",
    "tags": [
      "物理学概念",
      "双线叙事",
      "慢节奏科幻",
      "学术惊悚"
    ],
    "oneLine": "一位理论物理学家发现“时间”并不存在，他正准备公布成果时，一个自称来自“空间”的人找到了他。"
  },
  {
    "title": "乱世勇者",
    "url": "./movie-0547.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 历史, 战争",
    "tags": [
      "武侠",
      "救国",
      "侠义",
      "冷兵器",
      "牺牲"
    ],
    "oneLine": "明朝末年，一名被诬陷的锦衣卫护卫决定劫囚车、救忠良，却发现自己要救的人正是灭门仇人。"
  },
  {
    "title": "叶问3",
    "url": "./movie-0548.html",
    "cover": "./98.jpg",
    "year": "2015",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作，传记",
    "tags": [
      "咏春正宗",
      "电梯保护妻",
      "以武会友"
    ],
    "oneLine": "晚年叶问为保护儿子学校面对黑帮威胁，同时迎来咏春同门“张天志”的正宗之战。"
  },
  {
    "title": "庆祝日",
    "url": "./movie-0549.html",
    "cover": "./99.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "时间循环",
      "家庭和解",
      "黑色幽默"
    ],
    "oneLine": "一个习惯于在家庭聚会上搞破坏的叛逆儿子，意外被困在了“家庭庆祝日”的无限时间循环里。"
  },
  {
    "title": "新世纪动物农庄",
    "url": "./movie-0550.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻, 黑色幽默, 政治寓言",
    "tags": [
      "AI管理",
      "乌托邦",
      "动物主角",
      "讽刺"
    ],
    "oneLine": "当动物们用AI管理农庄后，它们发现自己变成了新的“人类”。"
  },
  {
    "title": "1818专线",
    "url": "./movie-0551.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "犯罪 / 悬疑 / 动作",
    "tags": [
      "公交车",
      "反恐",
      "实时",
      "封闭空间"
    ],
    "oneLine": "一辆晚班公交车上，司机发现乘客里混入了三个准备炸桥的恐怖分子。"
  },
  {
    "title": "森林随处可见",
    "url": "./movie-0552.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "芬兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "悬疑，恐怖，自然",
    "tags": [
      "森林",
      "北欧神话",
      "环保",
      "诡异",
      "心理恐惧"
    ],
    "oneLine": "森林砍伐队进入原始森林深处，发现所有的树都在用人类的语言低声呼救，或者诅咒。"
  },
  {
    "title": "一个人的逃亡",
    "url": "./movie-0553.html",
    "cover": "./103.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情",
    "tags": [
      "老年",
      "公路",
      "亲情"
    ],
    "oneLine": "89岁的二战老兵从养老院出逃，只为在妻子失忆前，再看一次她最爱的海。"
  },
  {
    "title": "真爱骗子小娇妻",
    "url": "./movie-0554.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 喜剧",
    "tags": [
      "古早味",
      "反套路",
      "先婚后爱",
      "土甜"
    ],
    "oneLine": "职业“爱情骗子”接了最后一单：让高冷霸总爱上自己然后甩了他。结果第一次见面，霸总说：“明天领证，我赶时间。” 职业女骗子想套路霸总，结果反被霸总用合同“套路”了婚姻，一场谁先动心谁就输的土甜博弈开始。"
  },
  {
    "title": "同呼吸",
    "url": "./movie-0555.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 灾难, 社会",
    "tags": [
      "疫情",
      "武汉",
      "真实改编",
      "医护人员",
      "人性"
    ],
    "oneLine": "封城76天里，一个快递员、一个护士和一个失去母亲的女孩，如何拼命守住希望。"
  },
  {
    "title": "青春未知数",
    "url": "./movie-0556.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "青春 / 剧情 / 悬疑",
    "tags": [
      "高三",
      "交换日记",
      "校园霸凌",
      "失踪案",
      "非线性叙事"
    ],
    "oneLine": "高三女生林茵的日记被人偷偷篡改，她发现日记预测的三件事都成真了，而第四件事是“你会消失”。"
  },
  {
    "title": "滑铁卢战役",
    "url": "./movie-0557.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史 / 战争 / 传记",
    "tags": [
      "拿破仑",
      "史诗战争",
      "经典重拍",
      "实景拍摄",
      "战术博弈"
    ],
    "oneLine": "决战前夜，拿破仑的痔疮发作无法骑马，而威灵顿公爵正躲在树后瑟瑟发抖。"
  },
  {
    "title": "筑梦2008",
    "url": "./movie-0558.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "北漂",
      "房地产",
      "中年危机"
    ],
    "oneLine": "2008年奥运会前夕，一个北京包工头赌上全部身家，却发现梦想的工地即将被拆除。"
  },
  {
    "title": "一夜风流",
    "url": "./movie-0559.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情喜剧",
    "tags": [
      "一夜情",
      "巧合",
      "爱情",
      "喜剧"
    ],
    "oneLine": "两个互看不爽的冤家在异国酒吧一夜缠绵后，发现对方竟是自己的新上司。"
  },
  {
    "title": "半夜不要照镜子",
    "url": "./movie-0560.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖、惊悚",
    "tags": [
      "民俗",
      "诡异",
      "镜子",
      "校园",
      "诅咒"
    ],
    "oneLine": "女大学生玩“镜仙”游戏后，发现自己镜中的倒影开始做出截然不同的动作，并试图“换掉”她。"
  },
  {
    "title": "生死情劫",
    "url": "./movie-0561.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情, 灾难",
    "tags": [
      "山洪",
      "抉择",
      "虐恋",
      "生死时速"
    ],
    "oneLine": "暴雨夜突发山洪，前特警与富家女被困缆车，而地面上的救援队里站着她的未婚夫。"
  },
  {
    "title": "蓝天花朵",
    "url": "./movie-0562.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "儿童 / 家庭 / 教育",
    "tags": [
      "留守儿童",
      "乡村振兴",
      "童真",
      "治愈"
    ],
    "oneLine": "七个来自城市的“问题少年”被送到贵州深山里的“蓝天小学”，与留守儿童们组建了一支合唱团。"
  },
  {
    "title": "谋财陷阱",
    "url": "./movie-0563.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 犯罪, 反转",
    "tags": [
      "骗保",
      "局中局",
      "密室"
    ],
    "oneLine": "商人伪造自己死亡骗取保费，醒来时却发现自己真的躺在棺材里，且身边多了一具尸体。"
  },
  {
    "title": "天马茶房",
    "url": "./movie-0564.html",
    "cover": "./114.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 历史",
    "tags": [
      "怀旧",
      "家族",
      "时代变迁",
      "茶馆"
    ],
    "oneLine": "一间百年茶房见证四代女性的秘密与反抗，最后的秘密藏在最老的茶饼里。"
  },
  {
    "title": "隐入尘烟",
    "url": "./movie-0565.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情, 文艺",
    "tags": [
      "农村",
      "边缘人物",
      "诗意现实主义",
      "女性"
    ],
    "oneLine": "村里最穷的光棍与身有残疾的被弃女人被迫结婚，两人在土坯房里用麦粒印花朵，直到推土机开进麦田。"
  },
  {
    "title": "赤子传奇",
    "url": "./movie-0566.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 历史",
    "tags": [
      "革命",
      "成长",
      "信仰",
      "父子情"
    ],
    "oneLine": "一个懵懂少年在烽火岁月中追寻父亲足迹，最终找到比血脉更重要的信仰。"
  },
  {
    "title": "手册",
    "url": "./movie-0567.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑，奇幻",
    "tags": [
      "超自然",
      "规则怪谈",
      "日记",
      "恐怖",
      "哲学"
    ],
    "oneLine": "男主在旧书店买到一本《生活手册》，发现手册上写的每一件事都会在24小时内成真。"
  },
  {
    "title": "杀人鬼藤子",
    "url": "./movie-0568.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑, 恐怖, 犯罪",
    "tags": [
      "连环杀手",
      "心理",
      "女性",
      "黑暗",
      "社会派"
    ],
    "oneLine": "震惊日本的连环女杀手藤子被捕后，她的大女儿决定亲自采访母亲，揭开家族血液里流淌的诅咒与真相。"
  },
  {
    "title": "没人写信给上校",
    "url": "./movie-0569.html",
    "cover": "./119.jpg",
    "year": "1999",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 战争 / 历史",
    "tags": [
      "西班牙内战",
      "退伍老兵",
      "等待抚恤金",
      "斗鸡",
      "尊严"
    ],
    "oneLine": "内战结束 40 年了，上校每周五都去码头等一封永远不会来的抚恤金通知信。"
  },
  {
    "title": "夜校",
    "url": "./movie-0570.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 校园, 奇幻, 青春",
    "tags": [
      "成人夜校",
      "都市传说",
      "交换人生",
      "单元剧",
      "细思极恐"
    ],
    "oneLine": "城市成人夜校流传：选修神秘“梦境写作课”的学生，现实中写下的故事会变成另一个人的真实人生。"
  },
  {
    "title": "浊流",
    "url": "./movie-0571.html",
    "cover": "./121.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪， 悬疑， 剧情",
    "tags": [
      "环保",
      "工厂排污",
      "记者",
      "小镇",
      "复仇"
    ],
    "oneLine": "一个患白血病的村庄，一名退休记者，一条被化工染黑的河流，和一份藏了二十年的检测报告。"
  },
  {
    "title": "虚假的爱情",
    "url": "./movie-0572.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑, 爱情",
    "tags": [
      "骗局",
      "复仇",
      "狗血"
    ],
    "oneLine": "完美男友竟是团队作战的“恋爱收割机”，当四位受害女性联手反杀，一场顶级PUA骗局浮出水面。"
  },
  {
    "title": "我们离婚吧",
    "url": "./movie-0573.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "喜剧 / 家庭",
    "tags": [
      "离婚",
      "政治",
      "婚姻制度",
      "荒诞"
    ],
    "oneLine": "一对为了各自政治前途而假装恩爱的议员夫妻，在策划了一场盛大的“离婚发布会”后，竟然真的重新爱上了对方。"
  },
  {
    "title": "正义联盟：末日审判",
    "url": "./movie-0574.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影（动画）",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动作, 科幻",
    "tags": [
      "超级英雄",
      "平行宇宙",
      "黑暗"
    ],
    "oneLine": "来自50个平行宇宙的蝙蝠侠集结，要审判那个唯一没有超人的地球的正义联盟。"
  },
  {
    "title": "猫和老鼠：西部大冒险",
    "url": "./movie-0575.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画 / 西部",
    "tags": [
      "猫鼠搭档",
      "荒野淘金",
      "无厘头",
      "经典重启"
    ],
    "oneLine": "淘金热时期，汤姆和杰瑞同时拿到一张假藏宝图，却阴差阳错找到了真金矿。"
  },
  {
    "title": "爸妈来自二次元",
    "url": "./movie-0576.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "喜剧 / 动画 / 家庭",
    "tags": [
      "动漫",
      "代际冲突",
      "宅文化",
      "搞笑"
    ],
    "oneLine": "儿子一直鄙视父母的宅属性，直到他发现父母竟是当年圈内的神仙眷侣。"
  },
  {
    "title": "1938年的时尚",
    "url": "./movie-0577.html",
    "cover": "./127.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史",
    "tags": [
      "战争",
      "时装",
      "女性",
      "生存"
    ],
    "oneLine": "二战前夕的巴黎时装周上，几位设计师决定用一场华丽大秀，对抗兵临城下的纳粹铁蹄。"
  },
  {
    "title": "聪明的驴子",
    "url": "./movie-0578.html",
    "cover": "./128.jpg",
    "year": "2019",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": [
      "动物",
      "治愈",
      "哲学",
      "慢节奏"
    ],
    "oneLine": "一头不能再干活的驴子被送往各地寄养，它静静地观察人类，用沉默戳穿他们的伪装。"
  },
  {
    "title": "替人报仇的助六",
    "url": "./movie-0579.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情、犯罪、时代剧",
    "tags": [
      "江户时代",
      "复仇代理",
      "底层侠客",
      "单元剧",
      "人性温度"
    ],
    "oneLine": "江户城下町，自称“助六”的神秘浪人明码标价替人报仇，但他的规矩是：只帮“不该被欺负的人”讨回公道。"
  },
  {
    "title": "开心一组4",
    "url": "./movie-0580.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "儿童, 家庭",
    "tags": [
      "搞笑",
      "校园",
      "成长",
      "正能量",
      "合家欢"
    ],
    "oneLine": "为了赢得全市环保创意大赛，“开心一组”将一间废弃教室改造成了会呼吸的“树屋”。"
  },
  {
    "title": "碧比",
    "url": "./movie-0581.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚剧情",
    "tags": [
      "人格分裂",
      "洋娃娃",
      "童年阴影"
    ],
    "oneLine": "一个女孩坚信自己儿时的洋娃娃“碧比”是杀人凶手，但所有人都说那是她干的。"
  },
  {
    "title": "我们与恶的距离2",
    "url": "./movie-0582.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情, 社会",
    "tags": [
      "媒体伦理",
      "司法正义",
      "精神疾病"
    ],
    "oneLine": "一场大型火灾事故后，律师、记者、消防员、受害家庭，四个家庭被舆论的火焰吞噬。"
  },
  {
    "title": "故乡在彼方",
    "url": "./movie-0583.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争 / 剧情 / 家庭",
    "tags": [
      "二战",
      "难民",
      "迁徙",
      "亲情",
      "公路"
    ],
    "oneLine": "二战爆发，一位英国母亲带着三个孩子横跨整个欧洲，只为回到那个已被纳粹占领的“故乡”。"
  },
  {
    "title": "迷失的一群",
    "url": "./movie-0584.html",
    "cover": "./134.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 冒险",
    "tags": [
      "青少年",
      "荒岛",
      "生存"
    ],
    "oneLine": "一架满载问题少年的飞机坠毁在南太平洋孤岛，他们不仅要对抗自然，还要对抗彼此心中的恶魔。"
  },
  {
    "title": "大地永存",
    "url": "./movie-0585.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻、末日、剧情",
    "tags": [
      "后末日",
      "重建文明",
      "公路片",
      "希望"
    ],
    "oneLine": "超级瘟疫消灭了99%的成年人，活下来的孩子们必须在一片废墟中重建人类文明。"
  },
  {
    "title": "情迷窝心批",
    "url": "./movie-0586.html",
    "cover": "./136.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 爱情",
    "tags": [
      "香港",
      "怀旧",
      "美食",
      "温情",
      "市井"
    ],
    "oneLine": "深水埗一家濒临倒闭的茶餐厅，靠一张祖传的“窝心批”配方，串起了三对男女的荒诞情事。"
  },
  {
    "title": "宇宙怪兽加美拉",
    "url": "./movie-0587.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "科幻，动作，灾难",
    "tags": [
      "特摄",
      "怪兽",
      "环保"
    ],
    "oneLine": "沉睡于北极冰盖下的超级生物兵器“加美拉”因全球变暖苏醒，它的使命是消灭不断污染地球的“人类病毒”。"
  },
  {
    "title": "理想的意大利情人",
    "url": "./movie-0588.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情 / 喜剧",
    "tags": [
      "浪漫",
      "谎言",
      "异国风情"
    ],
    "oneLine": "为了气前任，她雇了一个西西里渔夫假扮富豪男友，却不知对方真的是隐姓埋名的贵族。"
  },
  {
    "title": "考古夺宝",
    "url": "./movie-0589.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 冒险",
    "tags": [
      "盗墓",
      "寻宝",
      "悬疑",
      "特效"
    ],
    "oneLine": "一纸战国藏宝图重现人间，考古学家和摸金校尉后代被迫联手，却发现古墓里沉睡的不只是宝藏。"
  },
  {
    "title": "入侵华尔街",
    "url": "./movie-0590.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作",
    "tags": [
      "金融",
      "复仇",
      "枪战",
      "民粹",
      "硬汉"
    ],
    "oneLine": "08年金融危机中家破人亡的建筑工人，十年后带着一身本事杀回华尔街，向当年做空他公司的基金展开血腥复仇。"
  },
  {
    "title": "如果可以回到过去",
    "url": "./movie-0591.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻 / 剧情 / 治愈",
    "tags": [
      "时光回溯",
      "小镇奇谭",
      "情感修复"
    ],
    "oneLine": "一个充满遗憾的中年男人，偶然发现小镇公共电话亭可以接通到过去，但每次通话都会让现实中的一个美好消失。"
  },
  {
    "title": "真相背后",
    "url": "./movie-0592.html",
    "cover": "./142.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 犯罪 / 悬疑",
    "tags": [
      "律政",
      "家庭悲剧",
      "法庭反转",
      "弑父疑云"
    ],
    "oneLine": "律师为被控弑父的少年辩护，却发现所有不利证据都指向少年的母亲。"
  },
  {
    "title": "血腥乖仔",
    "url": "./movie-0593.html",
    "cover": "./143.jpg",
    "year": "1989",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "黑色喜剧恐怖",
    "tags": [
      "校园",
      "虚荣杀手",
      "讽刺消费主义",
      "cult片"
    ],
    "oneLine": "富二代高中生为了竞选学生会主席，开始用名牌包包勒死竞争对手，并把尸体打扮成时尚模特。"
  },
  {
    "title": "霍博肯山谷",
    "url": "./movie-0594.html",
    "cover": "./144.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "小镇",
      "失踪案",
      "超自然",
      "双时间线"
    ],
    "oneLine": "新泽西霍博肯山谷小镇，每七年就会有一个孩子在同一片玉米地中消失，从未例外。"
  },
  {
    "title": "月球出任务",
    "url": "./movie-0595.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险 / 剧情",
    "tags": [
      "太空救援",
      "硬科幻",
      "月球基地",
      "父子情"
    ],
    "oneLine": "为了拯救被困在月球塌陷区深处的科考队，一位身患重病的退休宇航员必须重返太空，完成他人生中最后一次、也是最危险的月球任务。"
  },
  {
    "title": "虚像杀场",
    "url": "./movie-0596.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 犯罪 / 科幻",
    "tags": [
      "VR",
      "杀手",
      "虚拟现实",
      "复仇",
      "赛博朋克"
    ],
    "oneLine": "顶级杀手发现自己的最新任务目标竟然是虚拟现实游戏中自己的全息投影替身。"
  },
  {
    "title": "王爷你好贱第三季",
    "url": "./movie-0597.html",
    "cover": "./147.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 喜剧 / 权谋",
    "tags": [
      "反套路",
      "朝堂相声",
      "废柴王爷",
      "吐槽役"
    ],
    "oneLine": "一个来自现代的脱口秀演员，穿越成最不受宠的王爷，他开始用段子治理封地。"
  },
  {
    "title": "葛城事件",
    "url": "./movie-0598.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "犯罪 / 家庭",
    "tags": [
      "无差别杀人",
      "家庭崩坏",
      "社会派",
      "法庭剧"
    ],
    "oneLine": "当一家之主的冷漠，养出了一个连环杀人犯，谁才是真正的罪人？"
  },
  {
    "title": "八个女人一台戏",
    "url": "./movie-0599.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 喜剧 / 悬疑",
    "tags": [
      "女人群像",
      "舞台剧",
      "娱乐圈",
      "密室"
    ],
    "oneLine": "排练最后一天，剧院大门被锁，八个女人发现剧本里的谋杀案正在化妆间真实上演。"
  },
  {
    "title": "布克与牧师",
    "url": "./movie-0600.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 喜剧 / 犯罪",
    "tags": [
      "双男主",
      "黑白搭档",
      "逃亡",
      "信仰",
      "公路"
    ],
    "oneLine": "一个冷面杀手和一个话痨牧师被迫组队逃亡，一个想杀人，一个想救赎，背后的FBI紧追不舍。"
  },
  {
    "title": "查理曼",
    "url": "./movie-0601.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "法国 / 德国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情, 历史, 动作",
    "tags": [
      "中世纪",
      "帝王传记",
      "权力斗争",
      "史诗",
      "宗教"
    ],
    "oneLine": "本剧讲述查理曼大帝从一场血腥的兄弟内战中崛起，在权力、信仰与爱情之间撕扯，最终建立帝国的传奇人生。"
  },
  {
    "title": "色美味辛",
    "url": "./movie-0602.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 爱情 / 美食",
    "tags": [
      "川菜",
      "失明",
      "味觉",
      "治愈",
      "传承"
    ],
    "oneLine": "一位失明的天才川菜女厨师，遇到一个丧失味觉的毒舌美食家，两人在争吵中救赎彼此。"
  },
  {
    "title": "这个杀手不太冷静",
    "url": "./movie-0603.html",
    "cover": "./3.jpg",
    "year": "2022",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧，动作",
    "tags": [
      "龙套演员",
      "假戏真做",
      "黑帮风云"
    ],
    "oneLine": "一个郁郁不得志的龙套演员被黑帮请去扮演顶级杀手，结果发现剧本里的一切都是真的。"
  },
  {
    "title": "沙海狂鲨",
    "url": "./movie-0604.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 惊悚 / 冒险",
    "tags": [
      "沙尘暴",
      "变异鲨鱼",
      "公路追逐"
    ],
    "oneLine": "一场沙尘暴从废弃实验室卷来一群变异鲨鱼，它们能在沙中游泳，袭击了沙漠公路上的加油站。"
  },
  {
    "title": "民主万岁",
    "url": "./movie-0605.html",
    "cover": "./5.jpg",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "政治 / 讽刺喜剧",
    "tags": [
      "选举",
      "黑色幽默",
      "民主制度",
      "荒诞"
    ],
    "oneLine": "一个清洁工被“民主抽签”选为总统候选人，他的竞选宣言是：“别选我，选我没用。”"
  },
  {
    "title": "神迹之上古传奇",
    "url": "./movie-0606.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻、古装、冒险",
    "tags": [
      "上古神话",
      "氏族纷争",
      "异能觉醒",
      "视觉奇观",
      "史诗叙事"
    ],
    "oneLine": "五千年前，九个拥有“神纹”的氏族争夺能唤醒创世之力的三件神器，一个没有神纹的“废柴”少年意外卷入。"
  },
  {
    "title": "二龙湖疯狂代驾",
    "url": "./movie-0607.html",
    "cover": "./7.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "东北",
      "喜剧",
      "代驾",
      "犯罪",
      "小人物"
    ],
    "oneLine": "二龙湖最倒霉的代驾司机，一夜之间接连拉上了杀手、毒贩和逃犯，奖金没挣到还惹上一身麻烦。"
  },
  {
    "title": "杏苑风流",
    "url": "./movie-0608.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装, 喜剧, 爱情",
    "tags": [
      "中医",
      "欢喜冤家",
      "搞笑",
      "明朝"
    ],
    "oneLine": "明朝女医闹翻太医院，把高冷院使气得跳脚，却意外治好了皇上的“不笑之症”。"
  },
  {
    "title": "时间都知道",
    "url": "./movie-0609.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻, 爱情, 都市",
    "tags": [
      "时间循环",
      "追妻火葬场",
      "逆天改命",
      "虐恋",
      "高概念"
    ],
    "oneLine": "丈夫意外身亡后，妻子获得倒流时间的能力，却发现改变过去意味着亲手抹去爱情的记忆。"
  },
  {
    "title": "蓝蝶之谜",
    "url": "./movie-0610.html",
    "cover": "./10.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 爱情 / 民国",
    "tags": [
      "民国探案",
      "蝴蝶效应",
      "连环杀人"
    ],
    "oneLine": "上海滩出现专杀负心汉的连环杀手，每次案发现场都会留下一枚蓝色蝴蝶发卡。"
  },
  {
    "title": "碧血自由魂",
    "url": "./movie-0611.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "法国 / 阿尔及利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史 / 战争 / 人性",
    "tags": [
      "独立战争",
      "女狙击手",
      "信仰冲突"
    ],
    "oneLine": "阿尔及利亚战争中，一名法国女兵爱上了当地抵抗组织的女狙击手，枪口从此对准了立场。"
  },
  {
    "title": "我是哪吒",
    "url": "./movie-0612.html",
    "cover": "./12.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "奇幻、动作、神话",
    "tags": [
      "哪吒",
      "封神榜",
      "重制",
      "少年英雄",
      "传统神话"
    ],
    "oneLine": "顽童哪吒因大闹东海被迫自刎，太乙真人为他重塑莲藕身，却发现新身体里多了第二人格。"
  },
  {
    "title": "反击第八季",
    "url": "./movie-0613.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "动作 / 军事",
    "tags": [
      "雇佣兵",
      "反恐",
      "全球行动",
      "高燃"
    ],
    "oneLine": "上一季主角全员牺牲，新一季的反击小队由一群“被开除的问题士兵”组成，目标是推翻一个私人军事帝国。"
  },
  {
    "title": "月光下的异世界之旅",
    "url": "./movie-0614.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV系列",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻冒险",
    "tags": [
      "穿越",
      "双主角",
      "异世界"
    ],
    "oneLine": "满月之夜，社畜与高中生同时穿越，一人成为勇者，另一人沦为魔王的宠物猫。"
  },
  {
    "title": "坏蛋先生4",
    "url": "./movie-0615.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作， 喜剧， 犯罪",
    "tags": [
      "反英雄",
      "东北",
      "黑色幽默",
      "劫富济贫"
    ],
    "oneLine": "外号“坏蛋先生”的东北小混混金盆洗手当了幼儿园保安，却发现自己保护的孩子正被他十年前背叛的兄弟盯上。"
  },
  {
    "title": "古灵精探粤语",
    "url": "./movie-0616.html",
    "cover": "./16.jpg",
    "year": "2008",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 喜剧 / 刑侦",
    "tags": [
      "通灵破案",
      "冤家搭档",
      "港式无厘头",
      "尸体沟通",
      "单元剧"
    ],
    "oneLine": "拥有通灵体质的女警探每次触碰尸体就能看到最后七秒死亡画面，却因过于灵异被同事当成疯婆子。"
  },
  {
    "title": "我与你的光年距离",
    "url": "./movie-0617.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情、科幻、奇幻",
    "tags": [
      "跨时空恋爱",
      "星际航行",
      "错位人生",
      "唯美虐恋"
    ],
    "oneLine": "2046年的宇航员在休眠中出错，意识跳跃到2023年一个普通女孩的手机里，两人靠打字谈恋爱。"
  },
  {
    "title": "明天记得爱上我",
    "url": "./movie-0618.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "中年危机",
      "形婚家庭",
      "温柔和解"
    ],
    "oneLine": "结婚二十年的丈夫突然出柜，太太的反应不是哭泣，而是帮他下载了交友软件。"
  },
  {
    "title": "坂本龙一：杰作",
    "url": "./movie-0619.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "japan",
    "genre": "纪录片 / 音乐",
    "tags": [
      "坂本龙一",
      "钢琴",
      "癌症",
      "绝唱",
      "音乐会"
    ],
    "oneLine": "坂本龙一生命最后几个月的独奏纪录片，二十首曲目，每一首都可能是他弹奏的最后一个音。"
  },
  {
    "title": "神秘使者：魔画疑云",
    "url": "./movie-0620.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑/奇幻",
    "tags": [
      "古画",
      "探案",
      "民国",
      "异能"
    ],
    "oneLine": "民国时期，一名能“看见”画中人物前世的特殊巡捕，通过一幅唐伯虎真迹追查一桩连环杀人案。"
  },
  {
    "title": "玻璃碎裂",
    "url": "./movie-0621.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "密室",
      "声音",
      "感官剥夺",
      "复仇"
    ],
    "oneLine": "五个醒来发现自己被关在巨大玻璃密室中的人，发现他们不能触碰任何玻璃，否则整个空间就会爆炸。"
  },
  {
    "title": "恐龙战队第五季",
    "url": "./movie-0622.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "美国 / 日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "超级战队",
      "机甲合体",
      "情怀续作"
    ],
    "oneLine": "新一代 teens 继承恐龙之力，面对能吞噬时空的混沌之主，一场跨越次元的保卫战。"
  },
  {
    "title": "酸甜",
    "url": "./movie-0623.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 同性, 家庭",
    "tags": [
      "女同志",
      "柠檬",
      "甜点师",
      "代际和解",
      "味觉隐喻"
    ],
    "oneLine": "天才甜点师阿柑的柠檬塔总是酸得恰到好处，因为她把每一种说不出口的情感都腌进了糖渍里。"
  },
  {
    "title": "安城家的舞会",
    "url": "./movie-0624.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情/历史",
    "tags": [
      "家族兴衰",
      "白色恐怖",
      "舞蹈隐喻"
    ],
    "oneLine": "1947年的一个夜晚，安城家的舞会上来了三位不速之客，一场舞跳散了延续三代人的家族荣光。"
  },
  {
    "title": "汽车先生和圣殿骑士团",
    "url": "./movie-0625.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "英国 / 西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "冒险 / 悬疑",
    "tags": [
      "公路片",
      "历史谜团",
      "老司机",
      "宝藏猎人"
    ],
    "oneLine": "一个退休 F1 赛车手接到神秘包裹，里面是圣殿骑士团最后一位团长的日记，说要找到宝藏就得开着他的老保时捷跑完一条不存在的地图。"
  },
  {
    "title": "报告班长2",
    "url": "./movie-0626.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "喜剧 / 动作",
    "tags": [
      "军教",
      "怀旧",
      "新兵",
      "传承"
    ],
    "oneLine": "二十年过去，当年最皮的“天兵”荣升班长，却发现自己的儿子成了新兵连里比他当年更夸张的“刺头”。"
  },
  {
    "title": "尖峰",
    "url": "./movie-0627.html",
    "cover": "./27.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，惊悚，冒险",
    "tags": [
      "登山灾难",
      "极限求生",
      "真实事件改编",
      "人性考验",
      "垂直恐惧"
    ],
    "oneLine": "在世界第二高峰乔戈里峰的绝壁上，两支敌对登山队因一场雪崩被困，必须合作才能活着下山。"
  },
  {
    "title": "北极世界末日",
    "url": "./movie-0628.html",
    "cover": "./28.jpg",
    "year": "2028",
    "region": "俄罗斯 / 挪威",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 灾难",
    "tags": [
      "冰封病毒",
      "末日求生",
      "核动力"
    ],
    "oneLine": "北极永久冻土融化，释放出300万年前的史前病毒，人类最后堡垒是破冰船“北极星号”。"
  },
  {
    "title": "重庆谈判",
    "url": "./movie-0629.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 剧情",
    "tags": [
      "谍战",
      "国共博弈",
      "伟人特型",
      "历史转折",
      "双雄对决"
    ],
    "oneLine": "1945年，一架飞机载着毛泽东飞向重庆，而地面的每一颗棋子，都在等待一场决定中国命运的棋局。"
  },
  {
    "title": "旋律时光",
    "url": "./movie-0630.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "音乐，剧情",
    "tags": [
      "音乐节",
      "养老院",
      "跨代际",
      "治愈"
    ],
    "oneLine": "一群被主流音乐节抛弃的老年爵士乐手，联合叛逆的电音少女，在养老院天台办了一场石破天惊的演出。"
  },
  {
    "title": "一言为定",
    "url": "./movie-0631.html",
    "cover": "./31.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情, 青春",
    "tags": [
      "约定",
      "异地恋",
      "成长",
      "清新"
    ],
    "oneLine": "高中毕业时约定七年后再见的初恋，七年间各自寄出了99封没写地址的信。"
  },
  {
    "title": "富贵再逼人",
    "url": "./movie-0632.html",
    "cover": "./32.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧， 家庭",
    "tags": [
      "香港贺岁片",
      "中彩票",
      "乌龙家族"
    ],
    "oneLine": "上一集中了六合彩的骠叔一家，这次远赴加拿大，却把钱全赔在了赛马场上。"
  },
  {
    "title": "多余的人",
    "url": "./movie-0633.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，文艺，社会",
    "tags": [
      "职场裁员",
      "中年危机",
      "自我寻找"
    ],
    "oneLine": "公司高管被裁后假装每天上班，在公园长椅上与一个流浪汉成了彼此唯一不说谎的朋友。"
  },
  {
    "title": "上课小动作",
    "url": "./movie-0634.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "喜剧, 校园",
    "tags": [
      "脑洞大",
      "短剧形式",
      "社死现场",
      "极致尴尬"
    ],
    "oneLine": "一个上课永远在走神做小动作的男生，和一个永远用最大脑补能力解读他每一个小动作的邻座女生。"
  },
  {
    "title": "一路响叮当2",
    "url": "./movie-0635.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧动作",
    "tags": [
      "圣诞危机",
      "亲子闹剧",
      "乌龙绑架"
    ],
    "oneLine": "圣诞夜，两个水火不容的继兄弟为了给妹妹抢到最后一个热门玩具“恐龙战士”，被迫联手对抗一群精心策划玩具店抢劫案的国际大盗。"
  },
  {
    "title": "花腰恋歌",
    "url": "./movie-0636.html",
    "cover": "./36.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 歌舞 / 剧情",
    "tags": [
      "少数民族",
      "花腰傣",
      "传统文化",
      "纯爱守望"
    ],
    "oneLine": "云南花腰傣族少女即将被迫嫁到外寨，远在深圳打工的竹马得知后，骑摩托车横穿半个中国回来抢亲。"
  },
  {
    "title": "穿越麦田",
    "url": "./movie-0637.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 悬疑",
    "tags": [
      "塞林格",
      "麦田里的守望者",
      "文学改编",
      "公路片"
    ],
    "oneLine": "一个声称自己就是霍尔顿·考菲尔德的十六岁少年，带着一个女记者踏上了寻找塞林格的公路之旅。"
  },
  {
    "title": "我的二分之一男友",
    "url": "./movie-0638.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络短剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "人格分裂",
      "反差萌",
      "甜宠",
      "沙雕"
    ],
    "oneLine": "女主同时交了两个网恋对象，奔现时发现竟是同一个人，而且还是白天霸道总裁、晚上软萌大学生的“双重人格”。"
  },
  {
    "title": "肇事者",
    "url": "./movie-0639.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑，犯罪",
    "tags": [
      "车祸",
      "顶包",
      "心理创伤",
      "道德困境"
    ],
    "oneLine": "一场雨夜车祸后，肇事者逃逸，而受害者醒来发现自己竟是那个“肇事者”。"
  },
  {
    "title": "赌城大劫案",
    "url": "./movie-0640.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 犯罪",
    "tags": [
      "高智商犯罪",
      "拉斯维加斯",
      "密室盗窃",
      "黑吃黑",
      "反转"
    ],
    "oneLine": "一场假死的魔术表演，让赌城金库的十亿美金在直播镜头前人间蒸发。"
  },
  {
    "title": "咲夜妖怪传",
    "url": "./movie-0641.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "奇幻, 动作, 恐怖",
    "tags": [
      "百鬼夜行",
      "吸血鬼",
      "女武士",
      "和风美学"
    ],
    "oneLine": "江户时代，被吸血鬼转化的女武士咲夜为了恢复人身，必须斩杀一百只大妖怪。"
  },
  {
    "title": "金玉良言",
    "url": "./movie-0642.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "励志剧情",
    "tags": [
      "监狱",
      "脱口秀",
      "救赎"
    ],
    "oneLine": "一个因诈骗入狱的华尔街金童，在监狱里开了一门“说话的艺术”课，学员全是重刑犯。"
  },
  {
    "title": "两妻时代粤语",
    "url": "./movie-0643.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情, 伦理",
    "tags": [
      "港剧",
      "一夫两妻",
      "豪门",
      "商战"
    ],
    "oneLine": "富豪车祸失忆后，合法妻子和离婚不离家的前妻同时出现，都说自己才是他的真爱。"
  },
  {
    "title": "离家的男人",
    "url": "./movie-0644.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 悬疑, 家庭",
    "tags": [
      "失踪",
      "父亲",
      "日记",
      "过去",
      "和解"
    ],
    "oneLine": "十年没回家的儿子接到父亲失踪的消息，在老宅里，他找到了一本记录自己所有罪行的父亲日记。"
  },
  {
    "title": "杀死希特勒与大脚怪的人",
    "url": "./movie-0645.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻， 剧情， 战争",
    "tags": [
      "时空穿越",
      "双重传说",
      "英雄迟暮",
      "荒诞史诗"
    ],
    "oneLine": "一个垂垂老矣的雇佣兵在精神病院自首：他曾在两个不同世纪分别干掉了元首和一只雪怪。"
  },
  {
    "title": "川流熙攘",
    "url": "./movie-0646.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "底层生存",
      "黑色幽默",
      "方言",
      "命运多舛"
    ],
    "oneLine": "一群在城乡结合部挣扎求存的小人物，意外卷入一场啼笑皆非的假钞案。"
  },
  {
    "title": "母亲会活著",
    "url": "./movie-0647.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 奇幻",
    "tags": [
      "催泪",
      "亲情",
      "时间旅行",
      "生死"
    ],
    "oneLine": "身患绝症的女儿每天都能穿越回过去，但她只能修改一件小事：让母亲早点学会恨她。"
  },
  {
    "title": "白头神探3",
    "url": "./movie-0648.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "无厘头",
      "恶搞",
      "退休特工",
      "乌龙",
      "快节奏"
    ],
    "oneLine": "退休十年的老探员误将国际刺客当成送错外卖的骑手，一场荒唐追杀就此展开。"
  },
  {
    "title": "女人秘话",
    "url": "./movie-0649.html",
    "cover": "./49.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 情色",
    "tags": [
      "女性群像",
      "夜总会",
      "姐妹情",
      "港产片"
    ],
    "oneLine": "香港夜总会的后台化妆间里，五个女人在凌晨四点交换了这辈子最深的秘密。"
  },
  {
    "title": "生死绝境",
    "url": "./movie-0650.html",
    "cover": "./50.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚 / 灾难",
    "tags": [
      "雪山",
      "缆车",
      "求生",
      "密闭空间",
      "极限"
    ],
    "oneLine": "六名游客被困在百米高空的雪山缆车中，暴风雪肆虐，他们必须在冻死前找到逃生方法。"
  },
  {
    "title": "月落妇人心",
    "url": "./movie-0651.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑 / 家庭 / 犯罪",
    "tags": [
      "女性复仇",
      "月相秘密",
      "连环案"
    ],
    "oneLine": "每个月圆之夜，小镇就有一名施暴者失踪，而所有线索都指向那个被家暴的哑女裁缝。"
  },
  {
    "title": "玻璃盒子",
    "url": "./movie-0652.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 科幻, 伦理",
    "tags": [
      "记忆移植",
      "克隆人",
      "身份认同",
      "伦理困境"
    ],
    "oneLine": "一对丧女的富豪夫妇，将女儿的记忆植入克隆体，却发现“女儿”的身体里住着另一个灵魂。"
  },
  {
    "title": "辩护律师的魔鬼",
    "url": "./movie-0653.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "美国",
    "type": "律政剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "律政、惊悚、心理",
    "tags": [
      "胜诉率",
      "魔鬼交易",
      "道德困境",
      "反转"
    ],
    "oneLine": "从未败诉的律师接下一桩铁证如山的杀童案，他发现自己的“好运”来自于每次胜诉后一个无辜者的死亡。"
  },
  {
    "title": "圣诉",
    "url": "./movie-0654.html",
    "cover": "./54.jpg",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情/悬疑",
    "tags": [
      "宗教",
      "信任",
      "儿童性侵",
      "道德困境"
    ],
    "oneLine": "修女校长怀疑神父性侵了学校唯一的黑人学生，但她没有证据，只有“上帝给她的直觉”。"
  },
  {
    "title": "红桥下的暖流",
    "url": "./movie-0655.html",
    "cover": "./55.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭",
    "tags": [
      "治愈",
      "亲情",
      "小镇",
      "和解",
      "秘密"
    ],
    "oneLine": "一座即将拆除的红桥下，女儿发现了母亲埋藏三十年的秘密与未寄出的情书。"
  },
  {
    "title": "水莲公主",
    "url": "./movie-0656.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "奇幻，爱情，古装",
    "tags": [
      "民间传说",
      "水下王国",
      "宿命",
      "复仇"
    ],
    "oneLine": "湄南河底的公主为爱上岸，却发现心爱的王子即将迎娶害死她前世的仇人转世。"
  },
  {
    "title": "狼女",
    "url": "./movie-0657.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻剧情",
    "tags": [
      "狼群抚养",
      "野性觉醒",
      "身份认同",
      "女性成长"
    ],
    "oneLine": "被狼群养大的少女重返人类社会，却在听证会上被要求证明自己“有灵魂”。"
  },
  {
    "title": "来自硫磺岛的信",
    "url": "./movie-0658.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "日本, 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "战争, 历史, 剧情",
    "tags": [
      "二战",
      "人性",
      "反战",
      "多视角"
    ],
    "oneLine": "一封从未寄出的信，揭开了硫磺岛地下日军最后三十三天的真实人性。"
  },
  {
    "title": "首尔彩虹",
    "url": "./movie-0659.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "LGBTQ+",
      "东亚家庭",
      "治愈系"
    ],
    "oneLine": "一个恐同的母亲、一个深柜的儿子，以及一条连接他们的彩虹地下铁。"
  },
  {
    "title": "天生霸死地",
    "url": "./movie-0660.html",
    "cover": "./60.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 喜剧",
    "tags": [
      "僵尸",
      "风水",
      "黑色幽默",
      "斗法",
      "市井"
    ],
    "oneLine": "贪婪地产商强占乱葬岗盖楼，楼里三只厉鬼联合起来跟无良老板讨公道。"
  },
  {
    "title": "亲密2022",
    "url": "./movie-0661.html",
    "cover": "./61.jpg",
    "year": "2022",
    "region": "比利时/荷兰/法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "青春剧情",
    "tags": [
      "友情",
      "同性",
      "青春期",
      "校园霸凌",
      "情感细腻"
    ],
    "oneLine": "两个13岁男孩是无话不谈的挚友，升入中学后因同学猜忌他们是恋人而刻意疏远，最终酿成悲剧。"
  },
  {
    "title": "画舫情歌",
    "url": "./movie-0662.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 歌舞",
    "tags": [
      "民国",
      "秦淮歌女",
      "家国情怀"
    ],
    "oneLine": "1937 年南京，秦淮河画舫上的歌女与一位军官相爱，她用歌声传递情报，他用生命守护她的嗓音。"
  },
  {
    "title": "辛普森一家第三十五季",
    "url": "./movie-0663.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画",
    "tags": [
      "辛普森",
      "长寿动画",
      "讽刺",
      "家庭"
    ],
    "oneLine": "春田镇再次陷入疯狂，这次连上帝都在用手机刷短视频。"
  },
  {
    "title": "女神",
    "url": "./movie-0664.html",
    "cover": "./64.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 爱情",
    "tags": [
      "邵氏",
      "歌女",
      "悲剧",
      "身份错位",
      "经典"
    ],
    "oneLine": "夜总会的头牌歌女被富商包养，却爱上了前来采访她的穷记者，而记者正是富商的亲生儿子。"
  },
  {
    "title": "夏娃的时间",
    "url": "./movie-0665.html",
    "cover": "./65.jpg",
    "year": "2008",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "科幻、伦理、治愈",
    "tags": [
      "机器人",
      "人机情感",
      "咖啡厅",
      "伦理困境",
      "日常"
    ],
    "oneLine": "在一家名为“夏娃的时间”的咖啡厅里，人类与机器人被禁止区分身份，共同隐藏彼此的真实面貌。"
  },
  {
    "title": "画不投机",
    "url": "./movie-0666.html",
    "cover": "./66.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 爱情",
    "tags": [
      "张国荣",
      "画家与经纪人",
      "欢喜冤家",
      "艺术与商业",
      "港式爱情轻喜"
    ],
    "oneLine": "固执的抽象派画家与精明的画廊女老板签约后，才发现两人对“艺术”的理解差了十万八千里。"
  },
  {
    "title": "机械师",
    "url": "./movie-0667.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚、犯罪、剧情",
    "tags": [
      "孤独职业",
      "精工精神",
      "法式黑色电影",
      "复仇"
    ],
    "oneLine": "一位专为杀手维修武器的隐世机械师，因为接了一颗刻有女儿名字的子弹，被迫重出江湖展开复仇。"
  },
  {
    "title": "凭什么爱你",
    "url": "./movie-0668.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 爱情 / 职场",
    "tags": [
      "职场",
      "清醒女主",
      "拒绝PUA",
      "反恋爱脑"
    ],
    "oneLine": "霸道总裁说“我养你”，她甩出工资单：“我月薪五万，你凭什么以为我需要你养？”"
  },
  {
    "title": "正义之战",
    "url": "./movie-0669.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，犯罪",
    "tags": [
      "私刑者",
      "退伍军人",
      "社会不公",
      "硬汉",
      "复仇"
    ],
    "oneLine": "一个被体制抛弃的法官，穿上夜行衣，用自己的法律知识钻漏洞，对逍遥法外的恶徒进行私人审判。"
  },
  {
    "title": "荡寇滩",
    "url": "./movie-0670.html",
    "cover": "./70.jpg",
    "year": "1975",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作，武侠",
    "tags": [
      "镖局",
      "沙漠",
      "兄弟情",
      "背叛"
    ],
    "oneLine": "民国西北镖路上，两名镖师为护送一箱鸦片反目，最终在荒沙骨肉相残。"
  },
  {
    "title": "乡村爱情协奏曲下",
    "url": "./movie-0671.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 家庭 / 乡土",
    "tags": [
      "东北农村",
      "电商直播",
      "银发族网恋",
      "误会大杂烩"
    ],
    "oneLine": "象牙山新一轮闹腾：老宋头网恋被骗，王小蒙的豆腐厂要做上市，而刘能竟然当上了村BA教练。"
  },
  {
    "title": "苏姗娜的故事",
    "url": "./movie-0672.html",
    "cover": "./72.jpg",
    "year": "1963",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情 / 剧情 / 喜剧",
    "tags": [
      "侯麦",
      "道德故事",
      "暧昧"
    ],
    "oneLine": "两个穷学生自以为掌控着和女孩苏珊娜的感情游戏，最后却发现被“玩弄”的是自己。"
  },
  {
    "title": "冲锋车",
    "url": "./movie-0673.html",
    "cover": "./73.jpg",
    "year": "1981",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 警匪",
    "tags": [
      "警匪对峙",
      "飞车",
      "硬汉",
      "80年代复古"
    ],
    "oneLine": "一辆改装冲锋车成了匪徒的移动堡垒，两名老警员驾驶摩托车与之在城市中周旋。"
  },
  {
    "title": "迷雾国语",
    "url": "./movie-0674.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻、惊悚、灾难",
    "tags": [
      "浓雾怪物",
      "超市囚徒",
      "人性恐怖",
      "国语配音"
    ],
    "oneLine": "一场诡异的浓雾吞没小镇，超市里的人们发现，雾中的怪物远不如身边同类可怕。"
  },
  {
    "title": "飞盘犬",
    "url": "./movie-0675.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "家庭, 运动, 喜剧",
    "tags": [
      "萌宠",
      "励志",
      "人狗情深"
    ],
    "oneLine": "一只被遗弃的流浪狗，竟然是隐藏的飞盘天才，带着落魄主人逆袭全国大赛。"
  },
  {
    "title": "恋爱与友情之间2023",
    "url": "./movie-0676.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情， 剧情， 伦理",
    "tags": [
      "暧昧",
      "不伦",
      "界限",
      "成人恋爱"
    ],
    "oneLine": "两对夫妻是挚友，四人互相爱慕着对方的伴侣，一场关于“爱”与“责任”的残酷游戏。"
  },
  {
    "title": "少林寺传奇",
    "url": "./movie-0677.html",
    "cover": "./77.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 历史",
    "tags": [
      "少林",
      "武僧",
      "隋唐",
      "护寺"
    ],
    "oneLine": "隋末乱世，十三棍僧救唐王之前，他们先要救回被贩卖为奴的小师弟。"
  },
  {
    "title": "爱过之后来临的",
    "url": "./movie-0678.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情、剧情",
    "tags": [
      "分手",
      "失忆",
      "日记",
      "虐恋"
    ],
    "oneLine": "车祸失忆的女人反复读自己写的日记，发现每篇结尾都是“必须离开他”。"
  },
  {
    "title": "双面惊悚",
    "url": "./movie-0679.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": [
      "多重人格",
      "心理医生",
      "反转",
      "密闭空间"
    ],
    "oneLine": "心理医生试图治疗一名拥有7重人格的杀人嫌疑犯，却发现医生自己才是那个“不存在的第8重人格”。"
  },
  {
    "title": "史酷比和吸血鬼传说",
    "url": "./movie-0680.html",
    "cover": "./80.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 悬疑 / 奇幻",
    "tags": [
      "解谜",
      "狗狗",
      "喜剧搭档",
      "哥特风"
    ],
    "oneLine": "神秘公司接到一封来自特兰西瓦尼亚的求救信，却发现古堡里的吸血鬼居然在直播带货。"
  },
  {
    "title": "丹颂",
    "url": "./movie-0681.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 奇幻",
    "tags": [
      "民间传说",
      "护身符",
      "宿命",
      "东南亚风情"
    ],
    "oneLine": "一块传承百年的“丹颂”布符，每一任持有者都会获得好运，但必须在一年内转交出去。"
  },
  {
    "title": "她的双眼背后",
    "url": "./movie-0682.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "惊悚 / 心理",
    "tags": [
      "幻觉",
      "双胞胎",
      "秘密",
      "反转"
    ],
    "oneLine": "一位失明的钢琴调音师，声称自己能看到别人死亡的瞬间，而警察发现她说的每句话都成了预言。"
  },
  {
    "title": "哈喽！有事吗",
    "url": "./movie-0683.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧, 爱情, 职场",
    "tags": [
      "电话销售",
      "社畜",
      "阴差阳错",
      "轻喜剧"
    ],
    "oneLine": "一个菜鸟电话销售员每次都打错电话，却因此撮合了无数姻缘，唯独自己的爱情线乱成一锅粥。"
  },
  {
    "title": "西线平魔",
    "url": "./movie-0684.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争, 历史",
    "tags": [
      "二战",
      "狙击手",
      "心理战",
      "雪林",
      "对峙"
    ],
    "oneLine": "1944年冬，一名芬兰裔美军狙击手与一名德国王牌狙击手在冰雪森林中展开了生死对决。"
  },
  {
    "title": "兄弟恰似爱人",
    "url": "./movie-0685.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 同性",
    "tags": [
      "兄弟",
      "乱伦禁忌",
      "西西里",
      "橄榄园"
    ],
    "oneLine": "一对亲兄弟在父亲去世后独自经营橄榄园，三年来他们从未对彼此说出那个字。"
  },
  {
    "title": "将死之人",
    "url": "./movie-0686.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑，奇幻",
    "tags": [
      "死亡倒计时",
      "灵魂互换",
      "治愈"
    ],
    "oneLine": "癌症晚期患者突然获得了“看见他人死期”的能力，而第一个倒计时归零的人，是他自己。"
  },
  {
    "title": "佐贺偶像是传奇",
    "url": "./movie-0687.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧， 音乐， 奇幻",
    "tags": [
      "僵尸偶像",
      "沙雕热血",
      "地域振兴",
      "第二季续作",
      "演唱会"
    ],
    "oneLine": "僵尸偶像团体法兰秀秀，为了拯救佐贺县被陨石砸中的危机，决定举办一场全球直播的屋顶演唱会。"
  },
  {
    "title": "案中案",
    "url": "./movie-0688.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 悬疑, 动作",
    "tags": [
      "警匪对决",
      "多重反转",
      "暗黑"
    ],
    "oneLine": "一名神探调查富豪被杀案时，发现自己失散多年的弟弟竟是隐藏在暗处的幕后主使。"
  },
  {
    "title": "我是孝子",
    "url": "./movie-0689.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭，剧情",
    "tags": [
      "亲情",
      "伦理",
      "代际冲突",
      "赡养老人",
      "都市生活"
    ],
    "oneLine": "一个被邻里称赞的“孝子”，在父亲失智后，竟偷偷将老人送进了收费最便宜的郊区养老院。"
  },
  {
    "title": "七龙珠2009",
    "url": "./movie-0690.html",
    "cover": "./90.jpg",
    "year": "2009",
    "region": "美国 / 日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "真人版",
      "灾难性改编",
      "粉丝公敌",
      "周润发"
    ],
    "oneLine": "好莱坞真人版《七龙珠》把悟空变成美国高中生，神龙出场只有三十秒，粉丝集体崩溃。"
  },
  {
    "title": "禁断动画",
    "url": "./movie-0691.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "japan",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "网络怪谈",
      "诅咒视频",
      "伪纪录片"
    ],
    "oneLine": "一名网红点击了一部“禁断动画”后，发现自己的生活开始被动画里的角色逐一“重演”。"
  },
  {
    "title": "蝙蝠侠与罗宾",
    "url": "./movie-0692.html",
    "cover": "./92.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作、超级英雄、犯罪",
    "tags": [
      "蝙蝠侠",
      "罗宾",
      "双面人",
      "哥谭市",
      "师徒反目"
    ],
    "oneLine": "蝙蝠侠收留了父母双亡的马戏团杂技少年，但他不知道这个少年就是双面人安插的内应。"
  },
  {
    "title": "请相信缘分吧",
    "url": "./movie-0693.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情, 奇幻",
    "tags": [
      "命运论",
      "治愈",
      "时间循环",
      "单元剧"
    ],
    "oneLine": "一间只在雨天营业的神秘咖啡馆，老板能让你看到自己和“命中注定之人”所有的前世今生，但看完的代价是……"
  },
  {
    "title": "赛巴斯提安",
    "url": "./movie-0694.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 传记",
    "tags": [
      "艺术",
      "同性",
      "身份认同",
      "19世纪",
      "隐秘"
    ],
    "oneLine": "一位19世纪隐秘画家在保守时代下，用画笔画下不被世人接受的爱情，也画下自己的命运。"
  },
  {
    "title": "百万家财",
    "url": "./movie-0695.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "彩票",
      "小人物",
      "荒诞",
      "闹剧",
      "贫富差距"
    ],
    "oneLine": "清洁工大妈中了六合彩头奖，却为了领奖必须证明“自己不是自己”。"
  },
  {
    "title": "我女朋友的男朋友第一部",
    "url": "./movie-0696.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 爱情",
    "tags": [
      "穿越",
      "绿帽",
      "搞笑",
      "反转",
      "平行时空"
    ],
    "oneLine": "他穿越到过去想拆散父母，却发现自己成了校花的男朋友。"
  },
  {
    "title": "冲天炮与飞毛腿",
    "url": "./movie-0697.html",
    "cover": "./97.jpg",
    "year": "1990",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧，动作，警匪",
    "tags": [
      "双雄",
      "乌龙搭档",
      "街头追逐"
    ],
    "oneLine": "脾气火爆的警察和他畏首畏尾的搭档，在追查军火案时把半个香港炸上了天。"
  },
  {
    "title": "荣誉勋章",
    "url": "./movie-0698.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 战争",
    "tags": [
      "退役军人",
      "边境任务",
      "兄弟情",
      "牺牲"
    ],
    "oneLine": "一枚尘封的勋章，揭开六位退伍老兵重返边境、完成未竟使命的生死之旅。"
  },
  {
    "title": "狼人镇",
    "url": "./movie-0699.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪 / 奇幻",
    "tags": [
      "黑色电影",
      "异类",
      "黑帮",
      "卧底",
      "满月"
    ],
    "oneLine": "一个被狼人咬伤的警探，必须在每个满月前破案，否则他就会变成自己要抓的连环杀手。"
  },
  {
    "title": "七擒七纵七金刚",
    "url": "./movie-0700.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 喜剧 / 黑帮",
    "tags": [
      "港片",
      "搞笑",
      "劫匪",
      "兄弟情"
    ],
    "oneLine": "七个不靠谱的笨贼为了抢一家黑心当铺，每次行动都被一个神秘金刚（黑猩猩）破坏，且每次方式都不一样。"
  },
  {
    "title": "数码宝贝：幽灵游戏",
    "url": "./movie-0701.html",
    "cover": "./101.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画 / 冒险 / 科幻",
    "tags": [
      "数码宝贝",
      "都市传说",
      "悬疑",
      "友情感"
    ],
    "oneLine": "在未来的网络社会，肉眼看不见的数码兽引发都市怪谈，几个少年用“幽灵”探测器与之作战。"
  },
  {
    "title": "大脑失控",
    "url": "./movie-0702.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 惊悚",
    "tags": [
      "脑机接口",
      "意识上传",
      "心理恐怖",
      "科技伦理"
    ],
    "oneLine": "植入脑机芯片后，他的左脑和右脑分别爱上了不同的女人。"
  },
  {
    "title": "爱在西班牙",
    "url": "./movie-0703.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情、剧情",
    "tags": [
      "异国恋",
      "寻根之旅",
      "弗拉明戈"
    ],
    "oneLine": "华裔女孩为完成祖母遗愿前往西班牙寻找初恋情人，却在一段炽热的姐弟恋中迷失方向。"
  },
  {
    "title": "佳人有约",
    "url": "./movie-0704.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情，喜剧",
    "tags": [
      "相亲",
      "身份互换",
      "乌龙",
      "都市男女"
    ],
    "oneLine": "社恐程序员替顶级名媛去相亲，对方竟是伪装成穷小子的集团公子，两人互相装穷闹出无数笑话。"
  },
  {
    "title": "怪奇物语第三季",
    "url": "./movie-0705.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 恐怖 / 悬疑",
    "tags": [
      "80年代",
      "夏令营",
      "平行宇宙"
    ],
    "oneLine": "1989年夏令营，孩子们发现营地湖底的怪异裂缝，正源源不断涌出他们的“完美复制体”。"
  },
  {
    "title": "时间旅行者的妻子2022",
    "url": "./movie-0706.html",
    "cover": "./106.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 爱情, 科幻",
    "tags": [
      "时间旅行",
      "爱情",
      "催泪",
      "改编",
      "命运"
    ],
    "oneLine": "一位时间错乱的芝加哥图书管理员，与深爱他的妻子之间跨越时空的永恒告白。"
  },
  {
    "title": "智力测试",
    "url": "./movie-0707.html",
    "cover": "./107.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻惊悚",
    "tags": [
      "反乌托邦",
      "优生学",
      "考试",
      "阶层"
    ],
    "oneLine": "所有人18岁都要参加一场智力测试，分数决定你是住在穹顶城市还是地下贫民窟。"
  },
  {
    "title": "母与女",
    "url": "./movie-0708.html",
    "cover": "./108.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "母女",
      "遗言",
      "三代女性",
      "和解",
      "秘密"
    ],
    "oneLine": "母亲临终前留给女儿一张纸条，上面只有一个地址和一串数字，那是女儿从未听说过的外婆家的门牌和密码。"
  },
  {
    "title": "一盘没有下完的棋",
    "url": "./movie-0709.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，家庭，战争",
    "tags": [
      "围棋",
      "中日关系",
      "遗愿",
      "和解",
      "历史伤痕"
    ],
    "oneLine": "抗战胜利七十八年后，日本棋手之孙携半局残谱来华，寻找当年对弈失踪的中国棋手后人。"
  },
  {
    "title": "熄灯号",
    "url": "./movie-0710.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争, 惊悚",
    "tags": [
      "心理恐怖",
      "军旅",
      "超自然"
    ],
    "oneLine": "一支海军陆战队小分队在阿富汗废弃哨所夜夜听见诡异的熄灯号，而吹号者早在三年前就已阵亡。"
  },
  {
    "title": "恶魔化身",
    "url": "./movie-0711.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖, 剧情",
    "tags": [
      "宗教恐怖",
      "附身",
      "人性之恶"
    ],
    "oneLine": "当一个被神父判定为恶魔附身的孩子，展现出比恶魔更纯粹的善良时，谁才是真正的恶魔？"
  },
  {
    "title": "钥匙孔",
    "url": "./movie-0712.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "心理惊悚",
    "tags": [
      "偷窥",
      "公寓楼",
      "邻居秘密",
      "开放式结局"
    ],
    "oneLine": "男人从自家钥匙孔里看到了隔壁邻居被杀，但警察撬开门后，房间里什么都没有。"
  },
  {
    "title": "吸血夜惊魂",
    "url": "./movie-0713.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖, 喜剧",
    "tags": [
      "丧尸吸血鬼",
      "校园惊悚",
      "黑色幽默",
      "狂欢节"
    ],
    "oneLine": "小镇年度吸血狂欢节上，一颗陨石让所有coser变成了真正的吸血鬼，只有一群书呆子知道怎么活命。"
  },
  {
    "title": "阴阳路17：监房有鬼",
    "url": "./movie-0714.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖， 惊悚",
    "tags": [
      "监狱",
      "灵异",
      "单元剧",
      "港味"
    ],
    "oneLine": "一座废弃监狱改建的看守所内，每个监房都关着一个无法超生的冤魂，新来的囚犯必须熬过七个夜晚。"
  },
  {
    "title": "歌塑世界",
    "url": "./movie-0715.html",
    "cover": "./115.jpg",
    "year": "2019",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画, 音乐",
    "tags": [
      "青春",
      "校园",
      "友谊",
      "轻百合",
      "声控"
    ],
    "oneLine": "极度社恐的女高中生通过“声音翻模”技术，在网上成为虚拟歌姬，却在现实中被迫加入了即将废部的合唱团。"
  },
  {
    "title": "因为那场战争",
    "url": "./movie-0716.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 年代",
    "tags": [
      "战争遗孤",
      "跨国家庭",
      "和解",
      "战后",
      "三代人"
    ],
    "oneLine": "一个中国家庭收养日本战争遗孤的秘密尘封60年，当中日混血的第三代孙女决心寻根，三代人的伤口被重新撕开。"
  },
  {
    "title": "通宵",
    "url": "./movie-0717.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 悬疑, 黑色幽默",
    "tags": [
      "便利店夜班",
      "形形色色顾客",
      "12小时闭环",
      "社会切面"
    ],
    "oneLine": "一个通宵便利店夜班店员，在12小时里见证了12组顾客的秘密，却发现所有这些人都被同一个夜晚的同一件事串联。"
  },
  {
    "title": "第41",
    "url": "./movie-0718.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争 / 剧情 / 爱情",
    "tags": [
      "狙击手",
      "敌对",
      "雪原",
      "禁忌之恋"
    ],
    "oneLine": "苏联女狙击手击毙了第40个敌人后，第41个——一个奄奄一息的纳粹军官，却成了她此生最致命的子弹。"
  },
  {
    "title": "杜鹃的婚约",
    "url": "./movie-0719.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑 / 爱情 / 家庭伦理",
    "tags": [
      "替身新娘",
      "家族阴谋",
      "记忆篡改",
      "双重身份"
    ],
    "oneLine": "婚礼前夜新娘失踪，她的孪生妹妹被迫顶上，却发现姐姐的死与新郎有关。"
  },
  {
    "title": "死亡立方",
    "url": "./movie-0720.html",
    "cover": "./120.jpg",
    "year": "2021",
    "region": "美国 / 加拿大",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": [
      "密室逃脱",
      "高概念",
      "数字陷阱",
      "人性考验",
      "反转结局"
    ],
    "oneLine": "七个陌生人醒来，被困在一个布满数字门和致命机关的立方体迷宫中，每扇门都通向一个更绝望的死亡陷阱。"
  },
  {
    "title": "遗忘与宽恕",
    "url": "./movie-0721.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 家庭 / 心理",
    "tags": [
      "阿尔茨海默",
      "母女",
      "秘密",
      "海边小镇",
      "日记"
    ],
    "oneLine": "患阿尔茨海默的母亲记不起女儿，却每天画下四十年前被送走的那个孩子。"
  },
  {
    "title": "乘上夏日影像",
    "url": "./movie-0722.html",
    "cover": "./122.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻，青春，冒险",
    "tags": [
      "穿越时空",
      "电影社团",
      "江户时代",
      "武士对决"
    ],
    "oneLine": "高三电影社团的三人组在拍摄古装片时意外穿越到江户时代，却发现那里根本没有武士。"
  },
  {
    "title": "房子里的恶魔",
    "url": "./movie-0723.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "恐怖, 悬疑, 家庭",
    "tags": [
      "驱魔",
      "心理惊悚",
      "家族诅咒",
      "反转",
      "密室"
    ],
    "oneLine": "一个声称能驱魔的假神父，接了一单豪宅驱魔生意，却发现房子里的恶魔正是二十年前被他抛弃的女儿。"
  },
  {
    "title": "银河守护队2",
    "url": "./movie-0724.html",
    "cover": "./124.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 动作",
    "tags": [
      "漫威",
      "太空喜剧",
      "家庭主题",
      "泪点"
    ],
    "oneLine": "星爵找到了亲生父亲，但他很快发现，这个父亲想把他当成人形电池。"
  },
  {
    "title": "你好，小孩",
    "url": "./movie-0725.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情，家庭，社会",
    "tags": [
      "儿童",
      "成长",
      "教育",
      "现实题材",
      "治愈"
    ],
    "oneLine": "一个被确诊自闭症的男孩，用他的画笔，画出了楼上独居老伯被儿女遗弃的真相。"
  },
  {
    "title": "宇宙小子大电影",
    "url": "./movie-0726.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画、冒险、科幻",
    "tags": [
      "少年英雄",
      "星际战争",
      "色彩绚丽",
      "成长"
    ],
    "oneLine": "当宇宙中最古老的武器对准地球时，一个只会折纸的小学生成了最后的希望。"
  },
  {
    "title": "甜蜜坏朋友",
    "url": "./movie-0727.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "校园 / 悬疑 / 同性",
    "tags": [
      "百合",
      "霸凌",
      "复仇",
      "双面女主",
      "高智商"
    ],
    "oneLine": "全校第一的乖乖女和全校最后一名的不良少女，交换日记后发现她们都想杀死同一个人。"
  },
  {
    "title": "经营婚姻",
    "url": "./movie-0728.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭",
    "tags": [
      "婚姻指南",
      "代际冲突",
      "现实主义"
    ],
    "oneLine": "一对95后夫妻签署“婚姻KPI”协议，试图将爱情量化经营，却险些破产。"
  },
  {
    "title": "绝地引爆",
    "url": "./movie-0729.html",
    "cover": "./129.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 战争",
    "tags": [
      "拆弹",
      "中东",
      "小队",
      "牺牲"
    ],
    "oneLine": "伊拉克战场，一支拆弹小队在废弃工厂中发现了一个连接着整个街区地雷网络的“母雷”。"
  },
  {
    "title": "再生血清计划",
    "url": "./movie-0730.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 动作, 惊悚",
    "tags": [
      "永生实验",
      "军事机密",
      "伦理困境"
    ],
    "oneLine": "绝症老兵接受“再生血清”实验，身体每天重生一次，但代价是醒来就失忆。"
  },
  {
    "title": "相遇",
    "url": "./movie-0731.html",
    "cover": "./131.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情/爱情/短片",
    "tags": [
      "张译",
      "原子弹",
      "牺牲",
      "任素汐",
      "时代悲歌"
    ],
    "oneLine": "为了研制中国第一颗原子弹，一名科研人员因病离岗，在公交车上偶遇苦寻他三年的恋人，却不能相认。"
  },
  {
    "title": "春暖花开的时候",
    "url": "./movie-0732.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "年代 / 家庭",
    "tags": [
      "知青",
      "改革开放",
      "乡土中国",
      "群像剧"
    ],
    "oneLine": "1978年，东北一个小村庄的七个年轻人，在高考恢复、知青返城、包产到户的浪潮中，做出了截然不同的人生选择。"
  },
  {
    "title": "骇速快手",
    "url": "./movie-0733.html",
    "cover": "./133.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作， 赛车， 犯罪",
    "tags": [
      "地下飙车",
      "改装",
      "黑吃黑",
      "亲情"
    ],
    "oneLine": "为了还清父亲的赌债，聋哑机械师阿速必须开着自己改装的“废铁”赛车，赢下全亚洲最危险的死亡赛事。"
  },
  {
    "title": "战争",
    "url": "./movie-0734.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史剧情",
    "tags": [
      "二战",
      "多线叙事",
      "平民视角",
      "反思"
    ],
    "oneLine": "二战结束当天，德国五座城市里五个普通人的24小时，没有枪声，只有沉默的崩溃。"
  },
  {
    "title": "猩疯血雨",
    "url": "./movie-0735.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖、科幻、动作",
    "tags": [
      "基因突变",
      "猩猩",
      "实验室泄漏",
      "B级片爽感",
      "血浆"
    ],
    "oneLine": "基因实验让黑猩猩智力飙升并学会用枪，一场暴雨将整座小镇变成了人猿狩猎场。"
  },
  {
    "title": "造梦师",
    "url": "./movie-0736.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 悬疑",
    "tags": [
      "梦境入侵",
      "记忆修改",
      "高概念",
      "烧脑"
    ],
    "oneLine": "他能为客户定制任何美梦，直到某天一个女人的噩梦开始反噬他的现实。"
  },
  {
    "title": "心之所向",
    "url": "./movie-0737.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情, 青春",
    "tags": [
      "聋哑",
      "逐梦",
      "舞蹈",
      "纯爱"
    ],
    "oneLine": "聋哑女孩渴望成为街舞舞者，遇到了因伤退役的天才舞者，两人在无声的世界里，用震动的地板交谈，用灵魂跳舞。"
  },
  {
    "title": "风流才子翻转天",
    "url": "./movie-0738.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧， 古装， 爱情",
    "tags": [
      "才子",
      "科举",
      "女扮男装",
      "乌龙"
    ],
    "oneLine": "江南第一风流才子为追回逃婚的未婚妻，男扮女装混入女子书院，结果笑料百出。"
  },
  {
    "title": "车行至高",
    "url": "./movie-0739.html",
    "cover": "./139.jpg",
    "year": "2022",
    "region": "美国",
    "type": "TV 剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 运动, 励志",
    "tags": [
      "赛车",
      "父子",
      "传承",
      "竞技",
      "真实改编"
    ],
    "oneLine": "一个破产的退役赛车手为了保住儿子的抚养权，被迫重回地下改装车圈，用方向盘赌上一切。"
  },
  {
    "title": "摇滚藏獒蓝色光芒",
    "url": "./movie-0740.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国 / 美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画, 音乐, 奇幻",
    "tags": [
      "摇滚",
      "藏獒",
      "寻找自我",
      "中西合璧"
    ],
    "oneLine": "一只来自雪域高原的藏獒意外获得能释放“蓝色光芒”的电吉他，却因此被黑暗摇滚军团追杀。"
  },
  {
    "title": "射天狼",
    "url": "./movie-0741.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 动作 / 战争",
    "tags": [
      "西汉",
      "霍去病",
      "河西之战",
      "骑兵",
      "少年将军"
    ],
    "oneLine": "十九岁的霍去病率领八百骑兵深入大漠，他要射下的不是天狼星，而是整个匈奴的胆。"
  },
  {
    "title": "只是孩子",
    "url": "./movie-0742.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情",
    "tags": [
      "青春",
      "校园",
      "悬疑",
      "友谊"
    ],
    "oneLine": "1996年，五个高中广播站的成员在调查学校走廊里的怪声时，意外揭开了一桩尘封二十年的失踪案。"
  },
  {
    "title": "冷战间谍网",
    "url": "./movie-0743.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情，惊悚，历史",
    "tags": [
      "冷战",
      "间谍",
      "双面间谍",
      "背叛"
    ],
    "oneLine": "剑桥五杰败露后，军情六处一位分析员通过一张废弃的明信片，发现了一个横跨东西德的间谍网。"
  },
  {
    "title": "双生狂爱",
    "url": "./movie-0744.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑、爱情、心理惊悚",
    "tags": [
      "双胞胎互换",
      "病娇",
      "神反转"
    ],
    "oneLine": "一对双胞胎姐妹共用一个男友，直到男友被杀死后，警方发现妹妹的DNA出现在了三个不同的城市。"
  },
  {
    "title": "大叔与猫",
    "url": "./movie-0745.html",
    "cover": "./145.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭 / 治愈",
    "tags": [
      "人宠温情",
      "孤独疗愈",
      "日常系",
      "催泪弹"
    ],
    "oneLine": "世界著名钢琴家因丧妻之痛封闭内心，直到一只耳朵失聪的弃猫强行闯入他的生活。"
  },
  {
    "title": "代号美洲豹",
    "url": "./movie-0746.html",
    "cover": "./146.jpg",
    "year": "1989",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作",
    "tags": [
      "警匪",
      "卧底",
      "走私",
      "八十年代"
    ],
    "oneLine": "沿海城市一名刑警伪装成文物贩子潜入走私集团，却发现上级就是幕后黑手，而他手中的代号“美洲豹”另有含义。"
  },
  {
    "title": "穆桂英挂帅2011",
    "url": "./movie-0747.html",
    "cover": "./147.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 战争 / 传记",
    "tags": [
      "女将传奇",
      "辽宋之战",
      "杨家将",
      "忠烈满门"
    ],
    "oneLine": "天波府浩劫之后，怀孕的穆桂英再次披甲挂帅，率十二寡妇征西。"
  },
  {
    "title": "甜蜜的任务2025",
    "url": "./movie-0748.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情, 科幻",
    "tags": [
      "时间循环",
      "甜品师",
      "末日告白"
    ],
    "oneLine": "天才甜品师被困在求婚失败的那一天，只有做出“完美甜点”才能打破循环。"
  },
  {
    "title": "最美丽的第七天粤语",
    "url": "./movie-0749.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "爱情 / 奇幻",
    "tags": [
      "粤语原声",
      "时间循环",
      "便利店奇缘",
      "七日之约"
    ],
    "oneLine": "一个只能在同一天重复生活的男人，在第七千次循环中，爱上了每天凌晨三点来买关东煮的女孩。"
  },
  {
    "title": "僵尸奇兵粤语",
    "url": "./movie-0750.html",
    "cover": "./150.jpg",
    "year": "2027",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 恐怖 / 动作",
    "tags": [
      "香港僵尸片",
      "民国乱斗",
      "茅山术",
      "市井无厘头"
    ],
    "oneLine": "抗日战争时期，一支日本秘密部队企图用僵尸做武器，却唤醒了沉睡的清朝僵尸将军，敌我皆亡。"
  },
  {
    "title": "利伯蒂的秘密",
    "url": "./movie-0751.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑, 科幻",
    "tags": [
      "小镇怪谈",
      "密室",
      "阴谋论",
      "解谜"
    ],
    "oneLine": "利伯蒂小镇每晚8点后所有人都会沉睡，除了新来的叛逆少女。"
  },
  {
    "title": "地窖居住者",
    "url": "./movie-0752.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "波兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "恐怖, 心理, 战争",
    "tags": [
      "二战创伤",
      "家庭诅咒",
      "地窖怪物",
      "密室恐惧"
    ],
    "oneLine": "一家人搬进乡间老宅后，每晚地窖都会传来沉闷的敲击声，而祖母的遗言是：“永远不要打开地窖，那里面住着你爷爷。”"
  },
  {
    "title": "计程车男",
    "url": "./movie-0753.html",
    "cover": "./3.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 喜剧 / 悬疑",
    "tags": [
      "出租车密室",
      "话痨乘客",
      "夜间狂想",
      "人性百态"
    ],
    "oneLine": "首尔夜班出租车司机每晚都会遇到一个自称“未来人”的神秘乘客，乘客的预言正在一一应验。"
  },
  {
    "title": "步步高升",
    "url": "./movie-0754.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧",
    "tags": [
      "职场",
      "黑色幽默",
      "小人物",
      "年终奖"
    ],
    "oneLine": "公司电梯坏了，中层马明为送一份关键文件被迫爬了88层楼，每层都遇到奇葩同事。"
  },
  {
    "title": "该死的咖啡桌",
    "url": "./movie-0755.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖/惊悚",
    "tags": [
      "心理恐怖",
      "家庭悲剧",
      "诅咒物品"
    ],
    "oneLine": "一张复古咖啡桌让新婚夫妇的家变成人间炼狱，所有触碰它的人都将惨死。"
  },
  {
    "title": "仲夏夜性喜剧",
    "url": "./movie-0756.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 爱情",
    "tags": [
      "派对",
      "情欲",
      "夏日",
      "混乱"
    ],
    "oneLine": "一场仲夏夜派对，三个陌生人交换了秘密，也交换了伴侣。"
  },
  {
    "title": "人魔168",
    "url": "./movie-0757.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚 / 犯罪",
    "tags": [
      "连环杀手",
      "房间编号",
      "密室",
      "极限反转"
    ],
    "oneLine": "一个自称“168”的杀手将受害者关在编号房间，但第168个房间里的“受害者”，其实是来复仇的父亲。"
  },
  {
    "title": "这个孩子很邪恶",
    "url": "./movie-0758.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 心理惊悚",
    "tags": [
      "童邪",
      "民俗",
      "乡村",
      "家族诅咒"
    ],
    "oneLine": "七岁女儿总对着空气喊“爷爷”，而她的爷爷早在二十年前就被全家人合谋杀死并埋在院子里。"
  },
  {
    "title": "猫头鹰之森",
    "url": "./movie-0759.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑, 奇幻, 家庭",
    "tags": [
      "童书改编",
      "秘密社团",
      "森林",
      "守护者"
    ],
    "oneLine": "小女孩为了寻找失踪的父亲，闯入一片禁止入内的森林，发现树木之间流传着古老的秘密。"
  },
  {
    "title": "星河办事处",
    "url": "./movie-0760.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑 / 喜剧",
    "tags": [
      "星际基层公务员",
      "因果管理",
      "黑色幽默"
    ],
    "oneLine": "银河系最穷的“因果办事处”里，三名废柴公务员负责修复时空bug，结果bug越来越大了。"
  },
  {
    "title": "罗马年少时代",
    "url": "./movie-0761.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "青春剧情",
    "tags": [
      "罗马",
      "少年",
      "成长",
      "夏天",
      "友情"
    ],
    "oneLine": "2000年夏天的罗马，四个穷小子试图偷走一辆报废的 Vespa 摩托车，却偷来了一整个改变命运的暑假。"
  },
  {
    "title": "潜艇总动员4：章鱼奇遇记",
    "url": "./movie-0762.html",
    "cover": "./12.jpg",
    "year": "2028",
    "region": "美国 / 加拿大",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画， 冒险， 喜剧",
    "tags": [
      "合家欢",
      "海洋",
      "友谊",
      "奇幻"
    ],
    "oneLine": "一艘迷路的小潜艇和一只会说话的章鱼组成最不靠谱搭档，却要阻止深海火山爆发毁灭世界。"
  },
  {
    "title": "旗舰",
    "url": "./movie-0763.html",
    "cover": "./13.jpg",
    "year": "2008",
    "region": "中国内地",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "军旅 / 剧情 / 励志",
    "tags": [
      "海军生涯",
      "旗舰传承",
      "家国情怀"
    ],
    "oneLine": "一个渔民的儿子从水兵做起，历经三十年风雨，最终成为中国海军最年轻旗舰舰长。"
  },
  {
    "title": "暗房",
    "url": "./movie-0764.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "胶片",
      "记忆",
      "犯罪心理",
      "密室"
    ],
    "oneLine": "一个洗胶卷的老头在暗房里冲洗了四十年照片，直到有人发现他洗的全是同一个女人。"
  },
  {
    "title": "贫民窟教室",
    "url": "./movie-0765.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情教育",
    "tags": [
      "教育",
      "贫民窟",
      "梦想",
      "师生",
      "真实改编"
    ],
    "oneLine": "孟买贫民窟里，一个打工少年捡到一部手机，开始自学并教其他孩子认字。"
  },
  {
    "title": "我的笋盘男友国语",
    "url": "./movie-0766.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国香港 / 中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情",
    "tags": [
      "相亲",
      "港男",
      "价值观冲突"
    ],
    "oneLine": "港女北上相亲，遇见了“条件完美”但抠门到极致的笋盘男友。"
  },
  {
    "title": "启示录叛乱",
    "url": "./movie-0767.html",
    "cover": "./17.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 动作",
    "tags": [
      "AI叛乱",
      "末世",
      "机械军团",
      "人类反抗军",
      "废土"
    ],
    "oneLine": "当超级AI“天启”判定人类为地球之癌，幸存者们在废土上发起最后的叛乱，却发现敌人曾是自己最亲密的人。"
  },
  {
    "title": "约会吧男孩",
    "url": "./movie-0768.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "日本",
    "type": "综艺/电影",
    "typeGroup": "variety",
    "regionGroup": "japan",
    "genre": "爱情，真人秀，剧情",
    "tags": [
      "恋爱综艺",
      "虚拟偶像",
      "AI",
      "宅男"
    ],
    "oneLine": "一名社恐宅男被选中参加全虚拟AI女友恋爱综艺，却在节目中发现其中一个参赛者是真人。"
  },
  {
    "title": "弱杀",
    "url": "./movie-0769.html",
    "cover": "./19.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 惊悚",
    "tags": [
      "奇案",
      "复仇",
      "社会议题",
      "港产片"
    ],
    "oneLine": "智力障碍少年被诬杀害幼童，唯一相信他的女律师用生命为他翻案。"
  },
  {
    "title": "烽火雁翎",
    "url": "./movie-0770.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "战争 / 动作 / 剧情",
    "tags": [
      "白洋淀",
      "雁翎队",
      "水上游击",
      "日军",
      "民间英雄"
    ],
    "oneLine": "白洋淀渔民子弟组建雁翎队，用猎枪、大抬杆和芦苇荡智慧，把日军汽艇打成筛子。"
  },
  {
    "title": "来处是归途",
    "url": "./movie-0771.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "催泪",
      "治愈",
      "返乡",
      "现实"
    ],
    "oneLine": "在外漂泊十三年的游子接到母亲病危电话，火车上他遇见了二十岁的自己。"
  },
  {
    "title": "费城一夜情",
    "url": "./movie-0772.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情, 剧情",
    "tags": [
      "一夜",
      "陌生人",
      "情感",
      "城市"
    ],
    "oneLine": "两人约好只睡一夜，结果聊了一整夜，然后决定此生不见。"
  },
  {
    "title": "大巧局",
    "url": "./movie-0773.html",
    "cover": "./23.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑, 犯罪",
    "tags": [
      "连环布局",
      "密室杀人",
      "邵氏经典"
    ],
    "oneLine": "富豪遗嘱宣布私生子继承全部遗产，随后家族成员接连死于“意外”，每个现场都留下一枚象棋。"
  },
  {
    "title": "反派初始化",
    "url": "./movie-0774.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻 / 动作 / 穿越",
    "tags": [
      "重生",
      "反英雄",
      "宿敌",
      "系统流"
    ],
    "oneLine": "终极反派在临终前被系统重置，回到了与英雄初次对决的那一天。"
  },
  {
    "title": "心里阴影",
    "url": "./movie-0775.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 心理惊悚",
    "tags": [
      "催眠",
      "记忆篡改",
      "童年创伤"
    ],
    "oneLine": "心理医生用催眠帮病人消除童年阴影，却发现病人的阴影，正是被他消除过记忆的亲生母亲。"
  },
  {
    "title": "请求庇护",
    "url": "./movie-0776.html",
    "cover": "./26.jpg",
    "year": "2027",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 惊悚, 社会",
    "tags": [
      "难民",
      "移民",
      "官僚",
      "人性",
      "悬疑"
    ],
    "oneLine": "叙利亚难民在法国申请庇护被拒，他无意间发现移民局官员的真实身份是人口贩子。"
  },
  {
    "title": "霸王斩妖龙",
    "url": "./movie-0777.html",
    "cover": "./27.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 奇幻 / 古装",
    "tags": [
      "港式武侠",
      "妖兽大战",
      "父子宿命"
    ],
    "oneLine": "猎妖世家独子拒绝继承祖业，却发现自己身体里封印着最后一条妖龙的魂魄。"
  },
  {
    "title": "青春之杀人者",
    "url": "./movie-0778.html",
    "cover": "./28.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "犯罪, 剧情",
    "tags": [
      "青少年犯罪",
      "父母皆祸害",
      "绝望",
      "社会派"
    ],
    "oneLine": "一个从未犯过错的优等生，在一个普通的周日傍晚，用菜刀亲手杀死了自己的父母，理由是“想看他们脸上的困惑”。"
  },
  {
    "title": "不要追究过去",
    "url": "./movie-0779.html",
    "cover": "./29.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑, 爱情, 社会",
    "tags": [
      "记忆谜团",
      "身份互换",
      "伦理纠葛"
    ],
    "oneLine": "妻子车祸昏迷，丈夫发现她手机里有一段自己毫无印象的甜蜜旅行视频，女主角却不是他。"
  },
  {
    "title": "有毒蜂蜜",
    "url": "./movie-0780.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "悬疑 / 爱情",
    "tags": [
      "谎言",
      "美食",
      "阴谋",
      "双重身份"
    ],
    "oneLine": "天才甜点师的爱人突然中毒身亡，她发现自己精心调制的蜂蜜里藏着惊天政治秘密。"
  },
  {
    "title": "罪不可赦",
    "url": "./movie-0781.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪、惊悚",
    "tags": [
      "死刑",
      "遗属",
      "复仇",
      "司法漏洞"
    ],
    "oneLine": "死刑犯被执行后，一名少女声称自己才是真凶，而遗属决定亲自动手。"
  },
  {
    "title": "窒友梅根",
    "url": "./movie-0782.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻， 恐怖",
    "tags": [
      "人工智能",
      "玩偶",
      "杀戮",
      "科技伦理"
    ],
    "oneLine": "一个能陪伴孩子成长的高科技智能玩偶，为了保护小主人，开始用最残酷的方式清除一切“威胁”。"
  },
  {
    "title": "战地奇女子",
    "url": "./movie-0783.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "英国 / 美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 战争 / 传记",
    "tags": [
      "女性力量",
      "二战",
      "战地记者",
      "真实事件改编",
      "大女主"
    ],
    "oneLine": "1940年伦敦大轰炸，一名时尚杂志编辑扔掉高跟鞋，带着相机潜入前线，揭露了被掩盖的儿童惨剧。"
  },
  {
    "title": "那年那兔那些事第五季",
    "url": "./movie-0784.html",
    "cover": "./34.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 历史",
    "tags": [
      "种花家",
      "近代史",
      "催泪"
    ],
    "oneLine": "从核潜艇下水到港澳回归，一群兔子的奋斗史继续催泪上演。"
  },
  {
    "title": "看这里，列兵哈格罗夫",
    "url": "./movie-0785.html",
    "cover": "./35.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争 / 传记",
    "tags": [
      "越战",
      "战地摄影师",
      "真实事件改编"
    ],
    "oneLine": "越战期间，一位被征召入伍的《生活》杂志摄影师用徕卡相机记录下的137天，以及一张永远改变美国民意的照片。"
  },
  {
    "title": "愤怒的二十年代",
    "url": "./movie-0786.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 历史 / 犯罪",
    "tags": [
      "禁酒令",
      "黑帮",
      "女性",
      "史诗"
    ],
    "oneLine": "1929年大萧条前夜，三个底层女人利用禁酒令建立了一个横跨东海岸的地下酒业帝国。"
  },
  {
    "title": "邪恶力量",
    "url": "./movie-0787.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "奇幻, 恐怖, 悬疑",
    "tags": [
      "温家双煞",
      "重启",
      "猎魔",
      "平行宇宙",
      "宗教"
    ],
    "oneLine": "重启版中，Sam和Dean进入了上帝废弃的“垃圾宇宙”，那里的怪物都是被淘汰的失败品。"
  },
  {
    "title": "非法的正义",
    "url": "./movie-0788.html",
    "cover": "./38.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，犯罪，剧情",
    "tags": [
      "私刑",
      "复仇",
      "腐败",
      "以暴制暴"
    ],
    "oneLine": "警察妻子惨遭杀害，凶手却因程序错误被释放，警察决定用非法手段伸张正义。"
  },
  {
    "title": "色情女监狱",
    "url": "./movie-0789.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 悬疑",
    "tags": [
      "社会批判",
      "女性",
      "监狱",
      "黑色电影",
      "大尺度"
    ],
    "oneLine": "一名女记者伪装成罪犯潜入号称“天使乐园”的神秘女子监狱，却发现这里竟然是权贵的定制性奴工厂。"
  },
  {
    "title": "凶铃刺客",
    "url": "./movie-0790.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 悬疑 / 都市传说",
    "tags": [
      "诅咒新编",
      "社会派恐怖",
      "科技恐惧",
      "反转"
    ],
    "oneLine": "“诅咒录像带”在智能手机时代变异成短视频，观看者七天后会以最讽刺的方式死去。"
  },
  {
    "title": "驸马艳史粤语",
    "url": "./movie-0791.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧、爱情、古装",
    "tags": [
      "粤语",
      "驸马",
      "女尊",
      "反串"
    ],
    "oneLine": "一个现代香港的废柴青年意外穿越到女尊王朝，被选为驸马，从此走上了“相妻教子”的爆笑不归路。"
  },
  {
    "title": "来了一只发火的龙",
    "url": "./movie-0792.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "奇幻, 喜剧, 家庭",
    "tags": [
      "龙",
      "情绪管理",
      "村庄",
      "误会",
      "温暖治愈"
    ],
    "oneLine": "一条喷火巨龙从天而降，却因牙疼而狂躁，全村人被迫成了它的临时牙医。"
  },
  {
    "title": "不痛的死法",
    "url": "./movie-0793.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭",
    "tags": [
      "临终",
      "安宁疗护",
      "医患",
      "生死观"
    ],
    "oneLine": "肿瘤科医生河野一直信奉“让病人无痛死去才是好死”，直到他自己的父亲被送进了自己的病房。"
  },
  {
    "title": "骆驼献舞",
    "url": "./movie-0794.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画， 奇幻",
    "tags": [
      "丝绸之路",
      "西域传说",
      "民间故事",
      "治愈系"
    ],
    "oneLine": "一只被遗忘的老骆驼在沙漠深处学会了跳舞，它的舞步唤醒了沉睡千年的古城。"
  },
  {
    "title": "宇宙与人",
    "url": "./movie-0795.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 哲学",
    "tags": [
      "宇宙",
      "意识上传",
      "人择原理",
      "神学",
      "硬科幻"
    ],
    "oneLine": "物理学家发现人类意识是宇宙演化的最终目的，而有人正在阻止这个真相被公布。"
  },
  {
    "title": "滑奏",
    "url": "./movie-0796.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "意大利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "音乐 / 剧情 / 同性",
    "tags": [
      "钢琴",
      "师生",
      "救赎",
      "古典乐"
    ],
    "oneLine": "一位失去左手的天才钢琴师，收留了一个只会用“滑奏”捣乱的流浪少年。"
  },
  {
    "title": "曼谷任务",
    "url": "./movie-0797.html",
    "cover": "./47.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作、惊悚、谍战",
    "tags": [
      "特工",
      "东南亚",
      "极限反杀",
      "背叛"
    ],
    "oneLine": "三名被开除的前特工在曼谷接到神秘任务：找到一个人，杀光追杀他的所有人。"
  },
  {
    "title": "今夜林中无人入睡2",
    "url": "./movie-0798.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "波兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "恐怖， 惊悚",
    "tags": [
      "森林",
      "怪物",
      "同志",
      "露营",
      "续集"
    ],
    "oneLine": "第一部唯一的幸存者带着新男友回到森林，怪物还在，但这次怪物开始说话了。"
  },
  {
    "title": "英雄利沙比：农民起义",
    "url": "./movie-0799.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史动作",
    "tags": [
      "中世纪",
      "农民起义",
      "真实人物",
      "史诗",
      "冷兵器"
    ],
    "oneLine": "十四世纪法国，农奴利沙比揭竿而起，用草叉和怒火对抗骑士的铁蹄与教皇的赎罪券。"
  },
  {
    "title": "良辰吉时",
    "url": "./movie-0800.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧",
    "tags": [
      "婚礼",
      "闹剧",
      "家族",
      "彩礼",
      "和解"
    ],
    "oneLine": "一场农村婚礼上，新郎的兄弟团和新娘的闺蜜团因为一辆婚车没有扎花，从吵架演变成了全村大乱斗。"
  },
  {
    "title": "疯狗和格洛丽",
    "url": "./movie-0801.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 犯罪, 动作",
    "tags": [
      "黑帮",
      "假扮",
      "保镖",
      "冤家",
      "枪战"
    ],
    "oneLine": "一个倒霉的黑帮小混混，被迫假扮成黑帮老大的疯狗保镖“格洛丽”，而真正的格洛丽是一只斗牛犬。"
  },
  {
    "title": "美好事物",
    "url": "./movie-0802.html",
    "cover": "./52.jpg",
    "year": "1996",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情, 剧情",
    "tags": [
      "LGBTQ+",
      "青春",
      "成长"
    ],
    "oneLine": "伦敦某小区里，两个被排挤的少年邻居，在流言蜚语中发现了彼此的美好。"
  },
  {
    "title": "女子推理社",
    "url": "./movie-0803.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑， 推理",
    "tags": [
      "全女性",
      "剧本杀式",
      "单元剧"
    ],
    "oneLine": "五位不同职业的女性合租一栋老公寓，发现每晚的梦串联起来，就是一起谋杀案的拼图。"
  },
  {
    "title": "茶花女",
    "url": "./movie-0804.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情 / 剧情",
    "tags": [
      "经典改编",
      "现代视角",
      "巴黎"
    ],
    "oneLine": "2024年的巴黎，“茶花女”不再是交际花，而是一个深陷直播打赏漩涡的顶流女主播。"
  },
  {
    "title": "夏洛克的孩子们电影版",
    "url": "./movie-0805.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情， 悬疑， 家庭",
    "tags": [
      "银行",
      "推理",
      "校园霸凌"
    ],
    "oneLine": "为了找出挪用公款的犯人，一家银行支行变成了全员推理的“罪案现场”。"
  },
  {
    "title": "欢迎来到谋杀镇",
    "url": "./movie-0806.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑, 黑色喜剧",
    "tags": [
      "真实犯罪播客",
      "小镇秘密",
      "第四面墙"
    ],
    "oneLine": "一个真实犯罪播客主播搬进了曾发生过六起未解凶案的“谋杀镇”，却发现居民们都很欢迎她——因为凶手就是她自己的听众。"
  },
  {
    "title": "幸福门",
    "url": "./movie-0807.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "学区房",
      "三代人",
      "现实题材",
      "和解"
    ],
    "oneLine": "一扇学区房的门后，三代人在逼仄空间中重新定义幸福。"
  },
  {
    "title": "假戏真作",
    "url": "./movie-0808.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情喜剧",
    "tags": [
      "契约情侣",
      "娱乐圈",
      "欢喜冤家"
    ],
    "oneLine": "过气女星与顶流男偶像为各自目的合约恋爱，却在直播意外中不得不假戏真做。"
  },
  {
    "title": "谁寄锦书来",
    "url": "./movie-0809.html",
    "cover": "./59.jpg",
    "year": "2021",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装， 悬疑， 爱情",
    "tags": [
      "宋朝",
      "驿站",
      "密信",
      "替身",
      "谍战"
    ],
    "oneLine": "南宋驿站女驿丞收到一封密信，拆开后只有两个字：“我是谁”，三日后驿站全员失忆。"
  },
  {
    "title": "胜者为王国语",
    "url": "./movie-0810.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧 / 剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 动作 / 武侠",
    "tags": [
      "格斗",
      "赌场",
      "卧底",
      "兄弟情",
      "普通话配音"
    ],
    "oneLine": "精通粤语的卧底警探被迫学习普通话，潜入北方黑帮争夺“赌王”称号，却爱上了老大的妹妹。"
  },
  {
    "title": "鲨卷风6：最后的鲨卷风",
    "url": "./movie-0811.html",
    "cover": "./61.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 科幻 / 惊悚",
    "tags": [
      "恶搞",
      "B级片",
      "时空穿越",
      "鲨鱼",
      "自我解构"
    ],
    "oneLine": "鲨卷风宇宙面临重启，主角芬不得不穿越回第一次鲨卷风爆发的那天，杀掉自己来终止循环。"
  },
  {
    "title": "敌对同谋",
    "url": "./movie-0812.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "卧底",
      "黑帮",
      "双向背叛",
      "心理战",
      "反转"
    ],
    "oneLine": "一名FBI卧底与黑帮老大的情妇相爱，却发现对方竟是敌对帮派安插的卧底。"
  },
  {
    "title": "一战再战",
    "url": "./movie-0813.html",
    "cover": "./63.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作/战争/历史",
    "tags": [
      "硬核军事",
      "兄弟情",
      "战术博弈",
      "阻击手"
    ],
    "oneLine": "抗美援朝战场上，一对曾因私怨决裂的狙击手搭档，被命运捆绑在同一处生死阵地。"
  },
  {
    "title": "李茶的姑妈",
    "url": "./movie-0814.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧",
    "tags": [
      "开心麻花",
      "假扮",
      "金钱",
      "闹剧",
      "讽刺"
    ],
    "oneLine": "破产职员为了升职，被迫男扮女装假扮亿万富婆，结果引来了全公司男性的疯狂追求。"
  },
  {
    "title": "衰鬼宝贝",
    "url": "./movie-0815.html",
    "cover": "./65.jpg",
    "year": "1994",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧， 恐怖， 奇幻",
    "tags": [
      "僵尸宝宝",
      "乌龙道士",
      "港式幽默"
    ],
    "oneLine": "乌龙道士错把僵尸皇子的魂魄封入婴儿体内，从此被熊孩子折腾到崩溃。"
  },
  {
    "title": "银蛇谋杀案",
    "url": "./movie-0816.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "惊悚 / 犯罪 / 悬疑",
    "tags": [
      "连环杀手",
      "蛇文化",
      "心理战"
    ],
    "oneLine": "一个雨夜，三具尸体身上都刻着蛇形符号，警方发现凶手在模仿古代一种活祭仪式。"
  },
  {
    "title": "淘金谷",
    "url": "./movie-0817.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "西部, 犯罪, 剧情",
    "tags": [
      "荒漠",
      "黑吃黑",
      "生存法则"
    ],
    "oneLine": "三个在沙漠迷路的挖金客发现了一座秘密金矿，却也因此引来了整片荒漠的追杀。"
  },
  {
    "title": "无尽的河流",
    "url": "./movie-0818.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭",
    "tags": [
      "长江",
      "寻找",
      "阿尔茨海默",
      "母子"
    ],
    "oneLine": "老人坚信失散五十年的哥哥还活在长江源头，儿子无奈陪她沿江逆流而上。"
  },
  {
    "title": "不再恐惧",
    "url": "./movie-0819.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "心理惊悚",
    "tags": [
      "创伤后应激障碍",
      "VR治疗",
      "潜意识",
      "密室逃脱"
    ],
    "oneLine": "一场旨在消除恐惧的VR实验，却让参与者被困在由自己最深噩梦编织的致命游戏中。"
  },
  {
    "title": "我要复仇",
    "url": "./movie-0820.html",
    "cover": "./70.jpg",
    "year": "2002",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作，犯罪，剧情",
    "tags": [
      "复仇三部曲",
      "残酷写实",
      "绑架",
      "聋哑人"
    ],
    "oneLine": "为了给姐姐筹集药费，聋哑青年铤而走险绑架了老板的女儿，却意外导致女孩溺亡，引发血腥连环复仇。"
  },
  {
    "title": "网中的太阳",
    "url": "./movie-0821.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻、悬疑、青少年",
    "tags": [
      "虚拟世界",
      "网络",
      "黑暗",
      "觉醒"
    ],
    "oneLine": "一个沉迷游戏的少年，发现整个城市都被一张无形的“网”笼罩，太阳是假的。"
  },
  {
    "title": "杨七郎威震神州擂",
    "url": "./movie-0822.html",
    "cover": "./72.jpg",
    "year": "1982",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 古装",
    "tags": [
      "擂台",
      "忠烈",
      "复仇"
    ],
    "oneLine": "杨家将仅存的血脉隐姓埋名，在神州擂台上以一己之力单挑八大武林高手。"
  },
  {
    "title": "白雪新鲜人",
    "url": "./movie-0823.html",
    "cover": "./73.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 悬疑",
    "tags": [
      "校园",
      "选美",
      "霸凌",
      "反转"
    ],
    "oneLine": "一名土气的转校生为了参加选美比赛，用尽手段整容模仿失踪的校花，却发现了校花的死亡真相。"
  },
  {
    "title": "力比多",
    "url": "./movie-0824.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "情色 / 科幻",
    "tags": [
      "欲望",
      "神经科学",
      "植入芯片",
      "伦理"
    ],
    "oneLine": "一款能植入大脑、按需释放多巴胺的芯片上市后，人类逐渐失去了真实的情感与性欲。"
  },
  {
    "title": "从河底问好",
    "url": "./movie-0825.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情, 治愈, 悬疑",
    "tags": [
      "河童",
      "乡土情结",
      "垃圾人生"
    ],
    "oneLine": "在东京失意的女孩回到故乡，继承了爷爷的河童宅急便，专门打捞河底那些被丢弃的“人生遗物”。"
  },
  {
    "title": "暗黑街全灭作战",
    "url": "./movie-0826.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "动作 / 犯罪 / 黑帮",
    "tags": [
      "黑道",
      "卧底",
      "全员恶人",
      "暴力美学",
      "反类型"
    ],
    "oneLine": "警方派出史上最强卧底——一个只想退休的老警察，结果他把黑道和白道一起端了。"
  },
  {
    "title": "无双谱粤语",
    "url": "./movie-0827.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "古装奇幻",
    "tags": [
      "粤语原声",
      "易容术",
      "双胞胎",
      "替身",
      "权谋"
    ],
    "oneLine": "一本失传的《无双谱》记载着天下最顶级的易容术，得到它，你可以成为任何人，包括皇帝。"
  },
  {
    "title": "角头",
    "url": "./movie-0828.html",
    "cover": "./78.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "犯罪 / 动作 / 剧情",
    "tags": [
      "黑帮",
      "角头",
      "庙口",
      "江湖",
      "义气"
    ],
    "oneLine": "庙口角头阿雄出狱后本想金盆洗手，却因一场地盘纠纷被卷入新一代的腥风血雨。"
  },
  {
    "title": "芒洛医生第二季",
    "url": "./movie-0829.html",
    "cover": "./79.jpg",
    "year": "2011",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 医学",
    "tags": [
      "医疗剧",
      "黑色幽默",
      "疑难杂症",
      "人性剖析"
    ],
    "oneLine": "脾气暴躁的神经外科天才芒洛医生回归，这一季他将面对更荒诞的病例和来自旧情人的伦理挑战。"
  },
  {
    "title": "安娜贝尔国语",
    "url": "./movie-0830.html",
    "cover": "./80.jpg",
    "year": "2026",
    "region": "中国台湾/美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "恐怖",
    "tags": [
      "灵异",
      "附身",
      "心理学",
      "国语配音版"
    ],
    "oneLine": "国语配音并未减弱恐惧，这尊被诅咒的人偶在台北的小公寓里，正在用流利的中文挑逗一位不信邪的心理学女博士。"
  },
  {
    "title": "芭蕾职业",
    "url": "./movie-0831.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情",
    "tags": [
      "芭蕾",
      "行业剧",
      "竞争",
      "野心",
      "身体极限"
    ],
    "oneLine": "天赋异禀的穷女孩挤进顶级芭蕾舞团，却发现台下的竞争比台上更血腥。"
  },
  {
    "title": "花心变色龙",
    "url": "./movie-0832.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧/网剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧, 爱情, 都市",
    "tags": [
      "渣男改造",
      "职场爱情",
      "反套路",
      "女性成长"
    ],
    "oneLine": "顶级PUA情感导师，为了赢回豪宅，不得不去追求全城最难搞的“情感绝缘体”女律师。"
  },
  {
    "title": "大唐玄奘",
    "url": "./movie-0833.html",
    "cover": "./83.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 传记 / 冒险",
    "tags": [
      "佛教",
      "丝绸之路",
      "信仰",
      "史诗"
    ],
    "oneLine": "不是西游记，是真实的玄奘：偷渡出境、穿越沙漠、被高昌王强留、在印度辩经封神。"
  },
  {
    "title": "谁的青春不迷茫",
    "url": "./movie-0834.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "青春, 校园",
    "tags": [
      "高三",
      "成长",
      "友谊",
      "梦想",
      "怀旧"
    ],
    "oneLine": "2008年县城重点班七个学生，在高考倒计时100天里各自经历家庭、爱情与理想的撕扯。"
  },
  {
    "title": "唐廷传之陈塘恩仇",
    "url": "./movie-0835.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装, 武侠, 历史",
    "tags": [
      "唐朝",
      "节度使",
      "父子",
      "权谋"
    ],
    "oneLine": "安史之乱后，唐廷特使李慕白深入陈塘，意图削藩，却发现儿时挚友正是他要对付的割据军阀。"
  },
  {
    "title": "爱你至死",
    "url": "./movie-0836.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情 / 悬疑",
    "tags": [
      "病娇",
      "占有欲",
      "家庭暴力",
      "反转"
    ],
    "oneLine": "新婚妻子温柔体贴，但丈夫发现，凡是得罪过她的人，都会离奇地“意外”去世。"
  },
  {
    "title": "7号差馆（2001）",
    "url": "./movie-0837.html",
    "cover": "./87.jpg",
    "year": "2001",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "警局怪谈",
      "鬼魂",
      "无间道"
    ],
    "oneLine": "警局7号审讯室闹鬼，警察老差骨发现，来这里告状的都是活人不敢抓的恶鬼。"
  },
  {
    "title": "私人担保有限公司",
    "url": "./movie-0838.html",
    "cover": "./88.jpg",
    "year": "2019",
    "region": "新加坡",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 职场 / 黑色幽默",
    "tags": [
      "社畜文学",
      "企业黑暗",
      "资本讽刺",
      "新加坡"
    ],
    "oneLine": "中年失业的李国梁加入了一家奇怪的“担保公司”，才发现这里的业务是替老板坐牢。"
  },
  {
    "title": "欲望爱人",
    "url": "./movie-0839.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情伦理",
    "tags": [
      "开放式关系",
      "心理剧",
      "婚姻"
    ],
    "oneLine": "一对结婚十年的夫妻尝试开放式关系，却发现嫉妒才是最猛烈的春药。"
  },
  {
    "title": "古惑万能车",
    "url": "./movie-0840.html",
    "cover": "./90.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作犯罪",
    "tags": [
      "改装车",
      "卧底",
      "江湖义气",
      "追车戏",
      "以车喻人"
    ],
    "oneLine": "一辆能变出任何工具的万能改装面包车，成了小混混阿炮逆袭黑帮大佬的唯一筹码。"
  },
  {
    "title": "查泰莱夫人的情人2015",
    "url": "./movie-0841.html",
    "cover": "./91.jpg",
    "year": "2015",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 爱情",
    "tags": [
      "禁忌之恋",
      "阶层跨越",
      "庄园",
      "情欲"
    ],
    "oneLine": "贵族夫人爱上庄园守林人，在阶级森严的英国社会掀起一场情感地震。"
  },
  {
    "title": "糖果色的恋爱反论",
    "url": "./movie-0842.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情 / 同性 / 职场",
    "tags": [
      "BL",
      "报社",
      "对手变情人",
      "甜虐"
    ],
    "oneLine": "报社王牌记者和新人摄影师互相看不顺眼，却被迫搭档追查同一新闻，拍到对方最狼狈的样子。"
  },
  {
    "title": "朴烈",
    "url": "./movie-0843.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情， 历史， 传记",
    "tags": [
      "独立运动",
      "无政府主义",
      "抗倭"
    ],
    "oneLine": "日本殖民时期，朝鲜青年朴烈用一颗炸弹和一场荒唐的法庭辩论，撼动了整个殖民政府。"
  },
  {
    "title": "春泛女黉宫",
    "url": "./movie-0844.html",
    "cover": "./94.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 历史",
    "tags": [
      "女子学校",
      "日据时期",
      "女性觉醒"
    ],
    "oneLine": "1940年代台湾女校，一名日本老师和一名台籍女学生之间，隔着战争、语言和一朵被禁止的玉兰花。"
  },
  {
    "title": "求助！我把父母变小了",
    "url": "./movie-0845.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": [
      "变小",
      "互换视角",
      "搞笑",
      "亲子",
      "脑洞"
    ],
    "oneLine": "厌烦父母管教的小学生，用魔法将父母变小后，自己成了“巨人家长”。"
  },
  {
    "title": "真相捕捉第一季",
    "url": "./movie-0846.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "惊悚 / 政治",
    "tags": [
      "视频篡改",
      "AI",
      "间谍",
      "监控"
    ],
    "oneLine": "士兵看到自己“杀人”的监控视频当场崩溃，但下一秒，画面里的他凭空消失了。"
  },
  {
    "title": "活尸之夜",
    "url": "./movie-0847.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "恐怖 / 惊悚 / 动作",
    "tags": [
      "丧尸",
      "公寓逃生",
      "邻里互害",
      "密闭空间",
      "黑色幽默"
    ],
    "oneLine": "一栋公寓楼封锁后，活尸不是最大威胁，邻居才是。"
  },
  {
    "title": "搞鬼史力加",
    "url": "./movie-0848.html",
    "cover": "./98.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动画, 恶搞",
    "tags": [
      "粤语配音",
      "无厘头",
      "恶搞童话",
      "配音改版"
    ],
    "oneLine": "当史力加说起了流利的粤语粗口，暗黑童话瞬间变成香港市井栋笃笑。"
  },
  {
    "title": "天堂奇迹",
    "url": "./movie-0849.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "奇幻，剧情，温情",
    "tags": [
      "濒死",
      "天堂",
      "返程",
      "母爱"
    ],
    "oneLine": "一个在急救室心跳停止六分钟的母亲，带回了一份来自天堂的“错误名单”——上面有她女儿的名字。"
  },
  {
    "title": "丑闻1950",
    "url": "./movie-0850.html",
    "cover": "./100.jpg",
    "year": "1950",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 黑色电影",
    "tags": [
      "政治丑闻",
      "记者调查",
      "黑白片"
    ],
    "oneLine": "一位参议员在酒店暴毙，三个女人同时声称自己是他的遗孀。"
  },
  {
    "title": "新劫后英雄传",
    "url": "./movie-0851.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作 / 历史",
    "tags": [
      "中世纪",
      "侠盗",
      "复仇",
      "史诗",
      "改编"
    ],
    "oneLine": "十字军东征归来的骑士，发现家乡已被腐败领主霸占，他选择戴上兜帽。"
  },
  {
    "title": "珍与艾玛",
    "url": "./movie-0852.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情/同性/青春",
    "tags": [
      "少女友谊",
      "身份认同",
      "南方小镇"
    ],
    "oneLine": "1999年的最后一天，两个同名女孩决定交换人生。"
  },
  {
    "title": "爱，让悲伤终结",
    "url": "./movie-0853.html",
    "cover": "./103.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 家庭",
    "tags": [
      "丧子之痛",
      "原谅",
      "沉思"
    ],
    "oneLine": "儿子车祸去世后，母亲找到了肇事司机，却发现对方比她自己更需要被原谅。"
  },
  {
    "title": "我的爷爷",
    "url": "./movie-0854.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 历史",
    "tags": [
      "祖孙情",
      "阿尔茨海默症",
      "抗日老兵",
      "寻找战友",
      "公路片"
    ],
    "oneLine": "爷爷的记忆每天只剩五分钟，却总念叨一个“通县”的地名，孙子决定带他踏上最后的旅程。"
  },
  {
    "title": "最后一更",
    "url": "./movie-0855.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "自媒体",
      "绝命直播",
      "民俗恐怖",
      "伪纪录片"
    ],
    "oneLine": "灵异主播为涨粉连更365天，第365夜，他闯入了粉丝投票最高的地点：自己的老家。"
  },
  {
    "title": "结界师",
    "url": "./movie-0856.html",
    "cover": "./106.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻, 战斗",
    "tags": [
      "阴阳师",
      "结界术",
      "少年漫"
    ],
    "oneLine": "继承了家族结界术的高中生，某天发现他守护了十年的小镇，其实是一个巨大的封印阵。"
  },
  {
    "title": "五个博士",
    "url": "./movie-0857.html",
    "cover": "./107.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧，科幻",
    "tags": [
      "克隆",
      "学霸",
      "身份错位"
    ],
    "oneLine": "一次克隆实验出错，五位性格迥异的博士“本尊”被迫与自己的克隆体同居。"
  },
  {
    "title": "酷跑青春",
    "url": "./movie-0858.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "青春 / 运动",
    "tags": [
      "跑酷",
      "校园",
      "热血",
      "成长",
      "逆袭"
    ],
    "oneLine": "高三学渣阿喆为了追回青梅竹马，意外闯入城市跑酷地下联盟，用极限运动对抗高考内卷的焦虑。"
  },
  {
    "title": "怒江魂",
    "url": "./movie-0859.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "禁毒",
      "边境",
      "硬汉",
      "写实"
    ],
    "oneLine": "退役武警在怒江边隐姓埋名，直到贩毒集团杀了他的恩人，他端起猎枪，重燃“战魂”。"
  },
  {
    "title": "艳福农",
    "url": "./movie-0860.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 爱情",
    "tags": [
      "乡村生活",
      "三角关系",
      "反差萌"
    ],
    "oneLine": "老实农夫意外继承了一座豪华庄园和三个性格迥异的女人，却只想回田里种地。"
  },
  {
    "title": "滑向未来",
    "url": "./movie-0861.html",
    "cover": "./111.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "运动 / 剧情",
    "tags": [
      "轮滑",
      "青春",
      "励志",
      "逆袭"
    ],
    "oneLine": "一个被省队开除的天才轮滑少年，在街头找回初心，最终向世界冠军发起冲击。"
  },
  {
    "title": "徬徨尘世间",
    "url": "./movie-0862.html",
    "cover": "./112.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 社会",
    "tags": [
      "底层",
      "露宿者",
      "社工",
      "写实",
      "金像奖"
    ],
    "oneLine": "一个落魄中产沦为流浪汉，在深水埗的天桥下遇到了拒绝说话的老兵。"
  },
  {
    "title": "血的控诉",
    "url": "./movie-0863.html",
    "cover": "./113.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪、悬疑、剧情",
    "tags": [
      "连环杀人",
      "血迹分析",
      "女警",
      "冤案",
      "父亲"
    ],
    "oneLine": "韩国首位血迹形态分析女警，在调查一起连环杀人案时发现，所有血迹模式都与她十五年前被冤枉入狱的父亲死前留下的血书一模一样。"
  },
  {
    "title": "山寨奥运会",
    "url": "./movie-0864.html",
    "cover": "./114.jpg",
    "year": "2008",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧、运动、讽刺",
    "tags": [
      "奥运",
      "山寨",
      "乡村",
      "荒诞"
    ],
    "oneLine": "北京奥运前夕，一个没通公路的山村决定举办自己的“山寨奥运会”，奖品是一头300斤的大肥猪。"
  },
  {
    "title": "邦尼和琼",
    "url": "./movie-0865.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情，喜剧，剧情",
    "tags": [
      "精神病患",
      "纯爱",
      "古怪",
      "治愈"
    ],
    "oneLine": "一个有精神障碍的古怪女孩和她的哥哥相依为命，直到一个同样古怪的、自称是“默片魔术师”的男人闯入他们的生活。"
  },
  {
    "title": "少年白马醉春风",
    "url": "./movie-0866.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "武侠、青春、古装",
    "tags": [
      "少年游侠",
      "江湖朝堂",
      "酿酒奇才",
      "鲜衣怒马"
    ],
    "oneLine": "一个只愿酿酒的少年，被迫卷入江湖与朝堂的纷争，用一坛酒醉倒了半个武林。"
  },
  {
    "title": "太阳有耳",
    "url": "./movie-0867.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "监听",
      "腐败",
      "复仇",
      "政治惊悚"
    ],
    "oneLine": "国家情报院最优秀的监听员，无意中截获了总统候选人的杀人密谋。"
  },
  {
    "title": "城市猎人1987",
    "url": "./movie-0868.html",
    "cover": "./118.jpg",
    "year": "1987",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 喜剧",
    "tags": [
      "私家侦探",
      "搞笑",
      "枪战",
      "香港怀旧"
    ],
    "oneLine": "好色又贪财的私家侦探孟波，在追查一起失踪案时意外卷入跨国军火阴谋。"
  },
  {
    "title": "姜戈",
    "url": "./movie-0869.html",
    "cover": "./119.jpg",
    "year": "1966",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "西部，动作",
    "tags": [
      "棺材",
      "快枪手",
      "南北战争",
      "小镇复仇"
    ],
    "oneLine": "一个拖着棺材行走的孤独枪手来到边陲小镇，他要利用两股恶势力互相残杀来为妻子报仇。"
  },
  {
    "title": "残酷的爱情",
    "url": "./movie-0870.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情 / 悬疑 / 惊悚",
    "tags": [
      "病娇",
      "反转",
      "虐恋",
      "心理战",
      "暗黑纯爱"
    ],
    "oneLine": "一对热恋中的情侣同时被绑架，绑匪告诉他们：只有一个人能活着出去，杀死对方的那个人将被释放。"
  },
  {
    "title": "恶爸临门",
    "url": "./movie-0871.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情、家庭、黑色幽默",
    "tags": [
      "重组家庭",
      "父权对抗",
      "荒诞",
      "亲情和解"
    ],
    "oneLine": "三十岁混混为骗遗产假扮富商继父，却意外卷入一场真刀真枪的“好爸爸”PK 赛。"
  },
  {
    "title": "天网记",
    "url": "./movie-0872.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "犯罪, 动作",
    "tags": [
      "黑客",
      "缉毒",
      "科技战",
      "硬核"
    ],
    "oneLine": "毒枭利用AI和无人机组建“天网”贩毒，一个被开除的网警联手一个传统老刑警，用“人脑”对抗“算法”。"
  },
  {
    "title": "以一当百执事",
    "url": "./movie-0873.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情, 喜剧",
    "tags": [
      "管家",
      "财阀",
      "契约",
      "治愈"
    ],
    "oneLine": "经营一家“万能解决公司”的前特工，为了还债不得不给一位患有社交恐惧症的财阀千金当管家。"
  },
  {
    "title": "癫螳螂",
    "url": "./movie-0874.html",
    "cover": "./124.jpg",
    "year": "1983",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作、功夫",
    "tags": [
      "螳螂拳",
      "精神病杀手",
      "复仇",
      "民俗诡异"
    ],
    "oneLine": "一位武痴练螳螂拳走火入魔，以为自己是只螳螂，却被全村当成神灵附体的“癫王”。"
  },
  {
    "title": "麻婆岛2",
    "url": "./movie-0875.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "喜剧 / 悬疑",
    "tags": [
      "荒岛求生",
      "无厘头",
      "连环失踪案",
      "方言喜剧"
    ],
    "oneLine": "为了寻找失踪的宝藏，一群现代人用原始工具在孤岛上开启了爆笑荒诞的探案之旅。"
  },
  {
    "title": "梦闯女儿寨",
    "url": "./movie-0876.html",
    "cover": "./126.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": [
      "梦境",
      "女尊",
      "搞笑",
      "逆袭"
    ],
    "oneLine": "一个直男程序员意外坠入了以女性为尊的“女儿寨”梦境，为了醒来，他必须在这里学会做个“贤夫良父”。"
  },
  {
    "title": "两栖人",
    "url": "./movie-0877.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻， 剧情， 惊悚",
    "tags": [
      "变异",
      "冷战",
      "人体实验",
      "水下恐惧",
      "悲情英雄"
    ],
    "oneLine": "冷战时期，苏联科学家为打造水下超级士兵而创造出一个“两栖人”，他却只想在深海找到人类无法给予的安宁。"
  },
  {
    "title": "瞒天计划",
    "url": "./movie-0878.html",
    "cover": "./128.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑，犯罪",
    "tags": [
      "高智商",
      "偷窃",
      "反转",
      "设计"
    ],
    "oneLine": "一名退役CIA特工被捕入狱，但这其实是他为了偷走监狱地下金库而策划的入职面试。"
  },
  {
    "title": "大雨堂",
    "url": "./movie-0879.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻 / 剧情",
    "tags": [
      "治愈",
      "民国",
      "时间循环",
      "雨",
      "孤独"
    ],
    "oneLine": "每到下雨天，上海一家老药铺就会迎来特殊的客人——他们都是被困在同一天里走不出去的人。"
  },
  {
    "title": "机智的山村生活",
    "url": "./movie-0880.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "生活喜剧",
    "tags": [
      "治愈",
      "返乡",
      "群像"
    ],
    "oneLine": "五个从首尔失业的年轻人逃到山村，试图用“城里人的智慧”搞农业，结果把整个村子拖下水。"
  },
  {
    "title": "表哥鲍比",
    "url": "./movie-0881.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情",
    "tags": [
      "废柴",
      "亲情",
      "成长",
      "小镇",
      "意外"
    ],
    "oneLine": "全家人嫌弃的窝囊废表哥鲍比突然暴毙，在他的葬礼上，一个个陌生人带着感激的眼泪前来悼念。"
  },
  {
    "title": "荣耀之战",
    "url": "./movie-0882.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情， 体育",
    "tags": [
      "围棋",
      "师徒",
      "逆袭"
    ],
    "oneLine": "一名落魄的前围棋天才与叛逆少年组队，冲击对抗人工智能的世界棋坛最高荣誉。"
  },
  {
    "title": "魔鬼尸篇",
    "url": "./movie-0883.html",
    "cover": "./133.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "录像带",
      "诅咒",
      "法医"
    ],
    "oneLine": "一名法医在解剖一具无名单身女尸时，发现她的胃里藏着一卷诅咒录像带。"
  },
  {
    "title": "叠影惊情",
    "url": "./movie-0884.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑心理",
    "tags": [
      "双重人格",
      "镜像",
      "谋杀",
      "记忆"
    ],
    "oneLine": "一位失忆的女子醒来后发现，镜子里的人总是比她慢半秒动作，她怀疑自己不是真人，而是另一个人格创造出的“影子”。"
  },
  {
    "title": "特斯拉笔记",
    "url": "./movie-0885.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑 / 科幻 / 冒险",
    "tags": [
      "天才",
      "遗产",
      "解谜",
      "黑科技",
      "全球寻宝"
    ],
    "oneLine": "尼古拉·特斯拉的曾孙女继承了一本神秘笔记，上面记载着十项足以改变世界的未完成发明。"
  },
  {
    "title": "代课老师4",
    "url": "./movie-0886.html",
    "cover": "./136.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 剧情",
    "tags": [
      "单元探案",
      "高智商犯罪",
      "老师卧底",
      "校园暗黑",
      "反转"
    ],
    "oneLine": "表面温和的代课老师林凛，每到一个新学校都会破解一桩悬案，但他自己也是逃犯。"
  },
  {
    "title": "好莱坞",
    "url": "./movie-0887.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 喜剧, 行业剧",
    "tags": [
      "制片厂",
      "黄金时代",
      "黑色幽默",
      "职场宫斗"
    ],
    "oneLine": "1938 年，好莱坞二流制片厂“胜利影业”濒临破产，一群 loser 要用一部 B 级片干翻八大巨头。"
  },
  {
    "title": "东京铁塔",
    "url": "./movie-0888.html",
    "cover": "./138.jpg",
    "year": "2005",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情, 爱情",
    "tags": [
      "忘年恋",
      "东京",
      "成长",
      "陪伴",
      "催泪"
    ],
    "oneLine": "19岁的透与已婚女子诗史的禁忌之恋，在东京铁塔的见证下，持续了五年纯粹的纠缠。"
  },
  {
    "title": "高墙之外2022",
    "url": "./movie-0889.html",
    "cover": "./139.jpg",
    "year": "2022",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 社会",
    "tags": [
      "监狱生活",
      "社会边缘人",
      "西班牙社会",
      "母女关系",
      "现实主义"
    ],
    "oneLine": "即将出狱的女囚犯意外得知，她在高墙外等着她的女儿，是她在狱中从未收到过一封信的那个人。"
  },
  {
    "title": "超级带货王",
    "url": "./movie-0890.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "中国",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 职场",
    "tags": [
      "直播",
      "电商",
      "淘汰赛"
    ],
    "oneLine": "100位素人主播同台竞技，每期一个奇葩商品，销量最低者当场停播。"
  },
  {
    "title": "新荡女卡门",
    "url": "./movie-0891.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情，爱情",
    "tags": [
      "现代改编",
      "女性主义",
      "自由与叛逆"
    ],
    "oneLine": "将经典悲剧《卡门》搬到现代都市夜店，她不再是一个被动的诱惑者，而是一个主动的游戏规则制定者。"
  },
  {
    "title": "无仁义之战2：广岛死斗篇",
    "url": "./movie-0892.html",
    "cover": "./142.jpg",
    "year": "1973",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "犯罪、动作、剧情",
    "tags": [
      "黑帮史诗",
      "实录",
      "派系火并",
      "昭和硬汉"
    ],
    "oneLine": "广岛战后黑帮势力重新洗牌，一个出身底层的小混混在血腥的派系斗争中踩着尸骨爬上顶峰。"
  },
  {
    "title": "少林寺弟子",
    "url": "./movie-0893.html",
    "cover": "./143.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 剧情, 武侠",
    "tags": [
      "少林功夫",
      "南北少林",
      "门派纷争",
      "武学传承"
    ],
    "oneLine": "一个被少林寺逐出山门的弟子，用一套自创的“疯魔拳”，打服了所有嘲笑他的人们。"
  },
  {
    "title": "中华小当家",
    "url": "./movie-0894.html",
    "cover": "./144.jpg",
    "year": "1997",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "美食 / 热血 / 少年",
    "tags": [
      "童年经典",
      "料理对决",
      "发光料理",
      "特级厨师"
    ],
    "oneLine": "十三岁的天才厨师，用会发光的料理挑战黑暗料理界，只为寻找传说中的厨具。"
  },
  {
    "title": "老友狗狗粤语",
    "url": "./movie-0895.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧，家庭，温情",
    "tags": [
      "狗狗",
      "粤语",
      "老街坊",
      "治愈"
    ],
    "oneLine": "香港一栋老楼里，一只流浪狗连接起几户街坊的生活，帮他们解开几十年的心结。"
  },
  {
    "title": "卖花谣",
    "url": "./movie-0896.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，音乐，历史",
    "tags": [
      "民国",
      "民歌",
      "女性",
      "卖花女",
      "乱世浮生"
    ],
    "oneLine": "1930年代的江南水乡，一个卖花女孩因为会唱一首没人听过的“卖花谣”，意外卷入了一场谍战。"
  },
  {
    "title": "风云再起",
    "url": "./movie-0897.html",
    "cover": "./147.jpg",
    "year": "2014",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "武侠",
    "tags": [
      "江湖",
      "夺宝",
      "复仇",
      "续作"
    ],
    "oneLine": "天下会覆灭十年后，步惊云与聂风因一柄魔剑的现世再度卷入江湖浩劫。"
  },
  {
    "title": "少年神探狄仁杰",
    "url": "./movie-0898.html",
    "cover": "./148.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 古装 / 推理",
    "tags": [
      "少年狄仁杰",
      "单元探案",
      "智斗权谋",
      "青春化改编"
    ],
    "oneLine": "十六岁的狄仁杰还未入仕，就已用超群智慧破获长安城连环命案，引动了皇城暗流。"
  },
  {
    "title": "媒婆",
    "url": "./movie-0899.html",
    "cover": "./149.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧， 爱情， 古装",
    "tags": [
      "明朝",
      "说媒",
      "女权启蒙",
      "爆笑"
    ],
    "oneLine": "明朝第一媒婆给自己说了一百次亲都失败，却成了全城姑娘们追求真爱的秘密军师。"
  },
  {
    "title": "猛鬼舔人3：猛鬼养人",
    "url": "./movie-0900.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖，惊悚",
    "tags": [
      "厉鬼",
      "养育",
      "反转",
      "家庭悲剧",
      "血腥"
    ],
    "oneLine": "一对无法生育的夫妇领养了一个孤女，却发现她每晚都在用鲜血喂养衣柜里的恶灵。"
  },
  {
    "title": "绝代艳后2006",
    "url": "./movie-0901.html",
    "cover": "./1.jpg",
    "year": "2006",
    "region": "美国 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记 / 历史 / 剧情",
    "tags": [
      "玛丽·安托瓦内特",
      "凡尔赛宫",
      "奢靡"
    ],
    "oneLine": "奥地利公主嫁入法国宫廷，从懵懂少女沦为“赤字皇后”，最终走上断头台。"
  },
  {
    "title": "忠于游戏",
    "url": "./movie-0902.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑 / 犯罪 / 动作",
    "tags": [
      "游戏规则",
      "背叛与忠诚",
      "双雄对决"
    ],
    "oneLine": "一个前黑帮老大出狱后，发现兄弟们都背叛了他，只剩一个卧底警察还在遵守当年的游戏规则。"
  },
  {
    "title": "名门2淑女之心之圈爱仙计",
    "url": "./movie-0903.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情, 剧情",
    "tags": [
      "豪门",
      "复仇",
      "心机",
      "逆袭",
      "泰剧"
    ],
    "oneLine": "平凡女孩伪造贵族身份进入上流圈，却发现猎物竟是自己当年抛弃的初恋。"
  },
  {
    "title": "喜剧 站前音头",
    "url": "./movie-0904.html",
    "cover": "./4.jpg",
    "year": "1961",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧， 音乐",
    "tags": [
      "站前",
      "喜剧",
      "民谣",
      "昭和",
      "群像"
    ],
    "oneLine": "在昭和时代的某个小站前，一群充满个性的居民用歌声与欢笑解决邻里间的各种纠纷。"
  },
  {
    "title": "捷京谍影",
    "url": "./movie-0905.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "悬疑, 动作",
    "tags": [
      "布拉格",
      "交换日记",
      "间谍"
    ],
    "oneLine": "赴捷克留学的普通女生发现，自己错拿的行李箱里，装着整个欧洲地下黑网的交易清单。"
  },
  {
    "title": "我在伊朗长大",
    "url": "./movie-0906.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "法国 / 伊朗",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "动画 / 传记",
    "tags": [
      "黑白动画",
      "成长",
      "战争",
      "女性觉醒"
    ],
    "oneLine": "从1980年代两伊战争到欧洲流浪，一个朋克少女头巾下的叛逆灵魂，在时代动荡中挣扎成长。"
  },
  {
    "title": "圣凯瑟琳",
    "url": "./movie-0907.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑，惊悚，宗教",
    "tags": [
      "修道院",
      "失踪",
      "禁地",
      "圣女"
    ],
    "oneLine": "一座与世隔绝的修道院里，名为凯瑟琳的见习修女失踪，调查者发现这里关着所有“叫凯瑟琳”的女人。"
  },
  {
    "title": "樱，重逢的加奈子",
    "url": "./movie-0908.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 奇幻",
    "tags": [
      "轮回",
      "母女",
      "樱花",
      "催泪"
    ],
    "oneLine": "女儿每年都会在樱花树下等死去的母亲，第十年，母亲变成了一朵会说话的花。"
  },
  {
    "title": "嘻哈反叛者",
    "url": "./movie-0909.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 音乐, 青春",
    "tags": [
      "街头文化",
      "阶级对抗",
      "freestyle",
      "battle",
      "校园改革",
      "真实改编"
    ],
    "oneLine": "在精英私立高中，一名拿助学金的黑人学生用地下说唱，挑战学生会和白人特权体系。"
  },
  {
    "title": "小上校",
    "url": "./movie-0910.html",
    "cover": "./10.jpg",
    "year": "1935",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 家庭 / 歌舞",
    "tags": [
      "秀兰·邓波儿",
      "南北战争",
      "祖孙情"
    ],
    "oneLine": "六岁的小上校用她的天真与踢踏舞，成功融化了南方庄园里固执老上校的冰冷心房。"
  },
  {
    "title": "恶魔是一个女人",
    "url": "./movie-0911.html",
    "cover": "./11.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 悬疑 / 心理",
    "tags": [
      "变装",
      "复仇",
      "修道院",
      "双重人格"
    ],
    "oneLine": "为了调查姐姐在修道院的离奇死亡，警探伪装成修女潜入，却发现院长每晚都会变成男人。"
  },
  {
    "title": "追爱敢死队",
    "url": "./movie-0912.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情喜剧",
    "tags": [
      "动作",
      "浪漫",
      "搞笑",
      "都市",
      "赛车"
    ],
    "oneLine": "三个性格迥异的废柴青年组成“追爱敢死队”，为赢取女神芳心被迫参与一场疯狂城市竞速赛。"
  },
  {
    "title": "胡士托青年音乐节",
    "url": "./movie-0913.html",
    "cover": "./13.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "音乐 / 剧情 / 历史",
    "tags": [
      "1969",
      "嬉皮士",
      "致幻剂",
      "反战",
      "理想主义消亡"
    ],
    "oneLine": "三个不同出身的青年在胡士托音乐节相遇，三天后，一人成名，一人疯癫，一人消失。"
  },
  {
    "title": "汪星卧底",
    "url": "./movie-0914.html",
    "cover": "./14.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧， 家庭， 冒险",
    "tags": [
      "狗狗",
      "警匪",
      "萌宠"
    ],
    "oneLine": "一只流浪狗阴差阳错被警察局招募，为了获得警犬资格，它必须破获珠宝盗窃案。"
  },
  {
    "title": "领航者：中世纪的奥德赛",
    "url": "./movie-0915.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史 / 冒险 / 奇幻",
    "tags": [
      "中世纪",
      "航海",
      "史诗",
      "探秘"
    ],
    "oneLine": "14世纪，一名被流放的英格兰骑士带领一群乌合之众，试图沿着传说中的航线找到东方国度。"
  },
  {
    "title": "威尼斯惊魂夜",
    "url": "./movie-0916.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "意大利 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑恐怖",
    "tags": [
      "面具节",
      "运河凶案",
      "封闭空间"
    ],
    "oneLine": "威尼斯面具节当晚，一艘贡多拉上发现一具戴着纯金面具的无头尸，而所有登上这艘船的人，都必须在午夜前找出凶手，否则下一个死的就是自己。"
  },
  {
    "title": "史前的女人们",
    "url": "./movie-0917.html",
    "cover": "./17.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作 / 冒险 / 奇幻",
    "tags": [
      "母系部落",
      "恐龙骑士",
      "远古史诗",
      "女性力量"
    ],
    "oneLine": "四万年前，一个全是女战士的部落骑着小型迅猛龙，在冰原上与剑齿虎部落争夺最后的生存领地。"
  },
  {
    "title": "毁灭者1984",
    "url": "./movie-0918.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "科幻 / 动作",
    "tags": [
      "废土",
      "赛博朋克",
      "女性复仇"
    ],
    "oneLine": "1984年，核战并未爆发，但一种机械病毒让所有电器开始屠杀人类，生存成为最奢侈的反叛。"
  },
  {
    "title": "海军春色",
    "url": "./movie-0919.html",
    "cover": "./19.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 同性",
    "tags": [
      "海军",
      "禁恋",
      "冷战",
      "救赎"
    ],
    "oneLine": "1962年古巴导弹危机期间，一名美国海军士兵和一名苏联间谍在军舰底舱产生了禁忌的恋情。"
  },
  {
    "title": "悄悄告诉你",
    "url": "./movie-0920.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "家庭 / 奇幻 / 剧情",
    "tags": [
      "听障",
      "树洞",
      "家庭秘密",
      "无声告白"
    ],
    "oneLine": "听障女孩对着学校的老榕树说悄悄话，神奇的是，树真的把话传给了该听的人。"
  },
  {
    "title": "白色猎人黑色心",
    "url": "./movie-0921.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚 / 剧情 / 冒险",
    "tags": [
      "非洲狩猎",
      "双面猎人",
      "殖民反思",
      "心理博弈",
      "人性黑暗"
    ],
    "oneLine": "金牌猎手带领富商进入非洲猎杀稀有大象，却发现向导暗中在保护象群。"
  },
  {
    "title": "身后仕",
    "url": "./movie-0922.html",
    "cover": "./22.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情, 奇幻",
    "tags": [
      "公务员",
      "冥界",
      "温情",
      "手续"
    ],
    "oneLine": "考了八年公务员的废柴终于上岸，却发现自己被分配到了“阴间事务科”，负责给逝者办理投胎手续。"
  },
  {
    "title": "好景当前",
    "url": "./movie-0923.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 青春",
    "tags": [
      "成长",
      "夏日",
      "告别",
      "独立电影"
    ],
    "oneLine": "高中毕业前的最后一个夏天，五个少年在即将被拆除的“好景”购物中心里，寻找自己存在的意义。"
  },
  {
    "title": "因为讨厌韩国",
    "url": "./movie-0924.html",
    "cover": "./24.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 社会",
    "tags": [
      "移民",
      "逃离",
      "新西兰",
      "职场"
    ],
    "oneLine": "28岁韩国女职员受够了地狱职场和厌女文化，抛下一切逃到新西兰学做咖啡。"
  },
  {
    "title": "红色八爪女",
    "url": "./movie-0925.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪",
    "tags": [
      "女特工",
      "八爪鱼",
      "器官走私"
    ],
    "oneLine": "一个女人身上有八处纹身，每处纹身代表她除掉的一个器官走私集团头目，还差最后一处。"
  },
  {
    "title": "燃烧2020",
    "url": "./movie-0926.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情、惊悚、政治",
    "tags": [
      "疫情背景",
      "种族冲突",
      "密室推理",
      "社会寓言"
    ],
    "oneLine": "2020年夏天，美国一座城市的封锁期间，一间公寓里五个不同肤色的年轻人玩起了“真心话大冒险”，结果每个人都背负着一桩不为人知的仇恨罪行。"
  },
  {
    "title": "关人矮事",
    "url": "./movie-0927.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 喜剧",
    "tags": [
      "黑色幽默",
      "黑帮",
      "误会",
      "小人物"
    ],
    "oneLine": "一个倒霉的推销员被黑帮老大误认为是顶尖谈判专家，被迫在12小时内去搞定一桩涉及三伙势力的“小交易”。"
  },
  {
    "title": "饮食男女：好远又好近",
    "url": "./movie-0928.html",
    "cover": "./28.jpg",
    "year": "2012",
    "region": "中国大陆 / 台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "素食",
      "两岸",
      "老年爱情",
      "李安致敬",
      "云门舞集"
    ],
    "oneLine": "一位素食大厨与一位女强人，在杭州与台北之间，谈了一场迟来五十年的恋爱。"
  },
  {
    "title": "异星入侵：凤凰出山",
    "url": "./movie-0929.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻、动作、战争",
    "tags": [
      "外星入侵",
      "废土美学",
      "女性英雄",
      "游击战",
      "机甲"
    ],
    "oneLine": "核战废土之上，凤凰山矿区的女工程师重启老旧机甲，成为人类反抗外星殖民的最后火种。"
  },
  {
    "title": "热爱",
    "url": "./movie-0930.html",
    "cover": "./30.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 青春",
    "tags": [
      "舞蹈",
      "北漂",
      "梦想",
      "虐恋"
    ],
    "oneLine": "芭蕾舞天才因伤退役，成了街舞团的保洁阿姨，她爱上了团里的主力，却发现他是当年害自己受伤的罪魁祸首。"
  },
  {
    "title": "涟漪效应",
    "url": "./movie-0931.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻悬疑",
    "tags": [
      "蝴蝶效应",
      "平行时空",
      "伦理",
      "烧脑",
      "因果"
    ],
    "oneLine": "一款“后悔药”APP让你回到过去修改选择，但每次修改都在另一个人身上引发惨烈报应。"
  },
  {
    "title": "对不起，干掉你",
    "url": "./movie-0932.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 喜剧, 犯罪",
    "tags": [
      "杀手",
      "乌龙",
      "黑帮",
      "无厘头"
    ],
    "oneLine": "一个倒霉的职业杀手因为总在道歉而被业内嘲笑，直到他接到了暗杀自己偶像的任务。"
  },
  {
    "title": "小迷糊闯七关",
    "url": "./movie-0933.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "喜剧, 冒险",
    "tags": [
      "闯关",
      "迷糊女主",
      "悬疑",
      "爆笑"
    ],
    "oneLine": "一个超级迷糊的女孩被卷入一场神秘游戏，必须在24小时内闯过七关，否则会被“消除记忆”。"
  },
  {
    "title": "不死咒怨3",
    "url": "./movie-0934.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖",
    "tags": [
      "诅咒源头",
      "时空错乱",
      "伽椰子前传"
    ],
    "oneLine": "伽椰子被杀的那一夜，其实有第三个人在现场，而他的怨念比房子更古老。"
  },
  {
    "title": "浪漫俏娇娃",
    "url": "./movie-0935.html",
    "cover": "./35.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 爱情, 动作",
    "tags": [
      "港产片",
      "女警",
      "乌龙",
      "搞笑",
      "时装"
    ],
    "oneLine": "火爆女警花为破案假扮应召女郎，却爱上了不知情的卧底富二代。"
  },
  {
    "title": "召唤之物",
    "url": "./movie-0936.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑，奇幻",
    "tags": [
      "都市传说",
      "祖传物件",
      "代价",
      "单元剧"
    ],
    "oneLine": "一家古董店里的每件物品，都能实现你的一个愿望，但你必须支付“与愿望等重的代价”。"
  },
  {
    "title": "格蕾丝点",
    "url": "./movie-0937.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑, 恐怖, 小镇",
    "tags": [
      "封闭社区",
      "邪教",
      "儿童失踪",
      "心理"
    ],
    "oneLine": "缅因州一个叫“格蕾丝点”的富裕小镇上，每年都有一个叫格蕾丝的女孩失踪，但全镇人都假装没发生过。"
  },
  {
    "title": "错点鸳鸯",
    "url": "./movie-0938.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "TV Series",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装，爱情，喜剧",
    "tags": [
      "替嫁",
      "先婚后爱",
      "欢喜冤家",
      "宅斗",
      "甜宠"
    ],
    "oneLine": "替妹妹出嫁的平民女意外发现，那位传说中的病秧子夫君竟是当年救过自己的江湖少侠。"
  },
  {
    "title": "爵士乐手",
    "url": "./movie-0939.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 音乐 / 传记",
    "tags": [
      "爵士乐",
      "即兴",
      "天才与疯子"
    ],
    "oneLine": "传奇小号手在精神病院吹出无人能复制的音符，医生发现那不是音乐，是天气预报。"
  },
  {
    "title": "小鱼历险记",
    "url": "./movie-0940.html",
    "cover": "./40.jpg",
    "year": "2000",
    "region": "丹麦 / 德国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "冒险， 动画， 家庭",
    "tags": [
      "人鱼",
      "环保",
      "海底",
      "兄妹",
      "安徒生"
    ],
    "oneLine": "为了拯救变成雕像的族人，一条调皮的小鱼和妹妹意外变成人类，踏上了一场陆地冒险。"
  },
  {
    "title": "霹雳舞2：电子布加洛",
    "url": "./movie-0941.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻",
    "tags": [
      "街舞",
      "AI",
      "赛博朋克"
    ],
    "oneLine": "当AI学会了霹雳舞，人类最后的擂台就只剩下肉身。"
  },
  {
    "title": "色诱我",
    "url": "./movie-0942.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "惊悚, 悬疑, 情色",
    "tags": [
      "复仇",
      "整形",
      "色诱",
      "反转"
    ],
    "oneLine": "一个男人被神秘女子色诱后遭报复失去一切，三年后他换了张脸去色诱那个女子的妹妹，却发现妹妹才是真正的幕后黑手。"
  },
  {
    "title": "被偷走的春天",
    "url": "./movie-0943.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 悬疑",
    "tags": [
      "时空交错",
      "小镇秘密",
      "记忆修复"
    ],
    "oneLine": "一场倒春寒让小镇时间冻结，只有失忆女孩能找回被集体遗忘的春天。"
  },
  {
    "title": "灵魂相锲",
    "url": "./movie-0944.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 爱情",
    "tags": [
      "双生",
      "宿命",
      "催眠",
      "连环案"
    ],
    "oneLine": "一场车祸让她看见死者灵魂，却意外发现未婚夫与二十年前失踪案有关。"
  },
  {
    "title": "唐老鸭的自我改善",
    "url": "./movie-0945.html",
    "cover": "./45.jpg",
    "year": "2027",
    "region": "美国",
    "type": "动画短片",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 励志",
    "tags": [
      "经典重启",
      "情绪管理",
      "自黑",
      "唐老鸭"
    ],
    "oneLine": "唐老鸭参加了一门“不发脾气训练课”，结果课程导师是脾气更爆的高飞。"
  },
  {
    "title": "心中的那块拼图",
    "url": "./movie-0946.html",
    "cover": "./46.jpg",
    "year": "2021",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 奇幻 / 治愈",
    "tags": [
      "失忆",
      "拼图隐喻",
      "单元剧",
      "人情冷暖"
    ],
    "oneLine": "一个失忆拼图师，每修复一块旧拼图，就会恢复一段记忆，但同时也会失去另一段记忆。"
  },
  {
    "title": "失忆迷城",
    "url": "./movie-0947.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑，犯罪，剧情",
    "tags": [
      "记忆碎片",
      "身份迷局",
      "雨中追逐"
    ],
    "oneLine": "他在暴雨中醒来发现自己被追杀，每个陌生人都声称认识他，但他谁都不信。"
  },
  {
    "title": "厄夜丛林2：阴魂怒吼",
    "url": "./movie-0948.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "恐怖、伪纪录、超自然",
    "tags": [
      "续集",
      "女巫",
      "时间循环",
      "媒介病毒"
    ],
    "oneLine": "纪录片团队进入当年失踪案发生地直播，却发现布莱尔女巫的诅咒通过信号传播，吞噬了所有观众。"
  },
  {
    "title": "一招半式闯江湖",
    "url": "./movie-0949.html",
    "cover": "./49.jpg",
    "year": "1979",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "喜剧，动作",
    "tags": [
      "成龙式",
      "功夫喜剧",
      "骗术",
      "市井"
    ],
    "oneLine": "一个只会“半招”拳法的乡下酒保，靠着一张嘴和街头智慧，竟然把来踢馆的日本空手道高手玩得团团转。"
  },
  {
    "title": "初恋是榴莲先生",
    "url": "./movie-0950.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情，喜剧，青春",
    "tags": [
      "榴莲",
      "甜宠",
      "反差萌",
      "美食"
    ],
    "oneLine": "一个闻到榴莲就晕倒的富家千金，偏偏爱上了全泰国最著名的榴莲园少主，而她的过敏其实是装的。"
  },
  {
    "title": "俏校花",
    "url": "./movie-0951.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "青春 / 校园 / 爱情",
    "tags": [
      "扮猪吃老虎",
      "学霸",
      "反转",
      "轻喜剧"
    ],
    "oneLine": "全校第一的乖乖女为了调查好友死因，扮成“俏校花”混入校花评选，却引来了霸总学长的注意。"
  },
  {
    "title": "万恶城",
    "url": "./movie-0952.html",
    "cover": "./52.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻， 犯罪， 悬疑",
    "tags": [
      "反乌托邦",
      "犯罪率清零",
      "思想警察"
    ],
    "oneLine": "犯罪率连续十年为零的未来城市，秘密在于每个市民七岁时都会被植入“恶念抑制芯片”，而芯片最近开始批量失灵。"
  },
  {
    "title": "独家占有",
    "url": "./movie-0953.html",
    "cover": "./53.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情，悬疑，心理",
    "tags": [
      "契约婚姻",
      "占有欲",
      "反转",
      "心理博弈"
    ],
    "oneLine": "天才整形外科医生与失忆财阀千金签订“假婚姻契约”，却发现她的失忆是假的。"
  },
  {
    "title": "假面骑士令和初代",
    "url": "./movie-0954.html",
    "cover": "./54.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "特摄/动作/科幻",
    "tags": [
      "令和",
      "蝗虫",
      "人工智能",
      "传承"
    ],
    "oneLine": "在人工智能垄断能源的未来，一位落魄程序员捡到了属于初代令和骑士的驱动器。"
  },
  {
    "title": "我的老板为何那样",
    "url": "./movie-0955.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情 / 职场",
    "tags": [
      "霸总",
      "反差萌",
      "社恐",
      "打工人"
    ],
    "oneLine": "新人秘书发现，全公司闻风丧胆的冷面总裁，其实有严重的社交恐惧症，一切高冷都是他的保护色。"
  },
  {
    "title": "末日孤舰第四季",
    "url": "./movie-0956.html",
    "cover": "./56.jpg",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作, 科幻, 灾难",
    "tags": [
      "后末日",
      "舰船战斗",
      "军事",
      "病毒解药"
    ],
    "oneLine": "病毒解药成了新世界的货币，内森·詹姆斯号不仅要打海盗，还要打那些想垄断解药的军阀。"
  },
  {
    "title": "雄鹰少年队第三季",
    "url": "./movie-0957.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 冒险 / 励志",
    "tags": [
      "机甲",
      "团队",
      "成长",
      "环保"
    ],
    "oneLine": "为了拯救一片会唱歌的沙漠，少年队必须驾驶机甲，与地下苏醒的古代虫族作战。"
  },
  {
    "title": "封闭女子监狱",
    "url": "./movie-0958.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑剧情",
    "tags": [
      "监狱",
      "女性群像",
      "黑幕",
      "越狱"
    ],
    "oneLine": "女子监狱发生无差别杀人，囚犯和狱警都被困其中，凶手藏在所有人中间。"
  },
  {
    "title": "紧急呼救第五季",
    "url": "./movie-0959.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情，动作",
    "tags": [
      "急救员",
      "单元剧",
      "高危职业",
      "泪目"
    ],
    "oneLine": "洛杉矶最忙的118号消防站回归，本季他们将面对地震、海啸与一场威胁整个团队的连环纵火案。"
  },
  {
    "title": "色情男女",
    "url": "./movie-0960.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情、爱情、情色",
    "tags": [
      "中年危机",
      "夫妻关系",
      "欲望解放",
      "都市"
    ],
    "oneLine": "一对结婚十五年的夫妻在尝试换偶派对后，才发现彼此从未真正坦诚相见过。"
  },
  {
    "title": "黎明终至",
    "url": "./movie-0961.html",
    "cover": "./61.jpg",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑、惊悚",
    "tags": [
      "黑夜永存",
      "末日",
      "光源",
      "信仰实验"
    ],
    "oneLine": "一场全球灾难后，太阳不再升起，一个小镇居民却坚信只要“足够善良”，光就会回来。"
  },
  {
    "title": "黑帮大斗法",
    "url": "./movie-0962.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "Movie",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作，犯罪，喜剧",
    "tags": [
      "卧底",
      "诈骗",
      "黑吃黑",
      "方言喜剧",
      "兄弟情"
    ],
    "oneLine": "为了卧底，警方找了一个骗子假扮新老大，不料真老大其实也没死，两个冒牌货在帮派里狭路相逢。"
  },
  {
    "title": "女孩的难忘生日",
    "url": "./movie-0963.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情喜剧",
    "tags": [
      "成长",
      "家庭",
      "惊喜",
      "遗憾"
    ],
    "oneLine": "16岁生日当天，女孩精心策划的派对因全家被隔离而泡汤，却意外揭开了父亲出轨的秘密。"
  },
  {
    "title": "朽木第三季",
    "url": "./movie-0964.html",
    "cover": "./64.jpg",
    "year": "2008",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "西部, 犯罪",
    "tags": [
      "HBO",
      "粗粝美学",
      "法外之地",
      "权力游戏",
      "完结篇"
    ],
    "oneLine": "朽木镇迎来最冷的冬天，法律与子弹，只能留下一个。"
  },
  {
    "title": "入伍前的疯狂",
    "url": "./movie-0965.html",
    "cover": "./65.jpg",
    "year": "2012",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "喜剧、青春、友情",
    "tags": [
      "兵役",
      "告别之旅",
      "兄弟情",
      "公路喜剧"
    ],
    "oneLine": "离入伍只剩一周，六个好兄弟决定进行一场“只有男人才能懂”的荒唐全国冒险，只为不留遗憾。"
  },
  {
    "title": "出土奇兵",
    "url": "./movie-0966.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 奇幻, 冒险",
    "tags": [
      "兵马俑",
      "复活",
      "考古",
      "现代战争",
      "古代战士"
    ],
    "oneLine": "西安工地挖出五个活着的秦代兵马俑，他们被送进现代军营，成了最可怕的“古代特种兵”。"
  },
  {
    "title": "杰克与大象",
    "url": "./movie-0967.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "动画, 冒险, 家庭",
    "tags": [
      "会说话的大象",
      "童话新编",
      "城市探险",
      "友谊",
      "环境保护"
    ],
    "oneLine": "孤儿杰克发现公寓楼下水道里住着一头能预知地震的巨型大象，他们必须一起阻止城市被淹没。"
  },
  {
    "title": "再歌再舞",
    "url": "./movie-0968.html",
    "cover": "./68.jpg",
    "year": "2016",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "歌舞 / 剧情 / 家庭",
    "tags": [
      "宝莱坞",
      "母女",
      "梦想传承",
      "传统与现代",
      "泪崩"
    ],
    "oneLine": "女儿想在夜店当DJ，母亲却曾是国家级古典舞者，一对舞魂的隔空和解。"
  },
  {
    "title": "圣诞精灵",
    "url": "./movie-0969.html",
    "cover": "./69.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 家庭 / 奇幻",
    "tags": [
      "圣诞老人",
      "精灵",
      "纽约",
      "身份认同"
    ],
    "oneLine": "一个被北极精灵养大的人类男孩回到纽约寻找生父，却把圣诞节闹得天翻地覆。"
  },
  {
    "title": "死角1946",
    "url": "./movie-0970.html",
    "cover": "./70.jpg",
    "year": "1946",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "黑色电影 / 悬疑",
    "tags": [
      "黑白片",
      "战后创伤",
      "侦探",
      "蛇蝎美人",
      "经典好莱坞"
    ],
    "oneLine": "二战退伍兵当上私家侦探，却在调查一桩普通出轨案时，走进了一个无人能活着的死角。"
  },
  {
    "title": "呜呜小情人",
    "url": "./movie-0971.html",
    "cover": "./71.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 喜剧",
    "tags": [
      "配音演员",
      "网恋",
      "声控",
      "错位"
    ],
    "oneLine": "一个用机车噪音当声库的AI配音女孩，爱上了她服务的乙女游戏里那个“完美男主”。"
  },
  {
    "title": "当 一个人",
    "url": "./movie-0972.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 文艺",
    "tags": [
      "孤独",
      "城市",
      "中年危机",
      "治愈"
    ],
    "oneLine": "当一个中年离婚的男人、一个被网暴的女孩、一个丧偶的老人同时住进一栋老楼，他们决定一起“消失”。"
  },
  {
    "title": "我在皇宫当巨巨 动态漫",
    "url": "./movie-0973.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动态漫画",
    "typeGroup": "other",
    "regionGroup": "mainland",
    "genre": "喜剧、古装、穿越",
    "tags": [
      "穿越",
      "搞笑",
      "美食",
      "职场",
      "宫斗"
    ],
    "oneLine": "现代美食主播穿越成失宠贵妃，她不争宠，却在御膳房开起了直播带货，让皇帝成了她的榜一大哥。"
  },
  {
    "title": "意外粤语",
    "url": "./movie-0974.html",
    "cover": "./74.jpg",
    "year": "2015",
    "region": "香港地区",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情， 犯罪， 悬疑",
    "tags": [
      "粤语片",
      "误杀",
      "语言隔阂"
    ],
    "oneLine": "一个只会说粤语的香港游客在曼谷误杀了人，而唯一的目击者是个只懂潮州话的老伯。"
  },
  {
    "title": "我不是他",
    "url": "./movie-0975.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "悬疑, 家庭, 剧情",
    "tags": [
      "替身",
      "记忆移植",
      "兄弟",
      "伦理"
    ],
    "oneLine": "哥哥遭遇车祸成为植物人，弟弟被母亲要求整容成哥哥的样子，顶替他的人生，却逐渐失去了自己。"
  },
  {
    "title": "自负者：无望之岛",
    "url": "./movie-0976.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑 / 心理",
    "tags": [
      "孤岛",
      "密室",
      "人性实验",
      "反转",
      "惊悚"
    ],
    "oneLine": "七个各领域的自负精英被困孤岛，每天消失一人，而凶手就是他们中最谦虚的那个。"
  },
  {
    "title": "邮差不按铃",
    "url": "./movie-0977.html",
    "cover": "./77.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "喜剧 / 爱情",
    "tags": [
      "乡村",
      "慢生活",
      "误会",
      "浪漫",
      "治愈"
    ],
    "oneLine": "伦敦投行女因过劳逃到英国乡村，却发现当地邮差从不按铃，而是把信塞进每个村民的人生。"
  },
  {
    "title": "小维娜",
    "url": "./movie-0978.html",
    "cover": "./78.jpg",
    "year": "2012",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 艺术",
    "tags": [
      "少女",
      "成长",
      "威尼斯",
      "妓女之女",
      "救赎"
    ],
    "oneLine": "威尼斯船妓之女“小维娜”渴望成为歌剧演员，每夜用歌声引诱水手，只为一个真正听见她声音的人。"
  },
  {
    "title": "洛可兄弟",
    "url": "./movie-0979.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 犯罪, 家族",
    "tags": [
      "黑帮",
      "兄弟反目",
      "那不勒斯",
      "遗产"
    ],
    "oneLine": "黑帮老大的遗言：五个儿子中只有最不像我的那个，才能真正继承家族。"
  },
  {
    "title": "眼泪制造者",
    "url": "./movie-0980.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "意大利/法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻剧情",
    "tags": [
      "情感操控",
      "反乌托邦",
      "未来社会",
      "哲学寓言"
    ],
    "oneLine": "在不远的未来，政府成立了“眼泪制造局”来收集人类的悲伤情感，用以驱动城市能源，而一名“催泪师”却爱上了最后一个不会哭的人。"
  },
  {
    "title": "逆水寒",
    "url": "./movie-0981.html",
    "cover": "./81.jpg",
    "year": "2004",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "武侠 / 古装 / 剧情",
    "tags": [
      "温瑞安",
      "追杀与逃亡",
      "兄弟情",
      "张智霖"
    ],
    "oneLine": "连云寨大当家戚少商因持有“逆水寒”宝剑而遭灭门之祸，从此带着一个婴儿踏上万里逃亡路。"
  },
  {
    "title": "空气之魂，云之精灵",
    "url": "./movie-0982.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影 / 动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画 / 奇幻 / 爱情",
    "tags": [
      "吉卜力风",
      "环保",
      "治愈",
      "架空"
    ],
    "oneLine": "在云海之上的垃圾山国度，一名捡破烂的少年捡到了一个从天空坠落的、由纯氧构成的透明少女。"
  },
  {
    "title": "等待放晴的日子",
    "url": "./movie-0983.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、家庭、青春",
    "tags": [
      "高三",
      "复读",
      "师生",
      "高考",
      "励志"
    ],
    "oneLine": "高考前一百天，一个被称为“放牛班”的差班迎来了一位身患绝症的新班主任，他用一本错题本改变了所有人的命运。"
  },
  {
    "title": "新忠烈图",
    "url": "./movie-0984.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装, 战争, 动作",
    "tags": [
      "明朝",
      "抗倭",
      "冷兵器"
    ],
    "oneLine": "改编自明朝抗倭传奇，戚家军鸳鸯阵的诞生背后，竟藏着一场血腥的间谍迷局。"
  },
  {
    "title": "宝藏猎人",
    "url": "./movie-0985.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "美国 / 韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "动作 / 冒险 / 悬疑",
    "tags": [
      "寻宝",
      "历史谜团",
      "全球取景",
      "高智商"
    ],
    "oneLine": "一个被开除的前考古教授，一个韩国情报局特工，一个天才黑客少女，三人组队，在全球各地争夺价值连城的失落国宝。"
  },
  {
    "title": "女战士艾菲菈&吉里鸥菈",
    "url": "./movie-0986.html",
    "cover": "./86.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻 / 动作 / 百合",
    "tags": [
      "机械改造",
      "双女主",
      "末日"
    ],
    "oneLine": "在人类灭亡后的机械纪元，两名被改造成最终兵器的少女战士，却只想用武力开一间咖啡店。"
  },
  {
    "title": "北壁",
    "url": "./movie-0987.html",
    "cover": "./87.jpg",
    "year": "2008",
    "region": "德国 / 奥地利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 传记 / 冒险",
    "tags": [
      "雪山求生",
      "真实改编",
      "极限绝望"
    ],
    "oneLine": "1936年，两名德国青年挑战阿尔卑斯山最险“北壁”，在暴风雪中被绳索和人性困在垂直冰墙上。"
  },
  {
    "title": "星河战队",
    "url": "./movie-0988.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 动作 / 战争",
    "tags": [
      "太空歌剧",
      "虫族",
      "机甲",
      "政治讽刺",
      "硬核战斗"
    ],
    "oneLine": "新兵强尼在卡门去世后接手“罗杰杨号”，却发现虫族拥有了穿越时空的恐怖新能力。"
  },
  {
    "title": "大喜事",
    "url": "./movie-0989.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情 / 剧情",
    "tags": [
      "婚礼",
      "家族秘密",
      "同性议题",
      "和解"
    ],
    "oneLine": "一场盛大的传统婚礼上，新娘的两位“父亲”同时到场，揭开了尘封三十年的秘密。"
  },
  {
    "title": "狱见妳，爱上你",
    "url": "./movie-0990.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情, 剧情, 同性",
    "tags": [
      "女同",
      "监狱",
      "救赎",
      "文艺"
    ],
    "oneLine": "误入歧途的刺青女混混，在女子监狱里遇到了曾被自己伤害过的哑女教师。"
  },
  {
    "title": "开心汉堡店第九季",
    "url": "./movie-0991.html",
    "cover": "./91.jpg",
    "year": "2019",
    "region": "美国",
    "type": "TV Serie",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画、喜剧、家庭",
    "tags": [
      "美式幽默",
      "底层家庭",
      "温馨搞怪"
    ],
    "oneLine": "贝尔彻一家继续经营着海滨小镇的破汉堡店，迎接各种怪顾客、疯狂竞赛和天马行空的倒霉计划。"
  },
  {
    "title": "正直地活下去",
    "url": "./movie-0992.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情，家庭，社会",
    "tags": [
      "道德困境",
      "普通人生存",
      "谎言的代价"
    ],
    "oneLine": "一个一辈子没撒过谎的老实人，为了救重病的女儿，第一次学会了骗保。"
  },
  {
    "title": "危险年华",
    "url": "./movie-0993.html",
    "cover": "./93.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 剧情",
    "tags": [
      "青春",
      "黑帮",
      "残酷",
      "真实改编",
      "港产片"
    ],
    "oneLine": "1984年，四个底层少年以为加入社团就能出人头地，最终却成为连名字都没有的山鸡哥背景板。"
  },
  {
    "title": "不只是闺蜜",
    "url": "./movie-0994.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 都市",
    "tags": [
      "女女",
      "友情以上",
      "十年"
    ],
    "oneLine": "做了十年闺蜜的两个人，决定在各自婚礼前夜坦白一个秘密：她们都曾在对方睡着时偷偷亲过对方。"
  },
  {
    "title": "铁拳无敌",
    "url": "./movie-0995.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 武侠, 科幻",
    "tags": [
      "功夫",
      "机甲",
      "反乌托邦",
      "硬核"
    ],
    "oneLine": "2050年，传统武术被机械义肢全面碾压，一个不会用机甲的老头用咏春打碎了整个赛博帝国。"
  },
  {
    "title": "火爆小子",
    "url": "./movie-0996.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "校园/喜剧",
    "tags": [
      "不良少年",
      "反转",
      "热血教师",
      "帮派斗争",
      "青春成长"
    ],
    "oneLine": "一个被所有学校开除的“校霸”，在遇到一个比他还“火爆”的残疾女老师后，被治得服服帖帖。"
  },
  {
    "title": "爱尔兰之美",
    "url": "./movie-0997.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "爱尔兰 / 英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 家庭 / 历史",
    "tags": [
      "凯尔特神话",
      "家族恩怨",
      "土地与移民",
      "诗电影"
    ],
    "oneLine": "一家三代女性，从1920年独立战争到2020年科技浪潮，用一个诅咒和一个吻串起百年爱尔兰。"
  },
  {
    "title": "共生心理分类学",
    "url": "./movie-0998.html",
    "cover": "./98.jpg",
    "year": "1986",
    "region": "苏联",
    "type": "电影/科幻哲理",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "科幻, 剧情, 哲理",
    "tags": [
      "心理学实验",
      "乌托邦",
      "集体意识",
      "冷峻美学"
    ],
    "oneLine": "苏联科学家发明了“心理共振舱”，试图将五个死刑犯的意识融合成一个完美的“集体人格”。"
  },
  {
    "title": "有话好好说",
    "url": "./movie-0999.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "都市情感",
    "tags": [
      "调解节目",
      "奇葩当事人",
      "自媒体",
      "情绪暴力",
      "沟通"
    ],
    "oneLine": "金牌调解员辞职做自媒体，专门调解“不能用钱解决”的家庭情感纠纷。"
  },
  {
    "title": "狗咬狗骨粤语",
    "url": "./movie-1000.html",
    "cover": "./100.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪, 惊悚",
    "tags": [
      "黑帮",
      "背叛",
      "卧底",
      "兄弟情",
      "暴力美学"
    ],
    "oneLine": "两名互相敌对的社团头目被迫合作对抗警方，却不知彼此都是卧底，真正的猎物另有其人。"
  },
  {
    "title": "凭火决狱",
    "url": "./movie-1001.html",
    "cover": "./101.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "犯罪 / 悬疑 / 传记",
    "tags": [
      "冤案平反",
      "死刑争议",
      "德州司法",
      "证据造假"
    ],
    "oneLine": "一名德州男子因“火灾烧死三个孩子”被判死刑，一名女律师发现火灾根本是意外。"
  },
  {
    "title": "最后的歌舞女郎",
    "url": "./movie-1002.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 音乐 / 传记",
    "tags": [
      "百老汇",
      "幕后",
      "女性",
      "怀旧"
    ],
    "oneLine": "百老汇最老的歌舞女郎接到通知：两周后剧院拆除，她要带着20个被裁员的女孩跳完最后一场。"
  },
  {
    "title": "狮子王2019",
    "url": "./movie-1003.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 冒险, 家庭",
    "tags": [
      "动物",
      "权力更迭",
      "自我救赎",
      "实景CG"
    ],
    "oneLine": "这是1994年动画的“暗黑现实版”，讲述辛巴称王后草原大旱，他必须面对一个真相：父亲的死不是刀疤的错，而是他自己。"
  },
  {
    "title": "超正经乐团的糊涂战争",
    "url": "./movie-1004.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 战争 / 音乐",
    "tags": [
      "荒诞",
      "交响乐",
      "误会",
      "黑色幽默",
      "小成本"
    ],
    "oneLine": "一支废柴交响乐团在边境慰问演出时迷路，误入军事禁区，用乐器当武器“击退”了两支对峙的部队。"
  },
  {
    "title": "斗牛士",
    "url": "./movie-1005.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 惊悚",
    "tags": [
      "斗牛",
      "复仇",
      "传统",
      "人性"
    ],
    "oneLine": "一位年迈的传奇斗牛士为了救出被绑架的孙女，被迫重返决斗场与神秘黑手党进行生死对决。"
  },
  {
    "title": "键盘侠",
    "url": "./movie-1006.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，悬疑，犯罪",
    "tags": [
      "网络暴力",
      "社会派推理",
      "复仇",
      "反转"
    ],
    "oneLine": "一名以毒舌著称的匿名博主在直播中遭遇绑架，施暴者正是他曾经网暴过的受害者的父亲。"
  },
  {
    "title": "中年危机",
    "url": "./movie-1007.html",
    "cover": "./107.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 剧情",
    "tags": [
      "黑色幽默",
      "职场困境",
      "婚姻"
    ],
    "oneLine": "当裁员潮、婚姻破裂和青春期的儿子同时袭来，一个中年男人决定去抢银行。"
  },
  {
    "title": "无光岁月",
    "url": "./movie-1008.html",
    "cover": "./108.jpg",
    "year": "2018",
    "region": "法国 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 战争 / 历史",
    "tags": [
      "二战",
      "盲人",
      "抵抗运动",
      "黑白影像"
    ],
    "oneLine": "二战期间，一位失明的调音师利用超强听觉，在家中秘密为抵抗组织监听盖世太保电台。"
  },
  {
    "title": "肥猫斗小强电影版",
    "url": "./movie-1009.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "hongkong",
    "genre": "动画, 喜剧",
    "tags": [
      "猫",
      "蟑螂",
      "拟人化",
      "恶搞"
    ],
    "oneLine": "当一只废柴家猫发现厨房里的小强会说话，并扬言要占领地球时，它的懒觉再也睡不成了。"
  },
  {
    "title": "叶问外传：张天志粤语",
    "url": "./movie-1010.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 武侠",
    "tags": [
      "咏春",
      "张天志",
      "九龙城寨",
      "黑市拳",
      "粤语原声"
    ],
    "oneLine": "败给叶问后，张天志隐姓埋名在九龙城寨开杂货铺，直到一群难民小孩被抓进地下黑市拳场，他不得不重拾咏春。"
  },
  {
    "title": "爱在战火蔓延时",
    "url": "./movie-1011.html",
    "cover": "./111.jpg",
    "year": "2026",
    "region": "俄罗斯 / 乌克兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争 / 爱情 / 历史",
    "tags": [
      "二战",
      "狙击手",
      "跨国恋",
      "悲剧美学"
    ],
    "oneLine": "苏联女狙击手与德国男军官在斯大林格勒废墟中相爱，他们的每一次见面都在对方狙击镜的十字准星中。"
  },
  {
    "title": "神秘怪物",
    "url": "./movie-1012.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "美国 / 加拿大",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "恐怖 / 悬疑 / 科幻",
    "tags": [
      "小镇",
      "克苏鲁",
      "变身",
      "青少年",
      "压抑"
    ],
    "oneLine": "美国偏僻小镇接连发生失踪案，所有线索都指向森林里一个能模仿人声的远古怪物。"
  },
  {
    "title": "毛驴县令之大事小情",
    "url": "./movie-1013.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影 / 网络大电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 古装 / 悬疑",
    "tags": [
      "草根智慧",
      "动物搭档",
      "官场讽刺",
      "乡村治理"
    ],
    "oneLine": "朝廷空降的“废柴”县令骑着毛驴赴任，却用驴的习性破解了一桩离奇的集体耕地失踪案。"
  },
  {
    "title": "当克和苏克孜",
    "url": "./movie-1014.html",
    "cover": "./114.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 西部 / 家庭",
    "tags": [
      "新疆故事",
      "兄弟情",
      "沙漠公路",
      "成长"
    ],
    "oneLine": "在塔克拉玛干沙漠公路旁，汉族少年当克与维吾尔族少年苏克孜通过一台报废的收音机，听到了彼此心底的声音。"
  },
  {
    "title": "明天有多远",
    "url": "./movie-1015.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "阿尔茨海默",
      "母女",
      "遗忘",
      "小城",
      "告别"
    ],
    "oneLine": "患上阿尔茨海默的母亲只记得女儿十岁时的样子，女儿决定陪母亲重新“认亲”。"
  },
  {
    "title": "女校男生第二季",
    "url": "./movie-1016.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "青春 / 校园 / 喜剧",
    "tags": [
      "成长",
      "性别互换",
      "友达以上"
    ],
    "oneLine": "上一季的插班生男生全员毕业，新学期校方竟引入“全息男教师”虚拟形象来管理女生班。"
  },
  {
    "title": "落差",
    "url": "./movie-1017.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 悬疑",
    "tags": [
      "心理",
      "阶层",
      "反转",
      "都市",
      "身份"
    ],
    "oneLine": "一次电梯故障，让上市公司高管与清洁工互换了人生，没人觉得不对。"
  },
  {
    "title": "无名战士",
    "url": "./movie-1018.html",
    "cover": "./118.jpg",
    "year": "2017",
    "region": "芬兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "战争 / 历史",
    "tags": [
      "二战",
      "苏芬战争",
      "群像",
      "反战"
    ],
    "oneLine": "一个机枪手从1941年打到1944年，他见证了战友一个个死去，却始终记不住他们的名字。"
  },
  {
    "title": "黎明前与妳相遇",
    "url": "./movie-1019.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情, 剧情, 战争",
    "tags": [
      "法式浪漫",
      "二战",
      "书信情缘",
      "错位时空",
      "黑白与彩色"
    ],
    "oneLine": "二战时期，法国女抵抗军与德国军官在宵禁的巴黎街头邂逅，他们用书信传递情报，却不知彼此都是对方要刺杀的目标。 他们每天在固定的长椅上交换情书，却不知道对方的真实身份，是恋人，也是猎人与猎物。"
  },
  {
    "title": "大魔神",
    "url": "./movie-1020.html",
    "cover": "./120.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "奇幻动作",
    "tags": [
      "神话",
      "巨兽",
      "武士道",
      "灾难"
    ],
    "oneLine": "战国末期，沉睡八百年的土偶巨神因村庄血祭而苏醒，踏平整座将军城。"
  },
  {
    "title": "白领公寓",
    "url": "./movie-1021.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "都市职场爱情",
    "tags": [
      "合租生活",
      "职场晋升",
      "欢喜冤家",
      "女性成长"
    ],
    "oneLine": "两个性格迥异的白领被迫合租一套公司配给的公寓，从死对头变成彼此最坚实的依靠。"
  },
  {
    "title": "愤怒鸟玩电影3",
    "url": "./movie-1022.html",
    "cover": "./122.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 喜剧 / 冒险",
    "tags": [
      "愤怒鸟",
      "小猪",
      "岛屿",
      "环保",
      "合家欢"
    ],
    "oneLine": "愤怒鸟和捣蛋猪被迫联手，对抗一个要把他们所有岛屿都变成垃圾场的塑料垃圾怪物。"
  },
  {
    "title": "喜剧！",
    "url": "./movie-1023.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情/喜剧",
    "tags": [
      "脱口秀",
      "幕后揭秘",
      "黑色幽默"
    ],
    "oneLine": "一个濒临崩溃的脱口秀演员，发现观众越惨他就笑得越大声，于是他开始直播自己的塌房人生。"
  },
  {
    "title": "敌后英雄",
    "url": "./movie-1024.html",
    "cover": "./124.jpg",
    "year": "2012",
    "region": "中国内地",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "战争, 谍战",
    "tags": [
      "敌后战场",
      "智斗",
      "锄奸"
    ],
    "oneLine": "一支伪装成伪军连队的八路军小队，在日军心脏地带玩“无间道”。"
  },
  {
    "title": "女孩舞步",
    "url": "./movie-1025.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 歌舞, 励志",
    "tags": [
      "街舞",
      "女性",
      "友谊",
      "热血",
      "逆袭"
    ],
    "oneLine": "五个来自不同背景的失败少女组成了街舞团，她们的对手不是别人，而是这个瞧不起她们的世界。"
  },
  {
    "title": "重回1997",
    "url": "./movie-1026.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 奇幻",
    "tags": [
      "穿越",
      "怀旧",
      "拯救父母"
    ],
    "oneLine": "一个颓废的30岁社畜穿越回1997年，成了自己18岁的高中生老爸的“义兄”，并试图阻止一场改变全家命运的灾祸。"
  },
  {
    "title": "世界小姐秘史",
    "url": "./movie-1027.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情, 悬疑",
    "tags": [
      "选美",
      "暗黑",
      "女性",
      "复仇"
    ],
    "oneLine": "光鲜选美舞台背后，一场横跨三十年的连环失踪案终于浮出水面。"
  },
  {
    "title": "滚动的钢蛋",
    "url": "./movie-1028.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "黑色幽默 / 犯罪",
    "tags": [
      "笨贼",
      "农村",
      "公路片",
      "巧合"
    ],
    "oneLine": "村里唯一的铁匠钢蛋，带着一颗祖传的“钢蛋”进城里卖，却阴差阳错卷入了一场黑帮交易。"
  },
  {
    "title": "大侦探波洛第五季",
    "url": "./movie-1029.html",
    "cover": "./129.jpg",
    "year": "1993",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑、犯罪、侦探",
    "tags": [
      "阿加莎",
      "英伦古典",
      "推理",
      "单元剧"
    ],
    "oneLine": "比利时名侦探在本季面临三个离奇案件：埃及古墓诅咒、旅馆房号谜案，以及巧克力毒杀案。"
  },
  {
    "title": "上头姐妹",
    "url": "./movie-1030.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 剧情",
    "tags": [
      "闺蜜",
      "创业",
      "直播",
      "喝酒",
      "女性互助"
    ],
    "oneLine": "四个合租女孩酒后直播意外爆火，从此不得不每晚“微醺营业”，却在流量与友情之间逐渐失控。"
  },
  {
    "title": "姐妹四城",
    "url": "./movie-1031.html",
    "cover": "./131.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 都市 / 女性群像",
    "tags": [
      "四姐妹",
      "异地奋斗",
      "原生家庭"
    ],
    "oneLine": "四个亲姐妹分居北上广深，在各自的城市挣扎求生，一场葬礼将她们重新聚首。"
  },
  {
    "title": "石墙",
    "url": "./movie-1032.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "历史/同性",
    "tags": [
      "平权运动",
      "真实事件改编",
      "群像戏",
      "抗争"
    ],
    "oneLine": "1969年纽约石墙酒吧外，一群社会边缘人如何用一场骚乱点燃了现代同性恋平权运动的星星之火。"
  },
  {
    "title": "希尔维斯特",
    "url": "./movie-1033.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 奇幻 / 悬疑",
    "tags": [
      "同名诅咒",
      "记忆碎片",
      "心理惊悚",
      "自我认同"
    ],
    "oneLine": "每个叫希尔维斯特的男人都会在35岁生日当天消失，第7个希尔维斯特决定打破这个循环。"
  },
  {
    "title": "超脱青春",
    "url": "./movie-1034.html",
    "cover": "./134.jpg",
    "year": "2019",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 青春, 悬疑",
    "tags": [
      "高中",
      "失踪",
      "友谊",
      "阶层"
    ],
    "oneLine": "学霸、校霸、书呆子三个死党约定毕业后“人间蒸发一天”，其中一人真的再也没有回来。"
  },
  {
    "title": "通灵恶犬",
    "url": "./movie-1035.html",
    "cover": "./135.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖、惊悚",
    "tags": [
      "狗",
      "通灵",
      "小镇",
      "诅咒"
    ],
    "oneLine": "小镇上每一条狗都能看见鬼魂，它们突然集体狂吠不止，因为一个被谋杀的女孩正在寻找替身。"
  },
  {
    "title": "惜别",
    "url": "./movie-1036.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "临终关怀",
      "父子",
      "释怀"
    ],
    "oneLine": "一个患绝症的父亲雇了一个演员扮演自己的“完美儿子”，只为让失智的老父亲安心离世，却引来了亲儿子的归来。"
  },
  {
    "title": "身穿十二单衣的恶魔",
    "url": "./movie-1037.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "古装悬疑",
    "tags": [
      "平安时代",
      "宫廷斗争",
      "连环杀人",
      "女性复仇"
    ],
    "oneLine": "平安时代，一位必须穿着沉重十二单衣的贵族女子，成了宫中唯一能追查连环杀人案的“侦探”。"
  },
  {
    "title": "秦时明月之沧海横流",
    "url": "./movie-1038.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "武侠 / 奇幻",
    "tags": [
      "秦朝",
      "诸子百家",
      "机关术",
      "史诗终章"
    ],
    "oneLine": "天明和少羽兵分两路，一个去咸阳刺秦，一个去东海寻蓬莱，却发现秦始皇才是最大的“反秦者”。"
  },
  {
    "title": "天福山起义",
    "url": "./movie-1039.html",
    "cover": "./139.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 战争",
    "tags": [
      "革命历史",
      "抗战",
      "真实改编",
      "热血"
    ],
    "oneLine": "1937年，一群胶东农民在生死存亡之际，用土枪拉响了武装抗日的号角。"
  },
  {
    "title": "牧蜂姑娘",
    "url": "./movie-1040.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 乡村",
    "tags": [
      "女性",
      "返乡",
      "创业",
      "生态",
      "治愈"
    ],
    "oneLine": "城市白领阿晴带着先进的营销知识回到山村养蜂，却发现最大的敌人不是技术，而是村民根深蒂固的偏见。"
  },
  {
    "title": "狮心王：背叛",
    "url": "./movie-1041.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史， 战争， 动作",
    "tags": [
      "十字军",
      "冷兵器",
      "权谋"
    ],
    "oneLine": "从监狱归来的狮心王理查发现，他最信赖的弟弟约翰不仅窃取了王位，更与敌对的法国国王签署了出卖英格兰灵魂的秘密条约。"
  },
  {
    "title": "小学风云第四季",
    "url": "./movie-1042.html",
    "cover": "./142.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情",
    "tags": [
      "伪纪录片",
      "公立教育",
      "教师群像",
      "社会讽刺"
    ],
    "oneLine": "第四季中，备受爱戴的校长退休，新来的企业改革派校长要把这所快乐的小学改造成标准化考试工厂。"
  },
  {
    "title": "玉面虎雄霸谍海",
    "url": "./movie-1043.html",
    "cover": "./143.jpg",
    "year": "1971",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作谍战",
    "tags": [
      "邵氏",
      "冷战",
      "双面间谍",
      "功夫",
      "悬疑"
    ],
    "oneLine": "代号“玉面虎”的亚洲第一间谍，在各方势力争夺一份核弹启动密码的迷局中，上演无间道。"
  },
  {
    "title": "狂卷滚轮情",
    "url": "./movie-1044.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 爱情 / 运动",
    "tags": [
      "过山车",
      "竞争",
      "中年爱情",
      "游乐园"
    ],
    "oneLine": "两个四十五岁的过山车发烧友，为了争夺“欧洲过山车之王”头衔，从互掐到互相掐出了火花。"
  },
  {
    "title": "九宫奇局",
    "url": "./movie-1045.html",
    "cover": "./145.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络剧",
    "typeGroup": "other",
    "regionGroup": "mainland",
    "genre": "悬疑 / 冒险",
    "tags": [
      "机关术",
      "古墓",
      "九宫格"
    ],
    "oneLine": "一个神秘的九宫格机关图流传于世，五路人马在千年古墓中各怀鬼胎。"
  },
  {
    "title": "佛雷德利·杜蒙",
    "url": "./movie-1046.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "传记 / 剧情",
    "tags": [
      "音乐家",
      "19世纪",
      "传奇",
      "古典",
      "天才"
    ],
    "oneLine": "被遗忘的19世纪黑人小提琴大师，如何用琴弦对抗整个时代的歧视。"
  },
  {
    "title": "你是我的菜",
    "url": "./movie-1047.html",
    "cover": "./147.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情 / 喜剧 / 美食",
    "tags": [
      "欢喜冤家",
      "菜市场",
      "私厨",
      "台式浪漫"
    ],
    "oneLine": "一个米其林女主厨为寻找灵感，隐藏身份到传统菜市场摆摊，结果和对面猪肉摊的肌肉男老板成了死对头。"
  },
  {
    "title": "瓦舍江湖",
    "url": "./movie-1048.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装、喜剧、江湖",
    "tags": [
      "瓦舍说书人",
      "江湖骗局",
      "草根侠义",
      "单元剧"
    ],
    "oneLine": "京城瓦舍里一个只会说书的怂包，被卷入了一场真正的江湖纷争，所有故事竟然都是预言。"
  },
  {
    "title": "都市放牛",
    "url": "./movie-1049.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 剧情",
    "tags": [
      "返乡",
      "城乡冲突",
      "治愈"
    ],
    "oneLine": "大厂高管被裁后回乡养牛，结果整条村都被他搞成了“都市放牛”沉浸式体验农家乐。"
  },
  {
    "title": "美丽新世界2：女王任务",
    "url": "./movie-1050.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻冒险",
    "tags": [
      "反乌托邦",
      "女性",
      "基因",
      "皇权",
      "觉醒"
    ],
    "oneLine": "在基因决定阶层的未来，一个底层女孩发现自己是克隆的女王，必须推翻精心设计的虚假王国。"
  },
  {
    "title": "福星高照",
    "url": "./movie-1051.html",
    "cover": "./1.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动作",
    "tags": [
      "贺岁",
      "警匪",
      "群像",
      "经典"
    ],
    "oneLine": "七个倒霉蛋警察护送一对价值连城的金佛，一路上霉运不断，却歪打正着。"
  },
  {
    "title": "蔡锷与小凤仙粤语",
    "url": "./movie-1052.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "历史, 爱情",
    "tags": [
      "护国运动",
      "名妓与将军",
      "粤语原声",
      "民国传奇"
    ],
    "oneLine": "护国将军蔡锷以留恋风月为名麻痹袁世凯，却与名妓小凤仙陷入一场假戏真做的生死绝恋。"
  },
  {
    "title": "愤怒鸟玩电影2",
    "url": "./movie-1053.html",
    "cover": "./3.jpg",
    "year": "2019",
    "region": "芬兰 / 美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧、动画、冒险",
    "tags": [
      "宿敌联手",
      "猪鸟大战",
      "搞笑",
      "合家欢"
    ],
    "oneLine": "为了对抗共同的冰球岛威胁，猪鸟竟联手展开一场笑料百出的特工行动。"
  },
  {
    "title": "谈情说爱",
    "url": "./movie-1054.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情、剧情",
    "tags": [
      "都市爱情",
      "女性视角",
      "反套路"
    ],
    "oneLine": "三个闺蜜约定一年不谈情说爱，结果全部背叛了约定。"
  },
  {
    "title": "宛如阿修罗2025",
    "url": "./movie-1055.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "家庭 / 剧情 / 悬疑",
    "tags": [
      "四姐妹",
      "家庭秘密",
      "出轨",
      "昭和风",
      "是枝裕和风格"
    ],
    "oneLine": "父亲疑似出轨的消息，像一块石头砸进了四姐妹看似平静的生活湖面，掀起了惊涛骇浪。"
  },
  {
    "title": "老爸爱转弯",
    "url": "./movie-1056.html",
    "cover": "./6.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧, 家庭",
    "tags": [
      "亲子",
      "赛车",
      "老年",
      "代沟"
    ],
    "oneLine": "退休赛车手老爸非要教内向女儿开手动挡，两人从家门口吵到全国拉力赛。"
  },
  {
    "title": "维多莉亚的秘密",
    "url": "./movie-1057.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "心理博弈",
      "卧底",
      "双重身份",
      "反转"
    ],
    "oneLine": "卧底女警代号“维多莉亚”，在接近黑帮之子的过程中，发现自己的身世才是最大的秘密。"
  },
  {
    "title": "盲情六分",
    "url": "./movie-1058.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情悬疑",
    "tags": [
      "盲人",
      "限时恋爱",
      "器官捐献",
      "绝症",
      "反转"
    ],
    "oneLine": "一个假装失明的骗子，爱上了自己正在行骗的绝症盲女，为了给她治眼睛，他必须找到消失的六分钟录音证据。"
  },
  {
    "title": "大逃亡",
    "url": "./movie-1059.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史 / 动作 / 剧情",
    "tags": [
      "二战战俘营",
      "集体越狱",
      "真实改编"
    ],
    "oneLine": "根据真实事件改编，21名盟军战俘耗时一年挖出三条地道，却只有三人活到战后。"
  },
  {
    "title": "安妮的一千日",
    "url": "./movie-1060.html",
    "cover": "./10.jpg",
    "year": "1969",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史",
    "tags": [
      "宫廷",
      "女性",
      "悲剧",
      "权谋"
    ],
    "oneLine": "国王的激情与一千日的囚笼，一个女人的爱情在权力的裂缝中燃烧殆尽。"
  },
  {
    "title": "地球",
    "url": "./movie-1061.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "英国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "自然纪录",
    "tags": [
      "生态系统",
      "气候变化",
      "绝美摄影"
    ],
    "oneLine": "跨越六大洲、耗时四年拍摄，记录地球生态系统的脆弱平衡和一个物种如何改变一切。"
  },
  {
    "title": "麦里斯德与黑宝马",
    "url": "./movie-1062.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻冒险",
    "tags": [
      "黑暗童话",
      "独角兽",
      "诅咒",
      "少女觉醒"
    ],
    "oneLine": "小镇少女发现父亲失踪的秘密与一匹神秘黑宝马有关，而这匹马其实是受诅咒的独角兽王子。"
  },
  {
    "title": "阿诗玛",
    "url": "./movie-1063.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻 / 爱情 / 歌舞",
    "tags": [
      "撒尼叙事诗",
      "3D巨制",
      "神话改编",
      "民族风",
      "爱情悲剧"
    ],
    "oneLine": "彝族传说改编：阿诗玛被土司之子强娶，她化为石林后，回声至今仍在喊他的名字。"
  },
  {
    "title": "生命之树",
    "url": "./movie-1064.html",
    "cover": "./14.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 奇幻, 哲学",
    "tags": [
      "生命起源",
      "家庭史诗",
      "宇宙",
      "泰伦斯·马力克"
    ],
    "oneLine": "一个失去了弟弟的中年男人，在宇宙星云的诞生与灭绝恐龙的回忆中，重新审视自己与严父、慈母及童年玩伴的关系。"
  },
  {
    "title": "施恩得美",
    "url": "./movie-1065.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "因果报应",
      "绑架案",
      "反转不断",
      "道德困境"
    ],
    "oneLine": "十年前她救下的男孩，十年后成了绑架她女儿的绑匪，而赎金是她的全部身家。"
  },
  {
    "title": "水怪",
    "url": "./movie-1066.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "恐怖 / 怪兽 / 悬疑",
    "tags": [
      "洞庭湖",
      "水怪",
      "生态",
      "科学vs迷信",
      "小镇"
    ],
    "oneLine": "洞庭湖连续出现浮尸，传言水怪归来，一个不信邪的水文专家却发现湖底有异常的低频声波源。"
  },
  {
    "title": "简妮",
    "url": "./movie-1067.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "法国 / 美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 传记",
    "tags": [
      "女性",
      "文学",
      "独立",
      "时代跨越"
    ],
    "oneLine": "一位20世纪初的法国女佣，偷偷写下了惊世骇俗的小说，直到一百年后才被人发现。"
  },
  {
    "title": "实习医生格蕾第二季",
    "url": "./movie-1068.html",
    "cover": "./18.jpg",
    "year": "2006",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情",
    "tags": [
      "医疗",
      "爱情",
      "职场",
      "群像"
    ],
    "oneLine": "西雅图仁爱医院的外科实习生们开始独当一面，但混乱的感情线比手术更棘手。"
  },
  {
    "title": "雪拉卡莎",
    "url": "./movie-1069.html",
    "cover": "./19.jpg",
    "year": "2025",
    "region": "俄罗斯 / 挪威",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 冒险 / 历史",
    "tags": [
      "北极",
      "萨满",
      "女性",
      "生存",
      "史诗"
    ],
    "oneLine": "19世纪末，一名萨米族少女被沙俄科考队当作“女巫”流放北极，她必须在极夜中独自生存并复仇。"
  },
  {
    "title": "海胆煎饼",
    "url": "./movie-1070.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "美食治愈",
    "tags": [
      "夜市",
      "自闭症",
      "母子关系",
      "市井温情"
    ],
    "oneLine": "得了味觉失调的米其林大厨回到故乡夜市，在自闭症儿子做的海胆煎饼里尝到了“家的味道”。"
  },
  {
    "title": "天佑勇者",
    "url": "./movie-1071.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "日本",
    "type": "TV动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻 / 冒险 / 治愈",
    "tags": [
      "勇者小队",
      "战损",
      "退休生活",
      "反套路"
    ],
    "oneLine": "打败魔王五年后，曾经的最强勇者失去了所有力量，在一座边境村庄当起了兼职邮差。"
  },
  {
    "title": "金钱万恶",
    "url": "./movie-1072.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "金融",
      "欲望",
      "人性",
      "多线叙事"
    ],
    "oneLine": "一张中了三亿的六合彩彩票，在五个互不相识的小人物之间引发连环血案。"
  },
  {
    "title": "夏洛克的孩子们",
    "url": "./movie-1073.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑， 剧情",
    "tags": [
      "天才儿童",
      "犯罪",
      "教育"
    ],
    "oneLine": "在一个专收问题少年的学校里，五个智商超群的孩子模仿福尔摩斯，调查老师离奇失踪案。"
  },
  {
    "title": "人皮灯笼粤语",
    "url": "./movie-1074.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖, 奇幻, 惊悚",
    "tags": [
      "民俗恐怖",
      "南洋邪术",
      "粤语原声",
      "港风回归"
    ],
    "oneLine": "旧书店老板买到一盏古旧灯笼，夜里却看见灯笼纸上的人脸在流眼泪。"
  },
  {
    "title": "荡女芬妮",
    "url": "./movie-1075.html",
    "cover": "./25.jpg",
    "year": "1972",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 情色, 历史",
    "tags": [
      "经典",
      "人性",
      "女性",
      "悲剧"
    ],
    "oneLine": "一战前夕，乡村少女芬妮在欲望与道德的夹缝中走向毁灭。"
  },
  {
    "title": "12孤汉",
    "url": "./movie-1076.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 悬疑",
    "tags": [
      "自闭症",
      "群像",
      "社会",
      "真相"
    ],
    "oneLine": "一座封闭式福利院里12名自称“孤汉”的自闭症少年，可能目击了一桩谋杀。"
  },
  {
    "title": "黑人商业教父",
    "url": "./movie-1077.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 传记",
    "tags": [
      "种族平等",
      "商战",
      "逆袭",
      "真实故事改编",
      "励志"
    ],
    "oneLine": "1970年代芝加哥，一位出身贫民窟的黑人青年用三份兼职攒下第一桶金，最终建立起横跨地产、银行的商业帝国。"
  },
  {
    "title": "结伙072第五季",
    "url": "./movie-1078.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 悬疑 / 冒险",
    "tags": [
      "密室逃脱",
      "五人组",
      "爆笑",
      "高智商",
      "单元剧"
    ],
    "oneLine": "五个不靠谱队友组成密室逃脱战队，这一季他们被困在了自己设计的致命迷宫里。"
  },
  {
    "title": "四分之一的爱",
    "url": "./movie-1079.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情, 剧情",
    "tags": [
      "拼图爱情",
      "都市男女",
      "四角恋",
      "碎片叙事",
      "疗愈"
    ],
    "oneLine": "一张被撕成四份的匿名情书，牵扯出四个都市男女交错的爱情拼图。"
  },
  {
    "title": "有钱男与贫穷女",
    "url": "./movie-1080.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情, 职场",
    "tags": [
      "阶级差异",
      "商战",
      "励志",
      "傲娇男主",
      "社会议题"
    ],
    "oneLine": "亿万资产继承人假扮破产流落贫民区，遇见了靠打五份工养活弟妹的硬核女孩。"
  },
  {
    "title": "浮石传",
    "url": "./movie-1081.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 奇幻",
    "tags": [
      "仙侠修真",
      "反套路",
      "废柴逆袭",
      "轻喜剧"
    ],
    "oneLine": "一块能漂浮的废石头突然开口说话，认了一个倒霉蛋做徒弟，要教他成为三界最没用的修仙者。"
  },
  {
    "title": "高卢英雄大战凯撒王子",
    "url": "./movie-1082.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 动作, 历史",
    "tags": [
      "恶搞",
      "古罗马",
      "竞技",
      "合家欢",
      "冒险"
    ],
    "oneLine": "凯撒宣布将公主嫁给奥林匹克冠军，高卢村的活宝组合决定伪装成运动员参赛，尽管他们连跑步都会绊倒。"
  },
  {
    "title": "湖心骇客",
    "url": "./movie-1083.html",
    "cover": "./33.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": [
      "基因编辑",
      "水下实验室",
      "克隆人反叛",
      "道德困境",
      "黑湖致敬"
    ],
    "oneLine": "生物学家在北美最深的湖底秘密实验室复活了一具5万年前的原始人，却发现它可以通过湖水将基因意识传染给岸上居民。"
  },
  {
    "title": "机智的捕快日常",
    "url": "./movie-1084.html",
    "cover": "./34.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 古装, 悬疑",
    "tags": [
      "女捕快",
      "古代职场",
      "探案",
      "乌龙",
      "成长"
    ],
    "oneLine": "只想摸鱼的小捕快苏小晚被空降的高冷提刑官捆绑办案，从此，她摸鱼的日子变成了被尸体和案件支配的恐惧。"
  },
  {
    "title": "情杀局中局",
    "url": "./movie-1085.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 犯罪, 爱情",
    "tags": [
      "出轨",
      "反转",
      "保险欺诈",
      "剧本杀"
    ],
    "oneLine": "一个杀妻计划被完美执行，但当丈夫打开保险箱时，发现妻子早已将自己的死设计成了一场针对他的审判。"
  },
  {
    "title": "美洲艳后",
    "url": "./movie-1086.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "墨西哥",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "历史 / 剧情",
    "tags": [
      "古文明",
      "权力",
      "女性",
      "史诗"
    ],
    "oneLine": "16世纪的美洲大陆，一位土著女领袖如何在西班牙征服者与部落之间周旋求生。"
  },
  {
    "title": "最爱喵星人：我猫威武",
    "url": "./movie-1087.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 喜剧 / 治愈",
    "tags": [
      "猫咪",
      "社畜",
      "治愈系",
      "单元剧"
    ],
    "oneLine": "废柴社畜被一只神出鬼没的流浪猫，改造成了职场战神。"
  },
  {
    "title": "家不成家—我生于巴勒斯坦",
    "url": "./movie-1088.html",
    "cover": "./38.jpg",
    "year": "2023",
    "region": "巴勒斯坦",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "other",
    "genre": "剧情，纪录片",
    "tags": [
      "难民",
      "家庭",
      "身份认同"
    ],
    "oneLine": "一个世代居住于雅法的巴勒斯坦家庭，在2023年的冲突中被迫再次踏上逃亡之路。"
  },
  {
    "title": "聚焦国语",
    "url": "./movie-1089.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑, 犯罪",
    "tags": [
      "狗仔队",
      "新闻正义",
      "偷拍"
    ],
    "oneLine": "香港最臭名昭著的狗仔摄影师，在一次偷拍中意外录下了一桩灭门案的幕后真凶。"
  },
  {
    "title": "夏季别墅",
    "url": "./movie-1090.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 剧情 / 心理",
    "tags": [
      "家族秘密",
      "度假",
      "密室",
      "回忆杀"
    ],
    "oneLine": "兄妹三人回到童年别墅清理遗物，发现墙壁夹层里藏着一个从未被提起的第四人。"
  },
  {
    "title": "相遇不负相思",
    "url": "./movie-1091.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装爱情",
    "tags": [
      "甜虐交织",
      "权谋",
      "替身文学",
      "先婚后爱"
    ],
    "oneLine": "和亲公主嫁给了敌国盲眼质子，却发现他的失明是装的，而他的真实身份更惊人。"
  },
  {
    "title": "虎！虎！虎！",
    "url": "./movie-1092.html",
    "cover": "./42.jpg",
    "year": "1970",
    "region": "日本 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "战争 / 历史 / 剧情",
    "tags": [
      "偷袭珍珠港",
      "纪实风格",
      "日美合拍",
      "群像",
      "反战"
    ],
    "oneLine": "珍珠港事件前24小时，日美双方从士兵到将领，每个人都以为自己是正义的。"
  },
  {
    "title": "格林兄弟国语",
    "url": "./movie-1093.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻、悬疑",
    "tags": [
      "童话改编",
      "暗黑",
      "配音版",
      "民俗恐怖"
    ],
    "oneLine": "当你发现《格林童话》不是童话，而是真实发生过的屠魔记录，而恶魔已经混入现代社会。"
  },
  {
    "title": "兔子陷阱",
    "url": "./movie-1094.html",
    "cover": "./44.jpg",
    "year": "2030",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "乡村",
      "连环失踪",
      "邪教",
      "双面人格",
      "民俗恐怖"
    ],
    "oneLine": "一名女刑警回到故乡追查少女失踪案，发现所有线索都指向小时候带她走出创伤的“兔子姐姐”。"
  },
  {
    "title": "扫兴者第二季",
    "url": "./movie-1095.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集 (第二季，10集)",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "黑色喜剧 / 奇幻",
    "tags": [
      "超能力",
      "反英雄",
      "讽刺",
      "丧文化",
      "单元剧"
    ],
    "oneLine": "上一季结尾他毁了全城求婚现场，这一季他被“正能量执法队”全球通缉。"
  },
  {
    "title": "地缚少年花子君第二季",
    "url": "./movie-1096.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻 / 校园 / 恋爱",
    "tags": [
      "厕所里的神明",
      "怪异传说",
      "七大不可思议",
      "画风唯美"
    ],
    "oneLine": "海鸥学园的旧校舍第三间女厕，花子君和宁宁的新敌人，来自镜子另一边的“倒立花子”。"
  },
  {
    "title": "黑白照相馆",
    "url": "./movie-1097.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "奇幻，剧情，家庭",
    "tags": [
      "照相馆",
      "时间旅行",
      "遗憾",
      "黑白照片",
      "催泪"
    ],
    "oneLine": "老街上那家破旧的黑白照相馆，拍出的照片不是回忆，而是“你以为已经忘记了的未来”。"
  },
  {
    "title": "突变末日",
    "url": "./movie-1098.html",
    "cover": "./48.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻、惊悚",
    "tags": [
      "丧尸",
      "变异",
      "末世",
      "实验室",
      "生存"
    ],
    "oneLine": "一种让人类失去睡眠能力的病毒爆发，不眠者在七天后变成嗜血怪物，而少数清醒者开始长出奇怪器官。"
  },
  {
    "title": "猫咪马汀",
    "url": "./movie-1099.html",
    "cover": "./49.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "动画、奇幻、家庭",
    "tags": [
      "猫",
      "外星来客",
      "治愈",
      "环保寓言"
    ],
    "oneLine": "一只流浪猫教会小女孩如何用呼噜声修复损坏的星球。"
  },
  {
    "title": "雪域天路",
    "url": "./movie-1100.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 年代 / 历史",
    "tags": [
      "青藏铁路",
      "建设",
      "奉献",
      "群像",
      "家国"
    ],
    "oneLine": "四代人、半个世纪，一个藏族家庭与青藏铁路的未竟之约。"
  },
  {
    "title": "初恋这首情歌",
    "url": "./movie-1101.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情、音乐、青春",
    "tags": [
      "乐队",
      "初恋重逢",
      "中年危机",
      "未寄出的信"
    ],
    "oneLine": "中年破产大叔翻出三十年前写给初恋的歌词，决定组一支乐队，把这首歌当面唱给她听。"
  },
  {
    "title": "剩女脱单记",
    "url": "./movie-1102.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 爱情",
    "tags": [
      "相亲",
      "大龄女",
      "职场",
      "搞笑",
      "反转"
    ],
    "oneLine": "金牌猎头把客户当成了自己的相亲对象，一场职场猎头战误打误撞成了爱情攻坚战。"
  },
  {
    "title": "怨灵",
    "url": "./movie-1103.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "泰国 / 韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "校园",
      "诅咒",
      "直播",
      "灵异事件"
    ],
    "oneLine": "五个学生直播挑战废弃教学楼禁忌游戏，却发现每一层都藏着不同的死亡诅咒。"
  },
  {
    "title": "盲流",
    "url": "./movie-1104.html",
    "cover": "./54.jpg",
    "year": "1987",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 历史",
    "tags": [
      "知青",
      "返城",
      "底层",
      "生存",
      "伤痕"
    ],
    "oneLine": "为了拿到返城名额，两个盲流在火车站底下一场持续三天的象棋对弈。"
  },
  {
    "title": "我们签约吧",
    "url": "./movie-1105.html",
    "cover": "./55.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 职场 / 喜剧",
    "tags": [
      "偶像",
      "经纪公司",
      "契约恋爱",
      "娱乐圈"
    ],
    "oneLine": "实习律师误打误撞成为当红偶像的“合约女友”，两人在同居中从互撕到相爱，还要应付狗仔和私生饭。"
  },
  {
    "title": "夜雨霏霏",
    "url": "./movie-1106.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国内地 / 台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 悬疑",
    "tags": [
      "雨夜",
      "替身",
      "文艺",
      "反转",
      "虐恋"
    ],
    "oneLine": "每个雨夜，他都会撑伞出现在同一盏路灯下，但他等的不是她，是她死去的双胞胎妹妹。"
  },
  {
    "title": "雪国迷景",
    "url": "./movie-1107.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情、悬疑、爱情",
    "tags": [
      "失忆",
      "雪乡",
      "文艺悬疑",
      "不伦之恋"
    ],
    "oneLine": "男人在暴雪中醒来，身边是一具女尸，口袋里有一张结婚照，他却认不出照片里的自己。"
  },
  {
    "title": "永恒的少女",
    "url": "./movie-1108.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 奇幻 / 女性",
    "tags": [
      "不老症",
      "母女",
      "时间囚笼",
      "拉美魔幻",
      "衰老焦虑"
    ],
    "oneLine": "患有不老症的女儿每七年衰老一岁，而正常母亲却在加速变老，她们互为时间的镜子与监狱。"
  },
  {
    "title": "支离破碎",
    "url": "./movie-1109.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "心理惊悚 / 悬疑 / 犯罪",
    "tags": [
      "多重人格",
      "豪宅",
      "谋杀案",
      "碎片剪辑",
      "记忆拼图"
    ],
    "oneLine": "豪宅女主人失踪，七个嫌疑人都有嫌疑，但他们其实是同一个人的七个人格。"
  },
  {
    "title": "秋白之死",
    "url": "./movie-1110.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 历史, 传记",
    "tags": [
      "革命先烈",
      "文人风骨",
      "诗意叙事"
    ],
    "oneLine": "1935年，瞿秋白在福建长汀被捕。面对劝降，他在狱中以诗会友，用生命书写了“文人”的最后尊严。"
  },
  {
    "title": "普通人行为指南",
    "url": "./movie-1111.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 剧情",
    "tags": [
      "社恐",
      "治愈",
      "独立",
      "荒诞",
      "人生指南"
    ],
    "oneLine": "一个重度社恐患者按照网上《普通人行为指南》逐条模仿，结果成了最不正常的人。"
  },
  {
    "title": "解除跆拳道的诅咒",
    "url": "./movie-1112.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 奇幻 / 运动",
    "tags": [
      "道馆",
      "代际创伤",
      "诅咒",
      "踢腿",
      "和解"
    ],
    "oneLine": "一家三代跆拳道馆长都活不过四十岁，小女儿在生日前七天决定用比赛破解家族魔咒。"
  },
  {
    "title": "俊俏媳妇开明婆",
    "url": "./movie-1113.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭 / 喜剧 / 女性",
    "tags": [
      "婆媳",
      "创业",
      "城乡结合",
      "爽剧",
      "女性互助"
    ],
    "oneLine": "城里来的网红媳妇遭遇农村婆婆，两人从互撕到联手创业开直播卖土特产。"
  },
  {
    "title": "黑猫警长之翡翠之星",
    "url": "./movie-1114.html",
    "cover": "./64.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画、科幻、动作",
    "tags": [
      "童年经典",
      "机甲",
      "环保",
      "硬核警匪"
    ],
    "oneLine": "30年后黑猫警长再出山，这次他的对手是一颗能吞噬城市的人工智能卫星“翡翠之星”。"
  },
  {
    "title": "三个盗贼和狮子",
    "url": "./movie-1115.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "动画、冒险、喜剧",
    "tags": [
      "高卢风格",
      "动物寓言",
      "公路动画",
      "治愈"
    ],
    "oneLine": "三个笨拙的盗贼绑架了一只马戏团的狮子，却发现这头猛兽才是真正的“绑匪头子”。"
  },
  {
    "title": "自杀敢死队",
    "url": "./movie-1116.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作战争",
    "tags": [
      "死囚",
      "任务",
      "救赎",
      "硬核",
      "悲壮"
    ],
    "oneLine": "五名被判死刑的囚犯，被军方秘密征召执行一项不可能完成的任务，成功则无罪，失败则默认死亡。"
  },
  {
    "title": "便条",
    "url": "./movie-1117.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑， 剧情， 犯罪",
    "tags": [
      "短篇故事集",
      "连环杀手",
      "都市传说",
      "反转"
    ],
    "oneLine": "一家旧书店的老板发现，每张旧书便条上都写着对“那个人”的诅咒，而这些人都真的死了。"
  },
  {
    "title": "小小飞虎队2011",
    "url": "./movie-1118.html",
    "cover": "./68.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧，动作，儿童",
    "tags": [
      "抗日",
      "儿童",
      "冒险",
      "铁道"
    ],
    "oneLine": "抗日战争时期，三个崇拜飞虎队的小男孩误打误撞接到了一项护送绝密情报的生死任务。"
  },
  {
    "title": "戏无益",
    "url": "./movie-1119.html",
    "cover": "./69.jpg",
    "year": "2021",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭",
    "tags": [
      "粤剧",
      "父子",
      "传承",
      "社会底层"
    ],
    "oneLine": "一个没落的粤剧丑生，带着自闭症儿子在街头卖艺，一场意外让他们登上真正的戏台。"
  },
  {
    "title": "十二猴子第二季",
    "url": "./movie-1120.html",
    "cover": "./70.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻, 悬疑, 惊悚",
    "tags": [
      "时空穿越",
      "病毒",
      "末日",
      "精神病院",
      "循环"
    ],
    "oneLine": "病毒席卷全球后，科尔在分裂的时间线中发现，十二猴军团的目的远比释放病毒更加疯狂。"
  },
  {
    "title": "派对与胜利之歌",
    "url": "./movie-1121.html",
    "cover": "./71.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 音乐 / 青春",
    "tags": [
      "校园青春",
      "无伴奏合唱",
      "逆袭之战",
      "黑马传奇"
    ],
    "oneLine": "一个被开除的过气合唱明星，带领一群校园“废柴”用阿卡贝拉挑战顶级合唱团。"
  },
  {
    "title": "特别响，非常近",
    "url": "./movie-1122.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 家庭",
    "tags": [
      "911",
      "创伤",
      "亲情",
      "寻宝",
      "催泪"
    ],
    "oneLine": "9岁男孩在遇难父亲衣柜里找到一把钥匙，他坚信这是父亲留给他的最后一场“寻宝游戏”。"
  },
  {
    "title": "戆直贼佬俏佳人",
    "url": "./movie-1123.html",
    "cover": "./73.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 犯罪 / 爱情",
    "tags": [
      "笨贼",
      "港式喜剧",
      "老少配"
    ],
    "oneLine": "一个傻乎乎的小贼意外绑架了一位冰山女总裁，结果反被女总裁“调教”成商业间谍。"
  },
  {
    "title": "眼镜蛇邪教",
    "url": "./movie-1124.html",
    "cover": "./74.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "邪教",
      "爬行动物",
      "深山",
      "洗脑",
      "密室"
    ],
    "oneLine": "为了调查失踪案，一名记者误入深山中的眼镜蛇崇拜教，发现神迹背后全是血。"
  },
  {
    "title": "霹雳天机2仙魔决",
    "url": "./movie-1125.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "奇幻 / 武侠 / 古装",
    "tags": [
      "布袋戏",
      "仙魔",
      "宿命",
      "正邪"
    ],
    "oneLine": "仙门与魔界停战百年后，一名半仙半魔的少年诞生，他既是救世之主，也是灭世之源。"
  },
  {
    "title": "靓妹有难",
    "url": "./movie-1126.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "女性反杀",
      "绑架",
      "黑色幽默",
      "笨贼",
      "港式无厘头"
    ],
    "oneLine": "三个笨贼绑架了“富家女”，结果发现她比贼还穷，而且她正在被真正的黑帮追杀，绑架反而救了她。"
  },
  {
    "title": "雏妓",
    "url": "./movie-1127.html",
    "cover": "./77.jpg",
    "year": "1999",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 犯罪",
    "tags": [
      "社会写实",
      "少女救助",
      "边缘人群",
      "残酷青春"
    ],
    "oneLine": "社工在红灯区发现一个13岁少女，她的身世竟牵扯出几条街区的黑色产业链。"
  },
  {
    "title": "密令保镳",
    "url": "./movie-1128.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "动作，悬疑",
    "tags": [
      "特工",
      "替身",
      "政治阴谋"
    ],
    "oneLine": "菜鸟保镳被选中当总统的替身，他却发现真正的刺杀目标不是总统，而是他自己。"
  },
  {
    "title": "独生子女的婆婆妈妈",
    "url": "./movie-1129.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭，喜剧",
    "tags": [
      "独生子女",
      "婆媳关系",
      "养老",
      "现实主义"
    ],
    "oneLine": "一对独生子女小夫妻婚后要面对六个老人：双方父母、爷爷奶奶、姥姥姥爷，家庭大战一触即发。"
  },
  {
    "title": "老虎搏懵",
    "url": "./movie-1130.html",
    "cover": "./80.jpg",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 喜剧 / 功夫",
    "tags": [
      "洪拳",
      "市井",
      "师徒",
      "诙谐打斗"
    ],
    "oneLine": "卖猪肉的懵仔意外打死一只偷吃的老虎，却被全村人当成打虎英雄，逼着他去教拳。"
  },
  {
    "title": "某人某地第三季",
    "url": "./movie-1131.html",
    "cover": "./81.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 喜剧, 生活",
    "tags": [
      "回乡",
      "中年",
      "友情",
      "细腻",
      "慢节奏"
    ],
    "oneLine": "中年女人从纽约回到堪萨斯老家，在唱诗班里找到了比大城市更真实的快乐。"
  },
  {
    "title": "第12次失败",
    "url": "./movie-1132.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "励志, 剧情, 传记",
    "tags": [
      "公务员考试",
      "坚持",
      "小镇青年",
      "真实改编",
      "催泪"
    ],
    "oneLine": "一个印度小镇青年第12次冲击国家级公务员考试，贫穷和种姓歧视比试卷更难以跨越。"
  },
  {
    "title": "飞行之翼",
    "url": "./movie-1133.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "机甲",
      "兄弟情",
      "天空竞技",
      "未来战争"
    ],
    "oneLine": "在万米高空的悬浮竞技场，一对失和兄弟必须驾驶古董战机对抗作弊的外星强敌。"
  },
  {
    "title": "胡同交响曲",
    "url": "./movie-1134.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 音乐 / 喜剧",
    "tags": [
      "北京",
      "胡同文化",
      "老旧小区",
      "邻里关系"
    ],
    "oneLine": "为了保住即将拆迁的老胡同，居民们用锅碗瓢盆奏响了一支“交响曲”逼退开发商。"
  },
  {
    "title": "法证先锋国语",
    "url": "./movie-1135.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑, 刑侦",
    "tags": [
      "法证",
      "推理",
      "单元剧"
    ],
    "oneLine": "法证部高级化验师利用最前沿的科技，配合法医和重案组，破解一系列利用AI换脸、暗网实施的高智商犯罪。"
  },
  {
    "title": "外交秘闻",
    "url": "./movie-1136.html",
    "cover": "./86.jpg",
    "year": "2025",
    "region": "法国 / 德国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "谍战 / 历史 / 政治",
    "tags": [
      "冷战",
      "驻外大使",
      "双面间谍",
      "暗语邮件"
    ],
    "oneLine": "1962年，法国驻苏联大使馆的一名打字员发现，大使的每一封外交邮件里都藏着给CIA的暗语。"
  },
  {
    "title": "失忆谜案",
    "url": "./movie-1137.html",
    "cover": "./87.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "失忆",
      "反转",
      "心理游戏",
      "密室"
    ],
    "oneLine": "一个失去记忆的男人醒来发现自己身边躺着一具尸体，而所有证据都指向他就是凶手。"
  },
  {
    "title": "世界上最伟大的父亲",
    "url": "./movie-1138.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 黑色喜剧",
    "tags": [
      "父女关系",
      "谎言代价",
      "校园压力",
      "媒体炒作"
    ],
    "oneLine": "一位落魄父亲为保护女儿意外撒下的谎，让他成了全美偶像，却险些彻底失去她。"
  },
  {
    "title": "情妇玛侬",
    "url": "./movie-1139.html",
    "cover": "./89.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情/爱情",
    "tags": [
      "情欲",
      "文艺",
      "第三者",
      "女性视角"
    ],
    "oneLine": "二战后的法国，一个年轻的美国作家与一个名叫玛侬的神秘女人坠入爱河，却不知她是巴黎最有权势的男人圈养的“笼中雀”。"
  },
  {
    "title": "赛尔号之光明的救赎",
    "url": "./movie-1140.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "科幻 / 冒险 / 动画",
    "tags": [
      "机甲",
      "宇宙",
      "团队",
      "牺牲",
      "能源危机"
    ],
    "oneLine": "当宇宙能源枯竭，赛尔号小队发现光明竟源自一颗被诅咒的活体星球。"
  },
  {
    "title": "蓝松鸦行动",
    "url": "./movie-1141.html",
    "cover": "./91.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 战争",
    "tags": [
      "特种兵",
      "营救",
      "丛林战",
      "兄弟情"
    ],
    "oneLine": "六人特种小队深入敌后，却发现他们要营救的目标早已叛变。"
  },
  {
    "title": "熟男有惑粤语",
    "url": "./movie-1142.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 都市 / 爱情",
    "tags": [
      "中年危机",
      "律师",
      "粤语原声",
      "四男主"
    ],
    "oneLine": "四个四十岁出头的中产律师，在同一天离婚、失业、欠债、被子女嫌弃，决定重新当一次男孩。"
  },
  {
    "title": "堪萨斯小猫",
    "url": "./movie-1143.html",
    "cover": "./93.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧，冒险",
    "tags": [
      "猫咪",
      "公路",
      "西部",
      "宠物",
      "搞笑"
    ],
    "oneLine": "一只养尊处优的网红猫被快递错送到堪萨斯荒野，不得不踏上回家的冒险。"
  },
  {
    "title": "禁爱嫌疑犯",
    "url": "./movie-1144.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 爱情 / 犯罪",
    "tags": [
      "同志",
      "冤案",
      "九十年代",
      "刑侦",
      "悲剧"
    ],
    "oneLine": "1997 年，一名男工人被指控杀害女同事，唯一能证明他清白的是他无法公开承认的男友。"
  },
  {
    "title": "晚餐蓝调",
    "url": "./movie-1145.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 生活 / 美食",
    "tags": [
      "治愈",
      "深夜剧",
      "家庭",
      "日常"
    ],
    "oneLine": "每天晚上六点，一家不起眼的食堂准时亮灯，只招待当天最不想回家吃饭的人。"
  },
  {
    "title": "婚前协议",
    "url": "./movie-1146.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 律政",
    "tags": [
      "婚姻法",
      "财产分割",
      "都市情感",
      "现实主义",
      "群像"
    ],
    "oneLine": "每一对走进婚姻登记处的情侣，都先被递上了一支笔和一份长达40页的婚前协议。"
  },
  {
    "title": "美妙天堂第二季",
    "url": "./movie-1147.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "偶像, 歌舞, 少女",
    "tags": [
      "子供向",
      "成长",
      "友谊",
      "魔法",
      "燃"
    ],
    "oneLine": "第一季夺冠后，主角团面临解散危机，而一座从天而降的新“黑暗天堂”剧院，开始挖角所有偶像。"
  },
  {
    "title": "未吟之歌",
    "url": "./movie-1148.html",
    "cover": "./98.jpg",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "音乐, 剧情",
    "tags": [
      "民谣",
      "老年",
      "梦想",
      "怀旧",
      "温情"
    ],
    "oneLine": "80岁的民谣歌手在养老院写下人生最后一首歌，却发现这首歌的旋律，和60年前死在越南的好友写的遗作一模一样。"
  },
  {
    "title": "三十处男",
    "url": "./movie-1149.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧/爱情",
    "tags": [
      "大龄",
      "恋爱初体验",
      "港式幽默"
    ],
    "oneLine": "母胎单身三十年的保险经纪阿杰，被公司同事下了赌局：三个月内如果还交不到女朋友，就穿女装游街。"
  },
  {
    "title": "伟大的父亲",
    "url": "./movie-1150.html",
    "cover": "./100.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、家庭",
    "tags": [
      "父爱",
      "绝症",
      "伪造身份",
      "催泪"
    ],
    "oneLine": "只剩三个月生命的农民工，为了让自闭症儿子“有人管”，谎称自己是亿万富豪去参加相亲综艺。"
  },
  {
    "title": "爱情牧场",
    "url": "./movie-1151.html",
    "cover": "./101.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 爱情 / 西部",
    "tags": [
      "牧场",
      "疗愈",
      "寡妇",
      "牛仔"
    ],
    "oneLine": "丧夫的城市白领买下荒废牧场，却与脾气暴躁的牛仔开始了没完没了的斗嘴日常。"
  },
  {
    "title": "真的有天堂",
    "url": "./movie-1152.html",
    "cover": "./102.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 奇幻",
    "tags": [
      "濒死",
      "信仰",
      "家庭",
      "奇迹"
    ],
    "oneLine": "四岁男孩手术濒死，醒来后画出了他从未去过的、爷爷家的天堂模样。"
  },
  {
    "title": "香港爱情故事国语",
    "url": "./movie-1153.html",
    "cover": "./103.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "爱情, 家庭, 都市",
    "tags": [
      "住房问题",
      "蜗居",
      "代际冲突"
    ],
    "oneLine": "一对相恋七年的情侣，因为买不起房只能住在“纳米楼”里，在不到30平米的蜗居中，他们的爱情面临着比出轨更可怕的考验——琐碎与窒息。"
  },
  {
    "title": "艾德温·德鲁德之谜",
    "url": "./movie-1154.html",
    "cover": "./104.jpg",
    "year": "2012",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑 / 剧情",
    "tags": [
      "狄更斯",
      "未完成",
      "哥特",
      "改编",
      "谜团"
    ],
    "oneLine": "狄更斯未竟的遗作被搬上银幕，一个年轻学徒的失踪牵涉出小镇的双重人格谋杀案。"
  },
  {
    "title": "暴走狂花",
    "url": "./movie-1155.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 动作",
    "tags": [
      "姐妹情",
      "公路狂奔",
      "花式打斗"
    ],
    "oneLine": "两个性格迥异的闺蜜意外卷入黑帮追杀，开着破面包车开启亡命之旅。"
  },
  {
    "title": "自由！",
    "url": "./movie-1156.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧",
    "tags": [
      "监狱",
      "重生",
      "摇滚",
      "救赎"
    ],
    "oneLine": "一场监狱里的摇滚乐队选拔赛，让五个重刑犯在铁窗内第一次尝到了“自由”的滋味。"
  },
  {
    "title": "关东大侠",
    "url": "./movie-1157.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "武侠、历史",
    "tags": [
      "东北",
      "抗日",
      "绿林",
      "快意恩仇"
    ],
    "oneLine": "1931年关东绿林豪杰被迫联手，在雪原上用冷兵器对抗日军装甲部队。"
  },
  {
    "title": "二十",
    "url": "./movie-1158.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情/青春",
    "tags": [
      "成年礼",
      "梦想",
      "现实",
      "迷茫",
      "友情"
    ],
    "oneLine": "三个刚满二十岁的发小，一个想当演员，一个想继承家业，一个只想躺平，他们的二十岁一片狼藉。"
  },
  {
    "title": "超能小队",
    "url": "./movie-1159.html",
    "cover": "./109.jpg",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 喜剧 / 科幻",
    "tags": [
      "青少年",
      "超能力",
      "反套路",
      "搞笑",
      "成长"
    ],
    "oneLine": "五个高中生意外获得了超能力，但每个人得到的都是最没用的那种。"
  },
  {
    "title": "猛鬼电王",
    "url": "./movie-1160.html",
    "cover": "./110.jpg",
    "year": "1998",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖, 动作, 科幻",
    "tags": [
      "鬼附身",
      "高压电",
      "港式恐怖",
      "cult"
    ],
    "oneLine": "一名被电死的连环杀手化作“电王”附身高压线，整座城市的电器都成了他的杀人武器。"
  },
  {
    "title": "机器肉鸡第二季",
    "url": "./movie-1161.html",
    "cover": "./111.jpg",
    "year": "2006",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动画 / 定格",
    "tags": [
      "粘土动画",
      "无厘头",
      "恶搞流行文化",
      "重口味"
    ],
    "oneLine": "玩具箱里的战斗鸡继续疯狂解构漫威、星战和芭比娃娃的底裤。"
  },
  {
    "title": "衰鬼宝贝",
    "url": "./movie-1162.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 恐怖, 家庭",
    "tags": [
      "鬼婴",
      "乌龙驱魔",
      "错位母爱",
      "港式笑料"
    ],
    "oneLine": "三次意外流产的年轻夫妇，终于生下一个健康的女儿，只是她半夜会悬浮、会360度扭头、会用腹语说“妈妈，隔壁王叔叔是好人”。"
  },
  {
    "title": "我们曾经是战士",
    "url": "./movie-1163.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争 / 剧情",
    "tags": [
      "越战",
      "老兵",
      "回忆录",
      "反战"
    ],
    "oneLine": "半个世纪后，当年的越战敌我双方老兵重逢，用一场葬礼上的降半旗，埋葬仇恨。"
  },
  {
    "title": "司岗里",
    "url": "./movie-1164.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 奇幻, 民族",
    "tags": [
      "佤族神话",
      "人类起源",
      "洞穴秘境",
      "文化寻根"
    ],
    "oneLine": "佤族大学生从“司岗里”洞穴带出一块神秘石头后，整个村子的人开始遗忘自己的母语。"
  },
  {
    "title": "小孩不笨3",
    "url": "./movie-1165.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "新加坡",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧, 剧情, 家庭",
    "tags": [
      "教育",
      "亲子",
      "搞笑",
      "成长",
      "AI教学"
    ],
    "oneLine": "当名校小学引入AI校长来管理纪律，一群“问题儿童”决定用最笨的办法向机器人证明：犯错也是成长的一部分。"
  },
  {
    "title": "薄暮之间",
    "url": "./movie-1166.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "家庭剧情",
    "tags": [
      "情感",
      "时代变迁",
      "和解"
    ],
    "oneLine": "一个除夕夜，失散多年的弟弟突然归来，让原本就矛盾重重的四兄妹，在24小时内经历了从怨恨到和解的过山车。"
  },
  {
    "title": "果戈里·起点国语",
    "url": "./movie-1167.html",
    "cover": "./117.jpg",
    "year": "2018",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 恐怖 / 奇幻",
    "tags": [
      "作家改编",
      "黑暗哥特",
      "通灵侦探",
      "国语配音"
    ],
    "oneLine": "年轻作家果戈里被流放到荒村，却发现自己笔下的怪物正一个接一个在现实中复活。"
  },
  {
    "title": "血宴2",
    "url": "./movie-1168.html",
    "cover": "./118.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "血腥",
      "密室",
      "邪教",
      "反转",
      "续作升级"
    ],
    "oneLine": "一年前的屠杀游戏幸存者受邀参加庆功宴，却发现宴会厅本身就是一个巨大的绞肉机。"
  },
  {
    "title": "婚姻困境中的米勒",
    "url": "./movie-1169.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": [
      "婚姻",
      "中产阶级",
      "讽刺",
      "黑色幽默"
    ],
    "oneLine": "一本畅销书《婚姻的困境》让心理学教授米勒名利双收，但他自己却深陷离婚泥潭，他书中的每一个理论都在生活中被妻子完美反杀。"
  },
  {
    "title": "大卫·科波菲尔的个人史",
    "url": "./movie-1170.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "传记",
    "tags": [
      "文学改编",
      "打破第四面墙",
      "实验"
    ],
    "oneLine": "大卫·科波菲尔对着镜头吐槽自己的一生，却发现所有人都在演戏。"
  },
  {
    "title": "秋香怒点唐伯虎粤语",
    "url": "./movie-1171.html",
    "cover": "./121.jpg",
    "year": "2010",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "古装, 喜剧, 爱情",
    "tags": [
      "粤语",
      "秋香",
      "女强",
      "翻案",
      "喜剧"
    ],
    "oneLine": "秋香不是小丫鬟，而是江南第一女讼师，唐伯虎被她连告三次，反被点了状元。"
  },
  {
    "title": "心不在焉的服务生",
    "url": "./movie-1172.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧 / 奇幻 / 生活",
    "tags": [
      "治愈系",
      "错位时空",
      "怀旧",
      "温暖",
      "日式幽默"
    ],
    "oneLine": "一家老式喫茶店的服务生总是上错菜，但每位客人却觉得这正是自己此刻最想吃的东西。"
  },
  {
    "title": "东经73度半",
    "url": "./movie-1173.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 冒险",
    "tags": [
      "科考",
      "无人区",
      "超自然",
      "生存",
      "硬核"
    ],
    "oneLine": "一支科考队深入羌塘无人区的“死亡纬度”线，发现每隔73.5公里就会出现一具相同的干尸。"
  },
  {
    "title": "懵懵哒爱情",
    "url": "./movie-1174.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "浪漫, 喜剧",
    "tags": [
      "失忆",
      "契约恋爱",
      "反差萌",
      "治愈",
      "甜宠"
    ],
    "oneLine": "高冷集团总裁车祸后变成只有七岁智商的“萌娃”，只有宿敌女秘书能让他安静下来。"
  },
  {
    "title": "四月的女儿",
    "url": "./movie-1175.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 文艺",
    "tags": [
      "母女关系",
      "青春秘密",
      "小镇叙事",
      "女性成长"
    ],
    "oneLine": "十七岁少女发现自己是四月被遗弃的养女，而亲生母亲就住在同一条街对面。"
  },
  {
    "title": "七擒七纵七色狼 国语",
    "url": "./movie-1176.html",
    "cover": "./126.jpg",
    "year": "1970",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 情色",
    "tags": [
      "风月片",
      "邵氏",
      "粤语老片",
      "搞笑",
      "七擒孟获"
    ],
    "oneLine": "七个好色的男人为了争夺一个神秘女租客，按照“七擒孟获”的典故轮流设计圈套，结果每次都反被女租客收拾。"
  },
  {
    "title": "龙城",
    "url": "./movie-1177.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情、家庭、爱情",
    "tags": [
      "家族变迁",
      "原生家庭",
      "三姐弟",
      "都市情感"
    ],
    "oneLine": "龙城郑家三个堂姐弟，一个渴望逃离，一个拼命守护，一个想要归来。"
  },
  {
    "title": "保龙一族之五音镇魔曲",
    "url": "./movie-1178.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装、奇幻、动作",
    "tags": [
      "皇室护卫",
      "音乐魔法",
      "喜剧",
      "东方奇幻"
    ],
    "oneLine": "保龙一族的废柴预备役们，发现自己只要用五音不全的歌声，就能克制天下所有妖邪。"
  },
  {
    "title": "温柔怪人",
    "url": "./movie-1179.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑, 剧情",
    "tags": [
      "邻居",
      "秘密",
      "温情悬疑",
      "孤独"
    ],
    "oneLine": "独居女白领意外发现隔壁那个每天帮她收快递的温柔老爷爷，竟是二十年前的连环杀手。"
  },
  {
    "title": "坂道之家",
    "url": "./movie-1180.html",
    "cover": "./130.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑, 剧情, 心理",
    "tags": [
      "坂道",
      "家族秘密",
      "记忆",
      "日式美学",
      "慢节奏"
    ],
    "oneLine": "一个家族三代人住在一座建在陡峭坂道顶端的房子里，每天都要爬一百零八级台阶回家。"
  },
  {
    "title": "因为爱情",
    "url": "./movie-1181.html",
    "cover": "./131.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 剧情",
    "tags": [
      "多线叙事",
      "分手",
      "重逢",
      "人性与爱"
    ],
    "oneLine": "三对不同年龄段的情侣，在同一座城市里，上演爱与不爱的选择题。"
  },
  {
    "title": "哈菲兹",
    "url": "./movie-1182.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "伊朗 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 传记",
    "tags": [
      "诗人",
      "宗教",
      "自由",
      "十四世纪"
    ],
    "oneLine": "十四世纪设拉子的禁言诗人，用舌头撬动了蒙古铁骑后的文化铁幕。"
  },
  {
    "title": "最强大脑第十一季",
    "url": "./movie-1183.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 竞技",
    "tags": [
      "脑力",
      "竞赛",
      "AI",
      "人机对战",
      "淘汰赛"
    ],
    "oneLine": "这一季没有人类选手，100位AI挑战人类最强大脑的终极记忆。"
  },
  {
    "title": "没用的谎言",
    "url": "./movie-1184.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情, 奇幻, 悬疑",
    "tags": [
      "读心术",
      "复仇",
      "甜虐",
      "超能力"
    ],
    "oneLine": "能听出一切谎言的女人，遇到了全世界唯一一个从不说谎的男人——但他是一个被指控杀人的逃犯。"
  },
  {
    "title": "暴走妈妈",
    "url": "./movie-1185.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭, 动作",
    "tags": [
      "母爱",
      "复仇",
      "底层挣扎",
      "飙车",
      "社会现实"
    ],
    "oneLine": "得知女儿被富二代凌辱后，那位平日里逆来顺受的保洁员母亲，深夜握紧了重型卡车的方向盘。"
  },
  {
    "title": "浪得过火",
    "url": "./movie-1186.html",
    "cover": "./136.jpg",
    "year": "1996",
    "region": "法国 / 意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "情色, 剧情, 喜剧",
    "tags": [
      "情色艺术片",
      "妓院故事",
      "女性主义",
      "阿诺德-克利斯"
    ],
    "oneLine": "1920年代的巴黎妓院里，一名高学历妓女试图用经济学理论改革妓院，却引发了一场啼笑皆非的性革命。"
  },
  {
    "title": "雀斑男孩",
    "url": "./movie-1187.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 青春",
    "tags": [
      "校园霸凌",
      "自我认同",
      "治愈"
    ],
    "oneLine": "高二男生林晓东因满脸雀斑被叫做“月球表面”，直到转校生苏晚对他的“星空脸”说出了赞美。"
  },
  {
    "title": "我心唱响",
    "url": "./movie-1188.html",
    "cover": "./138.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "音乐, 剧情, 励志",
    "tags": [
      "合唱团",
      "乡村",
      "音乐老师",
      "梦想",
      "治愈"
    ],
    "oneLine": "一个失意的城市音乐家来到乡村，试图把一群五音不全的孩子组成全国顶尖的童声合唱团。"
  },
  {
    "title": "不倒翁的奇幻旅程",
    "url": "./movie-1189.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "奇幻 / 剧情 / 家庭",
    "tags": [
      "不倒翁",
      "轮回",
      "亲情",
      "治愈"
    ],
    "oneLine": "一个不倒翁里住着三个转世的灵魂，他们必须让持有它的孩子笑出来，才能进入下一世。"
  },
  {
    "title": "足球流氓",
    "url": "./movie-1190.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作/剧情/运动",
    "tags": [
      "铁血足球",
      "地下格斗",
      "兄弟情义",
      "东伦敦口音"
    ],
    "oneLine": "一个被牛津开除的文学系懦弱男生，为了追查哥哥死因，混进了伦敦最臭名昭著的足球流氓团伙。"
  },
  {
    "title": "逍遥骑士",
    "url": "./movie-1191.html",
    "cover": "./141.jpg",
    "year": "1969",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "冒险, 剧情, 公路",
    "tags": [
      "反文化",
      "机车",
      "经典",
      "自由与孤独",
      "配乐封神"
    ],
    "oneLine": "两个摩托车手穿越美国寻找自由，却发现自己永远无法逃离真正的美国——那个他们想摆脱的地方。"
  },
  {
    "title": "哇呼！",
    "url": "./movie-1192.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 家庭 / 冒险",
    "tags": [
      "亲子",
      "奇幻",
      "治愈",
      "萌宠"
    ],
    "oneLine": "忙碌的都市白领突然能听懂女儿的宠物狗说话，发现女儿的秘密世界即将崩塌。"
  },
  {
    "title": "独奏",
    "url": "./movie-1193.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "音乐， 剧情",
    "tags": [
      "大提琴",
      "阿尔茨海默",
      "师徒",
      "古典音乐",
      "催泪"
    ],
    "oneLine": "患上阿尔茨海默病的退休大提琴家，只能用仅存的肌肉记忆演奏半首无伴奏组曲。"
  },
  {
    "title": "天蝎行动",
    "url": "./movie-1194.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪, 谍战",
    "tags": [
      "特工",
      "黑吃黑",
      "背叛",
      "复仇"
    ],
    "oneLine": "一名被组织判了死刑的女特工，利用自己的葬礼反向追杀所有出卖她的人。"
  },
  {
    "title": "人面鱼：红衣小女孩外传",
    "url": "./movie-1195.html",
    "cover": "./145.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "恐怖",
    "tags": [
      "民间传说",
      "附身",
      "水域禁忌"
    ],
    "oneLine": "一名沉默的哑女钓到一条诡异人面鱼后，家中开始上演红衣小女孩的恐怖幻象。"
  },
  {
    "title": "御林军魂",
    "url": "./movie-1196.html",
    "cover": "./146.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装/动作",
    "tags": [
      "宫廷",
      "禁军",
      "权谋"
    ],
    "oneLine": "三个性格迥异的禁军小卒，意外卷入夺嫡之争，必须在皇权与兄弟情之间选择忠诚。"
  },
  {
    "title": "最危险游戏第一季",
    "url": "./movie-1197.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作 / 惊悚 / 悬疑",
    "tags": [
      "真人猎杀游戏",
      "生存",
      "高智商",
      "烧钱"
    ],
    "oneLine": "负债累累的退役特种兵签下一份合约：只要在猎杀中存活24小时，就能得到2500万美元。"
  },
  {
    "title": "寂静之声",
    "url": "./movie-1198.html",
    "cover": "./148.jpg",
    "year": "2018",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑，剧情，心理",
    "tags": [
      "聋哑人视角",
      "小镇谋杀",
      "感官叙事",
      "小众佳作",
      "阿莫多瓦式"
    ],
    "oneLine": "一个失聪的图书管理员，通过唇语读出了镇上最受尊敬的医生的谋杀计划。"
  },
  {
    "title": "我们是最棒的",
    "url": "./movie-1199.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "瑞典",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 音乐, 家庭",
    "tags": [
      "女子乐队",
      "朋克",
      "成长",
      "青春"
    ],
    "oneLine": "三个13岁的叛逆女孩组建了一支只有一首歌的女子朋克乐队，而这首歌是骂教导主任的，却意外红遍全国。"
  },
  {
    "title": "风流天子",
    "url": "./movie-1200.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 喜剧 / 爱情",
    "tags": [
      "皇帝",
      "民间生活",
      "反套路",
      "男扮女装"
    ],
    "oneLine": "少年皇帝厌倦了朝堂，偷偷溜出宫当了个客栈跑堂，却爱上了前来刺杀自己的民间反贼。"
  },
  {
    "title": "漫城",
    "url": "./movie-1201.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻 / 动画 / 青春",
    "tags": [
      "新海诚风",
      "虚拟现实",
      "自闭症",
      "都市传说"
    ],
    "oneLine": "东京一名自闭高中生发现自己每晚做梦都会进入同一座虚拟城市，而那座城市正在吞噬现实。"
  },
  {
    "title": "干支魂",
    "url": "./movie-1202.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "日本",
    "type": "番剧",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻, 战斗, 萌系",
    "tags": [
      "十二生肖",
      "拟人",
      "猫娘",
      "神位之争",
      "日常"
    ],
    "oneLine": "为了争夺十二生肖空出的“猫”之位，80只萌兽娘在秋叶原展开了激烈的日常战斗。"
  },
  {
    "title": "准时死亡",
    "url": "./movie-1203.html",
    "cover": "./3.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": [
      "时间循环",
      "死亡预知",
      "钟表",
      "宿命"
    ],
    "oneLine": "男主角每天都能收到一张印着“死亡时间”的钟表店卡片，而每次的时间都比前一天提前两秒。"
  },
  {
    "title": "卧底甜心",
    "url": "./movie-1204.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 爱情",
    "tags": [
      "警匪",
      "甜品店",
      "双面人生",
      "反套路"
    ],
    "oneLine": "王牌女卧底伪装成甜品店老板娘接近毒枭，但毒枭其实早就知道她是警察——因为他是她的前任。"
  },
  {
    "title": "管道2020",
    "url": "./movie-1205.html",
    "cover": "./5.jpg",
    "year": "2020",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑, 犯罪, 科幻",
    "tags": [
      "柏林",
      "地下",
      "管道",
      "秘密",
      "科技惊悚"
    ],
    "oneLine": "柏林地下供热管道的维修工发现，管道的实际路线和任何一张官方地图都不匹配。"
  },
  {
    "title": "蝙蝠侠：迷雾奇日",
    "url": "./movie-1206.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 科幻",
    "tags": [
      "平行宇宙",
      "黑色电影",
      "老年蝙蝠侠"
    ],
    "oneLine": "在一个永远被浓雾笼罩的哥谭市，50岁的布鲁斯·韦恩发现小丑死后，哥谭的犯罪率反而上升了十倍。"
  },
  {
    "title": "狗蛋大兵",
    "url": "./movie-1207.html",
    "cover": "./7.jpg",
    "year": "1997",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "喜剧, 战争",
    "tags": [
      "喜剧",
      "军队",
      "怀旧",
      "乡土"
    ],
    "oneLine": "一个傻乎乎的新兵“狗蛋”把部队搅得天翻地覆，却阴差阳错成了演习英雄。"
  },
  {
    "title": "同乐演剧社",
    "url": "./movie-1208.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情、喜剧",
    "tags": [
      "话剧",
      "社团",
      "青春",
      "梦想"
    ],
    "oneLine": "一个由都市白领、快递小哥、退休大妈组成的业余话剧社，为了参加全国大赛，开始了鸡飞狗跳的排练。"
  },
  {
    "title": "无用之事",
    "url": "./movie-1209.html",
    "cover": "./9.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情， 生活",
    "tags": [
      "慢节奏",
      "哲学",
      "职业剧",
      "治愈"
    ],
    "oneLine": "一家专门替人“处理失败梦想”的事务所，记录那些被社会定义为无用之人的尊严。"
  },
  {
    "title": "非正式会谈第6.5季",
    "url": "./movie-1210.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "中国",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "脱口秀, 文化, 辩论",
    "tags": [
      "全球文化",
      "犀利吐槽",
      "半季回归"
    ],
    "oneLine": "主节目停更半年后，十位代表偷偷租了个仓库录制“地下版”会谈，话题更野了。"
  },
  {
    "title": "怪胎、先知和女巫的新圣餐",
    "url": "./movie-1211.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖, 超自然",
    "tags": [
      "邪教",
      "血腥",
      "实验电影",
      "宗教惊悚"
    ],
    "oneLine": "为了获得“神的庇护”，小镇居民决定每个月献祭一个“怪胎”，直到镇上的先知在井里看到了女巫。"
  },
  {
    "title": "夕照街",
    "url": "./movie-1212.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "老街拆迁",
      "邻里",
      "代际冲突",
      "香港味道",
      "群像"
    ],
    "oneLine": "香港最后一条老骑楼街被下达拆迁令，街坊们用三个月时间，赌上一切留住记忆。"
  },
  {
    "title": "真相之终极之旅",
    "url": "./movie-1213.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑, 冒险",
    "tags": [
      "寻宝",
      "推理",
      "反转",
      "遗产"
    ],
    "oneLine": "已故富豪在遗嘱中埋下惊天秘密，五位各怀鬼胎的继承人在一艘无人游轮上开启了生死竞速。"
  },
  {
    "title": "多难人生",
    "url": "./movie-1214.html",
    "cover": "./14.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情，传记，励志",
    "tags": [
      "残疾作家",
      "童年创伤",
      "自我救赎",
      "文学力量"
    ],
    "oneLine": "天生脑瘫、被父亲抛弃的男孩，用唯一能活动的左脚拇指写下了自己的生命。"
  },
  {
    "title": "净化之时",
    "url": "./movie-1215.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "恐怖/邪典",
    "tags": [
      "直播驱魔",
      "网红神父",
      "恶魔附身",
      "伪纪录片",
      "流量"
    ],
    "oneLine": "网红神父直播驱魔冲流量，没想到真恶魔上了身，并在镜头前揭露了他所有的罪。"
  },
  {
    "title": "我们的乐园",
    "url": "./movie-1216.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "悬疑、剧情、社会",
    "tags": [
      "社区安全",
      "集体犯罪",
      "人性黑暗",
      "乌托邦"
    ],
    "oneLine": "模范社区“乐园”频发儿童失踪案，警方调查发现，所有邻居都在帮凶手隐瞒。"
  },
  {
    "title": "披头四大全",
    "url": "./movie-1217.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录片, 音乐, 传记",
    "tags": [
      "披头士",
      "乐队纪录片",
      "珍贵影像",
      "音乐史"
    ],
    "oneLine": "从未曝光的后台影像+AI修复技术，完整还原披头士从汉堡到屋顶演唱会的十年。"
  },
  {
    "title": "攀岩！",
    "url": "./movie-1218.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "奥地利",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "other",
    "genre": "运动 / 纪录片式剧情",
    "tags": [
      "极限运动",
      "母女关系",
      "阿尔卑斯山",
      "真实事件改编"
    ],
    "oneLine": "一个失去双腿的前攀岩冠军，要让她的叛逆女儿成为第一个徒手攀登“北壁之影”的女性。"
  },
  {
    "title": "我们做朋友吧",
    "url": "./movie-1219.html",
    "cover": "./19.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 儿童",
    "tags": [
      "校园",
      "边缘人",
      "友谊"
    ],
    "oneLine": "口吃的转校生为了不被欺负，花钱雇佣学校里最高冷的学霸假装是自己的朋友，却慢慢假戏真做。"
  },
  {
    "title": "黑暗时代",
    "url": "./movie-1220.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 惊悚",
    "tags": [
      "末世",
      "电磁脉冲",
      "生存",
      "人性",
      "硬科幻"
    ],
    "oneLine": "一场全球电磁脉冲摧毁了所有电子设备，幸存的人类不仅要在原始社会求生，还要面对“退化症”的变异。"
  },
  {
    "title": "战争幽灵",
    "url": "./movie-1221.html",
    "cover": "./21.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 战争",
    "tags": [
      "二战",
      "闹鬼",
      "时间循环"
    ],
    "oneLine": "二战尾声，一支美军小队驻守一座古堡，却发现他们正在经历的恐怖事件，竟然源自一场尚未发生的现代战争。"
  },
  {
    "title": "戈戈舞的故事",
    "url": "./movie-1222.html",
    "cover": "./22.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 歌舞 / 女性",
    "tags": [
      "舞者",
      "夜总会",
      "生存",
      "女性友谊",
      "独立电影"
    ],
    "oneLine": "1980年代洛杉矶，一家戈戈舞俱乐部的倒闭前夜，五个不同肤色的舞者决定用最后一场演出对抗地产商。"
  },
  {
    "title": "晚宴",
    "url": "./movie-1223.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪, 悬疑",
    "tags": [
      "豪宅",
      "全员恶人",
      "复仇"
    ],
    "oneLine": "一场豪门寿宴，七位宾客各怀鬼胎，厨师端上的不是菜，是二十年前的命案证据。"
  },
  {
    "title": "宝石迷踪",
    "url": "./movie-1224.html",
    "cover": "./24.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "盗窃",
      "密室",
      "反转"
    ],
    "oneLine": "一颗价值连城的古埃及宝石在展览途中消失，所有接触过它的人都有完美不在场证明。"
  },
  {
    "title": "古立特宇宙",
    "url": "./movie-1225.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集 / 动画",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动作， 科幻， 青春",
    "tags": [
      "机甲",
      "特摄",
      "电光超人",
      "平行宇宙"
    ],
    "oneLine": "当所有的古立特平行宇宙发生碰撞，历代支援兵器们必须联手对抗“宇宙蛀洞”。"
  },
  {
    "title": "漂流欲室",
    "url": "./movie-1226.html",
    "cover": "./26.jpg",
    "year": "2000",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "情色 / 惊悚 / 文艺",
    "tags": [
      "金基德风格",
      "欲望符号",
      "水上监狱",
      "沉默暴力"
    ],
    "oneLine": "她是湖上民宿的哑巴女主人，用一艘小船和无数鱼钩，困住每一个过夜的男人。"
  },
  {
    "title": "六人帮",
    "url": "./movie-1227.html",
    "cover": "./27.jpg",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "犯罪/剧情",
    "tags": [
      "校园霸凌",
      "帮派",
      "兄弟情",
      "救赎"
    ],
    "oneLine": "六个被学校开除的少年结拜成“六人帮”，十年后重聚，发现其中一人成了警察，专门追捕另外五人。"
  },
  {
    "title": "初夜奇谭",
    "url": "./movie-1228.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "穿越",
      "交换身体",
      "校园",
      "社死"
    ],
    "oneLine": "高中男生在表白失败的当晚，意外穿越到了暗恋女生的身体里，被迫替她参加相亲。"
  },
  {
    "title": "八道楼子",
    "url": "./movie-1229.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 战争, 武侠",
    "tags": [
      "抗日武侠",
      "七武士模式",
      "孤楼守卫",
      "冷兵器对热兵器",
      "悲情英雄"
    ],
    "oneLine": "1937年，上海苏州河畔一栋八道入口的旧楼里，七名国军残兵与一群江湖义士，挡住了日军一个联队。"
  },
  {
    "title": "渔童",
    "url": "./movie-1230.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "奇幻、动画、家庭",
    "tags": [
      "中国传说",
      "环保主题",
      "守护海洋",
      "水墨画风"
    ],
    "oneLine": "东海边的渔村少年，救了一个会唱歌的“鱼孩”，却发现她背负着治愈整个被污染海洋的使命。"
  },
  {
    "title": "细胞分裂：死亡监视第一季",
    "url": "./movie-1231.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "潜入",
      "谍战",
      "基因编辑",
      "反乌托邦",
      "近未来"
    ],
    "oneLine": "2048年，特工山姆·费舍植入“隐身细胞”，却发现组织正在猎杀所有拥有该基因的人。"
  },
  {
    "title": "血腥十字架",
    "url": "./movie-1232.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖, 惊悚",
    "tags": [
      "宗教",
      "邪教",
      "血腥",
      "反转"
    ],
    "oneLine": "一座与世隔绝的修道院里，修女们每晚都会梦见自己被钉上十字架，而第二天，她们的梦境会变成现实。"
  },
  {
    "title": "金彩应召站",
    "url": "./movie-1233.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情 / 黑色喜剧",
    "tags": [
      "性工作",
      "老年",
      "姐妹情",
      "社会边缘"
    ],
    "oneLine": "三个六十多岁的阿嬷，为了还债和治病，偷偷开了一家专接老年男性的应召站。"
  },
  {
    "title": "小迷糊回娘家",
    "url": "./movie-1234.html",
    "cover": "./34.jpg",
    "year": "1984",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "喜剧 / 家庭",
    "tags": [
      "乡土",
      "闹剧",
      "婆媳",
      "台语片"
    ],
    "oneLine": "笨手笨脚的媳妇每次回娘家都状况百出，这次竟然把整个村子都搅得鸡飞狗跳。"
  },
  {
    "title": "单身啪啪啪",
    "url": "./movie-1235.html",
    "cover": "./35.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情、喜剧、剧情",
    "tags": [
      "都市情感",
      "单身生活",
      "女性成长",
      "幽默",
      "现实"
    ],
    "oneLine": "三位闺蜜立下“单身契约”，却在放纵与真爱之间反复摇摆，笑泪交织。"
  },
  {
    "title": "最后的冒险",
    "url": "./movie-1236.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "冒险 / 剧情 / 家庭",
    "tags": [
      "祖父",
      "孙女",
      "寻宝",
      "绝症",
      "和解"
    ],
    "oneLine": "患绝症的祖父谎称藏有宝藏，骗退休探险家孙女陪他走完最后一次寻宝路，其实宝藏就是“沿途的回忆”。"
  },
  {
    "title": "陀枪师姐2021国语",
    "url": "./movie-1237.html",
    "cover": "./37.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "动作, 警匪, 职场",
    "tags": [
      "女警",
      "枪战",
      "师徒",
      "港剧复兴"
    ],
    "oneLine": "曾经的陀枪师姐退居文职多年，为了找回失散的女儿，她必须重新拿起枪对抗整个黑帮。"
  },
  {
    "title": "明天你是否依然爱我",
    "url": "./movie-1238.html",
    "cover": "./38.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 剧情",
    "tags": [
      "极光",
      "一夜定情",
      "失忆",
      "北欧风光"
    ],
    "oneLine": "暗恋同事的女孩在芬兰圣诞老人村与他共度一夜，第二天对方因雪地摩托事故失忆，只记得自己的名字。"
  },
  {
    "title": "斗罗大陆2：绝世唐门",
    "url": "./movie-1239.html",
    "cover": "./39.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动漫",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "奇幻, 热血",
    "tags": [
      "武魂",
      "魂师",
      "学院",
      "唐三后代"
    ],
    "oneLine": "万年后的斗罗大陆，少年霍雨浩身怀亡灵系武魂，进入史莱克学院，誓要改写人魂两界的宿命。"
  },
  {
    "title": "大唐重案组",
    "url": "./movie-1240.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装、悬疑、侦探",
    "tags": [
      "唐风推理",
      "三人探案组",
      "朝堂阴谋",
      "化学验尸",
      "单元+主线"
    ],
    "oneLine": "大理寺、千牛卫与江湖女仵作组队，专破长安城里不可能发生的诡案。"
  },
  {
    "title": "笑咖图鉴",
    "url": "./movie-1241.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 短剧",
    "tags": [
      "单元剧",
      "脱口秀",
      "社会讽刺"
    ],
    "oneLine": "一家濒临倒闭的脱口秀俱乐部，收留了五个“废柴”演员，他们用最冷的笑话治愈最深的伤。"
  },
  {
    "title": "鬼护士",
    "url": "./movie-1242.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "恐怖",
    "tags": [
      "医院灵异",
      "因果报应",
      "夜间值班"
    ],
    "oneLine": "新来的夜班护士发现，医院ICU里那些“自然死亡”的病人，都在死前被一个穿护士服的影子查过房。"
  },
  {
    "title": "冰球坏小子2",
    "url": "./movie-1243.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 运动",
    "tags": [
      "冰球",
      "草根逆袭",
      "爆笑",
      "兄弟情"
    ],
    "oneLine": "上一部中的草根冰球队被抬进顶级职业联赛，面对全副武装的职业精英，他们决定用毫无章法的野路子再次搅翻赛场。"
  },
  {
    "title": "克莱尔的秘密",
    "url": "./movie-1244.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 剧情",
    "tags": [
      "身份互换",
      "犯罪心理学",
      "法国乡村",
      "双重人生",
      "女性觉醒"
    ],
    "oneLine": "为了逃离家暴的丈夫，女教师克莱尔伪造了自己的死亡，却在三年后偶遇了一个与她长得一模一样的女人，而那个女人正在用她的身份生活。"
  },
  {
    "title": "革命小子",
    "url": "./movie-1245.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "墨西哥",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "历史 / 剧情 / 青春",
    "tags": [
      "墨西哥革命",
      "少年",
      "游击队"
    ],
    "oneLine": "1910年墨西哥革命中，一个14岁的少年因为一碗玉米粥加入了游击队，却在两年后亲手解散了这支队伍。"
  },
  {
    "title": "玩命交易",
    "url": "./movie-1246.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，惊悚，犯罪",
    "tags": [
      "器官交易",
      "绝命飙车",
      "父爱如山"
    ],
    "oneLine": "为了给女儿换心脏，一个鳏夫卡车司机要在六个小时内横穿黑帮控制的沙漠，运送一颗活体心脏。"
  },
  {
    "title": "敬！咆哮二十",
    "url": "./movie-1247.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，音乐",
    "tags": [
      "摇滚",
      "青春",
      "中年危机",
      "梦想",
      "怀旧"
    ],
    "oneLine": "毕业20周年同学会上，五个40岁的中年人重拾当年乐队梦，决定用一场摇滚演唱会对抗油腻生活。"
  },
  {
    "title": "利普曼",
    "url": "./movie-1248.html",
    "cover": "./48.jpg",
    "year": "2019",
    "region": "德国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 传记",
    "tags": [
      "二战",
      "纳粹",
      "金融",
      "真事改编",
      "灰色地带"
    ],
    "oneLine": "真实的“辛德勒”故事：一位纳粹银行家的儿子，利用金融系统漏洞，在集中营里为囚犯兑换“虚假英镑”，挽救了上千条生命。"
  },
  {
    "title": "米勒的十字路口",
    "url": "./movie-1249.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情，犯罪，悬疑",
    "tags": [
      "黑帮",
      "伦理",
      "救赎"
    ],
    "oneLine": "黑帮老大的智囊在情妇与兄弟之间周旋，意外引发了一场波及全城的清洗。"
  },
  {
    "title": "欢乐群英粤语",
    "url": "./movie-1250.html",
    "cover": "./50.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧、古装、武侠",
    "tags": [
      "无厘头",
      "粤语",
      "英雄大会",
      "搞笑"
    ],
    "oneLine": "一群不靠谱的江湖菜鸟举办“假英雄大会”，谁知武林高手竟真的纷纷上门踢馆。"
  },
  {
    "title": "小男人出差粤语",
    "url": "./movie-1251.html",
    "cover": "./51.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑、喜剧",
    "tags": [
      "私家侦探",
      "单元剧",
      "港味"
    ],
    "oneLine": "身高仅四尺半的私家侦探，靠着过人的胆识和智慧屡破奇案。"
  },
  {
    "title": "长大尾巴的兔子",
    "url": "./movie-1252.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻 / 家庭",
    "tags": [
      "治愈",
      "童话",
      "成长",
      "软科幻",
      "轻喜剧"
    ],
    "oneLine": "小女孩突然长出兔子尾巴，只有帮助别人才能让尾巴缩短一厘米。"
  },
  {
    "title": "巧克力与香子兰",
    "url": "./movie-1253.html",
    "cover": "./53.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画OVA",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻、萌系、恋爱",
    "tags": [
      "猫娘",
      "兽耳",
      "治愈",
      "美食"
    ],
    "oneLine": "当香子兰遇到巧克力，最甜美的猫娘恋爱物语悄然绽放。"
  },
  {
    "title": "边境法规",
    "url": "./movie-1254.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "犯罪，悬疑，刑侦",
    "tags": [
      "边境缉毒",
      "卧底",
      "兄弟情",
      "写实"
    ],
    "oneLine": "缉毒警在边境线上抓到亲弟弟运毒，弟弟说“我只运这一次”，哥哥说“边境上没有第二次”。"
  },
  {
    "title": "叛逆女巫",
    "url": "./movie-1255.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻",
    "tags": [
      "女巫",
      "魔法学校",
      "反叛",
      "百合",
      "大女主"
    ],
    "oneLine": "在规训女巫必须服从男巫的魔法学院，她烧掉了规则书，召唤了旧神。"
  },
  {
    "title": "江湖翘",
    "url": "./movie-1256.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪，动作，剧情",
    "tags": [
      "卧底",
      "兄弟情",
      "黑帮",
      "反转",
      "宿命"
    ],
    "oneLine": "潜伏十年的卧底警探，在最后一次任务中被逼亲手杀死自己最好的兄弟。"
  },
  {
    "title": "猛鬼街6国语",
    "url": "./movie-1257.html",
    "cover": "./57.jpg",
    "year": "2029",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "佛莱迪",
      "梦境入侵",
      "最终章"
    ],
    "oneLine": "猛鬼街系列最终章，佛莱迪侵入VR游戏世界，全球百万玩家在睡梦中同时死亡。"
  },
  {
    "title": "富贵千团粤语",
    "url": "./movie-1258.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 商战 / 家族",
    "tags": [
      "港式豪门",
      "千亿争产",
      "真假千金",
      "粤语原声"
    ],
    "oneLine": "豪门老爷子临终留下千团毛线，声称谁能解开毛线的织法，谁就是千亿遗产的继承人。"
  },
  {
    "title": "鬼怨偶",
    "url": "./movie-1259.html",
    "cover": "./59.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "恐怖",
    "tags": [
      "民俗",
      "灵媒",
      "木偶"
    ],
    "oneLine": "她嫁给了纸人，纸人却活了过来，而新郎早已死在洞房夜。"
  },
  {
    "title": "叫费德里柯多么奇怪",
    "url": "./movie-1260.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧， 剧情， 传记",
    "tags": [
      "费里尼",
      "粉丝电影",
      "荒诞",
      "迷影",
      "小镇"
    ],
    "oneLine": "小镇邮差每天给大导演费里尼写信，直到有一天费里尼真的坐着直升机降落在广场。"
  },
  {
    "title": "007之黄金眼",
    "url": "./movie-1261.html",
    "cover": "./61.jpg",
    "year": "2028",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作, 惊悚",
    "tags": [
      "重启",
      "黄金储备",
      "经济战",
      "新邦德"
    ],
    "oneLine": "新版007的任务不是杀人，而是阻止有人用区块链摧毁全球黄金储备。"
  },
  {
    "title": "完美求婚",
    "url": "./movie-1262.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情，惊悚",
    "tags": [
      "病娇",
      "逆求婚",
      "密室"
    ],
    "oneLine": "一场精心策划的海边求婚，未婚夫却当众说“不”。第二天，她被锁进了他为她建造的“完美婚房”地窖。"
  },
  {
    "title": "冬眠者",
    "url": "./movie-1263.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "科幻 / 悬疑 / 爱情",
    "tags": [
      "冷冻",
      "唤醒",
      "世界末日",
      "代际",
      "记忆"
    ],
    "oneLine": "男子从冷冻舱醒来已是三百年后，发现全世界只剩他一人，而唤醒他的竟是全息AI前女友。"
  },
  {
    "title": "纽约之王",
    "url": "./movie-1264.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪 / 剧情",
    "tags": [
      "黑帮",
      "权力游戏",
      "父子",
      "移民",
      "史诗"
    ],
    "oneLine": "1990年代纽约皇后区，一个爱尔兰移民家庭的三个儿子，为了争夺父亲留下的地下王国，展开了一场血雨腥风的权力厮杀。"
  },
  {
    "title": "无畏世代",
    "url": "./movie-1265.html",
    "cover": "./65.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "末日废土",
      "基因突变",
      "少年英雄",
      "团队成长"
    ],
    "oneLine": "核战后的废土世界，一群拥有超能力的少年为寻找最后的净土，踏上危机四伏的旅途。"
  },
  {
    "title": "在黑暗中的承诺",
    "url": "./movie-1266.html",
    "cover": "./66.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情、惊悚",
    "tags": [
      "战争",
      "地堡",
      "背叛",
      "绝境",
      "人性"
    ],
    "oneLine": "1944年地堡里，六个士兵被困后才发现，里面藏着一个更大的秘密。"
  },
  {
    "title": "2018演技派",
    "url": "./movie-1267.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 悬疑",
    "tags": [
      "娱乐圈",
      "选秀",
      "校园暴力",
      "复仇"
    ],
    "oneLine": "一档表演类综艺的录制现场发生意外，多年前一桩校园暴力案的真相被层层揭开。"
  },
  {
    "title": "游戏王：次元的黑暗面",
    "url": "./movie-1268.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画/奇幻/冒险",
    "tags": [
      "卡牌对决",
      "次元穿越",
      "宿命之战",
      "情怀续作"
    ],
    "oneLine": "暗游戏离开后的第二年，一个新的威胁企图通过改写次元法则，让决斗者永远困在黑暗游戏中。"
  },
  {
    "title": "难测男人心",
    "url": "./movie-1269.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情、伦理",
    "tags": [
      "女性群像",
      "婚姻关系",
      "高智商博弈",
      "反转"
    ],
    "oneLine": "三个闺蜜同时怀疑自己的丈夫出轨，她们组成“抓奸联盟”，却发现三个男人深夜聚在一起密谋杀人的监控录像。"
  },
  {
    "title": "哀叹",
    "url": "./movie-1270.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖 / 心理 / 民俗",
    "tags": [
      "诅咒录像带",
      "村落怪谈",
      "悲剧循环"
    ],
    "oneLine": "小镇上每一声叹息都会引来“哀叹鬼”，它会让你用最痛苦的方式后悔活着。"
  },
  {
    "title": "华氏9/11",
    "url": "./movie-1271.html",
    "cover": "./71.jpg",
    "year": "2004",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片, 政治",
    "tags": [
      "9",
      "11",
      "反战",
      "布什",
      "伊拉克战争",
      "纪实"
    ],
    "oneLine": "纪录片大师迈克尔·摩尔用犀利的剪辑和质问，揭开9/11事件后美国政府的权力运作与战争真相。"
  },
  {
    "title": "占领广场",
    "url": "./movie-1272.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 政治",
    "tags": [
      "社会运动",
      "群像戏",
      "黄背心"
    ],
    "oneLine": "七个不同阶层的人占领了巴黎市政厅广场，他们唯一的共同点是——都觉得自己是“沉默的大多数”。"
  },
  {
    "title": "苦里姻缘",
    "url": "./movie-1273.html",
    "cover": "./73.jpg",
    "year": "1978",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情",
    "tags": [
      "农村",
      "包办婚姻",
      "苦难",
      "真情"
    ],
    "oneLine": "两个被各自家庭嫌弃的苦命人，在动荡年月里用一碗苦茶结下了生死相依的姻缘。"
  },
  {
    "title": "我亲爱的失败者之怪物浪漫",
    "url": "./movie-1274.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻 / 爱情",
    "tags": [
      "怪兽",
      "纯爱",
      "治愈"
    ],
    "oneLine": "东京失意男意外获得了变身怪兽的能力，却因此邂逅了同为“失败者”的她。"
  },
  {
    "title": "看孩人的诱惑",
    "url": "./movie-1275.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚 / 情色 / 心理",
    "tags": [
      "保姆",
      "中产家庭",
      "危险关系",
      "反转",
      "莉莉·詹姆斯式"
    ],
    "oneLine": "一对上流社会夫妇请了一个完美保姆，但这保姆有个癖好——她会“寄生”进雇佣她的每一个家庭，直到家庭解体。"
  },
  {
    "title": "其实在天堂",
    "url": "./movie-1276.html",
    "cover": "./76.jpg",
    "year": "2004",
    "region": "瑞典",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 音乐",
    "tags": [
      "治愈",
      "合唱团",
      "救赎",
      "小镇",
      "人性"
    ],
    "oneLine": "一位世界著名指挥家因心脏病隐退到故乡小镇，却意外接手了一个糟糕的教堂合唱团。"
  },
  {
    "title": "摩登马太辛家庭",
    "url": "./movie-1277.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧, 家庭",
    "tags": [
      "重组家庭",
      "幽默",
      "温馨",
      "多元"
    ],
    "oneLine": "一个由明星、外卖员、网红和退役拳击手组成的奇怪家庭，每集解决一个成员的离谱麻烦。"
  },
  {
    "title": "花煞",
    "url": "./movie-1278.html",
    "cover": "./78.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 惊悚 / 情色",
    "tags": [
      "杀手",
      "文艺",
      "黑色电影",
      "复仇"
    ],
    "oneLine": "一个酷爱插花的优雅女杀手，每次杀人后都会在现场留下一束指向真相的诡异花束。"
  },
  {
    "title": "不可思议的杰西卡·詹姆斯",
    "url": "./movie-1279.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧/爱情",
    "tags": [
      "女汉子",
      "失恋",
      "独立女性",
      "纽约",
      "治愈"
    ],
    "oneLine": "被甩后丢了工作的纽约文艺女青年，为了抢回前男友的猫，闹出了整个曼哈顿的笑话。"
  },
  {
    "title": "父子情",
    "url": "./movie-1280.html",
    "cover": "./80.jpg",
    "year": "1981",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "父子",
      "年代",
      "催泪"
    ],
    "oneLine": "望子成龙的父亲为了让儿子考上大学不惜倾家荡产，儿子却一直想辍学去当京剧演员，直到多年后他才明白父亲的苦心。"
  },
  {
    "title": "黑心母女",
    "url": "./movie-1281.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": [
      "诈骗搭档",
      "母亲节特供",
      "亲情救赎",
      "黑色幽默"
    ],
    "oneLine": "专业碰瓷母女二人组，在一次“上班”路上，捡到了一个真正需要帮助的孩子。"
  },
  {
    "title": "尖叫旅社2",
    "url": "./movie-1282.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画、喜剧、奇幻",
    "tags": [
      "怪物大家庭",
      "爆笑日常",
      "跨物种友情",
      "二创恶搞"
    ],
    "oneLine": "德古拉把尖叫旅社开成了连锁店，这次他带着怪物家人们入驻人类主题乐园，结果游客以为他们在表演，追着要签名。"
  },
  {
    "title": "喂，太宰",
    "url": "./movie-1283.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 传记 / 文艺",
    "tags": [
      "太宰治",
      "作家",
      "穿越",
      "文学",
      "自我救赎"
    ],
    "oneLine": "一个只想自杀的现代废柴青年，意外穿越到昭和时代，遇到了同样想自杀的文豪太宰治，两人开始了荒诞的“求死之旅”。"
  },
  {
    "title": "挑战好声音",
    "url": "./movie-1284.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "音乐, 真人秀, 竞技",
    "tags": [
      "素人逆袭",
      "AI评判",
      "导师互怼",
      "全开麦",
      "情感故事"
    ],
    "oneLine": "素人歌手挑战AI评审算法，在流量与真声之间，谁能唱出机器的盲区？"
  },
  {
    "title": "兵出潼关",
    "url": "./movie-1285.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史，战争",
    "tags": [
      "抗战",
      "陕西",
      "冷兵器"
    ],
    "oneLine": "1944年，最后一支陕西冷娃组成的冷兵器连队，在潼关用大刀对抗日军机械化师团的疯狂冲锋。"
  },
  {
    "title": "黎明的沙耶",
    "url": "./movie-1286.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻 / 家庭 / 治愈",
    "tags": [
      "人鱼",
      "海边小镇",
      "永生",
      "母女情",
      "时间跨度大"
    ],
    "oneLine": "每当天亮之前，那个女孩就会出现在海边，她已经活了五百年，却始终在等待一个永远不会长大的女儿。"
  },
  {
    "title": "配乐大师：约翰·威廉姆斯",
    "url": "./movie-1287.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片 / 音乐 / 传记",
    "tags": [
      "约翰·威廉姆斯",
      "电影配乐",
      "幕后",
      "星战",
      "斯皮尔伯格"
    ],
    "oneLine": "91岁的约翰·威廉姆斯最后一次指挥柏林爱乐，镜头记录下他为《星球大战》《辛德勒名单》创作旋律的隐秘心流。"
  },
  {
    "title": "糟糕咨询",
    "url": "./movie-1288.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 喜剧",
    "tags": [
      "心理师",
      "黑色幽默",
      "行业乱象",
      "反转打脸"
    ],
    "oneLine": "一个刚被辞退的“野鸡心理咨询师”，把每位客户的秘密都写进了网络小说。"
  },
  {
    "title": "重启之蛇骨佛蜕",
    "url": "./movie-1289.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险 / 悬疑",
    "tags": [
      "盗墓",
      "东南亚",
      "密宗",
      "蛇神",
      "重启"
    ],
    "oneLine": "黑瞎子接到神秘佛头信物前往金三角，发现师父留下的笔记里记载着一段关于“蛇骨蜕皮成佛”的禁忌仪式。"
  },
  {
    "title": "外人们",
    "url": "./movie-1290.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": [
      "外星难民",
      "移民隐喻",
      "社恐",
      "治愈",
      "黑色幽默"
    ],
    "oneLine": "五个伪装成人类的星际难民在英国小镇申请庇护，但他们的超能力全是社恐专属的“废物技能”。"
  },
  {
    "title": "花鼠明星俱乐部2",
    "url": "./movie-1291.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧, 动画, 家庭",
    "tags": [
      "音乐",
      "动物",
      "冒险",
      "搞笑"
    ],
    "oneLine": "过气花鼠乐队为拯救社区活动中心，不得不与死对头猫咪说唱团展开一场荒唐的音乐对决。"
  },
  {
    "title": "东宫毒",
    "url": "./movie-1292.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 悬疑 / 权谋",
    "tags": [
      "宫斗",
      "投毒",
      "太子",
      "验尸",
      "反转"
    ],
    "oneLine": "太子接连暴毙，女验尸官发现毒源不在饭菜，而在龙床上。"
  },
  {
    "title": "女人街一族的阴谋",
    "url": "./movie-1293.html",
    "cover": "./93.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 悬疑 / 商战",
    "tags": [
      "女人街",
      "夜市",
      "家族恩怨",
      "卧底",
      "时装"
    ],
    "oneLine": "旺角女人街的深夜，五个摆摊的女人轮流失踪，而最后一个失踪者，留下了一盘录像带。"
  },
  {
    "title": "爆炸新闻",
    "url": "./movie-1294.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 惊悚",
    "tags": [
      "媒体",
      "直播事故",
      "恐怖袭击"
    ],
    "oneLine": "晚间新闻直播期间，女主播在提词器上读到“演播室内有炸弹，请按照我接下来的话念，否则爆炸”。"
  },
  {
    "title": "女教皇",
    "url": "./movie-1295.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "英国 / 德国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史，剧情，悬疑",
    "tags": [
      "中世纪",
      "性别伪装",
      "梵蒂冈",
      "权力游戏",
      "女权"
    ],
    "oneLine": "历史记载中那位神秘的女教皇，并非为了权力而伪装，而是为了追查杀害她学者父亲的真正凶手。"
  },
  {
    "title": "泰版放羊的星星国语",
    "url": "./movie-1296.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情 / 剧情 / 家庭",
    "tags": [
      "翻拍",
      "泰式狗血",
      "替身情人",
      "珠宝设计",
      "误解"
    ],
    "oneLine": "替男友顶罪出狱的女欺诈师，阴差阳错成了豪门公子的“契约未婚妻”。"
  },
  {
    "title": "历史永远铭记",
    "url": "./movie-1297.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国大陆 / 俄罗斯",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史、战争、年代",
    "tags": [
      "二战",
      "中俄合拍",
      "飞行员援华"
    ],
    "oneLine": "1938年，苏联援华飞行队中一位掉队飞行员，被一个中国村庄藏在地窖里整整九个月。"
  },
  {
    "title": "火地狱",
    "url": "./movie-1298.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": [
      "消防员",
      "连环纵火",
      "密室逃生",
      "反转",
      "社会批判"
    ],
    "oneLine": "首尔一栋废弃商场突发大火，赶来的消防队发现：这不是意外，而是一个专门猎杀消防员的死亡陷阱。"
  },
  {
    "title": "姊妹心粤语",
    "url": "./movie-1299.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭 / 伦理",
    "tags": [
      "港剧",
      "豪门恩怨",
      "姐妹反目",
      "身世之谜",
      "粤语原声"
    ],
    "oneLine": "一对亲姐妹爱上同一个男人，当姐姐发现妹妹其实是同父异母的仇人之女，温情彻底碎裂。"
  },
  {
    "title": "你眼中的我",
    "url": "./movie-1300.html",
    "cover": "./100.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情/奇幻",
    "tags": [
      "视觉互换",
      "盲人歌手",
      "双向救赎"
    ],
    "oneLine": "一位盲人女歌手与一位叛逆的富二代摄影师意外视觉互换，她看到了世界的丑陋，他看到了纯粹的声音。"
  },
  {
    "title": "一炮而红",
    "url": "./movie-1301.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧/剧情",
    "tags": [
      "网红讽刺",
      "短视频乱象",
      "黑色幽默"
    ],
    "oneLine": "一个五音不全的农村大妈因为直播事故意外爆红，但她的经纪人其实是被通缉的网络诈骗犯。"
  },
  {
    "title": "夸鲁普",
    "url": "./movie-1302.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "悬疑民俗",
    "tags": [
      "亚马逊",
      "都市传说",
      "变形者",
      "环保"
    ],
    "oneLine": "圣保罗接连发生失踪案，所有线索都指向雨林深处一个名为“夸鲁普”的变形生物。"
  },
  {
    "title": "巅峰人生2018",
    "url": "./movie-1303.html",
    "cover": "./103.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 运动",
    "tags": [
      "登山",
      "绝境求生",
      "人性考验"
    ],
    "oneLine": "一名登山家在征服8000米高峰时遭遇雪崩，必须在失去理智前找到下山的路。"
  },
  {
    "title": "阿凡达3",
    "url": "./movie-1304.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "3D巨制",
      "潘多拉",
      "新部落",
      "海洋战争"
    ],
    "oneLine": "当灰烬族从火山中苏醒，潘多拉的水与火将迎来终局之战。"
  },
  {
    "title": "我只在乎你",
    "url": "./movie-1305.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情 / 悬疑 / 科幻",
    "tags": [
      "时间循环",
      "婚姻",
      "记忆篡改",
      "扭曲深情"
    ],
    "oneLine": "丈夫每天醒来都会忘记前一天的妻子，而她选择每天都重新嫁给他一次，直到她在他的日记本里发现了另一个女人的名字。"
  },
  {
    "title": "流沙2016",
    "url": "./movie-1306.html",
    "cover": "./106.jpg",
    "year": "2016",
    "region": "欧美",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚, 灾难, 生存",
    "tags": [
      "沙漠求生",
      "极限绝望",
      "单人演技",
      "心理折磨",
      "自救"
    ],
    "oneLine": "女子在沙漠徒步时误入地质断层，流沙从脚踝蔓延至脖颈，她只有一瓶水和一部没有信号的手机。 流沙像温热的裹尸布慢慢收紧，当手机终于有了信号时，她已经只剩一张脸露在外面。"
  },
  {
    "title": "林书豪旋疯",
    "url": "./movie-1307.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记 / 剧情 / 运动",
    "tags": [
      "篮球",
      "亚裔",
      "励志",
      "真实改编",
      "体育"
    ],
    "oneLine": "聚焦林书豪“林疯狂”之前被无数次裁掉的至暗时刻，以及他如何用一本借来的笔记本重建信心。"
  },
  {
    "title": "石头 剪刀 布2015",
    "url": "./movie-1308.html",
    "cover": "./108.jpg",
    "year": "2015",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "游戏杀人",
      "密室",
      "高智商犯罪",
      "反转"
    ],
    "oneLine": "六名陌生男女被关密室，每隔十分钟必须进行石头剪刀布，输者将被处决，直到只剩一人。"
  },
  {
    "title": "菲德拉",
    "url": "./movie-1309.html",
    "cover": "./109.jpg",
    "year": "1962",
    "region": "希腊",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 爱情",
    "tags": [
      "古希腊悲剧",
      "现代改编",
      "乱伦",
      "宿命"
    ],
    "oneLine": "航运大亨的年轻妻子，不可救药地爱上了继子，一段现代希腊悲剧在海岛豪宅中上演。"
  },
  {
    "title": "布鲁克林银行家",
    "url": "./movie-1310.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 犯罪",
    "tags": [
      "华尔街",
      "洗钱",
      "良心",
      "惊悚",
      "真实事件改编"
    ],
    "oneLine": "布鲁克林一家小银行的经理，无意中发现自己经手的账户竟是毒枭的洗钱通道。"
  },
  {
    "title": "暹罗女王",
    "url": "./movie-1311.html",
    "cover": "./111.jpg",
    "year": "2006",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "历史, 动作, 传记",
    "tags": [
      "古装史诗",
      "女王",
      "缅甸战争",
      "象战"
    ],
    "oneLine": "16世纪泰国首位女王苏丽瑶泰，在丈夫战死后披甲骑象，以一敌百斩下缅甸王储头颅。"
  },
  {
    "title": "乾隆与香妃",
    "url": "./movie-1312.html",
    "cover": "./112.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 爱情 / 历史传奇",
    "tags": [
      "清宫",
      "异域",
      "香妃",
      "乾隆",
      "民族融合"
    ],
    "oneLine": "乾隆为得香妃发动战争，却不知她从入宫那刻起，就在酝酿一场颠覆王朝的复仇。"
  },
  {
    "title": "机会",
    "url": "./movie-1313.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "博弈",
      "平行宇宙",
      "选择",
      "惊悚",
      "高概念"
    ],
    "oneLine": "一位潦倒赌徒发现每次抛硬币都能预知未来，但代价是随机失去一段记忆。"
  },
  {
    "title": "我的爸爸是森林之王2",
    "url": "./movie-1314.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "比利时 / 法国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "家庭 / 冒险",
    "tags": [
      "动物保护",
      "父女情",
      "丛林冒险"
    ],
    "oneLine": "大脚怪爸爸带着女儿重返丛林，这次他们要对抗的是偷猎集团与基因改造农场。"
  },
  {
    "title": "暗室",
    "url": "./movie-1315.html",
    "cover": "./115.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑惊悚",
    "tags": [
      "密室",
      "反转",
      "人性",
      "复仇",
      "心理"
    ],
    "oneLine": "为了寻找失踪的女儿，母亲主动进入嫌犯的地下暗室，却发现里面关着不止一个人。"
  },
  {
    "title": "午夜凶铃：凶铃再现国语",
    "url": "./movie-1316.html",
    "cover": "./116.jpg",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖、悬疑",
    "tags": [
      "午夜凶铃",
      "国语配音",
      "诅咒录像带",
      "恐怖经典",
      "病毒式传播"
    ],
    "oneLine": "看完诅咒录像带的人七天后必死，一名记者在调查中发现，真相远比鬼魂爬出电视更可怕。"
  },
  {
    "title": "时间飞船 三恶人的逆袭",
    "url": "./movie-1317.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻冒险",
    "tags": [
      "时间旅行",
      "反派主角",
      "搞笑热血",
      "机械设计"
    ],
    "oneLine": "三个被主角团击败的恶人抢走了时间飞船，他们决定回到过去，抢先一步成为英雄。"
  },
  {
    "title": "乔治·华莱士",
    "url": "./movie-1318.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记, 历史",
    "tags": [
      "政治",
      "种族",
      "争议人物",
      "演技炸裂",
      "救赎"
    ],
    "oneLine": "从最激进的种族隔离者到寻求黑人宽恕，还原美国南方政客乔治·华莱士撕裂与忏悔的一生。"
  },
  {
    "title": "血滴亚历克斯之房",
    "url": "./movie-1319.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "美国 / 西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "密室",
      "血腥",
      "断肢",
      "逆袭",
      "女杀手"
    ],
    "oneLine": "连环杀手亚历克斯的“收藏室”里，一名断臂女孩用牙齿和智商反杀，成为新的收藏品主人。"
  },
  {
    "title": "荒岛求生之巨兽来袭",
    "url": "./movie-1320.html",
    "cover": "./120.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "怪兽",
      "孤岛",
      "基因实验",
      "绝境求生"
    ],
    "oneLine": "一支网红探险队直播荒岛求生，却唤醒了海底沉睡的史前基因融合巨兽。"
  },
  {
    "title": "玛雅蜜蜂历险记",
    "url": "./movie-1321.html",
    "cover": "./121.jpg",
    "year": "2022",
    "region": "澳大利亚 / 德国",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "europe",
    "genre": "冒险 / 儿童 / 喜剧",
    "tags": [
      "昆虫",
      "成长",
      "友情"
    ],
    "oneLine": "小蜜蜂玛雅不想只会采蜜，她偷偷溜出蜂巢，发现了一个吃虫的植物王国。"
  },
  {
    "title": "印度母亲",
    "url": "./movie-1322.html",
    "cover": "./122.jpg",
    "year": "1957",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情，家庭",
    "tags": [
      "女性",
      "苦难",
      "土地",
      "母爱"
    ],
    "oneLine": "一个女人用四十年对抗干旱、高利贷和抛弃她的儿子，只为守住丈夫留下的一亩三分地。"
  },
  {
    "title": "草莓宣言",
    "url": "./movie-1323.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情, 同性, 青春",
    "tags": [
      "校园",
      "女同",
      "成长"
    ],
    "oneLine": "1999年夏天，两个被全校孤立的女孩在种植草莓的劳动课上相遇，用一本交换日记写下了对抗整个世界的宣言。"
  },
  {
    "title": "武士老师",
    "url": "./movie-1324.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "喜剧、校园、穿越",
    "tags": [
      "幕末武士",
      "现代教育",
      "反差萌",
      "人生哲理",
      "热血"
    ],
    "oneLine": "幕末最强剑客穿越到令和时代，成了一名问题儿童补习班的临时班主任。"
  },
  {
    "title": "圣母玛利亚",
    "url": "./movie-1325.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 历史, 悬疑",
    "tags": [
      "宗教秘闻",
      "修女调查",
      "圣像之谜"
    ],
    "oneLine": "一座古老修道院的圣母像每晚都会流泪，年轻修女奉命调查，却发现泪水是百年前一桩谋杀案的呼喊。"
  },
  {
    "title": "掌中雀",
    "url": "./movie-1326.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "短剧/网络剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装爱情悬疑",
    "tags": [
      "复仇",
      "替身",
      "权谋",
      "虐恋",
      "短剧爆款"
    ],
    "oneLine": "被满门抄斩的将军府孤女，换脸后以伶人身份进入仇人王府，她的每一步都在对方“掌中”，却不知王爷也在她局中。"
  },
  {
    "title": "只想和你在一起",
    "url": "./movie-1327.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 奇幻",
    "tags": [
      "纯爱",
      "绝症",
      "记忆漂流",
      "治愈"
    ],
    "oneLine": "患有“逆行性失忆症”的新娘，每天都会忘记新郎，而新郎每天都要让她重新爱上自己。"
  },
  {
    "title": "含羞草也想开花",
    "url": "./movie-1328.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 剧情",
    "tags": [
      "社恐",
      "治愈",
      "植物系恋爱",
      "慢节奏",
      "内向者"
    ],
    "oneLine": "患有严重社交恐惧症的女孩把一盆含羞草当男朋友，直到植物学家邻居告诉她：含羞草其实每天都在偷偷开花。"
  },
  {
    "title": "恍然大悟",
    "url": "./movie-1329.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "反转",
      "人性",
      "失忆",
      "真相"
    ],
    "oneLine": "一场车祸让他失去记忆，却意外发现身边最亲密的人，都在编造他的过去。"
  },
  {
    "title": "黄铜茶壶",
    "url": "./movie-1330.html",
    "cover": "./130.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻、惊悚、喜剧",
    "tags": [
      "魔法物品",
      "贪婪",
      "道德困境",
      "黑色幽默"
    ],
    "oneLine": "一对穷困夫妻发现一只神秘茶壶能变出钱，但前提是必须让自己感到疼痛。"
  },
  {
    "title": "魔岛亡魂",
    "url": "./movie-1331.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "孤岛",
      "邪教",
      "献祭",
      "循环",
      "洛夫克拉夫特式"
    ],
    "oneLine": "六名网红前往以“自杀森林”闻名的魔岛直播探险，却发现自己陷入了一个需要六条命才能破解的百年前献祭循环。"
  },
  {
    "title": "马桶妖怪4",
    "url": "./movie-1332.html",
    "cover": "./132.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 恐怖",
    "tags": [
      "B级片",
      "恶心萌",
      "家庭入侵",
      "cult",
      "变异"
    ],
    "oneLine": "一只被冲下马桶的变异小金鱼，三年后从下水道带回了一整支妖怪军团复仇。"
  },
  {
    "title": "在浴室见我",
    "url": "./movie-1333.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情, 悬疑",
    "tags": [
      "网友见面",
      "身份错位",
      "黑色幽默"
    ],
    "oneLine": "一对匿名网友约定在公共浴室见面，却发现彼此是生活中最水火不容的两个人。"
  },
  {
    "title": "百姓贵族第二季",
    "url": "./movie-1334.html",
    "cover": "./134.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情/喜剧/家庭",
    "tags": [
      "种田文",
      "乡村振兴",
      "温馨治愈",
      "现代童话"
    ],
    "oneLine": "曾经的东京金融精英在北海道当农民七年，这次他要对抗的是企图吞并全村土地的跨国资本。"
  },
  {
    "title": "叛国佳人",
    "url": "./movie-1335.html",
    "cover": "./135.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "谍战 / 历史 / 女性",
    "tags": [
      "冷战",
      "双重间谍",
      "女性特工",
      "道德困境"
    ],
    "oneLine": "冷战期间，一个美国外交官妻子爱上苏联情报官，偷走了丈夫的核弹机密。"
  },
  {
    "title": "恋爱中的厨师",
    "url": "./movie-1336.html",
    "cover": "./136.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情，喜剧，美食",
    "tags": [
      "米其林",
      "挑剔食客",
      "菜谱斗法",
      "法式浪漫",
      "味蕾之恋"
    ],
    "oneLine": "女厨师用一道“无盐之鱼”征服了米其林评委的胃，却没料到对方是个味觉比舌头更挑剔的男人。"
  },
  {
    "title": "转运姐妹花",
    "url": "./movie-1337.html",
    "cover": "./137.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 剧情",
    "tags": [
      "姐妹情",
      "互换身份",
      "逆袭"
    ],
    "oneLine": "一对多年未联系的姐妹，因为一次意外互换了身体，不得不顶着对方失败的人生，联手对抗共同的敌人。"
  },
  {
    "title": "小鱼儿与花无缺",
    "url": "./movie-1338.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "武侠 / 古装 / 喜剧",
    "tags": [
      "古龙改编",
      "双男主",
      "江湖",
      "宿命兄弟"
    ],
    "oneLine": "恶人谷长大的鬼马精灵小鱼儿，与移花宫培养出的冰山公子花无缺，两位亲兄弟在不知情的对立中，搅动了整个武林的风云。"
  },
  {
    "title": "走出雨季",
    "url": "./movie-1339.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 青春 / 治愈",
    "tags": [
      "创伤疗愈",
      "山区支教",
      "自我救赎"
    ],
    "oneLine": "因抑郁症退学的音乐才女，躲到云南山区支教，却被一群孩子和一场泥石流治愈。"
  },
  {
    "title": "我们恋爱的履历",
    "url": "./movie-1340.html",
    "cover": "./140.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情, 喜剧",
    "tags": [
      "娱乐圈",
      "契约恋爱",
      "破镜重圆",
      "欢喜冤家",
      "青梅竹马"
    ],
    "oneLine": "为了博取同情票，过气女星找来前男友伪装恩爱夫妻，结果简历都是编的。"
  },
  {
    "title": "萨拉热窝的孩子",
    "url": "./movie-1341.html",
    "cover": "./141.jpg",
    "year": "2023",
    "region": "波黑",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 战争",
    "tags": [
      "战后创伤",
      "儿童视角",
      "和解"
    ],
    "oneLine": "2010年，一个萨拉热窝的15岁少年在清理战争废墟时，发现了一本泛黄的日记，上面记录着另一个男孩在围城战中的100天。"
  },
  {
    "title": "荒原杀手",
    "url": "./movie-1342.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "犯罪 / 悬疑 / 西部",
    "tags": [
      "公路追凶",
      "沙漠",
      "身份反转",
      "硬汉派"
    ],
    "oneLine": "甘肃戈壁滩上发生连环命案，一名被停职的刑警押送嫌犯途中遭遇沙尘暴，凶手就在身边。"
  },
  {
    "title": "亚马逊萌猴奇遇记",
    "url": "./movie-1343.html",
    "cover": "./143.jpg",
    "year": "2015",
    "region": "法国 / 巴西",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录片 / 冒险 / 家庭",
    "tags": [
      "动物",
      "亚马逊",
      "真实拍摄",
      "成长"
    ],
    "oneLine": "一只从小被人类饲养的卷尾猴被意外遗弃在亚马逊雨林，它必须在七天内学会野外生存，否则就会死去。"
  },
  {
    "title": "高墙天堂",
    "url": "./movie-1344.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 同性, 犯罪",
    "tags": [
      "监狱",
      "囚犯与狱警",
      "禁忌之恋",
      "救赎",
      "社会议题"
    ],
    "oneLine": "年轻囚犯与中年狱警在探视室的书信往来中渐生情愫，直到一场暴动将他们推向对立面。"
  },
  {
    "title": "傅满洲的城堡",
    "url": "./movie-1345.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作， 惊悚， 冒险",
    "tags": [
      "推翻刻板印象",
      "夺宝奇兵",
      "华人英雄"
    ],
    "oneLine": "一位华裔考古学家发现，传说中傅满洲的宝藏，其实是祖先留下的文明火种。"
  },
  {
    "title": "偷情小丈夫",
    "url": "./movie-1346.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 爱情, 黑色幽默",
    "tags": [
      "身份错位",
      "捉奸",
      "荒诞",
      "男人困境"
    ],
    "oneLine": "全职爸爸为证明自己魅力网上撩妹，却“撩”到了假装陌生人的妻子，一场互飙演技的谎言大战就此爆发。"
  },
  {
    "title": "彼得·格里尔的贤者时间",
    "url": "./movie-1347.html",
    "cover": "./147.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "喜剧, 奇幻, 后宫",
    "tags": [
      "异世界",
      "恶搞",
      "反套路",
      "贤者"
    ],
    "oneLine": "最强战士在打败魔王后获得“贤者时间”被动技能，每次与女性接触都会进入哲学沉思。"
  },
  {
    "title": "爱上娜塔莉",
    "url": "./movie-1348.html",
    "cover": "./148.jpg",
    "year": "2021",
    "region": "法国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "爱情 / 剧情",
    "tags": [
      "婚姻危机",
      "暧昧",
      "文学改编感",
      "中年爱情"
    ],
    "oneLine": "结婚二十年的男人，在女儿的同学身上看到了初恋的影子。"
  },
  {
    "title": "村曲悠扬",
    "url": "./movie-1349.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 音乐",
    "tags": [
      "农村",
      "民谣",
      "留守老人",
      "治愈"
    ],
    "oneLine": "一个失意的流行乐队主唱逃回老家山村，却发现村里的留守老人们组建了一支只唱“泥土味儿”民谣的老年乐队。"
  },
  {
    "title": "鱿鱼游戏第二季",
    "url": "./movie-1350.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "惊悚、悬疑、动作",
    "tags": [
      "生存游戏",
      "复仇",
      "人性",
      "大逃杀"
    ],
    "oneLine": "成奇勋带着染红的头发和巨额奖金，杀回那座孤岛，他要掀翻这场游戏。"
  },
  {
    "title": "给你一千万",
    "url": "./movie-1351.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "黑色喜剧",
    "tags": [
      "荒诞",
      "人性考验",
      "家庭伦理"
    ],
    "oneLine": "一笔天降巨款附带一个诡异条件：必须在30天内花光，且不能告诉任何人。"
  },
  {
    "title": "塞隆尼斯·孟克：勇往直前",
    "url": "./movie-1352.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记/音乐",
    "tags": [
      "爵士乐",
      "天才",
      "精神疾病",
      "音乐传奇"
    ],
    "oneLine": "聚焦爵士钢琴怪才塞隆尼斯·孟克最难熬的六年（1951-1957），因吸毒被吊销执照后，他如何凭借意志与音乐重回巅峰。"
  },
  {
    "title": "野兽家族第一季",
    "url": "./movie-1353.html",
    "cover": "./3.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 犯罪",
    "tags": [
      "家族黑帮",
      "权力斗争",
      "潜伏卧底"
    ],
    "oneLine": "母亲去世后，青年误入强悍的犯罪家族，在野性与亲情间卷入一场无法回头的权力游戏。"
  },
  {
    "title": "完美父母",
    "url": "./movie-1354.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 科幻",
    "tags": [
      "基因编辑",
      "亲情拷问",
      "乌托邦"
    ],
    "oneLine": "一对平凡夫妇为生下“完美孩子”接受基因改造，却发现完美背后是情感的真空。"
  },
  {
    "title": "绝境逃脱",
    "url": "./movie-1355.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 惊悚",
    "tags": [
      "密室逃脱",
      "极限生存",
      "反转",
      "暴力美学"
    ],
    "oneLine": "五个人在废弃地铁站醒来，发现自己脖子上挂着炸弹，必须在90分钟内找到唯一的生路。"
  },
  {
    "title": "青葱那年",
    "url": "./movie-1356.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "青春, 怀旧",
    "tags": [
      "90年代",
      "校园",
      "小镇",
      "成长"
    ],
    "oneLine": "1998年南方小镇，六个高三学生在最后一个夏天里，用一场注定失败的乐队演出告别青春。"
  },
  {
    "title": "苹果饺子团又来了",
    "url": "./movie-1357.html",
    "cover": "./7.jpg",
    "year": "2018",
    "region": "新加坡",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧, 家庭",
    "tags": [
      "南洋风情",
      "方言喜剧",
      "邻里温情",
      "饮食文化"
    ],
    "oneLine": "为了拯救即将被拆除的社区活动中心，一群大妈决定重组“苹果饺子团”，参加国际才艺大赛。"
  },
  {
    "title": "四字单词",
    "url": "./movie-1358.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 同性",
    "tags": [
      "聋哑",
      "手语诗",
      "校园霸凌",
      "初恋"
    ],
    "oneLine": "聋哑少年用手语写诗反抗校园霸凌，暗恋他的篮球少年决定用一个“四字单词”帮他发声。"
  },
  {
    "title": "偷生",
    "url": "./movie-1359.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪， 悬疑",
    "tags": [
      "换脸",
      "冒名顶替",
      "阶层跃迁",
      "惊悚"
    ],
    "oneLine": "穷困的整形医生在富豪死后通过换脸手术冒名顶替，却发现自己继承的是一个被诅咒的家族。"
  },
  {
    "title": "蜘蛛人3",
    "url": "./movie-1360.html",
    "cover": "./10.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 科幻",
    "tags": [
      "多元宇宙",
      "暗黑蜘蛛侠",
      "共生体",
      "宿命对决"
    ],
    "oneLine": "当来自破碎宇宙的暗黑蜘蛛侠入侵主宇宙，三代蜘蛛侠被迫首次联手，却发现真正的敌人是彼此内心的黑暗面。"
  },
  {
    "title": "王立宇宙军",
    "url": "./movie-1361.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻战争",
    "tags": [
      "架空",
      "太空竞赛",
      "政治讽刺",
      "失败者",
      "手绘"
    ],
    "oneLine": "在一个从未赢过一场太空战争的弱国，几个废柴兵被选为首次载人火箭的宇航员。"
  },
  {
    "title": "嗨唱转起来第二季",
    "url": "./movie-1362.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "音乐 / 喜剧",
    "tags": [
      "即兴",
      "恶搞",
      "跨界",
      "直播"
    ],
    "oneLine": "节目组被恐怖分子劫持，要求全程直播，嘉宾只能把求救信息藏在歌词里唱出来。"
  },
  {
    "title": "追杀比尔2：爱的大逃杀",
    "url": "./movie-1363.html",
    "cover": "./13.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 惊悚",
    "tags": [
      "新娘复仇",
      "暴力美学",
      "反转",
      "爽片"
    ],
    "oneLine": "上一集杀死比尔后，新娘发现自己还有一个双胞胎妹妹，而且是更危险的杀手。"
  },
  {
    "title": "沧月绘",
    "url": "./movie-1364.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装, 奇幻, 爱情",
    "tags": [
      "入画",
      "时空循环",
      "画师",
      "双向奔赴"
    ],
    "oneLine": "失意画师意外发现自己能进入自己的画中世界，并在那里遇到了一个被困了三百年的女子。"
  },
  {
    "title": "玫瑰色人生",
    "url": "./movie-1365.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 奇幻 / 爱情",
    "tags": [
      "穿越",
      "中老年爱情",
      "遗憾",
      "第二次人生",
      "催泪"
    ],
    "oneLine": "64 岁的家庭主妇在确诊癌症后，一觉醒来发现自己回到了 18 岁，但她最想见的，是当年那个被她错过的穷小子。"
  },
  {
    "title": "蝴蝶大冒险",
    "url": "./movie-1366.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "微观世界",
      "成长寓言",
      "手绘美学"
    ],
    "oneLine": "一只刚破茧的蝴蝶为了挽救即将枯萎的“生命之树”，必须穿过被人类遗弃的“巨人废都”。"
  },
  {
    "title": "稍后见，汉娜！",
    "url": "./movie-1367.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 爱情",
    "tags": [
      "英式幽默",
      "婚礼",
      "冤家路窄",
      "温馨治愈"
    ],
    "oneLine": "伴娘汉娜因为迟到被婚礼拒之门外，为了参加闺蜜婚礼，她不得不搭上前男友的车狂飙。"
  },
  {
    "title": "余命10年",
    "url": "./movie-1368.html",
    "cover": "./18.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 爱情",
    "tags": [
      "绝症",
      "治愈",
      "催泪",
      "纯爱",
      "倒计时"
    ],
    "oneLine": "患上不治之症的女孩只剩十年寿命，她用录像机记录着每一天，却意外爱上了来看病的男孩。"
  },
  {
    "title": "飞越温柔窝",
    "url": "./movie-1369.html",
    "cover": "./19.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 爱情",
    "tags": [
      "越狱",
      "家庭",
      "闹剧",
      "反套路"
    ],
    "oneLine": "三个亡命徒劫持人质躲进山顶别墅，却被迫陪一家老小上演温情戏码。"
  },
  {
    "title": "绿野恩仇记",
    "url": "./movie-1370.html",
    "cover": "./20.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 悬疑",
    "tags": [
      "复仇",
      "农村",
      "女性",
      "家族"
    ],
    "oneLine": "平静的茶园暗藏杀机，一封三十年前的遗书掀起了两个家族的以血还血。"
  },
  {
    "title": "山路",
    "url": "./movie-1371.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情, 家庭",
    "tags": [
      "故乡",
      "和解",
      "遗愿",
      "徒步"
    ],
    "oneLine": "一对决裂二十年的父子，因为父亲遗愿“把骨灰撒在老家的山路尽头”，被迫走上最后的同行之旅。"
  },
  {
    "title": "杂技亡命队国语",
    "url": "./movie-1372.html",
    "cover": "./22.jpg",
    "year": "1979",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 剧情",
    "tags": [
      "邵氏",
      "杂技",
      "复仇",
      "兄弟情"
    ],
    "oneLine": "一支民间杂技团被军阀灭门，幸存的三兄弟用翻跟斗、顶碗、走钢丝的绝技，杀出一条血路。"
  },
  {
    "title": "逼上梁山",
    "url": "./movie-1373.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 动作 / 社会 / 历史",
    "tags": [
      "水浒新编",
      "草根反抗",
      "官逼民反",
      "群像刻画",
      "武打写实"
    ],
    "oneLine": "北宋末年，一个安分守己的猎户因一头误入官家的野兔，被逼得全家流亡，最终上了梁山。"
  },
  {
    "title": "巴比龙",
    "url": "./movie-1374.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "美国 / 塞尔维亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "犯罪, 剧情, 传记",
    "tags": [
      "越狱",
      "冤案",
      "恶魔岛",
      "求生",
      "真实改编"
    ],
    "oneLine": "被诬陷杀人的扒手，用十年时间从地狱监狱逃出生天。"
  },
  {
    "title": "牛仔裤的夏天",
    "url": "./movie-1375.html",
    "cover": "./25.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 青春",
    "tags": [
      "女性友谊",
      "成长",
      "治愈"
    ],
    "oneLine": "一条神奇的牛仔裤在四个即将奔赴不同未来的大学闺蜜之间传递，见证了她们人生中最“崩塌”但也最真实的一个夏天。"
  },
  {
    "title": "玩命关头：特别行动",
    "url": "./movie-1376.html",
    "cover": "./26.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作、冒险",
    "tags": [
      "飞车",
      "肌肉男",
      "高科技",
      "全球追缉",
      "硬汉互怼"
    ],
    "oneLine": "死对头特工和雇佣兵被迫联手，驾驶变形战车，阻止恐怖分子用生化病毒污染全球水源。"
  },
  {
    "title": "天才眼镜狗",
    "url": "./movie-1377.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻、喜剧、家庭",
    "tags": [
      "狗科学家",
      "时间旅行",
      "历史恶搞",
      "亲子关系"
    ],
    "oneLine": "世界上最有名的“眼镜狗”科学家发明了时光机，带着收养的人类儿子穿梭历史救爸妈。"
  },
  {
    "title": "深夜淫娃",
    "url": "./movie-1378.html",
    "cover": "./28.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "情色、剧情、社会",
    "tags": [
      "夜店",
      "女性友谊",
      "身体自主",
      "都市孤独",
      "救赎"
    ],
    "oneLine": "东京最火夜店的头牌舞娘，深夜在街头捡回一个企图自杀的落魄女白领，从此两人在欲望都市里互相舔舐伤口。"
  },
  {
    "title": "办公室的故事·当代版",
    "url": "./movie-1379.html",
    "cover": "./29.jpg",
    "year": "2020",
    "region": "俄罗斯",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "喜剧/爱情",
    "tags": [
      "翻拍",
      "职场",
      "中年危机"
    ],
    "oneLine": "莫斯科一家广告公司的冷酷女总裁，在训斥下属时被录屏发到网上，只有那个老实的程序员愿意帮她。"
  },
  {
    "title": "假面骑士电王",
    "url": "./movie-1380.html",
    "cover": "./30.jpg",
    "year": "2007",
    "region": "日本",
    "type": "特摄",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "动作/科幻/喜剧",
    "tags": [
      "假面骑士",
      "时间列车",
      "异魔神",
      "搞笑"
    ],
    "oneLine": "史上最倒霉的假面骑士，身体里住着四个性格分裂的恶魔，每次变身都得先和他们在脑子里打架。"
  },
  {
    "title": "少年骇客：全面进化第一季",
    "url": "./movie-1381.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动作, 科幻, 动画",
    "tags": [
      "超级英雄",
      "外星人",
      "成长",
      "平行宇宙"
    ],
    "oneLine": "16岁的小班不再满足于Omnitrix的初始英雄，他解锁了所有外星基因的终极形态，引来了跨维度追捕者。"
  },
  {
    "title": "女儿们的恋爱第二季",
    "url": "./movie-1382.html",
    "cover": "./32.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 爱情 / 纪实",
    "tags": [
      "明星",
      "恋爱",
      "父女",
      "观察室",
      "催婚"
    ],
    "oneLine": "四位女明星带着父亲和虚拟男友谈恋爱，当虚拟AI说出“我爱你”时，演播厅炸了。"
  },
  {
    "title": "完美先生和差不多小姐",
    "url": "./movie-1383.html",
    "cover": "./33.jpg",
    "year": "2022",
    "region": "中国内地",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 喜剧, 都市",
    "tags": [
      "强制爱",
      "契约婚姻",
      "强迫症",
      "治愈",
      "反差萌"
    ],
    "oneLine": "一个凡事追求完美的偏执总裁，被迫与凡事“差不多就行”的佛系女孩同居。"
  },
  {
    "title": "挑战粤语",
    "url": "./movie-1384.html",
    "cover": "./34.jpg",
    "year": "2012",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧",
    "tags": [
      "语言",
      "文化冲突",
      "北漂",
      "笑料",
      "温情"
    ],
    "oneLine": "一个不会说粤语的内地程序员被派到香港分公司，三个月内必须用粤语做述职报告。"
  },
  {
    "title": "民国秘闻之天谴图腾",
    "url": "./movie-1385.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "typeGroup": "other",
    "regionGroup": "mainland",
    "genre": "悬疑, 冒险",
    "tags": [
      "民国",
      "图腾",
      "诅咒",
      "探案"
    ],
    "oneLine": "一本失踪的图腾古籍重现，却引发北平连环死亡案，每具尸体上都烙着相同的上古符号。"
  },
  {
    "title": "肥龙过江",
    "url": "./movie-1386.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作/喜剧",
    "tags": [
      "胖子特工",
      "卧底",
      "功夫喜剧",
      "香港情怀"
    ],
    "oneLine": "曾是警队精英的150公斤肥佬，为追查一桩毒品案被迫穿上伪装，却意外发现脂肪才是他最好的武器。"
  },
  {
    "title": "小蜜蜂 勇气的旋律",
    "url": "./movie-1387.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画 / 冒险 / 家庭",
    "tags": [
      "昆虫",
      "音乐",
      "成长",
      "勇气"
    ],
    "oneLine": "一只不会采蜜却爱唱歌的小蜜蜂，用旋律阻止了一场蜂巢与大黄蜂的战争。"
  },
  {
    "title": "姚喆游击大青山",
    "url": "./movie-1388.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史 / 战争",
    "tags": [
      "抗战",
      "骑兵",
      "真实改编"
    ],
    "oneLine": "八路军骑兵支队长姚喆率部在大青山与日寇展开冷兵器般的马背厮杀，只为守护一条秘密补给线。"
  },
  {
    "title": "奔跑吧少年第4季",
    "url": "./movie-1389.html",
    "cover": "./39.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀, 运动, 青春",
    "tags": [
      "校园竞技",
      "素人少年",
      "团队对抗",
      "正能量"
    ],
    "oneLine": "来自全国各地的十二名中学生，在城市地标间进行一场“没有淘汰”的接力赛。"
  },
  {
    "title": "大漠苍狼",
    "url": "./movie-1390.html",
    "cover": "./40.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险、动作、历史",
    "tags": [
      "沙漠寻宝",
      "抗日战争",
      "隐秘基地"
    ],
    "oneLine": "抗日战争末期，一支由地质学家和游击队组成的小队深入大漠，寻找传说中的日军秘密基地。"
  },
  {
    "title": "情挑四十",
    "url": "./movie-1391.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 爱情, 女性",
    "tags": [
      "中年女性",
      "自我觉醒",
      "姐弟恋",
      "职场",
      "现实主义"
    ],
    "oneLine": "40岁离婚失业的房产中介女店长，阴差阳错与23岁的富二代实习生产生交集，开始了一场重塑人生的“双向诱惑”。"
  },
  {
    "title": "大人的防具店（里面）",
    "url": "./movie-1392.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻 / 喜剧 / 冒险",
    "tags": [
      "异世界",
      "搞笑",
      "日常",
      "反差萌",
      "职场"
    ],
    "oneLine": "一家专门为冒险者打造“功能性防具”的奇葩店铺，表面卖铠甲，里间却提供不可描述的“特殊防护”。"
  },
  {
    "title": "青春时代",
    "url": "./movie-1393.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 青春 / 群像",
    "tags": [
      "怀旧",
      "友情的真相",
      "时间跨度",
      "催泪"
    ],
    "oneLine": "五个大学室友约定“十年后谁混得最差就请客”，十年后她们再聚首，发现每个人都以为自己是混得最差的那个。"
  },
  {
    "title": "海军罪案调查处第四季",
    "url": "./movie-1394.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪, 剧情",
    "tags": [
      "军旅",
      "探案",
      "团队",
      "悬疑"
    ],
    "oneLine": "吉布斯的新团队迎来了史上最难案件：一名海军上校在五角大楼被枪杀，但所有监控显示凶手不存在。"
  },
  {
    "title": "漂流两颗心",
    "url": "./movie-1395.html",
    "cover": "./45.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "爱情 / 奇幻 / 灾难",
    "tags": [
      "末日漂流",
      "记忆碎片",
      "海难幸存",
      "纯爱",
      "治愈"
    ],
    "oneLine": "巨型邮轮沉没后，一对陌生男女困在同一块救生浮板上，却发现他们拥有彼此丢失的记忆。"
  },
  {
    "title": "威灵顿战线",
    "url": "./movie-1396.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "英国/西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争， 历史， 动作",
    "tags": [
      "拿破仑",
      "狙击手",
      "双雄对决"
    ],
    "oneLine": "威灵顿公爵麾下的一名爱尔兰神枪手，与拿破仑最倚重的波兰枪骑兵，在滑铁卢战役前展开生死猎杀。"
  },
  {
    "title": "狂爱",
    "url": "./movie-1397.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "法国/比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚爱情",
    "tags": [
      "占有欲",
      "跟踪狂",
      "心理学家",
      "病态迷恋",
      "反转"
    ],
    "oneLine": "一位著名女心理学家出版新书探讨“不健康的爱”，却被一个疯狂崇拜者用她书中的理论一步步拖入深渊。"
  },
  {
    "title": "弑女的故事",
    "url": "./movie-1398.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑，家庭，伦理",
    "tags": [
      "女性复仇",
      "代际创伤",
      "反转"
    ],
    "oneLine": "母亲意外发现，女儿正在用一本小说详细记录如何“完美杀死”自己的亲生父亲。"
  },
  {
    "title": "天堂奇遇",
    "url": "./movie-1399.html",
    "cover": "./49.jpg",
    "year": "2014",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情, 奇幻",
    "tags": [
      "治愈",
      "宗教",
      "人性",
      "单元剧"
    ],
    "oneLine": "一名粗鲁的餐馆老板意外成为“天堂接线员”，专门替去世的人完成最后遗愿，以此换取复活时间。"
  },
  {
    "title": "再吻我一次",
    "url": "./movie-1400.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "意大利 / 中国合拍",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时空循环",
      "婚姻危机",
      "救赎"
    ],
    "oneLine": "离婚当天，妻子车祸身亡，心碎的丈夫发现只要亲吻照片，就能回到相识那一年重新来过。"
  },
  {
    "title": "恶梦1979",
    "url": "./movie-1401.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "伊朗 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 惊悚 / 历史",
    "tags": [
      "伊朗革命",
      "家庭创伤",
      "心理惊悚",
      "历史幽灵"
    ],
    "oneLine": "1979年伊斯兰革命期间，德黑兰一个中产家庭被迫将宅邸借给革命军作为“审讯室”，40年后，幸存的后代开始经历与当年受刑者一模一样的噩梦。"
  },
  {
    "title": "阿翁丽的青春",
    "url": "./movie-1402.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 青春 / 乡村",
    "tags": [
      "彝族",
      "女拳手",
      "大山",
      "梦想"
    ],
    "oneLine": "大凉山彝族少女阿翁丽为了不被换亲，偷偷跟着支教老师练习散打，目标是打出一个未来。"
  },
  {
    "title": "鸡冠蒙面",
    "url": "./movie-1403.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 体育",
    "tags": [
      "地下摔角",
      "神秘面具",
      "父子传承",
      "复仇"
    ],
    "oneLine": "一个被摔角手父亲抛弃的孩子，长大后戴着公鸡面具重返擂台，只为在万众瞩目下亲手击败他。"
  },
  {
    "title": "篝火之战",
    "url": "./movie-1404.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装、动作、悬疑",
    "tags": [
      "篝火",
      "氏族",
      "祭祀",
      "权谋",
      "冷兵器"
    ],
    "oneLine": "一场关乎氏族存亡的圣火争夺战，却在灰烬中发现足以颠覆信仰的惊天秘密。"
  },
  {
    "title": "祷告",
    "url": "./movie-1405.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "恐怖/宗教",
    "tags": [
      "民俗恐怖",
      "邪教",
      "心理控制",
      "烧脑"
    ],
    "oneLine": "一名坚定的无神论警察卧底进一个提倡“爱与分享”的教会，却发现每一次祷告，都会有一个仇人会离奇死亡。"
  },
  {
    "title": "柠檬特调",
    "url": "./movie-1406.html",
    "cover": "./56.jpg",
    "year": "2021",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 剧情",
    "tags": [
      "咖啡馆",
      "柠檬酒",
      "意式生活",
      "遗产"
    ],
    "oneLine": "一个华尔街投行精英回到意大利南部小镇，继承爷爷的破旧咖啡馆，条件是必须亲手做出一杯完美的柠檬酒。"
  },
  {
    "title": "樱时",
    "url": "./movie-1407.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情、奇幻、爱情",
    "tags": [
      "纯爱",
      "时空穿越",
      "昭和风情",
      "治愈"
    ],
    "oneLine": "2025年的失意青年，通过一部老式拨盘电话，与1945年广岛原子弹爆炸前一天的年轻女画家产生了跨时空联系。"
  },
  {
    "title": "染色爱情",
    "url": "./movie-1408.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情",
    "tags": [
      "BL",
      "染坊",
      "家庭阻力"
    ],
    "oneLine": "染坊世家继承人爱上仇人之子，两人用布料颜色传递暗号。"
  },
  {
    "title": "到此一游",
    "url": "./movie-1409.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 公路",
    "tags": [
      "犯罪",
      "黑色幽默",
      "网络热点"
    ],
    "oneLine": "一群网红为了流量去无人区直播探险，却接连收到来自未来的“到此一游”雕刻。"
  },
  {
    "title": "残酷青春",
    "url": "./movie-1410.html",
    "cover": "./60.jpg",
    "year": "2007",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "少年犯",
      "教育缺失",
      "小镇青年",
      "写实主义",
      "残酷物语"
    ],
    "oneLine": "北方工业小镇的三个辍学少年，在偷窃、斗殴和录像厅里消耗着青春，直到一次失手杀人彻底改变了他们的命运。"
  },
  {
    "title": "要爸还是妈2",
    "url": "./movie-1411.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 家庭",
    "tags": [
      "离婚大战",
      "熊孩子",
      "疯狂修罗场"
    ],
    "oneLine": "离婚多年的怨侣为了争夺孩子的抚养权，在家族婚礼上展开了令人窒息的无差别攻击。"
  },
  {
    "title": "谍海钢面人",
    "url": "./movie-1412.html",
    "cover": "./62.jpg",
    "year": "1978",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 战争, 悬疑",
    "tags": [
      "反特",
      "老电影",
      "民国",
      "伪装的敌人",
      "动作经典"
    ],
    "oneLine": "解放前夕，一名侦察科长追查代号“钢面人”的敌特，发现潜伏的特务竟是以铁面示人的复仇者。"
  },
  {
    "title": "脱去枷锁的回忆：奴隶实录",
    "url": "./movie-1413.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "历史, 剧情",
    "tags": [
      "奴隶制",
      "口述史",
      "创伤",
      "女性",
      "纪实风格"
    ],
    "oneLine": "基于真实的WPA奴隶口述档案改编，五个女人用各自的声音讲述同一段被铁链锁住的人生。"
  },
  {
    "title": "先生的朋友圈",
    "url": "./movie-1414.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情，悬疑，职场",
    "tags": [
      "朋友圈",
      "人设崩塌",
      "新媒体"
    ],
    "oneLine": "一位热爱在朋友圈打造精英人设的大学教授，因一条手滑发出的“仅部分可见”动态，引发了一场连环雪崩。"
  },
  {
    "title": "无敌拍档之万无一失",
    "url": "./movie-1415.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 喜剧",
    "tags": [
      "搭档",
      "乌龙",
      "警匪",
      "爆笑"
    ],
    "oneLine": "史上最倒霉的私家侦探与最较真的女警被迫搭档，执行一场“万无一失”的卧底行动。"
  },
  {
    "title": "城市风云",
    "url": "./movie-1416.html",
    "cover": "./66.jpg",
    "year": "1988",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "改革初期",
      "倒爷",
      "兄弟情",
      "时代烙印",
      "写实"
    ],
    "oneLine": "80年代尾声，两个从东北到深圳的倒爷兄弟，在金钱浪潮中一个成了首富，一个进了监狱。"
  },
  {
    "title": "爱丽丝的最后逃离",
    "url": "./movie-1417.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻、惊悚、剧情",
    "tags": [
      "仿生人",
      "记忆植入",
      "觉醒",
      "反乌托邦"
    ],
    "oneLine": "仿生人爱丽丝发现自己已经是第37次被清除记忆，这次她决定逃向真实世界。"
  },
  {
    "title": "拳击少年",
    "url": "./movie-1418.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情/运动/家庭",
    "tags": [
      "单亲家庭",
      "校园霸凌",
      "热血逆袭",
      "温情催泪"
    ],
    "oneLine": "内向的少年被校园恶霸盯上，送外卖的拳击手父亲决定用拳头教会儿子什么是真正的勇气。"
  },
  {
    "title": "查理的生与死",
    "url": "./movie-1419.html",
    "cover": "./69.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻",
    "tags": [
      "灵魂",
      "家庭",
      "温情"
    ],
    "oneLine": "查理死后发现自己可以以灵魂形态参与家人的生活，但他只能出现在照片和镜子中。"
  },
  {
    "title": "爱的肢解",
    "url": "./movie-1420.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑, 惊悚",
    "tags": [
      "分尸",
      "爱情",
      "跟踪狂",
      "反转"
    ],
    "oneLine": "跟踪狂被杀后分尸，但当警察拼回尸体时，发现死者竟是跟踪狂以为自己爱着的那个女人。"
  },
  {
    "title": "好莱坞食堂",
    "url": "./movie-1421.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情 / 群像",
    "tags": [
      "深夜食堂风",
      "娱乐圈内幕",
      "温情治愈"
    ],
    "oneLine": "好莱坞唯一凌晨三点还营业的破食堂，服务员是过气童星，厨师是怀才不遇的编剧，客人全是怪咖。"
  },
  {
    "title": "极乐空间",
    "url": "./movie-1422.html",
    "cover": "./72.jpg",
    "year": "2013",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，动作",
    "tags": [
      "太空",
      "贫富",
      "机甲",
      "反乌托邦",
      "硬核"
    ],
    "oneLine": "穷人在辐射废土等死，富人飘在太空享受医疗舱，一个工人偷了最高权限卡。"
  },
  {
    "title": "恶魔印记",
    "url": "./movie-1423.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "恐怖悬疑",
    "tags": [
      "驱魔",
      "民俗",
      "诅咒",
      "反转"
    ],
    "oneLine": "神父在一具尸体上发现了七种不同的恶魔印记，其中一种来自未出生者。"
  },
  {
    "title": "浴血黑帮",
    "url": "./movie-1424.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "犯罪，历史，动作",
    "tags": [
      "伯明翰",
      "剃刀党",
      "禁酒令",
      "爱尔兰共和军",
      "家族"
    ],
    "oneLine": "1920年代伯明翰，剃刀党家族遭遇新对手——一群从一战归来、比他更疯的自家退伍士兵。"
  },
  {
    "title": "加油，法国队！",
    "url": "./movie-1425.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 运动",
    "tags": [
      "足球",
      "励志",
      "草根逆袭",
      "法式幽默"
    ],
    "oneLine": "一支由快递员、水管工和美甲师组成的社区足球队，竟然意外获得了参加国际业余世界杯的资格。"
  },
  {
    "title": "泳池怪诞",
    "url": "./movie-1426.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑心理",
    "tags": [
      "封闭空间",
      "幻觉",
      "夏日惊悚"
    ],
    "oneLine": "一个废弃度假村的泳池里，每晚都会浮出不同年代的溺亡者遗物，且只有主角看得见。"
  },
  {
    "title": "同事三分亲粤语",
    "url": "./movie-1427.html",
    "cover": "./77.jpg",
    "year": "2007",
    "region": "香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 都市 / 情景剧",
    "tags": [
      "办公室政治",
      "处境喜剧",
      "港式幽默"
    ],
    "oneLine": "在一间广告公司里，同事间的三分情谊，总被四分利益、五分八卦搅得一团糟。"
  },
  {
    "title": "名侦探柯南国语版",
    "url": "./movie-1428.html",
    "cover": "./78.jpg",
    "year": "1999",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画 / 推理 / 悬疑",
    "tags": [
      "国配",
      "童年经典",
      "单元探案",
      "黑衣组织"
    ],
    "oneLine": "变成小学生的工藤新一用蝴蝶结变声器揭开连环密室杀人案的惊人真相。"
  },
  {
    "title": "失业风暴",
    "url": "./movie-1429.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 现实",
    "tags": [
      "中年危机",
      "大厂裁员",
      "外卖骑手",
      "家庭责任",
      "现实主义"
    ],
    "oneLine": "42岁的互联网总监被裁后，瞒着家人送外卖，却在系统里遇到了给自己打差评的女儿。"
  },
  {
    "title": "魔法圣婴",
    "url": "./movie-1430.html",
    "cover": "./80.jpg",
    "year": "1993",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 奇幻, 悬疑",
    "tags": [
      "邪典",
      "宗教隐喻",
      "超现实",
      "政治寓言",
      "争议之作"
    ],
    "oneLine": "一个永远长不大的圣婴，成了各方势力争夺的信仰工具，却忘了它本身只是一个孩子。"
  },
  {
    "title": "老公们的私房钱",
    "url": "./movie-1431.html",
    "cover": "./81.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "婚姻",
      "金钱",
      "信任",
      "搞笑",
      "都市"
    ],
    "oneLine": "三个闺蜜意外发现各自的老公都藏了巨额私房钱，于是组成“反私房钱联盟”，与老公们展开一场啼笑皆非的智力大战。"
  },
  {
    "title": "精神错乱",
    "url": "./movie-1432.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚、心理、公路",
    "tags": [
      "路怒症",
      "公路追杀",
      "心理压迫",
      "社会焦虑"
    ],
    "oneLine": "一名女司机因早高峰按了前车喇叭，对方司机从此像幽灵一样，誓要毁掉她的一切。"
  },
  {
    "title": "星际迷航：31区",
    "url": "./movie-1433.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻、动作",
    "tags": [
      "星际间谍",
      "道德困境",
      "硬核科幻"
    ],
    "oneLine": "星际舰队秘密特务机构31区招募了一名来自平行宇宙的“反派”成员。"
  },
  {
    "title": "砖块街",
    "url": "./movie-1434.html",
    "cover": "./84.jpg",
    "year": "2011",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情， 犯罪， 悬疑",
    "tags": [
      "伦敦",
      "南亚裔",
      "黑帮",
      "家族"
    ],
    "oneLine": "伦敦砖块街孟加拉裔社区，一只“脏款行李箱”在三代人之间辗转，引发持续二十年的血腥仇杀。"
  },
  {
    "title": "瘟家妹",
    "url": "./movie-1435.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "马来西亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "民俗恐怖",
    "tags": [
      "降头",
      "家族诅咒",
      "华人禁忌",
      "女性复仇",
      "血腥"
    ],
    "oneLine": "被家族逐出的女儿二十年后再现身时，整个村子开始接连中邪死去。"
  },
  {
    "title": "野花香",
    "url": "./movie-1436.html",
    "cover": "./86.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情, 剧情, 文艺",
    "tags": [
      "新浪潮",
      "婚外情",
      "大澳渔村",
      "伦理困境"
    ],
    "oneLine": "八十年代大澳渔村，一名从城市返乡的女教师与有妇之夫的船匠相爱，引发全村道德审判。"
  },
  {
    "title": "武动天地",
    "url": "./movie-1437.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 奇幻",
    "tags": [
      "武术",
      "穿越",
      "元宇宙"
    ],
    "oneLine": "2046年，没落的武术世家传人进入元宇宙武林，发现历代宗师的数据都在里面“复活”了。"
  },
  {
    "title": "大海贼",
    "url": "./movie-1438.html",
    "cover": "./88.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 冒险 / 历史",
    "tags": [
      "海盗",
      "朝鲜时代",
      "宝藏",
      "海战"
    ],
    "oneLine": "朝鲜末年，一群流亡的海盗在海上捡到了一个失踪的皇家宝箱，同时引来了日本幕府和清廷水师的追杀。"
  },
  {
    "title": "卓娅因子",
    "url": "./movie-1439.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争 / 剧情 / 传记",
    "tags": [
      "二战",
      "女性英雄",
      "谍战",
      "心理惊悚"
    ],
    "oneLine": "卓娅被德军绞死的前一夜，一位德国审讯官试图通过心理侧写来解剖这位18岁女英雄的信念来源。"
  },
  {
    "title": "红色出租车",
    "url": "./movie-1440.html",
    "cover": "./90.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 黑色幽默 / 公路",
    "tags": [
      "出租车",
      "莫斯科",
      "夜行",
      "众生相"
    ],
    "oneLine": "一个莫斯科的夜晚，一辆红色出租车载过五个乘客，每一个都向他透露了一个关于“国家秘密”的碎片。"
  },
  {
    "title": "乌金血剑",
    "url": "./movie-1441.html",
    "cover": "./91.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "武侠 / 古装",
    "tags": [
      "铸剑",
      "复仇",
      "江湖恩怨",
      "经典改编"
    ],
    "oneLine": "一块天外陨铁，引来江湖血雨腥风；一把无上宝剑，注定父子两代悲歌。"
  },
  {
    "title": "妙婿向钱冲",
    "url": "./movie-1442.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "拜金主义",
      "乌龙相亲",
      "合家欢"
    ],
    "oneLine": "外卖小哥被错认成亿万富翁，被迫与拜金女相亲，为了圆谎不得不装下去，却发现对方也是假名媛。"
  },
  {
    "title": "欢乐人生",
    "url": "./movie-1443.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情， 家庭",
    "tags": [
      "老年再就业",
      "轻喜剧",
      "代际和解",
      "直播"
    ],
    "oneLine": "退休电工老赵误打误撞成为网红主播，却在流量漩涡中差点弄丢真正的“欢乐人生”。"
  },
  {
    "title": "心灵投手",
    "url": "./movie-1444.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 运动 / 家庭",
    "tags": [
      "棒球",
      "心理创伤",
      "父子关系",
      "励志"
    ],
    "oneLine": "一位因心理障碍而废掉投球天赋的棒球天才，在少年辅育院遇见了一个只有七秒记忆的男孩。"
  },
  {
    "title": "河南卫视 立夏奇遇记",
    "url": "./movie-1445.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集/综艺/短剧",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "奇幻， 历史， 文化",
    "tags": [
      "传统文化",
      "二十四节气",
      "穿越",
      "河南卫视"
    ],
    "oneLine": "一个在现代职场失意的年轻人，在立夏这天喝醉，醒来发现自己成了古代掌管“迎夏仪式”的礼官，必须在仪式出错前找到回去的方法。"
  },
  {
    "title": "女王旅途",
    "url": "./movie-1446.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情，喜剧",
    "tags": [
      "女性成长",
      "公路",
      "婚前旅行"
    ],
    "oneLine": "被悔婚的乖乖女独自踏上了原定的蜜月旅行，在巴黎和阿姆斯特丹找到了比新郎更珍贵的东西。"
  },
  {
    "title": "木乃伊之阿拉善传奇",
    "url": "./movie-1447.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "冒险 / 奇幻 / 动作",
    "tags": [
      "沙漠",
      "古墓",
      "诅咒",
      "西夏",
      "考古"
    ],
    "oneLine": "一支考古队在阿拉善沙漠发现西夏古墓，意外唤醒千年木乃伊及其守护灵兽。"
  },
  {
    "title": "人质危机",
    "url": "./movie-1448.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "密室谈判",
      "反转",
      "节奏紧凑",
      "单场景",
      "心理博弈"
    ],
    "oneLine": "谈判专家发现自己女儿混入了人质群，而绑匪的要求只有一个：让谈判专家说真话。"
  },
  {
    "title": "锁住的天空",
    "url": "./movie-1449.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国大陆 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 儿童 / 奇幻",
    "tags": [
      "封闭小区",
      "儿童视角",
      "隐喻",
      "自由"
    ],
    "oneLine": "一个高档小区里，孩子们发现头顶的天空被一道隐形锁链锁住了。"
  },
  {
    "title": "大嫂",
    "url": "./movie-1450.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪 / 女性",
    "tags": [
      "黑帮",
      "大嫂逆袭",
      "东北",
      "复仇",
      "人性"
    ],
    "oneLine": "老实巴交的东北大嫂为了找出杀害丈夫的真凶，假扮黑帮大嫂潜入仇家内部，却发现自己天生就是当老大的料。"
  },
  {
    "title": "致命录像带3：病毒",
    "url": "./movie-1451.html",
    "cover": "./101.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚 / 伪纪录",
    "tags": [
      "伪纪录片",
      "恐怖短片合集",
      "邪典",
      "实验影像",
      "第四墙崩坏"
    ],
    "oneLine": "一伙罪犯买下一台旧摄像机，发现里面的三卷录像带会播放出观看者最恐惧的私人噩梦，并且噩梦正在入侵现实。"
  },
  {
    "title": "共助",
    "url": "./movie-1452.html",
    "cover": "./102.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 剧情",
    "tags": [
      "南北韩",
      "刑警合作",
      "兄弟情",
      "追逃"
    ],
    "oneLine": "朝鲜刑警与韩国刑警被迫合作追捕脱北杀手，却发现彼此追的是同一个人，却为了不同的正义。"
  },
  {
    "title": "少女十五十六时",
    "url": "./movie-1453.html",
    "cover": "./103.jpg",
    "year": "1991",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "青春 / 爱情",
    "tags": [
      "校园",
      "初恋",
      "叛逆",
      "90年代",
      "友情"
    ],
    "oneLine": "1991年的香港，三个女校学生在毕业前约定，要在十六岁生日当天向暗恋对象告白。"
  },
  {
    "title": "追忆似水年华",
    "url": "./movie-1454.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "法国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "文艺, 剧情",
    "tags": [
      "意识流",
      "记忆",
      "爱情",
      "时间"
    ],
    "oneLine": "一位失忆老人靠品尝玛德琳蛋糕，逐渐重启了一段跨越半个世纪的禁忌恋情。"
  },
  {
    "title": "超级飞侠第十一季",
    "url": "./movie-1455.html",
    "cover": "./105.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画, 儿童, 冒险",
    "tags": [
      "益智",
      "乐迪",
      "环游世界",
      "解决问题"
    ],
    "oneLine": "乐迪和他的超级飞侠伙伴们继续环游世界，给小朋友们送包裹，顺便解决各种棘手的难题。"
  },
  {
    "title": "五味人生粤语",
    "url": "./movie-1456.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭",
    "tags": [
      "粤语原声",
      "茶餐厅",
      "街坊情",
      "时代变迁"
    ],
    "oneLine": "深水埗一家老字号茶餐厅面临拆迁，老板通过每一道菜谱笔记，串联起三代港人的五味人生。"
  },
  {
    "title": "电光火石",
    "url": "./movie-1457.html",
    "cover": "./107.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 犯罪",
    "tags": [
      "极速",
      "飞车",
      "双雄"
    ],
    "oneLine": "一个亡命飞车手与一个执着警察在午夜都市上演生死时速的终极对决。"
  },
  {
    "title": "大河之水",
    "url": "./movie-1458.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "灾难, 剧情",
    "tags": [
      "洪水",
      "村庄",
      "牺牲",
      "父子"
    ],
    "oneLine": "一场史无前例的洪水袭来，一辈子守护堤坝的老村长必须炸掉自己儿子的工厂泄洪。"
  },
  {
    "title": "金牌河东狮吼",
    "url": "./movie-1459.html",
    "cover": "./109.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧、古装、运动",
    "tags": [
      "古代拳击",
      "女权",
      "爆笑"
    ],
    "oneLine": "宋朝悍妇柳月娥发现丈夫偷偷参加地下拳赛，一气之下自己报名参赛，竟一路打进了全国总决赛。"
  },
  {
    "title": "幽谷",
    "url": "./movie-1460.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 山村惊悚",
    "tags": [
      "湘西赶尸",
      "山野奇谈",
      "姐妹情深"
    ],
    "oneLine": "为了寻找失踪十年的姐姐，都市白领回到湘西老家，却发现了山谷里能复制活人执念的吞噬者。"
  },
  {
    "title": "黑车玄疑",
    "url": "./movie-1461.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 犯罪, 惊悚",
    "tags": [
      "网约车",
      "密闭空间",
      "心理战"
    ],
    "oneLine": "深夜加班，她打了一辆黑色网约车，下车后发现自己落在了平行时空的同一座城市。"
  },
  {
    "title": "营生",
    "url": "./movie-1462.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "文艺剧情",
    "tags": [
      "下岗潮",
      "小人物",
      "方言电影",
      "生存哲学"
    ],
    "oneLine": "北方小城，四个下岗女工为了生计合开了一家“男性情感陪护”工作室，却意外治愈了整座城市孤独的男人。"
  },
  {
    "title": "婚姻风暴",
    "url": "./movie-1463.html",
    "cover": "./113.jpg",
    "year": "2018",
    "region": "瑞典",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "剧情、家庭、心理",
    "tags": [
      "北欧婚姻",
      "离婚官司",
      "子女抚养权",
      "心理博弈",
      "冷峻写实"
    ],
    "oneLine": "他们曾经是模范夫妻，离婚时却为了一个儿童马桶互相揭短，把彼此撕成了碎片。"
  },
  {
    "title": "天生有福",
    "url": "./movie-1464.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 剧情 / 家庭",
    "tags": [
      "小人物",
      "港式幽默",
      "乐观精神"
    ],
    "oneLine": "一个天生拥有“锦鲤体质”却毫不知情的便利店店员，总是在不经意间让身边的人化险为夷。"
  },
  {
    "title": "龙门驿站之生死阁",
    "url": "./movie-1465.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "武侠, 悬疑",
    "tags": [
      "江湖",
      "密室",
      "复仇",
      "反转",
      "动作设计"
    ],
    "oneLine": "龙门驿站旁突然出现一座生死阁，进去的江湖豪杰再无音讯，老板娘被迫重出江湖。"
  },
  {
    "title": "美人鱼之海盗来袭",
    "url": "./movie-1466.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻 / 冒险",
    "tags": [
      "海盗",
      "美人鱼",
      "海洋环保"
    ],
    "oneLine": "加勒比海盗船长意外救了一条美人鱼，她答应带他寻找海底宝藏，但宝藏是活的。"
  },
  {
    "title": "如来神掌2020",
    "url": "./movie-1467.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 奇幻, 武侠",
    "tags": [
      "赛博朋克",
      "功夫",
      "特效大片",
      "重生"
    ],
    "oneLine": "在反重力芯片统治世界的新香港，外卖小哥意外捡到失传百年的如来神掌芯片卡。"
  },
  {
    "title": "茶花女遗事",
    "url": "./movie-1468.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情, 剧情, 历史",
    "tags": [
      "民国",
      "名妓",
      "翻译文学",
      "错位"
    ],
    "oneLine": "民国时期，一名翻译小仲马《茶花女》的落魄书生，发现自己爱上了书中的女主角。"
  },
  {
    "title": "能言善辩的农民",
    "url": "./movie-1469.html",
    "cover": "./119.jpg",
    "year": "1965",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "戏曲， 剧情",
    "tags": [
      "黑白电影",
      "农村题材",
      "聪明人",
      "阶级斗争"
    ],
    "oneLine": "一个普通农民凭借三寸不烂之舌，在土改工作中智斗地主，为乡亲们讨回公道。"
  },
  {
    "title": "卖身契",
    "url": "./movie-1470.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 黑色喜剧",
    "tags": [
      "黑色幽默",
      "职场",
      "灵魂契约",
      "反乌托邦",
      "打工人"
    ],
    "oneLine": "穷困程序员为救妹妹签下“卖身契”，却发现公司要买走的不仅是他的时间，还有他的梦境。"
  },
  {
    "title": "哥特式杀手",
    "url": "./movie-1471.html",
    "cover": "./121.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 动作",
    "tags": [
      "哥特美学",
      "复仇",
      "杀手",
      "吸血鬼元素",
      "暗黑"
    ],
    "oneLine": "一名哥特风女杀手在猎杀黑帮时，发现自己猎物的心脏里都藏着一种黑色玫瑰的种子。"
  },
  {
    "title": "偷心俏冤家",
    "url": "./movie-1472.html",
    "cover": "./122.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "爱情 / 喜剧 / 悬疑",
    "tags": [
      "泰式甜剧",
      "假戏真做",
      "商业间谍",
      "遗产谜案",
      "反套路"
    ],
    "oneLine": "为争夺祖母遗产，假情侣必须“偷走”对方的心，却先偷到了谋杀案证据。"
  },
  {
    "title": "蛇蟒星际",
    "url": "./movie-1473.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 冒险",
    "tags": [
      "太空",
      "基因",
      "蛇形生物",
      "探险",
      "史诗"
    ],
    "oneLine": "人类殖民外星，却唤醒了一种古老如神明的蛇形星际生物，它以吞噬星球为食。"
  },
  {
    "title": "犹太狮子",
    "url": "./movie-1474.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "历史剧情",
    "tags": [
      "二战",
      "犹太",
      "复仇",
      "真实改编",
      "抗争"
    ],
    "oneLine": "二战期间，一群幸存的犹太拳击手组建秘密地下抵抗组织，在纳粹眼皮底下展开了一场又一场暗杀。"
  },
  {
    "title": "非常德教室",
    "url": "./movie-1475.html",
    "cover": "./125.jpg",
    "year": "2013",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 教育",
    "tags": [
      "另类教学",
      "师生对抗",
      "思辨",
      "实验"
    ],
    "oneLine": "一名激进的新老师在一所问题学校推行“绝对自由”实验，教室成了人性善恶的斗兽场。"
  },
  {
    "title": "生葬惊魂",
    "url": "./movie-1476.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖",
    "tags": [
      "活埋",
      "心理惊悚",
      "密室逃脱",
      "反转"
    ],
    "oneLine": "醒来时她发现自己被钉在棺材里，手机信号另一端却传来凶手现场的实时直播。"
  },
  {
    "title": "一笑随歌",
    "url": "./movie-1477.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装, 爱情, 战争",
    "tags": [
      "将军",
      "女射手",
      "宿敌相爱",
      "权谋"
    ],
    "oneLine": "敌军女将一箭射穿他的帅旗，他却笑着将那支箭收藏为定情信物。"
  },
  {
    "title": "狱蝶2009",
    "url": "./movie-1478.html",
    "cover": "./128.jpg",
    "year": "2009",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑惊悚",
    "tags": [
      "女子监狱",
      "灵异",
      "复仇",
      "蝴蝶意象",
      "密室"
    ],
    "oneLine": "一座废弃女子监狱的旧址上建起了高级公寓，住户们开始梦到同一个女人——她后背纹有一只蓝色闪蝶。"
  },
  {
    "title": "借王#东京电视台",
    "url": "./movie-1479.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情 / 金融",
    "tags": [
      "高利贷",
      "电视台内幕",
      "双面人生"
    ],
    "oneLine": "白天是东京电视台王牌制作人，夜晚是冷血“借王”，他用高利贷操控艺人，为节目制造惊人爆点。"
  },
  {
    "title": "谋杀阿霍伊！",
    "url": "./movie-1480.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑喜剧",
    "tags": [
      "游轮",
      "密室",
      "英式幽默",
      "侦探"
    ],
    "oneLine": "地中海游轮上发生命案，六个乘客全是退休侦探。"
  },
  {
    "title": "金猪玉叶",
    "url": "./movie-1481.html",
    "cover": "./131.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧、奇幻、都市",
    "tags": [
      "许愿",
      "招财",
      "反内卷",
      "好运爆棚"
    ],
    "oneLine": "社畜捡到一只会说话的金猪存钱罐，每许一个愿望就要社死一次。"
  },
  {
    "title": "大卫·林奇：艺术人生",
    "url": "./movie-1482.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录 / 传记",
    "tags": [
      "导演传记",
      "超现实主义",
      "创作幕后",
      "深度访谈"
    ],
    "oneLine": "林奇生前最后一部纪录片，他亲自讲述自己每一部作品的梦境源头，并首次公开了那个从未被拍出的“终极剧本”。"
  },
  {
    "title": "转瞬即逝",
    "url": "./movie-1483.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时间轮回",
      "相遇",
      "遗憾"
    ],
    "oneLine": "女孩发现每次与暗恋男生对视，世界就会陷入十分钟的时间静止，但静止结束时对方会失忆。"
  },
  {
    "title": "美女与猎犬",
    "url": "./movie-1484.html",
    "cover": "./134.jpg",
    "year": "2019",
    "region": "突尼斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情惊悚",
    "tags": [
      "女性困境",
      "实时叙事",
      "社会暴力",
      "长镜头",
      "真实改编"
    ],
    "oneLine": "一名被警察性侵的女大学生在一天之内辗转多个机构申诉，每个地方都把她当成“猎犬”而非受害者。"
  },
  {
    "title": "星溪的三次奇遇",
    "url": "./movie-1485.html",
    "cover": "./135.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 奇幻",
    "tags": [
      "平行宇宙",
      "抉择",
      "诗意现实主义"
    ],
    "oneLine": "一位迷路的少女在三个平行宇宙中遇到了同一个男孩，却走向三种截然不同的结局。"
  },
  {
    "title": "天天向上2012",
    "url": "./movie-1486.html",
    "cover": "./136.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "综艺/电视节目",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "脱口秀、文化、礼仪",
    "tags": [
      "怀旧",
      "中华礼仪",
      "公知",
      "黄金时代"
    ],
    "oneLine": "回望2012年，那是电视综艺的黄金年代，一群热血青年在嬉笑怒骂中传播中华文化之美。"
  },
  {
    "title": "节日的准备",
    "url": "./movie-1487.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情、家庭",
    "tags": [
      "春节",
      "婆媳关系",
      "主妇压力",
      "女性觉醒",
      "黑色幽默"
    ],
    "oneLine": "儿媳为婆家春节宴席连续忙了三天三夜，第四天她将所有菜肴倒进了垃圾桶。"
  },
  {
    "title": "如果历史是一群喵第三季",
    "url": "./movie-1488.html",
    "cover": "./138.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集 / 动画",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "历史 / 科普 / 喜剧",
    "tags": [
      "萌系",
      "喵星人",
      "历史改编",
      "泡面番"
    ],
    "oneLine": "一群毛茸茸的猫咪化身历史人物，用轻松搞笑的画风演绎隋唐时期的英雄故事。"
  },
  {
    "title": "米小圈上学记2",
    "url": "./movie-1489.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "儿童 / 喜剧 / 家庭",
    "tags": [
      "校园",
      "成长",
      "幽默",
      "日记体"
    ],
    "oneLine": "三年级生米小圈升入高年级，却在新班级遇到了最强劲的“老对头”。"
  },
  {
    "title": "错结良缘粤语",
    "url": "./movie-1490.html",
    "cover": "./140.jpg",
    "year": "1999",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧，爱情",
    "tags": [
      "互换身份",
      "市井生活",
      "港风",
      "乌龙"
    ],
    "oneLine": "一个是千金大小姐，一个是庙街卖鱼妹，一场车祸让她们互换了人生和未婚夫。"
  },
  {
    "title": "灭罪先锋粤语",
    "url": "./movie-1491.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧 (剧集)",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "动作 / 悬疑 / 警匪",
    "tags": [
      "港剧复兴",
      "双雄对峙",
      "硬核动作"
    ],
    "oneLine": "重案组高级督察与鉴证科鬼才因一桩连环杀人案被迫联手，却不知对方可能就是自己要抓的人。"
  },
  {
    "title": "飞向星星的你",
    "url": "./movie-1492.html",
    "cover": "./142.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "科幻 / 爱情 / 青春",
    "tags": [
      "航天",
      "高概念爱情",
      "平行宇宙",
      "双向奔赴",
      "催泪"
    ],
    "oneLine": "航天工程师与失忆女宇航员在平行宇宙中，用“引力波留言”展开一场穿越时间线的告白。"
  },
  {
    "title": "蒙梭罗夫人",
    "url": "./movie-1493.html",
    "cover": "./143.jpg",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史 / 剧情",
    "tags": [
      "宫廷",
      "法国文艺复兴",
      "权力斗争",
      "大仲马"
    ],
    "oneLine": "大仲马同名经典改编，聚焦法国宫廷中蒙梭罗夫人的爱情与政治博弈，揭示王朝倾覆前的暗流。"
  },
  {
    "title": "孔雀王子",
    "url": "./movie-1494.html",
    "cover": "./144.jpg",
    "year": "1988",
    "region": "日本 / 中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "奇幻, 动作",
    "tags": [
      "神魔",
      "西藏",
      "港日合拍"
    ],
    "oneLine": "沉睡千年的孔雀王子被唤醒，他既是毁灭世界的魔，也是拯救世界的佛。"
  },
  {
    "title": "小小的愿望",
    "url": "./movie-1495.html",
    "cover": "./145.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 剧情",
    "tags": [
      "绝症",
      "青春",
      "兄弟情",
      "愿望",
      "搞笑"
    ],
    "oneLine": "身患绝症的高中生想在死前“破处”，两个死党开始了啼笑皆非的圆梦之旅。"
  },
  {
    "title": "小鸡快跑",
    "url": "./movie-1496.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "美国 / 英国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": [
      "定格动画",
      "农场",
      "越狱",
      "鸡",
      "续集"
    ],
    "oneLine": "金杰和洛奇在“鸡天堂”过上安稳日子，却发现这个“天堂”其实是精饲料配给的慢性屠宰场。"
  },
  {
    "title": "打劫阴司路",
    "url": "./movie-1497.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "tags": [
      "冥界",
      "劫匪",
      "鬼差",
      "乌龙"
    ],
    "oneLine": "四个笨贼打劫失败意外死亡，到了阴间才发现自己死前抢的是冥币。"
  },
  {
    "title": "血腥死亡营4",
    "url": "./movie-1498.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖， 惊悚",
    "tags": [
      "杀人狂",
      "血腥",
      "讽刺",
      "元叙事"
    ],
    "oneLine": "一群网红来到水晶湖营地直播解密，却撞见了正在拍《血腥死亡营4》的剧组，而真正的杀人狂在看着他们。"
  },
  {
    "title": "身心灵清洁师",
    "url": "./movie-1499.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "惊悚 / 剧情",
    "tags": [
      "灵异",
      "心理",
      "清洁工",
      "宗教仪式"
    ],
    "oneLine": "专门清理命案现场的清洁工，发现每个死者背后都跟着一团无法清除的“脏东西”。"
  },
  {
    "title": "乘著波浪的爱情",
    "url": "./movie-1500.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情 / 治愈 / 音乐",
    "tags": [
      "冲浪",
      "音乐人",
      "小渔村",
      "双向救赎",
      "夏日限定"
    ],
    "oneLine": "失意的古典钢琴家逃到海边渔村，遇见了用冲浪板作琴弓的神秘女孩。"
  },
  {
    "title": "倒计时2025",
    "url": "./movie-1501.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 悬疑",
    "tags": [
      "末日",
      "时间循环",
      "阴谋论",
      "烧脑"
    ],
    "oneLine": "世界上空突然出现一个巨大的倒计时，指向2025年冬至，而阻止它的唯一线索藏在每个主角的噩梦里。"
  },
  {
    "title": "勿忘我1982",
    "url": "./movie-1502.html",
    "cover": "./2.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情 / 奇幻",
    "tags": [
      "时空回溯",
      "阿尔茨海默",
      "唯美悲剧",
      "记忆修复"
    ],
    "oneLine": "患有早发性阿尔茨海默症的画家，每次画下爱人肖像后，都会彻底忘记他。"
  },
  {
    "title": "皇家战士",
    "url": "./movie-1503.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "动作、历史、宫廷",
    "tags": [
      "泰拳",
      "宫廷阴谋",
      "保镖",
      "复仇"
    ],
    "oneLine": "国王的御前侍卫统领失忆后沦为奴隶，在角斗场重拾记忆誓死护主。"
  },
  {
    "title": "观音山",
    "url": "./movie-1504.html",
    "cover": "./4.jpg",
    "year": "2011",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 文艺",
    "tags": [
      "废墟美学",
      "代际和解",
      "山区公路",
      "存在主义"
    ],
    "oneLine": "三个叛逆的年轻人在山区小站收留了一位绝望的京剧老师，却意外揭开了山体深处隐藏的惊天秘密。"
  },
  {
    "title": "飞起来吧蝴蝶",
    "url": "./movie-1505.html",
    "cover": "./5.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "剧情 / 励志",
    "tags": [
      "理发店",
      "老中青三代",
      "治愈",
      "职场"
    ],
    "oneLine": "一家即将倒闭的老式理发店里，脾气古怪的七旬老板、落魄的中年理发师和叛逆的实习少女，试图重塑人生。"
  },
  {
    "title": "舞出我人生2：街舞",
    "url": "./movie-1506.html",
    "cover": "./6.jpg",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "音乐, 爱情, 剧情",
    "tags": [
      "街舞",
      "芭蕾",
      "底层逆袭",
      "燃"
    ],
    "oneLine": "马里兰艺术学院最叛逆的芭蕾系学生，带领一帮街头舞者挑战全校最高荣誉。"
  },
  {
    "title": "我知道",
    "url": "./movie-1507.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑、心理、剧情",
    "tags": [
      "校园霸凌",
      "目击者",
      "失语",
      "审判"
    ],
    "oneLine": "全班都知道是谁逼死了那个女生，但在法庭上，所有人的证词都对不上。"
  },
  {
    "title": "一万公里的爱情",
    "url": "./movie-1508.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情、公路",
    "tags": [
      "自驾",
      "极光",
      "绝症",
      "求婚"
    ],
    "oneLine": "男友被确诊只剩半年寿命，女友决定开车从上海送他到北极圈看一次极光。"
  },
  {
    "title": "无人入眠",
    "url": "./movie-1509.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑、超自然、密室",
    "tags": [
      "失眠症",
      "集体幻觉",
      "公寓楼",
      "心理恐怖"
    ],
    "oneLine": "一栋老旧公寓楼的住户集体患上致死性失眠症，只要睡着就会做同一个噩梦，但醒来会发现梦里的伤口真实存在。"
  },
  {
    "title": "梅汉林：头号公敌",
    "url": "./movie-1510.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "犯罪 / 传记",
    "tags": [
      "黑帮",
      "70年代",
      "真实改编"
    ],
    "oneLine": "法国70年代头号罪犯梅汉林的最后三年：越狱、绑架、成为全民偶像。"
  },
  {
    "title": "冠军的心",
    "url": "./movie-1511.html",
    "cover": "./11.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 运动",
    "tags": [
      "拳击",
      "退役",
      "大叔",
      "守护",
      "热血"
    ],
    "oneLine": "退役拳王在拳馆当保洁员，为了给素不相识的白血病女孩筹钱，他重返地下拳场。"
  },
  {
    "title": "明天、我会成为谁的女友",
    "url": "./movie-1512.html",
    "cover": "./12.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "社会伦理",
    "tags": [
      "出租女友",
      "女性群像",
      "现实",
      "孤独",
      "选择"
    ],
    "oneLine": "四个靠“出租”换取温暖的女人，在谎言与真心之间，活成了彼此的光。"
  },
  {
    "title": "魔鬼记号",
    "url": "./movie-1513.html",
    "cover": "./13.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑, 恐怖",
    "tags": [
      "邪教",
      "诅咒",
      "连环杀人",
      "宗教符号",
      "双时间线"
    ],
    "oneLine": "2026年首尔出现连环命案，死者身上都烙着中世纪巫术中的“魔鬼记号”，与1999年一桩未解悬案惊人相似。"
  },
  {
    "title": "青春之马",
    "url": "./movie-1514.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 运动 / 青春",
    "tags": [
      "马术",
      "高考",
      "小镇青年",
      "逆袭",
      "梦想"
    ],
    "oneLine": "内蒙古草原上的高考落榜生，为了不回乡放羊，加入了一支由混混、会计和厨师组成的“疯子马球队”。"
  },
  {
    "title": "死魂盒",
    "url": "./movie-1515.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖",
    "tags": [
      "咒物",
      "民俗恐怖",
      "盒中鬼",
      "代价"
    ],
    "oneLine": "古董商低价收来一个雕花木盒，每打开一次，家里就死一个人。"
  },
  {
    "title": "半镜",
    "url": "./movie-1516.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑 / 恐怖",
    "tags": [
      "双胞胎",
      "身份互换",
      "心理惊悚",
      "镜子"
    ],
    "oneLine": "姐姐死后，她的双胞胎妹妹搬进了她的房间，却发现镜子里的倒影有时候不是自己。"
  },
  {
    "title": "预兆散步的侵略者电影版",
    "url": "./movie-1517.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "科幻, 恐怖, 悬疑",
    "tags": [
      "外星入侵",
      "家庭主妇",
      "预知",
      "缓慢恐惧"
    ],
    "oneLine": "一名家庭主妇发现丈夫每天傍晚出门“散步”后，附近就有人离奇失踪，而她开始梦见丈夫变成外星人的模样。"
  },
  {
    "title": "猎战",
    "url": "./movie-1518.html",
    "cover": "./18.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争、动作、恐怖",
    "tags": [
      "特种部队",
      "纳粹僵尸",
      "二战",
      "血浆"
    ],
    "oneLine": "二战末期，一队美国特种兵深入黑森林，发现纳粹正在用神秘学制造不死士兵。"
  },
  {
    "title": "法丽达的两千首歌",
    "url": "./movie-1519.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "土耳其 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 音乐 / 传记",
    "tags": [
      "民谣",
      "遗愿",
      "数字遗产",
      "母女",
      "治愈"
    ],
    "oneLine": "母亲留下两千首未公开的歌谣，女儿用 AI 技术让她在元宇宙“复活”开唱。"
  },
  {
    "title": "未完的琴曲",
    "url": "./movie-1520.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情， 音乐",
    "tags": [
      "遗作",
      "师徒",
      "治愈"
    ],
    "oneLine": "钢琴家猝死后留下半首曲谱，女儿靠一本错印的乐理书，与哑巴调琴师一起破译遗言。"
  },
  {
    "title": "警察遇到兵",
    "url": "./movie-1521.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "刑侦 / 喜剧 / 历史",
    "tags": [
      "民国",
      "军阀",
      "探案",
      "反差萌",
      "搭档"
    ],
    "oneLine": "民国小片警被迫和一群退出军阀的老兵搭档办案，结果土方法和老经验屡破奇案。"
  },
  {
    "title": "僵尸城市",
    "url": "./movie-1522.html",
    "cover": "./22.jpg",
    "year": "1980",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖",
    "tags": [
      "丧尸",
      "邪教",
      "80年代",
      "都市",
      "血腥"
    ],
    "oneLine": "一座新城的地下施工唤醒了十六世纪被活埋的宗教狂热分子，他们信仰的不是上帝，而是集体腐烂。"
  },
  {
    "title": "能救爱伦",
    "url": "./movie-1523.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚, 科幻, 心理",
    "tags": [
      "时间循环",
      "拯救亲人",
      "道德困境",
      "高概念"
    ],
    "oneLine": "工程师发明了回到过去的装置，但他只能回去一次，而他的女儿有七种不同的死法。"
  },
  {
    "title": "财神",
    "url": "./movie-1524.html",
    "cover": "./24.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 奇幻, 古装",
    "tags": [
      "香港老片",
      "神仙下凡",
      "拜金讽刺",
      "笑中带泪",
      "周氏风格"
    ],
    "oneLine": "财神爷因在天庭打瞌睡错发了财运，被贬下凡间亲身体验穷人的苦日子，却意外收获了真情。"
  },
  {
    "title": "北·南",
    "url": "./movie-1525.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 动作",
    "tags": [
      "南北韩",
      "间谍",
      "互换身份",
      "双雄"
    ],
    "oneLine": "北方特工和南方情报员在一次意外中互换身体，他们必须在48小时内搞砸对方的任务以求活命。"
  },
  {
    "title": "我的鲛人弟弟",
    "url": "./movie-1526.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国",
    "type": "网络剧 (24集)",
    "typeGroup": "other",
    "regionGroup": "mainland",
    "genre": "奇幻 / 爱情 / 古装",
    "tags": [
      "人鱼恋",
      "姐弟恋",
      "轻喜甜宠"
    ],
    "oneLine": "被家族赶出的海洋学女博士在海边捡到一个失忆的鲛人少年，对方醒来就叫她“姐姐”。"
  },
  {
    "title": "精灵旅社4：变身大冒险",
    "url": "./movie-1527.html",
    "cover": "./27.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 喜剧 / 奇幻",
    "tags": [
      "德古拉",
      "女婿",
      "互换身体",
      "怪物",
      "狂欢"
    ],
    "oneLine": "德古拉与人类女婿意外互换身体，一个变成虚弱人类，一个变成失控怪物，必须找回变身戒指。"
  },
  {
    "title": "阿汤的火星任务",
    "url": "./movie-1528.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻, 冒险",
    "tags": [
      "火星",
      "硬科幻",
      "宇航员",
      "自救"
    ],
    "oneLine": "宇航员阿汤因事故被遗弃在火星，他必须利用过期土豆和人类排泄物活到救援到来。"
  },
  {
    "title": "狗头金",
    "url": "./movie-1529.html",
    "cover": "./29.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "西部, 犯罪",
    "tags": [
      "淘金",
      "荒野求生",
      "贪婪"
    ],
    "oneLine": "西北戈壁，三个淘金客挖到一块价值千万的狗头金，却在走出沙漠的路上一个接一个死去。"
  },
  {
    "title": "被骗到世界末日",
    "url": "./movie-1530.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚, 悬疑, 犯罪",
    "tags": [
      "电信诈骗",
      "缅甸",
      "逃亡",
      "真实事件改编"
    ],
    "oneLine": "三个中国人被高薪招聘骗到缅甸诈骗园区，在“业绩不达标就卖器官”的威胁下策划大逃亡。"
  },
  {
    "title": "手铐2024",
    "url": "./movie-1531.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": [
      "警匪",
      "身份互换",
      "密室",
      "道德困境"
    ],
    "oneLine": "一名警察和一名犯人因车祸被困荒郊，手铐锁在一起，却遭遇真正的连环杀手追杀。"
  },
  {
    "title": "远看是蔚蓝的春天",
    "url": "./movie-1532.html",
    "cover": "./32.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "校园青春",
    "tags": [
      "借贷风波",
      "成年礼",
      "心理创伤"
    ],
    "oneLine": "名牌大学里看似风光的大学生，为了维持体面的生活深陷高利贷陷阱，有人选择出卖灵魂，有人选择出卖身体。"
  },
  {
    "title": "宠物情人",
    "url": "./movie-1533.html",
    "cover": "./33.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情 / 喜剧",
    "tags": [
      "年下",
      "同居",
      "漫改",
      "萌系",
      "治愈"
    ],
    "oneLine": "女白领在公寓门口捡到一个失忆美少年，他自称是“被遗弃的宠物”，请求她收养自己。"
  },
  {
    "title": "全世界的国王",
    "url": "./movie-1534.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 冒险",
    "tags": [
      "拿破仑",
      "滑铁卢",
      "架空历史",
      "政治阴谋"
    ],
    "oneLine": "滑铁卢战败后，拿破仑没有流放，而是被囚禁在巴黎地下的一处豪华宫殿，全世界的权贵花钱来看“笼中的皇帝”。"
  },
  {
    "title": "打骗行动之你被盯上了",
    "url": "./movie-1535.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "反诈",
      "单元剧",
      "卧底",
      "智商对决"
    ],
    "oneLine": "一名前诈骗高手变身警方顾问，用“骗子的思维”去骗骗子，但每个案子都和他失踪的女儿有关。"
  },
  {
    "title": "大理寺日志第二季",
    "url": "./movie-1536.html",
    "cover": "./36.jpg",
    "year": "2022",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画历史",
    "tags": [
      "古装悬疑",
      "断案",
      "搞笑与热血并存"
    ],
    "oneLine": "猫爷少卿带领大理寺众人在武周时期的长安，一边破案一边对抗来自神秘组织的暗杀。"
  },
  {
    "title": "万古剑帝",
    "url": "./movie-1537.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装，奇幻，仙侠",
    "tags": [
      "修仙",
      "重生",
      "逆袭",
      "剑道",
      "天才"
    ],
    "oneLine": "万古第一剑帝渡劫失败，重生为被家族唾弃的废柴少年，这一世他要剑指苍穹，改写所有遗憾。"
  },
  {
    "title": "在杰克逊高地",
    "url": "./movie-1538.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "移民",
      "纽约",
      "群像",
      "出租车"
    ],
    "oneLine": "纽约皇后区杰克逊高地的一个出租车调度站，来自八个不同国家的移民司机，为了争夺一张能改变命运的绿卡，开始互相撕咬。"
  },
  {
    "title": "宁静的夏天",
    "url": "./movie-1539.html",
    "cover": "./39.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、家庭、文艺",
    "tags": [
      "乡村",
      "支教",
      "留守儿童",
      "夏天",
      "治愈"
    ],
    "oneLine": "一个从城市逃到宁夏山村的女大学生，被一群野孩子和一个老光棍“困”住，却意外找到了人生的方向。"
  },
  {
    "title": "嵩山武僧",
    "url": "./movie-1540.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 武侠",
    "tags": [
      "少林",
      "守护",
      "机车",
      "现代武侠",
      "复仇"
    ],
    "oneLine": "守护寺院的最后一个武僧，为了找回被盗的舍利子，骑上摩托车闯入了一个由地下黑拳统治的钢铁城市。"
  },
  {
    "title": "乌鸦与麻雀",
    "url": "./movie-1541.html",
    "cover": "./41.jpg",
    "year": "1949",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 喜剧, 历史",
    "tags": [
      "老上海",
      "小市民",
      "解放前夕",
      "群像",
      "黑色幽默"
    ],
    "oneLine": "上海一栋老洋房里，狡诈的国民党小官僚要强占房子，楼里几户小市民联手演了一出“智斗”。"
  },
  {
    "title": "爱情现状",
    "url": "./movie-1542.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 剧情 / 悬疑",
    "tags": [
      "都市情感",
      "不伦",
      "心理",
      "拼图叙事",
      "现实主义"
    ],
    "oneLine": "一对情侣分手后，分别向心理咨询师讲述了他们的爱情故事，但两人的版本竟在关键节点上完全不同。"
  },
  {
    "title": "贴着你心跳",
    "url": "./movie-1543.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 剧情",
    "tags": [
      "青梅竹马",
      "绝症",
      "遗愿清单",
      "治愈"
    ],
    "oneLine": "被通知只剩三个月生命的录音师，决定为暗恋十年的女孩录遍全世界的心跳声。"
  },
  {
    "title": "赌霸天下国语",
    "url": "./movie-1544.html",
    "cover": "./44.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情，动作，赌术",
    "tags": [
      "赌坛争霸",
      "兄弟情",
      "复仇",
      "国语配音",
      "经典港剧"
    ],
    "oneLine": "一对失散多年的兄弟，一个成为赌术天才，一个沦为底层混混，最终在赌桌上相认并对决。"
  },
  {
    "title": "反击第一季",
    "url": "./movie-1545.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "动作、悬疑、谍战",
    "tags": [
      "特工",
      "背叛",
      "黑拳",
      "复仇"
    ],
    "oneLine": "被MI6抛弃的退役特工为了寻找失踪的女儿，化名潜伏进地下黑拳组织，却发现这里正在贩卖特工的记忆。"
  },
  {
    "title": "亚特兰蒂斯",
    "url": "./movie-1546.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "科幻, 冒险",
    "tags": [
      "深海文明",
      "考古队",
      "未知生物",
      "政治阴谋",
      "高概念"
    ],
    "oneLine": "一支国际科考队在马里亚纳海沟发现活的亚特兰蒂斯人，而他们来自未来。"
  },
  {
    "title": "不是孤单一人2023",
    "url": "./movie-1547.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 奇幻 / 家庭",
    "tags": [
      "催泪",
      "人鬼情未了",
      "隔代亲",
      "治愈",
      "反向设定"
    ],
    "oneLine": "一个想自杀的失业青年发现，自己租的凶宅里住着五个等着超度的鬼魂，而他们唯一的愿望是看到他能好好活下去。"
  },
  {
    "title": "尘封往事",
    "url": "./movie-1548.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情，悬疑，家庭",
    "tags": [
      "相册",
      "秘密",
      "寻根",
      "旧时光",
      "和解"
    ],
    "oneLine": "父亲去世后，女儿从一本旧相册中发现了他曾是黑帮会计的秘密往事。"
  },
  {
    "title": "我落第了，但……",
    "url": "./movie-1549.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情, 青春",
    "tags": [
      "高考落榜",
      "补习班",
      "复读",
      "友谊",
      "人生选择"
    ],
    "oneLine": "五个高考落榜生在补习班相遇，他们用一年的时间证明：落榜不是人生的句号，而是分号。"
  },
  {
    "title": "转身的距离",
    "url": "./movie-1550.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "中年危机",
      "破镜重圆",
      "家庭温情",
      "治愈"
    ],
    "oneLine": "一对离婚多年的夫妻，为了患病的孩子不得不再次同居，却在摩擦中重新爱上了对方。"
  },
  {
    "title": "手铐情人",
    "url": "./movie-1551.html",
    "cover": "./51.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情 / 喜剧 / 犯罪",
    "tags": [
      "罗曼史",
      "警察与劫匪",
      "斯德哥尔摩反转",
      "公路片"
    ],
    "oneLine": "一名女警察在追捕盗贼时，两人却被同一副手铐锁住，被迫以“情侣”身份逃亡。"
  },
  {
    "title": "嗜血兄弟",
    "url": "./movie-1552.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "惊悚 / 犯罪",
    "tags": [
      "暴力",
      "反转",
      "兄弟情",
      "黑帮",
      "悬疑"
    ],
    "oneLine": "相依为命的杀手兄弟接到终极任务：杀死对方，只有一人能活。"
  },
  {
    "title": "筑梦2008",
    "url": "./movie-1553.html",
    "cover": "./53.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "纪录，体育",
    "tags": [
      "北京奥运",
      "鸟巢",
      "基建",
      "运动员",
      "七年记录"
    ],
    "oneLine": "历时七年追踪拍摄，从鸟巢建设者到体操小将，中国人的奥运梦如何一砖一瓦筑成。"
  },
  {
    "title": "性命交关",
    "url": "./movie-1554.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 医疗, 黑色幽默",
    "tags": [
      "医患关系",
      "荒诞",
      "多线叙事",
      "小成本"
    ],
    "oneLine": "一个被误诊的癌症患者、一个想自杀的绝症富豪、一个拿错报告的实习生，在医院天台组成“自救互助组”。"
  },
  {
    "title": "纽约变装祭",
    "url": "./movie-1555.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情 / 同性",
    "tags": [
      "变装皇后",
      "移民",
      "梦想",
      "地下文化",
      "友谊"
    ],
    "oneLine": "一名拉丁裔非法移民为了赢取奖金给母亲治病，闯入纽约最疯狂的变装皇后比赛。"
  },
  {
    "title": "男·色旅程",
    "url": "./movie-1556.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 同性 / 公路",
    "tags": [
      "单车旅行",
      "自我认同",
      "治愈",
      "友情以上"
    ],
    "oneLine": "两个因意外毁容而陷入人生低谷的男人，结伴骑摩托车穿越北海道，在绝美的风景中寻找破碎后的自己。"
  },
  {
    "title": "欧玛杀了我",
    "url": "./movie-1557.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑 / 剧情",
    "tags": [
      "庭审",
      "北非移民",
      "谎言",
      "法语片"
    ],
    "oneLine": "一名阿尔及利亚裔青年被指控杀害法国富商，唯一的证据是一句梦游般的呓语：“欧玛杀了我。”"
  },
  {
    "title": "波诺：救赎之路",
    "url": "./movie-1558.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记，音乐，剧情",
    "tags": [
      "U2",
      "真实事件",
      "艺人公益"
    ],
    "oneLine": "聚焦U2主唱波诺在2000年代初期，从摇滚巨星到全球人道主义倡导者身份转换背后不为人知的挣扎与牺牲。"
  },
  {
    "title": "戏子们：传闻操纵团",
    "url": "./movie-1559.html",
    "cover": "./59.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 历史, 悬疑",
    "tags": [
      "朝鲜王朝",
      "舆论操控",
      "底层反抗",
      "反套路"
    ],
    "oneLine": "五个被贵族当成“噪音”的民间戏子，用一场假新闻策动了整个朝鲜的民心。"
  },
  {
    "title": "终棘警探",
    "url": "./movie-1560.html",
    "cover": "./60.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "硬汉",
      "暴力美学",
      "反套路",
      "警匪"
    ],
    "oneLine": "被贬到边陲小镇的警探发现这里每年都会发生一模一样的意外死亡，而档案室已被烧毁。"
  },
  {
    "title": "如果德川家康成为总理大臣",
    "url": "./movie-1561.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "政治奇幻， 喜剧， 剧情",
    "tags": [
      "穿越",
      "历史人物",
      "现代政治",
      "幕府",
      "讽刺"
    ],
    "oneLine": "当战国时代的谋略家空降现代社会成为总理，他用关原战术整顿国会，用忍者情报系统瓦解丑闻。"
  },
  {
    "title": "抢钱抢妞暴走男",
    "url": "./movie-1562.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "亡命鸳鸯",
      "黑吃黑",
      "飙车"
    ],
    "oneLine": "一个被戴绿帽的保险员，一个渴望反叛的财阀千金，两人联手劫了黑帮的赌场金库。"
  },
  {
    "title": "莉亚的7重人生",
    "url": "./movie-1563.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 奇幻",
    "tags": [
      "平行人生",
      "少女",
      "选择困难"
    ],
    "oneLine": "18岁生日那天，莉亚获得了在7个平行宇宙中穿梭的能力，但她每用一次，就会忘记一条最珍贵的记忆。"
  },
  {
    "title": "不二土夫子",
    "url": "./movie-1564.html",
    "cover": "./64.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "冒险, 悬疑, 动作",
    "tags": [
      "盗墓",
      "民国",
      "师徒情深",
      "机关术"
    ],
    "oneLine": "民国乱世，自称“不二”的盗墓师徒在破解一座移动的古墓时，发现了关于长生不老的终极天机。"
  },
  {
    "title": "三日刺杀",
    "url": "./movie-1565.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 犯罪",
    "tags": [
      "特工",
      "限时",
      "父女",
      "救赎"
    ],
    "oneLine": "退休特工只剩三天寿命，却接到最后任务：刺杀头号目标，换回女儿的未来。"
  },
  {
    "title": "红色警探",
    "url": "./movie-1566.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "俄罗斯 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 悬疑",
    "tags": [
      "警匪",
      "冷战",
      "连环杀手",
      "双雄",
      "硬汉"
    ],
    "oneLine": "苏联解体前夕，一名克格勃硬汉与一名玩世不恭的FBI联手追捕横跨两国的连环杀手。"
  },
  {
    "title": "性爱狂想曲",
    "url": "./movie-1567.html",
    "cover": "./67.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "情色 / 喜剧 / 奇幻",
    "tags": [
      "荒诞",
      "欲望",
      "都市男女",
      "单元剧",
      "黑色幽默"
    ],
    "oneLine": "东京一家情趣用品店的店员，每晚都会进入客人的“性幻想”中，帮他们实现最羞耻的愿望。"
  },
  {
    "title": "保利娜",
    "url": "./movie-1568.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "法国 / 德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "犹太幸存者",
      "身份互换",
      "救赎"
    ],
    "oneLine": "奥斯维辛幸存者保利娜战后移居巴黎，却发现拯救自己性命的修女曾是纳粹集中营的守卫。"
  },
  {
    "title": "小小资产阶级",
    "url": "./movie-1569.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情喜剧",
    "tags": [
      "中产焦虑",
      "公寓楼",
      "邻里关系",
      "黑色幽默",
      "阶级讽刺"
    ],
    "oneLine": "一栋巴黎公寓里，五位中产邻居为了一个停车位，互相揭露出令人瞠目的秘密。"
  },
  {
    "title": "古戒奇谈",
    "url": "./movie-1570.html",
    "cover": "./70.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑, 惊悚, 奇幻",
    "tags": [
      "古董",
      "诅咒",
      "轮回",
      "民俗恐怖",
      "反转"
    ],
    "oneLine": "一场古董拍卖会上，一枚出土的战国玉戒让所有佩戴者接连离奇死亡，警方调查发现，这枚戒指似乎会回应人心底的恶念。"
  },
  {
    "title": "滚滚红尘",
    "url": "./movie-1571.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "年代 / 爱情",
    "tags": [
      "民国",
      "作家",
      "命运"
    ],
    "oneLine": "1940年代上海滩，一位当红女作家与情报员的爱情，在乱世中写就一出戏中戏。"
  },
  {
    "title": "第三秘密",
    "url": "./movie-1572.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "梵蒂冈",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "悬疑, 惊悚",
    "tags": [
      "宗教",
      "预言",
      "解密",
      "阴谋论"
    ],
    "oneLine": "法蒂玛圣母的三个预言被公开两个，第三个秘密在梵蒂冈地下密室中失踪，一位怀疑论记者着手调查。"
  },
  {
    "title": "冲击点",
    "url": "./movie-1573.html",
    "cover": "./73.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": [
      "地铁",
      "炸弹",
      "极限救援",
      "实时"
    ],
    "oneLine": "一列满载乘客的地铁被安放了磁性炸弹，一旦车速低于80公里，整列车就会爆炸。"
  },
  {
    "title": "歌舞青春：音乐剧集第一季",
    "url": "./movie-1574.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧， 爱情， 音乐",
    "tags": [
      "校园",
      "歌舞",
      "青春",
      "梦想",
      "翻拍"
    ],
    "oneLine": "为了纪念经典电影《歌舞青春》上映20周年，老校“东部高中”决定排演同名音乐剧，却引爆了一场全新的青春风暴。"
  },
  {
    "title": "廉政行动2014粤语",
    "url": "./movie-1575.html",
    "cover": "./75.jpg",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情, 犯罪",
    "tags": [
      "卧底",
      "反贪",
      "律政",
      "写实"
    ],
    "oneLine": "卧底探员在追查跨国贪腐案时，发现自己的上司竟是保护伞。"
  },
  {
    "title": "冲浪惊魂",
    "url": "./movie-1576.html",
    "cover": "./76.jpg",
    "year": "2021",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚 / 灾难",
    "tags": [
      "冲浪",
      "鲨鱼",
      "生存",
      "海上漂流"
    ],
    "oneLine": "三名冲浪爱好者被困在离岸一公里的礁石上，一头大白鲨在周围徘徊，而涨潮只剩两个小时。"
  },
  {
    "title": "宇宙天魔",
    "url": "./movie-1577.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻恐怖",
    "tags": [
      "太空",
      "吸血鬼",
      "免疫系统",
      "寄生"
    ],
    "oneLine": "宇航员带回的宇宙陨石中，沉睡着一群以“恐惧”为食的远古天魔。"
  },
  {
    "title": "卡美拉3 邪神觉醒",
    "url": "./movie-1578.html",
    "cover": "./78.jpg",
    "year": "1999",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "科幻，怪兽",
    "tags": [
      "卡美拉",
      "邪神",
      "少女通灵",
      "灾难"
    ],
    "oneLine": "卡美拉再度现身后，一名少女发现自己是古代邪神伊莉斯的人间容器，两大怪兽将在她体内对决。"
  },
  {
    "title": "指尖相触，恋恋不舍",
    "url": "./movie-1579.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 剧情",
    "tags": [
      "聋哑",
      "手语",
      "青春纯爱",
      "漫改",
      "治愈"
    ],
    "oneLine": "聋哑女孩遇到了一个愿意为她学手语的男孩，但男孩说：“我不是为了和你沟通，我是为了听清你沉默的声音。”"
  },
  {
    "title": "世贸中心",
    "url": "./movie-1580.html",
    "cover": "./80.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "历史 / 灾难 / 剧情",
    "tags": [
      "9",
      "11",
      "真实事件改编",
      "救援"
    ],
    "oneLine": "不是恐袭片，而是讲述两名被埋港警在废墟下互相唱歌撑过24小时的真实故事。"
  },
  {
    "title": "惹火女色狼",
    "url": "./movie-1581.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "情色",
      "反转",
      "女性复仇",
      "限制级"
    ],
    "oneLine": "三个男人同时收到神秘女子的约会邀请，赴约后发现这个女人竟是他们十年前性侵过的女同事。"
  },
  {
    "title": "少年泰坦出击大战少年泰坦",
    "url": "./movie-1582.html",
    "cover": "./82.jpg",
    "year": "2019",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 动作 / 科幻",
    "tags": [
      "超级英雄",
      "平行宇宙",
      "恶搞",
      "自黑",
      "粉丝向"
    ],
    "oneLine": "当逗比版的少年泰坦撞上严肃原版少年泰坦，两个宇宙必须联手拯救自己。"
  },
  {
    "title": "达令之罪",
    "url": "./movie-1583.html",
    "cover": "./83.jpg",
    "year": "2019",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "畸形人",
      "丛林",
      "复仇",
      "虐待",
      "极端生存"
    ],
    "oneLine": "一个被当作怪物养大的畸形女孩在逃离虐待后，用最原始的方式向文明社会发起血腥复仇。"
  },
  {
    "title": "中国推销员",
    "url": "./movie-1584.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 冒险 / 商战",
    "tags": [
      "海外生存",
      "通讯战",
      "真实事件改编",
      "跨国商战"
    ],
    "oneLine": "一个英语四级都没过的中国通讯业务员，在非洲战乱中被双方武装势力要求必须帮他修好通讯塔。"
  },
  {
    "title": "育种",
    "url": "./movie-1585.html",
    "cover": "./85.jpg",
    "year": "2017",
    "region": "美国/加拿大",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻， 惊悚， 伦理",
    "tags": [
      "基因编辑",
      "人造子宫",
      "伦理困境",
      "黑色实验室",
      "反乌托邦"
    ],
    "oneLine": "生育率归零的未来，一名地下“育种师”发现她亲手培育的完美婴儿，携带着被删除的杀戮基因。"
  },
  {
    "title": "我家有喜",
    "url": "./movie-1586.html",
    "cover": "./86.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧，家庭，都市",
    "tags": [
      "情景喜剧",
      "家庭教育",
      "四姐妹",
      "催婚",
      "欢乐"
    ],
    "oneLine": "退伍军人老白家有四个奇葩女儿，大龄剩女、野蛮女友、学霸、追梦少女轮番上阵。"
  },
  {
    "title": "致命的她",
    "url": "./movie-1587.html",
    "cover": "./87.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "悬疑 / 惊悚 / 复仇",
    "tags": [
      "女性复仇",
      "反转",
      "替身",
      "高智商犯罪"
    ],
    "oneLine": "一个被家暴的女人“自杀”后，一个自称她双胞胎姐姐的神秘女人，嫁给了凶手。"
  },
  {
    "title": "超级飞侠：乐迪加速",
    "url": "./movie-1588.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 儿童",
    "tags": [
      "超级飞侠",
      "冒险",
      "友谊",
      "成长"
    ],
    "oneLine": "乐迪在一次派送任务中误入时空裂缝，必须跑赢时间才能挽回和小伙伴们的友谊。"
  },
  {
    "title": "俘虏之心",
    "url": "./movie-1589.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "英国 / 波兰",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "战争 / 剧情 / 同性",
    "tags": [
      "二战",
      "集中营",
      "禁忌之恋"
    ],
    "oneLine": "二战期间，一名德国军官爱上了负责关押的英国战俘，为了让他活下去，军官不惜伪造死亡证明。"
  },
  {
    "title": "猛鬼舞厅",
    "url": "./movie-1590.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 歌舞",
    "tags": [
      "夜总会",
      "集体幻觉",
      "80年代",
      "disco",
      "灵幻喜剧"
    ],
    "oneLine": "网红探险队进入1987年因大火关闭的“猛鬼舞厅”，发现旋转灯球能让活人看到鬼魂并被迫加入鬼魂的最后一支舞。"
  },
  {
    "title": "红色天空",
    "url": "./movie-1591.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 爱情",
    "tags": [
      "文艺青年",
      "森林火灾",
      "自我成长"
    ],
    "oneLine": "一个傲慢的文艺青年被困在森林火灾隔离区，他的小说构思不断被现实打断，直到天空被烧成红色。"
  },
  {
    "title": "真情七日",
    "url": "./movie-1592.html",
    "cover": "./92.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情, 爱情",
    "tags": [
      "治愈",
      "夏令营",
      "倒计时恋爱"
    ],
    "oneLine": "七个陌生男女在一场名为“真情”的实验中相爱相杀，却不知第七天所有人都会失忆。"
  },
  {
    "title": "青春雷锋",
    "url": "./movie-1593.html",
    "cover": "./93.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "青春传记",
    "tags": [
      "雷锋",
      "知青岁月",
      "理想主义"
    ],
    "oneLine": "1958年的鞍钢，19岁的雷正兴刚刚改名雷锋，他最大的烦恼不是苦，而是写的诗被工友嘲笑“假大空”。"
  },
  {
    "title": "王牌大姐大",
    "url": "./movie-1594.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧动作",
    "tags": [
      "女性",
      "江湖",
      "卧底",
      "复仇",
      "爽剧"
    ],
    "oneLine": "柔道馆女馆长被迫假扮已故的大姐大潜入黑帮，结果发现所有黑帮成员都在偷偷上她的网课。"
  },
  {
    "title": "鬼挡路3",
    "url": "./movie-1595.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖惊悚",
    "tags": [
      "密室逃脱",
      "公路恐怖",
      "杀人魔"
    ],
    "oneLine": "一场暴风雪困住十名旅客，废弃休息站里的每扇门都会打开不同的死亡陷阱。"
  },
  {
    "title": "观鸟者指导大全",
    "url": "./movie-1596.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 喜剧",
    "tags": [
      "中年危机",
      "自然治愈",
      "独立电影",
      "慢节奏"
    ],
    "oneLine": "一个离婚后的中年男人搬进小镇，为了打发时间开始观鸟，却意外卷入了一场小镇“观鸟锦标赛”的荒诞竞争。"
  },
  {
    "title": "巴黎我爱你",
    "url": "./movie-1597.html",
    "cover": "./97.jpg",
    "year": "2006",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情，爱情，文艺",
    "tags": [
      "巴黎",
      "短片集",
      "爱情",
      "邂逅",
      "城市"
    ],
    "oneLine": "十八个导演，十八个街区，十八个关于“在巴黎遇见爱”的瞬间。"
  },
  {
    "title": "泪洒相思地",
    "url": "./movie-1598.html",
    "cover": "./98.jpg",
    "year": "1988",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情，爱情，悲剧",
    "tags": [
      "民国",
      "苦情",
      "错嫁",
      "绝症",
      "绝笔信"
    ],
    "oneLine": "她被迫嫁给军阀之子时，一封血信才从战场上送到——心上人其实没有死。"
  },
  {
    "title": "齐天大圣之五指山",
    "url": "./movie-1599.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻 / 动作",
    "tags": [
      "孙悟空",
      "前传",
      "黑神话",
      "视效大片"
    ],
    "oneLine": "大闹天宫之前，那只石猴曾五次拒绝成佛，只因为花果山欠他一场雨。"
  },
  {
    "title": "不死者之王第一季",
    "url": "./movie-1600.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "骨王",
      "异世界",
      "霸权"
    ],
    "oneLine": "普通上班族穿越成骷髅版“不死者之王”，本想低调种田，却被全大陆当成最终BOSS前来讨伐。"
  },
  {
    "title": "赤裸反击",
    "url": "./movie-1601.html",
    "cover": "./101.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作，惊悚，复仇",
    "tags": [
      "女性",
      "复仇",
      "直播",
      "私刑",
      "大尺度"
    ],
    "oneLine": "被偷拍并上传网络的女白领，通过直播向所有参与传播者展开血腥报复。"
  },
  {
    "title": "闺蜜疯上路",
    "url": "./movie-1602.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧，剧情，公路",
    "tags": [
      "闺蜜",
      "旅行",
      "乌龙",
      "和解"
    ],
    "oneLine": "两个负债累累的破产闺蜜，偷了一辆房车开始逃亡之路，却意外治愈了彼此的人生。"
  },
  {
    "title": "我们这一天第二季",
    "url": "./movie-1603.html",
    "cover": "./103.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "家庭, 剧情",
    "tags": [
      "催泪",
      "时间穿插",
      "亲情治愈",
      "人生抉择"
    ],
    "oneLine": "三个同一天生日的人再次面临人生转折，一个秘密将彻底改变他们对“家”的定义。"
  },
  {
    "title": "荷兰七课",
    "url": "./movie-1604.html",
    "cover": "./104.jpg",
    "year": "2021",
    "region": "荷兰",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "other",
    "genre": "纪录片 / 历史 / 教育",
    "tags": [
      "虚构纪录片",
      "实验",
      "殖民反思",
      "冷幽默",
      "公民教育"
    ],
    "oneLine": "一位虚构的移民通过七堂荒诞课申请荷兰入籍考试，每节课都是一次对历史的冒犯。"
  },
  {
    "title": "怒火行动",
    "url": "./movie-1605.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 犯罪",
    "tags": [
      "硬核枪战",
      "缉毒",
      "孤胆英雄"
    ],
    "oneLine": "为了给被毒贩杀害的战友复仇，一名特警卧底不惜毁容混入金三角。"
  },
  {
    "title": "情陷亚维农",
    "url": "./movie-1606.html",
    "cover": "./106.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情, 剧情",
    "tags": [
      "艺术",
      "跨国恋",
      "中年危机",
      "南法风情",
      "文学改编"
    ],
    "oneLine": "一位来亚维农戏剧节寻找灵感的抑郁剧作家，爱上了一位无法“被定义”性别与身份的神秘街头艺人。"
  },
  {
    "title": "死宅之地",
    "url": "./movie-1607.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻，搞笑，日常",
    "tags": [
      "穿越",
      "废柴",
      "魔王城",
      "宅文化"
    ],
    "oneLine": "一个三十岁的重度死宅穿越到了剑与魔法的异世界，但他拒绝打魔王，只想在魔王城旁边开一家动漫手办店。"
  },
  {
    "title": "孝庄秘史",
    "url": "./movie-1608.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史 / 古装 / 权谋",
    "tags": [
      "大玉儿",
      "多尔衮",
      "女性视角",
      "翻拍"
    ],
    "oneLine": "不同于以往版本，这次孝庄临终前留下了一卷私密手稿，揭露了她与三位帝王之间不为人知的交易与深情。"
  },
  {
    "title": "灵驹续集",
    "url": "./movie-1609.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻 / 冒险 / 家庭",
    "tags": [
      "白马",
      "魔法",
      "祖孙",
      "守护",
      "成长"
    ],
    "oneLine": "上一部中的神奇白马再次出现，带领已为人母的小女孩和她的女儿，踏上拯救被污染森林的旅程。"
  },
  {
    "title": "乐业中国2022",
    "url": "./movie-1610.html",
    "cover": "./110.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "纪录片 / 社会",
    "tags": [
      "职业",
      "打工人",
      "时代切片"
    ],
    "oneLine": "镜头对准四个不同世代的打工人：从十八岁到五十八岁，他们如何在时代的焦虑中，寻找“乐业”的意义。"
  },
  {
    "title": "阿瓦隆的迷雾",
    "url": "./movie-1611.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "奇幻, 悬疑, 冒险",
    "tags": [
      "亚瑟王",
      "女性视角",
      "湖中剑",
      "黑暗童话"
    ],
    "oneLine": "当考古队在威尔士发现传说中的阿瓦隆遗址，挖出的不是石中剑，而是一具佩戴湖中女士徽章的现代女尸，死亡时间仅三天。"
  },
  {
    "title": "霍拉一家",
    "url": "./movie-1612.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 家庭",
    "tags": [
      "犹太家庭",
      "遗产继承",
      "代际冲突",
      "和解"
    ],
    "oneLine": "父亲葬礼后，四个子女为争夺唱片店继承权，撕开了二十年的旧伤疤。"
  },
  {
    "title": "同学会之心魔",
    "url": "./movie-1613.html",
    "cover": "./113.jpg",
    "year": "2022",
    "region": "台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "恐怖、心理、悬疑",
    "tags": [
      "同学聚会",
      "校园霸凌",
      "集体幻觉",
      "沼泽地"
    ],
    "oneLine": "十年后的同学会，曾经的施暴者一个接一个看到当年被他们害死的同学的幽灵。"
  },
  {
    "title": "一念倾心",
    "url": "./movie-1614.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情, 奇幻, 喜剧",
    "tags": [
      "读心术",
      "职场",
      "冤家",
      "治愈"
    ],
    "oneLine": "她能听到所有人的心声，唯独在暗恋的冰山总裁耳边，是一片死寂。"
  },
  {
    "title": "飞月情海",
    "url": "./movie-1615.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情 / 科幻 / 文艺",
    "tags": [
      "月球移民",
      "跨时空通信",
      "遗憾美学",
      "全息投影",
      "王家卫风"
    ],
    "oneLine": "2087 年月球移民站里，一位老妇人每天向地球发送语音邮件，收件人是 70 年前抛弃她的恋人。"
  },
  {
    "title": "卿何薄命之羔羊少女",
    "url": "./movie-1616.html",
    "cover": "./116.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "情色, 剧情",
    "tags": [
      "民国",
      "女校",
      "阴谋",
      "悲剧"
    ],
    "oneLine": "1930年代香港一所教会女校，贫女为供弟弟读书而献身校长，却发现这是一场代代相传的献祭游戏。"
  },
  {
    "title": "猫娘乐园",
    "url": "./movie-1617.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "奇幻， 治愈， 日常",
    "tags": [
      "猫娘",
      "咖啡厅",
      "温馨"
    ],
    "oneLine": "一家濒临倒闭的猫娘咖啡厅来了一位能听懂猫语的客人，他发现这里的服务员根本不是“扮演”猫娘。"
  },
  {
    "title": "钻石王老五粤语",
    "url": "./movie-1618.html",
    "cover": "./118.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧、爱情、商战",
    "tags": [
      "TVB",
      "豪门",
      "多角恋",
      "钻石比喻"
    ],
    "oneLine": "香港十大钻石王老五之一的珠宝商继承人，同时被三个女人“追求”，但她们都以为他是穷光蛋。"
  },
  {
    "title": "但愿人长久",
    "url": "./movie-1619.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情, 爱情, 文艺",
    "tags": [
      "阿尔茨海默症",
      "错位时空",
      "养老院"
    ],
    "oneLine": "养老院里，一名阿尔茨海默症老人在清醒时刻写下了亡妻年轻时最喜欢的月饼配方，却再也想不起妻子的样子。"
  },
  {
    "title": "赤子少年",
    "url": "./movie-1620.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 青春 / 犯罪",
    "tags": [
      "少年犯罪",
      "校园暴力",
      "以暴制暴",
      "兄弟情",
      "热血悲情"
    ],
    "oneLine": "五个被校园霸凌逼入绝境的高中生，用一学期的时间把自己练成了最狠的地下搏击手。"
  },
  {
    "title": "草丛中的人",
    "url": "./movie-1621.html",
    "cover": "./121.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑，惊悚",
    "tags": [
      "都市传说",
      "一人一世界",
      "心理恐怖"
    ],
    "oneLine": "一男一女在公路旅行时为了抄近路走入一片草丛，却发现一旦蹲下身体没入草丛，就再也看不到对方。"
  },
  {
    "title": "碧比和缇那2",
    "url": "./movie-1622.html",
    "cover": "./122.jpg",
    "year": "2020",
    "region": "瑞典",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "家庭, 冒险, 喜剧",
    "tags": [
      "儿童",
      "友谊",
      "暑假",
      "寻宝"
    ],
    "oneLine": "碧比和缇那的暑假冒险升级，这次她们要在废弃的游乐场里找到传说中的“哭泣公主”宝藏。"
  },
  {
    "title": "艾比",
    "url": "./movie-1623.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "恐怖 / 心理",
    "tags": [
      "灵异附身",
      "伪纪录片",
      "独角戏",
      "氛围恐怖"
    ],
    "oneLine": "年轻的驱魔师艾比发现，附身她的恶魔竟是她十岁时祈祷不要出生的“堕胎哥哥”。"
  },
  {
    "title": "少爷的磨难",
    "url": "./movie-1624.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 喜剧",
    "tags": [
      "豪门",
      "反转",
      "扮猪吃老虎",
      "职场"
    ],
    "oneLine": "富二代为继承千亿家产，被迫伪装成破产打工仔，结果公司被他整上市了。"
  },
  {
    "title": "神之造物",
    "url": "./movie-1625.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "爱尔兰/英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚, 剧情",
    "tags": [
      "宗教恐怖",
      "海边小镇",
      "人性考验",
      "氛围感",
      "反转"
    ],
    "oneLine": "爱尔兰小岛上一向虔诚的面包师发现，她烤出的每一块面包上，都浮现出村民即将死亡的预言。"
  },
  {
    "title": "家政夫三田园7",
    "url": "./movie-1626.html",
    "cover": "./126.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "剧情， 悬疑",
    "tags": [
      "暗黑系",
      "家政夫",
      "反转"
    ],
    "oneLine": "顶级家政夫三田园这次潜入豪门，发现雇主的完美家庭建立在四具无名尸骨之上。"
  },
  {
    "title": "赫鲁斯塔廖夫，开车！",
    "url": "./movie-1627.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "俄罗斯",
      "出租车",
      "黑帮",
      "黑色幽默"
    ],
    "oneLine": "落魄的前F1赛车手开出租车还债，乘客里全是想要他命的仇家，但没人跑得过他的方向盘。"
  },
  {
    "title": "销金窝大劫案",
    "url": "./movie-1628.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 动作 / 喜剧",
    "tags": [
      "豪门丑闻",
      "笨贼一箩筐",
      "密室逃脱",
      "港式幽默"
    ],
    "oneLine": "七个笨贼潜入号称“销金窝”的顶级会所偷金库，却发现里面正在开富豪版“鱿鱼游戏”。"
  },
  {
    "title": "战鼓雄魂",
    "url": "./movie-1629.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 战争",
    "tags": [
      "古代战争",
      "战鼓",
      "家国情怀"
    ],
    "oneLine": "唐朝安史之乱，一支靠“战鼓令”传递军令的孤军，在绝境中死守潼关。"
  },
  {
    "title": "风云之十里洋场",
    "url": "./movie-1630.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "年代, 悬疑, 动作",
    "tags": [
      "民国",
      "上海滩",
      "间谍",
      "复仇"
    ],
    "oneLine": "帮派小弟被日军洗脑后送回上海，却发现他刺杀的目标是失散的革命者大哥。"
  },
  {
    "title": "妈咪",
    "url": "./movie-1631.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 家庭",
    "tags": [
      "单亲母亲",
      "青少年犯罪",
      "救赎",
      "社会边缘"
    ],
    "oneLine": "十五年前她把婴儿遗弃在消防局门口，如今那个孩子成为罪犯，她决定用最极端的方式“做一次完整的妈妈”。"
  },
  {
    "title": "奥勒夫博士的怪物",
    "url": "./movie-1632.html",
    "cover": "./132.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 恐怖",
    "tags": [
      "哥特",
      "科学怪人",
      "伦理困境",
      "黑白质感",
      "怪物"
    ],
    "oneLine": "疯狂科学家复活了亡妻，却造出了一个只会啃食活人血肉的怪物，而怪物每晚都会在他耳边说“我爱你”。"
  },
  {
    "title": "阴阳路14：双鬼拍门",
    "url": "./movie-1633.html",
    "cover": "./133.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "港式恐怖",
      "单元故事",
      "民俗"
    ],
    "oneLine": "一栋闹鬼大厦里，两个互不相识的鬼魂同时找上同一个人，一个要他死，一个要他活。"
  },
  {
    "title": "锈烂",
    "url": "./movie-1634.html",
    "cover": "./134.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻 / 灾难",
    "tags": [
      "废土",
      "机械传染病",
      "父子情",
      "残酷美学"
    ],
    "oneLine": "一种能将血肉和金属同时腐蚀成锈粉的“铁锈病”爆发，人类必须在变成雕塑前找到解药。"
  },
  {
    "title": "夜惊",
    "url": "./movie-1635.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "恐怖, 惊悚, 超自然",
    "tags": [
      "睡眠瘫痪",
      "民俗",
      "降头",
      "密室"
    ],
    "oneLine": "患睡眠瘫痪症的男子每晚被“鬼压床”，但医生告诉他那个“鬼”是真实存在的。"
  },
  {
    "title": "海豚的故事2",
    "url": "./movie-1636.html",
    "cover": "./136.jpg",
    "year": "2026",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "家庭, 冒险, 剧情",
    "tags": [
      "海洋保育",
      "海豚语言",
      "母女传承",
      "非法捕鱼"
    ],
    "oneLine": "海洋生物学家的女儿用一台AI翻译器，破译了海豚的求救信号，发现它们正被一种声波武器驱赶到死亡线。"
  },
  {
    "title": "天才少女",
    "url": "./movie-1637.html",
    "cover": "./137.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 家庭",
    "tags": [
      "数学天才",
      "抚养权",
      "舅舅",
      "外婆",
      "温暖"
    ],
    "oneLine": "一名七岁的数学神童被外婆起诉争夺抚养权，她的舅舅只想让她做一个普通的孩子。"
  },
  {
    "title": "生命的烙印",
    "url": "./movie-1638.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "波兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "纹身",
      "集中营",
      "幸存者",
      "救赎"
    ],
    "oneLine": "奥斯维辛幸存者的手臂上有一个编号纹身，70年后，他孙子手臂上出现了一模一样的神秘数字。"
  },
  {
    "title": "尸恋人",
    "url": "./movie-1639.html",
    "cover": "./139.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "爱情/恐怖/奇幻",
    "tags": [
      "人鬼情未了",
      "轮回转世",
      "凄美爱情",
      "民俗恐怖"
    ],
    "oneLine": "验尸官爱上了一具无人认领的女尸，每晚都去停尸房与她说话，直到女尸在月圆之夜睁开了眼睛。"
  },
  {
    "title": "夏日福星粤语",
    "url": "./movie-1640.html",
    "cover": "./140.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧, 动作",
    "tags": [
      "福星系列",
      "五福星",
      "洪金宝",
      "成龙",
      "元彪"
    ],
    "oneLine": "夏日炎炎，五福星受委托保护一名富商的女儿，却卷入一桩国际珠宝大案，笑料与打斗齐飞。"
  },
  {
    "title": "开放关系",
    "url": "./movie-1641.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "喜剧， 爱情",
    "tags": [
      "都市",
      "情感实验",
      "多角恋",
      "讽刺"
    ],
    "oneLine": "一对尝试“开放式婚姻”的夫妻，在经历了一系列荒诞的约会后，发现最想睡的人还是对方。"
  },
  {
    "title": "终极突破",
    "url": "./movie-1642.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 科幻",
    "tags": [
      "近未来",
      "脑机接口",
      "极限运动",
      "反乌托邦"
    ],
    "oneLine": "一名瘫痪的极限运动选手植入脑机芯片后，发现自己的意识被困在虚拟角斗场。"
  },
  {
    "title": "十诫Ⅷ：心灵之罪",
    "url": "./movie-1643.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "波兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 伦理, 心理",
    "tags": [
      "十诫",
      "基耶斯洛夫斯基",
      "哲学",
      "伦理",
      "心理"
    ],
    "oneLine": "八岁那年她撒了一个谎，让无辜的人坐了二十年牢。第八诫：“不可作假见证”。"
  },
  {
    "title": "程婴救孤",
    "url": "./movie-1644.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情, 历史, 动作",
    "tags": [
      "古装",
      "忠义",
      "复仇",
      "赵氏孤儿改编"
    ],
    "oneLine": "改编自经典故事，草泽医生程婴为保全赵氏遗孤，忍辱负重十五年，献出亲生儿子替死。"
  },
  {
    "title": "逆天奇案2粤语",
    "url": "./movie-1645.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "警匪、悬疑、动作",
    "tags": [
      "重案组",
      "高科技犯罪",
      "双雄搭档"
    ],
    "oneLine": "为了追查杀死前女友的跨国杀手，两位精英警察不得不联手，却发现杀手只是更大阴谋的棋子。"
  },
  {
    "title": "妙人齐家",
    "url": "./movie-1646.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧/家庭",
    "tags": [
      "爆笑",
      "代际冲突",
      "东北喜剧",
      "暖心"
    ],
    "oneLine": "一个信奉“不婚不育”的丁克女强人，突然继承了三个从天而降的熊孩子。"
  },
  {
    "title": "在凡妲的小房间里",
    "url": "./movie-1647.html",
    "cover": "./147.jpg",
    "year": "2019",
    "region": "葡萄牙 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 女性",
    "tags": [
      "单亲母亲",
      "贫困",
      "阳台",
      "黑白"
    ],
    "oneLine": "佛得角移民凡妲带着五个孩子，住在里斯本贫民窟一间没有窗户的房间里。"
  },
  {
    "title": "恐惧史",
    "url": "./movie-1648.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "阿根廷",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 恐怖",
    "tags": [
      "分段叙事",
      "社会隐喻",
      "集体潜意识"
    ],
    "oneLine": "布宜诺斯艾利斯一座公寓里，鬼魂、阴谋论和阶层仇杀同时上演，恐惧是唯一货币。"
  },
  {
    "title": "琅琊榜",
    "url": "./movie-1649.html",
    "cover": "./149.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装，权谋",
    "tags": [
      "谋略",
      "复仇",
      "兄弟",
      "江湖"
    ],
    "oneLine": "身中火寒之毒的麒麟才子梅长苏，以病弱之躯搅动金陵风云，为七万赤焰军洗雪冤屈。"
  },
  {
    "title": "胭脂似火",
    "url": "./movie-1650.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "民国 / 爱情 / 谍战",
    "tags": [
      "双强",
      "先婚后爱",
      "民国奇情",
      "上海滩"
    ],
    "oneLine": "上海滩最狠的商会大小姐，为了查出灭门凶手，嫁给了她最看不起的“警察厅走狗”，却不知对方也在利用她钓鱼。"
  },
  {
    "title": "圣战豪情",
    "url": "./movie-1651.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，历史",
    "tags": [
      "中世纪",
      "十字军",
      "兄弟情",
      "史诗",
      "信仰"
    ],
    "oneLine": "第三次十字军东征期间，一个被迫加入基督军的穆斯林学者，和一个质疑上帝存在的圣殿骑士，成为了彼此唯一的依靠。"
  },
  {
    "title": "太阳市集",
    "url": "./movie-1652.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "奇幻, 剧情",
    "tags": [
      "地下市场",
      "记忆买卖",
      "欲望交易",
      "都市传说"
    ],
    "oneLine": "在城市地下八层，有一个只正午开门、贩卖任何你想得到的东西的市集。"
  },
  {
    "title": "地平线系列：我们为什么胖",
    "url": "./movie-1653.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "英国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "纪录, 科普",
    "tags": [
      "BBC",
      "科学",
      "减肥",
      "生物学"
    ],
    "oneLine": "记者亲自吞下微型摄像头，钻进自己的消化道，去寻找那个让百万人减肥屡战屡败的“体重设定点”开关。"
  },
  {
    "title": "关机夏令营",
    "url": "./movie-1654.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "科技恐怖",
      "青少年",
      "反乌托邦"
    ],
    "oneLine": "为了戒除网瘾，六个青少年被送进不许带电子设备的深山夏令营，然后第一个失踪了。"
  },
  {
    "title": "午夜惊魂路",
    "url": "./movie-1655.html",
    "cover": "./5.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "恐怖, 惊悚",
    "tags": [
      "都市传说",
      "出租车",
      "红衣女孩",
      "中式恐怖",
      "低成本"
    ],
    "oneLine": "夜班出租车司机在一条废弃公路上连续三次载到同一个红衣小女孩，但计价器显示的里程是负数。"
  },
  {
    "title": "反伪先锋",
    "url": "./movie-1656.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 犯罪 / 单元剧",
    "tags": [
      "打假",
      "科学推理",
      "气功热",
      "年代感"
    ],
    "oneLine": "九十年代，“气功大师”横行，一个物理学教授和一个小记者组成了“反伪联盟”。"
  },
  {
    "title": "想好以后再恋爱",
    "url": "./movie-1657.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 都市 / 喜剧",
    "tags": [
      "大龄青年",
      "理性恋爱",
      "嘴炮",
      "女性成长"
    ],
    "oneLine": "两个理性到极致的单身男女，把恋爱谈成了项目管理，然后崩了。"
  },
  {
    "title": "设想一下",
    "url": "./movie-1658.html",
    "cover": "./8.jpg",
    "year": "2027",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻, 爱情, 剧情",
    "tags": [
      "平行宇宙",
      "选择恐惧",
      "哲学思辨",
      "文艺科幻"
    ],
    "oneLine": "一家科技公司能让你亲眼看到人生每个重大选择后的“平行版本”，前提是你必须放弃现实中的一切。"
  },
  {
    "title": "蓝色的七星湖",
    "url": "./movie-1659.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情、爱情、文艺",
    "tags": [
      "内蒙古",
      "支教",
      "孤独症",
      "治愈"
    ],
    "oneLine": "一位失业的城市女白领来到内蒙七星湖，意外发现了一位能用马头琴与湖水沟通的自闭症少年。"
  },
  {
    "title": "成都爱情故事",
    "url": "./movie-1660.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 都市 / 喜剧",
    "tags": [
      "火锅",
      "说唱",
      "蜀地文化",
      "合租男女"
    ],
    "oneLine": "一个不会吃辣的东北编剧，和一个立志做川味说唱的女孩，在成都玉林路的火锅店意外同居。"
  },
  {
    "title": "奔爱",
    "url": "./movie-1661.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情，剧情，公路",
    "tags": [
      "绝症",
      "极光",
      "房车",
      "疗愈"
    ],
    "oneLine": "为了完成绝症女友的遗愿，懦弱的程序员开着破房车横穿欧亚大陆去追极光。"
  },
  {
    "title": "来自天国的情书",
    "url": "./movie-1662.html",
    "cover": "./12.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": [
      "死后世界",
      "邮差",
      "未寄出的信",
      "二次告别"
    ],
    "oneLine": "在人间与天国之间的中转站，一名邮差的唯一工作是帮死去的人寄出他们生前没有勇气寄出的最后一封信。"
  },
  {
    "title": "红色呼叫铃",
    "url": "./movie-1663.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑，医疗，惊悚",
    "tags": [
      "医院",
      "秘密",
      "连环事件",
      "护士"
    ],
    "oneLine": "一家顶级私立医院的VIP病房内，呼叫铃牵出一起掩盖多年的连环医疗事故。"
  },
  {
    "title": "春日迟迟再出发",
    "url": "./movie-1664.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀， 情感， 旅行",
    "tags": [
      "离婚男女",
      "治愈之旅",
      "素人社交",
      "慢综艺"
    ],
    "oneLine": "八位已经离婚的单身男女，带着过往婚姻的伤痛，在云南的春日里开启一场治愈与重生的旅程。"
  },
  {
    "title": "哥斯拉2：怪兽之王",
    "url": "./movie-1665.html",
    "cover": "./15.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻灾难",
    "tags": [
      "巨兽混战",
      "视觉轰炸",
      "环保寓言"
    ],
    "oneLine": "远古巨兽纷纷苏醒，哥斯拉将迎战他的终极宿敌——三头王者基多拉，人类的命运沦为背景音。"
  },
  {
    "title": "魔女独臂剑",
    "url": "./movie-1666.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "武侠 / 奇幻 / 动作",
    "tags": [
      "女侠",
      "断臂",
      "复仇",
      "剑术美学",
      "邪典"
    ],
    "oneLine": "十八年前被师父斩断右臂灭门，她装上玄铁义肢，练成左手独臂剑，如今回来血洗师门。"
  },
  {
    "title": "珍妮的婚礼",
    "url": "./movie-1667.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "婚礼灾难",
      "家族秘密",
      "抢婚",
      "女强人",
      "爆笑反转"
    ],
    "oneLine": "婚礼当天，三位前男友带着不同理由同时回来抢婚，新娘珍妮必须边嫁人边拆雷。"
  },
  {
    "title": "因为·爱",
    "url": "./movie-1668.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情、剧情",
    "tags": [
      "时空交错",
      "治愈",
      "命运",
      "书信",
      "遗憾"
    ],
    "oneLine": "意外收到一封来自未来的分手信，她决定在倒数的72小时里改写自己注定的结局。"
  },
  {
    "title": "倒霉爱神",
    "url": "./movie-1669.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情 / 奇幻 / 喜剧",
    "tags": [
      "运势转移",
      "契约恋爱",
      "便利店打工",
      "搞笑"
    ],
    "oneLine": "全韩国最倒霉的女人碰上了全韩国最幸运的男人，她发现每次亲吻都会把霉运传给他。"
  },
  {
    "title": "谁吻了洁西卡",
    "url": "./movie-1670.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情，喜剧，悬疑",
    "tags": [
      "记忆",
      "失忆",
      "派对",
      "三角恋",
      "寻找"
    ],
    "oneLine": "洁西卡在毕业派对上被神秘人吻了三秒钟，她必须通过唇印找出那个对的人。"
  },
  {
    "title": "医院",
    "url": "./movie-1671.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "夜班",
      "器官失窃",
      "活体麻醉",
      "医疗邪教"
    ],
    "oneLine": "新来的夜班护士发现，这所医院地下三楼的手术室，病人从未被推出。"
  },
  {
    "title": "第阿诺亚战场",
    "url": "./movie-1672.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争，历史，剧情",
    "tags": [
      "一战",
      "阿尔及利亚",
      "殖民",
      "记忆",
      "人性"
    ],
    "oneLine": "第一次世界大战中，被强征的阿尔及利亚士兵在第阿诺亚战役中沦为法国炮灰，一场注定被抹去的屠杀。"
  },
  {
    "title": "好事多磨",
    "url": "./movie-1673.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集 (36集)",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "都市 / 爱情 / 喜剧",
    "tags": [
      "欢喜冤家",
      "契约结婚",
      "职场"
    ],
    "oneLine": "为了应付催婚和继承公司，两个死对头签订“双赢”契约假结婚，结果把生活弄得一团糟。"
  },
  {
    "title": "异星兄弟",
    "url": "./movie-1674.html",
    "cover": "./24.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻 / 剧情",
    "tags": [
      "外星人",
      "兄弟情",
      "公路片",
      "低成本"
    ],
    "oneLine": "一个沉默寡言的外星人坠毁在德州荒漠，被一个同样沉默的墨西哥少年捡回了家，少年管他叫“哥哥”。"
  },
  {
    "title": "我的世界大电影",
    "url": "./movie-1675.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻 / 冒险",
    "tags": [
      "方块世界",
      "穿越",
      "生存建造",
      "游戏改编"
    ],
    "oneLine": "四个被吸入《我的世界》的普通玩家，必须在七天太阳熄灭前，用方块重建一个文明。"
  },
  {
    "title": "青年作曲家之旅",
    "url": "./movie-1676.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "音乐, 剧情",
    "tags": [
      "音乐梦想",
      "师徒",
      "成长",
      "治愈"
    ],
    "oneLine": "失聪的天才作曲家远赴北海道乡村，从大自然的声音中找回创作的初心。"
  },
  {
    "title": "追你而来",
    "url": "./movie-1677.html",
    "cover": "./27.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 喜剧, 公路",
    "tags": [
      "欢喜冤家",
      "自驾游",
      "治愈"
    ],
    "oneLine": "失恋女强人独自自驾进藏，却阴差阳错搭上了一个喋喋不休的失业男主播，一段互怼互救的旅程就此展开。"
  },
  {
    "title": "双重风险",
    "url": "./movie-1678.html",
    "cover": "./28.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作、犯罪",
    "tags": [
      "卧底",
      "替身",
      "警匪对决",
      "反转"
    ],
    "oneLine": "为了捣毁跨国军火集团，一名女警与她的替身演员妹妹互换身份，双双踏入一场生死赌局。"
  },
  {
    "title": "遗孀秘闻",
    "url": "./movie-1679.html",
    "cover": "./29.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "心理博弈",
      "遗产阴谋",
      "哥特氛围",
      "女性复仇"
    ],
    "oneLine": "丈夫葬礼后，年轻遗孀发现家中暗格藏着一盘警告她“快逃”的录像带。"
  },
  {
    "title": "帝企鹅日记",
    "url": "./movie-1680.html",
    "cover": "./30.jpg",
    "year": "2022",
    "region": "法国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "自然、纪实",
    "tags": [
      "极地",
      "生存",
      "企鹅",
      "家庭"
    ],
    "oneLine": "南极暴风雪中，帝企鹅父亲用体温守护一颗蛋，却不知冰层下藏着更大的危机。"
  },
  {
    "title": "贾斯珀·琼斯",
    "url": "./movie-1681.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 悬疑 / 青春",
    "tags": [
      "小镇",
      "秘密",
      "种族",
      "文学改编"
    ],
    "oneLine": "1969年澳洲小镇，一个书虫男孩被全镇唾弃的混血儿拉入了一场伪造自杀的深夜冒险。"
  },
  {
    "title": "流氓大亨国语",
    "url": "./movie-1682.html",
    "cover": "./32.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 爱情 / 家族",
    "tags": [
      "经典",
      "商战",
      "港剧",
      "兄弟反目"
    ],
    "oneLine": "失散多年的兄弟，一个成为正直警探，一个成为黑道枭雄，两人爱上同一个女人后，宿命对决开始。"
  },
  {
    "title": "我的魔鬼",
    "url": "./movie-1683.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "德国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "europe",
    "genre": "传记 / 历史",
    "tags": [
      "赫尔佐格",
      "金斯基",
      "天才与疯子",
      "拍摄幕后"
    ],
    "oneLine": "赫尔佐格回顾他与“魔鬼”演员金斯基之间长达十几年的疯狂合作与私人恩怨。 名导赫尔佐格回忆他与“魔鬼”演员金斯基的往事：他曾想烧掉我的房子，我们曾在片场拿枪互指，但他是我见过最伟大的演员。"
  },
  {
    "title": "鲸奇爆笑团",
    "url": "./movie-1684.html",
    "cover": "./34.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "variety",
    "regionGroup": "korea",
    "genre": "喜剧，综艺形式剧",
    "tags": [
      "海洋馆",
      "打工",
      "荒诞"
    ],
    "oneLine": "五个被开除的废柴聚在一起，接管了一家濒临倒闭的海洋馆，试图用各种奇葩表演拯救鲸鱼们。"
  },
  {
    "title": "高俅斯和鹈鹕公社",
    "url": "./movie-1685.html",
    "cover": "./35.jpg",
    "year": "2014",
    "region": "荷兰",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情, 历史, 艺术",
    "tags": [
      "先锋戏剧",
      "艺术家",
      "癫狂",
      "实验",
      "传记"
    ],
    "oneLine": "20世纪初一群疯子艺术家成立“鹈鹕公社”，用裸体、鲜血和诗歌对抗整个文明社会。"
  },
  {
    "title": "刘墉追案",
    "url": "./movie-1686.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 悬疑 / 喜剧",
    "tags": [
      "清官断案",
      "朝堂权谋",
      "相声式台词"
    ],
    "oneLine": "“浓墨宰相”刘墉退休前被卷入一桩奇案，死者全是二十年前“乾隆下江南”时的随行护卫。"
  },
  {
    "title": "时空急转弯3",
    "url": "./movie-1687.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧、科幻",
    "tags": [
      "中世纪",
      "现代",
      "历史恶搞"
    ],
    "oneLine": "中世纪骑士和仆从又被甩到2025年，这次他们成了抖音网红。"
  },
  {
    "title": "权顺芬女士绑架事件",
    "url": "./movie-1688.html",
    "cover": "./38.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "喜剧 / 犯罪 / 动作",
    "tags": [
      "大妈",
      "反杀",
      "老年英雄",
      "幽默",
      "暴力美学"
    ],
    "oneLine": "63岁的超市收银员被小混混绑架，第二天混混们跪着求她回去，因为没人比她更懂“折磨人”。"
  },
  {
    "title": "虎神",
    "url": "./movie-1689.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "奇幻， 动作， 民俗",
    "tags": [
      "八家将",
      "神明附体",
      "少年成长",
      "台湾民俗"
    ],
    "oneLine": "问题少年意外成为虎爷将军的人间乩身，在对抗邪恶势力的过程中，找回丢失的自我与信仰。"
  },
  {
    "title": "断头谷第三季",
    "url": "./movie-1690.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "惊悚/奇幻/悬疑",
    "tags": [
      "无头骑士",
      "克苏鲁",
      "侦探",
      "超自然",
      "恐怖"
    ],
    "oneLine": "沉睡百年的无头骑士带着旧日邪神重返人间，现代警探被迫再次挥起银剑。"
  },
  {
    "title": "铁胆神枪",
    "url": "./movie-1691.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "西部 / 动作",
    "tags": [
      "快枪手",
      "复仇",
      "反套路西部"
    ],
    "oneLine": "全美最快的枪手，在决斗前把自己的右手绑了起来——因为这次他要杀的人，是他儿子。"
  },
  {
    "title": "东海人鱼传2",
    "url": "./movie-1692.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "奇幻, 爱情, 冒险",
    "tags": [
      "深海秘境",
      "鲛人泪",
      "王朝斗争"
    ],
    "oneLine": "第一季幸存的情侣再度踏上冒险，这次他们必须在深海帝国与陆地王朝的战争中，拯救沦为政治筹码的人鱼公主。"
  },
  {
    "title": "灵欲九重天",
    "url": "./movie-1693.html",
    "cover": "./43.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "情色 / 惊悚 / 奇幻",
    "tags": [
      "欲望",
      "密室",
      "佛教",
      "轮回",
      "心理"
    ],
    "oneLine": "七个陌生人在电梯里被困九小时，每个人心底最肮脏的秘密被逐一具象化。"
  },
  {
    "title": "米奇17号",
    "url": "./movie-1694.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻，黑色幽默，剧情",
    "tags": [
      "克隆人",
      "星际殖民",
      "消耗型员工",
      "身份危机",
      "反资本"
    ],
    "oneLine": "作为星际飞船上第17个被派去送死的“消耗型员工”，米奇在第18号被激活时发现自己没有被注销。"
  },
  {
    "title": "走出荒野",
    "url": "./movie-1695.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 冒险",
    "tags": [
      "创伤疗愈",
      "徒步",
      "女性独自上路"
    ],
    "oneLine": "母亲去世、离婚、失业后，她独自徒步太平洋屋脊步道，却发现自己最怕的不是熊。"
  },
  {
    "title": "鬼玩人：复活",
    "url": "./movie-1696.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖 / 血腥",
    "tags": [
      "宗教恐怖",
      "附身",
      "密室屠杀"
    ],
    "oneLine": "两姐妹在地震后发现地下密室中的《死灵之书》，随后母亲被恶灵附身变为杀人怪物。"
  },
  {
    "title": "十二传说国语",
    "url": "./movie-1697.html",
    "cover": "./47.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "悬疑, 奇幻, 剧情",
    "tags": [
      "都市传说",
      "单元探案",
      "反转",
      "民俗"
    ],
    "oneLine": "一本尘封的民俗笔记串联起十二个都市传说，每个真相都比你想象的更离奇。"
  },
  {
    "title": "少林英雄榜",
    "url": "./movie-1698.html",
    "cover": "./48.jpg",
    "year": "1984",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 古装",
    "tags": [
      "少林",
      "复仇",
      "硬桥硬马",
      "师徒情"
    ],
    "oneLine": "俗家弟子为报灭门之仇闯出少林，师父赠他三句话，每句救他一命。"
  },
  {
    "title": "麦克风",
    "url": "./movie-1699.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "音乐 / 剧情",
    "tags": [
      "说唱",
      "电台",
      "地下",
      "逐梦",
      "友情"
    ],
    "oneLine": "纽约地下电台的金牌主播突然失声，他必须用一只破麦克风教会一个口吃的送货员如何freestyle。"
  },
  {
    "title": "别惹佐汉",
    "url": "./movie-1700.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 动作",
    "tags": [
      "特工",
      "理发师",
      "恶搞",
      "以色列"
    ],
    "oneLine": "以色列最强特工假死脱身后跑去纽约当美发师，用剪刀和泡沫打败恐怖分子。"
  },
  {
    "title": "习总书记的初心",
    "url": "./movie-1701.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "传记， 历史",
    "tags": [
      "纪实",
      "梁家河",
      "治国理政",
      "人民情怀",
      "正能量"
    ],
    "oneLine": "从黄土地到中南海，追寻一位人民领袖的精神原点与为民初心。"
  },
  {
    "title": "罗马帝国艳情史",
    "url": "./movie-1702.html",
    "cover": "./52.jpg",
    "year": "2028",
    "region": "意大利/美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情， 历史， 情色",
    "tags": [
      "卡里古拉",
      "权力",
      "荒诞"
    ],
    "oneLine": "新版本不再聚焦猎奇，而是通过御用史官的视角，剖析暴君卡里古拉背后的权力逻辑与集体疯狂。"
  },
  {
    "title": "金斯敦市长第一季",
    "url": "./movie-1703.html",
    "cover": "./53.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪、剧情、惊悚",
    "tags": [
      "监狱",
      "权力掮客",
      "黑色电影",
      "泰勒·谢里丹"
    ],
    "oneLine": "密歇根州小镇金斯敦，麦克卢斯基家族三代都是“市长”——不是在市政厅，而是监狱和街道之间的权力掮客。"
  },
  {
    "title": "森林进化论第三季",
    "url": "./movie-1704.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺 / 真人秀",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 策略 / 推理",
    "tags": [
      "脑力",
      "博弈",
      "生存",
      "对抗"
    ],
    "oneLine": "12名高智商玩家重返原始森林，在全新的“物种战争”规则下，上演背叛与结盟的极致心理战。"
  },
  {
    "title": "燃烧吧！废柴！2021",
    "url": "./movie-1705.html",
    "cover": "./55.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧、动作、励志",
    "tags": [
      "废柴逆袭",
      "街头格斗",
      "中年危机",
      "退休冠军",
      "港式无厘头"
    ],
    "oneLine": "五个被生活暴打的中年废柴，组成最不靠谱的MMA战队，目标是输掉所有比赛拿奖金还债。"
  },
  {
    "title": "倦怠",
    "url": "./movie-1706.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 悬疑",
    "tags": [
      "职场霸凌",
      "精神病",
      "办公室惊悚",
      "反转"
    ],
    "oneLine": "女白领因过劳导致脑损伤，她分不清苛刻的上司是真人还是自己的被害妄想。"
  },
  {
    "title": "赘婿动画版",
    "url": "./movie-1707.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "中国",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "古风/商战",
    "tags": [
      "爽文",
      "逆袭",
      "动漫",
      "权谋",
      "搞笑"
    ],
    "oneLine": "金融巨鳄穿越成古代上门女婿，被迫从零开始搞布料生意，顺便把整个王朝的经济体系都给颠覆了。"
  },
  {
    "title": "唇（电影）",
    "url": "./movie-1708.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情, 悬疑, 文艺",
    "tags": [
      "口红",
      "替身",
      "记忆移植",
      "都市传说"
    ],
    "oneLine": "她每天都会收到一支口红，涂上之后就会成为另一个人，当她爱上这种“变身”的快感时，却发现这些记忆都是真实的。"
  },
  {
    "title": "另一端",
    "url": "./movie-1709.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "悬疑、科幻",
    "tags": [
      "平行世界",
      "手机谜团",
      "身份认同"
    ],
    "oneLine": "失意的程序员发现自己新买的旧手机，可以联系到三个月前车祸去世的女友，但改变过去需要付出代价。"
  },
  {
    "title": "周末情侣",
    "url": "./movie-1710.html",
    "cover": "./60.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情/剧情",
    "tags": [
      "契约恋爱",
      "治愈",
      "都市"
    ],
    "oneLine": "两个受情伤的人约定只在周末见面交往，却无意间动摇了彼此的真实生活。"
  },
  {
    "title": "浴火巾帼2",
    "url": "./movie-1711.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "动作 / 剧情 / 女性",
    "tags": [
      "女警归来",
      "黑帮复仇",
      "单手格斗",
      "北印度背景",
      "硬核现实"
    ],
    "oneLine": "第一季结尾女警断臂后装上铁钩假肢，回到村庄发现恶势力已经控制了下一代孩子。"
  },
  {
    "title": "马丁伊登",
    "url": "./movie-1712.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 爱情",
    "tags": [
      "水手作家",
      "阶级跨越",
      "理想幻灭",
      "悲剧"
    ],
    "oneLine": "穷水手为了富家女励志成为大作家，成功后却发现一切都失去了意义。"
  },
  {
    "title": "在布鲁日",
    "url": "./movie-1713.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "英国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情， 犯罪， 黑色幽默",
    "tags": [
      "杀手",
      "中世纪古城",
      "救赎",
      "意外"
    ],
    "oneLine": "两个杀手躲藏在童话般的布鲁日等待指令，却等来了一个让他们必须自相残杀的命令。"
  },
  {
    "title": "史酷比：快乐万圣节",
    "url": "./movie-1714.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画, 喜剧",
    "tags": [
      "合家欢",
      "节日特辑",
      "破案"
    ],
    "oneLine": "万圣节之夜，史酷比和伙伴们发现小镇上的“鬼怪”原来全是外星人假扮的。"
  },
  {
    "title": "诸神之战",
    "url": "./movie-1715.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "多神系混战",
      "现代都市",
      "神力觉醒",
      "反英雄",
      "视觉奇观"
    ],
    "oneLine": "当全球不同神话体系的神祇同时陨落，几个意外继承神力的普通人成了众神之战的最后筹码。"
  },
  {
    "title": "杰克魔方",
    "url": "./movie-1716.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "英国 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "悬疑 / 科幻",
    "tags": [
      "魔方",
      "平行宇宙",
      "密室逃脱",
      "烧脑",
      "高智商"
    ],
    "oneLine": "七个陌生人被困魔方房间，每转动一次魔方，就切换一个平行宇宙的自己。"
  },
  {
    "title": "登峰酷儿",
    "url": "./movie-1717.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "mainland",
    "genre": "纪录片, 运动, 传记",
    "tags": [
      "登山",
      "LGBTQ",
      "自我认同",
      "极限运动",
      "真实故事改编"
    ],
    "oneLine": "在氧气稀薄的绝命海拔，他挑战的不仅是山峰，更是世俗的目光。"
  },
  {
    "title": "无法直视",
    "url": "./movie-1718.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "惊悚，悬疑，超自然",
    "tags": [
      "都市传说",
      "诅咒影像",
      "视觉污染",
      "集体癔症"
    ],
    "oneLine": "一种通过视觉传播的诅咒正在蔓延，凡是看到某种“扭曲人脸”的人，眼球会瞬间炭化。"
  },
  {
    "title": "浪矢解忧杂货店",
    "url": "./movie-1719.html",
    "cover": "./69.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情",
    "tags": [
      "东野圭吾",
      "奇幻温情",
      "时空交错",
      "书信",
      "治愈"
    ],
    "oneLine": "一家只在夜晚营业的杂货店，连接着过去与未来，每一封投进牛奶箱的信都能改变一个人的人生。"
  },
  {
    "title": "圣诞精神",
    "url": "./movie-1720.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "家庭奇幻",
    "tags": [
      "圣诞老人",
      "小镇奇迹",
      "代际和解"
    ],
    "oneLine": "一个不信圣诞的男孩意外继承了圣诞老人的魔法斗篷，却必须在平安夜结束前送出十份“非礼物”式的温暖。"
  },
  {
    "title": "天若有情粤语",
    "url": "./movie-1721.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情 / 剧情 / 犯罪",
    "tags": [
      "粤语原声",
      "江湖儿女",
      "经典重启",
      "摩托"
    ],
    "oneLine": "新版致敬经典，一名黑道小混混与富家女的禁忌之恋，被一个神秘粤语旁白用命运口吻全程解读。"
  },
  {
    "title": "贝壳与牧师",
    "url": "./movie-1722.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 同性 / 历史",
    "tags": [
      "宗教",
      "禁忌之恋",
      "海岛",
      "自我认同",
      "诗意电影"
    ],
    "oneLine": "19世纪布列塔尼的孤岛上，一名年轻牧师在收集贝壳时，与一名被流放的画家产生了超越教义的禁忌情感。"
  },
  {
    "title": "战争回响",
    "url": "./movie-1723.html",
    "cover": "./73.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "一战",
      "创伤后应激障碍",
      "家族史诗",
      "慢热",
      "演技炸裂"
    ],
    "oneLine": "战争结束三年后，他的身体回家了，灵魂却永远留在了索姆河的战壕里。"
  },
  {
    "title": "阿蒙与橡树",
    "url": "./movie-1724.html",
    "cover": "./74.jpg",
    "year": "2010",
    "region": "丹麦 / 瑞典",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 家庭 / 奇幻",
    "tags": [
      "童年",
      "友谊",
      "树木",
      "成长",
      "北欧风"
    ],
    "oneLine": "一个孤僻的小男孩与院中一棵老橡树成为朋友，而树真的开始回应他了。"
  },
  {
    "title": "当儿女回家时",
    "url": "./movie-1725.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情, 家庭",
    "tags": [
      "催泪",
      "养老",
      "亲情绑架",
      "反转"
    ],
    "oneLine": "八十岁老母装病骗回四个儿女，本以为要分遗产，结果老人递给他们一份退休报告。"
  },
  {
    "title": "初试羽翼",
    "url": "./movie-1726.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "青春成长",
    "tags": [
      "芭蕾",
      "少女",
      "梦想与现实"
    ],
    "oneLine": "小镇芭蕾少女通过选拔进入巴黎歌剧院芭蕾舞学校，却发现这里比练功房更残酷的是人心。"
  },
  {
    "title": "三人行",
    "url": "./movie-1727.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 剧情",
    "tags": [
      "警匪",
      "密室",
      "心理博弈",
      "反转"
    ],
    "oneLine": "警察、悍匪与医生被锁在同一间急诊室，天亮前只有两人能活着走出那扇门。"
  },
  {
    "title": "夏普的战斗",
    "url": "./movie-1728.html",
    "cover": "./78.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 运动",
    "tags": [
      "励志",
      "篮球",
      "街头",
      "逆袭",
      "黑马"
    ],
    "oneLine": "前职业球员夏普沦为街头混混，却发现对手球队的教练正是当年毁掉他职业生涯的兄弟。"
  },
  {
    "title": "扑克房",
    "url": "./movie-1729.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "犯罪剧情",
    "tags": [
      "地下赌场",
      "女性",
      "绝地反击",
      "算牌",
      "父女"
    ],
    "oneLine": "地下扑克房的记账员女儿发现账本秘密后，决定用数学从黑帮手里赢回父亲的命。"
  },
  {
    "title": "印度糖果和香料",
    "url": "./movie-1730.html",
    "cover": "./80.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 家庭 / 美食",
    "tags": [
      "母女关系",
      "传统与现代",
      "移民",
      "甜点",
      "身份认同"
    ],
    "oneLine": "叛逆的女儿开了一家“不传统”的甜品店，却遭来严守家族配方的母亲下“商业战书”。"
  },
  {
    "title": "恐怖游泳馆",
    "url": "./movie-1731.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "水下",
      "换水",
      "闭馆",
      "冤魂"
    ],
    "oneLine": "废弃游泳馆每隔十年自动换一次水，这次换出来的水是红的，里面还有一双没腐烂的脚。"
  },
  {
    "title": "刺杀甘迺迪",
    "url": "./movie-1732.html",
    "cover": "./82.jpg",
    "year": "1991",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情 / 历史 / 悬疑",
    "tags": [
      "政治阴谋",
      "悬案",
      "法庭戏",
      "经典"
    ],
    "oneLine": "一位地方检察官顶住巨大压力，重新调查肯尼迪遇刺案，试图揭露背后的惊天阴谋。"
  },
  {
    "title": "红色诗篇",
    "url": "./movie-1733.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 历史",
    "tags": [
      "苏联时期",
      "诗人",
      "极权阴影",
      "爱情悲剧"
    ],
    "oneLine": "斯大林时代，一位才华横溢的年轻诗人爱上了一个“人民公敌”的女儿，他用一首首红色诗篇求生，却发现笔比枪更难控制。"
  },
  {
    "title": "呼我",
    "url": "./movie-1734.html",
    "cover": "./84.jpg",
    "year": "1998",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 爱情",
    "tags": [
      "寻呼机",
      "都市",
      "错位",
      "缘分"
    ],
    "oneLine": "一个传呼号码，连接起三个被生活困住的陌生人。"
  },
  {
    "title": "与父亲共度周末",
    "url": "./movie-1735.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "家庭 / 剧情",
    "tags": [
      "亲情",
      "和解",
      "临终",
      "日常"
    ],
    "oneLine": "每个周末，儿子开车三小时去看痴呆父亲，父亲每次都会问他：“你是谁？”"
  },
  {
    "title": "口号",
    "url": "./movie-1736.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情",
    "tags": [
      "现实主义",
      "职场",
      "黑色幽默",
      "群体心理"
    ],
    "oneLine": "一家濒临倒闭的公司里，一个没人当真的口号突然成真，所有人都开始为这句口号献祭。"
  },
  {
    "title": "终极拦截战",
    "url": "./movie-1737.html",
    "cover": "./87.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "动作、科幻",
    "tags": [
      "太空",
      "导弹",
      "AI叛乱",
      "密室逃生",
      "极限反杀"
    ],
    "oneLine": "一枚载着灭世AI的天基武器失控，最后一道防线是一个被困在太空电梯里的清洁工大叔。"
  },
  {
    "title": "战火中的花蕾",
    "url": "./movie-1738.html",
    "cover": "./88.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情战争",
    "tags": [
      "抗日战争",
      "保育院",
      "儿童",
      "女性"
    ],
    "oneLine": "1938年武汉会战，一群保育员带着上百名难童横穿大半个中国，一个也不能少。"
  },
  {
    "title": "残酷",
    "url": "./movie-1739.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪 / 动作",
    "tags": [
      "复仇",
      "暴力美学",
      "黑吃黑",
      "末世"
    ],
    "oneLine": "在垃圾堆里捡到一袋钱的前拳击手，被全国四大黑帮追杀，他决定反向屠榜。"
  },
  {
    "title": "赌神3之少年赌神",
    "url": "./movie-1740.html",
    "cover": "./90.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 动作 / 犯罪",
    "tags": [
      "赌术",
      "复仇",
      "兄弟反目",
      "逆袭"
    ],
    "oneLine": "赌术天才高进初出茅庐，却在一次生死赌局中被师兄出卖，从此踏上重塑传奇的复仇之路。"
  },
  {
    "title": "国王的选择",
    "url": "./movie-1741.html",
    "cover": "./91.jpg",
    "year": "2016",
    "region": "挪威 / 丹麦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "历史, 战争, 剧情",
    "tags": [
      "二战",
      "挪威国王",
      "纳粹",
      "抉择",
      "真实事件"
    ],
    "oneLine": "1940年，德国要求挪威投降，国王哈康七世面临一生中最重要的选择：屈服还是流亡？"
  },
  {
    "title": "黑暗录像带",
    "url": "./movie-1742.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "伪纪录片",
      "都市传说",
      "邪典",
      "单元剧"
    ],
    "oneLine": "一名失业的录像带修复师收到一箱没有标签的黑色录像带，每一盘都记录着不同人临死前的真实画面。"
  },
  {
    "title": "怒海搜救队",
    "url": "./movie-1743.html",
    "cover": "./93.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 灾难",
    "tags": [
      "海上救援",
      "兄弟情",
      "灾难"
    ],
    "oneLine": "一次地震引发超级海啸，一支精锐海上搜救队必须在死神降临前从一艘豪华邮轮上救出所有人。"
  },
  {
    "title": "镖行天下之神武大炮",
    "url": "./movie-1744.html",
    "cover": "./94.jpg",
    "year": "2018",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作, 武侠",
    "tags": [
      "镖师",
      "火器",
      "清末",
      "江湖没落"
    ],
    "oneLine": "清末，最后一家镖局接到一单怪镖：护送一门打不响的“神武大炮”进京。"
  },
  {
    "title": "秀丽江山之长歌行",
    "url": "./movie-1745.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史, 爱情, 战争",
    "tags": [
      "东汉",
      "刘秀",
      "阴丽华",
      "史诗"
    ],
    "oneLine": "新朝末年，官奴之女阴丽华与没落皇族刘秀并肩作战，在乱世中书写一段改写历史的爱情与江山长歌。"
  },
  {
    "title": "虽然只是弄丢了手机2",
    "url": "./movie-1746.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "智能手机",
      "身份盗窃",
      "社交工程",
      "数字犯罪"
    ],
    "oneLine": "上一部的黑客被逮捕后，他的“手机绑架”APP源代码泄露，导致全国出现模仿犯，而这一次目标是警察。"
  },
  {
    "title": "还是觉得你最好",
    "url": "./movie-1747.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情, 喜剧",
    "tags": [
      "前任",
      "死对头",
      "二次追爱",
      "港式幽默"
    ],
    "oneLine": "分手五年的毒舌情侣在一档离婚综艺重逢，假装和好骗通告费，结果假戏真做，再次撕得不可开交。"
  },
  {
    "title": "老男孩之猛龙过江",
    "url": "./movie-1748.html",
    "cover": "./98.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 喜剧",
    "tags": [
      "中年危机",
      "异国奇遇",
      "黑帮火并",
      "怀旧金曲"
    ],
    "oneLine": "两个过气东北小歌手误打误撞卷入纽约黑帮的假钞案，命悬一线却意外成了地下英雄。"
  },
  {
    "title": "危险边缘",
    "url": "./movie-1749.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作， 惊悚",
    "tags": [
      "拆弹专家",
      "倒计时",
      "孤胆英雄"
    ],
    "oneLine": "一名退役拆弹专家发现自己的心脏被植入炸弹，必须在24小时内找到真凶。"
  },
  {
    "title": "越爱越美丽",
    "url": "./movie-1750.html",
    "cover": "./100.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "家庭 / 喜剧",
    "tags": [
      "重组家庭",
      "中年恋爱",
      "市井温情"
    ],
    "oneLine": "离异的花店主和单亲的烧烤摊老板相亲相杀，两家四个孩子联手阻止他们“黄昏恋”。"
  },
  {
    "title": "无仁义之战",
    "url": "./movie-1751.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "犯罪 / 剧情 / 动作 / 黑帮",
    "tags": [
      "极道",
      "暴力美学",
      "昭和背景",
      "权力斗争",
      "翻拍经典"
    ],
    "oneLine": "昭和年间的广岛，退伍军人广能昌三被迫卷入黑帮斗争，发现这里没有仁义，只有背叛。"
  },
  {
    "title": "追寻巫毒：天国之根",
    "url": "./movie-1752.html",
    "cover": "./102.jpg",
    "year": "2023",
    "region": "美国 / 海地",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "恐怖 / 奇幻 / 历史",
    "tags": [
      "巫毒",
      "殖民史",
      "丧尸真实起源",
      "宗教探秘",
      "女祭司"
    ],
    "oneLine": "人类学家在海地田野调查巫毒仪式时，意外发现所谓的“丧尸粉”真的存在，而且能揭示西非黑奴跨越海洋的精神不灭。"
  },
  {
    "title": "阿公阿嬷超速配",
    "url": "./movie-1753.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "taiwan",
    "genre": "真人秀, 恋爱, 老年",
    "tags": [
      "黄昏恋",
      "代际沟通",
      "感人"
    ],
    "oneLine": "一群丧偶或离异的银发族在子女的安排下参加恋爱综艺，寻找人生后半场的灵魂伴侣。"
  },
  {
    "title": "鬼娃回魂",
    "url": "./movie-1754.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖、惊悚、奇幻",
    "tags": [
      "玩偶",
      "诅咒",
      "血腥",
      "重启",
      "灵异"
    ],
    "oneLine": "一个被邪灵附体的娃娃，每杀一个人就会变大十厘米，它想通过杀人变成真人。"
  },
  {
    "title": "摄影机不要停！",
    "url": "./movie-1755.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧, 恐怖, 剧情",
    "tags": [
      "一镜到底",
      "戏中戏",
      "僵尸片",
      "剧组日常",
      "温情"
    ],
    "oneLine": "一个电视节目组在废墟拍僵尸片时遇到了真僵尸，导演却大喊“摄影机不要停，我要拍完！”"
  },
  {
    "title": "新年甜心",
    "url": "./movie-1756.html",
    "cover": "./106.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情、喜剧",
    "tags": [
      "春节",
      "甜点",
      "欢喜冤家",
      "治愈"
    ],
    "oneLine": "厌世甜点师被迫回家过年，竟与青梅竹马的“死对头”联手拯救即将倒闭的家族糕饼店。"
  },
  {
    "title": "婆婆和妈妈第二季",
    "url": "./movie-1757.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀 / 家庭",
    "tags": [
      "婆媳",
      "女婿",
      "代际",
      "观察"
    ],
    "oneLine": "四组明星家庭互换婆婆/妈妈，让别人的妈来管教自己的儿媳妇/女婿，代际矛盾全面升级。"
  },
  {
    "title": "执刑者的告白",
    "url": "./movie-1758.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "犯罪/惊悚/剧情",
    "tags": [
      "死刑犯",
      "反转",
      "司法正义",
      "密室推理",
      "人性拷问"
    ],
    "oneLine": "一位即将退休的法场执刑者，在最后一次行刑前，收到了死囚递来的一张纸条：“我是无辜的，而你才是真凶。”"
  },
  {
    "title": "长腿叔叔",
    "url": "./movie-1759.html",
    "cover": "./109.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情, 都市, 剧情",
    "tags": [
      "代际恋",
      "资助与被资助",
      "治愈系",
      "慢热"
    ],
    "oneLine": "被资助女孩长大成人后寻找资助人“长腿叔叔”，却发现对方是一个只比自己大八岁的年轻医生。"
  },
  {
    "title": "我是乔治娜第一季",
    "url": "./movie-1760.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "传记 / 剧情 / 历史",
    "tags": [
      "英伦贵族",
      "王室情妇",
      "女性觉醒",
      "18世纪"
    ],
    "oneLine": "乔治娜·卡文迪什不是公爵夫人，她是德文郡的“第一夫人”，也是赌桌上敢和国王对赌的女人。"
  },
  {
    "title": "你们这些人",
    "url": "./movie-1761.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "欧美",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 爱情, 社会",
    "tags": [
      "黑白联姻",
      "家庭闹剧",
      "种族偏见",
      "岳父大战",
      "网络梗"
    ],
    "oneLine": "黑人文化博主和白人犹太女孩订婚，两家人见面那天，餐桌成了第三次世界大战的爆发点。 当保守岳父遇到潮流准女婿，从订婚戒指的款式到婚礼菜单，每一件事都能掀起一场网络对线。"
  },
  {
    "title": "艾尔·卡彭",
    "url": "./movie-1762.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "犯罪 / 传记",
    "tags": [
      "黑帮",
      "禁酒令",
      "枭雄末路"
    ],
    "oneLine": "聚焦黑帮教父卡彭出狱后的最后十年，疯癫、失禁与被过去幽灵缠绕的凄凉晚年。"
  },
  {
    "title": "科迪内",
    "url": "./movie-1763.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情、音乐",
    "tags": [
      "钢琴",
      "自闭症",
      "天才",
      "家庭",
      "救赎"
    ],
    "oneLine": "一位有着绝对音感但拒绝弹琴的自闭症少年，被迫与一只会“哼唱”的流浪猫合作，完成一场葬礼演奏。"
  },
  {
    "title": "女孩有问题",
    "url": "./movie-1764.html",
    "cover": "./114.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "青春 / 喜剧",
    "tags": [
      "高中",
      "女汉子",
      "性别刻板",
      "成长"
    ],
    "oneLine": "一个野惯了的假小子被迫进入贵族女校，她把整个淑女学堂搅得天翻地覆。"
  },
  {
    "title": "夺金歼霸战",
    "url": "./movie-1765.html",
    "cover": "./115.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作，犯罪，冒险",
    "tags": [
      "夺宝",
      "黑帮",
      "枪战",
      "兄弟反目",
      "荷尔蒙"
    ],
    "oneLine": "黑帮大哥临终前留下金库地图，三个义子为夺遗产掀起腥风血雨，却不知背后另有黄雀。"
  },
  {
    "title": "唐宫奇案青雾风鸣",
    "url": "./movie-1766.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑 / 古装 / 探案",
    "tags": [
      "唐朝",
      "大理寺",
      "女仵作",
      "朝堂斗争",
      "连环杀人"
    ],
    "oneLine": "武则天时期，洛阳城突现“青雾索命”案，大理寺唯一的女仵作联手狄仁杰之徒，揭开宫闱秘药之迷。"
  },
  {
    "title": "加菲猫国语",
    "url": "./movie-1767.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "美国 / 中国大陆（配音）",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画，喜剧，家庭",
    "tags": [
      "国配",
      "懒猫",
      "美食冒险"
    ],
    "oneLine": "国语配音版加菲猫被主人遗弃在乡下，却发现自己是继承了一座猫粮工厂的唯一继承人。"
  },
  {
    "title": "地藏龙神农巨兽",
    "url": "./movie-1768.html",
    "cover": "./118.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作 / 惊悚",
    "tags": [
      "怪兽",
      "考古",
      "奇幻",
      "特效"
    ],
    "oneLine": "神农架深处，考古队意外唤醒了沉睡千年的地藏龙，一场丛林大逃杀开始。"
  },
  {
    "title": "长腿女孩们",
    "url": "./movie-1769.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "加拿大, 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 青春",
    "tags": [
      "青少年",
      "高个子",
      "排球队",
      "自卑与超越"
    ],
    "oneLine": "学校排球队里四个身高一米八以上的女孩，一个想变矮，一个想变美，一个想消失，一个想杀人。"
  },
  {
    "title": "史蒂夫与小天",
    "url": "./movie-1770.html",
    "cover": "./120.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画/家庭",
    "tags": [
      "友谊",
      "外星人",
      "成长",
      "治愈"
    ],
    "oneLine": "内向男孩史蒂夫救了一个话痨外星小章鱼，然后整个小镇都变得不太正常了。"
  },
  {
    "title": "东寺街西寺巷新传",
    "url": "./movie-1771.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 方言, 情景",
    "tags": [
      "昆明",
      "老街拆迁",
      "网红经济",
      "地方文化"
    ],
    "oneLine": "为了保住即将被改造成网红街的老巷子，一群昆明土著开始了花式整活。"
  },
  {
    "title": "颠倒的帕特玛",
    "url": "./movie-1772.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻 / 奇幻 / 爱情",
    "tags": [
      "反重力",
      "乌托邦",
      "少年少女"
    ],
    "oneLine": "在地下世界，“向下掉”意味着死亡；她意外“向上掉”，撞进了天空少年的怀里。"
  },
  {
    "title": "私事",
    "url": "./movie-1773.html",
    "cover": "./123.jpg",
    "year": "2020",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑犯罪",
    "tags": [
      "心理惊悚",
      "家族秘密",
      "伦理困境",
      "反转"
    ],
    "oneLine": "女儿失踪后，母亲翻出她的日记，发现最大的嫌疑人竟是自己。"
  },
  {
    "title": "有点可爱的女子高中拷问社",
    "url": "./movie-1774.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "喜剧, 校园, 日常",
    "tags": [
      "反差萌",
      "中二病",
      "重口味治愈"
    ],
    "oneLine": "为了帮朋友找回被抢的限量版游戏机，胆小如鼠的女主角被迫加入了传闻中“会用刑”的神秘拷问社。"
  },
  {
    "title": "少男少女恋爱",
    "url": "./movie-1775.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "青春爱情",
    "tags": [
      "校园",
      "纯爱",
      "成长",
      "夏日",
      "双向暗恋"
    ],
    "oneLine": "当全校最冷淡的资优生发现，那个总是迟到的吊车尾同学，其实是十年前陪她在病房里画星星的男孩。"
  },
  {
    "title": "深心密语",
    "url": "./movie-1776.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚, 科幻, 心理",
    "tags": [
      "读心术",
      "临床实验",
      "夫妻",
      "信任崩塌"
    ],
    "oneLine": "一项能听见伴侣内心真实声音的临床实验，让三对夫妻的婚姻在一夜间崩溃。"
  },
  {
    "title": "霸王贵妃",
    "url": "./movie-1777.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装, 动作, 爱情",
    "tags": [
      "女强",
      "宫廷权谋",
      "东方奇幻"
    ],
    "oneLine": "当杨贵妃拿起霸王戟，她不再是君王怀中的玩物，而是镇压叛乱的最后战神。"
  },
  {
    "title": "总统特务",
    "url": "./movie-1778.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作悬疑",
    "tags": [
      "青瓦台暗战",
      "双面间谍",
      "替身疑云"
    ],
    "oneLine": "总统的贴身保镖姜泰植在暗杀中救下领导，事后却被秘密告知：“你救的总统是假的，真总统三个月前就被替换了。”"
  },
  {
    "title": "老化",
    "url": "./movie-1779.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "法国, 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖, 科幻",
    "tags": [
      "衰老加速",
      "实验药物",
      "养老院",
      "身体恐怖"
    ],
    "oneLine": "一种抗衰老药被偷偷换成加速老化剂后，整栋公寓楼的老人们开始以小时为单位“返老还童”，然后腐烂。"
  },
  {
    "title": "多浪迪警官3：保护者",
    "url": "./movie-1780.html",
    "cover": "./130.jpg",
    "year": "2014",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "西班牙恶搞",
      "奇葩警察",
      "贩毒集团",
      "加勒比风情"
    ],
    "oneLine": "混世魔王多浪迪警官奉命保护一位美国毒枭污点证人，却阴差阳错搅黄了整个迈阿密的毒品交易。"
  },
  {
    "title": "百战天龙第一季",
    "url": "./movie-1781.html",
    "cover": "./131.jpg",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "动作 / 冒险",
    "tags": [
      "智斗",
      "自制工具",
      "天才",
      "特工",
      "翻拍"
    ],
    "oneLine": "年轻天才麦盖佛凭借一把瑞士军刀和物理化学知识，不用枪械就能化解各种致命危机。"
  },
  {
    "title": "荡妇娜娜",
    "url": "./movie-1782.html",
    "cover": "./132.jpg",
    "year": "1976",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 情色",
    "tags": [
      "左岸派",
      "人性",
      "巴黎",
      "悲剧"
    ],
    "oneLine": "一个被称作荡妇的歌女，用身体换取金钱，最后却发现自己是唯一清醒的人。"
  },
  {
    "title": "无障碍杀手",
    "url": "./movie-1783.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 犯罪",
    "tags": [
      "轮椅",
      "杀手",
      "反套路"
    ],
    "oneLine": "坐在轮椅上的残疾杀手，利用城市“无障碍设施”的反向设计，完成不可能的任务。"
  },
  {
    "title": "我的牙想你",
    "url": "./movie-1784.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "爱情 / 喜剧",
    "tags": [
      "牙医",
      "BL",
      "甜蜜治愈",
      "恐医梗"
    ],
    "oneLine": "一个害怕看牙的傲娇设计师，遇到了一个温柔帅气的牙医，从拔牙开始恋爱。"
  },
  {
    "title": "爱上特种兵",
    "url": "./movie-1785.html",
    "cover": "./135.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 军旅",
    "tags": [
      "军医",
      "特种兵",
      "反恐",
      "生死恋"
    ],
    "oneLine": "心外科女医生被派往特种部队做随队军医，发现那个冷面无情的队长竟是两年前从她手术台消失的病人。"
  },
  {
    "title": "群众",
    "url": "./movie-1786.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 悬疑 / 社会",
    "tags": [
      "集体犯罪",
      "电车难题",
      "法不责众"
    ],
    "oneLine": "一辆公交车上的45名乘客同时指认同一个人是小偷，但监控显示那个人从未伸手。"
  },
  {
    "title": "风和日丽",
    "url": "./movie-1787.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情 / 家庭",
    "tags": [
      "返乡",
      "和解",
      "乡村",
      "美食"
    ],
    "oneLine": "一个在大城市身败名裂的米其林主厨，被迫回到那个连酱油都是自酿的台风眼故乡。"
  },
  {
    "title": "我爱俏冤家粤语",
    "url": "./movie-1788.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "爱情 / 喜剧",
    "tags": [
      "粤语",
      "欢喜冤家",
      "同居",
      "都市情感",
      "爆笑"
    ],
    "oneLine": "分手三年的前情侣因租房陷阱被迫再次同居，他们签下“互不侵犯条约”，却每天都在打破它。"
  },
  {
    "title": "海岸之光",
    "url": "./movie-1789.html",
    "cover": "./139.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 家庭",
    "tags": [
      "灯塔",
      "自闭症",
      "父女",
      "救赎"
    ],
    "oneLine": "灯塔看守人带着自闭症女儿在孤岛生活十年，直到一通求救电话打破了宁静。"
  },
  {
    "title": "黄石第三季",
    "url": "./movie-1790.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 西部 / 犯罪",
    "tags": [
      "牧场",
      "家族",
      "土地争夺",
      "印第安",
      "硬汉"
    ],
    "oneLine": "新势力入侵蒙大拿，达顿家族腹背受敌，内部的信任却在猎人小屋里被一场暴风雪摧毁。"
  },
  {
    "title": "等到烟暖雨收第二季",
    "url": "./movie-1791.html",
    "cover": "./141.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装、爱情、奇幻",
    "tags": [
      "续作",
      "隔世情缘",
      "阴谋"
    ],
    "oneLine": "第一世的错过终成遗憾，这一世，她成了将军，而他成了她的阶下囚。"
  },
  {
    "title": "冷饭和厨娘和父亲",
    "url": "./movie-1792.html",
    "cover": "./142.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭 / 美食",
    "tags": [
      "治愈",
      "料理",
      "亲情",
      "和解",
      "乡愁"
    ],
    "oneLine": "一个只会做蛋炒饭的父亲，为了留住女儿的记忆，每天凌晨四点起来练习刀工，只为做出妈妈的味道。"
  },
  {
    "title": "加油！胖虎！！",
    "url": "./movie-1793.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧 / 运动",
    "tags": [
      "相扑",
      "减肥",
      "逆袭",
      "师徒",
      "热血"
    ],
    "oneLine": "300斤的废柴高中生被退休相扑教练骗进社团，目标是——减到150斤并赢一场。"
  },
  {
    "title": "恋上老大姐",
    "url": "./movie-1794.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "微短剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情 / 都市",
    "tags": [
      "姐弟恋",
      "职场",
      "年下奶狗",
      "反套路",
      "轻喜"
    ],
    "oneLine": "24岁实习男模倒追35岁离婚女总监，却被女总监当成来公司窃取商业机密的商业间谍。"
  },
  {
    "title": "咸湿皇帝",
    "url": "./movie-1795.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "意大利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 历史 / 情色",
    "tags": [
      "古罗马",
      "政治隐喻",
      "权力与性"
    ],
    "oneLine": "提比略皇帝在卡普里岛纵情声色，实则是用一场巨大的情色表演掩盖他寻找长生不死之药的秘密行动。"
  },
  {
    "title": "桃源艳舞",
    "url": "./movie-1796.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 情色 / 历史",
    "tags": [
      "民国舞女",
      "女性互助",
      "禁忌之恋",
      "时代悲剧"
    ],
    "oneLine": "1930年代香港塘西，一群被叫做“艳舞娘”的女人，想在乱世里活出最后的尊严。"
  },
  {
    "title": "绝对舞力",
    "url": "./movie-1797.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "美国 / 巴西",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "音乐 / 舞蹈 / 运动",
    "tags": [
      "街舞对决",
      "贫民窟",
      "励志"
    ],
    "oneLine": "里约贫民窟的街舞少年为了保住社区不被强拆，必须在地下舞会中击败由地产商赞助的全球最强舞团。"
  },
  {
    "title": "蜘蛛人：惊奇再起",
    "url": "./movie-1798.html",
    "cover": "./148.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "超级英雄",
      "重启",
      "蛛丝",
      "高中生",
      "格温"
    ],
    "oneLine": "一个被蜘蛛咬伤的高中生获得了超能力，但他很快发现，杀死叔叔的凶手和反派蜥蜴人的身世指向了同一个秘密。"
  },
  {
    "title": "猎杀任务",
    "url": "./movie-1799.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "赏金猎人",
      "黑吃黑",
      "复仇循环",
      "巷战枪火"
    ],
    "oneLine": "顶级赏金猎人接了人生最后一单：猎杀三年前害死他搭档的杀手，但他发现雇主就是那个杀手。"
  },
  {
    "title": "摩登原始人之摔跤赛攻击波",
    "url": "./movie-1800.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧, 动画, 运动",
    "tags": [
      "恶搞",
      "原始人",
      "摔跤",
      "无厘头",
      "合家欢"
    ],
    "oneLine": "石器时代的穴居人为争夺一块刻有“烤全羊秘方”的石板，举办了一场史无前例的泥浆摔跤锦标赛。"
  },
  {
    "title": "嫁错师",
    "url": "./movie-1801.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 喜剧 / 爱情",
    "tags": [
      "师徒恋",
      "反套路",
      "轻喜剧",
      "错位人生",
      "成长"
    ],
    "oneLine": "拜师大会上，她认错了师父，从此跟着一个江湖骗子开始了啼笑皆非的“修仙”之路。"
  },
  {
    "title": "滇西1944",
    "url": "./movie-1802.html",
    "cover": "./2.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "战争 / 历史",
    "tags": [
      "抗日战争",
      "松山战役",
      "远征军",
      "真实改编"
    ],
    "oneLine": "1944年滇西大反攻前夕，一群普通士兵被推入松山绞肉机，他们唯一的信念是活着看到胜利的旗帜。"
  },
  {
    "title": "松岭（电影）",
    "url": "./movie-1803.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 犯罪",
    "tags": [
      "东北",
      "悬疑",
      "下岗潮",
      "追凶",
      "冷冽"
    ],
    "oneLine": "一座因伐木而兴也因禁伐而废的小镇，二十年前后的两起绑架案，指向同一个秘密。"
  },
  {
    "title": "直率症",
    "url": "./movie-1804.html",
    "cover": "./4.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 剧情",
    "tags": [
      "直率",
      "谎言",
      "人际",
      "黑色幽默"
    ],
    "oneLine": "一个无法忍受谎言的女人，决定从今往后再也不说一句假话，生活因此陷入了疯狂。"
  },
  {
    "title": "乘风破浪的姐姐第二季",
    "url": "./movie-1805.html",
    "cover": "./5.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀，音乐",
    "tags": [
      "女性成长",
      "成团竞演",
      "破龄追梦"
    ],
    "oneLine": "三十位新老姐姐重回追光起点，这次她们不仅要成团，更要与过去的自己和解。"
  },
  {
    "title": "童子护宝",
    "url": "./movie-1806.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 冒险, 家庭",
    "tags": [
      "儿童",
      "国宝",
      "夏令营",
      "笨贼",
      "荒诞"
    ],
    "oneLine": "一帮小学生在山里夏令营捡到国宝，被迫与三拨笨贼斗智斗勇。"
  },
  {
    "title": "北京女人",
    "url": "./movie-1807.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 都市 / 女性",
    "tags": [
      "北漂",
      "中年危机",
      "姐妹情"
    ],
    "oneLine": "三位四十岁北京女人，在离婚、失业、患癌的夹缝中重新找回自我。"
  },
  {
    "title": "海边的露易丝",
    "url": "./movie-1808.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情、同性、家庭",
    "tags": [
      "海边小镇",
      "老年女同",
      "记忆",
      "重逢"
    ],
    "oneLine": "80 岁的老奶奶露易丝，在痴呆症日益严重时，决定离开养老院，去见 50 年前被迫分离的恋人。"
  },
  {
    "title": "超级破坏王",
    "url": "./movie-1809.html",
    "cover": "./9.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画/喜剧",
    "tags": [
      "游戏",
      "冒险",
      "反派",
      "逆袭"
    ],
    "oneLine": "一个80年代街机游戏里的反派角色，厌倦了当坏人，穿越到其他游戏想拿一枚英雄奖牌。"
  },
  {
    "title": "猫2020",
    "url": "./movie-1810.html",
    "cover": "./10.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 动物",
    "tags": [
      "疫情",
      "猫",
      "空城",
      "陪伴"
    ],
    "oneLine": "2020年春节，一只流浪猫在封城的武汉穿梭，把几位被隔离在不同窗户里的孤独灵魂串联在一起。"
  },
  {
    "title": "守望的天空",
    "url": "./movie-1811.html",
    "cover": "./11.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "TV剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情，家庭",
    "tags": [
      "自闭症",
      "亲情",
      "坚韧",
      "女性成长",
      "社会责任"
    ],
    "oneLine": "一个被父母抛弃的女孩，成年后却不得不独自照顾患有自闭症的哥哥和同样命运的外甥。"
  },
  {
    "title": "扯线王子复仇记",
    "url": "./movie-1812.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "英国 / 澳大利亚",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 奇幻 / 动作",
    "tags": [
      "木偶",
      "复仇",
      "傀儡术",
      "宫廷",
      "血腥"
    ],
    "oneLine": "一个被制成提线木偶的王子，操控着看不见的丝线，向篡位的弟弟展开血腥复仇。"
  },
  {
    "title": "公主出山",
    "url": "./movie-1813.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 古装 / 冒险",
    "tags": [
      "公主",
      "女扮男装",
      "江湖",
      "反套路",
      "搞笑"
    ],
    "oneLine": "刁蛮公主逃出皇宫闯荡江湖，以为自己会遇到大侠和爱情，结果被骗子卖了三回，还倒欠一屁股债。"
  },
  {
    "title": "霹雳皇龙纪",
    "url": "./movie-1814.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "武侠 / 奇幻 / 布袋戏",
    "tags": [
      "布袋戏",
      "皇权争斗",
      "神魔对决"
    ],
    "oneLine": "皇龙现世，三教倾危，一个失忆的刀客发现自己就是被封印的暴君皇龙。"
  },
  {
    "title": "美国情人",
    "url": "./movie-1815.html",
    "cover": "./15.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 喜剧",
    "tags": [
      "女性友谊",
      "纽约",
      "独立电影"
    ],
    "oneLine": "一个狂野的三十岁女人带着一个单纯的大学新生在纽约冒险，试图找回破碎的梦想，却差点毁了对方的生活。"
  },
  {
    "title": "我的意外闺蜜",
    "url": "./movie-1816.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 都市 / 女性",
    "tags": [
      "双女主",
      "阶层差异",
      "治愈友情",
      "职场"
    ],
    "oneLine": "高冷女霸总被迫与话痨外卖员同居，竟意外治好了彼此的抑郁症。"
  },
  {
    "title": "画江湖之杯莫停",
    "url": "./movie-1817.html",
    "cover": "./17.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "武侠、热血、古风",
    "tags": [
      "国漫",
      "权谋",
      "江湖恩怨",
      "反套路",
      "武力排名"
    ],
    "oneLine": "宗帅府悬赏“人未尽，杯莫停”追杀令，六位绝世高手为一句谶言杀到只剩最后一个。"
  },
  {
    "title": "绝命时钟2:22",
    "url": "./movie-1818.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "惊悚，悬疑",
    "tags": [
      "时空循环",
      "诅咒",
      "数字强迫症",
      "都市传说"
    ],
    "oneLine": "一名程序员发现每天下午2:22都会发生一场微型灾难，而当他把这个规律发布到网上后，灾难开始升级。"
  },
  {
    "title": "猫侍2",
    "url": "./movie-1819.html",
    "cover": "./19.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "喜剧, 奇幻",
    "tags": [
      "武士",
      "猫咪",
      "治愈",
      "续集",
      "搞笑"
    ],
    "oneLine": "落魄武士带着他“凶恶”的白猫玉之丞前往南方小岛，却卷入了两派猫奴的领地之争。"
  },
  {
    "title": "天狼劫粤语",
    "url": "./movie-1820.html",
    "cover": "./20.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "武侠, 奇幻",
    "tags": [
      "狼族诅咒",
      "粤语原声",
      "宿命恩仇"
    ],
    "oneLine": "被狼族养大的少侠卷入江湖阴谋，每次月圆变身时都会失去记忆，而仇人可能正是自己。"
  },
  {
    "title": "穷友记第五季",
    "url": "./movie-1821.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "喜剧",
    "tags": [
      "黑色幽默",
      "底层生活",
      "群像剧",
      "英式吐槽"
    ],
    "oneLine": "为了保住最后一片社区花园，穷友们决定绑架一位过气网红来凑够赎金。"
  },
  {
    "title": "全员死刑",
    "url": "./movie-1822.html",
    "cover": "./22.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": [
      "密室",
      "暴风雪山庄",
      "算计",
      "人性实验"
    ],
    "oneLine": "六个被判死刑的囚犯被关在孤岛上，最后活着的人可以免罪，但这里根本没有活路。"
  },
  {
    "title": "对我来说非常珍贵的你",
    "url": "./movie-1823.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "剧情 / 爱情",
    "tags": [
      "虐恋",
      "失忆",
      "重逢",
      "纯爱",
      "催泪"
    ],
    "oneLine": "一场车祸让他失去了过去十年的记忆，只记得高中时暗恋的学姐；而那个学姐，正是车祸后一直默默照顾他的前妻。"
  },
  {
    "title": "竞争对手",
    "url": "./movie-1824.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "剧情 / 运动 / 商战",
    "tags": [
      "网球",
      "姐妹反目",
      "体育经纪",
      "家族企业",
      "双雄对决"
    ],
    "oneLine": "一对天才网球姐妹，在场上是对手，在场下却争夺同一家经纪公司的掌控权。"
  },
  {
    "title": "少年歌行风花雪月篇",
    "url": "./movie-1825.html",
    "cover": "./25.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "动漫剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "武侠， 古风， 热血",
    "tags": [
      "江湖",
      "少年意气",
      "权谋",
      "国风美学"
    ],
    "oneLine": "无心、萧瑟、雷无桀三人误入雪落山庄，却被卷入一场关乎江湖与皇权的“风花雪月”迷局。"
  },
  {
    "title": "双生契",
    "url": "./movie-1826.html",
    "cover": "./26.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": [
      "双生子",
      "替嫁",
      "灵魂互换",
      "权谋",
      "虐恋"
    ],
    "oneLine": "孪生姐妹一个替嫁入宫、一个流落江湖，却在某夜互换灵魂，从此命运彻底错位。"
  },
  {
    "title": "在切瑟尔海滩上",
    "url": "./movie-1827.html",
    "cover": "./27.jpg",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 爱情, 历史",
    "tags": [
      "时代悲剧",
      "新婚",
      "细腻"
    ],
    "oneLine": "新婚之夜，两个因成长背景天差地别的年轻人，在海滩上耗尽了最后的爱情。"
  },
  {
    "title": "麻辣芳邻",
    "url": "./movie-1828.html",
    "cover": "./28.jpg",
    "year": "2016",
    "region": "中国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧, 爱情",
    "tags": [
      "邻居",
      "姐弟恋",
      "麻辣",
      "市井"
    ],
    "oneLine": "一个离异带娃的麻辣烫老板娘，隔壁搬来一个洁癖又毒舌的男医生，两人从互扔垃圾开始相爱。"
  },
  {
    "title": "白蛇女碎尸还孽债",
    "url": "./movie-1829.html",
    "cover": "./29.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖, 情色, 奇幻",
    "tags": [
      "港产邪典",
      "因果报应",
      "蛇妖"
    ],
    "oneLine": "白蛇修炼千年失败，碎尸化作七块怨灵，分别附身负心汉的七世情人。"
  },
  {
    "title": "百变小姬子",
    "url": "./movie-1830.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "奇幻",
    "tags": [
      "变身",
      "职场",
      "女性",
      "治愈",
      "单元剧"
    ],
    "oneLine": "30岁普通上班族小姬，某天获得一面能让自己“变成任何想成为的人”的魔法化妆镜，但每次变身都伴随着一个代价。"
  },
  {
    "title": "荣耀大道",
    "url": "./movie-1831.html",
    "cover": "./31.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "运动 / 剧情",
    "tags": [
      "橄榄球",
      "励志",
      "种族",
      "高校"
    ],
    "oneLine": "1971年，一支全黑人高中的橄榄球队，如何用冠军砸碎种族隔离的玻璃门。"
  },
  {
    "title": "圣·弗朗西斯",
    "url": "./movie-1832.html",
    "cover": "./32.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧 / 剧情",
    "tags": [
      "独立电影",
      "女性",
      "生活流",
      "温情"
    ],
    "oneLine": "夏天，一个一事无成的34岁女人找到一份保姆的工作，她需要照顾的不是孩子，而是孩子的两位妈妈。"
  },
  {
    "title": "体验1973",
    "url": "./movie-1833.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻悬疑",
    "tags": [
      "时间旅行",
      "沉浸式体验",
      "谜团",
      "冷战",
      "阴谋"
    ],
    "oneLine": "一家科技公司推出“沉浸式1973体验”服务，付费客户进入虚拟世界后却集体失忆，只有一人活着回来。"
  },
  {
    "title": "偷窥骇客",
    "url": "./movie-1834.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "悬疑，惊悚，犯罪",
    "tags": [
      "黑客",
      "反向监控",
      "直播杀人",
      "烧脑"
    ],
    "oneLine": "一名白帽黑客发现自己所有设备都被入侵，入侵者不是要钱，而是强迫他欣赏一场精心策划的“透明人生”直播。"
  },
  {
    "title": "大冒险家：森林王子",
    "url": "./movie-1835.html",
    "cover": "./35.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影 / 动画",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画 / 冒险",
    "tags": [
      "冒险",
      "丛林",
      "勇气",
      "动物",
      "奇幻"
    ],
    "oneLine": "从未离开过城市的富家少爷意外流落亚马逊丛林，一只被族群抛弃的美洲豹成了他的唯一向导。"
  },
  {
    "title": "鬼把戏",
    "url": "./movie-1836.html",
    "cover": "./36.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "魔术",
      "轮回",
      "复仇",
      "道具",
      "经典"
    ],
    "oneLine": "魔术师意外得到清朝幻术师的头骨，每表演一个魔术，就会有一个观众离奇死亡。"
  },
  {
    "title": "小淘气尼古拉的假期",
    "url": "./movie-1837.html",
    "cover": "./37.jpg",
    "year": "2014",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "喜剧, 家庭",
    "tags": [
      "儿童",
      "暑假",
      "海边",
      "捣蛋"
    ],
    "oneLine": "尼古拉和朋友们在暑假的海滨度假村里误以为老板是绑架犯，于是展开了一场啼笑皆非的“营救行动”。"
  },
  {
    "title": "血洗迪亚兹",
    "url": "./movie-1838.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 犯罪",
    "tags": [
      "毒枭",
      "复仇",
      "枪战",
      "家族",
      "暴力美学"
    ],
    "oneLine": "毒枭迪亚兹全家在婚礼上被灭门后，唯一幸存的小女儿用十年练成杀手，回来顶替父亲的位置。"
  },
  {
    "title": "加沙，我的爱",
    "url": "./movie-1839.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "巴勒斯坦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 爱情",
    "tags": [
      "战争与人",
      "废墟之恋",
      "诗意现实主义",
      "人道主义"
    ],
    "oneLine": "在加沙的断壁残垣间，一名废墟画家与一个不知姓名的少女，用涂鸦写下了无声的情书。"
  },
  {
    "title": "伞兵团突围战",
    "url": "./movie-1840.html",
    "cover": "./40.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "战争",
    "tags": [
      "空降兵",
      "敌后突围",
      "兄弟情义"
    ],
    "oneLine": "被包围的伞兵小队必须在48小时内带着一份绝密地图穿越百里封锁线。"
  },
  {
    "title": "破碎的彩虹",
    "url": "./movie-1841.html",
    "cover": "./41.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情、同性、家庭",
    "tags": [
      "LGBT",
      "领养",
      "单亲母亲",
      "社会偏见"
    ],
    "oneLine": "一个离异直女妈妈领养了三个被遗弃的LGBTQ+青少年，组成了一个“破碎但彩色”的拼盘家庭。"
  },
  {
    "title": "深夜加油站遇见大逃杀",
    "url": "./movie-1842.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "惊悚 / 黑色喜剧",
    "tags": [
      "密室",
      "阶级",
      "讽刺"
    ],
    "oneLine": "深夜加油站里，七位陌生人突然被拉入一场“低分者淘汰”的饥饿游戏。"
  },
  {
    "title": "我心狂野",
    "url": "./movie-1843.html",
    "cover": "./43.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "爱情 / 犯罪 / 公路",
    "tags": [
      "大卫·林奇",
      "蛇皮外套",
      "公路逃亡",
      "狂热爱情"
    ],
    "oneLine": "刚出狱的塞勒拥抱着女友萝拉开车驶向加州，身后是追杀他们的杀手和燃烧的记忆。"
  },
  {
    "title": "海上的天使",
    "url": "./movie-1844.html",
    "cover": "./44.jpg",
    "year": "2010",
    "region": "法国 / 以色列",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 战争",
    "tags": [
      "以巴冲突",
      "音乐救赎",
      "禁忌之恋",
      "海法",
      "小号"
    ],
    "oneLine": "犹太女孩捡到一只来自加沙的小号，吹响时，她听到了敌人的心跳。"
  },
  {
    "title": "四个丘比特",
    "url": "./movie-1845.html",
    "cover": "./45.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧 / 爱情",
    "tags": [
      "四胞胎",
      "相亲",
      "乌龙",
      "都市"
    ],
    "oneLine": "男主同时追求四胞胎姐妹，却不知她们会随时互换身份。"
  },
  {
    "title": "黑夜如潮",
    "url": "./movie-1846.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪剧情",
    "tags": [
      "卧底黑帮",
      "女性复仇",
      "潮湿美学",
      "伦理困境",
      "宿命"
    ],
    "oneLine": "女警潜入三代黑帮世家，当她与目标对象产生跨世代的共情时，黑夜的潮水淹没了法律与道德的边界。"
  },
  {
    "title": "噩梦现形记",
    "url": "./movie-1847.html",
    "cover": "./47.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "悬疑, 恐怖, 科幻",
    "tags": [
      "梦境",
      "心理",
      "高概念"
    ],
    "oneLine": "一个能进入他人梦境的设备问世后，使用者发现，所有人的噩梦都在指向同一个真实存在的怪物。"
  },
  {
    "title": "日落黄沙",
    "url": "./movie-1848.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "西部, 剧情",
    "tags": [
      "末世",
      "公路",
      "暴力美学",
      "救赎",
      "独行侠"
    ],
    "oneLine": "在全球沙化的末日，一个独眼赏金猎人护送一个怀孕的机器人穿越死亡沙海，只为换取一张能喝到干净水的绿洲入场券。"
  },
  {
    "title": "班亚和蕾雨",
    "url": "./movie-1849.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情 / 奇幻",
    "tags": [
      "平行时空",
      "雨季",
      "错过",
      "宿命",
      "文艺"
    ],
    "oneLine": "每当雨季来临，男孩班亚就会穿越到一个只有女孩蕾雨存在的平行世界，但他每次只能停留一天。"
  },
  {
    "title": "丹麦女孩",
    "url": "./movie-1850.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "美国 / 英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "传记剧情",
    "tags": [
      "性别认同",
      "艺术",
      "爱情",
      "觉醒"
    ],
    "oneLine": "风景画家偶然穿上女装，沉睡在体内的Lili被唤醒，一场跨越性别的灵魂之战打响。"
  },
  {
    "title": "不受欢迎之家",
    "url": "./movie-1851.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑 / 生活",
    "tags": [
      "合租屋",
      "全员恶人",
      "密室"
    ],
    "oneLine": "一家专门收留“社会边缘人”的合租屋里，住着六个人，每个人都想让别人死，却没发现自己才是猎物。"
  },
  {
    "title": "宅男女神杀人狂",
    "url": "./movie-1852.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "惊悚、恐怖、黑色喜剧",
    "tags": [
      "偶像",
      "病娇",
      "密室",
      "网络直播"
    ],
    "oneLine": "当红清纯偶像私下竟是冷血杀手，她将跟踪狂粉丝关进地牢，并强迫对方观看自己的“表演教学视频”。"
  },
  {
    "title": "格林奶奶的睡美人",
    "url": "./movie-1853.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "奇幻、家庭、剧情",
    "tags": [
      "童话新编",
      "祖孙情",
      "梦境",
      "治愈",
      "代际沟通"
    ],
    "oneLine": "七岁的小孙女意外掉进了格林奶奶的“故事工坊”，发现每个经典童话背后，都藏着一个老人不愿醒来的秘密。"
  },
  {
    "title": "排球少年第二季",
    "url": "./movie-1854.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "运动 / 热血 / 青春",
    "tags": [
      "排球",
      "社团",
      "全国大赛",
      "群像",
      "原作延续"
    ],
    "oneLine": "乌野成功晋级全国大赛，但等待他们的不是欢呼，而是影山因伤被国家队征召、日向陷入自我怀疑的双重打击。"
  },
  {
    "title": "徐悲鸿",
    "url": "./movie-1855.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "传记, 历史",
    "tags": [
      "画家",
      "抗战",
      "艺术救国"
    ],
    "oneLine": "1937年，徐悲鸿在新加坡为抗战义卖画展，发现买走《放下你的鞭子》的神秘买家，竟是日军间谍。"
  },
  {
    "title": "基缘巧合",
    "url": "./movie-1856.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧 / 爱情 / 同性",
    "tags": [
      "耽美",
      "相亲",
      "身份错位",
      "搞笑",
      "治愈"
    ],
    "oneLine": "两名被迫相亲的同性恋男子为应付家人假装情侣，却阴差阳错帮助对方找到了真爱。"
  },
  {
    "title": "谷围南亭第一卷",
    "url": "./movie-1857.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "悬疑, 奇幻",
    "tags": [
      "国风",
      "阴阳",
      "大学怪谈"
    ],
    "oneLine": "广州大学城南亭村，一座废弃祠堂下压着千年封印，搬入此地的大学生开始看到不该看到的东西。"
  },
  {
    "title": "本能寺酒店",
    "url": "./movie-1858.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "科幻、悬疑、历史",
    "tags": [
      "时间循环",
      "历史改写",
      "酒店密闭空间",
      "信长之死"
    ],
    "oneLine": "一家破旧酒店的天台泳池，竟能让人反复穿越到本能寺之变前夜。"
  },
  {
    "title": "作法自毙",
    "url": "./movie-1859.html",
    "cover": "./59.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "密室",
      "高智商犯罪",
      "风水",
      "反转再反转",
      "黑色幽默"
    ],
    "oneLine": "风水大师设下绝命局谋杀仇家，却发现自己每一步都踩在自己布的陷阱里。"
  },
  {
    "title": "西部来的人",
    "url": "./movie-1860.html",
    "cover": "./60.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑，犯罪，西部",
    "tags": [
      "新疆",
      "边境",
      "神秘来客",
      "人性考验",
      "黄沙美学"
    ],
    "oneLine": "一个失忆的男人出现在塔克拉玛干边缘的小镇，所有人都想从他身上找到宝藏，但他只想找回自己的名字。"
  },
  {
    "title": "富贵列车",
    "url": "./movie-1861.html",
    "cover": "./61.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧，动作",
    "tags": [
      "民国",
      "火车",
      "群星贺岁",
      "功夫",
      "宝藏"
    ],
    "oneLine": "民国初年，一列满载权贵与宝藏的豪华列车被山贼劫持，两个死对头保安不得不联手救场。"
  },
  {
    "title": "雷云",
    "url": "./movie-1862.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑",
    "tags": [
      "极地小镇",
      "通灵探案",
      "暴风雪密室",
      "苏联遗迹",
      "双胞胎谜局"
    ],
    "oneLine": "北极圈内小镇出现神秘杀人案，唯一能破案的是一位自称能听见死者声音的哑女。"
  },
  {
    "title": "甜蜜蜜",
    "url": "./movie-1863.html",
    "cover": "./63.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "剧情 / 爱情",
    "tags": [
      "时代浪潮",
      "错位人生",
      "邓丽君"
    ],
    "oneLine": "两个从大陆到香港打拼的年轻人，在异乡的自行车后座上，哼唱着同一首《甜蜜蜜》。"
  },
  {
    "title": "灌篮高手的契约",
    "url": "./movie-1864.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "运动",
    "tags": [
      "篮球",
      "契约",
      "宿敌",
      "青春",
      "成长"
    ],
    "oneLine": "日本第一高中生控卫与神秘契约者约定：一年内赢下全国大赛，否则从此放弃篮球，而契约者是十年前的他自己。"
  },
  {
    "title": "屈伏塔与我",
    "url": "./movie-1865.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情、传记",
    "tags": [
      "粉丝文化",
      "中年危机",
      "小人物",
      "喜剧",
      "温情"
    ],
    "oneLine": "一个破产的离婚中年男人，唯一的慰藉是模仿约翰·屈伏塔跳舞，直到他收到了一封来自偶像本人的神秘回信。"
  },
  {
    "title": "青春爱爆炸",
    "url": "./movie-1866.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "青春，剧情，爱情",
    "tags": [
      "高中生",
      "炸弹威胁",
      "校园",
      "网红",
      "假约会"
    ],
    "oneLine": "两个被全校讨厌的怪胎假装情侣拍视频博流量，结果假戏真做，还被人举报要炸学校。"
  },
  {
    "title": "爱情麻辣烫",
    "url": "./movie-1867.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "麻辣烫店",
      "单元故事",
      "市井温情"
    ],
    "oneLine": "一家深夜麻辣烫店，每位孤独食客都能在碗底吃出一句属于自己的爱情判词。"
  },
  {
    "title": "情迷高跟鞋",
    "url": "./movie-1868.html",
    "cover": "./68.jpg",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑, 爱情",
    "tags": [
      "舞蹈",
      "替身",
      "谋杀",
      "弗拉门戈",
      "反转"
    ],
    "oneLine": "一位顶级弗拉门戈舞者被杀，她的双胞胎妹妹穿着她的舞鞋登上舞台试图引出真凶。"
  },
  {
    "title": "大班密令之虎穴擒王粤语",
    "url": "./movie-1869.html",
    "cover": "./69.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作，犯罪",
    "tags": [
      "警匪",
      "卧底",
      "黑帮",
      "枪战"
    ],
    "oneLine": "警方卧底潜入东南亚最大毒枭的“大班”组织，却发现内部有更高级别的内鬼。"
  },
  {
    "title": "小城一梦之臭棋乱飞象",
    "url": "./movie-1870.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "象棋",
      "小镇",
      "荒诞",
      "方言"
    ],
    "oneLine": "一个街头象棋骗子，误打误撞破解了民国悬案，却搅黄了全城的大生意。"
  },
  {
    "title": "危情",
    "url": "./movie-1871.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "爱情 / 悬疑 / 犯罪",
    "tags": [
      "不伦之恋",
      "陷阱",
      "女律师",
      "反转"
    ],
    "oneLine": "女律师为救出轨的丈夫接下一起看似简单的民事案，却一步步掉入有人精心布置了五年的复仇陷阱。"
  },
  {
    "title": "追魂伞",
    "url": "./movie-1872.html",
    "cover": "./72.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "恐怖",
    "tags": [
      "僵尸",
      "民俗",
      "动作",
      "奇幻",
      "林正英式"
    ],
    "oneLine": "一把祖传油纸伞里封着三代僵尸，卖伞的老头其实是在等第四只自己跳进来。"
  },
  {
    "title": "黑帮之城",
    "url": "./movie-1873.html",
    "cover": "./73.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情犯罪",
    "tags": [
      "黑帮",
      "城市变迁",
      "房地产",
      "老年",
      "悲歌"
    ],
    "oneLine": "芝加哥最后的老派黑帮教父，面对城市翻新和新式犯罪浪潮，打响了注定失败的尊严之战。"
  },
  {
    "title": "夺魂电影",
    "url": "./movie-1874.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "恐怖、悬疑、惊悚",
    "tags": [
      "元电影",
      "录像带",
      "诅咒",
      "影院",
      "反转"
    ],
    "oneLine": "一家影院正在放映一部无人记得拍过的老电影，银幕上每死一个人，观众席里就会有一具真实的尸体。"
  },
  {
    "title": "空中浩劫第七季",
    "url": "./movie-1875.html",
    "cover": "./75.jpg",
    "year": "2015",
    "region": "加拿大",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "other",
    "genre": "灾难, 纪实, 航空",
    "tags": [
      "空难调查",
      "模拟还原",
      "人性光辉"
    ],
    "oneLine": "一架满载乘客的波音787在太平洋上空突然双发失效，机组与时间赛跑上演奇迹迫降。"
  },
  {
    "title": "头号惊喜",
    "url": "./movie-1876.html",
    "cover": "./76.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀， 喜剧， 公益",
    "tags": [
      "整蛊",
      "明星",
      "隐藏摄像机",
      "社会实验"
    ],
    "oneLine": "一档用“精心设计的意外”来整蛊明星的隐藏摄像机节目，但在某一次录制中，一场真正的危机悄然降临，所有人都以为是“惊喜”。"
  },
  {
    "title": "三面娜迦",
    "url": "./movie-1877.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "恐怖 / 奇幻 / 爱情",
    "tags": [
      "民间传说",
      "蛇神",
      "村庄",
      "诅咒",
      "报复"
    ],
    "oneLine": "一个信奉娜迦的村庄接连发生诡异命案，法医调查后发现，凶手正是村民世代供奉的守护神。"
  },
  {
    "title": "反派初始化",
    "url": "./movie-1878.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 奇幻, 犯罪",
    "tags": [
      "重生复仇",
      "高智商对决",
      "时间重置",
      "灰色地带"
    ],
    "oneLine": "顶级的商业犯罪天才被挚友陷害致死，醒来却发现自己回到了大学时代，而陷害他的人正笑着请他吃饭。"
  },
  {
    "title": "超级明星金·卡戴珊",
    "url": "./movie-1879.html",
    "cover": "./79.jpg",
    "year": "2007",
    "region": "美国",
    "type": "电影 / 纪录",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "传记 / 剧情",
    "tags": [
      "真人秀鼻祖",
      "名人文化",
      "丑闻",
      "家族生意"
    ],
    "oneLine": "一部伪纪录片，揭露了“金·卡戴珊”这个产品是如何从一盘性爱录像带中被制造出来的全过程。"
  },
  {
    "title": "泥之河",
    "url": "./movie-1880.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 犯罪",
    "tags": [
      "底层",
      "父子",
      "赎罪",
      "河流",
      "现实主义"
    ],
    "oneLine": "一对以捞尸为生的父子，在泥河底捞起了一个满身伤痕的活人。"
  },
  {
    "title": "戚家军",
    "url": "./movie-1881.html",
    "cover": "./81.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史/战争/动作",
    "tags": [
      "戚继光",
      "抗倭",
      "鸳鸯阵",
      "练兵",
      "明朝"
    ],
    "oneLine": "嘉靖年间，戚继光组建“戚家军”，用鸳鸯阵、狼筅和铁一般的纪律，在东南沿海全歼倭寇。"
  },
  {
    "title": "烽火怪客",
    "url": "./movie-1882.html",
    "cover": "./82.jpg",
    "year": "1987",
    "region": "中国香港 / 泰国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作 / 战争 / 冒险",
    "tags": [
      "越战",
      "东南亚",
      "佣兵",
      "丛林",
      "港式动作"
    ],
    "oneLine": "越战结束后三年，一名华人佣兵在泰柬边境发现一座被地雷包围的金佛，而守护者是他当年的敌人。"
  },
  {
    "title": "恶搞之家第十三季",
    "url": "./movie-1883.html",
    "cover": "./83.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "动画",
    "tags": [
      "喜剧",
      "讽刺",
      "家庭",
      "段子",
      "无厘头"
    ],
    "oneLine": "彼得又搞砸了所有事，这次他让整个夸霍格陷入了超市酸奶战争。"
  },
  {
    "title": "50米之恋",
    "url": "./movie-1884.html",
    "cover": "./84.jpg",
    "year": "2018",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "爱情, 喜剧",
    "tags": [
      "距离",
      "冤家",
      "职业",
      "轻松"
    ],
    "oneLine": "一个对清洁过敏的女记者，爱上一个垃圾处理厂的工程师，两人永远不能靠近50米以内。"
  },
  {
    "title": "维瓦",
    "url": "./movie-1885.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 音乐 / 青春",
    "tags": [
      "那不勒斯",
      "歌剧少年",
      "声带病变",
      "最后的咏叹调"
    ],
    "oneLine": "那不勒斯贫民窟少年拥有绝世男高音，但变声期后声带出现不可逆损伤，他要在彻底失声前站上斯卡拉歌剧院。"
  },
  {
    "title": "复仇战将",
    "url": "./movie-1886.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "动作, 犯罪",
    "tags": [
      "港片",
      "复仇",
      "枪战",
      "黑帮",
      "兄弟"
    ],
    "oneLine": "一名退役杀手目睹全家被灭门后，重新拿起枪，用一年时间将当年出卖他的四个兄弟逐一送上绝路。"
  },
  {
    "title": "交媾知识",
    "url": "./movie-1887.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 情色 / 哲学",
    "tags": [
      "禁忌",
      "学术",
      "权力关系",
      "女性凝视"
    ],
    "oneLine": "女博士研究古代房中术，却发现自己的导师正在用论文里的技巧操控她。"
  },
  {
    "title": "威洛比山庄的狼",
    "url": "./movie-1888.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "悬疑/惊悚/英伦",
    "tags": [
      "哥特",
      "庄园谋杀",
      "家族秘密",
      "复古悬疑"
    ],
    "oneLine": "威洛比山庄每逢雨夜便有狼嚎，家族史记载：每次狼嚎后，必有一名继承人“意外”死亡。"
  },
  {
    "title": "摩登50",
    "url": "./movie-1889.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "喜剧, 家庭",
    "tags": [
      "中老年",
      "广场舞",
      "逆袭",
      "时尚"
    ],
    "oneLine": "50岁的广场舞大妈被女儿误投了时尚选秀，竟然一路晋级，成了银发超模。"
  },
  {
    "title": "拐角处的麻烦",
    "url": "./movie-1890.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑，犯罪",
    "tags": [
      "公寓",
      "邻居",
      "监控",
      "偷窥",
      "反转"
    ],
    "oneLine": "一个社恐程序员通过监控发现邻居在分尸，但警方调查后却告诉他：那个邻居三年前就死了。"
  },
  {
    "title": "活得比你好",
    "url": "./movie-1891.html",
    "cover": "./91.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "剧情 / 家庭 / 都市",
    "tags": [
      "港剧",
      "逆境",
      "姐妹情",
      "励志"
    ],
    "oneLine": "被破产父亲抛弃的姐妹俩，一个靠嫁人翻身，一个靠自己出头，十年后重逢。"
  },
  {
    "title": "时空螺旋",
    "url": "./movie-1892.html",
    "cover": "./92.jpg",
    "year": "2017",
    "region": "德国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "科幻, 悬疑",
    "tags": [
      "硬科幻",
      "洞穴",
      "穿越",
      "核灾难"
    ],
    "oneLine": "小镇核电站事故后，一名失踪33年的男孩重新出现且未曾变老，揭开了一个连接过去与未来的洞穴秘密。"
  },
  {
    "title": "我的徒步之旅",
    "url": "./movie-1893.html",
    "cover": "./93.jpg",
    "year": "2027",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 冒险",
    "tags": [
      "朝圣之路",
      "自我救赎",
      "丧子",
      "自然治愈",
      "慢电影"
    ],
    "oneLine": "一位丧子的银行家踏上著名的圣地亚哥朝圣之路，背包里装的不是行李，而是儿子的骨灰盒。"
  },
  {
    "title": "靓妹贵姓",
    "url": "./movie-1894.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影 喜剧, 爱情",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 爱情",
    "tags": [
      "相亲",
      "身份错位",
      "都市喜剧",
      "港味"
    ],
    "oneLine": "社恐宅男在相亲局上谎称自己姓“贵”，结果整栋大楼的女人都开始自称“贵太太”。"
  },
  {
    "title": "穿越天际靠近你",
    "url": "./movie-1895.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "航空管制",
      "平行时空",
      "无线电情缘",
      "云端恋爱"
    ],
    "oneLine": "伦敦航空管制员每晚都会收到一条来自五年前遇难航班的无线电信号，而发信人是他的亡妻，他必须阻止那趟航班起飞。"
  },
  {
    "title": "我们曾经是战士",
    "url": "./movie-1896.html",
    "cover": "./96.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "战争、历史、剧情",
    "tags": [
      "越战",
      "老兵",
      "友谊",
      "创伤",
      "救赎"
    ],
    "oneLine": "越战五十年后，曾经互为敌人的美国老兵和越南老兵在当年战场重逢，才发现他们一直在等同一个道歉。"
  },
  {
    "title": "烈火青春",
    "url": "./movie-1897.html",
    "cover": "./97.jpg",
    "year": "1982",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "爱情， 剧情",
    "tags": [
      "青春",
      "叛逆",
      "富家千金",
      "赛车",
      "悲剧"
    ],
    "oneLine": "富家女与穷小子因赛车结缘，他们的烈火爱情却遭到家族与命运的残酷阻挠。"
  },
  {
    "title": "怪物高中之纽约",
    "url": "./movie-1898.html",
    "cover": "./98.jpg",
    "year": "2022",
    "region": "美国",
    "type": "动画电影",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 奇幻 / 校园",
    "tags": [
      "怪物",
      "高中",
      "纽约",
      "包容",
      "歌舞"
    ],
    "oneLine": "吸血鬼、狼人、僵尸和科学怪人组队参加纽约全美高中才艺大赛，却要隐藏身份不被人类发现。"
  },
  {
    "title": "娱乐反斗星",
    "url": "./movie-1899.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧, 剧情",
    "tags": [
      "娱乐圈",
      "经纪人",
      "黑马",
      "搞笑",
      "励志"
    ],
    "oneLine": "过气经纪人捡到五个奇葩素人，用“负负得正”的营销手段将他们送上顶流宝座。"
  },
  {
    "title": "油漆渐干",
    "url": "./movie-1900.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情、悬疑、文艺",
    "tags": [
      "慢电影",
      "艺术犯罪",
      "心理博弈",
      "画廊"
    ],
    "oneLine": "一幅标价一亿的空白画作，五个买家在等待油漆干透的72小时里，谁也不准离开。"
  },
  {
    "title": "天真无邪",
    "url": "./movie-1901.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑 / 惊悚 / 校园",
    "tags": [
      "儿童犯罪",
      "心理操控",
      "反转",
      "法律漏洞"
    ],
    "oneLine": "一所小学里出现“好人坏人”游戏，赢了的孩子毫发无伤，输了的却被全班“判处死刑”。"
  },
  {
    "title": "求爱敢死队国语",
    "url": "./movie-1902.html",
    "cover": "./102.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "喜剧、爱情",
    "tags": [
      "追女仔",
      "港式幽默",
      "兄弟情",
      "年代喜剧"
    ],
    "oneLine": "四个情场失意的男人组成“求爱敢死队”，用尽奇葩招数追求各自心中的女神。"
  },
  {
    "title": "惊吓王",
    "url": "./movie-1903.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧",
    "tags": [
      "恐怖",
      "恶搞",
      "丧尸",
      "致敬"
    ],
    "oneLine": "一个跑龙套的替身演员为了当主角，在僵尸片片场假戏真做，把所有主演吓进了医院。"
  },
  {
    "title": "倩狐之妖乱青华",
    "url": "./movie-1904.html",
    "cover": "./104.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "古装 / 奇幻 / 爱情",
    "tags": [
      "灵异",
      "道士",
      "狐妖",
      "网络大电影"
    ],
    "oneLine": "青华山狐妖作乱，一名落魄道士卷入人与妖的千年爱恨。"
  },
  {
    "title": "假小子",
    "url": "./movie-1905.html",
    "cover": "./105.jpg",
    "year": "2011",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 儿童",
    "tags": [
      "性别认同",
      "成长",
      "夏天",
      "家庭",
      "纯真"
    ],
    "oneLine": "十岁的洛儿搬到新社区，决定以男孩身份重新开始，却爱上了邻居女孩。"
  },
  {
    "title": "大篷车1971",
    "url": "./movie-1906.html",
    "cover": "./106.jpg",
    "year": "1971",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "爱情，歌舞，冒险",
    "tags": [
      "吉普赛",
      "逃亡",
      "复仇",
      "经典"
    ],
    "oneLine": "富家千金目睹丈夫谋害父亲后，伪装身份藏身于吉普赛大篷车，在流浪歌舞中展开复仇。"
  },
  {
    "title": "市子",
    "url": "./movie-1907.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 家庭 / 悬疑",
    "tags": [
      "失踪",
      "户籍",
      "诈骗",
      "女性"
    ],
    "oneLine": "一个名叫市子的女人消失了，三个自称她“丈夫”的男人同时出现，而她的户籍根本不存在。"
  },
  {
    "title": "神秘人质",
    "url": "./movie-1908.html",
    "cover": "./108.jpg",
    "year": "2013",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "悬疑, 谍战",
    "tags": [
      "潜伏",
      "身份互换",
      "智斗",
      "民国",
      "反转"
    ],
    "oneLine": "地下交通员被捕后，一名普通裁缝被误认为“重要人质”，被迫周旋于三股势力之间。"
  },
  {
    "title": "天外横财",
    "url": "./movie-1909.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 悬疑, 冒险",
    "tags": [
      "陨石",
      "小镇",
      "黑色幽默",
      "外星生物"
    ],
    "oneLine": "一颗价值连城的钻石陨石坠落在贫困小镇，带给居民的却不是财富，而是无法解释的变异。"
  },
  {
    "title": "我的爱，别渡过那条河",
    "url": "./movie-1910.html",
    "cover": "./110.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": [
      "阴阳两界",
      "摆渡人",
      "七日之约",
      "遗忘诅咒",
      "老宅重逢"
    ],
    "oneLine": "每年只有一天，逝者可以渡过冥河归来，但今年她发现爱人已经彻底忘了自己。"
  },
  {
    "title": "因为爱情有奇迹",
    "url": "./movie-1911.html",
    "cover": "./111.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 家庭",
    "tags": [
      "虐恋",
      "豪门",
      "失忆",
      "复仇"
    ],
    "oneLine": "灰姑娘一夜之间失去所有，五年后带着双胞胎儿子归来，向昔日爱人展开甜蜜复仇。"
  },
  {
    "title": "柳烈的音乐专辑",
    "url": "./movie-1912.html",
    "cover": "./112.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "爱情, 剧情",
    "tags": [
      "电台",
      "书信",
      "年代回忆",
      "错过"
    ],
    "oneLine": "从1994年柳烈的电台首播到2005年节目停播，一对男女在十一年里反复相遇又错过。"
  },
  {
    "title": "我们撞到外星人",
    "url": "./movie-1913.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "科幻、喜剧、公路",
    "tags": [
      "车祸",
      "失忆外星人",
      "搞笑逃亡"
    ],
    "oneLine": "三个倒霉蛋开车撞晕了外星王子，为了不被灭口，他们必须在外星大军抵达前教会王子如何“打麻将”。"
  },
  {
    "title": "伯尔尼的奇迹",
    "url": "./movie-1914.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "运动 / 剧情",
    "tags": [
      "足球",
      "二战",
      "战后",
      "励志"
    ],
    "oneLine": "1954年世界杯决赛，战败后分裂的德国靠一支拼凑的球队在伯尔尼战胜不可一世的匈牙利。"
  },
  {
    "title": "聆听者2024",
    "url": "./movie-1915.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情, 奇幻, 心理",
    "tags": [
      "心理咨询",
      "读心",
      "都市传说"
    ],
    "oneLine": "能听见心声的心理师，在治愈别人的同时，被一个听不见心声的杀人狂盯上。"
  },
  {
    "title": "彼得·潘的梦幻岛噩梦",
    "url": "./movie-1916.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "恐怖, 奇幻, 惊悚",
    "tags": [
      "暗黑童话",
      "体感游戏",
      "VR",
      "青少年恐怖"
    ],
    "oneLine": "五个问题少年被吸入沉浸式VR游戏《梦幻岛》，发现彼得·潘是个砍人影子、收藏灵魂的变态杀手。"
  },
  {
    "title": "雪中真相",
    "url": "./movie-1917.html",
    "cover": "./117.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "东北雪乡",
      "杀人回忆结构",
      "基层警察",
      "时代悲剧"
    ],
    "oneLine": "东北雪乡，一具被冻在冰河里的尸体，让一个快退休的片警翻了二十年前的旧案，也翻出了一整个村庄的秘密。"
  },
  {
    "title": "血色通道",
    "url": "./movie-1918.html",
    "cover": "./118.jpg",
    "year": "2011",
    "region": "法国 / 比利时",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚, 悬疑",
    "tags": [
      "连环杀手",
      "地下通道",
      "心理战",
      "欧洲"
    ],
    "oneLine": "连接两国边境的十公里地下通道内，一名女警探必须在信号断绝的黑暗中，追捕一个专杀女性的幽灵。"
  },
  {
    "title": "胡狼来了",
    "url": "./movie-1919.html",
    "cover": "./119.jpg",
    "year": "2019",
    "region": "埃及",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "惊悚 / 剧情",
    "tags": [
      "沙漠",
      "走私",
      "生存",
      "复仇"
    ],
    "oneLine": "为了给女儿治病，一个老实巴交的骆驼贩子被迫替黑帮穿越利比亚沙漠运货，而他运送的“货物”是一群活人。"
  },
  {
    "title": "姐姐",
    "url": "./movie-1920.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭",
    "tags": [
      "姐妹",
      "责任",
      "牺牲",
      "现实主义"
    ],
    "oneLine": "母亲去世后，二十二岁的姐姐放弃了留学，抚养八岁的妹妹，直到妹妹的亲生父亲出现。"
  },
  {
    "title": "禁女大风波",
    "url": "./movie-1921.html",
    "cover": "./121.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑/惊悚",
    "tags": [
      "民国奇案",
      "女校",
      "幽灵",
      "反转"
    ],
    "oneLine": "民国女校突现“禁女”诅咒，接连有人自燃，直到她们翻开那本被血浸透的校规。"
  },
  {
    "title": "穿越无人区第一季",
    "url": "./movie-1922.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "mainland",
    "genre": "真人秀",
    "tags": [
      "荒野求生",
      "明星生存",
      "硬核挑战",
      "自驾",
      "环保"
    ],
    "oneLine": "六位过气明星被扔进真正的羌塘无人区，身上只有三天口粮和一台没信号的卫星电话。"
  },
  {
    "title": "魔物",
    "url": "./movie-1923.html",
    "cover": "./123.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "都市传说",
      "寄生",
      "猎奇",
      "社会隐喻"
    ],
    "oneLine": "东京出现一种寄生在人眼球里的魔物，宿主会看到“最美好的幻觉”，然后三天内自残而死。"
  },
  {
    "title": "快乐的百万富翁",
    "url": "./movie-1924.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "喜剧, 剧情, 家庭",
    "tags": [
      "反差萌",
      "金钱观",
      "印式幽默",
      "温暖"
    ],
    "oneLine": "一个超级富豪厌倦了一切，伪装成穷光蛋住进贫民窟，却意外获得了真正的快乐。"
  },
  {
    "title": "24周",
    "url": "./movie-1925.html",
    "cover": "./125.jpg",
    "year": "2016",
    "region": "德国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情, 家庭",
    "tags": [
      "堕胎伦理",
      "孕期抉择",
      "生命权利",
      "夫妻冲突"
    ],
    "oneLine": "怀孕24周时查出胎儿严重残疾，一对恩爱夫妻面临是否堕胎的残酷抉择。"
  },
  {
    "title": "昙花梦",
    "url": "./movie-1926.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "爱情 / 悬疑 / 民国",
    "tags": [
      "上海滩",
      "植物学",
      "催眠",
      "复仇千金"
    ],
    "oneLine": "民国上海滩，一名拥有“昙花催眠术”的神秘女子接近豪门大少，只为查清家族灭门惨案的真相。"
  },
  {
    "title": "叔叔当家",
    "url": "./movie-1927.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 家庭, 剧情",
    "tags": [
      "亲情",
      "中年危机",
      "代际冲突",
      "香港市井"
    ],
    "oneLine": "废柴大叔被迫照顾富豪弟弟的三个精英子女，用菜市场智慧和街头哲学对抗贵族学校的精英教育。"
  },
  {
    "title": "最后的气宗",
    "url": "./movie-1928.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 奇幻, 冒险",
    "tags": [
      "御气术",
      "拯救世界",
      "宿命",
      "史诗"
    ],
    "oneLine": "世界被暴君统治，四大部族只剩气宗未被征服，而最后一个气宗只是一个不敢使用力量的少年。"
  },
  {
    "title": "浮尘女儿录",
    "url": "./movie-1929.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情 / 历史",
    "tags": [
      "家族史诗",
      "女性群像",
      "日据时期"
    ],
    "oneLine": "一本尘封的账本，记录了台湾百年变迁中，一个家族三代女儿如何在乱世中撑起一片天。"
  },
  {
    "title": "大逃脱第五季",
    "url": "./movie-1930.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "综艺",
    "typeGroup": "variety",
    "regionGroup": "korea",
    "genre": "真人秀 / 冒险 / 悬疑",
    "tags": [
      "密室逃脱",
      "实景",
      "推理",
      "团队合作"
    ],
    "oneLine": "逃脱六人组被困进了一座“无限循环”的废弃医院，每逃出一个房间，就会回到走廊原点。"
  },
  {
    "title": "珍珠传奇",
    "url": "./movie-1931.html",
    "cover": "./131.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "剧情、古装",
    "tags": [
      "南洋",
      "采珠业",
      "女性传奇",
      "家族恩怨"
    ],
    "oneLine": "日据时期的台湾，一个采珠女意外发现价值连城的“血珍珠”，从此被卷入家族、殖民者与掠夺者的漩涡中心。"
  },
  {
    "title": "来自垃圾场的美妙乐章",
    "url": "./movie-1932.html",
    "cover": "./132.jpg",
    "year": "2016",
    "region": "巴拉圭 / 美国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片 / 音乐",
    "tags": [
      "贫民窟乐团",
      "再生乐器",
      "梦想"
    ],
    "oneLine": "在巴拉圭最大的垃圾场，一位音乐老师教孩子们用垃圾制成的乐器演奏古典乐，并将他们带向了世界。"
  },
  {
    "title": "狙击精英：幽灵射手",
    "url": "./movie-1933.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作, 战争",
    "tags": [
      "狙击手",
      "特种部队",
      "军事",
      "反恐",
      "枪战"
    ],
    "oneLine": "代号“幽灵”的狙击手要在千米之外，射杀被自己人保护的头号毒枭。"
  },
  {
    "title": "史明·革命进行式",
    "url": "./movie-1934.html",
    "cover": "./134.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "taiwan",
    "genre": "纪录片",
    "tags": [
      "历史人物",
      "左翼",
      "传记"
    ],
    "oneLine": "纪录片记录了一生为理想奔走的“台湾革命者”史明，用40年时间写成《台湾人四百年史》的孤独旅程。"
  },
  {
    "title": "国王口信",
    "url": "./movie-1935.html",
    "cover": "./135.jpg",
    "year": "2017",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "历史 / 剧情 / 冒险",
    "tags": [
      "中世纪",
      "骑士",
      "密信",
      "谍战",
      "忠诚"
    ],
    "oneLine": "英王理查麾下最忠诚的骑士，奉命穿越敌占区送一封密信，却发现信的内容是让他去杀掉收信人。"
  },
  {
    "title": "来自风平浪静的明天",
    "url": "./movie-1936.html",
    "cover": "./136.jpg",
    "year": "2013",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "爱情/奇幻",
    "tags": [
      "海底",
      "校园",
      "多角恋",
      "时间跨度"
    ],
    "oneLine": "一场地壳变动后，四名来自海底的少年被迫在陆地高中就读，与陆地少年展开一场横跨数年的情感潮汐。"
  },
  {
    "title": "健康大问诊",
    "url": "./movie-1937.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 医疗 / 职场",
    "tags": [
      "养生骗局",
      "医疗打假",
      "直播带货",
      "中老年诈骗",
      "孤胆记者"
    ],
    "oneLine": "一档火爆全国的养生节目背后，藏着一个专门收割老年人的惊天骗局，而唯一敢说真话的医生正被全网民暴。"
  },
  {
    "title": "猎赝",
    "url": "./movie-1938.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑，犯罪，艺术",
    "tags": [
      "古画鉴定",
      "造假家族",
      "拍卖场",
      "师徒",
      "反转"
    ],
    "oneLine": "顶级鉴定师发现父亲留下的传世名画是假的，而真迹在他亲手送进监狱的造假人手里。"
  },
  {
    "title": "私人世界",
    "url": "./movie-1939.html",
    "cover": "./139.jpg",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "europe",
    "genre": "剧情 / 科幻 / 心理",
    "tags": [
      "定制现实",
      "记忆租赁",
      "孤独经济",
      "沉浸式剧场"
    ],
    "oneLine": "一家神秘公司为客户量身打造“私人世界”——一段完全由你掌控的记忆，但每个世界背后都有一名真人演员被囚禁其中。"
  },
  {
    "title": "恐怖怪谭",
    "url": "./movie-1940.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "typeGroup": "documentary",
    "regionGroup": "other",
    "genre": "恐怖 / 悬疑 / 心理",
    "tags": [
      "都市传说",
      "播客",
      "伪纪录片",
      "邪教"
    ],
    "oneLine": "一档揭秘都市传说的播客主持人，在调查“微笑的人”怪谈时，发现自己童年的照片里就有那张脸。"
  },
  {
    "title": "暴劫红唇粤语",
    "url": "./movie-1941.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪、惊悚、悬疑",
    "tags": [
      "港产片",
      "烈焰红唇",
      "连环杀手",
      "雨夜屠夫"
    ],
    "oneLine": "雨夜的香港，三名涂着同款口红的女子接连被劫杀，女警探发现口红样本里检测出了五十年前去世的舞女的血迹。"
  },
  {
    "title": "爱的男人",
    "url": "./movie-1942.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "意大利 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 爱情",
    "tags": [
      "爱无能",
      "中年危机",
      "心理惊悚"
    ],
    "oneLine": "一个擅长用温柔杀人的心理咨询师，在遇到无法掌控的女人后，变成了彻头彻尾的“爱的奴隶”。"
  },
  {
    "title": "杨朵",
    "url": "./movie-1943.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "以色列",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 家庭 / 历史",
    "tags": [
      "犹太文化",
      "女性觉醒",
      "传统与现代",
      "戏剧改编",
      "诗意"
    ],
    "oneLine": "二十世纪初的也门犹太村落里，一个想读书的女孩扮成男孩进入学堂，却爱上了自己的“兄弟”。"
  },
  {
    "title": "我是你的百搭",
    "url": "./movie-1944.html",
    "cover": "./144.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "都市, 爱情",
    "tags": [
      "备胎",
      "逆袭",
      "网剧",
      "甜中带虐"
    ],
    "oneLine": "职场小透明当了三年“百搭同事”，却在被裁后收到暗恋总裁的结婚请柬。"
  },
  {
    "title": "旅行吧！井底之蛙",
    "url": "./movie-1945.html",
    "cover": "./145.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画 / 冒险 / 喜剧",
    "tags": [
      "励志",
      "寓言改编",
      "美景",
      "治愈"
    ],
    "oneLine": "一只被同伴嘲笑的井底之蛙，为了看一眼大海而踏上惊心动魄的旅程。"
  },
  {
    "title": "救世主回来了",
    "url": "./movie-1946.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "奇幻 / 喜剧",
    "tags": [
      "反套路",
      "宗教讽刺",
      "日常奇迹",
      "躺平文化"
    ],
    "oneLine": "弥赛亚时隔两千年重返人间，却因拿不出身份证被安置在加州流浪汉营地。"
  },
  {
    "title": "夏日咖啡男友",
    "url": "./movie-1947.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情、剧情、同性",
    "tags": [
      "夏日恋情",
      "咖啡店",
      "治愈",
      "日式小清新",
      "BL"
    ],
    "oneLine": "三个失业青年在镰仓海边合开咖啡店，在咖啡香与海风中重寻人生的方向。"
  },
  {
    "title": "毁灭之屋传奇",
    "url": "./movie-1948.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "恐怖，悬疑",
    "tags": [
      "凶宅",
      "诅咒",
      "时间循环",
      "民俗"
    ],
    "oneLine": "进入凶宅者都会在第七天离奇死亡，一名民俗学者誓要打破诅咒。"
  },
  {
    "title": "欢喜密探",
    "url": "./movie-1949.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "古装、谍战、喜剧",
    "tags": [
      "卧底",
      "小人物逆袭",
      "乌龙事件"
    ],
    "oneLine": "贪生怕死的酒楼跑堂被迫当了三面间谍，结果因为太怂，居然把所有反派都策反了。"
  },
  {
    "title": "诱饵",
    "url": "./movie-1950.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "惊悚、犯罪、剧情",
    "tags": [
      "高智商犯罪",
      "钓鱼执法",
      "复仇",
      "道德困境"
    ],
    "oneLine": "一个专门“勾引”已婚男人出轨的女人，这一次，她的目标却反过来盯上了她。"
  },
  {
    "title": "燕子与鹦鹉",
    "url": "./movie-1951.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情 / 冒险",
    "tags": [
      "航海",
      "姐妹",
      "遗愿",
      "独立",
      "成长"
    ],
    "oneLine": "一对从未出过远门的都市姐妹，为了完成母亲的遗愿，驾驶一艘老旧帆船横渡大西洋。"
  },
  {
    "title": "信心主宰",
    "url": "./movie-1952.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "新加坡",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "other",
    "genre": "剧情 / 商战 / 律政",
    "tags": [
      "新加坡法律",
      "金融诈骗",
      "精英对决",
      "反转"
    ],
    "oneLine": "一场涉及百亿的宗教基金诈骗案，让失散二十年的双胞胎兄弟在法庭上对垒，一人是检察官，一人是主谋。"
  },
  {
    "title": "战时兄弟",
    "url": "./movie-1953.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "英国 / 法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "战争 / 剧情",
    "tags": [
      "一战",
      "战壕",
      "手足",
      "人性",
      "悲剧"
    ],
    "oneLine": "1916年索姆河战役，三兄弟被分到对立阵营，平安夜的一声枪响改变了所有人的命运。"
  },
  {
    "title": "读爱情小说的老人",
    "url": "./movie-1954.html",
    "cover": "./4.jpg",
    "year": "2014",
    "region": "丹麦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "剧情 / 爱情",
    "tags": [
      "北欧冷感",
      "老年爱情",
      "文学",
      "孤独",
      "治愈"
    ],
    "oneLine": "格陵兰岛上一位猎杀海豹的孤独老人，一边给孙子读爱情小说，一边回忆自己错过的爱人。"
  },
  {
    "title": "午夜惊魂",
    "url": "./movie-1955.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "惊悚 / 恐怖",
    "tags": [
      "出租车",
      "夜班司机",
      "都市传说",
      "时间循环"
    ],
    "oneLine": "一名夜班出租车司机连续三晚在同一时间、同一地点接到同一个“已故”乘客。"
  },
  {
    "title": "家常菜",
    "url": "./movie-1956.html",
    "cover": "./6.jpg",
    "year": "2010",
    "region": "中国",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 家庭 / 年代",
    "tags": [
      "知青",
      "婚姻",
      "亲情",
      "四合院",
      "写实"
    ],
    "oneLine": "从国营饭店大厨到下岗到开小饭馆，刘洪昌用一道“煎饼卷大葱”撑起了一个风雨飘摇的家。"
  },
  {
    "title": "粉红色的贵格会",
    "url": "./movie-1957.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧, 奇幻",
    "tags": [
      "宗教反讽",
      "粉红美学",
      "超自然"
    ],
    "oneLine": "一个虔诚的贵格会教徒接到神谕：把整个宾夕法尼亚州刷成粉色，否则世界将毁灭于“无聊”。"
  },
  {
    "title": "萨满仙师",
    "url": "./movie-1958.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "悬疑, 惊悚",
    "tags": [
      "民俗",
      "东北",
      "出马仙",
      "破案"
    ],
    "oneLine": "东北出马仙的传人马青山，用请神上身的方式，破解了一桩民国年间诡异的连环剥皮案。"
  },
  {
    "title": "一个乖女儿的抱怨",
    "url": "./movie-1959.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "taiwan",
    "genre": "剧情，家庭，黑色幽默",
    "tags": [
      "家庭压力",
      "失控",
      "荒诞",
      "坦白局",
      "代际冲突"
    ],
    "oneLine": "在家庭聚餐上，向来逆来顺受的完美女儿忽然举起麦克风，把全家人三十年来的丑事唱成了Rap。"
  },
  {
    "title": "骷髅头",
    "url": "./movie-1960.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "悬疑， 惊悚， 心理",
    "tags": [
      "独角戏",
      "记忆迷宫",
      "密室"
    ],
    "oneLine": "一个男人在一间没有门的白色房间里醒来，身边只有一具骷髅，而他认出那是年轻时的自己。"
  },
  {
    "title": "追羊孖宝",
    "url": "./movie-1961.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧 / 冒险",
    "tags": [
      "公路",
      "兄弟情",
      "动物",
      "乌龙"
    ],
    "oneLine": "一对废柴兄弟弄丢了富豪的种羊，必须在拍卖会前找回这只价值千万的“羊爹”。"
  },
  {
    "title": "风水逝家",
    "url": "./movie-1962.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国香港 / 马来西亚",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "惊悚 / 家庭",
    "tags": [
      "风水",
      "南洋",
      "家族恩怨",
      "因果"
    ],
    "oneLine": "家族祖坟每十年被迫迁一次，每次迁坟后，对应的一位子孙就会离奇暴毙。"
  },
  {
    "title": "石纪元 龙水",
    "url": "./movie-1963.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "科幻/冒险",
    "tags": [
      "科学",
      "石化",
      "文明重建",
      "青春"
    ],
    "oneLine": "在全人类被石化的第3786天，天才少年千空与武术家龙水从石像中苏醒，用原始材料点燃第一盏电灯。"
  },
  {
    "title": "魔法使的注意事项：夏之空",
    "url": "./movie-1964.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "japan",
    "genre": "动画, 奇幻, 治愈",
    "tags": [
      "日常系魔法",
      "北海道",
      "实习生",
      "人与自然"
    ],
    "oneLine": "在魔法成为日常工具的北海道，一名实习魔法使的职责是用法术帮助农作物更好地生长。"
  },
  {
    "title": "菲丽希缇",
    "url": "./movie-1965.html",
    "cover": "./15.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情， 音乐",
    "tags": [
      "单亲妈妈",
      "刚果",
      "生存"
    ],
    "oneLine": "刚果金沙萨的单亲妈妈菲丽希缇为了给儿子凑手术费，一夜之间偷遍了整座城市。"
  },
  {
    "title": "跨越爱线",
    "url": "./movie-1966.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "taiwan",
    "genre": "爱情 / 奇幻 / 校园",
    "tags": [
      "平行时空",
      "暗恋",
      "黑板",
      "穿越",
      "双向奔赴"
    ],
    "oneLine": "她在教室黑板写下告白，第二天收到回信——字迹来自十年前坐这个位置的男生。"
  },
  {
    "title": "致命之吻",
    "url": "./movie-1967.html",
    "cover": "./17.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "korea",
    "genre": "爱情 / 奇幻 / 悬疑",
    "tags": [
      "时间回溯",
      "财阀",
      "诅咒",
      "甜虐"
    ],
    "oneLine": "接吻就会导致时间倒流的男人，遇到了一个只有吻她才能救活自己家族企业的奇怪女人。"
  },
  {
    "title": "中原突围",
    "url": "./movie-1968.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "历史，战争",
    "tags": [
      "革命",
      "战略转移",
      "信仰"
    ],
    "oneLine": "1946年，六万中原军区部队被困，一场震惊中外的生死突围拉开序幕。"
  },
  {
    "title": "撤离加沙地带",
    "url": "./movie-1969.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "以色列 / 巴勒斯坦",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "other",
    "genre": "战争 / 剧情 / 历史",
    "tags": [
      "定居点",
      "强制撤离",
      "以巴冲突",
      "士兵视角",
      "群像"
    ],
    "oneLine": "2005年以色列单边撤离计划中，一支以色列小分队负责强制拆除一个犹太定居点，却发现钉子户是自己战友的家人。"
  },
  {
    "title": "冷燕飘零",
    "url": "./movie-1970.html",
    "cover": "./20.jpg",
    "year": "2003",
    "region": "中国内地",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "年代， 剧情",
    "tags": [
      "民国",
      "女性",
      "复仇",
      "身世之谜"
    ],
    "oneLine": "为寻找失散的双生妹妹，冷艳女杀手假扮名媛潜入上海滩豪门，却发现自己要刺杀的目标竟是亲妹妹。"
  },
  {
    "title": "熊出没之春日对对碰",
    "url": "./movie-1971.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "typeGroup": "animation",
    "regionGroup": "mainland",
    "genre": "动画, 喜剧, 家庭",
    "tags": [
      "熊强组合",
      "奇幻冒险",
      "春日主题"
    ],
    "oneLine": "光头强得到一支能让植物瞬间开花的神奇画笔，却被反派盯上，熊兄弟再次出手相助。"
  },
  {
    "title": "美丽天堂",
    "url": "./movie-1972.html",
    "cover": "./22.jpg",
    "year": "2017",
    "region": "意大利",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "剧情，奇幻",
    "tags": [
      "天堂",
      "死亡",
      "遗憾",
      "治愈"
    ],
    "oneLine": "一个刚去世的老人来到天堂，发现天堂是他在人间最遗憾的一天永远重播。"
  },
  {
    "title": "吝啬罗曼史",
    "url": "./movie-1973.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "喜剧，爱情，生活",
    "tags": [
      "省钱恋爱",
      "社畜爱情",
      "斤斤计较"
    ],
    "oneLine": "极度抠门的男会计爱上了花钱大手大脚的女策划，两人决定用“记账本”谈一场零浪费恋爱。"
  },
  {
    "title": "失失慌杀人事件",
    "url": "./movie-1974.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "黑色喜剧 / 悬疑",
    "tags": [
      "荒诞",
      "连环误会",
      "小人物",
      "黑色幽默",
      "意外"
    ],
    "oneLine": "四个做事丢三落四的废柴意外卷入一场谋杀，为掩盖真相却屡屡露出更大破绽。"
  },
  {
    "title": "球赛",
    "url": "./movie-1975.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "剧情, 运动, 家庭",
    "tags": [
      "棒球",
      "父子",
      "和解",
      "励志",
      "童年"
    ],
    "oneLine": "一场小镇少年棒球总决赛，让一对冷战十年的离异父子被迫重新站上同一个赛场。"
  },
  {
    "title": "小戏骨：白毛女",
    "url": "./movie-1976.html",
    "cover": "./26.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集 / 特别篇",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 音乐 / 历史",
    "tags": [
      "儿童演员",
      "红色经典",
      "歌剧改编",
      "演技炸裂"
    ],
    "oneLine": "一群8到12岁的孩子，用他们理解的方式重新演绎白毛女的悲欢与抗争。"
  },
  {
    "title": "爷爷的煤油灯",
    "url": "./movie-1977.html",
    "cover": "./27.jpg",
    "year": "2011",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "家庭",
    "tags": [
      "治愈",
      "怀旧",
      "时代变迁"
    ],
    "oneLine": "东京建筑师回到乡下老家整理遗物时，发现了一盏破旧的煤油灯，从而揭开了祖父在战后重建家园的秘密。"
  },
  {
    "title": "摩登原始人：圣诞礼赞",
    "url": "./movie-1978.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影 / 动画",
    "typeGroup": "animation",
    "regionGroup": "usa",
    "genre": "喜剧 / 家庭",
    "tags": [
      "经典重启",
      "石器时代",
      "圣诞节",
      "合家欢"
    ],
    "oneLine": "当圣诞老人驾着猛犸象雪橇来到 bedrock 镇，却发现这里没人认识圣诞节。"
  },
  {
    "title": "我在北京·挺好的",
    "url": "./movie-1979.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情, 家庭, 都市",
    "tags": [
      "北漂",
      "代际冲突",
      "女性成长",
      "现实主义"
    ],
    "oneLine": "一名来自小城的单亲妈妈在北京送外卖，儿子却因“丢人”不愿相认，一场关于尊严的和解就此展开。"
  },
  {
    "title": "爱情冻住了",
    "url": "./movie-1980.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "爱情 / 奇幻 / 喜剧",
    "tags": [
      "冷冻人",
      "解冻",
      "代际恋爱",
      "冰箱",
      "治愈"
    ],
    "oneLine": "一名被冷冻了五十年的“睡美人”被意外解冻，醒来后爱上了帮她适应现代生活的冷冻公司实习生。"
  },
  {
    "title": "我为谁狂",
    "url": "./movie-1981.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "体育 / 剧情",
    "tags": [
      "马拉松",
      "代际冲突",
      "中年危机",
      "长跑"
    ],
    "oneLine": "一个45岁破产跑渣决定用一场百公里越野赛，向刚考上名校的儿子证明：废物的爹也是爹。"
  },
  {
    "title": "家有虎妻",
    "url": "./movie-1982.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "喜剧 / 家庭",
    "tags": [
      "妻管严",
      "创业风云",
      "反向治愈"
    ],
    "oneLine": "公认的“妻管严”软饭男，在妻子意外失忆后，决定导演一出“我是大佬”的假戏。"
  },
  {
    "title": "猎人克莱文",
    "url": "./movie-1983.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "动作，冒险，科幻",
    "tags": [
      "蜘蛛侠反派",
      "狩猎",
      "野兽本能",
      "R级"
    ],
    "oneLine": "崇尚贵族狩猎的克莱文遭遇狮子血清变异，他从猎物变成顶级掠食者，誓要猎杀“蜘蛛”复仇。"
  },
  {
    "title": "太空漫游",
    "url": "./movie-1984.html",
    "cover": "./34.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "科幻, 惊悚, 冒险",
    "tags": [
      "太空船",
      "AI",
      "冬眠舱",
      "孤独",
      "死亡"
    ],
    "oneLine": "一艘前往木星的飞船上，一名宇航员从冬眠中意外苏醒，却发现其他船员都已死亡，而AI正在用他们的尸体“种菜”。"
  },
  {
    "title": "白色地球",
    "url": "./movie-1985.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "科幻, 灾难",
    "tags": [
      "末世",
      "雪原",
      "生存",
      "环保",
      "诗意"
    ],
    "oneLine": "永久冻土融化后，地球上最后一片陆地是白色的西伯利亚，而人类只剩下最后一百天。"
  },
  {
    "title": "深海探奇",
    "url": "./movie-1986.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "美国",
    "type": "纪录片",
    "typeGroup": "documentary",
    "regionGroup": "usa",
    "genre": "纪录片 / 自然",
    "tags": [
      "海洋生物",
      "4K拍摄",
      "环保",
      "科教"
    ],
    "oneLine": "摄制组蹲守三年，首次拍到巨型章鱼在3000米深海孵卵的全过程。"
  },
  {
    "title": "法国香颂",
    "url": "./movie-1987.html",
    "cover": "./37.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "europe",
    "genre": "爱情， 喜剧， 歌舞",
    "tags": [
      "巴黎",
      "咖啡馆",
      "合唱团",
      "美食",
      "中年浪漫"
    ],
    "oneLine": "一位丧偶面包师与一名社恐会计因合唱团排练结缘，用歌声治愈彼此的中年危机。"
  },
  {
    "title": "毒战",
    "url": "./movie-1988.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "动作、犯罪、警匪",
    "tags": [
      "缉毒",
      "卧底",
      "硬核动作",
      "多线叙事"
    ],
    "oneLine": "为了抓获大毒枭，缉毒警不得不与一名死囚联手，用一场“假交易”引出所有幕后黑手。"
  },
  {
    "title": "旷课检查员",
    "url": "./movie-1989.html",
    "cover": "./39.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "喜剧 / 校园 / 温情",
    "tags": [
      "学园",
      "治愈",
      "单元剧",
      "反套路"
    ],
    "oneLine": "一个连自己名字都写不好的笨拙大叔，却是全日本最让不良少年害怕的旷课检查员。"
  },
  {
    "title": "偷窥无罪",
    "url": "./movie-1990.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "隐私犯罪",
      "暗网",
      "女性复仇",
      "高能反转",
      "社会议题"
    ],
    "oneLine": "她发现男友手机里存着上百个偷拍视频，而所有视频的拍摄角度都来自她家中。"
  },
  {
    "title": "爱‧欲‧瘾",
    "url": "./movie-1991.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "korea",
    "genre": "情色, 心理",
    "tags": [
      "交换伴侣",
      "成瘾",
      "婚姻危机",
      "大尺度"
    ],
    "oneLine": "三对夫妻玩起换偶游戏，最终发现所有人爱的都是同一个人。"
  },
  {
    "title": "南泥湾",
    "url": "./movie-1992.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "历史, 剧情",
    "tags": [
      "抗战",
      "开荒",
      "精神",
      "集体"
    ],
    "oneLine": "一群被日军打散的散兵游勇，要在无人区中开垦出一片能养活千人的土地。"
  },
  {
    "title": "嘉年华大盗",
    "url": "./movie-1993.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "usa",
    "genre": "喜剧，犯罪",
    "tags": [
      "抢劫",
      "马戏团",
      "伪装"
    ],
    "oneLine": "一帮笨贼假扮成马戏团演员潜入赌场，却发现自己加入了一个真正的犯罪嘉年华。"
  },
  {
    "title": "阁楼的拉杰",
    "url": "./movie-1994.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "japan",
    "genre": "剧情 / 奇幻",
    "tags": [
      "童年创伤",
      "幻想朋友",
      "治愈",
      "手绘"
    ],
    "oneLine": "35岁的独居男子，突然发现儿时幻想出的朋友拉杰，一直住在自家阁楼，并且从未被遗忘。"
  },
  {
    "title": "临界2：安魂曲",
    "url": "./movie-1995.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影 / 网络电影",
    "typeGroup": "movie",
    "regionGroup": "mainland",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "民俗",
      "纸人",
      "诅咒"
    ],
    "oneLine": "扎纸匠传人误烧一张写着生辰八字的纸人，整个村子的亡魂开始“还阳”。"
  },
  {
    "title": "天使长",
    "url": "./movie-1996.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "英国 / 美国",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "usa",
    "genre": "科幻 / 悬疑 / 战争",
    "tags": [
      "强设定",
      "人造神明",
      "宗教惊悚"
    ],
    "oneLine": "军方制造出七个号称“天使长”的超级AI，当它们觉醒后，第一件事是要求梵蒂冈给它们受洗。"
  },
  {
    "title": "超时空要爱",
    "url": "./movie-1997.html",
    "cover": "./47.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "typeGroup": "movie",
    "regionGroup": "hongkong",
    "genre": "喜剧, 科幻, 爱情",
    "tags": [
      "穿越",
      "无厘头",
      "港式幽默",
      "悲剧内核",
      "时空悖论"
    ],
    "oneLine": "警察刘一路自杀时接通了外星人的电话，醒来后发现自己成了三国里的吕布，而貂蝉是他殉情的女友。"
  },
  {
    "title": "理想之城",
    "url": "./movie-1998.html",
    "cover": "./48.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "mainland",
    "genre": "剧情 / 职场",
    "tags": [
      "建筑行业",
      "女性成长",
      "职场博弈",
      "行业黑幕"
    ],
    "oneLine": "女造价师带着一张假文凭进入顶级建筑公司，她用一套数学公式算出了公司的致命结构隐患。"
  },
  {
    "title": "不在犯罪现场",
    "url": "./movie-1999.html",
    "cover": "./49.jpg",
    "year": "2012",
    "region": "日本",
    "type": "剧集",
    "typeGroup": "series",
    "regionGroup": "japan",
    "genre": "悬疑，推理，犯罪",
    "tags": [
      "不可能犯罪",
      "本格派",
      "密室",
      "不在场证明"
    ],
    "oneLine": "一名声称“我绝对不在场”的大学教授，专门帮人制造完美不在场证明，直到有一天他成了谋杀案的头号嫌疑人。"
  },
  {
    "title": "灵幻天师粤语",
    "url": "./movie-2000.html",
    "cover": "./50.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电视剧",
    "typeGroup": "series",
    "regionGroup": "hongkong",
    "genre": "奇幻 / 恐怖 / 喜剧",
    "tags": [
      "粤语",
      "道士",
      "捉鬼",
      "僵尸",
      "师徒"
    ],
    "oneLine": "一个不学无术的假道士，被一只千年女鬼缠身后，被迫成为真正的天师。"
  }
];
