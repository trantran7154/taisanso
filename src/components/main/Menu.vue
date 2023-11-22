<template>
  <div class="menu">
    <div v-for="(item, i) in items" :key="i">
      <v-btn depressed block class="text-none btn" large>
        <v-icon>{{ item.action }}</v-icon>
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
        action: "mdi-view-dashboard",
        items: [
          { title: "Dashboard", url: { path: "/" }, active: true },
          { title: "Static", url: { path: "/static" }, active: true },
        ],
        active: true,
        title: "Sản phẩm",
      },
      {
        action: "mdi-account",
        active: true,
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
        title: "Account Management",
      },
      {
        action: "mdi-format-list-bulleted",
        items: [
          { title: "Categorys", url: { name: "category" }, active: true },
          { title: "Documents", url: { name: "document" }, active: true },
          { title: "Countries", url: { name: "country" }, active: true },
        ],
        active: true,
        title: "Manage categories",
      },
      {
        action: "mdi-format-page-break",
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
        title: "Manage wallet",
      },
      {
        action: "mdi-newspaper",
        items: [{ title: "News", active: true, url: { name: "news" } }],
        active: true,
        title: "Manage Posts",
      },
      {
        action: "mdi-gamepad-variant",
        items: [
          { title: "Football player", url: { name: "product" }, active: true },
          { title: "Manage bots", url: { name: "bot" }, active: true },
          { title: "Squad Management", url: { name: "squad" }, active: true },
          { title: "Upgrade", active: true, url: { name: "upgrade" } },
          { title: "Box gift", active: true, url: { name: "giftbox" } },
          { title: "Settings", active: true, url: { name: "settingsgame" } },
        ],
        active: true,
        title: "Game manager",
      },
      {
        action: "mdi-earth",
        items: [
          { title: "Contess", active: true, url: { name: "contess" } },
          { title: "Settings", active: true, url: { name: "settingwebsite" } },
        ],
        active: true,
        title: "Website",
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
