<script setup lang="ts">
const carousels = ref<string[]>()
const intros = ref({
  title: '找好画师，完成需求，就这么简单！',
  subtitle: `<p>仅需3分钟发布需求，即可收到数十位画师应征。</p><p>仅需3分钟发布需求，即可收到数十位画师应征。</p>`
})
const signActions = ref([
])

// * fetch

// * hook
useSeoMeta({
  title: '米画师美术外包交易平台 - 带给你自由、高效、专业的美术工作体验'
})
</script>

<template>
  <!-- * 背景轮播 + 文字介绍 -->
  <VContainer fluid>Home</VContainer>
</template>
