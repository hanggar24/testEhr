<template>
  <transition name="fade">
    <div v-if="isselected">
      <slot />
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    isselected: {
      type: Boolean,
      required: true
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
