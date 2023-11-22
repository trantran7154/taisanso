<template>
  <v-list dense>
    <v-list-group
      v-show="item.show"
      :color="color.main"
      v-for="item in items"
      :key="item.title"
      v-model="item.active"
      :prepend-icon="item.action"
      no-action
    >
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title
            v-text="item.title"
            class="ml-2"
          ></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.items"
        :key="child.title"
        :to="child.url"
        :disabled="!child.active"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>
  
<script>
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    items: [],
  }),
  props: ["color", "user"],
  created() {
    this.items = [
      {
        action: "mdi-view-dashboard",
        items: [
          { title: "Dashboard", url: { path: "/" }, active: true },
          { title: "Static", url: { path: "/static" }, active: true },
        ],
        active: true,
        show: true,
        title: "Overview",
      },
      {
        action: "mdi-account",
        active: true,
        show: true,
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
        show: this.user.user.email == "admin@admin.admin.com" ? true : false,
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
        show: this.user.user.email == "admin@admin.admin.com" ? true : false,
        title: "Manage wallet",
      },
      {
        action: "mdi-newspaper",
        items: [{ title: "News", active: true, url: { name: "news" } }],
        active: true,
        show: this.user.user.email == "admin@admin.admin.com" ? true : false,
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
        show: this.user.user.email == "admin@admin.admin.com" ? true : false,
        title: "Game manager",
      },
      {
        action: "mdi-earth",
        items: [
          { title: "Contess", active: true, url: { name: "contess" } },
          { title: "Settings", active: true, url: { name: "settingwebsite" } },
        ],
        active: true,
        show: this.user.user.email == "admin@admin.admin.com" ? true : false,
        title: "Website",
      },
    ];
  },
  methods: {},
});
</script>
  