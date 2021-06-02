<template>
  <div class="flex justify-center">
    <button v-for="modal in modals" :key="modal" class="btn-modal" @click="setModal(modal)">
      {{ modal }}
    </button>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    modals: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    setModal (modal) {
      this.$emit('setModal', modal)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-modal{
    @apply px-4 py-3 text-xl rounded-md shadow-lg mx-4  focus:outline-none bg-gray-50 hover:bg-gray-100 transition-all;
}
</style>
