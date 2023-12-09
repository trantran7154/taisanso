<template>
  <div>
    <v-app id="inspire" style="min-height: 0vh !important" v-if="dialogLoad">
      <v-main style="position: absolute">
        <v-dialog
          v-model="dialogLoad"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card
            style="border-radius: 0px 0px 0px 0px"
            color="transparent"
            class="h-100"
            dark
          >
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="socket">
                <div class="gel center-gel">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c1 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c2 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c3 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c4 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c5 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c6 r1">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>

                <div class="gel c7 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>

                <div class="gel c8 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c9 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c10 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c11 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c12 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c13 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c14 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c15 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c16 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c17 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c18 r2">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c19 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c20 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c21 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c22 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c23 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c24 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c25 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c26 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c28 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c29 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c30 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c31 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c32 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c33 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c34 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c35 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c36 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>
                <div class="gel c37 r3">
                  <div class="hex-brick h1"></div>
                  <div class="hex-brick h2"></div>
                  <div class="hex-brick h3"></div>
                </div>

                <!-- <div class="word" data-word="Loading" style="--word-index:0;font-size: 44px;margin-top: 100%;">
                    <span class="char" data-char="L" style="--char-index:0;">L</span>
                    <span class="char" data-char="o" style="--char-index:1;">o</span>
                    <span class="char" data-char="a" style="--char-index:2;">a</span>
                    <span class="char" data-char="d" style="--char-index:3;">d</span>
                    <span class="char" data-char="i" style="--char-index:4;">i</span>
                    <span class="char" data-char="n" style="--char-index:5;">n</span>
                    <span class="char" data-char="g" style="--char-index:6;">g</span>
                  </div> -->
                <img
                  class="rotate-circle-image"
                  width="100%"
                  src="./assets/logoicon.png"
                />
              </div>
            </div>
          </v-card>
        </v-dialog>
      </v-main>
    </v-app>
    <notifications
      group="notification"
      position="bottom center"
      :closeOnClick="true"
    />
    <router-view :user="user" v-if="!dialogLoad"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data: () => ({
    user: null,
    dialogLoad: true,
    isLoading: true,
  }),
  mounted() {},
  async created() {
    setTimeout(() => {
      this.dialogLoad = false;
    }, 500);
  },
  watch: {
    size() {},
  },
  methods: {},
});
</script>

<style lang="scss" scoped>


:root {
  --color-green: #166062;
  --color-yellow: #c9a14a;
  --color-1: #72ffff;
  --color-2: #00d7ff;
  --color-3: #590696;
  --color-4: #0096ff;
  --color-5: #5800ff;
}

h1 {
  font-size: 5rem;
  font-family: "Paytone One", sans-serif;
}

svg {
  visibility: hidden;
  position: absolute;
}

@keyframes rotateUp {
  0% {
    transform: translate(0, 90%) rotateX(-90deg);
    transform-origin: top center;
  }

  50% {
    transform: translate(0, 0) rotateX(0deg);
    transform-origin: center center;
  }

  100% {
    transform: translate(0, -90%) rotateX(90deg);
    transform-origin: bottom center;
  }
}

.word {
  display: inline-block;
  text-transform: uppercase;
}

.char {
  transform-origin: bottom center;
  display: inline-block;
  position: relative;
  color: transparent;

  &:before,
  &:after {
    content: attr(data-char);
    position: absolute;
    top: 0;
    left: 0;

    background: #182848;
    background: linear-gradient(to bottom, #590696, #182848);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    transform: translate(0, 100%) rotateX(-90deg);
    transform-origin: top center;
    animation: rotateUp 4s infinite linear normal;
  }

  &:before {
    animation-delay: calc(var(--char-index) * 0.285s);
  }

  &:after {
    animation-delay: calc(calc(var(--char-index) * 0.285s) + 2s);
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 2.5rem;
  }
}

.vue-notification {
  padding: 10px;
  margin: 30px !important;
  margin: 0 5px 5px;
  font-size: 17px;
  color: black !important;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warn {
    background: white !important;
    border-left-color: #f48a06 !important;
  }

  &.error {
    background: white !important;
    border-left-color: #b82e24 !important;
  }

  &.success {
    background: white !important;
    border-left-color: #42a85f !important;
  }
}

.center {
  height: 200px;
  position: relative;
  border: 3px solid green;
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rotate-circle-image {
  -webkit-animation: spin 3s linear infinite;
  -moz-animation: spin 3s linear infinite;
  animation: spin 3s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    opacity: 0.5;
  }

  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    opacity: 0.9;
  }

  75% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
    opacity: 0.5;
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.socket {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50%;
  margin-top: -100px;
}

.hex-brick {
  background: #590696;
  width: 30px;
  height: 17px;
  position: absolute;
  top: 5px;
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}

.h2 {
  transform: rotate(60deg);
  -webkit-transform: rotate(60deg);
}

.h3 {
  transform: rotate(-60deg);
  -webkit-transform: rotate(-60deg);
}

.gel {
  height: 30px;
  width: 30px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  position: absolute;
  top: 50%;
  left: 50%;
}

.center-gel {
  margin-left: -15px;
  margin-top: -15px;

  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  -webkit-animation-name: pulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}

.c1 {
  margin-left: -47px;
  margin-top: -15px;
}

.c2 {
  margin-left: -31px;
  margin-top: -43px;
}

.c3 {
  margin-left: 1px;
  margin-top: -43px;
}

.c4 {
  margin-left: 17px;
  margin-top: -15px;
}

.c5 {
  margin-left: -31px;
  margin-top: 13px;
}

.c6 {
  margin-left: 1px;
  margin-top: 13px;
}

.c7 {
  margin-left: -63px;
  margin-top: -43px;
}

.c8 {
  margin-left: 33px;
  margin-top: -43px;
}

.c9 {
  margin-left: -15px;
  margin-top: 41px;
}

.c10 {
  margin-left: -63px;
  margin-top: 13px;
}

.c11 {
  margin-left: 33px;
  margin-top: 13px;
}

.c12 {
  margin-left: -15px;
  margin-top: -71px;
}

.c13 {
  margin-left: -47px;
  margin-top: -71px;
}

.c14 {
  margin-left: 17px;
  margin-top: -71px;
}

.c15 {
  margin-left: -47px;
  margin-top: 41px;
}

.c16 {
  margin-left: 17px;
  margin-top: 41px;
}

.c17 {
  margin-left: -79px;
  margin-top: -15px;
}

.c18 {
  margin-left: 49px;
  margin-top: -15px;
}

.c19 {
  margin-left: -63px;
  margin-top: -99px;
}

.c20 {
  margin-left: 33px;
  margin-top: -99px;
}

.c21 {
  margin-left: 1px;
  margin-top: -99px;
}

.c22 {
  margin-left: -31px;
  margin-top: -99px;
}

.c23 {
  margin-left: -63px;
  margin-top: 69px;
}

.c24 {
  margin-left: 33px;
  margin-top: 69px;
}

.c25 {
  margin-left: 1px;
  margin-top: 69px;
}

.c26 {
  margin-left: -31px;
  margin-top: 69px;
}

.c27 {
  margin-left: -79px;
  margin-top: -15px;
}

.c28 {
  margin-left: -95px;
  margin-top: -43px;
}

.c29 {
  margin-left: -95px;
  margin-top: 13px;
}

.c30 {
  margin-left: 49px;
  margin-top: 41px;
}

.c31 {
  margin-left: -79px;
  margin-top: -71px;
}

.c32 {
  margin-left: -111px;
  margin-top: -15px;
}

.c33 {
  margin-left: 65px;
  margin-top: -43px;
}

.c34 {
  margin-left: 65px;
  margin-top: 13px;
}

.c35 {
  margin-left: -79px;
  margin-top: 41px;
}

.c36 {
  margin-left: 49px;
  margin-top: -71px;
}

.c37 {
  margin-left: 81px;
  margin-top: -15px;
}

.r1 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
  -webkit-animation-name: pulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.2s;
}

.r2 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.4s;
  -webkit-animation-name: pulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.4s;
}

.r3 {
  animation-name: pulse;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.6s;
  -webkit-animation-name: pulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.6s;
}

.r1 > .hex-brick {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.2s;
}

.r2 > .hex-brick {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.4s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.4s;
}

.r3 > .hex-brick {
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-delay: 0.6s;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-delay: 0.6s;
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0.01);
    transform: scale(0.01);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fade {
  0% {
    background: #0096ff;
  }

  50% {
    background: #72ffff;
  }

  100% {
    background: #5800ff;
  }
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(0.01);
    transform: scale(0.01);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes fade {
  0% {
    background: #abf8ff;
  }

  50% {
    background: #389ca6;
  }

  100% {
    background: #abf8ff;
  }
}
</style>
