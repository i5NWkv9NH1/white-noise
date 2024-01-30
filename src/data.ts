import { v4 as uuid } from 'uuid'

export type AudioItem = {
  id: string
  name: string
  file: string
}

export const datas = [
  {
    id: uuid(), title: '地点', dir: 'areas', childrens: [
      {
        id: uuid(), title: '篮球场', dir: 'basketball-courts', audios: [
          { id: uuid(), name: '篮球场 1', file: 'basketball-game-1' },
          { id: uuid(), name: '篮球场 2', file: 'basketball-game-2' },
          { id: uuid(), name: '篮球训练', file: 'basketball-training-1' },
        ]
      },
      {
        id: uuid(), title: '飞机', dir: 'planes', audios: [
          { id: uuid(), name: '机舱 1', file: 'cabin-1' },
          { id: uuid(), name: '机舱 2', file: 'cabin-2' },
          { id: uuid(), name: '机舱 3', file: 'cabin-3' },
        ]
      }
    ]
  },

]
