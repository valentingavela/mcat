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
      <strong class="select-none">FALTAN {{ getCountDown }} "MIAUS"</strong>
    </h1>
    <h2 class="subtitle">
      <strong class="select-none">PARA QUE HAGAMOS SONAR UN MIAUAZO EN LA ROSADA</strong>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventBus } from "../services/EventBus";
import VueResource from "vue-resource";
Vue.use(VueResource);

@Component
export default class Banner extends Vue {

  countDown = 50000;
  endpoint = "https://3s06oj11m3.execute-api.us-east-1.amazonaws.com/prod/get-count";

  formatNumber(value: number) {
    return value.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "." );
  }

  created() {
    EventBus.$on("file-uploaded", () => {
      this.countDown--;
    });
  }
  mounted() {
    this.fetchCountDown();
  }

  get getCountDown(): string {
    return this.formatNumber(this.countDown);
  }

  fetchCountDown(): void {
    this.$http.get(this.endpoint).then(response => {
      this.countDown = this.countDown - response.data.body;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@fontSizeTitle: 300%;
@letterSpacingTitle: -0.1rem;
@letterSpacingSubtitle: 0.01875rem;
@subtitleLineHeight: 1.8rem;

@media only screen and (min-width: 500px) {
  .title {
    margin-top: 0.2%;
    /* TODO: put white */
    color: white;
    font-size: 5.2rem;
    // font-size: @fontSizeTitle;
    font-weight: 800;
    letter-spacing: @letterSpacingTitle;
  }
  .subtitle {
    margin-top: 0.2%;
    color: white;
    /* color: white; */
    font-weight: bold;
    letter-spacing: @letterSpacingSubtitle;
    font-size: 2.375rem;
    // line-height: @subtitleLineHeight;
  }
}

/* MOBILE */
@media only screen and (max-width: 500px) {
  //TODO: change background to smaller background
  .title {
    margin-top: 0.2%;
    color: white;
    // font-size: 5.2rem;
    font-size: @fontSizeTitle;
    font-weight: 800;
    letter-spacing: @letterSpacingTitle;
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
    letter-spacing: @letterSpacingSubtitle;
    font-size: 191%;
    // line-height: @subtitleLineHeight;
  }
}

// Mobile with old screen
@media only screen and (max-height: 700px) and (orientation: portrait) {
  .title {
    // font-size: 306%;
    font-size: @fontSizeTitle;
    letter-spacing: @letterSpacingTitle;
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
    letter-spacing: @letterSpacingSubtitle;
    font-size: 191%;
    line-height: @subtitleLineHeight;
  }
}
</style>
