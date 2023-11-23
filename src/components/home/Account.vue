<template>
  <v-container class="account">
    <h1 class="animated">Tài khoản</h1>

    <v-row class="mt-5 wrapper">
      <v-col cols="6" md="4" lg="2" v-for="item in items" :key="item.name">
        <v-card class="box item elevation-0">
          <center class="pa-4">
            <v-avatar size="70">
              <v-img contain :src="item.url"></v-img>
            </v-avatar>
            <h2>{{ item.name }}</h2>
          </center>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default Vue.extend({
  props: ["size"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    items: [
      {
        name: "Tài khoản Facebook",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/10/facebook.svg",
      },
      {
        name: "Tài khoản Duolingo",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/08/Duolingo-Super.png",
      },
      {
        name: "Tài khoản ChatGPT",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/02/ChatGPT-Logo-PNG.png",
      },
      {
        name: "Tài khoản Adobe",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/09/adobe.svg",
      },
      {
        name: "Spotify Premium",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/10/Spotify-Premium.png",
      },
      {
        name: "Netflix Premium",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/10/netflix.svg",
      },
      {
        name: "Lưu trữ",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/10/crXnTK.svg",
      },
      {
        name: "Tài khoản Elsa",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/08/Elsa-1.png",
      },
      {
        name: "Tài khoản Discord",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/09/discord.svg",
      },
      {
        name: "Tài khoản canvas pro",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/11/canvapro-1.png",
      },
      {
        name: "SwifftDoo PDF Pro",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/10/DESIGN.svg",
      },
      {
        name: "Pubg Mobile",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/10/cBMbzv.svg",
      },
      {
        name: "Microsoft",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/10/microsoft.svg",
      },
      {
        name: "Linkedkn Business",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/07/logo-linkedin.svg",
      },
      {
        name: "Youtube Premium",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/11/cg3oLO.svg",
      },
      {
        name: "Tài khoản Galaxy Play",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/11/Galaxy-Play.png",
      },
      {
        name: "Windowns Bản quyền",
        url: "https://muataikhoan.vn/wp-content/uploads/2023/09/win.svg",
      },
      {
        name: "Tài khoản Vieon",
        url: "https://muataikhoan.vn/wp-content/uploads/2022/11/VieON-1.png",
      }
    ],
  }),

});
</script>

<style lang="scss">
.animated {
  animation: textChangeColor 3s linear infinite;
}

@keyframes textChangeColor {
  0% {
    color: black;
  }

  40% {
    color: cyan;
  }

  70% {
    color: violet;
  }

  100% {
    color: magenta;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 90deg;
  inherits: true;
}

@property --gradX {
  syntax: "<percentage>";
  initial-value: 50%;
  inherits: true;
}

@property --gradY {
  syntax: "<percentage>";
  initial-value: 0%;
  inherits: true;
}

p {
  margin: 0;
}

:root {
  --d: 2500ms;
  --angle: 90deg;
  --gradX: 100%;
  --gradY: 50%;
  --c1: #E0E0E0;
  --c2: rgba(168, 239, 255, 0.1);
}

.wrapper {}

.box {
  border: 0.23rem solid;
  border-image: conic-gradient(from var(--angle),
      var(--c2),
      var(--c1) 0.1turn,
      var(--c1) 0.15turn,
      var(--c2) 0.25turn) 30;
  animation: borderRotate var(--d) linear infinite forwards;
}

.box:nth-child(2) {
  border-image: radial-gradient(ellipse at var(--gradX) var(--gradY),
      var(--c1),
      var(--c1) 10%,
      var(--c2) 40%) 30;
  animation: borderRadial var(--d) linear infinite forwards;
}

@keyframes borderRotate {
  100% {
    --angle: 420deg;
  }
}

@keyframes borderRadial {
  20% {
    --gradX: 100%;
    --gradY: 50%;
  }

  40% {
    --gradX: 100%;
    --gradY: 100%;
  }

  60% {
    --gradX: 50%;
    --gradY: 100%;
  }

  80% {
    --gradX: 0%;
    --gradY: 50%;
  }

  100% {
    --gradX: 50%;
    --gradY: 0%;
  }
}

.container {
  max-width: 1250px;
}

.account {
  h1 {
    text-align: center;
  }

  p {
    text-align: center;
    font-family: Inter-Light, Inter;
    font-weight: 300;
    color: #718494;
    margin-top: 20px;
  }

  .item {
    h2 {
      margin-top: 10px;
      font-size: 13px;
    }

    background: #ffffff;
    box-shadow: 0px 0px 14px 0px rgba(58, 118, 209, 0.11);
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    transition: all 0.5s;
    cursor: pointer;
  }
}</style>
