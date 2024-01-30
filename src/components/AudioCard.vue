<script setup lang="tsx">
import type { AudioItem } from '~/data';
import { v4 as uuid } from 'uuid'
import { VMenu, VBtn, VList, VListItem, VAvatar, VSlider } from 'vuetify/components';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { mdiPause, mdiPlay } from '@mdi/js';
import { isEmpty } from 'lodash-es';

interface Props {
  title?: string
  rootDir?: string
  parentDir?: string
  audios?: AudioItem[]
  bps?: number
  selectedAudio?: AudioItem | null
}
const props = withDefaults(defineProps<Props>(), {
  title: '篮球场',
  rootDir: 'areas',
  parentDir: 'basketball-courts',
  audios: () => [],
  bps: 64,
  selectedAudio: null
})

const selectedAudio = ref<AudioItem>(props.selectedAudio || props.audios[0])
const audioFile = computed(() => `/sounds/${props.rootDir}/${props.parentDir}/${selectedAudio.value.file}--${props.bps}.m4a`)
const audio = ref<HTMLAudioElement>(new Audio(audioFile.value))

// * status
const isPlaying = ref<boolean>(false)

// * control
const volume = ref<number>(100)
const text = computed<string>(() => isPlaying.value ? '播放中...' : '暂停中...')
const isShowMore = ref<boolean>(false)

const color = computed(() => `success`)


// useTheme().global.name.value = 'light'
// useTheme().global.name.value = 'dark'

// ! hooks
if (process.client) {
  audio.value = new Audio(audioFile.value)
}

onMounted(() => {
  // * audio listeners
  audio.value.load()
  audio.value.volume = volume.value / 100
  audio.value.addEventListener('play', () => isPlaying.value = true)
  audio.value.addEventListener('pause', () => isPlaying.value = false)
  audio.value.addEventListener('ended', () => {
    audio.value.currentTime = 0
    audio.value.play()
  })
})

// * watchers
watch(volume, () => {
  audio.value.volume = +((volume.value / 100).toFixed(2))
})

// * actions
function changeAudio(item: AudioItem) {
  audio.value.pause()
  selectedAudio.value = item
  audio.value.src = audioFile.value
  audio.value.load()
  audio.value.play()
}
function handlePlay() {
  isPlaying.value ? audio.value.pause() : audio.value.play()
}

// * Components
function AudioList({ items }: { items: AudioItem[] }) {
  return (
    <VMenu
      transition={'slide-y-transition'}
      offset={10}
      v-slots={{
        activator: (_) => <VBtn {..._.props} color={color.value}>更多</VBtn>,
        default: () => <VList density={'compact'} disabled={isEmpty(items)} nav>
          {items.map(item => {
            const isSelected = computed(() => selectedAudio.value.name === item.name)
            return (
              <VListItem
                onClick={() => changeAudio(item)}
                active={isSelected.value}
                color={color.value}
              >
                <div class={'text-caption'}>{item.name}</div>
              </VListItem>
            )
          })}
        </VList>
      }}
    />
  )
}
function CircleDot({ items }: { items: AudioItem[] }) {
  return (
    <>
      {items.map(item => {
        const isSelected = computed(() => selectedAudio.value.name === item.name)
        return (
          <VAvatar
            color={isSelected.value ? (isPlaying.value ? color.value : 'error') : 'default'}
            variant={isSelected.value ? 'elevated' : 'tonal'}
            size={12}
            class={'mr-2 v-avatar--metronome'}
            style={{
              animationDuration: isPlaying.value && isSelected.value ? `1.5s` : `0s`
            }}
          />
        )
      })}
    </>
  )
}
</script>

<template>
  <VCard min-height="20vh">
    <VCardActions>
      <CircleDot :items="props.audios" />
      <VSpacer />
      <AudioList :items="props.audios" />
    </VCardActions>
    <VCardTitle>{{ props.title }}</VCardTitle>
    <VCardSubtitle>{{ selectedAudio.name }}</VCardSubtitle>
    <VCardActions>
      <VBtn @click.stop="handlePlay" :color="color" icon>
        <VIcon>
          {{ isPlaying ? mdiPause : mdiPlay }}
        </VIcon>
      </VBtn>
      <VSpacer />
      <VContainer>
        <VSlider v-model="volume" :color="color" hide-spin-buttons hide-details />
      </VContainer>
    </VCardActions>
  </VCard>
</template>

<style lang="scss">
@keyframes metronome-example {
  from {
    transform: scale(.5);
  }

  to {
    transform: scale(1.25);
  }
}

.v-avatar--metronome {
  animation-name: metronome-example;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</style>
