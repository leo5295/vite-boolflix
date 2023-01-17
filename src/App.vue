<script>
import { store } from './store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
  }
}

</script>

<template>
  <div>
    <AppHeader />
  </div>
</template>

<style lang="scss" >
@use './style/generals.scss'
</style>
