<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <!-- <span>Vuetify</span> -->
        <span class="font-weight-light">MACRI CAT</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <span class="mr-2">Latest Release</span>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
