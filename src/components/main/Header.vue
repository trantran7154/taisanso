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
              <svg-icon _ngcontent-qxu-c86="" src="assets/svgIcon/menu.svg"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  _ngcontent-qxu-c86=""
                  aria-hidden="true"
                >
                  <g _ngcontent-qxu-c86="">
                    <g _ngcontent-qxu-c86="">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        _ngcontent-qxu-c86=""
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        _ngcontent-qxu-c86=""
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        _ngcontent-qxu-c86=""
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z"
                        stroke="#130F26"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        _ngcontent-qxu-c86=""
                      ></path>
                    </g>
                  </g>
                </svg>
              </svg-icon>
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
            <svg-icon _ngcontent-qxu-c83="" src="assets/svgIcon/lightmood.svg"
              ><svg
                class="lighticon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                _ngcontent-qxu-c83=""
                aria-hidden="true"
              >
                <g _ngcontent-qxu-c83="">
                  <g _ngcontent-qxu-c83="">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.1377 13.7902C19.2217 14.8742 16.3477 21.0542 10.6517 21.0542C6.39771 21.0542 2.94971 17.6062 2.94971 13.3532C2.94971 8.05317 8.17871 4.66317 9.67771 6.16217C10.5407 7.02517 9.56871 11.0862 11.1167 12.6352C12.6647 14.1842 17.0537 12.7062 18.1377 13.7902Z"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      _ngcontent-qxu-c83=""
                    ></path>
                  </g>
                </g></svg
            ></svg-icon>
          </v-btn>

          <v-badge bordered color="primary" content="4" overlap>
            <v-btn depressed fab small text>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                _ngcontent-qxu-c79=""
                aria-hidden="true"
              >
                <g _ngcontent-qxu-c79="">
                  <g _ngcontent-qxu-c79="">
                    <path
                      d="M5.52377 7C9.41427 5.74386 13.9724 5.45573 16 5.5C18.0276 5.54427 18.8831 6.2663 19.5 7.5C20.5 9.5 20.289 14.4881 18.5 16.0871C16.712 17.6861 9.33015 17.8381 6.87015 16.0871C4.27115 14.2361 5.629 9.192 5.544 5.743C5.595 3.813 3.5 3.5 3.5 3.5"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      _ngcontent-qxu-c79=""
                    ></path>
                    <path
                      d="M13 10.5H15.773"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      _ngcontent-qxu-c79=""
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.26399 20.1274C7.56399 20.1274 7.80799 20.3714 7.80799 20.6714C7.80799 20.9724 7.56399 21.2164 7.26399 21.2164C6.96299 21.2164 6.71899 20.9724 6.71899 20.6714C6.71899 20.3714 6.96299 20.1274 7.26399 20.1274Z"
                      fill="#130F26"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      _ngcontent-qxu-c79=""
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5954 20.1274C17.8964 20.1274 18.1404 20.3714 18.1404 20.6714C18.1404 20.9724 17.8964 21.2164 17.5954 21.2164C17.2954 21.2164 17.0514 20.9724 17.0514 20.6714C17.0514 20.3714 17.2954 20.1274 17.5954 20.1274Z"
                      fill="#130F26"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      _ngcontent-qxu-c79=""
                    ></path>
                  </g>
                </g>
              </svg>
            </v-btn>
          </v-badge>

          <v-btn depressed fab small text>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              _ngcontent-qxu-c78=""
              aria-hidden="true"
            >
              <g _ngcontent-qxu-c78="">
                <g _ngcontent-qxu-c78="">
                  <path
                    d="M8.54248 9.21777H15.3975"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c78=""
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9702 2.5C5.58324 2.5 4.50424 3.432 4.50424 10.929C4.50424 19.322 4.34724 21.5 5.94324 21.5C7.53824 21.5 10.1432 17.816 11.9702 17.816C13.7972 17.816 16.4022 21.5 17.9972 21.5C19.5932 21.5 19.4362 19.322 19.4362 10.929C19.4362 3.432 18.3572 2.5 11.9702 2.5Z"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c78=""
                  ></path>
                </g>
              </g>
            </svg>
          </v-btn>

          <v-badge bordered color="warning" content="4" overlap>
            <v-btn depressed fab small text>
              <svg
                _ngcontent-qxu-c80=""
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g _ngcontent-qxu-c80="">
                  <g _ngcontent-qxu-c80="">
                    <path
                      _ngcontent-qxu-c80=""
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.9961 2.51416C7.56185 2.51416 5.63519 6.5294 5.63519 9.18368C5.63519 11.1675 5.92281 10.5837 4.82471 13.0037C3.48376 16.4523 8.87614 17.8618 11.9961 17.8618C15.1152 17.8618 20.5076 16.4523 19.1676 13.0037C18.0695 10.5837 18.3571 11.1675 18.3571 9.18368C18.3571 6.5294 16.4295 2.51416 11.9961 2.51416Z"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      _ngcontent-qxu-c80=""
                      d="M14.306 20.5122C13.0117 21.9579 10.9927 21.9751 9.68604 20.5122"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </g>
              </svg>
            </v-btn>
          </v-badge>

          <v-btn depressed fab small text>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              _ngcontent-qxu-c81=""
              aria-hidden="true"
            >
              <g _ngcontent-qxu-c81="">
                <g _ngcontent-qxu-c81="">
                  <path
                    d="M2.99609 8.71995C3.56609 5.23995 5.28609 3.51995 8.76609 2.94995"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c81=""
                  ></path>
                  <path
                    d="M8.76616 20.99C5.28616 20.41 3.56616 18.7 2.99616 15.22L2.99516 15.224C2.87416 14.504 2.80516 13.694 2.78516 12.804"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c81=""
                  ></path>
                  <path
                    d="M21.2446 12.804C21.2246 13.694 21.1546 14.504 21.0346 15.224L21.0366 15.22C20.4656 18.7 18.7456 20.41 15.2656 20.99"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c81=""
                  ></path>
                  <path
                    d="M15.2661 2.94995C18.7461 3.51995 20.4661 5.23995 21.0361 8.71995"
                    stroke="#130F26"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    _ngcontent-qxu-c81=""
                  ></path>
                </g>
              </g>
            </svg>
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
                <svg-icon _ngcontent-qxu-c82="" src="assets/svgIcon/account.svg"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    _ngcontent-qxu-c82=""
                    aria-hidden="true"
                  >
                    <g _ngcontent-qxu-c82="">
                      <g _ngcontent-qxu-c82="">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.55851 21.4562C5.88651 21.4562 2.74951 20.9012 2.74951 18.6772C2.74951 16.4532 5.86651 14.4492 9.55851 14.4492C13.2305 14.4492 16.3665 16.4342 16.3665 18.6572C16.3665 20.8802 13.2505 21.4562 9.55851 21.4562Z"
                          stroke="#130F26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          _ngcontent-qxu-c82=""
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.55849 11.2776C11.9685 11.2776 13.9225 9.32356 13.9225 6.91356C13.9225 4.50356 11.9685 2.54956 9.55849 2.54956C7.14849 2.54956 5.19449 4.50356 5.19449 6.91356C5.18549 9.31556 7.12649 11.2696 9.52749 11.2776H9.55849Z"
                          stroke="#130F26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          _ngcontent-qxu-c82=""
                        ></path>
                        <path
                          d="M16.8013 10.0789C18.2043 9.70388 19.2383 8.42488 19.2383 6.90288C19.2393 5.31488 18.1123 3.98888 16.6143 3.68188"
                          stroke="#130F26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          _ngcontent-qxu-c82=""
                        ></path>
                        <path
                          d="M17.4608 13.6536C19.4488 13.6536 21.1468 15.0016 21.1468 16.2046C21.1468 16.9136 20.5618 17.6416 19.6718 17.8506"
                          stroke="#130F26"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          _ngcontent-qxu-c82=""
                        ></path>
                      </g>
                    </g></svg
                ></svg-icon>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img :src="user.user.avatar" alt="John" />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{
                      user.user.userName
                    }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      user.user.email
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