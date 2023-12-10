<template>
  <div class="menu">
    <div v-for="item in items" :key="item.title">
      <v-btn
        :to="{ path: item.path }"
        text
        depressed
        block
        class="text-none btn"
        style="border-radius: 0px"
        large
      >
        <img
          width="35"
          height="35"
          :src="require(`../../assets/${item.action}`)"
        />
        <span> {{ item.title }}</span>
      </v-btn>
    </div>

    <div style="padding: 10px 0px">
      <v-divider></v-divider>
    </div>

    <div style="padding: 10px 25px"><h3>Tài khoản</h3></div>
    <div v-for="item in items4" :key="item.title">
      <v-btn
        :to="{ path: item.path }"
        text
        style="border-radius: 0px"
        depressed
        block
        class="text-none btn"
        large
      >
        <img
          width="35"
          height="35"
          :src="require(`../../assets/${item.action}`)"
        />
        <span> {{ item.title }}</span>
      </v-btn>
    </div>

    <div style="padding: 10px 0px">
      <v-divider></v-divider>
    </div>

    <div style="padding: 10px 25px"><h3>Blog</h3></div>
    <div v-for="item in items3" :key="item.title">
      <v-btn
        :to="{ path: item.path }"
        text
        style="border-radius: 0px"
        depressed
        block
        class="text-none btn"
        large
      >
        <img
          width="35"
          height="35"
          :src="require(`../../assets/${item.action}`)"
        />
        <span> {{ item.title }}</span>
      </v-btn>
    </div>

    <div style="height: 100px"></div>
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
        action: "blog.gif",
        active: true,
        path: "/main2",
        items: [],
        title: "Blog",
      },
      {
        action: "coin-bank.gif",
        active: true,
        path: "/taisanso-xu",
        items: [],
        title: "TSS xu",
      },
    ],
    items3: [
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "",
        title: "Kênh của bạn",
      },
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "/main2",
        title: "Blog đã xem",
      },
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "/main2",
        title: "Blog của bạn",
      },
    ],
    items4: [
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "/main2",
        title: "Đơn hàng đã mua",
      },
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "/main2",
        title: "Gian hàng yêu thích",
      },
      {
        action: "blog-user.gif",
        items: [],
        active: true,
        path: "/main2",
        title: "Lịch sử thanh toán",
      },
      {
        action: "setting.gif",
        path: "/main2",
        items: [],
        active: true,
        title: "Cài đặt",
      },
    ],
    items2: [
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
        action: "blog.gif",
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
        title: "Blog",
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
  created() {
    const uuid = localStorage.getItem("uui");
    this.items3[0].path = "/channel/" + uuid;
  },
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
