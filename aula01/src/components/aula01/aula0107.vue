<template>
    <div>
        <h1>{{titulo}}</h1>
        <!--Se comprou exiba a div -->
        <div v-show="comprou" :style="{background: cor}">
            <p>{{conteudo}}</p>
            <p>{{lado * lado - lado / 100}}</p>

                <!--Short If -->
            <p>{{comprou ? 'Sim ele Comprou' : 'Não comprou, compre aqui'}}</p>
            <input v-model="cor" type="color">
            {{cor}}
        </div>
                <!--Se comprou exiba o link-->
        <a :href="comprou ? href : ''">{{href}}</a>
    </div>
</template>

<script>
    export default {
    name: "aula-0107",
      data() {
        return {           
        
            titulo: "Curso de JavaScript",
            conteudo: "Esse é o conteúdo",
            lado: 5,
            comprou: true,
            href: "https://www.origamid.com",
            cor: "#f7f7f7"
        }
      }  

    }
</script>

<style lang="css" scoped>

</style>