<template>
  <v-app v-resize="onResize" style="min-height: 0vh !important">
    <v-main style="padding: 0px !important">
      <v-row no-gutters>
        <v-col cols="5" class="center">
          <router-view class="center-c" :size="size"></router-view>
        </v-col>

        <v-col cols="7">
          <v-sheet color="#131f37" height="100vh" class="center">
            <v-img class="center-c" width="306" height="64"  src="@/assets/logoicon-ts.png" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => ({
    drawer: null,
    size: {
      onsize: 0,
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    },
    windowSize: {
      x: 0,
      y: 0,
    },
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      this.resetOnResize();
      this.size.onsize = this.windowSize.x;
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
};
</script>

<style scoped>
.center {
  position: relative;
}

.center-c {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
