<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list two-line subheader>
          <v-subheader inset>Audios</v-subheader>

          <v-list-tile v-for="item in audioList" :key="item.url" avatar @click>
            <AudioParser v-bind:item="item"/>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.LastModified }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <a :href="item.url">
                <v-btn flat icon color="indigo">
                  <v-icon>cloud_download</v-icon>
                </v-btn>
              </a>
            </v-list-tile-action>

            <v-list-tile-action>
              <v-btn @click="showDialog(item)" flat icon color="indigo">
                <v-icon>delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
      <!-- DIALOG -->
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Desea eliminar este elemento?</v-card-title>
          <v-alert :value="showAlert" type="success">El elemento se ha eliminado correctamente</v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>

            <div v-if="showAlert">
              <v-btn color="green darken-1" flat="flat" @click="dialog = false">Cerrar</v-btn>
            </div>
            <div v-else>
              <v-btn color="green darken-1" flat="flat" @click="dialog = false">NO</v-btn>
              <v-btn
                color="green darken-1"
                flat="flat"
                @click="deleteObject(currentObject)"
              >ELIMINAR</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- // DIALOG -->
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AwsWrapper } from "./AwsWrapper";
// import AudioParser from "./AudioParser.vue";
import moment from "moment";


// import * as moment from "moment";

@Component({
  components: {
    AudioParser: () => import("./AudioParser.vue"),
  }
})
export default class HelloWorld extends Vue {
  aws = new AwsWrapper("audios-bucket123");

  allKeys: string[] = [];
  audioList: any[] = [];
  dialog = false;
  showAlert = false;
  currentObject: string = '';

  public showDialog(item: any) {
    this.dialog = true;
    this.showAlert = false;

    this.currentObject = item.objectKey;
  }

  private created() {
    this.getAllKeys();
  }

  private getAllKeys() {
    this.aws.getKeys({ Bucket: 'audios-bucket123' }, this.allKeys).then(() => {
      this.audioList = this.allKeys.map((item: any) => {
        moment.locale();
        const mod = moment(item.LastModified).format('DD MMMM HH:MM');
        return {
          url: 'https://s3.amazonaws.com/audios-bucket123/' + item.Key,
          LastModified: mod,
          objectKey: item.Key,
        };
      });
    });
  }

  private deleteObject(objKey: string) {
    this.aws.deleteObject(objKey).then( (x) => {
      this.showAlert = true;
      this.audioList = this.audioList.filter( (el) => {
        return el.objectKey !== objKey;
      });
    });
  }
}
</script>

<style>
</style>
