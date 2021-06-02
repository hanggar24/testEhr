<template>
  <section>
    <nav class="flex items-center justify-center bg-secondary w-full p-4" style="gap:20px">
      <nuxt-link class="nav-item" to="/">
        Tahap 1
      </nuxt-link>
      <nuxt-link class="nav-item" to="/tahap2">
        Tahap 2
      </nuxt-link>
      <nuxt-link class="nav-item" to="/home">
        Tahap 3
      </nuxt-link>
    </nav>
    <main>
      <Nuxt />
    </main>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-item{
    @apply bg-secondary text-2xl font-bold text-blue-900 p-3 hover:text-gray-500 transition-all;
}

.nuxt-link-exact-active{
    @apply text-blue-500;
}
</style>
