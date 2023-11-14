<template>
  <div class="taisanso">
    <!-- <v-app app>
     
    </v-app> -->

    <!-- <v-toolbar style="position: fixed; top: 0; width: 100%; z-index: 10;">
                <a href="/">
                    <v-img max-height="40" max-width="170" src="../img/logo.jpg"></v-img>
                </a>
                <v-spacer></v-spacer>
                <a href="/login" class="ma-2 d-flex d-sm-none" style="text-decoration: none;"><v-icon>mdi-account</v-icon></a>
                <v-icon @click="drawer = true" class="ma-2 d-flex d-sm-none">mdi-magnify</v-icon>
                <v-icon @click="drawer = true" class="ma-2 d-flex d-sm-none" size="30">mdi-menu</v-icon>
            </v-toolbar> -->
    <!-- <v-toolbar class="d-none d-sm-flex" screen and above rounded tile
                style="position: fixed; top: 0; width: 100%; z-index: 10; padding: 0px 130px">
                <v-toolbar-title>
                    <a href="/">
                        <v-img max-height="50" max-width="200" src="../img/logo.jpg"></v-img></a>
                </v-toolbar-title>
                <v-toolbar-items>
                    <v-menu class="dropdown" justify-center open-on-hover offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn href="/" text>
                                Trang chủ
                            </v-btn>
                            <v-btn text v-bind="attrs" v-on="on">
                                Sản phẩm
                            </v-btn>
                        </template>
                        <v-card max-width="1000">
                            <v-tabs vertical>
                                <v-tab v-for="item in itemTab" :key="item" class="tab text-left">
                                    <v-row>
                                        <v-col>
                                            <v-icon left class="mt-3">
                                                {{ item.icon }}
                                            </v-icon>
                                        </v-col>
                                        <v-col>
                                            <div class="mt-2">
                                                {{ item.title }}
                                                <br />
                                                <small mt-3 style="color: darkgray !important;"> {{ item.description
                                                }}</small>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-tab>

                                <v-tab-item class="pa-3" v-for="items in itemTab" :key="items">
                                    <div style="color: #1976d2">Dịch vụ chính</div>
                                    <v-row>
                                        <v-col md="3" cols="12" v-for="item1 in items.subTab" :key="item1">
                                            <div class="mt-3 ml-3">
                                                <v-icon>{{ item1.subIcon }}</v-icon> <a>{{ item1.subTitle }}</a>
                                                <br>
                                                <small style="color: darkgray !important;"> {{ item1.subDescription
                                                }}</small>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                            </v-tabs>
                        </v-card>
                    </v-menu>

                    <v-menu class="dropdown" open-on-hover offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text v-bind="attrs" v-on="on">
                                Dịch vụ
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item v-for="(item, index) in itemService" :key="index">
                                <v-list-item-title><v-icon>{{ item.icon }}</v-icon> <a>{{ item.title
                                }}</a></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-btn text>
                        Hỗ trợ
                    </v-btn>
                    <v-btn text>
                        Blog
                    </v-btn>
                </v-toolbar-items>
                | <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn href="/login" class="ml-2" color="primary" outlined small style="text-transform: none;">
                   <v-icon size="20" class="mr-1">mdi-account</v-icon> Đăng nhập
                </v-btn>
                <span class="ml-9"> <v-icon>mdi-phone</v-icon> <b class="red--text">0123456789</b></span>
            </v-toolbar> -->

    <!-- Responsive -->

    <v-app-bar app clipped-right flat height="72">
      <v-spacer>
        <v-row>
          <v-col cols="2" v-if="size.onsize >= 1111">
            <v-img max-height="40" max-width="170" src="../img/logo.jpg"></v-img>
          </v-col>

          <v-col cols="12" v-if="size.onsize < 1111">
            <v-img max-height="40" max-width="155" src="../img/logo.jpg" class="float-start" style="margin-left: -15px; !important"></v-img>
          </v-col>

          <v-col cols="10" v-if="size.onsize >= 1111">
            <v-btn style="font-size: 14px" text class="text-none" depressed v-for="item in menus" :key="item.name"
              @click="item.isDropdown ? clickMenu(item) : ''">
              <v-img width="20" :src="item.url"></v-img>
              <span class="ml-2"> {{ item.name }}</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-spacer>

      <v-responsive max-width="156" class="float-end">
        <v-btn color="var(--color-3)" outlined class="text-none font-weight-bold ml-10" dark>Đăng nhập</v-btn>
      </v-responsive>
      <v-app-bar-nav-icon v-if="size.onsize < 1111" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <XyzTransition xyz="fade-100%" v-if="size.onsize >= 1111">
      <v-app-bar app style="margin-top: 72px" height="420px" v-if="isShowMenu">
        <v-row>
          <v-col cols="3">
            <v-card class="change-color elevation-0" style="border-radius: 10px">
              <div class="pa-3">
                <v-sheet style="border-radius: 10px; cursor: pointer" @mouseover="moveMenu(item)" v-for="item in items"
                  :key="item.name" class="mt-3" :color="checkMenuLeft === item.name ? 'while' : 'transparent'">
                  <v-list dense style="border-radius: 10px" :color="checkMenuLeft === item.name ? 'while' : 'transparent'
                    ">
                    <v-list-item>
                      <v-list-item-avatar>
                        <img :src="item.url" :alt="item.name" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{
                          item.description
                        }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-sheet>
              </div>
            </v-card>
          </v-col>
          <v-col cols="9">
            <h4 v-if="value == 'sp'">Sản phẩm chính</h4>

            <div class="mt-5">
              <v-row>
                <v-col v-for="item in itemsSub" :key="item.name" cols="3">
                  <v-sheet style="border-radius: 10px; cursor: pointer" @mouseover="moveItemSub(item)" :color="checkMenuRight === item.name ? '#EDE7F6' : 'transparent'
                    ">
                    <div class="pa-2">
                      <v-row>
                        <v-col cols="2">
                          <img width="20" :src="item.url" :alt="item.name" />
                        </v-col>

                        <v-col>
                          <h5>{{ item.name }}</h5>
                          <p class="text--secondary" style="font-size: 12px !important">
                            {{ item.description }}
                          </p>
                        </v-col>
                      </v-row>
                    </div>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>
    </XyzTransition>

    <v-navigation-drawer v-model="drawer" absolute
      style="position: fixed; top: 0; z-index: 10; min-height: 0vh !important">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Trang chủ</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi mdi-archive">
          <template v-slot:activator>
            <v-list-item-title>Sản phẩm</v-list-item-title>
          </template>

          <v-list-group no-action sub-group v-for="item in itemTab" :key="item">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title><v-icon>{{ item.icon }}</v-icon> {{ item.title }}
                  <br />
                  <small mt-3 style="color: darkgray !important">
                    {{ item.description }}
                  </small>
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link>
              <div class="mt-5">
                <b class="ml-5">Dịch vụ chính</b>
                <v-row class="ma-0">
                  <v-col cols="12" md="12" v-for="item1 in item.subTab" :key="item1">
                    <div class="ml-6">
                      <v-icon>{{ item1.subIcon }}</v-icon>
                      <a>{{ item1.subTitle }}</a>
                      <br />
                      <small style="color: darkgray !important">
                        {{ item1.subDescription }}</small>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group prepend-icon="mdi mdi-store-cog" no-action>
          <template v-slot:activator>
            <v-list-item-title>Dịch vụ</v-list-item-title>
          </template>

          <v-list-item v-for="(item, index) in itemService" :key="index">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi mdi-face-agent</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Hỗ trợ</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-book-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Blog</v-list-item-title>
        </v-list-item>

        <v-list-item class="mt-2">
          <v-text-field append-icon="mdi-magnify" label="Tìm kiếm" outlined dense></v-text-field>
        </v-list-item>

        <v-list-item>
          <div class="wrap">
            <span><v-icon>mdi-phone</v-icon>
              <b class="red--text ml-2">0123456789</b></span>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Vue from "vue";

import home from "../assets/home-button.png";
import product from "../assets/new-product.png";
import service from "../assets/chatbot.png";
import blog from "../assets/blogger.png";
import seller from "../assets/best-seller.png";
import suport from "../assets/suport.png";

import p_email from "@/assets/email_p.png";
import p_software from "@/assets/software_p.png";
import p_account from "@/assets/account_p.png";
import p_other from "@/assets/other_p.png";

import gamil from "@/assets/gmail.png";
import hotmail from "@/assets/email.png";
import OutlookMail from "@/assets/OutlookMail.png";
import rumail from "@/assets/rumail.png";
import maildomain from "@/assets/maildomain.png";
import yahoo from "@/assets/yahoo.png";
import protonmain from "@/assets/protonmain.png";
import ortherMain from "@/assets/email_other.png";
import facebook from "@/assets/facebook.png";
import google from "@/assets/google.png";
import youtube from "@/assets/youtube.png";
import cryptocurrency from "@/assets/cryptocurrency.png";
import cad from "@/assets/cad.png";
import captcha from "@/assets/captcha.png";
import browser from "@/assets/browser.png";
import printing from "@/assets/3d-printing.png";
import layers from "@/assets/layers.png";

export default Vue.extend({
  name: "Home",
  props: ["size"],

  components: {},

  data() {
    return {
      checkMenuRight: "",
      checkMenuLeft: "",
      items: [],
      itemsSub: [],
      value: "",
      isShowMenu: false,
      menu: false,
      selectedItem: 1,
      drawer: false,
      product: false,
      tab: null,
      menus: [
        {
          value: "tc",
          name: "Trang chủ",
          isDropdown: false,
          url: home,
        },
        {
          value: "sp",
          name: "Sản phẩm",
          isDropdown: true,
          url: product,
          items: [
            {
              name: "Email",
              description:
                "Gmail, yahoo mail, hot mail... và nhiều hơn thế nữa",
              url: p_email,
              items: [
                {
                  name: "Gmail",
                  description:
                    "Gmail là một dịch vụ email miễn phí hỗ trợ quảng cáo do Google phát triển.",
                  url: gamil,
                },
                {
                  name: "HotMail",
                  description:
                    "Outlook.com là một bộ cơ sở dữ liệu web bao gồm các dịch vụ trang thư điện tử, sổ danh bạ, yêu cầu công việc, và lịch trình của công ty Microsoft.",
                  url: hotmail,
                },
                {
                  name: "OutlookMail",
                  description:
                    "Microsoft Outlook là một phần mềm quản lý thông tin cá nhân của Microsoft và là một phần của bộ ứng dụng Microsoft Office.",
                  url: OutlookMail,
                },
                {
                  name: "RuMail",
                  description:
                    "Mail.Ru Mail là ứng dụng tiện lợi và nhanh chóng để làm việc đồng thời với một số hộp thư của Mail.",
                  url: rumail,
                },
                {
                  name: "DomainMail",
                  description:
                    "Mail domain là một phần của địa chỉ email đứng sau ký hiệu @.",
                  url: maildomain,
                },
                {
                  name: "YahooMail",
                  description:
                    "Yahoo! Mail là một dịch vụ Email trên nền web của Yahoo!, là nhà cung cấp e-mail lớn nhất trên Internet, hiện đang phục vụ hàng triệu người dùng.",
                  url: yahoo,
                },
                {
                  name: "ProtonMail",
                  description:
                    "Proton Mail là dịch vụ email được mã hóa đầu cuối của Thụy Sĩ được thành lập vào năm 2013 có trụ sở tại Plan-les-Ouates, Thụy Sĩ.",
                  url: protonmain,
                },
                {
                  name: "Loại Mail Khác",
                  description: "Hơn 10.000 gmail dang có tại taisanso.com",
                  url: ortherMain,
                },
              ],
            },
            {
              name: "Phần mềm",
              description:
                "Các phần mềm chuyên dụng cho kiếm tiền online từ những coder uy tín",
              url: p_software,
              items: [
                {
                  name: "Phần Mềm FB",
                  description: "Các loại phần mềm hỗ trợ dành cho FB.",
                  url: facebook,
                },
                {
                  name: "Phần Mềm Google",
                  description: "Các loại phần mềm hỗ trợ dành cho Google.",
                  url: google,
                },
                {
                  name: "Phần Mềm Youtube",
                  description: "Các loại phần mềm hỗ trợ dành cho Youtube.",
                  url: youtube,
                },
                {
                  name: "Phần Mềm Tiền Ảo",
                  description: "Các loại phần mềm hỗ trợ dành cho Tiền Ảo.",
                  url: cryptocurrency,
                },
                {
                  name: "Phần Mềm PTC",
                  description: "Các loại phần mềm hỗ trợ dành cho PTC.",
                  url: cad,
                },
                {
                  name: "Phần Mềm Capcha",
                  description: "Các loại phần mềm hỗ trợ dành cho Capcha.",
                  url: captcha,
                },
                {
                  name: "Phần Mềm Offer",
                  description: "Các loại phần mềm hỗ trợ dành cho Offer.",
                  url: browser,
                },
                {
                  name: "Phần Mềm PTU",
                  description: "Các loại phần mềm hỗ trợ dành cho PTU.",
                  url: printing,
                },
                {
                  name: "Phần Mềm Khác",
                  description:
                    "Các loại phần mềm hỗ trợ dành cho phần mềm khác.",
                  url: layers,
                },
              ],
            },
            {
              name: "Tài khoản",
              description: "Fb, BM, key window, kaspersky....",
              url: p_account,
              items: [
                {
                  name: "Tài khoản FB",
                  description: "Các tài khoản FB.",
                  url: "https://muataikhoan.vn/wp-content/uploads/2022/10/facebook.svg",
                },
                {
                  name: "Tài Khoản BM",
                  description: "Các tài khoản BM.",
                  url: "https://muataikhoan.vn/wp-content/uploads/2023/08/cRWzjY.svg",
                },
                {
                  name: "Tài Khoản Zalo",
                  description: "Các tài khoản Zalo.",
                  url: youtube,
                },
                {
                  name: "Tài Khoản Twitter",
                  description: "Các tài khoản Twitter.",
                  url: cryptocurrency,
                },
                {
                  name: "Tài Khoản Telegram",
                  description: "Các tài khoản Telegram.",
                  url: cad,
                },
                {
                  name: "Tài Khoản Instagram",
                  description: "Các tài khoản Instagram.",
                  url: captcha,
                },
                {
                  name: "Tài Khoản Shopee",
                  description: "Các tài khoản Shopee.",
                  url: browser,
                },
                {
                  name: "Tài Khoản Discord",
                  description: "Các tài khoản Discord.",
                  url: printing,
                },
                {
                  name: "Tài khoản TikTok",
                  description: "Các tài khoản TikTok.",
                  url: layers,
                },
                {
                  name: "Key Diệt Virus",
                  description: "Các Key Diệt Virus",
                  url: layers,
                },
                {
                  name: "Key Window",
                  description: "Các Key Window.",
                  url: layers,
                },
                {
                  name: "Tài Khoản Khác",
                  description: "Các tài khoản khác.",
                  url: layers,
                },
              ],
            },
            {
              name: "Khác",
              description: "Các sản phẩm số khác",
              url: p_other,
              items: [
                {
                  name: "Tài khoản FB",
                  description: "Các tài khoản FB.",
                  url: "https://muataikhoan.vn/wp-content/uploads/2022/10/facebook.svg",
                },
                {
                  name: "Tài Khoản BM",
                  description: "Các tài khoản BM.",
                  url: "https://muataikhoan.vn/wp-content/uploads/2023/08/cRWzjY.svg",
                },
                {
                  name: "Tài Khoản Zalo",
                  description: "Các tài khoản Zalo.",
                  url: youtube,
                },
                {
                  name: "Tài Khoản Twitter",
                  description: "Các tài khoản Twitter.",
                  url: cryptocurrency,
                },
                {
                  name: "Tài Khoản Telegram",
                  description: "Các tài khoản Telegram.",
                  url: cad,
                },
                {
                  name: "Tài Khoản Instagram",
                  description: "Các tài khoản Instagram.",
                  url: captcha,
                },
                {
                  name: "Tài Khoản Shopee",
                  description: "Các tài khoản Shopee.",
                  url: browser,
                },
                {
                  name: "Tài Khoản Discord",
                  description: "Các tài khoản Discord.",
                  url: printing,
                },
                {
                  name: "Tài khoản TikTok",
                  description: "Các tài khoản TikTok.",
                  url: layers,
                },
                {
                  name: "Key Diệt Virus",
                  description: "Các Key Diệt Virus",
                  url: layers,
                },
                {
                  name: "Key Window",
                  description: "Các Key Window.",
                  url: layers,
                },
                {
                  name: "Tài Khoản Khác",
                  description: "Các tài khoản khác.",
                  url: layers,
                },
              ],
            },
          ],
        },
        {
          name: "Dịch vụ",
          isDropdown: false,
          url: service,
        },
        {
          name: "Blog",
          isDropdown: false,
          url: blog,
        },
        {
          name: "Bán hàng",
          isDropdown: false,
          url: seller,
        },
        {
          name: "Hỗ trợ",
          isDropdown: false,
          url: suport,
        },
      ],
      admins: [
        ["Management", "people_outline"],
        ["Settings", "settings"],
      ],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"],
      ],
      itemTab: [
        {
          title: "Email",
          icon: "mdi-email",
          description: "Kinh doanh với Email",
          subTab: [
            {
              subTitle: "Gmail USA",
              subDescription: "Kho 4000+ mail.",
              subIcon: "mdi-email-fast-outline",
            },
            {
              subTitle: "Hotmail",
              subDescription: "Kho 4000+ mail.",
              subIcon: "mdi-email-fast-outline",
            },
            {
              subTitle: "Gmail",
              subDescription: "Kho 4000+ mail.",
              subIcon: "mdi-email-fast-outline",
            },
            {
              subTitle: "Email theo Domain",
              subDescription: "Kho 4000+ mail.",
              subIcon: "mdi-email-fast-outline",
            },
          ],
        },
        {
          title: "Phần mềm",
          icon: "mdi-code-braces",
          description: "Quản lý kinh doanh, doanh nghiệp",
          subTab: [
            {
              subTitle: "Netflix",
              subDescription: "Cung cấp tài khoản vip.",
              subIcon: "mdi mdi-netflix",
            },
            {
              subTitle: "Tools",
              subDescription: "Chạy tool theo yêu cầu.",
              subIcon: "mdi-tools",
            },
          ],
        },
        {
          title: "Tài khoản",
          icon: "mdi-account",
          description: "Mua bán tài khoản",
          subTab: [
            {
              subTitle: "Facebook",
              subDescription: "Cung cấp tài khoản facebook ảo.",
              subIcon: "mdi-facebook",
            },
            {
              subTitle: "Google",
              subDescription: "Cung cấp tài khoản google ảo.",
              subIcon: "mdi-google",
            },
          ],
        },
        {
          title: "Internet",
          icon: "mdi-earth",
          description: "Hạ tầng lưu trữ, điện toán",
          subTab: [
            {
              subTitle: "Hosting",
              subDescription:
                "Cung cấp hosting dành riêng cho doanh nghiệp, giáo dục...",
              subIcon: "mdi-cloud-check-outline",
            },
            {
              subTitle: "Domain",
              subDescription:
                "Kiểm tra tên miền miễn phí, nhanh chóng chỉ với 3 giây có ngay domain chất lượng.",
              subIcon: "mdi mdi-web",
            },
            {
              subTitle: "Vps",
              subDescription:
                "Gói giải pháp hạ tầng dành riêng cho phát triển web, ứng dụng trên windows, linux.",
              subIcon: "mdi-server-minus-outline",
            },
          ],
        },
      ],
      itemService: [
        { title: "Làm phần mềm", icon: "mdi-xml" },
        { title: "Blockchain", icon: "mdi-hand-coin-outline" },
        { title: "Tăng tương tác", icon: "mdi-arrow-up" },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      let that = this;
      that.isShowMenu = !that.isShowMenu;
      that.items = item.items;
      that.checkMenuLeft = item.items[0].name;
      that.value = item.value;
      that.itemsSub = item.items[0].items;
    },
    async moveMenu(item) {
      let that = this;
      that.checkMenuLeft = item.name;
      that.itemsSub = item.items;
    },
    async moveItemSub(item) {
      let that = this;
      that.checkMenuRight = item.name;
    },
  },
});
</script>

<style scoped>
.tab {
  text-transform: none;
  margin-right: auto;
  display: inline-block;
}

.v-tabs--vertical>.v-tabs-bar .v-tab {
  height: 54px;
}

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: white;
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.v-application--wrap {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  /* min-height: 100vh; */
  max-width: 100%;
  position: relative;
}

.v-application--is-ltr .v-list-group--no-action>.v-list-group__items>.v-list-item {
  padding-left: 39px;
}

.wrap {
  height: 200px;
  width: 200px;
  margin: 10px;
  display: flex;
}

.wrap span {
  align-self: flex-end;
}

@keyframes menu {
  from {
    height: 0px;
  }

  to {
    height: 200px;
    background-color: blue;
  }
}

.change-color {
  width: 100%;
  height: 100%;
  animation: changeBackgroundColor 6s infinite;
}

@keyframes changeBackgroundColor {
  0% {
    background-color: #ffebee;
  }

  10% {
    background-color: #fce4ec;
  }

  20% {
    background-color: #f3e5f5;
  }

  30% {
    background-color: #ede7f6;
  }

  40% {
    background-color: #e8eaf6;
  }

  50% {
    background-color: #e3f2fd;
  }

  60% {
    background-color: #e1f5fe;
  }

  70% {
    background-color: #e0f7fa;
  }

  80% {
    background-color: #e0f2f1;
  }

  90% {
    background-color: #e8f5e9;
  }

  100% {
    background-color: #f1f8e9;
  }
}
</style>