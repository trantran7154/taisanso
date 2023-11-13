<template>
  <v-container class="product">
    <h1>Danh mục sản phẩm</h1>
    <p>
      Chúng tôi cung cấp hơn 200.000 sản phẩm số và bạn có thể mua nhanh chóng.
    </p>

    <v-row class="mt-5">
      <v-col cols="3" v-for="item in items" :key="item.name">
        <v-card class="item">
          <center class="pa-4">
            <v-avatar size="70">
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

import p_email from "../../assets/email_p.png";
import p_software from "../../assets/software_p.png";
import p_account from "../../assets/account_p.png";
import p_other from "../../assets/other_p.png";

export default Vue.extend({
  props: ["size"],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data: () => ({
    items: [
      {
        name: "Email",
        url: p_email,
        des: "Gmail, yahoo mail, hot mail... và nhiều hơn thế nữa",
      },
      {
        name: "Phần mềm",
        url: p_software,
        des: "Các phần mềm chuyên dụng cho kiếm tiền online từ những coder uy tín",
      },
      {
        name: "Tài khoản",
        url: p_account,
        des: "Fb, BM, key window, kaspersky....",
      },
      {
        name: "Khác",
        url: p_other,
        des: "Các sản phẩm số khác",
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1250px;
}
.product {
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
    h2{
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
