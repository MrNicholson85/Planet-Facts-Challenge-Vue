<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['theme'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>
  .modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
  }

  .backdrop {
    top:  0;
    position: fixed;
    background: rgba(0, 0, 0, 0.664);
    width: 100%;
    height: 100%;
  }

  .modal p {
    font-style: normal;
  }

  .modal.dark {
    background: rgb(42, 0, 97);
    color: rgb(36, 214, 19);
  }

  .modal .actions {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }

  .modal .actions a {
    color: white;
  }
</style>