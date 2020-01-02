<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header" style="color:">
            <div></div>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              ×
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div class="title">
              FOLLOW US ON WECHAT!
            </div>
            <b-img-lazy :src="require('../assets/wechat-qr.jpeg')" alt="wechat" style="border-radius: 7px;" class="wechat"/>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              OK!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<style>
  .modal-backdrop {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }

  .modal {
    position: static;
    background: white;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    max-height: 500px;
    max-width: 70%;
    border-radius: 5px;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    max-height: 100px;
  }

  .wechat {
    width: 90%;
    height: auto;
    max-height: 250px;
    max-width: 250px;
  }

  .modal-header {
    color: #4AAE9B;
    justify-content: space-between;
    border-bottom: none;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    max-height: 300px;
    padding: 0;
    margin-bottom: 10px;
  }

  .title {
    font-size: 25px;
    color: #be0819;
    font-family: Lato, sans-serif;
    margin-left: auto;
    margin-right: auto;
    display: block;
    font-weight: bold;
  }
  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #be0819;
    background: transparent;
  }

  .btn-green {
    margin-top: 23px;
    width: 30%;
    height: 90%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    color: white;
    background: #be0819;
    border: 1px solid grey;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
  opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }
</style>