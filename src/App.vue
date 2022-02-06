<template>
  <div id="nav">
    <router-link to="/">Mercury</router-link>
    <router-link to="/venus">Venus</router-link>
    <router-link to="/earth">Earth</router-link>
    <router-link to="/mars">Mars</router-link>
    <router-link to="/jupiter">Jupiter</router-link>
    <router-link to="/saturn">Staurn</router-link>
    <router-link to="/uranus">Uranus</router-link>
    <router-link to="/neptune">Neptune</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
