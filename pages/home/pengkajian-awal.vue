<template>
  <div class="row mr-0">
    <div class="col-auto">
      <section class="card rounded-xl flex flex-col bg-secondary p-5 pb-3">
        <b class="uppercase text-primary">RIWAYAT BEROBAT</b>
        <ul class="flex flex-col mt-3">
          <li class="range active">
            <div class="list flex-grow-0" />
            <div class="flex-grow pl-8">
              <div class="circle " />
              <h3>25 OKT 2010</h3>
              <h3>Rwat Inap</h3>
            </div>
          </li>

          <li class="range">
            <div class="list flex-grow-0" />
            <div class="flex-grow pl-8">
              <div class="circle " />
              <h3>25 OKT 2010</h3>
              <h3>Rwat jalan</h3>
            </div>
          </li>
          <li class="range">
            <div class="list flex-grow-0" />
            <div class="flex-grow pl-8">
              <div class="circle " />
              <h3>25 OKT 2010</h3>
              <h3>Rwat jalan</h3>
            </div>
          </li>

          <li class="range">
            <div class="list flex-grow-0" />
            <div class="flex-grow pl-8">
              <div class="circle " />
              <h3>25 OKT 2010</h3>
              <h3>Rwat jalan</h3>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <div class="col bg-primary rounded-md ov-hidden">
      <app-tab />
    </div>
  </div>
</template>

<script>
import appTab from '~/components/tabContent/Tab-Content'
export default {
  components: {
    appTab
  }

}
</script>

<style lang="scss" scoped>

.list{
  @apply bg-gray-400;
  width: 8px;
  height: 100px ;
}

.circle{
  @apply absolute w-10 h-10 bg-primary rounded-full flex items-center justify-center;
  left: -16px;
  &::after{
    content:"";
    @apply bg-white rounded-full w-6 h-6;
  }
}

.range{
  @apply relative  flex items-end;

  &.active{
    h3{
      @apply text-primary font-bold;
    }
    .circle::after{
      @apply bg-yellow;
    }
  }
}

.range:last-child{

  .list{
    @apply flex items-end;

    &::after{
      @apply w-full bg-secondary;
 content: "";
    height: 40px;
    }
  }
}

</style>
