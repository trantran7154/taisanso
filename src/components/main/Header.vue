<template>
  <div>
    <v-navigation-drawer v-model="drawer" app width="300">

      <v-sheet color="grey lighten-5" height="72" width="100%">
        <center>
          <!-- <img width="150" height="70" src="../uploads/logo_chinh.svg" /> -->
        </center>
      </v-sheet>

      <MenuComponent :color="color" :user="user" />
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      flat
      height="72"
      color="white"
      style="border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important"
    >
      <v-spacer>
        <v-row>
          <v-col cols="3" md="1">
            <v-btn @click="drawer = !drawer" text fab small>
             
            </v-btn>
          </v-col>
          <v-col cols="9" md="9">
            <v-text-field
              v-if="size.onsize > 650"
              class="w-100"
              :color="color.main"
              outlined
              dense
              rounded
              hide-details=""
              placeholder="Search"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-spacer>

      <v-responsive max-width="500">
        <div class="float-end">
          <v-btn depressed fab small text>
            
          </v-btn>

          <v-menu
            v-model="menu"
            open-on-hover
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn depressed fab small text v-bind="attrs" v-on="on">
               
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img :src="user.avatar" alt="John" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{
                      user.userName
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      user.email
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item> </v-list-item>

                <v-list-item> </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false"> Cancel </v-btn>
                <v-btn color="error" text @click="logout()">
                  <v-icon size="15">mdi-logout</v-icon>
                  Log out
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </v-responsive>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuComponent from '@/components/main/Menu.vue'

export default Vue.extend({
  props: ["color", "size", "user"],
  data: () => ({
    menu: false,
    drawer: null as any
  }),
  components: {
    MenuComponent
  },
  methods: {
    logout() {
      localStorage.clear();
      window.location.reload();
    },
  },
});
</script>

<style>
.v-responsive {
  overflow: inherit !important;
}
</style>