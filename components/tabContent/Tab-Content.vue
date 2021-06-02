<template>
  <section class="card-box rounded-xl border-2 border-primary row h-full">
    <div class="col-auto pl-0 overflow-hidden bg-gray-900">
      <ul class="tab flex flex-col  p-4" style="gap:10px">
        <li
          class="tab-nav"
          :class="{active: selectedTab=='appTabContent1'? true: false}"
          @click="selectedTab='appTabContent1'">
          Anamnesis
        </li>
        <li
          class="tab-nav"
          :class="{active: selectedTab=='appTabContent2'? true: false}"
          @click="selectedTab='appTabContent2'">
          Riw Alergi
        </li>
        <li
          class="tab-nav"
          :class="{active: selectedTab=='appTabContent3'? true: false}"
          @click="selectedTab='appTabContent3'">
          Status Nyeri
        </li>
      </ul>
    </div>

    <div class="col">
      <div class="tab-content h-full bg-white rounded-md p-4">
        <transition name="fade">
          <keep-alive>
            <component :is="selectedTab" />
          </keep-alive>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import appTabContent1 from '~/components/tabContent/Tab-Content-1'
import appTabContent2 from '~/components/tabContent/Tab-Content-2'
import appTabContent3 from '~/components/tabContent/Tab-Content-3'
export default {
  components: {
    appTabContent1,
    appTabContent2,
    appTabContent3

  },
  data () {
    return {
      selectedTab: 'appTabContent1'
    }
  }
}
</script>

<style lang="scss" scoped>

.tab-nav{
  @apply bg-white text-gray-400 font-bold rounded-md p-1 text-center cursor-pointer;

  &.active{
    @apply bg-yellow;
  }
}
</style>
