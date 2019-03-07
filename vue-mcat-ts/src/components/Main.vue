<template>
  <div class="container">
    <header class="page-head text-center">
      <img class="gif img-fluid select-none" src="../assets/macricat_animation_OK.gif">
    </header>
    <Banner id="banner"/>
    <ButtonSumaTuMiau id="buttonMiau"/>
    <ButtonsFooter/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "./Banner.vue";
import ButtonSumaTuMiau from "./ButtonSumaTuMiau.vue";
import ButtonsFooter from "./ButtonsFooter.vue";
import MessageModal from "./MessageModal.vue";

import "bootstrap/dist/css/bootstrap.css";

@Component({
  components: {
    Banner,
    ButtonSumaTuMiau,
    ButtonsFooter,
    MessageModal
  }
})
export default class Main extends Vue {
  preload = true;
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

.vertical-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
// PC ONLY
@media only screen and (min-width: 500px) {
  body {
    background: url("../assets/1200_fondo_gif.gif");
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
}

//   MOBILE
@media only screen and (max-width: 500px) {
  body {
    background: url("../assets/macri_web_576_fondo.jpg");
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
