<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div>
        <AppCard :v-for="(item, index) in store.movieList" :key="index" :movie="item"></AppCard>
    </div>
</template>

<style lang="">
    
</style>