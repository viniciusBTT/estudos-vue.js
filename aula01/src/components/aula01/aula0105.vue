<template>
    <div>
        <p>bermudas - RS <span>{{preco}}</span></p>
        <br>
        <button @click="total++">adcionar</button>
        <button @click="total--">remover</button>
        <br>
        <span>{{total}}</span>
        <br>
        <p>Total: <span>{{preco*total}}</span></p>
    </div>
</template>

<script>
    export default {
        name: "aula-0105",
        data() {
            return {
                preco: 69,
                total: 0
            }
        },
    }
</script>

<style scoped>

</style>