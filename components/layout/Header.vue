<template>
  <section class="grid gap-3">
    <div class="row pt-4">
      <div class="col-auto">
        <button class="border border-gray-400 bg-gray-100 h-full px-1">
          <i class="demo-icon icon-level-up text-2xl hover:text-gray-600 transition all" />
        </button>
      </div>
      <div class="col">
        <form class="relative">
          <i class="demo-icon icon-arrows-cw absolute right-1 top-1 text-xl cursor-pointer hover:text-gray-600 transition all" />
          <input v-model="url" type="text" class="w-full border border-gray-400 bg-gray-100  py-1 px-3 font-bold">
        </form>
      </div>

      <div class="col-3">
        <form class="relative">
          <i class="demo-icon icon-search absolute right-1 top-1 text-xl cursor-pointer hover:text-gray-600 transition all" />
          <input type="text " class="w-full border border-gray-400 bg-gray-100 py-1 px-3 font-bold">
        </form>
      </div>
    </div>

    <div class="row items-stretch">
      <div class="col">
        <div class="card flex flex-col items-center">
          <span class="uppercase text-xs">NAMA (USIA)</span>
          <h3 class="text-field">
            <i class="demo-icon icon-female text-2xl" />     <span> NY. MARIANA (23)</span>
          </h3>
        </div>
      </div>

      <div class="col-2">
        <div class="card flex flex-col items-center">
          <span class="uppercase text-xs">tanggal lahir</span>
          <h3 class="text-field">
            13 JAN 1997
          </h3>
        </div>
      </div>

      <div class="col-2">
        <div class="card flex flex-col items-center">
          <span class="uppercase text-xs">nomor rekam medis</span>
          <h3 class="text-field">
            001234567
          </h3>
        </div>
      </div>

      <div class="col">
        <div class="card flex flex-col items-center">
          <span class="uppercase text-xs">dpjp</span>
          <h3 class="text-field">
            dr. Febri Bahari, SpPD, KGEH
          </h3>
        </div>
      </div>
      <div class="col">
        <div class="card-last flex flex-col items-center bg-blue-300">
          <span class="uppercase text-xs">anda masuk sebagai</span>
          <h3 class="text-field">
            dr.Dany Petra, SpPD
          </h3>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="grid grid-cols-2 gap-2">
          <div class="card flex flex-col">
            <span class="uppercase text-xs ">KELUHAN UTAMA</span>
            <h3 class="text-xl">
              <b>KU:</b> Muntah Bercak darah sejak 1 hari yang lalu
            </h3>
          </div>
          <div class="card flex flex-col">
            <span class="uppercase text-xs">DIAGNOSIS PRIMER DAN SEKUNDER</span>
            <h3 class="text-xl">
              <b> DP :</b> Esopghal varices with bleeding
            </h3>
          </div>

          <div class="card-xl row-start-1 row-end-3 col-start-2 rounded-xl bg-secondary px-5 py-4">
            <div class="row mb-3">
              <div class="col-4">
                <div class="flex items-center">
                  <u class="uppercase mr-3 font-bold">tanda-tanda vital</u>
                  <div class="icon bg-black border border-white rounded-md ">
                    <i class="demo-icon icon-align-justify text-2xl text-white" />
                  </div>
                </div>
              </div>
              <div class="col-auto">
                <b class="bg-gray-300 px-3 rounded-md">h+3</b>
              </div>
              <div class="col">
                <div class="bg-gray-100 flex justify-center rounded-sm">
                  <span>  Last Update : </span>   <u><b class="uppercase"> Selasa, 27 OKT 2020, 06.30 WIB</b></u>
                </div>
              </div>
            </div>
            <div class="row no-gutters items-stretch">
              <div class="col px-1">
                <div class="badge bg-green">
                  <span class="uppercase">Kesadaran</span><b>compos</b><b>mentis</b>
                </div>
              </div>
              <div class="col  px-1">
                <div class="badge bg-green">
                  <span class="uppercase">Tekanan Darah</span><b>110/70</b><b>mmhg</b>
                </div>
              </div>
              <div class="col  px-1">
                <div class="badge bg-red-500">
                  <span class="uppercase">laju naik</span><b>120</b><b>kali/menit</b>
                </div>
              </div>
              <div class="col  px-1">
                <div class="badge bg-yellow ">
                  <span class="uppercase">Laju Napas</span><b>20</b><b>kali/menit</b>
                </div>
              </div>
              <div class="col  px-1">
                <div class="badge bg-green">
                  <span class="uppercase">SUHU TUBUH</span><b>37,3</b><b>C</b>
                </div>
              </div>
              <div class="col  px-1">
                <div class="badge  bg-yellow ">
                  <span class="uppercase">EWS</span><b>3</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      url: 'RAWAT JALAN'
    }
  }
}
</script>

<style lang="scss" scoped>
.card,.card-last{
    @apply rounded-sm py-1 px-3 h-full;
}

.card{
  @apply  bg-secondary ;
}
.text-field{
    @apply font-bold text-2xl;
}
.badge{
    @apply flex flex-col rounded-lg items-center text-center h-full;
}
</style>
