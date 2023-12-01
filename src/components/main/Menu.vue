<template>
  <div class="menu">
    <div v-for="(item, i) in items" :key="i">
      <v-btn :to="{path: item.path}" text depressed block class="text-none btn" large>
        <img
          width="35"
          height="35"
          :src="require(`../../assets/${item.action}`)"
        />
        <span> {{ item.title }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    items: [
      {
        action: "home.gif",
        items: [
          { title: "Dashboard", url: { path: "/main" }, active: true },
          { title: "Static", url: { path: "/static" }, active: true },
        ],
        active: true,
        path: "/main",
        title: "Trang chủ",
      },
      {
        action: "checklist.gif",
        active: true,
        path: "/main2",
        items: [
          { title: "Manage users", url: { name: "user" }, active: true },
          { title: "KYC", url: { name: "kyc" }, active: true },
          {
            title: "Notifications",
            url: { name: "notification" },
            active: true,
          },
          { title: "Settings", url: { name: "settinguser" }, active: true },
        ],
        title: "Đơn hàng",
      },
      {
        action: "sanpham.gif",
        path: "/main2",
        items: [
          { title: "Categorys", url: { name: "category" }, active: true },
          { title: "Documents", url: { name: "document" }, active: true },
          { title: "Countries", url: { name: "country" }, active: true },
        ],
        active: true,
        title: "Bán hàng",
      },
      {
        action: "phantich.gif",
        path: "/main2",
        items: [
          {
            title: "Manage transactions",
            url: { name: "transaction" },
            active: true,
          },
          { title: "Withdraw", url: { name: "withdraw" }, active: true },
          { title: "Deposit", url: { name: "deposit" }, active: true },
          { title: "Manage coins", url: { name: "coin" }, active: true },
          { title: "Settings", active: true, url: { name: "settingwallet" } },
          { title: "Chart", active: true, url: { name: "chart" } },
        ],
        active: true,
        title: "Phân tích",
      },
      {
        action: "lienhe.gif",
        path: "/main2",
        items: [
          { title: "Football player", url: { name: "product" }, active: true },
          { title: "Manage bots", url: { name: "bot" }, active: true },
          { title: "Squad Management", url: { name: "squad" }, active: true },
          { title: "Upgrade", active: true, url: { name: "upgrade" } },
          { title: "Box gift", active: true, url: { name: "giftbox" } },
          { title: "Settings", active: true, url: { name: "settingsgame" } },
        ],
        active: true,
        title: "Liên hệ",
      },
      {
        action: "setting.gif",
        path: "/main2",
        items: [
          { title: "Contess", active: true, url: { name: "contess" } },
          { title: "Settings", active: true, url: { name: "settingwebsite" } },
        ],
        active: true,
        title: "Cài đặt",
      },
    ],
  }),
  props: ["color", "user"],
  created() {},
  methods: {},
});
</script>

<style scoped lang="scss">
.menu {
  .btn {
    justify-content: start;
    font-size: 12px;
    span {
      margin-left: 10px;
      font-weight: 400;
    }
  }
}
</style>
