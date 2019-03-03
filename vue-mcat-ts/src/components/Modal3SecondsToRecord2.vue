<template id="modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container bordered-box">
          <div class="modal-header-r">
            <button class="semi-transparent-button is-blue pointer" @click="$emit('close')">X</button>
          </div>
          <div class="modal-body text-left select-none">
            <div v-if="recordMode">
              <!-- <h1>ipsum
                <br>3 dolorems
                <br>quia dorlor
              </h1>-->
              <h1>Tenés
                <br>3 segundos
                <br>para grabar
              </h1>
            </div>
            <div class="dont-be-cat" v-else>
              <!-- <h1>consectetur,
                <br>on usil etag
              </h1>-->
              <h1>Compartí,
                <br>no seas gato
              </h1>
            </div>
          </div>
          <div class="modal-footer-r" v-bind:class="{ socialGrp: !recordMode }">
            <div v-if="recordMode">
              <RecordButton class="record-btn"/>
            </div>
            <div v-else>
              <!-- BUTTONS -->
              <div class="row">
                <!-- FACEBOOK -->
                <div class="col">
                  <!-- <div class="circle circle-left"> -->
                  <div class="circle">
                    <svg
                      class="vertical-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <!-- FACEBOOK -->
                <!-- INSTAGRAM -->
                <div class="col">
                  <div class="circle">
                    <svg
                      class="vertical-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.231 0h-18.462c-1.529 0-2.769 1.24-2.769 2.769v18.46c0 1.531 1.24 2.771 2.769 2.771h18.463c1.529 0 2.768-1.24 2.768-2.771v-18.46c0-1.529-1.239-2.769-2.769-2.769zm-9.231 7.385c2.549 0 4.616 2.065 4.616 4.615 0 2.549-2.067 4.616-4.616 4.616s-4.615-2.068-4.615-4.616c0-2.55 2.066-4.615 4.615-4.615zm9 12.693c0 .509-.413.922-.924.922h-16.152c-.511 0-.924-.413-.924-.922v-10.078h1.897c-.088.315-.153.64-.2.971-.05.337-.081.679-.081 1.029 0 4.079 3.306 7.385 7.384 7.385s7.384-3.306 7.384-7.385c0-.35-.031-.692-.081-1.028-.047-.331-.112-.656-.2-.971h1.897v10.077zm0-13.98c0 .509-.413.923-.924.923h-2.174c-.511 0-.923-.414-.923-.923v-2.175c0-.51.412-.923.923-.923h2.174c.511 0 .924.413.924.923v2.175z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <!-- INSTAGRAM -->
                <!-- TWITTER -->
                <div class="col">
                  <!-- <div class="circle circle-right"> -->
                  <div class="circle">
                    <svg
                      class="vertical-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <!-- TWITTER -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RecordButton from "./RecordButton.vue";
import { EventBus } from "./EventBus";

@Component({
  components: {
    RecordButton
  }
})
export default class Modal3SecondsToRecord2 extends Vue {
  recordMode = true;

  created() {
    EventBus.$on("show-thanks", () => {
      this.hideRecordMode();
    });

    this.$on("close", () => {
      this.showRecordMode();
    });
  }

  showRecordMode() {
    this.recordMode = true;
  }

  hideRecordMode() {
    this.recordMode = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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

.socialGrp {
  padding-top: 5vh;
}

@media only screen and (min-width: 500px) {
  svg {
    fill: #151249;
    width: 56%;
    height: auto;
  }
  .circle {
    background: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: auto;
    position: relative;
  }
  .circle-left {
    left: 5.5vw;
  }

  .circle-right {
    right: 5.5vw;
  }

  .modal-container {
    background: url(~@/assets/modal/estrellitas.jpg);
    height: 83%;
    // max-height: 35rem;
    max-height: 45rem;
    width: 45%;
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
    // padding-top: 99px;
    h1 {
      color: white;
      // font-size: 2rem;
      font-size: 443.3%;
      font-weight: 800;
      letter-spacing: -0.2rem;
      // font-size: 5.7vw;
      padding-left: 0.3rem;
      padding-top: 3rem;
      // padding-left: 3.3rem;
      // line-height: 79px;
      // padding-top: 2.2rem;
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

  .record-btn {
    margin-left: auto;
    margin-right: auto;
    max-height: 8rem;
    width: 50%;
    position: relative;
    top: 1.2rem;
    left: 0.1rem;
  }

  .bordered-box {
    border: 20px solid pink;
    border-image-source: url(~@/assets/modal/mcatBorder.png);
    border-image-slice: 92 130;
    border-image-repeat: repeat;
  }
}

// Mobile
@media only screen and (max-width: 500px) and (orientation: portrait) {
  .modal-container {
    background: url(~@/assets/modal/estrellitas.jpg);
    height: 61%;
    width: 95%;
    max-width: 95%;
    margin: 0px auto;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
    border-radius: 8px;
  }

  .bordered-box {
    border: 20px solid pink;
    border-image-source: url(~@/assets/modal/mcatBorder.png);
    border-image-slice: 131 135;
    border-image-repeat: repeat;
  }

  svg {
    fill: #151249;
    width: 56%;
    height: auto;
  }
  // .circle {
  //   background: white;
  //   height: 22vw;
  //   border-radius: 50%;
  //   margin: auto;
  //   position: relative;
  // }
  .dont-be-cat {
    padding-top: 20%;
    font-size: 137%;
  }
  .circle {
    background: white;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    margin: auto;
    position: relative;
  }
  .circle-left {
    left: 5.5vw;
  }

  .circle-right {
    right: 5.5vw;
  }


  .modal-header h3 {
    margin-top: 0;
  }

  .modal-header-r {
    margin-top: 0;
  }

  .modal-body {
    // padding-top: 99px;
    h1 {
      color: white;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.2rem;
      font-size: 246%;
      // padding-left: 10%;
      padding-top: 8%;
      line-height: 108%;
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

  .with-border {
    border: 1px solid #fff;
  }

  .record-btn {
    margin-left: auto;
    margin-right: auto;
    max-height: 8rem;
    // width: 64%;
    width: 57%;
    position: relative;
    top: 1.2rem;
    left: 0.1rem;
  }

  .modal-footer-r {
    padding-bottom: 20%;
  }

  .socialGrp {
    padding-top: 11%;
  }
}

// XS Mobile
@media only screen and (max-width: 400px) and (orientation: portrait) {
  .circle {
    background: white;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin: auto;
    position: relative;
  }
  .dont-be-cat {
    padding-top: 14%;
    font-size: 99%;
  }
}
</style>