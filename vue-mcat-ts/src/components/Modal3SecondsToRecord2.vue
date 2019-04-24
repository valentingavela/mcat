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
              <h1 class="msg-principal"></h1>
              <h1 class="msg-secondary">Tenés 3 segundos.</h1>
              <!-- <h1>Tenés
                <br>3 segundos
                <br>para grabar
              </h1>-->
            </div>
            <div class="dont-be-cat" v-else>
              <h1>
                Compartí,
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
                      @click="facebookShare"
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
                <!-- /FACEBOOK -->
                <!-- WHATSAPP -->
                <div class="col">
                  <a :href="encodedWhatsapp">
                    <div class="circle">
                      <svg
                        class="vertical-center"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        style=" fill:#000000;"
                      >
                        <path
                          d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <!-- /WHATSAPP -->
                <!-- TWITTER -->
                <div class="col">
                  <!-- <div class="circle circle-right"> -->
                  <a :href="encodedTwitter">
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
                  </a>
                </div>
                <!-- /TWITTER -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import Component from "vue-class-component";
import Sharing from "./Sharing.vue";
import RecordButton from "./RecordButton.vue";
import { EventBus } from "../services/EventBus";

@Component({
  components: {
    RecordButton
  }
})
export default class Modal3SecondsToRecord2 extends Sharing {
  recordMode = true;

  created() {
    EventBus.$on("ShowThanks", () => {
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

.msg-principal:after {
  content: "Hacé click presionado para grabar.";
}

@media only screen and (min-width: 500px) {
  .msg-principal:after {
    content: "Mantené presionado para grabar.";
  }

  svg,
  path {
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
    h1 {
      color: white;
      font-size: 443.3%;
      font-weight: 800;
      letter-spacing: -0.2rem;
      padding-left: 0.3rem;
      padding-top: 3rem;
    }
  }

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

  svg,
  path {
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
      font-size: 200%;
      line-height: 90%;
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