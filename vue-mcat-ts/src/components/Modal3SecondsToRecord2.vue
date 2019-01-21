<template id="modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header-r">
            <button class="semi-transparent-button is-blue pointer" @click="$emit('close')">X</button>
          </div>
          <div class="modal-body text-left select-none">
            <div v-if="recordMode">
              <h1>Tenés
                <br>3 segundos
                <br>para grabar
              </h1>
            </div>
            <div v-else>
              <h1>Compartí,
                <br>no seas gato
              </h1>
            </div>
          </div>
          <div class="modal-footer-r">
            <div v-if="recordMode">
              <RecordButton
                v-on:eventForAudioRequest="showModalForAudioRequest()"
                v-on:hideParent="toogleModal()"
                class="record-btn"
              />
            </div>
            <div v-else>TODO: put share logos</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RecordButton from "./RecordButton.vue";

@Component({
  components: {
    RecordButton
  }
})
export default class Modal3SecondsToRecord2 extends Vue {
  @Prop() private msg!: string;
  recordMode = true;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.modal-mask {
  position: fixed;
  z-index: 9000;
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

.modal-container {
  background: url(~@/assets/macricat_modal.jpg);
  // background-repeat: no-repeat;
  height: 42.1vw;
  width: 41.5vw;
  margin: 0px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 8px;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-header-r {
  margin-top: 0;
}

.modal-body {
  padding-top: 99px;
  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.2rem;
    font-size: 5.7vw;
    padding-left: 3.3rem;
    line-height: 79px;
    padding-top: 2.2rem;
  }
}

// .modal-default-button {
//   float: right;
// }
.semi-transparent-button {
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 8px;
  width: 10%;
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

.is-blue {
  background: #1e348e; /* fallback color for old browsers */
  background: rgba(30, 52, 142, 0.5);
}
.is-blue:hover,
.is-blue:focus,
.is-blue:active {
  background: #1e348e; /* fallback color for old browsers */
  background: rgb(30, 52, 142);
  color: #fff;
}

.with-border {
  border: 1px solid #fff;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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

.record-btn {
  margin-left: auto;
  margin-right: auto;
  max-height: 8rem;
  width: 50%;
  position: relative;
  top: 1.2rem;
  left: 0.1rem;
}
</style>