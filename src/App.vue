<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
    <Modal theme="dark" @close="toggleModal">
      <h1>Sign Up For Newsletter</h1>
      <p>This is where the content gose</p>
      <template v-slot:links>
        <a href="">Sign Up Now</a>
        <a href="">More Info</a>
      </template>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
</template>
<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App',
      header: 'Sign Up for our NewsLetter',
      text: 'This is where the content gose',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
