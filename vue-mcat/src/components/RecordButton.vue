<template>
  <div>
    <!-- <button @click="onClick">Click!</button> -->
    <img class="" src="~@/assets/RecordButton/Microfono.svg">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
declare var MediaRecorder: any;

@Component
export default class RecordButton extends Vue {
  recorder: any;
  gumStream: any;

  recordVoice() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
      const gumStream = stream;
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e: any) => {
        const audioUrl = URL.createObjectURL(e.data);
        // var preview = document.createElement("audio");
        // preview.controls = true;
        // preview.src = url;
        // document.body.appendChild(preview);
      };
      recorder.start();
    });
  }
}
</script>

<style lang="less" scoped>
button {
  width: 35px;
  height: 35px;
  font-size: 0;
  background-color: red;
  border: 0;
  border-radius: 35px;
  margin: 18px;
  outline: none;
}

// .notRec {
//   background-color: darkred;
// }

// .Rec {
//   animation-name: pulse;
//   animation-duration: 1.5s;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
// }

// @keyframes pulse {
//   0% {
//     box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
//   }
//   65% {
//     box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
//   }
//   90% {
//     box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0);
//   }
// }
</style>
