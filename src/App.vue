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
          <router-link :to="{ name: 'Mercury' }" class="mercury">Mercury</router-link>
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

import planetStyles from './assets/scss/planets.scss';
import typography from './assets/scss/typography.scss';
import globalStyles from './assets/scss/global.scss';
import variables from './assets/scss/variables.scss';

export default {
   name: 'App',
   methods: {
     
   },
   data () {
     return {
       planetStyles,
       typography,
       globalStyles,
       variables
     }
   }
 }
</script>
