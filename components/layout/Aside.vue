<template>
  <nav class="nav-menu flex flex-col h-full">
    <nuxt-link to="/home" class="col nav-item text-white">
      <i class=" icon-home" />
      <span>Home</span>
    </nuxt-link>
    <nuxt-link to="/asd" class="col nav-item text-white">
      <i class=" icon-home" />
      <span>Antrian</span>
    </nuxt-link>
    <nuxt-link to="/as" class="col nav-item text-white">
      <i class="demo-icon icon-ambulance" />

      <span>Regis</span>
    </nuxt-link>
    <nuxt-link to="/dsa" class="col nav-item text-white">
      <i class="demo-icon icon-stethoscope" />
      <span>Rajal</span>
    </nuxt-link>
    <nuxt-link to="/ads" class="col nav-item text-white">
      <i class="demo-icon icon-patient" />
      <span>Ranap</span>
    </nuxt-link>
    <nuxt-link to="/21" class="col nav-item text-white">
      <i class="demo-icon icon-bar-chart" />
      <span>REKMED</span>
    </nuxt-link>
    <nuxt-link to="/xx" class="col nav-item text-white">
      <i class="demo-icon icon-desktop" />
      <span>FARMASI</span>
    </nuxt-link>
    <nuxt-link to="/asd" class="col nav-item text-white">
      <i class="demo-icon icon-bar-chart" />
      <span>RADIOLOGI</span>
    </nuxt-link>
    <nuxt-link to="/xx" class="col nav-item text-white">
      <i class="demo-icon icon-desktop" />
      <span>LAB</span>
    </nuxt-link>
    <nuxt-link to="/xx" class="col nav-item text-white">
      <i class="demo-icon icon-desktop" />
      <span>KASIR</span>
    </nuxt-link>
    <nuxt-link to="/z" class="col nav-item text-white">
      <i class="demo-icon icon-desktop" />
      <span>SEKRE</span>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style lang="scss" scoped>
.nav-item{
  @apply flex flex-col justify-center items-center hover:bg-blue-900 px-3 transition-all;
 span{
   @apply text-xs;
 }

 i{
  @apply text-sm xl:text-4xl;
 }
}
.nuxt-link-exact-active{
   i{
     @apply text-yellow;
   }
}

</style>
