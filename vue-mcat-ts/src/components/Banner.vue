<template>
  <div class="text-center">
    <!-- <h1 class="title">
      <strong class="select-none">
        IPSUM 123.123
        <span>"DOLOR"</span>
      </strong>
    </h1>
    <h2 class="subtitle">
      <strong class="select-none">AMET SIT IPSUMS NEQUE AI OGIASED AN AN a</strong>
    </h2>-->
    <h1 class="title">
      <strong class="select-none">FALTAN 500.000 "MIAUS"</strong>
    </h1>
    <h2 class="subtitle">
      <strong class="select-none">PARA QUE HAGAMOS SONAR UN MIAUAZO EN LA ROSADA</strong>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@media only screen and (min-width: 500px) {
  .title {
    margin-top: 0.2%;
    /* TODO: put white */
    color: white;
    font-size: 5.2rem;
    font-weight: 800;
    letter-spacing: -0.3rem;
  }
  .subtitle {
    margin-top: 0.2%;
    color: white;
    /* color: white; */
    font-weight: bold;
    letter-spacing: -0.21875rem;
    font-size: 2.375rem;
  }
}

/* MOBILE */
@media only screen and (max-width: 500px) {
  //TODO: change background to smaller background
  .title {
    margin-top: 0.2%;
    color: white;
    font-size: 5.2rem;
    font-weight: 800;
    letter-spacing: -0.3rem;
    line-height: 89%;
    span {
      margin-top: 0.2%;
      color: white;
      font-size: 88%;
      font-weight: 800;
      letter-spacing: -0.3rem;
      line-height: 89%;
    }
  }
  .subtitle {
    margin-top: -1.8%;
    color: white;
    font-weight: bold;
    letter-spacing: -0.21875rem;
    font-size: 191%;
  }
}

// Mobile with old screen
@media only screen and (max-height: 700px) and (orientation: portrait){
  .title {
    font-size: 306%;
    letter-spacing: -0.3rem;
    line-height: 89%;
    span {
      margin-top: 0.2%;
      color: white;
      font-size: 88%;
      font-weight: 800;
      letter-spacing: -0.3rem;
      line-height: 89%;
    }
  }
  .subtitle {
    margin-top: -1.8%;
    color: white;
    font-weight: bold;
    letter-spacing: -0.21875rem;
    font-size: 191%;
  }
}
</style>
