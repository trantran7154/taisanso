<template>
    <v-app app>
        <XyzTransition xyz="fade-100%">
            <div v-if="size.onsize >= 1111">
                <div class="card" v-for="item in itemsEmail" :key="item.title">
                    <v-row>
                        <v-col cols="3" md="3" lg="3">
                            <img class="hset" :src="item.img">
                        </v-col>
                        <v-col cols="9" md="9" lg="9">
                            <div v-if="item.donors == true">
                                <v-chip color="#FFD600" label text-color="white" style="font-size: 12px">
                                    <v-icon left>
                                        mdi-star
                                    </v-icon>
                                    Tài trợ
                                </v-chip>
                            </div>

                            <div v-if="item.donors == false">
                                <v-chip color="black" label text-color="white" style="font-size: 12px">
                                    <v-icon left>
                                        mdi-label
                                    </v-icon>
                                    Sản phẩm
                                </v-chip>
                            </div>

                            <p class="title mt-3">{{ item.title }}</p>
                            <v-rating :value="item.rating" color="yellow darken-3" background-color="grey darken-1"
                                empty-icon="$ratingFull" half-increments hover></v-rating>
                            <div class="ml-2" style="font-size: 17px">
                                <div class="mt-1 d-flex">
                                    <b>{{ item.review }}</b> Reviews | Đã bán:
                                    <b class="mr-1">{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                </div>
                            </div>

                            <p class="offer-info ml-3">{{ item.content }}</p>

                            <v-divider class="mb-4" width="500"></v-divider>

                            <div class="ml-3" style="font-size: 15px;">
                                <p><v-icon>mdi-account-circle</v-icon> Người đăng: <b>{{ item.seller }}</b></p>
                                <p><v-icon>mdi-tag</v-icon> Sản phẩm: <b>{{ item.productName }}</b></p>
                                <p><v-icon>mdi-storefront</v-icon> Kho: <b>{{ item.amount }}</b></p>
                            </div>

                            <p class="price mt-2 ml-3 red--text">{{ item.price }}</p>

                            <v-divider class="mb-4" width="500"></v-divider>

                            <b class="ml-2">SẢN PHẨM</b>
                            <br>
                            <div class="ma-2 word-wrap" color="green" outlined style="width: 400px">
                                Gmail random IP 7 ngày++ email|pass|recovery|geo
                            </div>
                            <div class="ma-2 word-wrap" color="green" outlined style="width: 400px">
                                Gmail Mỹ, 7 ngày+, reg GGVoice email|pass|recovery
                            </div>
                            <div class="ma-2 word-wrap" color="green" outlined style="width: 400px">
                                Gmail random IP 1 tháng ++ email|pass|recovery|geo
                            </div>
                            <div class="ma-2 word-wrap" color="green" outlined style="width: 400px">
                                Gmail USA (Mỹ) , 7 ngày email|pass|recover
                            </div>

                            <div class="wrapper mt-6 ml-2 mb-3">
                                <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button"
                                    style="border-left:  1px solid #EEEEEE;">
                                    -
                                </button>
                                <input class="quantity font-weight-medium" type="text" name="name" :value="counter">
                                <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button"
                                    style="border-right:  1px solid #EEEEEE;">
                                    +
                                </button>
                            </div>

                            <div class="mt-4 ml-2">
                                <v-text-field append-icon="mdi-sale-outline" placeholder="Nhập mã giảm giá" outlined dense
                                    style="width: 200px;"></v-text-field>
                            </div>

                            <button href="#" onclick="showAlert('Product added to cart!')" class="buy-btn"><v-icon
                                    color="white">mdi-cart-outline</v-icon> Mua hàng</button>
                            <br>
                            <button class="add-to-wl-btn" onclick="showAlert('Product added to your Wishlist!')">
                                <v-icon color="#000">mdi-cart-arrow-down</v-icon> Đặt trước</button>

                            <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                <v-icon color="#000">mdi-send-outline</v-icon> Nhắn tin</button>


                            <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                <v-icon color="#000">mdi-handshake-outline</v-icon> Đăng ký reseller</button>
                        </v-col>
                    </v-row>
                    <!--Tab-->
                    <div style="padding: 70px 150px 30px 0px;">
                        <v-tabs color="deep-purple accent-4">
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <span class="ml-2">Mô tả</span>
                            </v-tab>
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <v-icon>mdi-comment-text-multiple-outline</v-icon><span class="ml-2">Review</span>
                            </v-tab>
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <span class="ml-2">API</span>
                            </v-tab>
                            <!--Tab 1-->
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <span v-html="item.description" style="font-size: 16px"></span>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 2-->
                            <v-tab-item>
                                <div v-for="(item, i) in 5" :key="i">
                                    <v-card class="pa-5 d-flex" flat>
                                        <v-avatar width="80" height="80">
                                            <img src="https://taphoammo.net/images/avatars/user.svg">
                                        </v-avatar>
                                        <div class="ml-5">
                                            <div class="d-flex">
                                                <b class="green--text ml-2 mr-auto">abc</b>
                                            </div>
                                            <v-rating value="5" background-color="yellow" color="yellow"></v-rating>
                                            <p class="ml-2">Sản phẩm chuẩn chất lượng. Hỗ trợ nhiệt tình.</p>
                                        </div>
                                        <p class="ml-auto" style="font-style: italic; color: #BDBDBD">28/09/2022</p>
                                    </v-card>
                                    <v-divider></v-divider>
                                </div>
                            </v-tab-item>
                            <!--Tab 3-->
                            <v-tab-item>
                                <div class="ml-5 mt-3" v-if="item.api == false">
                                    <h3 class="font-weight-bold green--text">Mua hàng bằng API:</h3>
                                    <p class="mt-2">Bạn chưa kích hoạt sử dụng API, nếu bạn chắc chắn muốn sử dụng tính năng
                                        này,
                                        hãy vào mục thông tin cá nhân (profile) để active !</p>
                                </div>
                            </v-tab-item>
                        </v-tabs>
                    </div>
                </div>
            </div>

            <!--Responsive-->
            <div v-if="size.onsize < 1111">
                <div class="card-res" v-for="item in itemsEmail" :key="item.title">
                    <v-row>
                        <v-col cols="12" md="12" lg="12">
                            <img class="hset" :src="item.img">
                        </v-col>
                        <v-col cols="12" md="12" lg="12">
                            <div v-if="item.donors == true">
                                <v-chip color="#FFD600" label text-color="white" style="font-size: 12px">
                                    <v-icon left>
                                        mdi-star
                                    </v-icon>
                                    Tài trợ
                                </v-chip>
                            </div>

                            <div v-if="item.donors == false">
                                <v-chip color="black" label text-color="white" style="font-size: 12px">
                                    <v-icon left>
                                        mdi-label
                                    </v-icon>
                                    Sản phẩm
                                </v-chip>
                            </div>

                            <p class="title mt-3">{{ item.title }}</p>
                            <v-rating :value="item.rating" color="yellow darken-3" background-color="grey darken-1"
                                empty-icon="$ratingFull" half-increments hover></v-rating>
                            <div class="ml-2" style="font-size: 17px">
                                <div class="mt-1 d-flex">
                                    <b>{{ item.review }}</b> Reviews | Đã bán:
                                    <b class="mr-1">{{ item.sold }}</b> | Khiếu nại: <b>{{ item.complain }}</b>
                                </div>
                            </div>

                            <p class="offer-info ml-3">{{ item.content }}</p>

                            <v-divider class="mb-4" width="500"></v-divider>

                            <div class="ml-3" style="font-size: 15px;">
                                <p><v-icon>mdi-account-circle</v-icon> Người đăng: <b>{{ item.seller }}</b></p>
                                <p><v-icon>mdi-tag</v-icon> Sản phẩm: <b>{{ item.productName }}</b></p>
                                <p><v-icon>mdi-storefront</v-icon> Kho: <b>{{ item.amount }}</b></p>
                            </div>

                            <p class="price mt-2 ml-3 red--text">{{ item.price }}</p>

                            <v-divider class="mb-4" width="500"></v-divider>

                            <b class="ml-2">SẢN PHẨM</b>
                            <br>
                            <v-chip class="ma-2 word-wrap" color="green" outlined>
                                Gmail random IP 7 ngày++ email|pass|recovery|geo
                            </v-chip>
                            <v-chip class="ma-2 word-wrap" color="green" outlined>
                                Gmail Mỹ, 7 ngày+, reg GGVoice email|pass|recovery
                            </v-chip>
                            <v-chip class="ma-2 word-wrap" color="green" outlined>
                                Gmail random IP 1 tháng ++ email|pass|recovery|geo
                            </v-chip>
                            <v-chip class="ma-2 word-wrap" color="green" outlined>
                                Gmail USA (Mỹ) , 7 ngày email|pass|recover
                            </v-chip>

                            <div class="wrapper mt-6 ml-2 mb-3">
                                <button class="btn btn--minus" @click="changeCounter('-1')" type="button" name="button"
                                    style="border-left:  1px solid #EEEEEE;">
                                    -
                                </button>
                                <input class="quantity font-weight-medium" type="text" name="name" :value="counter">
                                <button class="btn btn--plus" @click="changeCounter('1')" type="button" name="button"
                                    style="border-right:  1px solid #EEEEEE;">
                                    +
                                </button>
                            </div>

                            <div class="mt-4 ml-2">
                                <v-text-field append-icon="mdi-sale-outline" placeholder="Nhập mã giảm giá" outlined dense
                                    style="width: 200px;"></v-text-field>
                            </div>

                            <button href="#" onclick="showAlert('Product added to cart!')" class="buy-btn"><v-icon
                                    color="white">mdi-cart-outline</v-icon> Mua hàng</button>
                            
                            <br>
                            
                            <div class="d-flex">
                                <button class="add-to-wl-btn" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-cart-arrow-down</v-icon> Đặt trước</button>

                                <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-send-outline</v-icon> Nhắn tin</button>


                                <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-handshake-outline</v-icon> Đăng ký reseller</button>
                            </div>
                        </v-col>
                    </v-row>
                    <!--Tab-->
                    <div style="padding: 30px 10px 30px 10px;">
                        <v-tabs color="deep-purple accent-4">
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <span class="ml-2">Mô tả</span>
                            </v-tab>
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <v-icon>mdi-comment-text-multiple-outline</v-icon><span class="ml-2">Review</span>
                            </v-tab>
                            <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                <span class="ml-2">API</span>
                            </v-tab>
                            <!--Tab 1-->
                            <v-tab-item>
                                <v-card flat>
                                    <v-card-text>
                                        <span v-html="item.description" style="font-size: 16px"></span>
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                            <!--Tab 2-->
                            <v-tab-item>
                                <div v-for="(item, i) in 5" :key="i">
                                    <v-card class="mt-5 ml-5 d-flex" flat>
                                        <v-avatar width="80" height="80">
                                            <img src="https://taphoammo.net/images/avatars/user.svg">
                                        </v-avatar>
                                        <div class="ml-5">
                                            <div class="d-flex">
                                                <b class="green--text ml-2 mr-auto">abc</b>
                                            </div>
                                            <v-rating value="5" background-color="yellow" color="yellow"></v-rating>
                                            <p class="ml-2">Sản phẩm chuẩn chất lượng. Hỗ trợ nhiệt tình.</p>
                                        </div>
                                    </v-card>
                                    <p class="text-end" style="font-style: italic; color: #BDBDBD">28/09/2022</p>
                                    <v-divider></v-divider>
                                </div>
                            </v-tab-item>
                            <!--Tab 3-->
                            <v-tab-item>
                                <div class="ml-5 mt-3" v-if="item.api == false">
                                    <h3 class="font-weight-bold green--text">Mua hàng bằng API:</h3>
                                    <p class="mt-2">Bạn chưa kích hoạt sử dụng API, nếu bạn chắc chắn muốn sử dụng tính năng
                                        này,
                                        hãy vào mục thông tin cá nhân (profile) để active !</p>
                                </div>
                            </v-tab-item>
                        </v-tabs>
                    </div>
                </div>
            </div>
        </XyzTransition>
    </v-app>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Details",
    props: ["size"],
    data: () => ({
        counter: 1,
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
                content: 'Gmail ngoại iOS, random IP, đã ngâm đủ 14 ngày',
                description: '<li>Gmail 2019 2021 đã qua Premium . 6 - 7 tháng .max trâu</ li ><br><li>Kinh doanh: Gmail IOS IP US.NGÂM TRÊN 30 NGÀY(REG GOOGLE VOICE) | Gmail IOS IP US.NGÂM 15 NGÀY. | Gmail 2023 đã qua Premium. 6 - 7 tháng | Gmail 2023 đã qua Premium. 6 - 8 tháng | GMAIL NGÂM 6 - 8 THÁNG.RANDOM QUA PRE</ li >',
                donors: true,
                overlap: false,
                api: false,
                itemsProduct: ['Gmail random IP 7 ngày++ email|pass|recovery|geo', 'Gmail Mỹ, 7 ngày+, reg GGVoice email|pass|recovery', 'Gmail random IP 1 tháng ++ email|pass|recovery|geo', 'Gmail USA (Mỹ) , 7 ngày email|pass|recover']
            },
        ]
    }),
    methods: {
        changeCounter: function (num: any) {
            this.counter += +num
            console.log(this.counter)
            !isNaN(this.counter) && this.counter > 0 ? this.counter : this.counter = 0;

        }
    },
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.card {
    border-radius: 18px;
    background: #fff;
    position: inherit;
    padding: 80px 50px 50px 200px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-res {
    border-radius: 18px;
    background: #fff;
    position: inherit;
    padding: 50px 10px 30px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.hset {
    width: 100%;
}

.hset:hover {
    animation: jello-diagonal .9s linear both;
    cursor: pointer;
}

@keyframes jello-diagonal {
    0% {
        transform: skew(0deg 0deg)
    }

    30% {
        transform: skew(25deg 25deg)
    }

    40% {
        transform: skew(-15deg, -15deg)
    }

    50% {
        transform: skew(15deg, 15deg)
    }

    65% {
        transform: skew(-5deg, -5deg)
    }

    75% {
        transform: skew(5deg, 5deg)
    }

    100% {
        transform: skew(0deg 0deg)
    }
}

@keyframes shake-horizontal {

    0%,
    100% {
        transform: translateX(0)
    }

    10%,
    30%,
    50%,
    70% {
        transform: translateX(-10px)
    }

    20%,
    40%,
    60% {
        transform: translateX(10px)
    }

    80% {
        transform: translateX(8px)
    }

    90% {
        transform: translateX(-8px)
    }
}

.title {
    font-size: 28px !important;
    font-weight: 600;
}

.price {
    font-weight: 600;
    font-size: 38px;
}

.price:hover {
    animation: shake-horizontal 0.8s linear both;
    cursor: pointer;
}

@keyframes shake-horizontal {

    0%,
    100% {
        transform: translateX(0)
    }

    10%,
    30%,
    50%,
    70% {
        transform: translateX(-10px)
    }

    20%,
    40%,
    60% {
        transform: translateX(10px)
    }

    80% {
        transform: translateX(8px)
    }

    90% {
        transform: translateX(-8px)
    }
}

.offer-info {
    color: #86878c;
    font-size: 18px;
}

.buy-btn {
    background: #4787e9;
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 12px 140px;
    border-radius: 5px;
    box-shadow: 0px 5px 0px #1e56f1;
    transition: .3s ease;
    border: none;
    font-family: 'Poppins';
    padding: 12px 140px;
    margin-top: 10px;
}

.buy-btn:hover {
    background: #3c7ad8;
    box-shadow: 0px 3px 0px #1e56f1;
    cursor: pointer;
    transform: scale(0.95);
}

.buy-btn:active {
    transform: scale(0.9);
}

.add-to-wl-btn {
    transition: .3s ease;
    padding: 12px 18px 12px 18px;
    background: #fff;
    border: 1px solid #c1c1c1;
    border-radius: 6px;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: bold;
    margin-top: 30px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.add-to-wl-btn:hover {
    cursor: pointer;
    background: #4787e9;
    color: #fff;
    transform: scale(0.95);
}

.add-to-wl-btn .icon:hover {
    color: #fff;
}

.add-to-cart-btn:active,
.add-to-wl-btn:active {
    transform: scale(0.92);
}

.wrapper {
    height: 40px;
    display: flex;
}

.quantity {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 50px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
    border: 1px solid #E1E8EE;
}

.btn {
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    width: 40px;
    cursor: pointer;
}

.btn:hover {
    font-size: 20px;
    font-weight: bold;
}

button:focus,
input:focus {
    outline: 0;
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