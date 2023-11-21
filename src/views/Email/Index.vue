<template>
    <v-app app>
        <XyzTransition xyz="fade-100%">
            <div style="padding: 80px 50px 50px 50px;" v-if="size.onsize >= 1111">
                <v-row>
                    <v-col cols="12" md="4" lg="4">
                        <div class="filter">
                            <v-card class="mx-auto" max-width="350" outlined>
                                <v-list-item three-line>
                                    <v-list-item-description>
                                        <v-list-item-title class="text-h5 mt-5 mb-2 font-weight-bold">
                                            <v-icon size="30">mdi-filter</v-icon> Bộ lọc
                                        </v-list-item-title>

                                        <div style="border-bottom: 1px dashed"></div>

                                        <v-card-actions @click="show = !show" class="mt-2">
                                            <v-btn outlined color="blue">
                                                <div class="font-weight-bold">
                                                    Chọn 1 hoặc nhiều sản phẩm
                                                </div> <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>

                                        <v-expand-transition>
                                            <div class="ml-2 mb-3" v-show="show">
                                                <v-checkbox v-model="formEmail.value.gmail" label="Gmail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.hotMail" label="HotMail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.outlookMail" label="OutlookMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.ruMail" label="RuMail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.domainMail" label="DomainMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.yahooMail" label="YahooMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.protonMail" label="ProtonMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.othersMail" label="Loại Mail Khác"
                                                    color="blue" hide-details></v-checkbox>
                                            </div>
                                        </v-expand-transition>
                                    </v-list-item-description>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn class="white--text ml-4 mb-5" color="green">
                                        Tìm kiếm
                                    </v-btn>
                                </v-card-actions>
                            </v-card>

                            <v-card class="mx-auto mt-6 new" max-width="350" outlined>
                                <v-list-item three-line>
                                    <v-list-item-description>
                                        <v-list-item-title class="text-h5 mt-5 font-weight-bold mb-2">
                                            <v-icon size="30">mdi-pencil-box-multiple</v-icon> Bài viết tham khảo
                                        </v-list-item-title>

                                        <div style="border-bottom: 1px dashed"></div>
                                        <div class="container">
                                            <div class="blog-card-vertical" v-for="item in itemsBlog" :key="item.title">
                                                <div class="meta">
                                                    <div class="ribbon ribbon-victory">
                                                        <p class="pa-2 white--text">New</p>
                                                    </div>
                                                    <v-img class="photo" :src="item.img"></v-img>
                                                </div>
                                                <div class="description">
                                                    <h1>{{ item.title }}</h1>
                                                    <p class="mt-3 line mb-3"></p>
                                                    <span class="mt-2">
                                                        <v-icon size="20">mdi-eye-outline</v-icon> <b>{{ item.view }}</b>
                                                    </span>
                                                    <span class="mt-2 ml-2">
                                                        <v-icon size="20">mdi-thumb-up-outline</v-icon> <b> {{ item.like
                                                        }}</b>
                                                    </span>
                                                    <span class="mt-2 ml-2">
                                                        <v-icon size="20">mdi-comment-multiple-outline</v-icon> <b>{{
                                                            item.comment }}</b>
                                                    </span>
                                                    <br>
                                                    <div class="mt-1 font-weight-bold" style="font-size: 15px;">Người đăng:
                                                        <v-icon size="20">mdi-account-circle</v-icon><span
                                                            style="color: red;">
                                                            {{ item.author }}</span>
                                                    </div>
                                                    <p class="read-more">
                                                        <a href="#"><v-btn class="font-weight-bold" outlined small>Chi tiết
                                                                <v-icon size="18">mdi-arrow-right</v-icon></v-btn></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </v-list-item-description>
                                </v-list-item>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="12" md="8" lg="8">
                        <h2>Gian hàng email
                            <small><em>( Tổng <b class="red--text">{{ itemsEmail.length }}</b> gian hàng )</em></small>
                        </h2>

                        <v-tabs class="mt-3" color="deep-purple accent-4">
                            <v-tab style="text-transform: none;">
                                <v-icon left>
                                    mdi-fire
                                </v-icon>
                                Phổ biến
                            </v-tab>
                            <v-tab style="text-transform: none;">
                                <v-icon left>
                                    mdi-arrow-up
                                </v-icon>
                                Giá tăng dần
                            </v-tab>
                            <v-tab style="text-transform: none;">
                                <v-icon left>
                                    mdi-arrow-down
                                </v-icon>
                                Giá giảm dần
                            </v-tab>
                            <!--Tab 1-->
                            <v-tab-item>
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 2-->
                            <v-tab-item>
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 3-->
                            <v-tab-item>
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </v-col>
                </v-row>
            </div>

            <!--Responsive-->
            <div v-if="size.onsize < 1111">
                <v-row>
                    <v-col cols="12">
                        <div class="filter" style="padding: 50px 30px 0px 30px;">
                            <v-card class="mx-auto" outlined>
                                <v-list-item three-line>
                                    <v-list-item-description>
                                        <v-list-item-title class="text-h5 mt-5 mb-2 font-weight-bold">
                                            <v-icon size="30">mdi-filter</v-icon> Bộ lọc
                                        </v-list-item-title>

                                        <div style="border-bottom: 1px dashed"></div>

                                        <v-card-actions @click="show = !show" class="mt-2">
                                            <v-btn outlined color="blue">
                                                <div class="font-weight-bold">
                                                    Chọn 1 hoặc nhiều sản phẩm
                                                </div> <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                            </v-btn>
                                        </v-card-actions>

                                        <v-expand-transition>
                                            <div class="ml-2 mb-3" v-show="show">
                                                <v-checkbox v-model="formEmail.value.gmail" label="Gmail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.hotMail" label="HotMail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.outlookMail" label="OutlookMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.ruMail" label="RuMail" color="blue"
                                                    hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.domainMail" label="DomainMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.yahooMail" label="YahooMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.protonMail" label="ProtonMail"
                                                    color="blue" hide-details></v-checkbox>

                                                <v-checkbox v-model="formEmail.value.othersMail" label="Loại Mail Khác"
                                                    color="blue" hide-details></v-checkbox>
                                            </div>
                                        </v-expand-transition>
                                    </v-list-item-description>
                                </v-list-item>

                                <v-card-actions>
                                    <v-btn class="white--text ml-4 mb-5" color="green">
                                        Tìm kiếm
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="12">
                        <h3 style="padding: 0px 20px 0px 30px;">Gian hàng email
                            <small><em>( Tổng <b class="red--text">{{ itemsEmail.length }}</b> gian hàng )</em></small>
                        </h3>

                        <v-tabs class="mt-3" color="deep-purple accent-4" style="padding;left: 10px">
                            <v-tab style="text-transform: none; font-size: 12px;">
                                <v-icon>
                                    mdi-fire
                                </v-icon>
                                Phổ biến
                            </v-tab>
                            <v-tab style="text-transform: none; font-size: 12px;">
                                <v-icon>
                                    mdi-arrow-up
                                </v-icon>
                                Giá tăng dần
                            </v-tab>
                            <v-tab style="text-transform: none; font-size: 12px;">
                                <v-icon>
                                    mdi-arrow-down
                                </v-icon>
                                Giá giảm dần
                            </v-tab>
                            <!--Tab 1-->
                            <v-tab-item style="padding: 0px 20px 0px 20px;">
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 2-->
                            <v-tab-item style="padding: 0px 20px 0px 20px;">
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 3-->
                            <v-tab-item style="padding: 0px 20px 0px 20px;">
                                <v-card flat>
                                    <div class="mb-6 mt-6 word-wrap">
                                        <em>Đối với gian hàng không trùng, chúng tôi cam kết sản phẩm được bán ra 1
                                            lần
                                            duy
                                            nhất trên hệ
                                            thống, tránh trường hợp sản phẩm đó được bán nhiều lần.</em>
                                    </div>

                                    <div class="blog-item pa-2" v-for="item in itemsEmail" :key="item.title">
                                        <a href="#">
                                            <div class="icon">
                                                <img :src="item.img" height="150" width="160" alt="">
                                                <v-rating class="mt-3" :value="item.rating" color="yellow darken-3"
                                                    background-color="grey darken-1" empty-icon="$ratingFull"
                                                    half-increments hover small></v-rating>
                                                <div
                                                    style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                                    <v-icon size="20">mdi-account</v-icon>Người đăng: <b>{{ item.seller
                                                    }}</b>
                                                </div>
                                            </div>
                                            <div class="description">
                                                <div class="title">
                                                    <div v-if="item.donors == true">
                                                        <v-chip class="ma-1" color="#FFD600" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-star
                                                            </v-icon>
                                                            Tài trợ
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                    <div v-if="item.donors == false">
                                                        <v-chip class="ma-1" color="black" label text-color="white"
                                                            style="font-size: 12px">
                                                            <v-icon left>
                                                                mdi-label
                                                            </v-icon>
                                                            Sản phẩm
                                                        </v-chip> {{ item.title }} <span class="blog-date">{{ item.price
                                                        }}</span>
                                                    </div>
                                                </div>

                                                <div style="font-size: 14px">
                                                    <div class="mt-1">Sản phẩm: <b style="font-size: 16px">{{
                                                        item.productName
                                                    }}</b> | Tồn
                                                        kho: <b style="color: red; font-size: 17px">{{ item.amount }}</b>
                                                        <div><b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                                        </div>


                                                    </div>
                                                </div>

                                                <div class="rounded"></div>

                                                <span v-html="item.description"></span>
                                            </div>

                                            <div class="item-arrow">
                                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </v-col>
                    <v-col cols="12">
                        <div style="padding: 0px 30px 0px 30px;">
                            <v-card class="mx-auto new" max-width="350" outlined>
                                <v-list-item three-line>
                                    <v-list-item-description>
                                        <v-list-item-title class="text-h5 mt-5 font-weight-bold mb-2">
                                            <v-icon size="30">mdi-pencil-box-multiple</v-icon> Bài viết tham khảo
                                        </v-list-item-title>

                                        <div style="border-bottom: 1px dashed"></div>
                                        <div class="container">
                                            <div class="blog-card-vertical" v-for="item in itemsBlog" :key="item.title">
                                                <div class="meta">
                                                    <div class="ribbon ribbon-victory">
                                                        <p class="pa-2 white--text">New</p>
                                                    </div>
                                                    <v-img class="photo" :src="item.img"></v-img>
                                                </div>
                                                <div class="description">
                                                    <h1>{{ item.title }}</h1>
                                                    <p class="mt-3 line mb-3"></p>
                                                    <span class="mt-2">
                                                        <v-icon size="20">mdi-eye-outline</v-icon> <b>{{ item.view }}</b>
                                                    </span>
                                                    <span class="mt-2 ml-2">
                                                        <v-icon size="20">mdi-thumb-up-outline</v-icon> <b> {{ item.like
                                                        }}</b>
                                                    </span>
                                                    <span class="mt-2 ml-2">
                                                        <v-icon size="20">mdi-comment-multiple-outline</v-icon> <b>{{
                                                            item.comment }}</b>
                                                    </span>
                                                    <br>
                                                    <div class="mt-1 font-weight-bold" style="font-size: 15px;">Người đăng:
                                                        <v-icon size="20">mdi-account-circle</v-icon><span
                                                            style="color: red;">
                                                            {{ item.author }}</span>
                                                    </div>
                                                    <p class="read-more">
                                                        <a href="#"><v-btn class="font-weight-bold" outlined small>Chi tiết
                                                                <v-icon size="18">mdi-arrow-right</v-icon></v-btn></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </v-list-item-description>
                                </v-list-item>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </XyzTransition>
    </v-app>
</template>

<script lang="ts">
export default {
    name: "Index",
    props: ["size"],
    data: () => ({
        show: true,
        formEmail: {
            value: {
                gmail: '',
                hotMail: '',
                outlookMail: '',
                ruMail: '',
                domainMail: '',
                yahooMail: '',
                protonMail: '',
                othersMail: '',
            },
        },
        itemsBlog: [
            {
                title: 'Buid X twitter được và mất ở góc nhìn khách quan',
                img: 'https://taphoammo.net/img/post/buid-x-twitter-uoc-va-mat-o-goc-nhin-khach-quan_917480.png',
                author: 'abc',
                view: '1K',
                like: 0,
                comment: 0,
            },
            {
                title: 'Tut kháng dưới 18 tuổi tiktok mới',
                img: 'https://taphoammo.net/img/post/tut-khang-duoi-18-tuoi-tiktok-moi_803456.png',
                author: 'abc',
                view: 123,
                like: 0,
                comment: 0,
            },
            {
                title: 'MỞ CÔNG KHAI BÀI VIẾT TRÊN FACEBOOK',
                img: 'https://taphoammo.net/img/post/mo-cong-khai-bai-viet-truoc-khi-buff-like-cam-xuc-va-binh-luan_673062.png',
                author: 'abc',
                view: 500,
                like: 0,
                comment: 0,
            },
            {
                title: 'Cách lên TÍCH XANH FACEBOOK và cách LÁCH THUẾ HÀNG THÁNG',
                img: 'https://taphoammo.net/img/post/cach-len-tich-xanh-facebook-va-cach-lach-thue-hang-thang_393232.png',
                author: 'abc',
                view: '1.3K',
                like: 0,
                comment: 0,
            },
        ],
        itemsEmail: [
            {
                title: 'Gmail 2019 2021 đã qua Premium . 6 - 7 tháng',
                img: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg',
                rating: '4.5',
                amount: 4540,
                price: '5.000 đ - 8.000 đ',
                review: '14',
                sold: ' 96562',
                complain: '0.0%',
                seller: 'ronboyngok',
                productName: 'Gmail',
                description: '<li>Gmail 2019 2021 đã qua Premium . 6 - 7 tháng .max trâu</ li ><br><li>Kinh doanh: Gmail IOS IP US.NGÂM TRÊN 30 NGÀY(REG GOOGLE VOICE) | Gmail IOS IP US.NGÂM 15 NGÀY. | Gmail 2023 đã qua Premium. 6 - 7 tháng | Gmail 2023 đã qua Premium. 6 - 8 tháng | GMAIL NGÂM 6 - 8 THÁNG.RANDOM QUA PRE</ li >',
                donors: true,
                overlap: false,
            },
            {
                title: 'Gmail USA - Gmail Mỹ số lượng lớn',
                img: 'https://taphoammo.net/img/gmail-usa-gmail-my-so-luong-lon_720513773.png',
                rating: '5',
                amount: 1706,
                price: '5.000 đ - 8.000 đ',
                review: '10',
                sold: '4835',
                complain: '0.0%',
                seller: 'salegmail',
                productName: 'Gmail',
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
            {
                title: 'Gmail PC / IOS - USA đã trên 7 - 30 ngày',
                img: 'https://taphoammo.net/img/gmail-ios-pc-a-tren-3-5-ngay47.png',
                rating: '5',
                amount: 200,
                price: '2.000 đ - 7.000 đ',
                review: '10',
                sold: '4835',
                complain: '0.0%',
                seller: 'salegmail',
                productName: 'Gmail',
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
            {
                title: 'Gmail NEW iOS Us và Ngoại. Chỉ bán min 30 cái',
                img: 'https://taphoammo.net/img/gmail-ngoai-new-ios-random-ip-ngam-tren-14_728121551.png',
                rating: '5',
                amount: 667,
                price: '5.000 đ - 18.000 đ',
                review: '10',
                sold: '4835',
                complain: '0.0%',
                seller: 'salegmail',
                productName: 'Gmail',
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
            {
                title: 'HOTMAIL Live vĩnh viễn / bật full POP3 + IMAP / Không cần veri bằng sđt',
                img: 'https://taphoammo.net/img/hotmail-live-vinh-vien-bat-full-pop3-imap-khong-can-veri-bang-s-t_432172254.png',
                rating: '4',
                amount: 119,
                price: '5.000 đ - 8.000 đ',
                review: '10',
                sold: '4835',
                complain: '0.0%',
                seller: 'salegmail',
                productName: 'Gmail',
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
            {
                title: 'OUTLOCK TRUSTED - Live vĩnh viễn - Full POP3 + IMAP',
                img: 'https://taphoammo.net/img/outlock-trusted-live-vinh-vien-full-pop3-imap_839770.png',
                rating: '0',
                amount: 271,
                price: '5.000 đ - 8.000 đ',
                review: '10',
                sold: '4835',
                complain: '0.0%',
                seller: 'salegmail',
                productName: 'Gmail',
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
        ]
    }),
}
</script>

<style lang="scss" scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&subset=latin-ext');

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-items: center;
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);
}

.filter {
    .v-btn {
        text-transform: none;
    }
}

.blog-card-vertical {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    max-width: 250px;
    margin-bottom: 35px;

    a {
        color: inherit;
    }

    &:hover .photo {
        transform: scale(1.3) rotate(3deg);
    }

    .meta {
        position: relative;
        z-index: 0;
        height: 150px;
    }

    .photo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        transition: transform 0.2s;
    }

    .description {
        padding: 1rem;
        background: ghostwhite;
        position: relative;
        z-index: 1;

        span {
            font-size: 15px;
        }

        h1 {
            line-height: 1;
            margin: 0;
            font-size: 15px;
            color: #000;
        }

        .read-more {
            text-align: right;
        }
    }

    p {
        position: relative;
        margin: 1rem 0 0;
        color: #a2a2a2;
    }

    p:first-of-type {
        margin-top: 1.25rem;
    }

    &:hover .details {
        left: 0%;
    }

    .line {
        border-bottom: 5px solid blue;
        width: 68px;
        border-radius: 4px;
    }
}

.ribbon {
    z-index: 1001;
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 4px;
    color: #957422;
    background: #ffe9aa;
    font-size: .64rem;
    font-weight: bold;
    line-height: 2;
}

.ribbon-victory {
    color: #fff;
    background: green;
}

.ribbon::after {
    description: " ";
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1000;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 4px 0;
}

.blog-item img {
    display: block;
}

.blog-item a {
    display: flex;
    padding: 20px;
    overflow: hidden;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    color: #333;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    border-radius: 6px;
    margin-bottom: 50px;
    text-decoration: none;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.blog-item a:hover {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.blog-item .icon {
    width: 30%;
    object-fit: cover;
    border-radius: 6px;
    overflow: hidden;
}

.blog-item .description {
    width: 70%;
}

.blog-item .description span {
    font-size: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.blog-item .description .title {
    text-transform: capitalize;
    color: #29B6F6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}

.blog-item .description .title:hover {
    color: red;
}

.blog-item .description .title .blog-date {
    font-size: 15px;
    margin-left: 11px;
    color: #333;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
}

.blog-item .description .title .blog-date:before {
    description: '/';
    color: #2bb673;
    font-size: 25px;
    top: auto;
    position: relative;
    margin-right: 10px;
}

.blog-item .description .rounded {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}

.blog-item .item-arrow {
    height: 20px;
    width: 15%;
    position: relative;
    text-align: center;
    font-size: 35px;
    left: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.blog-item a:hover>.item-arrow {
    color: #25aae1;
    left: 30px;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
}

.rounded {
    width: 70px;
    height: 5px;
    border-radius: 6px;
    background-image: linear-gradient(to right, #25aae1, #40e495);
    /* background: #2bb769; */
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}

@media screen and (max-width: 768px) {

    .blog-item .description {
        width: 100%;
        margin-top: 35px;
    }

    .blog-item .description .title {
        font-size: 18px;
    }

    .blog-item .item-arrow {
        margin: auto;
    }

    .blog-item .icon {
        width: 100%;
    }

    .blog-item .icon img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }

    .blog-item {
        width: 92%;
        margin: auto;
    }

    .blog-item a {
        display: block;
        padding: 30px;
    }
}

.word-wrap {
    word-wrap: break-word !important;
    border: 1px solid green;
    color: green;
    font-size: 13px;
    padding: 6px;
    border-radius: 5px;
    text-align: center;
}
</style>
