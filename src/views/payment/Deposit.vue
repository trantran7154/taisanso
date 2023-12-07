<template>
  <v-container class="deposit" style="color: #363e43">
    <Breadcrumb name="Nạp tiền" url_back="/" content_back="Cài đặt" />

    <p>
      Số tiền nạp sẽ được cộng vào số dư của bạn một vài phút sau khi quá trình
      thanh toán hoàn tất. Đối với giao dịch chuyển tiền, qua trình này có thể
      mất đến 24 giờ.
    </p>

    <v-row>
      <v-col cols="12" md="4" v-if="panel == 0 || panel == 2">
        <v-card
          class="elevation-0"
          style="border: 1px solid #f5f5f5"
          v-if="panel == 0"
        >
          <div class="pa-5">
            <h2>Số tiền nạp</h2>

            <p>Kiểm tra số tiền nạp bằng cách nhấp vào lựa chọn bên dưới</p>

            <div>
              <v-row>
                <v-col cols="6" v-for="item in amounts" :key="item">
                  <v-btn class="text-none" block depressed x-large>{{
                    amountPrice(item)
                  }}</v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-card>

        <v-card
          class="elevation-0"
          style="border: 1px solid #f5f5f5"
          v-else-if="panel == 2"
        >
          <div class="pa-5">
            <h4>Hướng Dẫn + Lưu Ý Khi Nạp Tiền Vào Tài Khoản</h4>
            <div class="mt-5 text--secondary" style="font-size: 14px">
              <ul>
                <li class="mt-1">Bước 1: Mở app ngân hàng bạn đang sử dụng.</li>
                <li class="mt-1">
                  Bước 2: Quét mã QR hoặc nhập STK Bank ở dưới bằng thủ công.
                </li>
                <li class="mt-1">
                  Bước 3: Nhập số tiền bạn muốn nạp vào tài khoản Nạp tối thiểu
                  <b class="error--text">10.000VND</b> vào tài khoản. Nếu nạp
                  dưới 10K lỗi giao dịch, TaiSanSo không hỗ trợ.
                </li>
                <li class="mt-1">
                  Bước 4: Sao Chép Nội Dung
                  <b class="error--text">{{ user.username }}</b> ở ô dưới vào
                  Nội dung / Lời nhắn trước khi thực hiện chuyển tiền Hệ thống
                  xử lý giao dịch nạp tiền tự động từ 1Phút - 10Phút , nếu chờ
                  quá lâu xin vui lòng liên hệ Admin.
                </li>
              </ul>
            </div>
          </div>
        </v-card>
      </v-col>

      <v-col>
        <v-expansion-panels v-model="panel" class="elevation-0">
          <v-expansion-panel style="box-shadow: none !important">
            <v-expansion-panel-header>
              <span class="float-start">
                <v-img width="20" src="../../assets/credit-card.png"></v-img>
              </span>
              <span class="float-start ml-2">Thẻ tín dụng</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div style="padding: 20px 0px 0px 0px">
                <h4>Thêm thẻ tín dụng</h4>

                <v-row class="mt-2">
                  <v-col cols="6">
                    <v-combobox
                      outlined
                      height="45"
                      dense
                      label="Quốc gia"
                      hide-details=""
                    ></v-combobox>
                  </v-col>

                  <v-col cols="6"> </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      label="Tên"
                      hide-details=""
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Họ"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Địa chỉ"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Địa chỉ 2"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Thành phố / Tỉnh thành"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Tiểu bang / Phường xã"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="4">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Zipcode"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="2">
                    <v-combobox
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Vùng"
                    ></v-combobox>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Số điện thoại"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <div style="padding: 30px 0px">
                  <v-divider></v-divider>
                </div>

                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Card number"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6"> </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Expireation date"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      label="Security code"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      placeholder="First name"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      outlined
                      height="45"
                      dense
                      hide-details=""
                      placeholder="Last name"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="float-start">
                <v-img width="20" src="@/assets/gift-card.png"></v-img>
              </span>
              <span class="float-start ml-2">Gift card</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div style="padding: 20px 0px 0px 0px">
                <h4>Thêm thẻ gift của bạn</h4>

                <v-row>
                  <v-col cols="12" md="4" class="text--secondary">
                    <div class="mt-3">
                      Giftcode taisanso: Đây là sản phẩm của tài sản số phát
                      hành dùng để nạp tiền vào hệ thống.
                    </div>
                    <div class="mt-3">
                      Bạn có thể nhận gift code ở các sự kiện, quà tặng, hoạt
                      động và nhận quà từ bạn bè.
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-row no-gutters class="mt-10">
                      <v-col cols="12" sm="6" md="6">
                        <div class="pa-1">
                          <v-text-field
                            outlined
                            height="45"
                            dense
                            placeholder="Nhập mã của bạn ở đây"
                          ></v-text-field>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="6" md="4">
                        <div class="pa-1">
                          <v-text-field
                            height="45"
                            outlined
                            dense
                            placeholder="Nhập mật khẩu giftcard"
                          ></v-text-field>
                        </div>
                      </v-col>

                      <v-col cols="12" sm="12" md="2">
                        <div class="pa-1">
                          <v-btn
                            block
                            large
                            color="primary"
                            class="text-none"
                            depressed
                            >Nạp</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span class="float-start">
                <v-img width="20" src="@/assets/bank.png"></v-img>
              </span>
              <span class="float-start ml-2"> Chuyển khoản ngân hàng</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div style="padding: 20px 0px 0px 0px">
                <h4>Nội dung chuyển khoản của bạn</h4>
                <div>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12" sm="6" md="6">
                      <div>
                        <v-text-field
                          outlined
                          height="45"
                          dense
                          disabled
                          :value="user.username"
                          placeholder="Nhập mã của bạn ở đây"
                        ></v-text-field>
                      </div>
                    </v-col>

                    <v-col cols="12" sm="12" md="2">
                      <div>
                        <v-btn
                          block
                          large
                          color="primary"
                          class="text-none ml-1"
                          depressed
                          >Sao chép</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-row>
                  <v-col cols="12" sm="6" md="4" v-for="n in 6" :key="n">
                    <img width="100%" src="@/assets/1701622050510.png" />
                  </v-col>
                </v-row>
              </div>
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
  props: ["size", "user"],
  data() {
    return {
      panel: 0,
      amounts: [
        10000, 20000, 40000, 80000, 100000, 200000, 500000, 1000000, 2000000,
        5000000,
      ],
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
  methods: {
    amountPrice(amount: any) {
      let that = this;
      let a = 0;
      console.log(String(amount).length);
      if (String(amount).length <= 6) {
        const am = String(amount).slice(3, 6);
        return String(amount).slice(0, String(am).length) + "K";
      } else {
        const am = String(amount).slice(3, 4);
        return String(amount).slice(0, String(am).length) + "M";
      }
    },
  },
});
</script>

<style lang="scss">
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

.v-expansion-panel-header > *:not(.v-expansion-panel-header__icon) {
  flex: inherit;
}
</style>
