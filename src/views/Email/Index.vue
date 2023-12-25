<template>
    <v-app app>
        <XyzTransition xyz="fade-100%">
            <div style="padding: 80px 50px 50px 50px;" v-if="size.onsize >= 1111">
                <div class="mb-2">
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        Gmail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        HotMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        OutlookMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        RuMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        DomainMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        YahooMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        ProtonMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        Loại Mail Khác
                    </v-btn>
                </div>
                <h2 class="ml-2 mt-4">Gian hàng email
                    <small><em>( Tổng <b class="red--text">{{ itemsEmail.length }}</b> gian hàng )</em></small>
                </h2>

                <v-tabs color="deep-purple accent-4">
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
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="3">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!--Tab 2-->
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="3">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!--Tab 3-->
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="3">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs>
            </div>

            <!--Responsive-->
            <div style="padding: 80px 20px 50px 20px;" v-if="size.onsize < 1111">
                <div class="mb-2">
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        Gmail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        HotMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        OutlookMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        RuMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        DomainMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        YahooMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        ProtonMail
                    </v-btn>
                    <v-btn class="ma-2 font-weight-bold" outlined color="indigo">
                        Loại Mail Khác
                    </v-btn>
                </div>
                <h2 class="ml-2 mt-4">Gian hàng email
                    <small><em>( Tổng <b class="red--text">{{ itemsEmail.length }}</b> gian hàng )</em></small>
                </h2>

                <v-tabs color="deep-purple accent-4">
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
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="4" lg="4" sm="6">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!--Tab 2-->
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="4" lg="4" sm="6">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                    <!--Tab 3-->
                    <v-tab-item class="email">
                        <v-row class="pa-0">
                            <v-col v-for="item in itemsEmail" :key="item.title" cols="12" md="4" lg="4" sm="6">
                                <div class="card-list">
                                    <article class="card">
                                        <figure class="card-image">
                                            <img :src="item.img" height="180" width="180" alt=""
                                                style="border-radius:  10px;">
                                        </figure>
                                        <div class="mt-4 font-weight-bold">{{ item.title }}</div>
                                        <div class="card-header mt-4">
                                            <a href="#">{{ item.price }}</a>
                                            <div class="discount">Hot</div>
                                        </div>
                                        <div class="mt-2 description">
                                            <li>Playstation 4 | Playstation 5</li>
                                            <li>Thẻ nạp tiền tài khoản PSN US</li>
                                        </div>
                                        <div class="card-footer">
                                            <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4"
                                                dense half-increments hover size="18"></v-rating>
                                            <i>{{ item.view }} lượt xem</i>
                                        </div>
                                    </article>
                                </div>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs>
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
                view: 1230,
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
                view: 1230,
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
                view: 1230,
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
                view: 1230,
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
                view: 1230,
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
                view: 1230,
                description: ' <li>Gmail USA Name chuẩn, bảo hành 1 đổi 1. Reg Google Voice, chưa qua dịch vụ. Lấy nhiều giảm giá</li><li>Kinh doanh: Gmail USA (Mỹ) 7 ngày + reg Google Voice | Gmail Canada (CA) 7 ngày | Gmail Anh (UK) 7 ngày</li>',
                donors: false,
                overlap: true,
            },
        ]
    }),
}
</script>

<style lang="scss" scoped>
.email {
    font-family: 'Muli', sans-serif;
    line-height: 1.5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    padding: 25px;
    font-size: 15px;

    .card-list {
        max-width: 100%;
        width: 100%;
    }

    .card {
        background-color: #FFF;
        box-shadow: 0 0 0 1px rgba(#000, .05), 0 20px 50px 0 rgba(#000, .1);
        border-radius: 15px;
        overflow: hidden;
        padding: 1.25rem;
        position: relative;
        transition: .15s ease-in;

        &:hover,
        &:focus-within {
            box-shadow: 0 0 0 2px #16C79A, 0 10px 60px 0 rgba(#000, .1);
            transform: translatey(-5px);
        }
    }

    .card-image {
        border-radius: 10px;
        overflow: hidden;
        background-size: cover;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        a {
            color: #bf081f;
            font-weight: bold;
            line-height: 1.25;
            padding-right: 1rem;
            text-decoration: none;
            will-change: transform;

            &:after {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
            }
        }


    }

    .discount {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
        position: relative;
        display: inline-block;
        background: #bf081f;
        width: auto;
        height: 30px;
        line-height: 32px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        padding: 0 17px;
    }

    .discount:after {
        content: " ";
        height: 22px;
        width: 22px;
        background: #bf081f;
        position: absolute;
        top: 4px;
        left: -9px;
        border-radius: 4px;
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .discount:before {
        content: "";
        width: 7px;
        height: 7px;
        background: #fff;
        position: absolute;
        top: 12px;
        left: 0px;
        z-index: 1;
        border-radius: 10px;
    }

    .description {
        font-size: 14px;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
        border-top: 1px solid #ddd;
        padding-top: 0.5rem;
        flex-wrap: wrap;
        font-size: 15px;
    }
}
</style>