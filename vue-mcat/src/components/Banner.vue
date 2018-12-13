<template>
  <div class="text-center">
    <h1 class="title"><strong class="select-none">FALTAN 500.000 "MIAUS"</strong></h1>
    <h2 class="subtitle"><strong class="select-none">PARA QUE HAGAMOS SONAR UN MIAUAZO EN LA ROSADA</strong></h2>
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
    .title {
        margin-top: 3px;
        margin-left: -4px;
        height: 107.83px;
        /* TODO: put white */
        color: white;
        font-size: 5.2rem;
        font-weight: 800;
        letter-spacing: -4.5px;
    }
    .subtitle {
    height: 46px;
    margin-top: -19px;
    margin-left: -8px;
    color: white;
    /* color: white; */
    font-weight: bold;
    letter-spacing: -3.5px;
    font-size: 38px;
    }

</style>
