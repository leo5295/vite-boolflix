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
  <div class="text-danger">
    {{ series.name}}
</div>

<div class="container d-flex">
    <img :src="posterUrl" alt="Poster" class="poster">
    <img :src="`https://www.countryflagicons.com/FLAT/64/${(series.original_language).toUpperCase()}.png`" alt="flag" class="flag">

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