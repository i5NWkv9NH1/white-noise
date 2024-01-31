<script setup lang="ts">

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
      <VListItem @click="() => { console.log('1') }">
        <div class="text-caption">
          Light
        </div>
      </VListItem>
    </VList>
  </VMenu>
</template>
