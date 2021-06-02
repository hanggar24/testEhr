<template>
  <div class="container-fluid px-0 ">
    <app-tab-header class="mb-4" />
    <NuxtChild />
  </div>
</template>

<script>

import tabHeader from '~/components/Tab-Header'
export default {
  components: {
    appTabHeader: tabHeader
  },
  transition: 'opacity'

}
</script>
