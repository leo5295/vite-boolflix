<script>
export default {
    data() {
        return {
            query: ""
        }
    },
    methods: {
        emitQuery() {
            this.$emit("search", this.query);
        }
    }
};
</script>
<template>
    <div>
        <div class="container-fluid bg-black">
            <div class="row d-flex align-items-center">
                <div class="col">
                    <h1 class="text-danger m-0">BOOLFLIX</h1>
                </div>
                <div class="col d-flex">
                    <input type="text" v-model="query" class="form-control w-50" placeholder="Inserisci film" />
                    <button class="btn btn-danger" @click="emitQuery">Cerca</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-fluid {
    height: 80px;
}
</style>



