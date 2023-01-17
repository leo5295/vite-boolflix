<script>
import AppSearch from './AppSearch.vue';
export default {
    components: {
        AppSearch,
    }
}
</script>

<template lang="">
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-9">
                    <h1 class="text-danger">BOOLFLIX</h1>
                </div>
            </div>
            <div class="col-3">
                <AppSearch/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {

    height: 100px;
    background-color: black;

}

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>