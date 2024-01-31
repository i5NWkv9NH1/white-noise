<script setup lang="ts">
</script>

<template>
  <VMenu
    offset="10"
    transition="slide-y-transition"
  >
    <template #activator="args">
      <VAvatar
        v-bind="args.props"
        image="https://gravatar.com/userimage/197992766/0254633cf1a9d628141e01915f9410fb.jpeg?size=999"
        size="36"
        class="mr-4"
      />
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
