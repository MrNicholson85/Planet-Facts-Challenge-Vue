<template>
  <div>
    <div class="container--full">
      <div class="header">
        <div class="logo">The Planets
          <svg class="only-mobile" width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="1">
              <rect width="24" height="3" fill="white"/>
              <rect y="7" width="24" height="3" fill="white"/>
              <rect y="14" width="24" height="3" fill="white"/>
            </g>
          </svg>
        </div>
        <div id="nav" class="nav">
          <router-link :to="{name: 'Mercury'}" class="mercury">Mercury</router-link>
          <router-link :to="{ name: 'Venus' }" class="venus">Venus</router-link>
          <router-link :to="{ name: 'Earth' }" class="earth">Earth</router-link>
          <router-link :to="{ name: 'Mars' }" class="mars">Mars</router-link>
          <router-link :to="{ name: 'Jupiter' }" class="jupiter">Jupiter</router-link>
          <router-link :to="{ name: 'Saturn' }" class="saturn">Saturn</router-link>
          <router-link :to="{ name: 'Uranus' }" class="uranus"> Uranus</router-link>
          <router-link :to="{ name: 'Neptune' }" class="neptune">Neptune</router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'App',
   methods: {
     
   }
 }
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');

/* Using SCSS variables to store breakpoints */
$breakpoint-mobile: 425px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1440px;

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
    max-width: $breakpoint-mobile;
    width: 100%;
    margin: 0 auto;

    @media (min-width: $breakpoint-tablet) {
      max-width: $breakpoint-tablet;
    }

    @media (min-width: $breakpoint-desktop) {
      max-width: $breakpoint-desktop;
    }

    &--full {
      max-width: 100%;
      width: 100%;

      @media (min-width: $breakpoint-tablet) {
        border-bottom: solid 1px #979797;
      }
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
    display: block;
    text-align: left;

    @media (min-width: $breakpoint-tablet) {
      justify-content: space-between;
      align-items: center;
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
    }

    @media (min-width: $breakpoint-desktop) {
      display: flex;
    }

    .logo {
      text-transform: uppercase;
      color: white;
      font-size:  28px;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: #979797 solid 1px;

      @media (min-width: $breakpoint-tablet) {
        padding: 36px 24px 0;
        border: none;
        display: block;
        width: 120px;
        margin: 0 auto;
      }

      @media (min-width: $breakpoint-desktop) {
        display: flex;
        padding: 16px 24px;
        margin: 0;
      }

      .only-mobile{
        display: block;
        cursor: pointer;

        @media (min-width: $breakpoint-tablet) {
          display: none;
        }

        &:hover {
          fill: #979797;
        }
      }
    }
    
    .nav {
      padding: 30px 24px;
      font-family: 'Spartan', sans-serif;
      text-transform: uppercase;
      display: grid;

      @media (min-width: $breakpoint-tablet) {
        display: flex;
        justify-content: space-between;
        gap: 33px;
      }

      a {
        font-weight: bold;
        color: white;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1px;
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: center;

        &::after {
          content: '';
          background-image: url('./assets/icon-chevron.svg');
          height: 10px;
          width: 10px;
          position: absolute;
          right: 0;
          background-repeat: no-repeat;
        }

        &.router-link-exact-active {
          color: #b6b6b6;
        }

        @media (max-width: $breakpoint-mobile) {
          border-bottom: 1px solid #979797;
          padding: 30px 0;

          &::before {
            content: '';
            height: 15px;
            width: 15px;
            border-radius: 50%;
            top: -3px;
            margin-right: 20px;
            position: relative;
          }

          &.mercury {
          &::before {
              content: '';
              background-color: #DEF4FC;
            }
          }

          &.venus {
            &::before {
              content: '';
              background-color: #F7CC7F;
            }
          }

          &.earth {
            &::before {
              content: '';
              background-color: #545BFE;
            }
          }

          &.mars {
            &::before {
              content: '';
              background-color: #FF6A45;
            }
          }

          &.jupiter {
            &::before {
              content: '';
              background-color: #ECAD7A;
            }
          }

          &.saturn {
            &::before {
              content: '';
              background-color: #FCCB6B;
            }
          }

          &.uranus {
            &::before {
              content: '';
              background-color: #65F0D5;
            }
          }

          &.neptune {
            &::before {
              content: '';
              background-color: #497EFA;
            }
          }
        }
      }
    }
  }
}
</style>
