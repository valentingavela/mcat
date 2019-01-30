<template>
  <div>
    <v-btn :disabled="playing" flat icon color="indigo" @click.prevent="playSound(item.url)">
      <v-icon>play_circle_filled</v-icon>
    </v-btn>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { Howl, Howler } from "howler";

@Component
export default class AudioParser extends Vue {
  @Prop() private item!: any;

  playing = false;

  private playSound(sound: any) {
    if (sound) {
      var audio = new Howl({
        src: [sound],
        volume: 1,
        preload: true,
        html5: true,
        onplay: () => {
          this.playing = true;
        },
        onend: () => {
          this.playing = false;
        }
      });
      audio.play();
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
