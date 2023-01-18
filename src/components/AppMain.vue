<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
import AppCardSeries from './AppCardSeries.vue';
export default {
    components: {
        AppCard, AppCardSeries
    },
    data() {
        return {
            store,
        }
    },
    computed: {
        filteredMovies() {
            return store.movieList.filter(movie =>
                movie.title.toLowerCase().includes(this.search.toLowerCase())
            )
        },
        filteredSeries() {
            return store.seriesList.filter(series => {
                return series.name.toLowerCase().includes(this.search.toLowerCase())
            }
            )
        }
    },
    props: {
        search: String
    }
}

</script>

<template lang="">
    <div>
        <AppCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" v-if="filteredMovies.length"></AppCard>
        {{filteredSeries.length}}
        <AppCardSeries v-for="series in filteredSeries" :key="series.id" :series="series" v-if="filteredSeries.length"></AppCardSeries>
    </div>
</template>

<style lang="">
    
</style>