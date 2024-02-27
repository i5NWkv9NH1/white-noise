<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
const vuetify = useTheme()
const isDark = useDark({
  attribute: 'data-theme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggle = useToggle(isDark)
const theme = computed(() => isDark.value ? 'dark' : 'light')
watch(theme, () => {
  vuetify.global.name.value = theme.value
}, { immediate: true })

</script>

<template>
  <VMenu
    offset="10"
    transition="slide-y-transition"
  >
    <template #activator="args">
      <VBtn
        v-bind="args.props"
        class="mr-4"
      >
        主题
      </VBtn>
    </template>
    <VList
      density="compact"
      nav
    >
      <VListItem
        v-for="item in ['light', 'dark']"
        :key="item"
        @click="toggle()"
        :disabled="theme === item"
      >
        <VListItemTitle class="text-capitalize">
          {{ item }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>
