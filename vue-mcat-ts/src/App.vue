<template>
  <div id="app">
    <div class="container">
      <header class="page-head text-center">
        <img class="gif img-fluid select-none" src="~@/assets/macricat_animation_OK.gif">
      </header>
      <Banner id="banner"/>
      <ButtonSumaTuMiau id="buttonMiau"/>
      <ButtonsFooter/>
    </div>
    <div v-if="preload" class="preload">
      <img class="vertical-center" src="~@/assets/preload.gif">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./components/Banner.vue";
import ButtonSumaTuMiau from "./components/ButtonSumaTuMiau.vue";
import ButtonsFooter from "./components/ButtonsFooter.vue";
import MessageModal from "./components/MessageModal.vue";

import "bootstrap/dist/css/bootstrap.css";

@Component({
  components: {
    Banner,
    ButtonSumaTuMiau,
    ButtonsFooter,
    MessageModal
  }
})
export default class App extends Vue {
  preload = true;

  mounted() {
    setTimeout(() => {
      this.preload = !this.preload;
    }, 2500);
  }
}
</script>

<style lang="less">
@import (css)
  url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800");
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans";
}

.pointer {
  cursor: pointer;
}
.select-none {
  user-select: none;
}
.non-visible {
  visibility: hidden;
}

.btnShadow {
  transition: 0.3s;
  filter: drop-shadow(5px 5px 5px #fff);
}

.preload {
  // opacity: 0.5;
  background: #0f1e49;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;

  animation: signup-response 0.5s 1;
  animation-fill-mode: forwards;
  animation-delay: 2s;

  img {
    width: 100%;
    height: auto;
  }
}

.vertical-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// PC ONLY
@media only screen and (min-width: 500px) {
  body {
    background: url("assets/1200_fondo_gif.gif");
    // background-repeat: no-repeat;
    background-position: top center;
    height: 100%;
  }
  .page-head {
    max-height: 9.625rem;
  }
  .gif {
    max-width: 41%;
    padding-top: 3%;
  }

  @keyframes signup-response {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  // Modal modifications
  // .modal-content {
  //   // background: url(~@/assets/modal/Macricat_grabar.jpg);
  //   background: url(~@/assets/macricat_modal.jpg);
  //   background-repeat: no-repeat;
  //   height: 88vh;
  //   max-height: 700px;
  // }
  // .modal-dialog {
  //   // max-width: 50vw;
  //   max-width: 588px !important;
  // }
  // button.close {
  //   background-color: wheat;
  //   color: green;
  // }
  // .modal-header {
  //   border-bottom: none;
  // }
  // .modal-footer {
  //   border-top: none;
  // }
}

//   MOBILE
@media only screen and (max-width: 500px) {
  body {
    background: url("assets/macri_web_576_fondo.jpg");
    // background-repeat: no-repeat;
    background-position: top center;
    height: 100%;
  }
  .gif {
    max-width: 83%;
    padding-top: 3%;
  }
}
</style>
