<template >
  <b-modal size="m" hide-footer no-close-on-backdrop no-close-on-esc centered v-model="show">
    <div class="header text-left">
      <h1>Tenés</h1>
      <h1>3 segundos</h1>
      <h1>para grabar</h1>
    </div>
    <RecordButton
      v-on:eventForAudioRequest="showModalForAudioRequest()"
      v-on:hideParent="toogleModal()"
      class="record-btn"
    />
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import RecordButton from "./RecordButton.vue";

@Component({
  components: {
    RecordButton
  }
})
export default class Modal3SecondsToRecord extends Vue {
  show = false;
  toogleModal() {
    this.show = !this.show;
  }

  created() {
    this.$parent.$on("toogle", () => {
      this.toogleModal();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  height: 25rem;
  margin-bottom: -1.5rem;
  h1 {
    color: white;
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: -0.2rem;
    padding-left: 3rem;
  }
  h1:first-child {
    padding-top: 6.1rem;
  }
  h1:nth-child(2) {
    margin-top: -1.9rem;
  }
  h1:nth-child(3) {
    margin-top: -1.9rem;
  }
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

// Mobile
@media screen and (max-width: 360px), screen and (max-height: 640px) {
  .header {
    h1:first-child {
      padding-top: 0rem;
    }
  }
}
</style>
