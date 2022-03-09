<template>
  <div v-if="murcuryData" class="planet mercury">
    <div class="planet__image">
      <img :src="internalImg" />
      <!-- <img :src="gioImg" /> -->
      <!-- <img :src="mercuryImg" /> -->
    </div>
    <div class="planet__content">
      <h1>{{ murcuryData.name }}</h1>
      <p>{{ murcuryData.overview.content }}</p>
      <div class="planet__source">
        source: <a href="">Wikipedia <img :src="sourceIcon"></a>
      </div>
      <div class="planet__specBtns">
        <button><span>01</span>Overview</button>
        <button><span>02</span>Internal Structure</button>
        <button><span>03</span>Surface Geology</button>
      </div>
    </div>
  </div>
</template>


<script>
import internalImg from "../assets/images/planet-mercury-internal.svg"
import gioImg from "../assets/images/geology-mercury.png"
import mercuryImg from '../assets/images/planet-mercury.svg'
import sourceIcon from '../assets/images/icon-source.svg'

export default {
  data() {
    return {
      murcuryData: null,
      internalImg,
      gioImg,
      mercuryImg,
      sourceIcon
    }
  },
  mounted() {
    fetch('http://localhost:3000/Mercury')
      .then(res => res.json())
      .then(data => this.murcuryData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

  button {
    &:hover {
      background-color: $mercury;
    }
  }
</style>