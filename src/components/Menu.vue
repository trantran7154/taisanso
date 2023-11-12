<template>
    <div class="topnav">
        <div id="myTopnav">
            <a href="#home"><v-img max-height="30" max-width="150" style="background-size: cover !important;"
                    src="../img/logo.jpg"></v-img>
            </a>
            <a href="#news">
                <v-btn text>
                    Trang chủ
                </v-btn>
            </a>
            <a href="#contact">
                <v-menu class="dropdown" open-on-hover offset-y>
                    <template v-slot:activator="{ on, attrs }">
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
            </a>
            <a href="#about">
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
            </a>
            <a href="#">
                <v-btn text>
                    Hỗ trợ
                </v-btn>
            </a>
            <a href="#">
                <v-btn text>
                    Blog
                </v-btn>
            </a>
            <a href="javascript:void(0);" class="icon">
                <v-icon class="mr-3">mdi-magnify</v-icon>
                <v-icon @click="myFunction()">mdi-menu</v-icon>
            </a>
        </div>
        <a class="ma-1" style="color: black;">|</a>
        <a href="#">
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </a>
        <a href="#" class="ma-1 mr-5" style="float:right">
            <v-icon>mdi-phone</v-icon> <b class="red--text">0123456789</b>
        </a>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Home',

    components: {
    },

    data() {
        return {
            menu: false,
            selectedItem: 1,
            active: false,
            isShow: false,
            drawer: false,
            tab: null,
            items: [
                'web', 'shopping', 'videos', 'images', 'news',
            ],
            itemTab: [
                {
                    title: 'Email', icon: 'mdi-email', description: 'Kinh doanh với Email',
                    subTab: [
                        { subTitle: 'Gmail USA', subDescription: 'Kho 4000+ mail.', subIcon: 'mdi-email-fast-outline' },
                        { subTitle: 'Hotmail', subDescription: 'Kho 4000+ mail.', subIcon: 'mdi-email-fast-outline' },
                        { subTitle: 'Gmail', subDescription: 'Kho 4000+ mail.', subIcon: 'mdi-email-fast-outline' },
                        { subTitle: 'Email theo Domain', subDescription: 'Kho 4000+ mail.', subIcon: 'mdi-email-fast-outline' },
                    ]
                },
                {
                    title: 'Phần mềm', icon: 'mdi-code-braces', description: 'Quản lý kinh doanh, doanh nghiệp',
                    subTab: [
                        { subTitle: 'Netflix', subDescription: 'Cung cấp tài khoản vip.', subIcon: 'mdi mdi-netflix' },
                        { subTitle: 'Tools', subDescription: 'Chạy tool theo yêu cầu.', subIcon: 'mdi-tools' },
                    ]
                },
                {
                    title: 'Tài khoản', icon: 'mdi-account', description: 'Mua bán tài khoản',
                    subTab: [
                        {
                            subTitle: 'Facebook', subDescription: 'Cung cấp tài khoản facebook ảo.', subIcon: 'mdi-facebook'
                        },
                        { subTitle: 'Google', subDescription: 'Cung cấp tài khoản google ảo.', subIcon: 'mdi-google' },
                    ]
                },
                {
                    title: 'Internet', icon: 'mdi-earth', description: 'Hạ tầng lưu trữ, điện toán',
                    subTab: [
                        { subTitle: 'Hosting', subDescription: 'Cung cấp hosting dành riêng cho doanh nghiệp, giáo dục...', subIcon: 'mdi-cloud-check-outline' },
                        { subTitle: 'Domain', subDescription: 'Kiểm tra tên miền miễn phí, nhanh chóng chỉ với 3 giây có ngay domain chất lượng.', subIcon: 'mdi mdi-web' },
                        { subTitle: 'Vps', subDescription: 'Gói giải pháp hạ tầng dành riêng cho phát triển web, ứng dụng trên windows, linux.', subIcon: 'mdi-server-minus-outline' },
                    ]
                },
            ],
            itemService: [
                { title: 'Làm phần mềm', icon: 'mdi-xml' },
                { title: 'Blockchain', icon: 'mdi-hand-coin-outline' },
                { title: 'Tăng tương tác', icon: 'mdi-arrow-up' },
            ]
        }
    },
    methods: {
        myFunction() {
            var x: any = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
    }
})
</script>

<style scoped>
.topnav {
    overflow: hidden;
}

.topnav a {
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav .icon {
    display: none;
}

@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {
        display: none;
    }

    .topnav a.icon {
        float: right;
        display: block;
    }
}

@media screen and (max-width: 600px) {
    .topnav.responsive {
        position: relative;
    }

    .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}

.tab {
    text-transform: none;
    margin-right: auto;
    display: inline-block;
}

.v-tabs--vertical>.v-tabs-bar .v-tab {
    height: 54px;
}
</style>