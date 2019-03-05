<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Sharing extends Vue {
  url = "https%3A%2F%2Fwww.macri.cat";
  encodedText = "Sum%C3%A1%20tu%20miau%20para%20que%20hagamos%20un%20%22miauazo%22%20en%20la%20Rosada!%0A";
  encodedWhatsapp = "https://wa.me?text=" + this.encodedText + this.url;
  encodedTwitter = "https://twitter.com/intent/tweet?text=" + this.encodedText + this.url;

  facebookShare() {
    window.open(
      "https://www.facebook.com/sharer/sharer.php?u=" + this.url,
      "facebook-share-dialog",
      "width=626, height=436"
    );
  }
}
</script>
