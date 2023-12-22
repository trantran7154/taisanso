<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <div class="pa-2">
          <h4 style="color: #806ce8;"># Balance</h4>
          <div style="padding: 3px 0px">
            <v-divider></v-divider>
          </div>
          <p class="mt-1" style="font-size: 16px;">
            Balance là tài khoản tín dụng của bạn, được dùng để chi trả cho phí
            dịch vụ, phí đăng ký và phí giao dịch
          </p>
        </div>
      </v-col>

      <v-col cols="12" md="8">
        <v-card class="elevation-0" style="border-radius: 10px; background-color: #fbfbfb;">
          <div class="pa-6">
            <v-row no-gutters>
              <v-col cols="8">
                <h4>
                  Số dư khả dụng hiện tại
                  <TooltipVue
                    content="Số tiền mà bạn có thể sử dụng để thanh toán phí Đăng ký, phí giao dịch và phí dịch vụ." />
                </h4>
              </v-col>
              <v-col cols="4">
                <div class="float-end amount-balance">$0.00</div>
              </v-col>

              <v-col cols="8" class="mt-3">
                <div class="ml-4">
                  Số tiền có thể rút
                  <TooltipVue content="Số tiền có thể được thanh toán vào tài khoản thanh toán của bạn." />
                </div>
              </v-col>
              <v-col cols="4" class="mt-3">
                <div class="float-end amount-balance">$0.00</div>
              </v-col>

              <v-col cols="8" class="mt-3">
                <div class="ml-4">
                  Không khả dụng để thanh toán
                  <TooltipVue
                    content="Số tiền chỉ có thể được sử dụng để thanh toán phí taisanso và không thể rút về tài khoản của bạn." />
                </div>
              </v-col>
              <v-col cols="4" class="mt-3">
                <div class="float-end amount-balance">$0.00</div>
              </v-col>

              <v-col cols="8" class="mt-3">
                <h4>
                  Sắp khả dụng
                  <TooltipVue content="Các khoản tiền vẫn chưa khả dụng để được sử dụng và thanh toán.." />
                </h4>
              </v-col>
              <v-col cols="4" class="mt-3">
                <div class="float-end amount-balance">$0.00</div>
              </v-col>
            </v-row>

            <div style="padding: 20px 0px">
              <v-divider></v-divider>
            </div>

            <v-row>
              <v-col cols="8">
                <h1>Tổng</h1>
              </v-col>

              <v-col cols="4">
                <h1 class="float-end">$0.00</h1>
              </v-col>
            </v-row>

            <div style="padding: 20px 0px">
              <v-divider></v-divider>
            </div>

            <v-row>
              <v-col cols="12" md="8">
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-btn class="font-weight-bold" rounded block depressed color="#dcdcdc">Lịch sử Nạp/Rút tiền</v-btn>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-btn class="font-weight-bold" rounded block depressed color="#dcdcdc">Lịch sử giao dịch</v-btn>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="4">
                <a style="font-size: 16px; color: #806ce8" class="float-end mt-1">
                  Xem chi tiết
                </a>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TooltipVue from "@/components/Tooltip.vue";

export default Vue.extend({
  props: ["name", "url_back", "content_back"],
  data: () => ({}),
  components: {
    TooltipVue,
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #f5f5f5;
}
</style>
