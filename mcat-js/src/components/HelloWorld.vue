<template>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      title: 'hola data'
    };
  },
  methods : {
    sayHello: () => {
      this.data.title = 'coco';
      return this.data.title;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
