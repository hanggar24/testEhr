<template>
  <nav class="bg-primary flex p-2 rounded-md" style="gap:4px">
    <nuxt-link class="nav-item " to="/home/pengkajian-awal">
      <div class="status alert">
        2
      </div>
      <b> Pengkajian Awal</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/lab">
      <b> Lab/Radiologi</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/cppt">
      <b>CPPT Ranap</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/ic">
      <div class="status danger">
        !
      </div>
      <b>  Informed Concern</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/skrining">
      <b>  Skrining</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/rekonsiliasi">
      <b> Rekonsiliasi Obat</b>
    </nuxt-link>
    <nuxt-link class="nav-item " to="/home/rm">
      <b> Resume Medis</b>
    </nuxt-link>
    <div class="col-auto flex items-center ">
      <div class="icon bg-black border border-white rounded-lg py-1">
        <i class="demo-icon icon-align-justify text-4xl text-white" />
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.nav-item{
    @apply relative bg-gray-400 flex-grow  rounded-sm text-center font-bold  text-primary p-2 hover:bg-gray-300 transition-all ;
}
.status{
  @apply absolute right-2  rounded-full text-2xl flex items-center justify-center h-8 w-8 ;
  top: -15px;
  &.danger{
@apply bg-yellow text-primary;
  }
  &.alert{
@apply bg-red-500 text-white;
  }
}
.nuxt-link-exact-active{
    @apply bg-yellow hover:bg-yellow;
}

.nuxt-link-active{
    @apply bg-yellow hover:bg-yellow;
}
</style>
