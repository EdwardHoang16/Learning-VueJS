<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="a">Sign up now!</a>
        <a href="">More Info</a>
      </template>
      <h1>Giveaway!</h1>
      <p>Swag for half off!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>

  <teleport to="#modals" v-if="showModal2">
    <Modal @close="toggleModal2">
      <h1>Modal 2!</h1>
      <p>Second Modal in the Making!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal2">Click me!</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: "First Vue App",
      header: "Sign up for the giveaway!",
      text: "Grab some swag for half price!",
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
