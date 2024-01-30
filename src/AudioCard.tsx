import type { PropType } from "vue";
import { VAvatar, VBtn, VCard, VCardActions, VCardItem, VCardSubtitle, VCardText, VCardTitle, VContainer, VExpandTransition, VIcon, VList, VListItem, VMenu, VProgressLinear, VSheet, VSlideYTransition, VSlider } from "vuetify/components";
import { ClientOnly } from '#components'
import type { AudioItem } from "~/data";
import { mdiArrowRightDropCircle, mdiCircle, mdiHeart } from '@mdi/js'
import { useTheme } from "vuetify/lib/framework.mjs";

export default defineComponent({
  name: 'AudioCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    dir: {
      type: String,
      required: true
    },
    parentDir: {
      type: String,
      required: true
    },
    audios: {
      type: Array as PropType<AudioItem[]>,
      required: true
    },
    audioType: {
      type: String,
      requried: false,
      default: 'm4a'
    },
    bpsType: {
      type: Number,
      required: false,
      default: 64
    }
  },
  setup(props, _) {
    const selectedAudio = ref<AudioItem>(props.audios[0])
    const file = computed(() => `/sounds/${props.parentDir}/${props.dir}/${selectedAudio.value.file}--${props.bpsType}.${props.audioType}`)
    // const audio = (new Audio(file.value))
    // const audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
    const audio = ref<HTMLAudioElement>()

    const isPlaying = ref(false)
    const volume = ref(100)
    const text = computed<string>(() => isPlaying.value ? '播放中...' : '暂停中...')
    const duration = ref<number>(0)
    const countdown = ref<number>(0)

    const isShowMore = ref<boolean>(false)
    const loadFailed = ref<boolean>(false)


    if (process.client) {
      audio.value = (new Audio(file.value))
    }



    onMounted(() => {
      useTheme().global.name.value = 'light'
      if (!audio.value) return
      audio.value.load()
      audio.value.volume = volume.value / 100
      audio.value.addEventListener('play', () => isPlaying.value = true)
      audio.value.addEventListener('pause', () => isPlaying.value = false)
      audio.value.addEventListener('loadedmetadata', (_) => {
        // * set the duration
        if (!audio.value) return
        duration.value = audio.value.duration
        if (import.meta.hot) {
          // ! paused when hot reload code on development
          import.meta.hot.dispose(() => {
            console.log('hotreload:', 'dispose')
            audio.value?.pause()
            audio.value?.remove()
            console.log(audio.value?.src)
          })
        }
      })
      // ! loop
      audio.value.addEventListener('ended', () => {
        if (!audio.value) return
        audio.value.currentTime = 0
        audio.value.play()
      }, false)
    })


    // * watchers
    watch(volume, (newVolume) => {
      if (!audio.value) return
      audio.value.volume = +((volume.value / 100).toFixed(2))
    })

    // * actions
    function changeAudio(item: AudioItem) {
      if (!audio.value) return
      audio.value.pause()
      selectedAudio.value = item
      audio.value.src = file.value
      audio.value.load()
      audio.value.play()
    }

    function handlePlay() {
      console.log('action::', handlePlay.name)
      if (!audio.value) return
      if (isPlaying.value) {
        audio.value.pause()
      } else {
        audio.value.play()
      }
    }



    function Menu() {
      return (
        <VMenu
          transition={'slide-y-transition'}
          offset={10}
          v-slots={{
            activator: (_) => <VBtn {..._.props} variant={'text'}>列表</VBtn>,
            default: () => <VList density={'compact'} nav>
              {props.audios.map(audio => (
                <VListItem
                  onClick={() => changeAudio(audio)}
                  active={selectedAudio.value === audio}
                >
                  {audio.name}
                </VListItem>
              ))}
            </VList>
          }}
        />
      )
    }

    function Dots() {
      return (
        <>
          {props.audios.map(audio => {
            const isSelected = computed(() => { return selectedAudio.value === audio })
            return (
              <>
                <VAvatar
                  color={isSelected.value ? (isPlaying.value ? 'teal' : 'red') : 'default'}
                  variant={isSelected.value ? 'elevated' : 'tonal'}
                  size={12}
                  class={'mr-2 v-avatar--metronome'}
                  //@ts-ignore
                  style={{
                    animationDuration: isPlaying.value || isSelected.value ? `1.5s` : `0s`
                  }}
                />
              </>
            )
          })}
        </>
      )
    }

    function Control() {
      return (
        <>
          <VBtn
            //@ts-ignore
            onClick={handlePlay}
            block
          >
            {text.value}
          </VBtn>
          <VSlider v-model={volume.value} />
          <Menu />
        </>
      )
    }

    return () => (
      <>
        <VCard
          rounded={'xl'}
          // @ts-ignore
          onClick={withModifiers(() => handlePlay(), [])}
          variant={isPlaying.value ? 'tonal' : 'elevated'}
          hover
        >
          <VCardActions>
            <Dots />
          </VCardActions>

          <div class="d-flex flex-column align-center pa-4">
            <VAvatar size={48}>
              <VIcon size={48}>{mdiHeart}</VIcon>
            </VAvatar>
            <h6 class="text-h6">{props.title}</h6>
            <div class="text-caption">{selectedAudio.value.name}</div>
          </div>
          {/* <VCardTitle>{props.title}</VCardTitle>
          <VCardSubtitle>{selectedAudio.value.name}</VCardSubtitle> */}

          <VCardActions>
            <VBtn
              //@ts-ignore
              onClick={withModifiers(() => { isShowMore.value = !isShowMore.value }, ['stop'])}
            // onClick={() => isShowMore.value = !isShowMore.value}
            >
              更多设置
            </VBtn>
          </VCardActions>
          {isShowMore.value &&
            <VCardItem>
              <Control />
            </VCardItem>
          }
        </VCard>
      </>
    )
  }
})
