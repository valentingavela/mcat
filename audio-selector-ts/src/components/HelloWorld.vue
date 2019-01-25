<template>
  <div class="hello">
    <button @click="getAllKeys">CLICK</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AwsWrapper } from "./AwsWrapper";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  aws = new AwsWrapper();
  allKeys: any = [];

  getAllKeys() {
    this.aws
      .getKeys({ Bucket: "audios-bucket123" }, this.allKeys)
      .then(() => console.log(this.allKeys));
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
