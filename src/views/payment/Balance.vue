<template>
  <v-container class="balance" style="color: #363e43">
    <Breadcrumb name="Balance" url_back="/" content_back="Cài đặt" />

    <BalanceVue />

    <DepositVue class="mt-5" />

  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import BalanceVue from "@/components/balance/Balance.vue";
import DepositVue from "@/components/balance/Deposit.vue";

export default Vue.extend({
  name: "balance",
  props: ["size"],
  data() {
    return {
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
    DepositVue
  },
});
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #f5f5f5;
}



.cursor-pointer {
  cursor: pointer;
}

.balance {
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
</style>
