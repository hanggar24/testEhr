<template>
  <div>
    <transition name="opacity">
      <div v-if="isselected" class="modal-backdrop top-0 left-0 fixed h-full w-full" />
    </transition>
    <transition :name="transitionName">
      <div
        v-if="isselected"
        class="modal"
        @click="setSelected">
        <div class="modal-dialog container h-full flex justify-center items-center p-5 md:p-10">
          <div class="modal-content container bg-white rounded-sm p-4 md:p-10 relative" :style="{width: width+'%'}" @click.stop="">
            <button class=" btn-close" @click="setSelected">
              &times;
            </button>
            <div class="modal-body overflow-auto h-full">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isselected: {
      type: Boolean,
      requred: true
    },
    transitionName: {
      type: String,
      default: 'content'
    },
    width: {
      type: String,
      required: true,
      default: '100'
    }

  },
  methods: {
    setSelected () {
      this.$emit('setSelected', '')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-backdrop{
    background-color: rgba(8,14,44,.75);
    z-index: 1020;
}

.modal{
     @apply fixed top-0 left-0 h-full w-full;
    z-index: 1021;
}

 .btn-close{
    @apply text-white rounded-full w-6 h-6 absolute   font-bold text-xl flex justify-center items-center  border-white border-2 focus:outline-none;
    top: -27px;
    right: -20px;
  }
</style>
