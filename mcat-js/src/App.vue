<template>
  <div class="container centered app">
    <div class="container col">
      <header>
        <div class="row rojo invisible centered aligner img-container">
          <img class="gif select-none" alt="macricat" src="./assets/macricat_animation_OK.gif">
        </div>
      </header>
      <Banner class="azul row display-table" id="banner"/>
      <ButtonMiau class="verde row" id="buttonMiau"/>
      <ButtonsFooter class="amarillo row" id="buttonsFooter"/>
    </div>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Banner from "./components/Banner.vue";
import ButtonMiau from "./components/ButtonMiau.vue";
import ButtonsFooter from "./components/ButtonsFooter.vue";

export default {
  name: "app",
  components: {
    Banner,
    ButtonMiau,
    ButtonsFooter
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800");
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Open Sans";
}

.app {
  background: url("./assets/1200_fondo_gif.gif");
  background-repeat: no-repeat;
  background-position: top;
}

.app {
  height: 730px;
  max-height: 730px;
  max-width: 1140px;
}

.container.col {
  width: 95%;
}

// HEADER
header {
  max-height: 154px;
  height: 154px;
}

// GIF
img-container {
  width: 41%;
  padding-top: 3%;
}

.gif {
  display: block;
  width: auto;
  height: 154px;
}
//--

// Banner
#banner {
  // height: 154px;
  max-height: 9.625rem;
}
//--

// BUTTON MIAU
#buttonMiau {
  //hacer que se adapte el button
}

// BUTTONS FOOTER
#buttonsFooter {
}

.pointer {
  cursor: pointer;
}

.select-none {
  user-select: none;
}

.invisible {
  visibility: hidden;
}

.container {
  display: flex; /* or inline-flex */
}

.row {
  flex-direction: row;
  //  flex-direction: row | row-reverse | column | column-reverse;
}

.col {
  flex-direction: column;
}

.aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.centered {
  justify-content: center;
  // justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.display-table {
  display: inline-table;
}

.rojo {
  background-color: red;
}

.azul {
  background-color: blue;
}

.verde {
  background-color: green;
}

.amarillo {
  background-color: yellow;
}
</style>
