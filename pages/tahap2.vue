<template>
  <div>
    <section>
      <h1 class="text-4xl font-bold text-center my-10">
        1. Modal
      </h1>
      <Modals :modals="['Small Modal','Large Modal']" :selected="selected" @setModal="selected = $event">
        <Modal :isselected="selected==='Large Modal'" @setSelected="selected= $event">
          <div class="flex flex-col items-center">
            Large Modal
          </div>
        </Modal>
        <Modal :isselected="selected==='Small Modal'" transition-name="bounce" width="50" @setSelected="selected= $event">
          <div class="flex flex-col items-center">
            Small Modal
          </div>
        </Modal>
      </Modals>
    </section>
    <hr>
    <section class="mt-20">
      <h1 class="text-4xl font-bold text-center my-20">
        2. Custom Table
      </h1>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th>
                NRM
              </th>

              <th>
                Nama
              </th>

              <th>
                Poli
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="data in table" :key="data.nrm">
              <td> {{ data.nrm }} </td>
              <td> {{ data.nama }} </td>
              <td> {{ data.poli }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class=" border border-gray-200" />
          </tfoot>
        </table>
      </div>
    </section>
  </div>
</template>

<script>

import Modal from '~/components/modal/modal'
import Modals from '~/components/modal/modals'
export default {
  components: {

    Modal,
    Modals
  },
  layout: 'menu',
  data () {
    return {
      selected: '',
      isselected: false,
      table: [
        {
          nama: 'Sobri',
          nrm: 123,
          poli: 'bedah umum'
        },
        {
          nama: 'noah',
          nrm: 1234,
          poli: 'gigi'
        },
        {
          nama: 'john',
          nrm: 1232,
          poli: 'anak'
        },
        {
          nama: 'alex',
          nrm: 1231,
          poli: 'bedah umum'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.table{

  @apply w-full;
  thead{
    tr{
        @apply rounded-tl-lg rounded-tr-lg;
    }
    background: lightseagreen;
    th{

@apply font-bold text-xl text-white py-2 uppercase;

&:first-child{
  @apply rounded-tl-lg ;
}
&:last-child{
  @apply rounded-tr-lg;
}

    }
  }

  tbody{
    tr{
      &:nth-child(even){
        @apply bg-gray-50;
      }
  &:hover{
        @apply bg-gray-100 transition-all;
      }
      td{
        @apply text-center py-3 text-lg;
      }
    }
  }
}
.btn{
    @apply rounded-xl px-4 p-3 text-center text-2xl shadow-xl w-full hover:opacity-90;
}
section{

  @apply mb-10;
}

hr{
  @apply mb-10;
}

</style>
