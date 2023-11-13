<template>
    <div class="taisanso">
        <v-app app>
            <v-toolbar style="position: fixed; top: 0; width: 100%; z-index: 10;">
                <v-img max-height="40" max-width="170" src="../img/logo.jpg"></v-img>
                <v-spacer></v-spacer>
                <v-icon @click="drawer = true" class="ma-2 d-flex d-sm-none">mdi-magnify</v-icon>
                <v-icon @click="drawer = true" class="ma-2 d-flex d-sm-none" size="30">mdi-menu</v-icon>
            </v-toolbar>
            <v-toolbar class="d-none d-sm-flex" screen and above rounded tile
                style="position: fixed; top: 0; width: 100%; z-index: 10; padding: 0px 130px">
                <v-toolbar-title> <v-img max-height="50" max-width="200" src="../img/logo.jpg"></v-img></v-toolbar-title>
                <v-toolbar-items>
                    <v-menu class="dropdown" justify-center open-on-hover offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn text>
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
                <span class="ml-9"> <v-icon>mdi-phone</v-icon> <b class="red--text">0123456789</b></span>
            </v-toolbar>
            <!-- Responsive -->
            <!-- <v-navigation-drawer v-model="drawer" absolute
                style="position: fixed; top: 0; z-index: 10; min-height: 0vh !important;">
                <v-list nav dense>
                    <v-list-item-group>
                        <v-list-item>
                            <v-list-item-title>Trang chủ</v-list-item-title>
                        </v-list-item>
                        <v-list-item-title>
                                <v-list-group value="true">
                                    <template v-slot:activator>
                                        <v-list-tile-title> Sản phẩm</v-list-tile-title>
                                    </template>
                                    <v-list-item>
                                        <v-list-item-title>Trang chủ</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title>Trang chủ</v-list-item-title>
                                    </v-list-item>
                                </v-list-group>
                            </v-list-item-title>
                        <v-list-item>
                            <v-list-item-title>Dịch vụ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Hỗ trợ</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Blog</v-list-item-title>
                        </v-list-item>
                        <v-text-field append-icon="mdi-magnify" label="Tìm kiếm" outlined dense></v-text-field>
                        <v-spacer></v-spacer>
                        <v-list-item>
                            <v-icon>mdi-phone</v-icon> <b class="red--text ml-2">0123456789</b>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer> -->
            <v-navigation-drawer v-model="drawer" absolute
                style="position: fixed; top: 0; z-index: 10; min-height: 0vh !important;">
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
                                        <small mt-3 style="color: darkgray !important;">
                                            {{ item.description }}
                                        </small>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </template>
                            <v-list-item link>
                                <v-row>
                                    <v-col md="12" cols="12" v-for="item1 in item.subTab" :key="item1">
                                        <div class="mt-3 ml-3">
                                            <v-icon>{{ item1.subIcon }}</v-icon> <a>{{ item1.subTitle }}</a>
                                            <br>
                                            <small style="color: darkgray !important;"> {{ item1.subDescription
                                            }}</small>
                                        </div>
                                    </v-col>
                                </v-row>
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
                            <span><v-icon>mdi-phone</v-icon> <b class="red--text ml-2">0123456789</b></span>
                        </div>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
            <!-- Responsive -->
        </v-app>
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
            drawer: false,
            product: false,
            tab: null,
            admins: [
                ['Management', 'people_outline'],
                ['Settings', 'settings']
            ],
            cruds: [
                ['Create', 'add'],
                ['Read', 'insert_drive_file'],
                ['Update', 'update'],
                ['Delete', 'delete']
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
    }
})
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
    box-shadow: none;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: white;
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: none;
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

.wrap {
  height: 200px;
  width: 200px;
  margin: 10px;
  display: flex;
}

.wrap span {
  align-self: flex-end;
}
</style>