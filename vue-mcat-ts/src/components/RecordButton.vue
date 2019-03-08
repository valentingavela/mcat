<template>
  <div>
    <!-- RECORD BUTTON -->
    <div v-if="mobileDetection">
      <svg
        v-show="showRecBtn"
        class="pointer"
        v-hammer:press="recordAgain"
        v-bind:class="{ Rec: recordingAnimation, disablePointerEvents: recordingAnimation, btnShadow: !recordingAnimation }"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 700 700"
        enable-background="new 0 0 700 700"
        xml:space="preserve"
        sodipodi:docname="Microfono.svg"
        inkscape:version="0.92.3 (2405546, 2018-03-11)"
      >
        <metadata id="metadata3795">
          <rdf:RDF>
            <cc:Work rdf:about>
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <defs id="defs3793"></defs>
        <sodipodi:namedview
          pagecolor="#ffffff"
          borderColor="#666666"
          borderopacity="1"
          objecttolerance="10"
          gridtolerance="10"
          guidetolerance="10"
          inkscape:pageopacity="0"
          inkscape:pageshadow="2"
          inkscape:window-width="1600"
          inkscape:window-height="837"
          id="namedview3791"
          showgrid="false"
          inkscape:zoom="0.47857143"
          inkscape:cx="248.33243"
          inkscape:cy="259.96073"
          inkscape:window-x="-8"
          inkscape:window-y="-8"
          inkscape:window-maximized="1"
          inkscape:current-layer="Capa_1"
        ></sodipodi:namedview>
        <g id="g3788" transform="matrix(1.3772802,0,0,1.3772802,-131.00332,-33.728026)">
          <path
            d="M 350,52.08 C 224,52.08 122.08,154 122.08,280 122.08,406 224,507.92 350,507.92 476,507.92 577.92,405.44 577.92,280 577.92,154.56 476,52.08 350,52.08 Z M 296.8,156.8 c 0,-29.12 23.521,-53.2 53.2,-53.2 29.679,0 53.2,23.52 53.2,53.2 v 152.32 c 0,29.12 -23.521,53.2 -53.2,53.2 -29.679,0 -53.2,-23.521 -53.2,-53.2 z m 133.28,152.88 c 0,40.88 -31.36,74.48 -71.12,78.96 v 49.84 h 62.16 c 5.04,0 8.96,3.92 8.96,8.96 0,5.04 -3.92,8.96 -8.96,8.96 H 278.88 c -5.04,0 -8.96,-3.92 -8.96,-8.96 0,-5.04 3.92,-8.96 8.96,-8.96 h 62.16 v -49.84 c -39.76,-4.48 -71.12,-38.08 -71.12,-78.96 v -76.72 c 0,-5.04 3.92,-8.96 8.96,-8.96 5.04,0 8.96,3.92 8.96,8.96 v 76.16 c 0,34.16 28,62.159 62.16,62.159 34.16,0 62.16,-28 62.16,-62.159 v -76.16 c 0,-5.04 3.92,-8.96 8.96,-8.96 5.04,0 8.96,3.92 8.96,8.96 z"
            id="path3780"
            inkscape:connector-curvature="0"
            style="fill:none"
          ></path>
          <path
            d="M 350,28 C 211.12,28 98,141.12 98,280 98,418.88 211.12,532 350,532 488.88,532 602,418.88 602,280 602,141.12 488.88,28 350,28 Z m 0,479.92 C 224,507.92 122.08,406 122.08,280 122.08,154 224,52.08 350,52.08 476,52.08 577.92,154.56 577.92,280 577.92,405.44 476,507.92 350,507.92 Z"
            id="path3782"
            inkscape:connector-curvature="0"
          ></path>
          <path
            d="m 350,362.32 c 29.12,0 53.2,-23.521 53.2,-53.2 V 156.8 c 0,-29.12 -23.521,-53.2 -53.2,-53.2 -29.679,0 -53.2,23.52 -53.2,53.2 v 152.32 c 0,29.68 24.08,53.2 53.2,53.2 z"
            id="path3784"
            inkscape:connector-curvature="0"
          ></path>
          <path
            d="m 421.12,224 c -5.04,0 -8.96,3.92 -8.96,8.96 v 76.16 c 0,34.16 -28,62.159 -62.16,62.159 -34.16,0 -62.16,-28 -62.16,-62.159 v -76.16 c 0,-5.04 -3.92,-8.96 -8.96,-8.96 -5.04,0 -8.96,3.92 -8.96,8.96 v 76.16 c 0,40.88 31.36,74.479 71.12,78.96 v 49.84 h -62.16 c -5.04,0 -8.96,3.92 -8.96,8.96 0,5.04 3.92,8.96 8.96,8.96 h 141.68 c 5.04,0 8.96,-3.92 8.96,-8.96 0,-5.04 -3.92,-8.96 -8.96,-8.96 h -61.6 v -49.84 c 39.76,-4.48 71.12,-38.08 71.12,-78.96 v -76.16 c 0,-4.48 -3.92,-8.96 -8.96,-8.96 z"
            id="path3786"
            inkscape:connector-curvature="0"
          ></path>
        </g>
      </svg>
    </div>
    <div v-else>
      <svg
        v-show="showRecBtn"
        class="pointer"
        @click="recordAgain"
        v-bind:class="{ Rec: recordingAnimation, disablePointerEvents: recordingAnimation, btnShadow: !recordingAnimation }"
        xmlns:dc="http://purl.org/dc/elements/1.1/"
        xmlns:cc="http://creativecommons.org/ns#"
        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 700 700"
        enable-background="new 0 0 700 700"
        xml:space="preserve"
        sodipodi:docname="Microfono.svg"
        inkscape:version="0.92.3 (2405546, 2018-03-11)"
      >
        <metadata id="metadata3795">
          <rdf:RDF>
            <cc:Work rdf:about>
              <dc:format>image/svg+xml</dc:format>
              <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
            </cc:Work>
          </rdf:RDF>
        </metadata>
        <defs id="defs3793"></defs>
        <sodipodi:namedview
          pagecolor="#ffffff"
          borderColor="#666666"
          borderopacity="1"
          objecttolerance="10"
          gridtolerance="10"
          guidetolerance="10"
          inkscape:pageopacity="0"
          inkscape:pageshadow="2"
          inkscape:window-width="1600"
          inkscape:window-height="837"
          id="namedview3791"
          showgrid="false"
          inkscape:zoom="0.47857143"
          inkscape:cx="248.33243"
          inkscape:cy="259.96073"
          inkscape:window-x="-8"
          inkscape:window-y="-8"
          inkscape:window-maximized="1"
          inkscape:current-layer="Capa_1"
        ></sodipodi:namedview>
        <g id="g3788" transform="matrix(1.3772802,0,0,1.3772802,-131.00332,-33.728026)">
          <path
            d="M 350,52.08 C 224,52.08 122.08,154 122.08,280 122.08,406 224,507.92 350,507.92 476,507.92 577.92,405.44 577.92,280 577.92,154.56 476,52.08 350,52.08 Z M 296.8,156.8 c 0,-29.12 23.521,-53.2 53.2,-53.2 29.679,0 53.2,23.52 53.2,53.2 v 152.32 c 0,29.12 -23.521,53.2 -53.2,53.2 -29.679,0 -53.2,-23.521 -53.2,-53.2 z m 133.28,152.88 c 0,40.88 -31.36,74.48 -71.12,78.96 v 49.84 h 62.16 c 5.04,0 8.96,3.92 8.96,8.96 0,5.04 -3.92,8.96 -8.96,8.96 H 278.88 c -5.04,0 -8.96,-3.92 -8.96,-8.96 0,-5.04 3.92,-8.96 8.96,-8.96 h 62.16 v -49.84 c -39.76,-4.48 -71.12,-38.08 -71.12,-78.96 v -76.72 c 0,-5.04 3.92,-8.96 8.96,-8.96 5.04,0 8.96,3.92 8.96,8.96 v 76.16 c 0,34.16 28,62.159 62.16,62.159 34.16,0 62.16,-28 62.16,-62.159 v -76.16 c 0,-5.04 3.92,-8.96 8.96,-8.96 5.04,0 8.96,3.92 8.96,8.96 z"
            id="path3780"
            inkscape:connector-curvature="0"
            style="fill:none"
          ></path>
          <path
            d="M 350,28 C 211.12,28 98,141.12 98,280 98,418.88 211.12,532 350,532 488.88,532 602,418.88 602,280 602,141.12 488.88,28 350,28 Z m 0,479.92 C 224,507.92 122.08,406 122.08,280 122.08,154 224,52.08 350,52.08 476,52.08 577.92,154.56 577.92,280 577.92,405.44 476,507.92 350,507.92 Z"
            id="path3782"
            inkscape:connector-curvature="0"
          ></path>
          <path
            d="m 350,362.32 c 29.12,0 53.2,-23.521 53.2,-53.2 V 156.8 c 0,-29.12 -23.521,-53.2 -53.2,-53.2 -29.679,0 -53.2,23.52 -53.2,53.2 v 152.32 c 0,29.68 24.08,53.2 53.2,53.2 z"
            id="path3784"
            inkscape:connector-curvature="0"
          ></path>
          <path
            d="m 421.12,224 c -5.04,0 -8.96,3.92 -8.96,8.96 v 76.16 c 0,34.16 -28,62.159 -62.16,62.159 -34.16,0 -62.16,-28 -62.16,-62.159 v -76.16 c 0,-5.04 -3.92,-8.96 -8.96,-8.96 -5.04,0 -8.96,3.92 -8.96,8.96 v 76.16 c 0,40.88 31.36,74.479 71.12,78.96 v 49.84 h -62.16 c -5.04,0 -8.96,3.92 -8.96,8.96 0,5.04 3.92,8.96 8.96,8.96 h 141.68 c 5.04,0 8.96,-3.92 8.96,-8.96 0,-5.04 -3.92,-8.96 -8.96,-8.96 h -61.6 v -49.84 c 39.76,-4.48 71.12,-38.08 71.12,-78.96 v -76.16 c 0,-4.48 -3.92,-8.96 -8.96,-8.96 z"
            id="path3786"
            inkscape:connector-curvature="0"
          ></path>
        </g>
      </svg>
    </div>

    <!-- PLAY BUTTON -->
    <svg
      v-show="!showRecBtn"
      class="play-btn"
      v-bind:class="{ Rec: recordingAnimation, disablePointerEvents: recordingAnimation, btnShadow: !recordingAnimation}"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="100px"
      y="100px"
      viewBox="0 0 75 75"
      style="enable-background:new 0 0 60 60;"
      xml:space="preserve"
    >
      <g>
        <path
          d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
        ></path>
        <path
          d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"
        ></path>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
    <ModalUploadOrRetry
      v-if="showModalUoR"
      v-on:recordAgain="recordAgain()"
      v-on:upload="uploadAudio()"
      ref="modal"
    />
    <MessageModal
      v-if="alertForAudioRequest"
      v-on:close="hideAlertModal()"
      v-bind:msg="alertModalMsg"
      ref="modal"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VoiceRecorder from "./VoiceRecorder";
import { take } from "rxjs/operators";
import ModalUploadOrRetry from "./ModalUploadOrRetry.vue";
import AwsWrapper from "./aws_wrapper";
import MessageModal from "./MessageModal.vue";
import { mobileDetection } from "../mobileDetection";
import { EventBus } from "../services/EventBus";

@Component({
  components: {
    ModalUploadOrRetry,
    MessageModal
  }
})
export default class RecordButton extends Vue {
  recordingAnimation: boolean;
  showRecBtn: boolean;
  audioUrl: any;
  showModalUoR: boolean;
  recorder = new VoiceRecorder();
  awsWrapper = new AwsWrapper();
  alertForAudioRequest: boolean;
  mobileDetection: boolean;
  alertModalMsg: string;

  constructor() {
    super();
    this.mobileDetection = mobileDetection();
    this.recordingAnimation = false;
    this.showRecBtn = true;
    this.showModalUoR = false;
    this.alertForAudioRequest = false;
    this.alertModalMsg = "Permití el micrófono para grabar :)";
  }

  created() {
    EventBus.$on("OnButtonMiauClicked", () => {
      const micStatus = localStorage.getItem("microphone") === "allowed";
      if (!micStatus) {
        this.showAlertModal();
      } else {
        this.recorder.requestUserMedia();
      }

      
    });

    this.recorder.getGeneralStatus().subscribe(res => {
      switch (res.result) {
        case "recording": {
          localStorage.setItem("microphone", "allowed");
          this.recordingAnimation = true;
          this.hideAlertModal();
          break;
        }
        case "playing": {
          this.recordingAnimation = false;
          this.showRecBtn = false;
          break;
        }
        case "finish": {
          this.showRecBtn = true;
          this.showModalUploadOrRetry();
          break;
        }
        case "media rejected": {
          this.showRecBtn = true;
          localStorage.setItem("microphone", "denied");
          this.alertModalMsg = "No es posible grabar";
          this.showAlertModal();
          break;
        }
      }
    });
  }

  recordAndPlaySound() {
    this.recorder.playRecording();
    this.recorder.recordVoice(3000);
  }

  firstTimeRecord() {
    this.showAlertModal();
    setTimeout(() => {
      this.recordAndPlaySound();
    }, 1500);
  }

  recordAgain() {
    this.hideModalUploadOrRetry();
    this.recordAndPlaySound();
  }

  uploadAudio() {
    const audio = this.recorder.getAudio();

    this.awsWrapper
      .uploadObject(audio, 'audio/wav')
      .then(res => {
        this.hideModalUploadOrRetry();
        this.$emit("hideParent");
        EventBus.$emit("show-thanks");
        EventBus.$emit("file-uploaded");
      })
      .catch(err => console.log(err));
  }

  showModalUploadOrRetry() {
    this.showModalUoR = true;
  }

  hideModalUploadOrRetry() {
    this.showModalUoR = false;
  }

  showAlertModal() {
    this.alertForAudioRequest = true;
  }

  hideAlertModal() {
    this.alertForAudioRequest = false;
    this.recorder.requestUserMedia();
  }
}
</script>

<style lang="less" scoped>
@keyframes shadow-pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(247, 182, 182, 0.2);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(247, 182, 182, 0.2);
  }
}

svg {
  width: inherit;
  max-width: inherit;
  height: inherit;
  max-height: inherit;
  fill: white;
  &.play-btn {
    padding-left: 1.5rem;
  }
}

.Rec {
  animation: shadow-pulse 1s infinite;
  border-radius: 100%;
  transform-origin: top top;
  fill: red;
}

// .HideEl {
//   display: none;
// }

disablePointerEvents {
  pointer-events: none;
}


@media only screen and (min-width: 500px) {
}

@media only screen and (max-width: 500px) {
}
</style>
