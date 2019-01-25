<template>
  <div class="hello">
    <button @click="getBucketFiles">CLICK</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AwsWrapper from "./AwsWrapper";
const awsWrapper = new AwsWrapper();
export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {},
  methods: {
    getBucketFiles: () => {
      const allKeys: any = [];
      awsWrapper
        .getKeys({ Bucket: "audios-bucket123" }, allKeys)
        .then(() => console.log(allKeys))
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
