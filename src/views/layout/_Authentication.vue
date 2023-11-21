<template>
  <div class="authentication">
    <v-app id="inspire" v-resize="onResize">

      <v-main style="position: absolute;">
        <v-container class="position-relative h-100" style="z-index: 310 !important">
          <router-view :size="size"></router-view>
        </v-container>
      </v-main>

    </v-app>
  </div>
</template>
    
<script>
export default {
  components: {
    
  },
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
    this.onResize()
  },
  methods: {
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.resetOnResize();
      this.size.onsize = this.windowSize.x;
      if (this.windowSize.x < 600) {
        this.size.xs = true;
      }
      else if (this.windowSize.x < 960) {
        this.size.sm = true;
      }
      else if (this.windowSize.x < 1264) {
        this.size.md = true;
      }
      else if (this.windowSize.x < 2104) {
        this.size.lg = true;
      }
      else {
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
      }
    }
  }
}
</script>
