<template>
  <div id="app">
    <div class="container">
      <header class="page-head text-center">
        <img
          class="gif img-fluid select-none non-visible"
          src="~@/assets/macricat_animation_OK.gif"
        >
      </header>
      <Banner id="banner"/>
      <ButtonSumaTuMiau id="buttonMiau"/>
      <ButtonsFooter/>
      <MessageModal v-show="thanks" v-on:close="hideThanks()" msg="Gracias!" ref="modal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./components/Banner.vue";
import ButtonSumaTuMiau from "./components/ButtonSumaTuMiau.vue";
import ButtonsFooter from "./components/ButtonsFooter.vue";
import MessageModal from "./components/MessageModal.vue";
import { EventBus } from "./components/EventBus";

import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

@Component({
  components: {
    Banner,
    ButtonSumaTuMiau,
    ButtonsFooter,
    MessageModal
  }
})
export default class App extends Vue {
  created() {
    EventBus.$on("show-thanks", () => {
      this.showThanks();
    });
  }
  thanks = false;

  showThanks() {
    this.thanks = true;
  }

  hideThanks() {
    this.thanks = false;
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
#app {
  background: url("assets/1200_fondo_gif.gif");
  // background-repeat: no-repeat;
  background-position: top center;
  // height: 750px;
  height: 100%;
}
.page-head {
  // max-height: 9.625rem;
}
#banner {
  // height: 154px;
  // max-height: 9.625rem;
}
.gif {
  max-width: 41%;
  padding-top: 3%;
}

#buttonMiau {
  // height: 309px;
  // max-height: 309px;
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

/* MOBILE */
@media only screen and (max-width: 700px) {
  //TODO: change background to smaller background
}
</style>
