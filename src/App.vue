<template>
  <div id="nav">
    <router-link :to="{name: 'Mercury'}">Mercury</router-link>
    <router-link :to="{ name: 'Venus' }">Venus</router-link>
    <router-link :to="{ name: 'Earth' }">Earth</router-link>
    <router-link :to="{ name: 'Mars' }">Mars</router-link>
    <router-link :to="{ name: 'Jupiter' }">Jupiter</router-link>
    <router-link :to="{ name: 'Saturn' }">Saturn</router-link>
    <router-link :to="{ name: 'Uranus' }">Uranus</router-link>
    <router-link :to="{ name: 'Neptune' }">Neptune</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');

body {
  padding: 0;
  margin: 0;
  background-color: #070724;
  background-image: url("./assets/stars-bg.png");
  background-size: cover;
  background-position: fixed;
  font-family: 'Spartan', sans-serif;
  font-size: 14px;
  line-height: 25px;
}
#app {
  font-family: 'Antonio', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
