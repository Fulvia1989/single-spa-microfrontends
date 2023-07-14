<template>
    <div class="home">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import HelloWorld from './HelloWorld.vue'

  export default {
    name: 'HomePage',
    components: {
        HelloWorld
    }
  }
</script>
<style>
  .blue{
    color: blue;
  }
</style>
  