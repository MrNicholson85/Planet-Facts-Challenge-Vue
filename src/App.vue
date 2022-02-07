<template>
  <div class="container--full">
    <div class="header">
      <div class="logo">The Planets</div>
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
    </div>
  </div>
  <div class="container">
    <router-view/>
  </div>
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

  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    &--full {
      max-width: 100%;
      width: 100%;
      border-bottom: solid 1px #979797
    }
  }

  #app {
    font-family: 'Antonio', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    .logo {
      text-transform: uppercase;
      color: white;
      font-size:  28px;
    }
    
    #nav {
      padding: 30px 0;
      font-family: 'Spartan', sans-serif;
      text-transform: uppercase;
      display: flex;
      gap: 33px;

      a {
        font-weight: bold;
        color: white;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1px;
        text-decoration: none;

        &.router-link-exact-active {
          color: #b6b6b6;
        }
      }
    }
  }
}
</style>
