<script>

export default {
    props: {
        movie: Object
    }
}
</script>

<template lang="">
  <div>
    {{ movie.title}}
</div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss';
</style>