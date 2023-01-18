<script>

export default {
    props: {
        movie: Object
    },
    computed: {
        posterUrl() {
            return 'https://image.tmdb.org/t/p/original' + this.movie.poster_path
        }
    }
}
</script>

<template lang="">
  <div>
    {{ movie.title}}
</div>
<div class="container d-flex">
    <img :src="posterUrl" alt="Poster" class="poster">
    <img :src="`https://www.countryflagicons.com/FLAT/64/${(movie.original_language).toUpperCase()}.png`" alt="flag" class="flag">

</div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss';

.poster {
    height: 100px;
}

.flag {
    height: 20px;
}
</style>