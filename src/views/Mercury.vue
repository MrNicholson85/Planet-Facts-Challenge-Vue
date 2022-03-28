<template>
  <div v-if="mercuryData" class="planet mercury">
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
            <h1>{{ mercuryData.name }}</h1>
            <div class="planet__content-info" v-if="overviewActive">
              <p>{{ mercuryData.overview.content }}</p>
            </div>
            <div class="planet__content-info" v-if="internalActive">
              <p>{{ mercuryData.structure.content }}</p>
            </div>
            <div class="planet__content-info" v-if="gioActive">
              <p>{{ mercuryData.geology.content }}</p>
            </div>
            <div class="planet__source">
              source: <a :href="mercuryData.geology.source" target="_blank">Wikipedia <img :src="sourceIcon"></a>
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
        <span>{{ mercuryData.rotation }}</span>
      </div>
      <div class="planet__specs-card">
        <div>REVOLUTION TIME</div>
        <span>{{ mercuryData.revolution }}</span>
      </div>
      <div class="planet__specs-card">
        <div>radius</div>
        <span>{{ mercuryData.radius }}</span>
      </div>
      <div class="planet__specs-card">
        <div>AVERAGE TEMP.</div>
        <span>{{ mercuryData.temperature }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import internalImg from "../assets/images/planet-mercury-internal.svg"
import gioImg from "../assets/images/geology-mercury.png"
import planetImg from '../assets/images/planet-mercury.svg'
import sourceIcon from '../assets/images/icon-source.svg'

export default {
  data() {
    return {
      mercuryData: null,
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
    fetch('http://localhost:3000/mercury')
      .then(res => res.json())
      .then(data => this.mercuryData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.mercury {
  button {
    &.active {
      background-color: $mercury;
      border-color: $mercury;
    }
  }

  .planet__image {
    &-overview,
    &-internal {
      width: 290px;
      height: 290px;
    }

    &-gio {
      width: 163px;
      height: 199px;
      bottom: -132px;
    }
  }

  .planet__mobileSpecBtns {
    .active {
      border-bottom: $mercury 4px solid;
    }
  }
}
</style>