<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
      <Aula0201/>
    </div>
  </div>
</template>

<script>
import Aula0201 from "./components/aula02/aula0201.vue"

export default {
  name: 'App',
  components: { 
    Aula0201 
  }

    

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
