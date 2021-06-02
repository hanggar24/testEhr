<template>
  <section>
    <nav class="tabs flex border-b-4 border-red-500">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="tab-nav w-32"
        :class="{active:tab===selected }"
        @click.prevent="setTab(tab)">
        {{ tab }}
      </button>
    </nav>
    <div class="tab-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    setTab (tab) {
      this.$emit('setTab', tab)
    }
  }

}
</script>

<style lang="scss" scoped>
.tab-nav{
  @apply px-4 py-2 rounded-t-sm border border-gray-300 bg-gray-100 cursor-pointer focus:outline-none focus:text-primary border-b-0;
  &.active{
    @apply bg-red-500 text-white transition-all;
  }
}
.tab-content{
  @apply border border-gray-100 p-5;
  min-height: 100px;
}
</style>
