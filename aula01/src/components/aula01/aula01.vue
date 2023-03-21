<template>
    <div id="aula-01">
        <h1>amor {{name}}</h1>
        <span>{{faculdade.possui }} {{faculdade.curso}}</span>
    </div>
</template>

<script>
    export default {
        name: "aula-01",
        data() {
            return {
                name: "vinicius",
                faculdade: {
                    possui: "sim",
                    curso: "ads"
                }
            }
        },
    }
</script>

<style scoped>

</style>