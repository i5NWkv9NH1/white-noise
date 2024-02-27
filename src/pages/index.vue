<script setup lang="tsx">
import { mdiWidgetsOutline, mdiPlayCircleOutline, mdiPauseCircleOutline, mdiTrashCanOutline } from '@mdi/js'
import { VSlideYTransition } from 'vuetify/components';
import { datas } from '~/data';
const data = computed(() => datas)

const { queue } = useAudio()
function handleQueue() {
  console.log(queue.value)
}
function handlePause() {
  queue.value.forEach(audio => {
    audio.pause()
  })
}
function handlePlay() {
  queue.value.forEach(audio => {
    audio.play()
  })
}
function handleRemove() {
  queue.value.forEach(audio => {
    audio.src = ''
    audio.remove()
  })
}

useSeoMeta({
  title: 'Updating...'
})
</script>

<template>
  <VContainer>
    <h2 class="text-h2 font-weight-bold">白噪音电台</h2>

    <section class="d-flex flex-column gap-8 my-10">
      <h4 class="text-h4 font-weight-bold">预设</h4>
      <!-- TODO: preset card -->
      <VSheet
        class="fill-width  font-weight-bold text-body-1 d-flex align-center justify-center"
        height="40"
        rounded="lg"
      >
        <div>敬请期待...</div>
      </VSheet>

      <div class="actions d-flex gap-2">
        <VBtn @click="handleQueue">
          <VIcon start>{{ mdiWidgetsOutline }}</VIcon>
          <span>Show Audios</span>
        </VBtn>
        <VBtn @click="handlePlay">
          <VIcon start>{{ mdiPlayCircleOutline }}</VIcon>
          <span>Play All</span>
        </VBtn>
        <VBtn @click="handlePause">
          <VIcon start>{{ mdiPauseCircleOutline }}</VIcon>
          <span>Pause All</span>
        </VBtn>
        <VBtn @click="handleRemove">
          <VIcon start>{{ mdiTrashCanOutline }}</VIcon>
          <span>Remove All</span>
        </VBtn>
      </div>
      <!-- <VRow>
        <VCol v-for="preset in presetChannels" :key="preset.name" cols="6" lg="3" md="4" sm="4">
          <PresetCard v-bind="preset" />
        </VCol>
      </VRow> -->
    </section>


    <section
      v-for="scope in data"
      :key="scope.id"
      class="d-flex flex-column gap-8 my-10"
    >
      <LazyClientOnly>
        <h4 class="text-h4 font-weight-bold">{{ scope.name }}</h4>
        <template #fallback>
          <VSkeletonLoader
            type="sentences"
            class="my-10"
          />
        </template>
      </LazyClientOnly>
      <VRow>
        <VCol
          cols="12"
          lg="3"
          md="4"
          sm="6"
          v-for="channel in scope.channels"
          :key="channel.id"
        >
          <!-- <AudioCard :title="children.title" :parent-dir="item.dir" :dir="children.dir" :audios="children.audios" /> -->
          <!-- <LazyClientOnly>
            <AudioCard :scope="scope" :channel="channel" :audios="channel.audios" />
            <template #fallback>
              <VSkeletonLoader type="card" />
            </template>
          </LazyClientOnly> -->
          <LazyClientOnly>
            <VLazy
              min-height="200"
              :options="{ threshold: .5 }"
              :transition="VSlideYTransition"
            >
              <!-- ! optimize -->
              <AudioCard
                :scope="scope"
                :channel="channel"
                :audios="channel.audios"
              />
            </VLazy>
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
