<template>
  <b-modal id="mod" size="m" centered v-model="show"></b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ModalC extends Vue {
  created() {
    this.$parent.$on("toogle", () => {
      this.toogleModal();
    });
  }
  show = true;
  toogleModal() {
    this.show = !this.show;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
