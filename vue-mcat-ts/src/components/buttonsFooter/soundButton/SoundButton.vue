<template>
  <div @click="toogleButton()">
    <svg
      class="sound-btn pointer"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="57.105 0 575.971 549.081"
      enable-background="new 57.105 0 575.971 549.081"
      xml:space="preserve"
    >
      <path
        d="M144.088,386.96h72.8l144.648,101.808c10.121,7.114,24.093,4.676,31.206-5.446c2.659-3.783,4.082-8.297,4.074-12.921V89.6
                                                                        c-0.009-12.371-10.044-22.394-22.415-22.385c-4.605,0.003-9.098,1.425-12.865,4.073L216.72,173.04h-72.8
                                                                        c-12.371,0-22.4,10.029-22.4,22.4l0,0v169.121c0,12.371,10.028,22.4,22.399,22.4C143.976,386.961,144.032,386.961,144.088,386.96z
                                                                        M166.488,217.84h58.24c6.153-0.021,12.025-2.573,16.24-7.056l111.048-78.12v294.672l-111.048-78.12
                                                                        c-4.214-4.482-10.087-7.034-16.24-7.056h-58.24V217.84z"
      ></path>
      <!-- SOUND OFF -->
      <svg
        v-if="!btnStatus"
        class="sound-off"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="100px"
        y="0px"
        viewBox="57.105 0 575.971 549.081"
        enable-background="new 57.105 0 575.971 549.081"
        xml:space="preserve"
      >
        <path
          d="M571.76,200.76c-8.742-8.752-22.926-8.76-31.678-0.018c-0.006,0.006-0.012,0.012-0.018,0.018l-47.545,47.544L445.2,200.76
                                                                                                                            c-8.753-8.752-22.943-8.752-31.696,0c-8.753,8.753-8.753,22.943,0,31.696L460.88,280l-47.544,47.544
                                                                                                                            c-8.753,8.799-8.715,23.027,0.084,31.78c8.799,8.752,23.027,8.715,31.78-0.084l47.544-47.544l47.544,47.544
                                                                                                                            c8.753,8.752,22.943,8.752,31.696,0c8.752-8.753,8.752-22.944,0-31.696L524.216,280l47.544-47.544
                                                                                                                            c8.753-8.743,8.761-22.926,0.018-31.678C571.771,200.771,571.766,200.766,571.76,200.76z"
        ></path>
      </svg>
    </svg>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Howl, Howler } from "howler";
import AwsWrapper from "../../aws_wrapper";
import { EventBus } from "../../../services/EventBus";

@Component
export default class SoundButton extends Vue {
  awsWrapper = new AwsWrapper();
  music: any = {};
  iAudiosList: any[] = [];
  audiosList: any[] = [];
  soundsHandler: Howl[] = [];
  btnStatus = true;

  toogleButton() {
    this.btnStatus = !this.btnStatus;
    if (!this.music) return;
    if (!this.btnStatus) {
      this.stopMusic();
    } else {
      this.playMusic();
    }
  }

  playSound(sound: any, loop = false, ext?): Howl {
    const audio = new Howl({
      src: [sound],
      volume: 1,
      preload: true,
      html5: true,
      loop: loop,
      format: [ext],
      onplay: () => {},
      onend: () => {}
    });
    return audio;
  }

  playMusic() {
    this.btnStatus = true;
    this.playRandomAudio();
    // this.music.volume(0.6);
    // this.music.play();
  }

  stopMusic() {
    this.btnStatus = false;
    this.music.stop();
    this.soundsHandler.forEach(sound => {
      sound.stop();
    });
  }

  fillAudioList(): Promise<any> {
    return this.awsWrapper.getKeys(this.iAudiosList, 3);
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  clearHowler() {
    if (this.soundsHandler.length > 3) {
      this.soundsHandler.forEach(sound => {
        sound.unload();
      });
    }
  }

  playRandomAudio() {
    this.clearHowler();
    const audio = this.getAudioFromList();
    console.log(audio);
    const soundHandler = this.playSound(audio);
    this.soundsHandler.push(soundHandler);

    soundHandler.on("end", () => {
      this.playRandomAudio();
    });

    soundHandler.on("loaderror", () => {
      setTimeout(() => {
        this.playRandomAudio();
      }, 1000);
    });

    soundHandler.play();
  }

  getAudioFromList() {
    this.audiosList = this.audiosList.length
      ? [...this.audiosList]
      : [...this.iAudiosList];
    return this.audiosList.pop();
  }

  created() {
    EventBus.$on("FirstTouch", () => {
      setTimeout(() => {
        this.music = this.playSound("macriMusic.ogg", true);
        this.fillAudioList().then(() => {
          this.playMusic();
        });
      }, 400);
    });

    EventBus.$on("ShowThanks", (audio: any) => {
      this.iAudiosList.unshift(audio);
      this.playMusic();
    });

    EventBus.$on("StopMusic", () => {
      this.stopMusic();
    });
  }
}
</script>


<style lang="less" scoped>
@import "../buttonsFooter.less";
</style>
