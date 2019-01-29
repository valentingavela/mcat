<template>
  <div class="hello">
    <button @click="getAllKeys">CLICK</button>
    <li v-for="item in audioList">
      <audio controls="controls">Your browser does not support the &lt;audio&gt; tag.
        <source v-bind:src="item">
      </audio>
    </li>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AwsWrapper } from "./AwsWrapper";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  aws = new AwsWrapper();
  allKeys: string[] = [];
  audioList: any[] = [];

  getAllKeys() {
    this.aws.getKeys({ Bucket: "audios-bucket123" }, this.allKeys).then(() => {
      this.audioList = this.allKeys.map(item => {
        return "https://s3.amazonaws.com/audios-bucket123/" + item;
      });
    });
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
