<template>
  <div v-if="earthData" class="planet earth">
    <div class="planet__info-container">
      <div class="planet__image">
        <img v-if="internalActive" class="planet__image-internal" :src="internalImg" />
        <img v-if="gioActive" class="planet__image-gio" :src="gioImg" />
        <img v-if="overviewActive || gioActive" class="planet__image-overview" :src="planetImg" />
      </div>
      <div class="planet__content">
          <h1>{{ earthData.name }}</h1>
        <div v-if="overviewActive">
          <p>{{ earthData.overview.content }}</p>
        </div>
        <div v-if="internalActive">
          <p>{{ earthData.structure.content }}</p>
        </div>
        <div v-if="gioActive">
          <p>{{ earthData.geology.content }}</p>
        </div>
        <div class="planet__source">
          source: <a :href="earthData.geology.source" target="_blank">Wikipedia <img :src="sourceIcon"></a>
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
        <span>{{ earthData.rotation }}</span>
      </div>
      <div class="planet__specs-card">
        <div>REVOLUTION TIME</div>
        <span>{{ earthData.revolution }}</span>
      </div>
      <div class="planet__specs-card">
        <div>radius</div>
        <span>{{ earthData.radius }}</span>
      </div>
      <div class="planet__specs-card">
        <div>AVERAGE TEMP.</div>
        <span>{{ earthData.temperature }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import internalImg from "../assets/images/planet-earth-internal.svg"
import gioImg from "../assets/images/geology-earth.png"
import planetImg from '../assets/images/planet-earth.svg'
import sourceIcon from '../assets/images/icon-source.svg'

export default {
  data() {
    return {
      earthData: null,
      internalImg,
      gioImg,
      planetImg,
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
    fetch('http://localhost:3000/earth')
      .then(res => res.json())
      .then(data => this.earthData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.earth {
  button {
    &.active {
      background-color: $earth;
      border-color: $earth;
    }
  }
}
</style>