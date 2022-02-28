<template>
  <div v-if="murcuryData" class="mercury">
    <div class="mercury__image">
      <img :src="murcuryData[0].images.internal" />
      <img :src="murcuryData[0].images.geology" />
    </div>
    <div class="mercury__content">
      <h1>{{ murcuryData[0].name }}</h1>
      <p>{{ murcuryData[0].overview.content }}</p>
    </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      murcuryData: null
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