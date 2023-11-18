<template>
    <v-app app>
        <div style="padding: 30px 50px 50px 50px;">
            <v-row>
                <v-col cols="12" md="4" lg="4">
                    <div class="filter">
                        <v-card class="mx-auto" max-width="350" outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5 mb-2 font-weight-bold">
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

                                            <v-checkbox v-model="formEmail.value.domainMail" label="DomainMail" color="blue"
                                                hide-details></v-checkbox>

                                            <v-checkbox v-model="formEmail.value.yahooMail" label="YahooMail" color="blue"
                                                hide-details></v-checkbox>

                                            <v-checkbox v-model="formEmail.value.protonMail" label="ProtonMail" color="blue"
                                                hide-details></v-checkbox>

                                            <v-checkbox v-model="formEmail.value.othersMail" label="Loại Mail Khác"
                                                color="blue" hide-details></v-checkbox>
                                        </div>
                                    </v-expand-transition>
                                </v-list-item-content>
                            </v-list-item>

                            <v-card-actions>
                                <v-btn class="white--text ml-4 mb-5" color="green">
                                    Tìm kiếm
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <v-card class="mx-auto mt-6 new" max-width="350" outlined>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h5 font-weight-bold mb-2">
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
                                                <span class="mt-2"><v-icon size="20">mdi-eye-outline</v-icon> <b>{{
                                                    item.view }}</b></span>
                                                <span class="mt-2 ml-2"><v-icon size="20">mdi-thumb-up-outline</v-icon>
                                                    <b>{{ item.like
                                                    }}</b></span> <span class="mt-2 ml-2"><v-icon
                                                        size="20">mdi-comment-multiple-outline</v-icon> <b>{{ item.comment
                                                        }}</b></span>
                                                <br>
                                                <div class="mt-1 font-weight-bold" style="font-size: 15px;">Người đăng:
                                                    <v-icon size="20">mdi-account-circle</v-icon><span style="color: red;">
                                                        {{ item.author }}</span>
                                                </div>
                                                <p class="read-more">
                                                    <a href="#"><v-btn class="font-weight-bold" outlined small>Chi tiết
                                                            <v-icon size="18">mdi-arrow-right</v-icon></v-btn></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </div>
                </v-col>
                <v-col cols="12" md="8" lg="8">
                    <div class="section is-primary">
                        <h2>Gian hàng email
                            <small><em>( Tổng 560 gian hàng )</em></small>
                        </h2>

                        <div class="container">
                            <div v-for="item in itemsEmail" :key="item.title">
                                <div class="blog-card" v-if="item.donors == true">
                                    <div class="image-wrapper">
                                        <div class="ribbon ribbon-victory" v-if="item.overlap == false">
                                            <div class="pa-2 white--text"
                                                style="font-size: 11px; background-color: black; border-bottom-right-radius: 5px;">
                                                Không trùng</div>
                                        </div>
                                        <div class="ribbon ribbon-victory" v-if="item.overlap == true">
                                            <div class="pa-2 white--text"
                                                style="font-size: 11px; background-color: black; border-bottom-right-radius: 5px;">
                                                Trùng lặp</div>
                                        </div>
                                        <v-img class="image" :src="item.img"></v-img>
                                    </div>

                                    <div class="description">
                                        <h1 class="title">{{ item.title }}</h1>
                                        <span style="font-size: 14px"> <v-rating :value="item.rating"
                                                color="yellow darken-3" background-color="grey darken-1"
                                                empty-icon="$ratingFull" half-increments hover small></v-rating> <b>{{
                                                    item.review }}</b> Reviews | Đã bán:
                                            <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b></span>

                                        <p></p>

                                        <div v-html="item.description" style="font-size: 15px; margin-top: 30px"></div>

                                        <div class="mt-2">
                                            <v-btn style="text-transform: none" class="font-weight-bold" color="#FFAB00"
                                                outlined small><v-icon color="#FFAB00" size="18">mdi-star</v-icon> Tài
                                                trợ</v-btn>
                                        </div>

                                        <div class="card-actions mt-2">
                                            <a href="#" class="font-weight-bold">
                                                <v-btn class="font-weight-bold" outlined small>Xem thêm <v-icon
                                                        size="16">mdi-arrow-right</v-icon></v-btn>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style="padding: 0px 70px 0px 70px">
                                <v-row>
                                    <v-col cols="12" md="12" lg="12" v-for="item in itemsEmail" :key="item.title">
                                        <div v-if="item.donors == false">
                                            <div class="blog-card">
                                                <div class="image-wrapper">
                                                    <div class="ribbon ribbon-victory" v-if="item.overlap == false">
                                                        <div class="pa-2 white--text"
                                                            style="font-size: 11px; background-color: black; border-bottom-right-radius: 5px;">
                                                            Không trùng</div>
                                                    </div>
                                                    <div class="ribbon ribbon-victory" v-if="item.overlap == true">
                                                        <div class="pa-2 white--text"
                                                            style="font-size: 11px; background-color: black; border-bottom-right-radius: 5px;">
                                                            Trùng lặp</div>
                                                    </div>
                                                    <v-img class="image" :src="item.img"></v-img>
                                                </div>

                                                <div class="description">
                                                    <h1 class="title">{{ item.title }}</h1>
                                                    <span style="font-size: 14px"> <v-rating :value="item.rating"
                                                            color="yellow darken-3" background-color="grey darken-1"
                                                            empty-icon="$ratingFull" half-increments hover small></v-rating>
                                                        <b>{{
                                                            item.review }}</b> Reviews | Đã bán:
                                                        <b>{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain
                                                        }}</b></span>

                                                    <p></p>

                                                    <div v-html="item.description"
                                                        style="font-size: 14px; margin-top: 30px">
                                                    </div>

                                                    <div class="mt-2" v-if="item.donors == true">
                                                        <v-btn style="text-transform: none" class="font-weight-bold"
                                                            color="#FFAB00" outlined small><v-icon color="#FFAB00"
                                                                size="18">mdi-star</v-icon> Tài
                                                            trợ</v-btn>
                                                    </div>

                                                    <div class="card-actions mt-2">
                                                        <a href="#" class="font-weight-bold">
                                                            <v-btn class="font-weight-bold mt-2" outlined small>Xem thêm <v-icon
                                                                    size="16">mdi-arrow-right</v-icon></v-btn>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-app>
</template>

<script lang="ts">
export default {
    data: () => ({
        show: false,
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
    content: " ";
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1000;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 5px 4px 0;
}

.blog-card {
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.4;
    border-radius: 10px;
    overflow: hidden;
    z-index: 0;
}

.blog-card a {
    color: inherit;
}

.blog-card a:hover {
    color: #5ad67d;
}

.blog-card .image-wrapper {
    position: relative;
    z-index: 0;
    height: 200px;
}

.blog-card .image-wrapper .image::before {
    content: "Xem Chi Tiết";
    height: 100%;
    width: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(181, 181, 181, 0.3);
    transition: all 0.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    cursor: pointer;
    font-weight: bold;
}

.blog-card .image-wrapper .image:hover::before {
    opacity: 1;
}

.blog-card .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
}

.blog-card .details,
.blog-card .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
}

.blog-card .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left 0.2s;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    width: 100%;
    font-size: 0.9rem;
}

.blog-card .details a {
    text-decoration: dotted underline;
}

.blog-card .details ul li {
    display: inline-block;
}

.blog-card .details .author:before {
    font-family: FontAwesome;
    margin-right: 10px;
    content: "";
}

.blog-card .details .date:before {
    font-family: FontAwesome;
    margin-right: 10px;
    content: "";
}

.blog-card .details .tags ul:before {
    font-family: FontAwesome;
    content: "";
    margin-right: 10px;
}

.blog-card .details .tags li {
    margin-right: 2px;
}

.blog-card .details .tags li:first-child {
    margin-left: -4px;
}

.blog-card .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
}

.blog-card .description:before {
    content: "";
    border-radius: 10px;
    background: #fff;
    width: 100%;
    position: absolute;
    top: -10px;
    left: 0;
    bottom: 0;
    z-index: -1;
}


.blog-card .description h1 {
    line-height: 1;
    margin: 0;
    font-size: 19px;
}

.blog-card .description h2 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
}

.blog-card .description .card-actions {
    float: right;
    font-size: 16px;
}

.blog-card .description .card-actions a {
    display: inline-block;
    position: relative;
    text-decoration: none;
}

.blog-card .description .card-actions .v-btn {
    text-transform: none;
}

.blog-card p {
    position: relative;
    margin: 1rem 0 0;
}

.blog-card p:first-of-type {
    margin-top: 1.25rem;
}

.blog-card p:first-of-type:before {
    content: "";
    position: absolute;
    height: 5px;
    background: #5ad67d;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
    text-align: left;
    height: 3px;
    border-radius: 50px;
    background: #d52623;
}

.blog-card:hover .details {
    left: 0%;
}

@media (min-width: 640px) {
    .blog-card {
        flex-direction: row;
    }

    .blog-card .image-wrapper {
        flex-basis: 40%;
        height: auto;
    }

    .blog-card .description {
        flex-basis: 60%;
    }

    .blog-card .description .title:hover {
        color: blue;
    }

    .blog-card .description:before {
        content: "";
        border-radius: 10px;
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
    }

    .blog-card.alt {
        flex-direction: row-reverse;
    }

    .blog-card.alt .description:before {
        left: inherit;
        right: -10px;
    }

    .blog-card.alt .details {
        padding-left: 25px;
    }
}
</style>
