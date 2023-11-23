<template>
  <v-container class="service">
    <h1 class="animated">Danh sách dịch vụ</h1>
    <p>
      Các dịch vụ hỗ trợ nhanh chóng và làm nhanh quá trình công việc của bạn.
    </p>

    <v-row class="mt-5 wrapper">
      <v-col cols="12" md="6" lg="3" v-for="item in items" :key="item.name">
        <v-card class="box item elevation-0">
          <center class="pa-4">
            <v-avatar size="90">
              <v-img contain :src="item.url"></v-img>
            </v-avatar>
            <h2>{{ item.name }}</h2>
            <p>{{ item.des }}</p>
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

import s_tuongtac from "../../assets/tuongtac_s.png";
import s_software from "../../assets/software_s.png";
import s_blockchain from "../../assets/blockchain_s.png";
import s_other from "../../assets/other_s.png";

export default Vue.extend({
  props: ["size"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    items: [
      {
        name: "Tăng tương tác",
        url: s_tuongtac,
        des: "Tăng like, view.share, comment... cho sản phẩm của bạn",
      },
      {
        name: "Dịch vụ phần mềm",
        url: s_software,
        des: "Dịch vụ code tool MMO, đồ họa, video... và các dịch vụ liên quan",
      },
      {
        name: "Blockchain",
        url: s_blockchain,
        des: "Dịch vụ tiền ảo, NFT, coinlist... và các dịch vụ blockchain khác",
      },
      {
        name: "Dịch vụ khác",
        url: s_other,
        des: "Các dịch vụ MMO phổ biến khác hiện nay",
      },
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
  --c1: #DAFCFC;
  --c2: rgba(168, 239, 255, 0.1);
}

.wrapper {
}

.box {
  border: 0.25rem solid;
  border-image: conic-gradient(
      from var(--angle),
      var(--c2),
      var(--c1) 0.1turn,
      var(--c1) 0.15turn,
      var(--c2) 0.25turn
    )
    30;
  animation: borderRotate var(--d) linear infinite forwards;
}

.box:nth-child(2) {
  border-image: radial-gradient(
      ellipse at var(--gradX) var(--gradY),
      var(--c1),
      var(--c1) 10%,
      var(--c2) 40%
    )
    30;
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

.service {
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
    }
    height: 300px;
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
}
</style>
