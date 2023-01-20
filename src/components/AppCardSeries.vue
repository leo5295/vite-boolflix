<script>

export default {
    props: {
        series: Object
    },
    computed: {
        posterUrl() {
            return 'https://image.tmdb.org/t/p/original' + this.series.poster_path
        }
    }
}
</script>

<template lang="">
  <h5 class="text-danger">
    {{ series.name}}
</h5>
<div class="text-white">
    {{ series.vote_average}}
</div>

<div class="container d-flex">
    <img :src="posterUrl" alt="Poster" class="poster">
    <!-- <img :src="`https://www.countryflagicons.com/FLAT/64/${(series.original_language).toUpperCase()}.png`" alt="flag" class="flag"> -->
    <img :src="series.original_language == 'en'? `https://www.countryflagicons.com/FLAT/64/GB.png`: `https://www.countryflagicons.com/FLAT/64/${series.original_language.toUpperCase()}.png`" :alt="series.original_language" class="flag" />

</div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss';

.poster {
    height: 500px;
}

.flag {
    height: 20px;
}
</style>