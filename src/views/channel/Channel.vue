<template>
  <v-container style="color: #363e43">
    <v-row no-gutters>
      <v-col cols="12" sm="3">
        <center>
          <v-img height="160" width="160" :src="user.avatar"></v-img>
        </center>
      </v-col>

      <v-col sm="8">
        <h1>Tấn Huỳnh</h1>
        <div class="text--secondary">@TanHuynh-jn7on</div>

        <div class="mt-4">
          <v-row>
            <v-col cols="12" sm="6" md="3"
              ><v-btn block depressed rounded small
                >Tùy chỉnh kênh</v-btn
              ></v-col
            >
            <v-col cols="12" sm="6" md="4">
              <v-btn block depressed rounded small
                >Quản lý sản phẩm</v-btn
              ></v-col
            >

            <v-col cols="12" sm="6" md="3">
              <v-btn block depressed rounded small>Blog</v-btn></v-col
            >
          </v-row>
        </div>
      </v-col>
    </v-row>

    <div style="padding: 30px 0px">
      <v-divider></v-divider>
    </div>

    <div class="">
        Content
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

import BalanceVue from "@/components/balance/Balance.vue";
import DepositVue from "@/components/balance/Deposit.vue";

export default Vue.extend({
  name: "channel",
  props: ["size", "user"],
  data() {
    return {};
  },
  components: {
    Breadcrumb,
    BalanceVue,
    DepositVue,
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
