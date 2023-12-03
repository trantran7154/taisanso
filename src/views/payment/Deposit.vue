<template>
  <v-container class="deposit" style="color: #363e43">
    <Breadcrumb name="Nạp tiền" url_back="/" content_back="Cài đặt" />

    <p>
      Số tiền nạp sẽ được cộng vào số dư của bạn một vài phút sau khi quá trình
      thanh toán hoàn tất. Đối với giao dịch chuyển tiền, qua trình này có thể
      mất đến 24 giờ.
    </p>

    <v-row>
      <v-col cols="4">
        <v-card class="elevation-0" style="border: 1px solid #f5f5f5">
          <div class="pa-5">
            <h2>Số tiền nạp</h2>

            <p>Kiểm tra số tiền nạp bằng cách nhấp vào lựa chọn bên dưới</p>

            <div>
              <v-row>
                <v-col cols="4" v-for="item in amounts" :key="item">
                  <v-btn block depressed x-large>${{ item }}</v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-expansion-panels v-model="panel" class="elevation-0">
          <v-expansion-panel style="box-shadow: none !important">
            <v-expansion-panel-header>Thẻ tín dụng</v-expansion-panel-header>
            <v-expansion-panel-content>
                <div style="padding: 20px 0px 0px 0px">
                    <h4>Thêm thẻ tín dụng</h4>
                    <p class="text--secondary mt-5">coming soon</p>
                </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Gift card</v-expansion-panel-header>
            <v-expansion-panel-content>
               <div style="padding: 20px 0px 0px 0px">
                    <h4>Thêm thẻ tín dụng</h4>

                    <v-text-field outlined dense class="mt-5" placeholder="Nhập mã của bạn ở đây"></v-text-field>
                </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>Panel 3</v-expansion-panel-header>
            <v-expansion-panel-content>
              Some content
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import BalanceVue from "@/components/balance/Balance.vue";
import DepositVue from "@/components/balance/Deposit.vue";

export default Vue.extend({
  name: "deposit",
  props: ["size"],
  data() {
    return {
      panel: 1,
      amounts: [10, 20, 40, 80, 100, 200, 500, 1000, 10000],
      items: [
        {
          name: "Bộ tìm kiếm thông minh",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Chúng tôi có bộ lọc tìm kiếm thông tin, dịch vụ, sản phẩm tốt nhất và chất lượng.",
        },
        {
          name: "Check trùng sản phẩm bán ra",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "toàn bộ gian hàng cam kết không bán trùng, hệ thống của chúng tôi sẽ kiểm tra từng sản phẩm một, để đảm bảo hàng đến tay người dùng chưa từng được bán cho ai khác trên trang, và hàng bạn đã mua, cũng không thể bán cho ai khác nữa.",
        },
        {
          name: "Nạp tiền và thanh toán tự động",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Bạn chỉ cần nạp tiền đúng cú pháp, số dư của bạn sẽ đc cập nhật sau 1-5 phút. Mọi bước thanh toán và giao hàng đều được thực hiện ngay tức thì.",
        },
        {
          name: "Giữ tiền đơn hàng 3 ngày",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Sau khi bạn mua hàng, đơn hàng đó sẽ ở trạng thái Tạm giữ tiền 3 ngày, đủ thời gian để bạn kiểm tra, đổi pass sản phẩm. Nếu có vấn đề gì, hãy nhanh chóng dùng tính năng 'Khiếu nại' nhé.",
        },
        {
          name: "Bán hàng",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Bạn có thể bán hàng cùng với hệ thống quản lý tốt nhất từ chúng tôi.",
        },
        {
          name: "Bộ tìm kiếm thông minh 1",
          url: "https://wapi.lunaproxy.com/static/index/img/pay/agency1.png",
          des: "Chúng tôi có bộ lọc tìm kiếm thông tin, dịch vụ, sản phẩm tốt nhất và chất lượng.",
        },
      ],
    };
  },
  components: {
    Breadcrumb,
    BalanceVue,
    DepositVue,
  },
});
</script>

<style lang="scss" >
.border {
  border: 1px solid #f5f5f5;
}

.cursor-pointer {
  cursor: pointer;
}

.deposit {
  font-size: 16px;
  h4 {
    font-size: 16px;
  }

  h1 {
    font-size: 18px;
  }

  .amount-balance {
    font-weight: bold;
  }
}

.v-expansion-panel::before {
    box-shadow: none;
}

.v-application--is-ltr .v-expansion-panel-header {
    text-align: left;
    border: 1px solid #f5f5f5;
}

.theme--light.v-expansion-panels .v-expansion-panel:not(:first-child)::after {
    border-color: white;
}

.v-expansion-panel-content__wrap {
    border-bottom: 1px solid #f5f5f5;
    border-left: 1px solid #f5f5f5;
    border-right: 1px solid #f5f5f5;
}
</style>
