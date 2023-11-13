<template>
  <v-app v-resize="onResize">
    <Menu />
    <v-main>
      <router-view :size="size" />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Menu from "./components/Menu.vue";

export default Vue.extend({
  name: "App",
  components: {
    Menu,
  },
  data: () => ({
    size: {
      onsize: 0,
      height: 0,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    },
  }),
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.resetOnResize();
      this.size.onsize = this.windowSize.x;
      this.size.height = this.windowSize.y;
      if (this.windowSize.x < 600) {
        this.size.xs = true;
      } else if (this.windowSize.x < 960) {
        this.size.sm = true;
      } else if (this.windowSize.x < 1264) {
        this.size.md = true;
      } else if (this.windowSize.x < 2104) {
        this.size.lg = true;
      } else {
        this.size.xl = true;
      }
    },
    resetOnResize() {
      this.size = {
        onsize: 0,
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
      };
    },
  },
});
</script>

<style>
@import url("https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css");

:root {
  --color-green: #166062;
  --color-yellow: #c9a14a;
}

.v-main {
  font-family: montserrat;
  font-size: 18px;
}

.v-application--wrap {
    min-height: 0vh !important;
}
</style>
