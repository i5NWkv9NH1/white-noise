import { v4 as uuid } from 'uuid'

export type PresetChannel = {
  name: string
} & {
  areas: AudioItem | null
  planes: AudioItem | null
  coffees: AudioItem | null
  markets: AudioItem | null
  coops: AudioItem | null
  rings: AudioItem | null
  anthems: AudioItem | null
}

export type Scoped = {
  id: string
  name: string
  dir: string
  channels: Channel[]
}

export type Channel = {
  id: string
  name: string
  dir: string
  audios: AudioItem[]
}

export type AudioItem = {
  id: string
  name: string
  file: string
}

export const datas: Scoped[] = [
  {
    id: uuid(), name: '地点', dir: 'areas', channels: [
      {
        id: uuid(), name: '篮球场', dir: 'basketball-courts', audios: [
          { id: uuid(), name: '篮球场 1', file: 'basketball-game-1' },
          { id: uuid(), name: '篮球场 2', file: 'basketball-game-2' },
          { id: uuid(), name: '篮球训练', file: 'basketball-training-1' },
        ]
      },
      {
        id: uuid(), name: '飞机', dir: 'planes', audios: [
          { id: uuid(), name: '机舱 1', file: 'cabin-1' },
          { id: uuid(), name: '机舱 2', file: 'cabin-2' },
          { id: uuid(), name: '机舱 3', file: 'cabin-3' },
        ]
      },
      {
        id: uuid(), name: '咖啡厅', dir: 'coffees', audios: [
          { id: uuid(), name: '咖啡厅（英语）', file: 'cafe-english-speech-1' },
          { id: uuid(), name: '咖啡厅（俄语）', file: 'cafe-1' },
          { id: uuid(), name: '咖啡厅', file: 'cafe-russian-speech-1' },
          { id: uuid(), name: '咖啡机', file: 'coffee-machine-1' },
        ]
      },
      {
        id: uuid(), name: '超市', dir: 'markets', audios: [
          { id: uuid(), name: '收银机', file: 'cash-machine-1' },
          { id: uuid(), name: '旧收银机', file: 'old-cash-machine-1' },
          { id: uuid(), name: '超市 1', file: 'supermarket-1' },
          { id: uuid(), name: '超市 2', file: 'supermarket-2' },
        ]
      },
      // TODO: dir, file
      {
        id: uuid(), name: '鸡舍', dir: 'coops', audios: [
          { id: uuid(), name: '鸡笼 1', file: 'chicken-coop-1' },
          { id: uuid(), name: '鸡笼 2', file: 'chicken-coop-2' },
          { id: uuid(), name: '鸡叫', file: 'chickens-1' },
        ]
      },
      {
        id: uuid(), name: '钟声', dir: 'rings', audios: [
          { id: uuid(), name: '钟声 1', file: 'chime-1' },
          { id: uuid(), name: '钟声 2', file: 'chime-2' },
          { id: uuid(), name: '钟声 3', file: 'chime-3' },
          { id: uuid(), name: '钟声 4', file: 'chime-4' },
        ]
      },
      {
        id: uuid(), name: '圣歌', dir: 'anthems', audios: [
          { id: uuid(), name: '圣歌（英语）', file: 'english-chants-1' },
          { id: uuid(), name: '圣歌（管风琴）', file: 'english-chants-to-organ-1' },
          { id: uuid(), name: '圣歌（俄语）', file: 'russian-chants-1' },
        ]
      },
      {
        id: uuid(), name: '地下廊道', dir: 'undergrounds', audios: [
          { id: uuid(), name: '自动扶梯', file: 'escalator-1' },
          { id: uuid(), name: '纽约地铁', file: 'new-york-subway-1' },
          { id: uuid(), name: '俄罗斯地铁', file: 'st-petersburg-metro-1' },
        ]
      },
      {
        id: uuid(), name: '农场', dir: 'farms', audios: [
          { id: uuid(), name: '农场 1', file: 'farm-1' },
          { id: uuid(), name: '农场 2', file: 'farm-2' },
          { id: uuid(), name: '农场 3', file: 'farm-3' },
          { id: uuid(), name: '农场 4', file: 'farm-4' },
          { id: uuid(), name: '农场 5', file: 'farm-5' },
        ]
      },
      {
        id: uuid(), name: '对话', dir: 'chats', audios: [
          { id: uuid(), name: '女性对话（英语）', file: 'female-conversation-english-speech-1' },
          { id: uuid(), name: '法语对话', file: 'french-speech-1' },
          { id: uuid(), name: '酒吧里的男人（英语）', file: 'men-at-the-bar-english-speech-1' },
          { id: uuid(), name: '酒吧里的男人（德语）', file: 'men-at-the-bar-german-speech-1' },
          { id: uuid(), name: '邻居（英语）', file: 'neighbors-english-speech-1' },
          { id: uuid(), name: '夜话', file: 'night-talk-1' },
        ]
      },
      {
        id: uuid(), name: '火车', dir: 'trains', audios: [
          { id: uuid(), name: '火车站（室外）', file: 'train-1' },
          { id: uuid(), name: '火车站（室内）', file: 'railway-station-1' },
          { id: uuid(), name: '在火车上 1', file: 'inside-the-train-1' },
          { id: uuid(), name: '在火车上 2', file: 'inside-the-train-2' },
        ]
      },
      {
        id: uuid(), name: '公园', dir: 'parks', audios: [
          { id: uuid(), name: '游乐场 1', file: 'playground-1' },
          { id: uuid(), name: '游乐场 2', file: 'playground-2' },
          { id: uuid(), name: '游乐场 3', file: 'playground-3' },
          { id: uuid(), name: '游乐场 4', file: 'playground-4' },
        ]
      },
      {
        id: uuid(), name: '街道', dir: 'streets', audios: [
          { id: uuid(), name: '街道噪音 1', file: 'street-noise-1' },
          { id: uuid(), name: '街道噪音 2', file: 'street-noise-2' },
          { id: uuid(), name: '街道车流', file: 'transport-movement-1' },
        ]
      },
    ]
  },
  {
    id: uuid(), name: '背景', dir: 'backgrounds', channels: [
      {
        id: uuid(), name: '海浪', dir: 'sea-wave', audios: [
          { id: uuid(), name: '海滩 1', file: 'beach-1' },
          { id: uuid(), name: '海滩 2', file: 'beach-2' },
          { id: uuid(), name: '海滩 3', file: 'beach-3' },
          { id: uuid(), name: '沿海洞穴', file: 'coastal-cave-1' },
          { id: uuid(), name: '岩石海岸', file: 'rocky-coast-1' },
          { id: uuid(), name: '暴风雨', file: 'storm-1' },
        ]
      },
      {
        id: uuid(), name: '鸟鸣', dir: 'birds', audios: [
          { id: uuid(), name: '鸟鸣 1', file: 'birdsong-1' },
          { id: uuid(), name: '鸟鸣 2', file: 'birdsong-2' },
          { id: uuid(), name: '鸟鸣 3', file: 'birdsong-3' },
          { id: uuid(), name: '鸟鸣 4', file: 'birdsong-4' },
        ]
      },
      {
        id: uuid(), name: '篝火', dir: 'bonfires', audios: [
          { id: uuid(), name: '篝火 1', file: 'bonfire-1' },
          { id: uuid(), name: '篝火 2', file: 'bonfire-2' },
          { id: uuid(), name: '篝火 3', file: 'bonfire-3' },
          { id: uuid(), name: '篝火 4', file: 'bonfire-4' },
          { id: uuid(), name: '篝火 4', file: 'bonfire-5' },
          { id: uuid(), name: '壁炉', file: 'fireplace-1' },
          { id: uuid(), name: '烧煤', file: 'smouldering-coals-1' },
        ]
      },
      {
        id: uuid(), name: '道路', dir: 'roads', audios: [
          { id: uuid(), name: '道路 1', file: 'road-1' },
          { id: uuid(), name: '道路 2', file: 'road-2' },
          { id: uuid(), name: '汽车、火车', file: 'cars-trains-1' },
          { id: uuid(), name: '雪路', file: 'snowy-road-1' },
        ]
      },
      {
        id: uuid(), name: '溪流', dir: 'rivers', audios: [
          { id: uuid(), name: '溪流 1', file: 'stream-1' },
          { id: uuid(), name: '溪流 2', file: 'stream-2' },
          { id: uuid(), name: '溪流 3', file: 'stream-2' },
          { id: uuid(), name: '洞穴溪流', file: 'cave-stream-1' },
          { id: uuid(), name: '山谷溪流', file: 'mountain-creek-1' },
        ]
      },
      {
        id: uuid(), name: '乡村生活', dir: 'lifes', audios: [
          { id: uuid(), name: '溪流 1', file: 'country-life-1' },
          { id: uuid(), name: '溪流 2', file: 'country-life-2' },
          { id: uuid(), name: '溪流 3', file: 'country-life-3' },
        ]
      },
      {
        id: uuid(), name: '风声', dir: 'winds', audios: [
          { id: uuid(), name: '沙漠', file: 'desert-1' },
          { id: uuid(), name: '远风', file: 'far-1' },
          { id: uuid(), name: '风啸声', file: 'howling-1' },
          { id: uuid(), name: '和风', file: 'light-1' },
          { id: uuid(), name: '中度风 1', file: 'medium-1' },
          { id: uuid(), name: '中度风 2', file: 'medium-2' },
          { id: uuid(), name: '狂风', file: 'ominous-1' },
          { id: uuid(), name: '强风', file: 'strong-1' },
          { id: uuid(), name: '呼啸风', file: 'whistling-1' },
        ]
      },
      {
        id: uuid(), name: '森林', dir: 'forests', audios: [
          { id: uuid(), name: '森林 1', file: 'forest-1' },
          { id: uuid(), name: '森林 2', file: 'forest-2' },
          { id: uuid(), name: '森林 3', file: 'forest-3' },
          { id: uuid(), name: '森林 4', file: 'forest-4' },
          { id: uuid(), name: '森林 5', file: 'forest-5' },
        ]
      },
      {
        id: uuid(), name: '动物', dir: 'animals', audios: [
          { id: uuid(), name: '青蛙和蝉 1', file: 'frogs-and-cicadas-1' },
          { id: uuid(), name: '青蛙和蝉 2', file: 'frogs-and-cicadas-2' },
        ]
      },
      {
        id: uuid(), name: '夜晚', dir: 'nights', audios: [
          { id: uuid(), name: '夜晚 1', file: 'night-1' },
          { id: uuid(), name: '夜晚 2', file: 'night-2' },
          { id: uuid(), name: '城市之夜 1', file: 'night-in-city-1' },
          { id: uuid(), name: '城市之夜 2', file: 'night-in-city-2' },
        ]
      },
      {
        id: uuid(), name: '雨声', dir: 'rains', audios: [
          { id: uuid(), name: '雨声 1', file: 'rain-1' },
          { id: uuid(), name: '雨声 2', file: 'rain-2' },
          { id: uuid(), name: '雨声 3', file: 'rain-3' },
          { id: uuid(), name: '雨落在帐篷上', file: 'rain-on-the-tent-1' },
          { id: uuid(), name: '雨落在雨声上', file: 'rain-over-un-umbrella-1' },
          { id: uuid(), name: '雨落在窗户上', file: 'rain-on-the-window-1' },
          { id: uuid(), name: '雷雨', file: 'rain-with-thunderstorm-1' },
        ]
      },
      {
        id: uuid(), name: '雷声', dir: 'thunderclaps', audios: [
          { id: uuid(), name: '打雷 1', file: 'thunder-1' },
          { id: uuid(), name: '打雷 2', file: 'thunder-2' },
          { id: uuid(), name: '打雷 3', file: 'thunder-3' },
          { id: uuid(), name: '雷雨', file: 'thunderstorm-with-rain-1' },
        ]
      },
      {
        id: uuid(), name: '瀑布', dir: 'waterfalls', audios: [
          { id: uuid(), name: '瀑布 1', file: 'waterfall-1' },
          { id: uuid(), name: '瀑布 2', file: 'waterfall-2' },
          { id: uuid(), name: '地下瀑布', file: 'underground-waterfall-1' },
        ]
      },
    ]
  },
  {
    id: uuid(), name: '环境', dir: 'environments', channels: [
      {
        id: uuid(), name: '泡泡', dir: 'bubbles', audios: [
          { id: uuid(), name: '气泡 1', file: 'bubbles-1' },
          { id: uuid(), name: '气泡 2', file: 'bubbles-2' },
          { id: uuid(), name: '气泡 3', file: 'bubbles-3' },
          { id: uuid(), name: '气泡 4', file: 'bubbles-4' },
        ]
      },
      {
        id: uuid(), name: '猫', dir: 'cats', audios: [
          { id: uuid(), name: '猫打呼噜 1', file: 'cat-purr-1' },
          { id: uuid(), name: '猫打呼噜 2', file: 'cat-purr-2' },
        ]
      },
      {
        id: uuid(), name: '吊扇', dir: 'fans', audios: [
          { id: uuid(), name: '吊扇 1', file: 'ceiling-fan-1' },
          { id: uuid(), name: '吊扇 2', file: 'ceiling-fan-2' },
        ]
      },
      {
        id: uuid(), name: '咀嚼薯片', dir: 'chips', audios: [
          { id: uuid(), name: '咀嚼薯片 1', file: 'chewing-1' },
          { id: uuid(), name: '咀嚼薯片 2', file: 'chewing-2' },
          { id: uuid(), name: '咀嚼薯片 3', file: 'chewing-3' },
        ]
      },
      {
        id: uuid(), name: '时钟', dir: 'clocks', audios: [
          { id: uuid(), name: '挂钟 1', file: 'wall-clock-1' },
          { id: uuid(), name: '挂钟 2', file: 'wall-clock-2' },
          { id: uuid(), name: '挂钟 3', file: 'wall-clock-3' },
          { id: uuid(), name: '挂钟 4', file: 'wall-clock-4' },
          { id: uuid(), name: '手表 1', file: 'wrist-watch-1' },
          { id: uuid(), name: '手表 2', file: 'wrist-watch-2' },
          { id: uuid(), name: '风铃', file: 'chimes-1' },
          { id: uuid(), name: '钟楼', file: 'clock-tower-1' },
          { id: uuid(), name: '机械计时器', file: 'mechanic-timer-1' },
        ]
      },
      {
        id: uuid(), name: '深海', dir: 'deep-sea', audios: [
          { id: uuid(), name: '深海 1', file: 'depth-1' },
          { id: uuid(), name: '深海 2', file: 'depth-2' },
          { id: uuid(), name: '深海 3', file: 'depth-3' },
          { id: uuid(), name: '深海 4', file: 'depth-4' },
        ]
      },
      {
        id: uuid(), name: '烟花', dir: 'fireworks', audios: [
          { id: uuid(), name: '烟花 1', file: 'firework-1' },
          { id: uuid(), name: '烟花 2', file: 'firework-2' },
          { id: uuid(), name: '烟花 3', file: 'firework-3' },
        ]
      },
      {
        id: uuid(), name: '电吹风', dir: 'hair-dryer', audios: [
          { id: uuid(), name: '电吹风 1', file: 'hair-dryer-1' },
          { id: uuid(), name: '电吹风 2', file: 'hair-dryer-2' },
          { id: uuid(), name: '电吹风 3', file: 'hair-dryer-3' },
        ]
      },
      {
        id: uuid(), name: '打印机', dir: 'printers', audios: [
          { id: uuid(), name: '喷码机 1', file: 'jet-printer-1' },
          { id: uuid(), name: '喷码机 2', file: 'jet-printer-2' },
          { id: uuid(), name: '矩阵打印机 1', file: 'matrix-printer-1' },
          { id: uuid(), name: '矩阵打印机 2', file: 'matrix-printer-2' },
        ]
      },
      {
        id: uuid(), name: '键盘', dir: 'keyboards', audios: [
          { id: uuid(), name: '键盘 1', file: 'keyboard-1' },
          { id: uuid(), name: '键盘 2', file: 'keyboard-2' },
          { id: uuid(), name: '打字机', file: 'typewriter-1' },
        ]
      },
      {
        id: uuid(), name: '太空', dir: 'space', audios: [
          { id: uuid(), name: '太空 1', file: 'space-1' },
          { id: uuid(), name: '太空 2', file: 'space-2' },
          { id: uuid(), name: '太空 3', file: 'space-3' },
          { id: uuid(), name: '太空 4', file: 'space-4' },
          { id: uuid(), name: '太空 5', file: 'space-5' },
        ]
      },
      {
        id: uuid(), name: '台式风扇', dir: 'table-fans', audios: [
          { id: uuid(), name: '台式风扇 1', file: 'table-fan-1' },
          { id: uuid(), name: '台式风扇 2', file: 'table-fan-2' },
        ]
      },
      {
        id: uuid(), name: '吸尘器', dir: 'cleaners', audios: [
          { id: uuid(), name: '吸尘器 1', file: 'vacuum-cleaner-1' },
          { id: uuid(), name: '吸尘器 2', file: 'vacuum-cleaner-1' },
        ]
      },
      {
        id: uuid(), name: '风铃', dir: 'bells', audios: [
          { id: uuid(), name: '风铃 1', file: 'wind-chimes-1' },
          { id: uuid(), name: '风铃 2', file: 'wind-chimes-2' },
          { id: uuid(), name: '风铃 3', file: 'wind-chimes-3' },
          { id: uuid(), name: '风铃 4', file: 'wind-chimes-4' },
        ]
      }
    ]
  },
  {
    id: uuid(), name: '颜色噪音', dir: 'colornoises', channels: [
      {
        id: uuid(), name: '棕色噪音', dir: 'brown', audios: [
          { id: uuid(), name: '棕色噪音', file: 'brown-noise-1' },
        ]
      },
      {
        id: uuid(), name: '粉红噪音', dir: 'pink', audios: [
          { id: uuid(), name: '粉红噪音', file: 'pink-noise-1' },
        ]
      },
      {
        id: uuid(), name: '白噪音', dir: 'white', audios: [
          { id: uuid(), name: '白噪音', file: 'white-noise-1' },
        ]
      },
    ]
  },
  {
    id: uuid(), name: '其他', dir: 'others', channels: [
      {
        id: uuid(), name: '呼吸', dir: 'breathing', audios: [
          { id: uuid(), name: '呼吸 1', file: 'breathe-1' },
          { id: uuid(), name: '呼吸 2', file: 'breathe-2' },
          { id: uuid(), name: '呼吸 3', file: 'breathe-3' },
          { id: uuid(), name: '嗅探 1', file: 'sniff-1' },
          { id: uuid(), name: '嗅探 2', file: 'sniff-2' },
          { id: uuid(), name: '打呼噜', file: 'snore-1' },
        ]
      },
      {
        id: uuid(), name: '引擎', dir: 'engines', audios: [
          { id: uuid(), name: '引擎 1', file: 'engine-1' },
          { id: uuid(), name: '引擎 2', file: 'engine-2' },
          { id: uuid(), name: '引擎 3', file: 'engine-3' },
          { id: uuid(), name: '引擎 4', file: 'engine-4' },
        ]
      },
      {
        id: uuid(), name: '熔岩', dir: 'lavas', audios: [
          { id: uuid(), name: '岩浆 1', file: 'magam-1' },
          { id: uuid(), name: '岩浆 2', file: 'magam-2' },
          { id: uuid(), name: '岩浆 3', file: 'magam-3' },
        ]
      },
      {
        id: uuid(), name: '步行', dir: 'walking', audios: [
          { id: uuid(), name: '在路上 1', file: 'on-earth-1' },
          { id: uuid(), name: '在路上 2', file: 'on-earth-2' },
          { id: uuid(), name: '在路上 3', file: 'on-earth-3' },
          { id: uuid(), name: '在路上 4', file: 'on-earth-4' },
          { id: uuid(), name: '在草地上 1', file: 'on-grass-1' },
          { id: uuid(), name: '在草地上 2', file: 'on-grass-2' },
          { id: uuid(), name: '在草地上 3', file: 'on-grass-3' },
          { id: uuid(), name: '在落叶上 1', file: 'on-leaves-1' },
          { id: uuid(), name: '在落叶上 2', file: 'on-leaves-2' },
          { id: uuid(), name: '在落叶上 3', file: 'on-leaves-3' },
          { id: uuid(), name: '在沙滩上 1', file: 'on-sand-1' },
          { id: uuid(), name: '在沙滩上 2', file: 'on-sand-2' },
          { id: uuid(), name: '在沙滩上 3', file: 'on-sand-3' },
          { id: uuid(), name: '在雪地上 1', file: 'on-snow-1' },
          { id: uuid(), name: '在雪地上 2', file: 'on-snow-2' },
          { id: uuid(), name: '在雪地上 3', file: 'on-snow-3' },
          { id: uuid(), name: '在雪地上 4', file: 'on-snow-4' },
          { id: uuid(), name: '在雪地上 5', file: 'on-snow-5' },
          { id: uuid(), name: '在雪地上 1', file: 'on-snow-1' },
          { id: uuid(), name: '步行 1', file: 'steps-1' },
          { id: uuid(), name: '步行 2', file: 'steps-2' },
          { id: uuid(), name: '步行 3', file: 'steps-3' },
          { id: uuid(), name: '木板上的脚步声 1', file: 'steps-on-the-wood-1' },
          { id: uuid(), name: '木板上的脚步声 2', file: 'steps-on-the-wood-2' },
          { id: uuid(), name: '地毯上的脚步声 ', file: 'steps-on-the-carpet-1' },
        ]
      },
      {
        id: uuid(), name: '船', dir: 'boats', audios: [
          { id: uuid(), name: '摩托艇 1', file: 'powerboat-1' },
          { id: uuid(), name: '摩托艇 2', file: 'powerboat-2' },
          { id: uuid(), name: '划艇 1', file: 'rowing-boat-1' },
          { id: uuid(), name: '划艇 2', file: 'rowing-boat-2' },
        ]
      },
      {
        id: uuid(), name: '游泳', dir: 'swimming', audios: [
          { id: uuid(), name: '游泳 1', file: 'swim-1' },
          { id: uuid(), name: '游泳 2', file: 'swim-2' },
        ]
      },
      {
        id: uuid(), name: '鲸鱼', dir: 'whales', audios: [
          { id: uuid(), name: '鲸鱼 1', file: 'whale-1' },
          { id: uuid(), name: '鲸鱼 2', file: 'whale-2' },
          { id: uuid(), name: '鲸鱼 3', file: 'whale-3' },
          { id: uuid(), name: '鲸鱼（可怕）', file: 'whale-scary-sound-1' },
        ]
      },
    ]
  },
  {
    id: uuid(), name: '环境音效', dir: 'soundeffects', channels: [
      {
        id: uuid(), name: '摩擦', dir: 'fricatives', audios: [
          { id: uuid(), name: '纸箱', file: 'cardboard-box-1' },
          { id: uuid(), name: '皮套', file: 'leater-cover-1' },
          { id: uuid(), name: '皮枕', file: 'leather-pillow-1' },
          { id: uuid(), name: '塑胶', file: 'plastic-1' },
          { id: uuid(), name: '木头 1', file: 'wood-1' },
          { id: uuid(), name: '木头 5', file: 'wood-5' },
        ]
      },
      {
        id: uuid(), name: '触发', dir: 'triggers', audios: [
          { id: uuid(), name: '耳朵按摩', file: 'ear-massage-1' },
          { id: uuid(), name: '口水声', file: 'fizzy-1' },
          { id: uuid(), name: '泡沫', file: 'foam-1' },
          { id: uuid(), name: '泡沫', file: 'foam-1' },
          { id: uuid(), name: '海绵', file: 'sponge-1' },
          { id: uuid(), name: '割胶', file: 'tapping-1' },
          { id: uuid(), name: '搭扣', file: 'velcro-1' },
          { id: uuid(), name: '毛纺', file: 'wool-1' },
          { id: uuid(), name: '书写铅笔', file: 'writing-pencil-1' },
          { id: uuid(), name: '塑料袋', file: 'plastic-bag-1' },
          { id: uuid(), name: '木头 1', file: 'wood-1' },
          { id: uuid(), name: '木头 2', file: 'wood-2' },
          { id: uuid(), name: '木头 3', file: 'wood-3' },
          { id: uuid(), name: '木头 4', file: 'wood-4' },
        ]
      },
      {
        id: uuid(), name: '理发', dir: 'hairdressings', audios: [
          { id: uuid(), name: '面部清洁', file: 'face-cleaning-1' },
          { id: uuid(), name: '理发 1', file: 'haircut-1' },
          { id: uuid(), name: '理发 2', file: 'haircut-2' },
          { id: uuid(), name: '喷涂', file: 'spraying-1' },
        ]
      },
      {
        id: uuid(), name: '耳语', dir: 'whispers', audios: [
          { id: uuid(), name: '低语 1', file: 'tktktk-1' },
          { id: uuid(), name: '低语 2', file: 'tktktk-2' },
          { id: uuid(), name: '耳语 1', file: 'whisper-1' },
          { id: uuid(), name: '耳语 2', file: 'whisper-2' },
        ]
      },
    ]
  }
]

