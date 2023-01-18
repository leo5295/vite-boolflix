<script>

export default {
    props: {
        movie: Object
    },
    computed: {
        posterUrl() {
            return 'https://image.tmdb.org/t/p/original' + this.movie.poster_path
        },
        stars() {
            let stars = [];
            for (let i = 0; i < 5; i++) {
                if (i < Math.round(this.movie.vote_average / 2)) {
                    stars.push(i);
                }
            }
            return stars;
        },
        emptyStars() {
            let emptystars = [];
            for (let i = 0; i < 5 - Math.round(this.movie.vote_average / 2); i++) {
                emptystars.push(i);
            }
            return emptystars;
        }

    }
}

</script>

<template lang="">
  <div>
    {{ movie.title}}
</div>
<div>
    {{ movie.vote_average}}
</div>
<div>
    <p class="card-text">Voto: <i v-for="n in stars" class="fa-solid fa-star"></i><i v-for="n in emptyStars" class="fa-regular fa-star"></i></p>
</div>
<div class="container d-flex">
    <img :src="posterUrl" alt="Poster" class="poster">
    <!-- <img :src="`https://www.countryflagicons.com/FLAT/64/${(movie.original_language).toUpperCase()}.png`" alt="flag" class="flag"> -->
    <img :src="movie.original_language == 'en'? `https://www.countryflagicons.com/FLAT/64/GB.png`: `https://www.countryflagicons.com/FLAT/64/${movie.original_language.toUpperCase()}.png`" :alt="movie.original_language" class="flag" />

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