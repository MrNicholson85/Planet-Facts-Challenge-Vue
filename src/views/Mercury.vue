<template>
  <div v-if="murcuryData" class="mercury">
    <div class="mercury__image">
      <img :src="internalImg" />
      <img :src="gioImg" />
      <img :src="mercuryImg" />
    </div>
    <div class="mercury__content">
      <h1>{{ murcuryData.name }}</h1>
      <p>{{ murcuryData.overview.content }}</p>
    </div>
    </div>
</template>


<script>
import internalImg from "../assets/planet-mercury-internal.svg"
import gioImg from "../assets/geology-mercury.png"
import mercuryImg from '../assets/planet-mercury.svg'

export default {
  data() {
    return {
      murcuryData: null,
      internalImg,
      gioImg,
      mercuryImg

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
  .mercury {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;

    &__image {

    }

    &__content {
      width: 350px;
      text-align: left;
      color: #fff;
    }
  }
</style>