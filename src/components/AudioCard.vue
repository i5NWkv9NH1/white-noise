<script setup lang="tsx">
import type { AudioItem, Channel, Scoped } from '~/data';
import { v4 as uuid } from 'uuid'
import { VMenu, VBtn, VList, VListItem, VAvatar, VSlider, VSlideGroup, VVirtualScroll, VFadeTransition, VSlideXTransition } from 'vuetify/components';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { mdiPause, mdiPlay } from '@mdi/js';
import { isEmpty } from 'lodash-es';

interface Props {
  scope: Scoped
  channel: Channel
  audios?: AudioItem[]
  bps?: number
}
const props = withDefaults(defineProps<Props>(), {
  audios: () => [],
  bps: 64,
})

const { queue } = useAudio()

const selectedAudio = ref<AudioItem>(props.channel.audios[0] || props.audios[0])
// TODO: use preset
// const selectedAudio = ref<AudioItem>(
//   // ! use preset
//   (currentPreset.value && currentPreset.value![props.channel.dir])
//   // ! not found preset
//   || props.channel.audios[0]
//   || props.audios[0]
// )
const baseUrl = computed(() => {
  if (process.client) {
    return window.location.pathname
  }
  return ''
})
const audioFile = computed(() => (`${baseUrl.value}/sounds/${props.scope.dir}/${props.channel.dir}/${selectedAudio.value.file}--${props.bps}.m4a`));
const audio = ref<HTMLAudioElement>(new Audio())
// * status
const isPlaying = ref<boolean>(false)

// * control
const volume = ref<number>(100)
const color = computed(() => `success`)

onMounted(() => {
  audio.value = new Audio()
  // * audio listeners
  audio.value.load()
  audio.value.volume = volume.value / 100
  audio.value.addEventListener('play', () => {
    isPlaying.value = true
  })
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
  queue.value.push(audio.value)
}
function handlePlay() {
  // ? init
  // ! optimize
  if (isEmpty(audio.value.src)) {
    audio.value.src = audioFile.value
    queue.value.push(audio.value)
  }

  isPlaying.value ? audio.value.pause() : audio.value.play()
}

// * Components
function AudioList({ items }: { items: AudioItem[] }) {

  function ScrollItems() {
    return (
      <VList
        density={'compact'}
        nav
      >
        <VVirtualScroll
          items={items}
          maxHeight={300}
          v-slots={{
            default: ({ item, index }) => {
              const isSelected = computed(() => selectedAudio.value.name === item.name)
              return (
                <VListItem
                  onClick={() => changeAudio(item)}
                  active={isSelected.value}
                  disabled={isPlaying.value && isSelected.value}
                  color={color.value}
                  key={index}
                  title={item.name}
                  rounded={'lg'}
                  class={'my-2'}
                />
              )
            }
          }}
        />
      </VList>
    )
  }

  return (
    <>
      <VMenu
        transition={'slide-y-transition'}
        offset={10}
        v-slots={{
          activator: (_) => <VBtn {..._.props} color={color.value} variant={'text'} rounded={'lg'}>选择声音变体</VBtn>,
          default: () => <ScrollItems />
        }}
      />
    </>
  )
}
function CircleDot({ items }: { items: AudioItem[] }) {
  return (
    <VAvatar
      color={isPlaying.value ? color.value : 'error'}
      // variant={isPlaying.value ? 'elevated' : 'tonal'}
      size={12}
      class={'mr-2 v-avatar--metronome'}
      style={{
        animationDuration: isPlaying.value ? `1.5s` : `0s`
      }}
    />

    // <VSlideGroup class={'align-center'} showArrows>
    //   {items.map(item => {
    //     const isSelected = computed(() => selectedAudio.value.name === item.name)
    //     return (
    //       <VAvatar
    //         color={isSelected.value ? (isPlaying.value ? color.value : 'error') : 'default'}
    //         variant={isSelected.value ? 'elevated' : 'tonal'}
    //         size={6}
    //         class={'mr-2 v-avatar--metronome'}
    //         style={{
    //           animationDuration: isPlaying.value && isSelected.value ? `1.5s` : `0s`
    //         }}
    //       />
    //     )
    //   })}
    // </VSlideGroup>
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
    <VCardTitle>{{ props.channel.name }}</VCardTitle>
    <VCardSubtitle>{{ selectedAudio.name }}</VCardSubtitle>
    <VCardActions>
      <VBtn
        @click.stop="handlePlay"
        :color="color"
        icon
      >
        <VIcon>
          {{ isPlaying ? mdiPause : mdiPlay }}
        </VIcon>
      </VBtn>
      <VSpacer />
      <VContainer>
        <VSlider
          v-model="volume"
          :color="color"
          hide-spin-buttons
          hide-details
        />
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
