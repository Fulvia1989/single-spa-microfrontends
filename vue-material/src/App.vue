<template>
 <div>
   <div id="nav">
    <!-- <p>{{ singleSpa }}</p> -->
    <router-link :to="{name: 'HomePage'}">Home</router-link> |
    <router-link :to="{name: 'BalmCard'}">Card</router-link> |
    <!-- <router-link :to="{name: 'Jobs'}">Jobs</router-link> -->
   </div>
   <div class="container">

     <router-view></router-view>
   </div>

</div>

</template>

<script>

export default {
  name: 'App',
  props: ['singleSpa'],
  components: {
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
.container{
  padding: 1rem;
}
</style>
