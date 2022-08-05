<template>
  <div class="planet earth">
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
            <h1>{{planetInfo['Earth'].name}}</h1>
            <div class="planet__content-info" v-if="overviewActive">
              <p>{{planetInfo['Earth'].overview.content}}</p>
            </div>
            <div class="planet__content-info" v-if="internalActive">
              <p>{{planetInfo['Earth'].structure.content}}</p>
            </div>
            <div class="planet__content-info" v-if="gioActive">
              <p>{{planetInfo['Earth'].geology.content}}</p>
            </div>
            <div class="planet__source">
              source: <a :href="planetInfo['Earth'].source" target="_blank">Wikipedia <img :src="sourceIcon"></a>
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
        <span>{{planetInfo['Earth'].rotation}}</span>
      </div>
      <div class="planet__specs-card">
        <div>REVOLUTION TIME</div>
        <span>{{planetInfo['Earth'].rotation}}</span>
      </div>
      <div class="planet__specs-card">
        <div>radius</div>
        <span>{{planetInfo['Earth'].radius}}</span>
      </div>
      <div class="planet__specs-card">
        <div>AVERAGE TEMP.</div>
        <span>{{planetInfo['Earth'].temperature}}</span>
      </div>
    </div>
  </div>
</template>


<script>
import internalImg from "../assets/images/planet-earth-internal.svg"
import gioImg from "../assets/images/geology-earth.png"
import planetImg from '../assets/images/planet-earth.svg'
import sourceIcon from '../assets/images/icon-source.svg'
import planetInfo from '../assets/data/data.json';

export default {
  data() {
    return {
      internalImg,
      gioImg,
      planetImg,
      sourceIcon,
      overviewActive: true,
      internalActive: false,
      gioActive: false,
      planetInfo,
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
  computed: {
    console: () => console,
    window: () => window,
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