<template>
  <v-app v-resize="onResize" style="min-height: 0vh !important">
    <v-main style="padding: 0px !important">
      <v-row no-gutters>
        <v-col :cols="size.onsize > 860 ? 5 : 12">
          <v-sheet height="100vh" class="center">
            <router-view :user="user" class="center-c" :size="size"></router-view>
          </v-sheet>
        </v-col>

        <v-col :cols="size.onsize > 860 ? 7 : 12" v-if="size.onsize > 860">
          <v-sheet height="100vh" class="center">
            <div class="hero">
              <div class="hero__title"> <v-img width="306" height="64" src="@/assets/logoicon-ts.png" />
              </div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
              <div class="cube"></div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import AuthApi from "@/api/auth.api";
export default {
  components: {},
  data: () => ({
    user: null,
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
  async created() {
    const user = await AuthApi.GetProfile();

    if (user.status == 200) {
      window.location.href = "/main";
    }
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:700");

.hero {
  background: #7f7fd5;
  background: linear-gradient(to left, #91eae4, #86a8e7, #7f7fd5);
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}

.hero__title {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: cube 12s ease-in forwards infinite;
  animation: cube 12s ease-in forwards infinite;
}

.cube:nth-child(2n) {
  border-color: rgba(255, 255, 255, 0.5);
}

.cube:nth-child(2) {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}

.cube:nth-child(3) {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}

.cube:nth-child(4) {
  -webkit-animation-delay: 6s;
  animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}

.cube:nth-child(5) {
  -webkit-animation-delay: 8s;
  animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}

.cube:nth-child(6) {
  -webkit-animation-delay: 10s;
  animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

@-webkit-keyframes cube {
  0% {
    transform: scale(0) translateY(0) rotate(70deg);
  }

  100% {
    transform: scale(1.3) translateY(-100px) rotate(360deg);
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }

  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

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

.text-b {
  color: #6d7a82 !important;
}
</style>
