<template>
  <div v-if="venusData" class="planet mercury">
    <div class="planet__info-container">
      <div class="planet__image">
        <img v-if="internalActive" class="planet__image-internal" :src="internalImg" />
        <img v-if="gioActive" class="planet__image-gio" :src="gioImg" />
        <img v-if="overviewActive || gioActive" class="planet__image-overview" :src="mercuryImg" />
      </div>
      <div class="planet__content">
          <h1>{{ venusData.name }}</h1>
        <div v-if="overviewActive">
          <p>{{ venusData.overview.content }}</p>
          <div class="planet__source">
            source: <a href="">Wikipedia <img :src="sourceIcon"></a>
          </div>
        </div>
        <div v-if="internalActive">
          <p>{{ venusData.structure.content }}</p>
          <div class="planet__source">
            source: <a href="">Wikipedia <img :src="sourceIcon"></a>
          </div>
        </div>
        <div v-if="gioActive">
          <p>{{ venusData.geology.content }}</p>
          <div class="planet__source">
            source: <a href="">Wikipedia <img :src="sourceIcon"></a>
          </div>
        </div>
        <div class="planet__specBtns">
          <button @click="overviewToggle" :class="[overviewActive ? 'active' : '']"><span>01</span>Overview</button>
          <button @click="internalToggle" :class="[internalActive ? 'active' : '']"><span>02</span>Internal Structure</button>
          <button @click="gioToggle" :class="[gioActive ? 'active' : '']"><span>03</span>Surface Geology</button>
        </div>
      </div>
    </div>
    <div class="planet__specs">
      <div class="planet__specs-card">
        <div>ROTATION TIME</div>
        <span>{{ venusData.rotation }}</span>
      </div>
      <div class="planet__specs-card">
        <div>REVOLUTION TIME</div>
        <span>{{ venusData.revolution }}</span>
      </div>
      <div class="planet__specs-card">
        <div>AVERAGE TEMP.</div>
        <span>{{ venusData.temperature }}</span>
      </div>
      <div class="planet__specs-card">
        <div>ROTATION TIME</div>
        <span>{{ venusData.rotation }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import internalImg from "../assets/images/planet-venus-internal.svg"
import gioImg from "../assets/images/geology-venus.png"
import mercuryImg from '../assets/images/planet-venus.svg'
import sourceIcon from '../assets/images/icon-source.svg'

export default {
  data() {
    return {
      venusData: null,
      internalImg,
      gioImg,
      mercuryImg,
      sourceIcon,
      overviewActive: true,
      internalActive: false,
      gioActive: false,
    }
  },
  methods: {
    overviewToggle() {
      this.overviewActive = true;
      this.internalActive = false;
      this.gioActive = false;
    },
    internalToggle() {
      this.internalActive = true;
      this.overviewActive = false;
      this.gioActive = false;
    },
    gioToggle() {
      this.internalActive = false;
      this.overviewActive = false;
      this.gioActive = true;
    }
  },
  mounted() {
    fetch('http://localhost:3000/Venus')
      .then(res => res.json())
      .then(data => this.venusData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.planet {
  button {
    &.active {
      background-color: $venus;
      border-color: $venus;
    }
  }
}
</style>