<template>
  <div>
    <Bannerhome :size="size" />
    <Sliderhome :size="size" />

    <div class="mt-10">
      <AccountHome :size="size" />
    </div>

    <div class="mt-10">
      <ProductHome :size="size" />
    </div>

    <div class="mt-10">
      <ServiceHome :size="size" />
    </div>

    <v-container style="margin-top: 100px">
      <h1 class="text-center" style="font-size: 44px">
       Tính năng quan trọng
      </h1>

      <v-row class="mt-5">
        <v-col cols="4" v-for="item in items" :key="item.name">
          <center>
            <v-img
              width="200"
              :src="item.url"
            ></v-img>
            <h3 class="mt-3">{{item.name}}</h3>
            <p class="text--secondary mt-3">{{item.des}}</p>
          </center>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Bannerhome from "../components/home/Banner.vue";
import Sliderhome from "../components/home/Slider.vue";
import ProductHome from "../components/home/Product.vue";
import ServiceHome from "../components/home/Service.vue";
import AccountHome from "../components/home/Account.vue";

export default Vue.extend({
  name: "Home",
  props: ["size"],
  data() {
    return {
      items: [
        {
          name: "Bộ tìm kiếm thông minh",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Chúng tôi có bộ lọc tìm kiếm thông tin, dịch vụ, sản phẩm tốt nhất và chất lượng."
        },
        {
          name: "Check trùng sản phẩm bán ra",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "toàn bộ gian hàng cam kết không bán trùng, hệ thống của chúng tôi sẽ kiểm tra từng sản phẩm một, để đảm bảo hàng đến tay người dùng chưa từng được bán cho ai khác trên trang, và hàng bạn đã mua, cũng không thể bán cho ai khác nữa."
        },
        {
          name: "Nạp tiền và thanh toán tự động",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Bạn chỉ cần nạp tiền đúng cú pháp, số dư của bạn sẽ đc cập nhật sau 1-5 phút. Mọi bước thanh toán và giao hàng đều được thực hiện ngay tức thì."
        },
        {
          name: "Giữ tiền đơn hàng 3 ngày",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Sau khi bạn mua hàng, đơn hàng đó sẽ ở trạng thái Tạm giữ tiền 3 ngày, đủ thời gian để bạn kiểm tra, đổi pass sản phẩm. Nếu có vấn đề gì, hãy nhanh chóng dùng tính năng 'Khiếu nại' nhé."
        },
        {
          name: "Bán hàng",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Bạn có thể bán hàng cùng với hệ thống quản lý tốt nhất từ chúng tôi."
        },
        {
          name: "Bộ tìm kiếm thông minh",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Chúng tôi có bộ lọc tìm kiếm thông tin, dịch vụ, sản phẩm tốt nhất và chất lượng."
        },
      ]
    }
  },
  components: {
    Bannerhome,
    Sliderhome,
    ProductHome,
    ServiceHome,
    AccountHome,
  },
});
</script>
