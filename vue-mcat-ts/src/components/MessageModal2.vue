<template id="modal">
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header-r"></div>
          <div v-html="bodyContent" class="modal-body text-left">
          </div>
          <div class="modal-footer-r">
 
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import RecordButton from "./RecordButton.vue";

@Component({
  components: {
    RecordButton
  }
})
export default class MessageModal2 extends Vue {
  @Prop() private bodyContent!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
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

.modal-container {
  background: url(~@/assets/macricat_modal.jpg);
  background-repeat: no-repeat;
  height: 42.1vw;
  width: 41.5vw;
  margin: 0px auto;
  // padding: 0px 30px;
  // border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  // color: #42b983;
}

 .modal-body {
  padding-top: 99px;
  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -0.2rem;
    font-size: 5.7vw;
    padding-left: 3.3rem;
    line-height: 65px;
    padding-top: 6.8rem;
  }
  h1:first-child {
    // padding-top: 6.1rem;
  }
  h1:nth-child(2) {
    margin-top: -1.9rem;
  }
  h1:nth-child(3) {
    margin-top: -1.9rem;
  }
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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

.record-btn {
  margin-left: auto;
  margin-right: auto;
  max-height: 8rem;
  width: 50%;
  position: relative;
  top: 1.2rem;
  left: 0.1rem;
}
</style>