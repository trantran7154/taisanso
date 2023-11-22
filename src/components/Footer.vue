<template>
    <footer class="footer">
        <v-row style="padding: 50px 0px 50px 60px;">
            <v-col cols="12" md="3" v-for="(item, i) in itemFooter" :key="i">
                <ul class="footer__nav">
                    <li class="nav__item">
                        <b style="color: blue">{{ item.title }}</b>
                        <div class="mt-1">
                            <ul class="nav__ul" v-for="(items, j) in item.footerSub" :key="j">
                                <li>
                                    <a href="#">{{ items.subTitle }}</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </v-col>
            <v-col cols="12" md="3">
                <ul class="footer__nav">
                    <li class="nav__item">
                        <b style="color: blue">Liên hệ</b>
                        <div class="mt-1">
                            <ul class="nav__ul">
                                <li>
                                    <a href="#"><v-icon>mdi-email</v-icon> Email</a>
                                    <br>
                                    <small class="font-weight-bold">taisanso@gmail.com</small>
                                </li>
                                <li>
                                    <a href="#"><v-icon>mdi-map-marker</v-icon> Địa chỉ</a>
                                    <br>
                                    <small class="font-weight-bold">5534 Somewhere In. The World 22193-10212</small>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </v-col>
        </v-row>

        <div class="d-flex legal">
            <div class="mr-auto">
                <div class="d-flex pa-2 ml-5">
                    <p class="mt-3">&copy; All rights reserved </p>
                    <v-img src="../img/logo.jpg" style="background-size: cover; height: 50px; width: 180px;"></v-img>
                </div>
            </div>

            <div class="pa-2">
                <div class="legal__links pa-2">
                    <v-btn text class="text-capitalize">Điều khoản</v-btn>
                    <v-btn class="mx-2" fab dark small outlined color="primary">
                        <v-icon dark>
                            mdi-facebook
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small outlined color="primary">
                        <v-icon dark>
                            mdi-linkedin
                        </v-icon>
                    </v-btn>
                    <v-btn class="mx-2" fab dark small outlined color="primary">
                        <v-icon dark>
                            mdi-youtube
                        </v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Footer',

    data() {
        return {
            itemFooter: [
                {
                    title: 'Về TaiSanSo',
                    footerSub: [
                        { subTitle: 'Giới thiệu về TaiSanSo' },
                        { subTitle: 'Dự án thành công' },
                        { subTitle: 'Sự thành công của TaiSanSo' },
                        { subTitle: 'Khách hàng' },
                        { subTitle: 'Tuyển dụng' },
                        { subTitle: 'Liên hệ' },
                        { subTitle: 'Blog' },
                        { subTitle: 'Bản tin TaiSanSo' },
                    ]
                },
                {
                    title: 'Giải pháp website',
                    footerSub: [
                        { subTitle: 'Đăng ký tên miền' },
                        { subTitle: 'Thiết Kế Website Chuyên Nghiệp' },
                        { subTitle: 'Web Hosting' },
                        { subTitle: 'Mua SSL cho website' },
                        { subTitle: 'Đăng ký website với Bộ Công Thương' },
                        { subTitle: 'Quản trị website' },
                        { subTitle: 'Content Marketing cho Website' },
                        { subTitle: 'Website tính năng cao cấp' },
                        { subTitle: 'Mẫu Website' },
                    ]
                },
                {
                    title: 'Giải pháp Marketing Online',
                    footerSub: [
                        { subTitle: 'Dịch SEO' },
                        { subTitle: 'Dịch vụ Digital Marketing' },
                        { subTitle: 'Content Marketing' },
                        { subTitle: 'Thiết kế Landing Page' },
                    ]
                },
                {
                    title: 'Hosting / VPS / Server',
                    footerSub: [
                        { subTitle: 'Đăng Ký Tên Miền' },
                        { subTitle: 'Hosting Cao Cấp' },
                        { subTitle: 'Thuê Máy Chủ' },
                        { subTitle: 'Cloud VPS' },
                        { subTitle: 'LMS Cloud' },
                        { subTitle: 'Email Doanh Nghiệp' },
                        { subTitle: 'Video Protect Solution' },
                        { subTitle: 'Chuyển dữ liệu Hosting' },
                    ]
                },
                {
                    title: 'Giải pháp quản lý',
                    footerSub: [
                        { subTitle: 'Hệ thống LMS – cho trung tâm giáo dục' },
                        { subTitle: 'Hệ thống NHTQ – cho Nhập hàng Trung Quốc' },
                        { subTitle: 'Lập trình Web App theo yêu cầu' },
                        { subTitle: 'Thiết kế App Mobile' },
                    ]
                },
            ]
        }
    }
})
</script>

<style scoped>
body {
    font-family: acumin-pro, system-ui, sans-serif;
    margin: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-size: 14px;
    background-color: #f4f4f4;
    align-items: start;
    min-height: 100vh;
}

.footer {
    flex-flow: row wrap;
    color: #2f2f2f;
    background-color: #fff;
    border-top: 1px solid #e5e5e5;
}

.footer>* {
    flex: 1 100%;
}

.nav__title {
    font-weight: 400;
    font-size: 15px;
}

.footer ul {
    list-style: none;
    padding-left: 0;
}

.footer li {
    line-height: 2em;
}

.footer a {
    text-decoration: none;
    font-size: 14px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer__nav {
    display: flex;
    flex-flow: row wrap;
}

.footer__nav>* {
    flex: 1 50%;
    margin-right: 1.25em;
}

.nav__ul a {
    color: #999;
}

.legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
    border-top: 1px dashed;
}

.legal__links {
    display: flex;
    align-items: center;
}

.heart {
    color: #2f2f2f;
}

@media screen and (min-width: 24.375em) {
    .legal .legal__links {
        margin-left: auto;
    }
}

@media screen and (min-width: 40.375em) {
    .footer__nav>* {
        flex: 1;
    }

    .footer__addr {
        flex: 1 0px;
    }

    .footer__nav {
        flex: 2 0px;
    }
}
</style>