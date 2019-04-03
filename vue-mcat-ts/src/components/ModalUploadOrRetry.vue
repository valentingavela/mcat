<template id="modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <h4>Querés subir tu miau?</h4>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button
                :disabled="!buttonEnabled"
                v-bind:class="{ 
                  isBlue: buttonEnabled,
                  isGray: !buttonEnabled
                 }"
                class="semi-transparent-button"
                @click="onUpload()"
              >
                <strong>Subir</strong>
              </button>
              <button
                class="semi-transparent-button isBlue"
                @click="$emit('recordAgain')"
              >Volver a grabar</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ModalUploadOrRetry extends Vue {
  buttonEnabled = true;

  onUpload() {
    this.buttonEnabled = !this.buttonEnabled;
    this.$emit("upload");
  }
}
</script>

<style scoped lang="less">
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.semi-transparent-button {
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 5%;
  width: 46%;
  height: 5rem;
  max-width: 200px;
  background: #fff; /* fallback color for old browsers */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.3s ease-out;
  float: right;
  position: relative;
  z-index: 100;
}
.semi-transparent-button:hover,
.semi-transparent-button:focus,
.semi-transparent-button:active {
  background: #fff;
  color: #000;
  transition: all 0.5s ease-in;
}
.semi-transparent:focus {
  outline: none;
}

.isGray {
  background: grey;
}

.isBlue {
  background: #1e348e; /* fallback color for old browsers */
  background: rgba(30, 52, 142, 0.5);
}
.isBlue:hover,
.isBlue:focus,
.isBlue:active {
  background: #1e348e; /* fallback color for old browsers */
  background: rgb(30, 52, 142);
  color: #fff;
}

// @media only screen and (min-width: 500px) {
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
// }

// @media only screen and (max-width: 500px) {
//   .modal-container {
//     width: 300px;
//     margin: 0px auto;
//     padding: 20px 30px;
//     background-color: #fff;
//     border-radius: 2px;
//     box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
//     transition: all 0.3s ease;
//     font-family: Helvetica, Arial, sans-serif;
//   }

//   .modal-header h3 {
//     margin-top: 0;
//     color: #42b983;
//   }

//   .modal-body {
//     margin: 20px 0;
//   }

//   .modal-default-button {
//     float: right;
//   }
// }
</style>