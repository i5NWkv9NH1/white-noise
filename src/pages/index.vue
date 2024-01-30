<script setup lang="tsx">
import { v4 as uuid } from 'uuid'
const data = ref([
  {
    id: uuid(), title: '地点', dir: 'areas', channels: [
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
      },
      {
        id: uuid(), title: '咖啡厅', dir: 'coffees', audios: [
          { id: uuid(), name: '咖啡厅（英语）', file: 'cafe-english-speech-1' },
          { id: uuid(), name: '咖啡厅（俄语）', file: 'cafe-1' },
          { id: uuid(), name: '咖啡厅', file: 'cafe-russian-speech-1' },
          { id: uuid(), name: '咖啡机', file: 'coffee-machine-1' },
        ]
      },
      {
        id: uuid(), title: '超市', dir: 'markets', audios: [
          { id: uuid(), name: '收银机', file: 'cash-machine-1' },
          { id: uuid(), name: '旧收银机', file: 'old-cash-machine-1' },
          { id: uuid(), name: '超市 1', file: 'supermarket-1' },
          { id: uuid(), name: '超市 2', file: 'supermarket-2' },
        ]
      },
      // TODO: dir, file
      {
        id: uuid(), title: '鸡舍', dir: 'coops', audios: [
          { id: uuid(), name: '鸡笼 1', file: 'chicken-coop-1' },
          { id: uuid(), name: '鸡笼 2', file: 'chicken-coop-2' },
          { id: uuid(), name: '鸡叫', file: 'chickens-1' },
        ]
      },
      {
        id: uuid(), title: '钟声', dir: 'rings', audios: [
          { id: uuid(), name: '钟声 1', file: 'chime-1' },
          { id: uuid(), name: '钟声 2', file: 'chime-2' },
          { id: uuid(), name: '钟声 3', file: 'chime-3' },
          { id: uuid(), name: '钟声 4', file: 'chime-4' },
          { id: uuid(), name: '钟声 5', file: 'chime-5' },
        ]
      },
      {
        id: uuid(), title: '圣歌', dir: 'anthems', audios: [
          { id: uuid(), name: '圣歌（英语）', file: 'english-chants-1' },
          { id: uuid(), name: '圣歌（管风琴）', file: 'english-chants-to-organ-1' },
          { id: uuid(), name: '圣歌（俄语）', file: 'russian-chants-1' },
        ]
      },
      {
        id: uuid(), title: '地下廊道', dir: 'undergrounds', audios: [
          { id: uuid(), name: '自动扶梯', file: 'escalator-1' },
          { id: uuid(), name: '纽约地铁', file: 'new-york-subway-1' },
          { id: uuid(), name: '俄罗斯地铁', file: 'st-petersburg-metro-1' },
        ]
      },
      {
        id: uuid(), title: '农场', dir: 'farms', audios: [
          { id: uuid(), name: '农场 1', file: 'farm-1' },
          { id: uuid(), name: '农场 2', file: 'farm-2' },
          { id: uuid(), name: '农场 3', file: 'farm-3' },
          { id: uuid(), name: '农场 4', file: 'farm-4' },
          { id: uuid(), name: '农场 5', file: 'farm-5' },
        ]
      },
      {
        id: uuid(), title: '对话', dir: 'chats', audios: [
          { id: uuid(), name: '女性对话（英语）', file: 'female-conversation-english-speech-1' },
          { id: uuid(), name: '法语对话', file: 'french-speech-1' },
          { id: uuid(), name: '酒吧里的男人（英语）', file: 'men-at-the-bar-english-speech-1' },
          { id: uuid(), name: '酒吧里的男人（德语）', file: 'men-at-the-bar-german-speech-1' },
          { id: uuid(), name: '邻居（英语）', file: 'neighbors-english-speech-1' },
          { id: uuid(), name: '夜话', file: 'night-talk-1' },
        ]
      },
      {
        id: uuid(), title: '火车', dir: 'trains', audios: [
          { id: uuid(), name: '火车站（室外）', file: 'train-1' },
          { id: uuid(), name: '火车站（室内）', file: 'railway-station-1' },
          { id: uuid(), name: '在火车上 1', file: 'inside-the-train-1' },
          { id: uuid(), name: '在火车上 2', file: 'inside-the-train-2' },
        ]
      },
      {
        id: uuid(), title: '公园', dir: 'parks', audios: [
          { id: uuid(), name: '游乐场 1', file: 'playground-1' },
          { id: uuid(), name: '游乐场 2', file: 'playground-2' },
          { id: uuid(), name: '游乐场 3', file: 'playground-3' },
          { id: uuid(), name: '游乐场 4', file: 'playground-4' },
        ]
      },
      {
        id: uuid(), title: '街道', dir: 'streets', audios: [
          { id: uuid(), name: '街道噪音 1', file: 'street-noise-1' },
          { id: uuid(), name: '街道噪音 2', file: 'street-noise-2' },
          { id: uuid(), name: '街道车流', file: 'transport-movement-1' },
        ]
      },
    ]
  },
  {
    id: uuid(), title: '背景', dir: 'backgrounds', channels: [
      {
        id: uuid(), title: '海浪', dir: 'sea-wave', audios: [
          { id: uuid(), name: '海滩 1', file: 'beach-1' },
          { id: uuid(), name: '海滩 2', file: 'beach-2' },
          { id: uuid(), name: '海滩 3', file: 'beach-3' },
          { id: uuid(), name: '沿海洞穴', file: 'coastal-cave-1' },
          { id: uuid(), name: '岩石海岸', file: 'rocky-coast-1' },
          { id: uuid(), name: '暴风雨', file: 'storm-1' },
        ]
      },
      {
        id: uuid(), title: '鸟鸣', dir: 'birds', audios: [
          { id: uuid(), name: '鸟鸣 1', file: 'birdsong-1' },
          { id: uuid(), name: '鸟鸣 2', file: 'birdsong-2' },
          { id: uuid(), name: '鸟鸣 3', file: 'birdsong-3' },
          { id: uuid(), name: '鸟鸣 4', file: 'birdsong-4' },
        ]
      }
    ]
  },
  {
    id: uuid(), title: '环境', dir: 'environments', channels: [
      {
        id: uuid(), title: '泡泡', dir: 'bubbles', audios: [
          { id: uuid(), name: '气泡 1', file: 'bubbles-1' },
          { id: uuid(), name: '气泡 2', file: 'bubbles-2' },
          { id: uuid(), name: '气泡 3', file: 'bubbles-3' },
          { id: uuid(), name: '气泡 4', file: 'bubbles-4' },
          { id: uuid(), name: '气泡 5', file: 'bubbles-5' },
        ]
      },
      {
        id: uuid(), title: '风铃', dir: 'bells', audios: [
          { id: uuid(), name: '风铃 1', file: 'wind-chimes-1' },
          { id: uuid(), name: '风铃 2', file: 'wind-chimes-2' },
          { id: uuid(), name: '风铃 3', file: 'wind-chimes-3' },
          { id: uuid(), name: '风铃 4', file: 'wind-chimes-4' },
        ]
      }
    ]
  }
])
</script>

<template>
  <VContainer>
    <section v-for="scope in data" :key="scope.id" class="d-flex flex-column gap-8 my-10">
      <LazyClientOnly>
        <h4 class="text-h4 font-weight-bold">{{ scope.title }}</h4>
        <template #fallback>
          <VSkeletonLoader type="sentences" />
        </template>
      </LazyClientOnly>
      <VRow>
        <VCol cols="12" lg="3" md="4" sm="6" v-for="channel in scope.channels" :key="channel.id">
          <LazyClientOnly>
            <!-- <AudioCard :title="children.title" :parent-dir="item.dir" :dir="children.dir" :audios="children.audios" /> -->
            <AudioCard :title="channel.title" :root-dir="scope.dir" :parent-dir="channel.dir" :audios="channel.audios" />
            <template #fallback>
              <VSkeletonLoader type="card" />
            </template>
          </LazyClientOnly>
          <!-- <AudioCard :title="children.title" :parent-dir="item.dir" :dir="children.dir" :audios="children.audios" /> -->
        </VCol>
      </VRow>
    </section>
  </VContainer>
</template>
