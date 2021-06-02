<template>
  <section name="header">
    <div class="row">
      <div class="col">
        <h3 class="uppercase text-center">
          <b>Pengkajian awal pasien rawat inap</b>
        </h3>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <ul class="flex items-center" style="gap:8px">
          <li class="h-4 w-4 rounded-full border border-black" />
          <li>Autoanamnesis</li>
        </ul>

        <ul class="flex mt-2 items-center" style="gap:8px">
          <li class="h-4 w-4 rounded-full border border-black bg-green" />
          <li>Autoanamnesis</li>
          <li>:</li>
          <li>Tn. Rizal (Suami)</li>
        </ul>
      </div>
      <div class="col">
        <ul class="flex" style="gap:8px">
          <li><b>Tanggal Masuk Bangsal</b></li>
          <li>:</li>
          <li>Senin, 26 Okt 2020</li>
        </ul>
        <ul class="flex mt-2" style="gap:8px">
          <li>Autoanamnesis Oleh</li>
          <li>:</li>
          <li>Tn. Rizal (Suami)</li>
        </ul>
      </div>
      <div class="col-auto">
        <button class="text-4xl bg-secondary rounded-full h-12 w-12" style="margin-top: -15px;">
          <i class="demo-icon icon-print" />
        </button>
      </div>
    </div>
    <div class="row mt-10">
      <div class="col">
        <form @submit.prevent>
          <label for="form1"><b>Keluhan Utama</b> </label>
          <div class="flex" style="gap:8px">
            <textarea
              v-if="isVisible"
              id="form1"
              v-model="form1"
              name=""
              cols="30"
              rows="3"
              class="flex-grow border p-4 border-black rounded-lg" />
            <div v-else class="result flex-grow border p-4 border-black rounded-lg">
              {{ form1 }}
            </div>
            <button class="rounded-full w-10 h-10 bg-green text-2xl flex-grow-0 focus:outline-none" @click="isVisible = !isVisible">
              <i v-if="isVisible" class="demo-icon icon-floppy" />
              <i v-else class="demo-icon icon-pencil" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
      form1: 'hanggar',
      form2: '',
      form3: ''
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
