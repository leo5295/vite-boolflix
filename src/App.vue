<template>
  <div>
    <AppHeader @search="getMovies" />
    <AppMain :search="search" />
  </div>
</template>

<script>
import { store } from './store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
      search: ''
    }
  },
  components: {
    AppHeader, AppMain
  },
  // created() {
  //   this.getMovies();
  //   this.getSeries();
  // },
  methods: {
    getMovies(query) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f8602937b8588cbfcb2642e2d6ed1338&language=en-US&query=${query}`).then((response) => {
        store.movieList = response.data.results;
      });
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f8602937b8588cbfcb2642e2d6ed1338&language=en-US&query=${query}`).then((response) => {
        store.seriesList = response.data.results;
      });
    },
  }
}
</script>

<style lang="scss" >
@use './style/generals.scss'
</style>