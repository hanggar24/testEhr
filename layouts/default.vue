<template>
  <div class="container-fluid h-full px-0">
    <div class="row mx-0 h-full">
      <div class="col-auto px-0">
        <aside class="max-w-xs  h-full bg-primary ">
          <app-aside />
        </aside>
      </div>

      <div class="col">
        <header>
          <app-header />
        </header>

        <main class="mt-4">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import aside from '~/components/layout/Aside'
import header from '~/components/layout/Header'
export default {
  components: {
    AppAside: aside,
    AppHeader: header
  }

}
</script>

<style lang="scss" scoped>
</style>
