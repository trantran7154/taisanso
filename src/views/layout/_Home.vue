<template>
  <v-app v-resize="onResize">
    <Menu :size="size" />
    <v-main style="padding: 0px">
      <router-view :size="size" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Vue from "vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Menu,
    Footer,
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
  --color-1: #72ffff;
  --color-2: #00d7ff;
  --color-3: #590696;
  --color-4: #0096ff;
  --color-5: #5800ff;
}

.v-main {
  font-family: montserrat;
  font-size: 18px;
}

.v-application--wrap {
  min-height: 5vh !important;
}
</style>
