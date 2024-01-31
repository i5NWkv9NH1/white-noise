import { isEmpty } from "lodash-es"
import { v4 as uuid } from "uuid"
import type { AudioItem } from "~/data"

// type PresetChannel = {
//   name: string
//   audios: AudioItem[]
// }
export type PresetChannel = {
  id: string
  name: string
} & {
  // areas: AudioItem | null
  // planes: AudioItem | null
  // coffees: AudioItem | null
  // markets: AudioItem | null
  // coops: AudioItem | null
  // rings: AudioItem | null
  // anthems: AudioItem | null
  [key: string]: any
}
const queue = ref<HTMLAudioElement[]>([])
const presetName = ref('')
const test = ref<AudioItem[]>([])
const presetChannels = ref<PresetChannel[]>([
  {
    id: uuid(),
    name: '默认',
    areas: { id: uuid(), name: '篮球场 2', file: 'basketball-game-2' },
    planes: { id: uuid(), name: '机舱 2', file: 'cabin-2' },
    coffees: { id: uuid(), name: '咖啡机', file: 'coffee-machine-1' },
    markets: { id: uuid(), name: '超市 1', file: 'supermarket-1' },
    coops: null,
    rings: null,
    anthems: null,
  }
])
const currentPreset = computed(() => {
  const preset = computed(() => presetChannels.value.find(preset => preset.name === presetName.value))
  if (!preset.value) {
    console.warn('Not Found by Preset Name')
    console.warn('Use Default Preset')
    return
  }
  return preset.value
})

export function useAudio() {

  function updatePreset(name: string) {
    presetName.value = name
  }

  function addAudio(presetName: string, channelName: string, item: string) {

  }


  function findAudio(item: AudioItem) {

  }

  function update(item: AudioItem) {
    const exist = test.value.findLastIndex(_ => _.file === item.file)
    if (exist) {
      console.warn('already exist audio')
      return
    }
    test.value.push(item)
    console.log(test.value)
  }


  return {
    presetName,
    currentPreset,
    presetChannels,
    test,
    update,
    addAudio,
    queue
  }
}
