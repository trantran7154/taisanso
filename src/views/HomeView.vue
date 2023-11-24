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
      <h1 class="text-center animated" style="font-size: 44px">
        Tính năng quan trọng
      </h1>

      <v-row class="mt-5">
        <div class="box-wrapper" style="margin-bottom: 100px;">
          <v-row>
            <v-col cols="12" md="3" lg="3" v-for="(item, index) in items" :key="index">
              <div class="card-four">
                <div class="card-bg-four" style="background-image: url('https://wapi.lunaproxy.com/static/index/img/pay/agency1.png'); background-repeat: repeat; background-size: cover;">
                </div>
                <div class="card-content-four">
                  <h1 class="red--text ma-3">0{{index+1}}</h1>
                  <div class="title ma-3">{{ item.name }}</div>
                  <div class="description mt-2 ma-3">
                    {{item.des}}
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
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
          name: "Bộ tìm kiếm thông minh 1",
          url: "https://www.bkns.vn/wp-content/uploads/2022/10/GettyImages-1047578412-692fa117cf86450287d8873eeb1a95c8.jpg",
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

<style lang="scss" scoped>
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

.title {
  font-size: 20px;
  font-weight: 700;
}

.description {
  font-size: 16px;
  word-wrap: break-word;
}

.card-four {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 50px 15px auto 15px;
  transition: all 250ms ease;
}

.card-bg-four {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .1);
  transition: all 250ms ease;
  margin: 0 auto;
}

.card-content-four {
  width: 88%;
  padding: 10px;
  background: #FFF;
  border-radius: 0 0 8px 8px;
  transition: all 250ms ease;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .1);
  margin: 0 auto;
}

.card-four:hover {
  cursor: pointer;
  transform: translate(0, 15px);
}

.card-four:hover .card-bg-four {
  transform: scale(1.08, 1.08) translate(0, -8px);
}
</style>
