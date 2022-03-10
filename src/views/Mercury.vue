<template>
  <div v-if="murcuryData" class="planet mercury">
    <div class="planet__image">
      <img v-if="internalActive" class="planet__image-internal" :src="internalImg" />
      <img v-if="gioActive" class="planet__image-gio" :src="gioImg" />
      <img v-if="overviewActive || gioActive" class="planet__image-overview" :src="mercuryImg" />
    </div>
    <div class="planet__content">
        <h1>{{ murcuryData.name }}</h1>
      <div v-if="overviewActive">
        <p>{{ murcuryData.overview.content }}</p>
        <div class="planet__source">
          source: <a href="">Wikipedia <img :src="sourceIcon"></a>
        </div>
      </div>
      <div v-if="internalActive">
        <p>{{ murcuryData.structure.content }}</p>
        <div class="planet__source">
          source: <a href="">Wikipedia <img :src="sourceIcon"></a>
        </div>
      </div>
      <div v-if="gioActive">
        <p>{{ murcuryData.geology.content }}</p>
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
    fetch('http://localhost:3000/Mercury')
      .then(res => res.json())
      .then(data => this.murcuryData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.planet {
  &__image {
    position: relative;

    &-gio {
      position: absolute;
      width: 163px;
      height: 199px;
      bottom: -136px;
    }
  }

  button {
    &:hover {
      background-color: #d8d8d82f;
    }

    &.active {
      background-color: $mercury;
      border-color: $mercury;
    }
  }
}
</style>