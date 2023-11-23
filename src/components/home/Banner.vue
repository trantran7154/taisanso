<template>
  <v-app>
    <div class="banner">
      <v-container class="container-banner">
        <h1 :style="size.onsize <= 960 ? 'font-size: 25px' : ''">
          Mang tài sản số đến cho bạn, bán hoặc mua và quảng cáo các dịch vụ liên
          quan đến tài sản số
        </h1>

        <p class="mt-5">
          Tiếp cận hơn 100.000 sản phẩm số, bạn có thể tham gia bán hàng để tìm
          doanh thu và mua các sản phẩm số tốt nhất và uy tín.
        </p>

        <v-form class="mt-7">
          <v-row>
            <v-col cols="12" md="12" lg="4">
              <v-text-field height="52" hide-details="" placeholder="Tìm dịch vụ, gian hàng, người bán..." solo
                class="elevation-0" prepend-inner-icon="fi fi-rr-search"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" lg="3">
              <v-combobox height="52" hide-details="" placeholder="" solo class="elevation-0" value="Danh mục"
                prepend-inner-icon="fi fi-rr-bars-sort"></v-combobox>
            </v-col>

            <v-col cols="12" md="6" lg="3">
              <v-combobox hide-details="" height="52" class="elevation-0 text-s" placeholder="" solo value="Sản phẩm"
                prepend-inner-icon="fi fi-rr-boxes"></v-combobox>
            </v-col>

            <v-col cols="12" md="12" lg="2">
              <v-btn depressed x-large block dark color="var(--color-green)" class="text-none">
                Tìm kiếm
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <div class="static mt-5">
          <v-row>
            <v-col cols="6" lg="3">
              <li>Tổng sản phẩm: <span>200.000</span></li>
            </v-col>
            <v-col cols="6" lg="3">
              <li>Số người dùng: <span>200.000</span></li>
            </v-col>
            <v-col cols="6" lg="3">
              <li>Tổng dịch vụ: <span>200.000</span></li>
            </v-col>
            <v-col cols="6" lg="3">
              <li>Ngày cập nhật: <span>10:30 13/11/2023</span></li>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: ["size"],
  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  padding: 100px 0px;
  background-image: url("../../assets/banner.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  .static {
    li {
      font-size: 16px !important;
    }

    span {
      color: var(--color-yellow);
      font-weight: bold;
    }
  }

  h1 {}

  p {
    opacity: 0.8;
  }

  .container-banner {
    width: 80%;
  }
}

.area {
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>