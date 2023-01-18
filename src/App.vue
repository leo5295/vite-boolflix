<script>
import { store } from './store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader, AppMain
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      axios.get(store.url).then((response) => {
        store.movieList = response.data.results;
      });
    }
  }
}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style lang="scss" >
@use './style/generals.scss'
</style>
