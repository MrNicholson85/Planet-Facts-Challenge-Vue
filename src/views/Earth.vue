<template>
  <div v-if="earthData" class="planet earth">
    <div class="planet__mobileSpecBtns">
      <a @click="overviewToggle" :class="[overviewActive ? 'active' : '']">Overview</a>
      <a @click="internalToggle" :class="[internalActive ? 'active' : '']">Structure</a>
      <a @click="gioToggle" :class="[gioActive ? 'active' : '']">Surface</a>
    </div>
    <div class="planet__info-container">
      <div class="planet__image">
        <img v-if="internalActive" class="planet__image-internal" :src="internalImg" />
        <img v-if="gioActive" class="planet__image-gio" :src="gioImg" />
        <img v-if="overviewActive || gioActive" class="planet__image-overview" :src="planetImg" />
      </div>
      <div class="planet__content">
        <div class="planet__content-grid">
          <div class="planet__content-info">
            <h1>EARTH</h1>
            <div class="planet__content-info" v-if="overviewActive">
              <p>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.</p>
            </div>
            <div class="planet__content-info" v-if="internalActive">
              <p>Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.</p>
            </div>
            <div class="planet__content-info" v-if="gioActive">
              <p>The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.</p>
            </div>
            <div class="planet__source">
              source: <a :href="earthData.geology.source" target="_blank">Wikipedia <img :src="sourceIcon"></a>
            </div>
          </div>
          <div class="planet__specBtns">
            <button @click="overviewToggle" :class="[overviewActive ? 'active' : '']"><span>01</span>Overview</button>
            <button @click="internalToggle" :class="[internalActive ? 'active' : '']"><span>02</span>Internal Structure</button>
            <button @click="gioToggle" :class="[gioActive ? 'active' : '']"><span>03</span>Surface Geology</button>
          </div>
        </div>
      </div>
    </div>
    <div class="planet__specs">
      <div class="planet__specs-card">
        <div>ROTATION TIME</div>
        <span>0.99 DAYS</span>
      </div>
      <div class="planet__specs-card">
        <div>REVOLUTION TIME</div>
        <span>365.26 DAYS</span>
      </div>
      <div class="planet__specs-card">
        <div>radius</div>
        <span>6,371 KM</span>
      </div>
      <div class="planet__specs-card">
        <div>AVERAGE TEMP.</div>
        <span>16°C</span>
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

  .planet__image {
    &-overview,
    &-internal {
      width: 450px;
      height: 450px;
    }

    &-gio {
      width: 163px;
      height: 199px;
      bottom: -60px;
    }
  }

  .planet__mobileSpecBtns {
    .active {
      border-bottom: $earth 4px solid;
    }
  }
}
</style>