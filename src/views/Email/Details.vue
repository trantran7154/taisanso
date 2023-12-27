<template>
    <v-app app>
        <XyzTransition xyz="fade-100%">
            <div style="padding: 80px 50px 50px 50px;" v-if="size.onsize >= 1111">
                <div v-for="item in itemsEmail" :key="item.title">
                    <v-row>
                        <v-col cols="12" md="3">
                            <!-- <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="items in item.image" :key="items" :src="items.src">
                                </v-carousel-item>
                            </v-carousel> -->

                            <div class="slider">
                                <input type="radio" name="slide_switch" id="id1" checked="checked" />
                                <label for="id1">
                                    <img src="https://vietplayplus.com/api/public/files/SanPham_YTB12_3Ed4OXXz8.jpg"
                                        width="50" height="50" style="border-radius: 6px;" />
                                </label>
                                <img src="https://vietplayplus.com/api/public/files/SanPham_YTB12_3Ed4OXXz8.jpg"
                                    width="100%" height="280" />

                                <input type="radio" name="slide_switch" id="id2" />
                                <label for="id2">
                                    <img src="https://taphoammo.net/img/student-store_984702383.png" width="50" height="50"
                                        style="border-radius: 6px;" />
                                </label>
                                <img src="https://taphoammo.net/img/student-store_984702383.png" width="100%"
                                    height="280" />

                                <input type="radio" name="slide_switch" id="id3" />
                                <label for="id3">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i6MvHVGGcaSRoCqgeGrPXcNTmVyDhck2wg&usqp=CAU"
                                        width="50" height="50" style="border-radius: 6px;" />
                                </label>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0i6MvHVGGcaSRoCqgeGrPXcNTmVyDhck2wg&usqp=CAU"
                                    width="100%" height="280" />

                                <input type="radio" name="slide_switch" id="id4" />
                                <label for="id4">
                                    <img src="https://tech-haat.com/wp-content/uploads/2023/05/Copy-of-1-Month-10.png"
                                        width="50" height="50" style="border-radius: 6px;" />
                                </label>
                                <img src="https://tech-haat.com/wp-content/uploads/2023/05/Copy-of-1-Month-10.png"
                                    width="100%" height="280" />
                            </div>
                        </v-col>

                        <v-col cols="12" md="6">
                            <div class="card">
                                <p class="title">{{ item.title }}</p>

                                <div class="offer-info mt-2 mb-2">{{ item.content }}</div>

                                <div class="d-flex">
                                    <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4" dense
                                        half-increments hover size="18"></v-rating>
                                    <a href="#" class="ml-2 mt-1" style="text-decoration: none; font-size: 17px;">
                                        ( <b>{{ item.review }}</b> đánh giá )
                                    </a>
                                </div>

                                <div class="ml-1 sold">
                                    <div class="mt-1 d-flex">
                                        <div>Đã bán:
                                            <b class="ml-1">{{ item.sold }}</b>
                                        </div>
                                        <div class="ml-2">|</div>
                                        <div class="ml-2">Khiếu nại: <b>{{ item.complain }}</b></div>
                                    </div>
                                </div>

                                <div class="ml-1 mt-3 d-flex">
                                    <div class="mt-2" style="font-size: 16px;">Giá bán:</div>
                                    <div class="price ml-5 red--text">{{ item.price }}</div>
                                </div>

                                <div class="ml-1 d-flex status"> <span style="font-size: 16px;">Trạng thái:</span>
                                    <b v-if="item.status == true" class="success--text ml-5">Còn hàng</b>
                                    <b v-else class="error--text ml-5">Hết hàng</b>
                                </div>

                                <div class="mt-4 info-email" style="font-size: 15px;">
                                    <div><v-icon>mdi-account-circle</v-icon> Người đăng: <b class="ml-2">{{ item.seller
                                    }}</b>
                                    </div>
                                    <div class="mt-2"><v-icon>mdi-tag</v-icon> Sản phẩm: <b class="ml-2">{{ item.productName
                                    }}</b>
                                    </div>
                                    <div class="mt-2 mb-2"><v-icon>mdi-storefront</v-icon> Kho: <b class="ml-2">{{
                                        item.amount
                                    }}</b>
                                    </div>
                                </div>

                                <div class="mt-6" style="color: #000; border: 1px solid #f1f1f1;">
                                    <div class="text-left text-h6"
                                        style="background-color: #f1f1f1; padding: 10px 20px 10px 20px;">
                                        THÔNG TIN
                                    </div>
                                    <div style="padding: 20px; font-size: 15px;">
                                        <li>Tài khoản sẽ gửi qua email và được hiển thị trong phần thanh toán của bạn.
                                        </li>
                                        <li><a href="#">Hướng dẫn thanh toán và nhận tài khoản</a></li>
                                    </div>
                                </div>

                                <v-row class="pa-0 mt-4">
                                    <v-col cols="12" md="6">
                                        <div class="d-flex ml-1 btn-check">
                                            <v-checkbox class="ml-2" color="success" hide-details
                                                style="margin-top: -3px !important;"></v-checkbox> Gmail random IP 7
                                            ngày++ email|pass|recovery|geo
                                        </div>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <div class="d-flex ml-1 btn-check">
                                            <v-checkbox class="ml-2" color="success" hide-details
                                                style="margin-top: -3px !important;"></v-checkbox> Gmail Mỹ, 7 ngày+,
                                            reg
                                            GGVoice
                                            email|pass|recovery
                                        </div>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <div class="d-flex ml-1 btn-check">
                                            <v-checkbox class="ml-2" color="success" hide-details
                                                style="margin-top: -3px !important;"></v-checkbox> Gmail random IP 1
                                            tháng
                                            ++
                                            email|pass|recovery|geo
                                        </div>
                                    </v-col>

                                    <v-col cols="12" md="6">
                                        <div class="d-flex ml-1 btn-check">
                                            <v-checkbox class="ml-2" color="success" hide-details
                                                style="margin-top: -3px !important;"></v-checkbox> Gmail USA (Mỹ) , 7
                                            ngày
                                            email|pass|recover
                                        </div>
                                    </v-col>
                                </v-row>

                                <div class="wrapper mt-6 ml-1    mb-3">
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

                                <div class="mt-4 ml-1">
                                    <v-text-field append-icon="mdi-sale-outline" placeholder="Nhập mã giảm giá" outlined
                                        dense style="width: 200px;"></v-text-field>
                                </div>

                                <button href="#" onclick="" class="buy-btn ml-1"><v-icon
                                        color="white">mdi-cart-outline</v-icon> Mua hàng</button>
                            </div>
                        </v-col>

                        <v-col cols="12" md="3">
                            <v-card outlined class="pa-3"
                                style="font-size: 15px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                <span><v-icon color="#6200ea" size="20">mdi-check-decagram-outline</v-icon> Bảo hành:
                                    <b>6 tháng</b></span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-arrow-u-left-bottom</v-icon> 1 đổi 1 nếu thẻ bị
                                    lỗi</span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-facebook</v-icon> Fanpage: <span
                                        class="blue--text">@taisanso</span></span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-phone</v-icon> <i>Địa chỉ: 123A, Phường 7,
                                        Phú
                                        Nhuận,
                                        TPHCM</i>
                                    <br>
                                    <div style="font-size: 14px;">Hotline: 0903.199.997 (09:00 - 20:00)</div>
                                </span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-check-decagram-outline</v-icon> Hoàn tiền
                                    <b>100%</b> nếu tài khoản không sử dụng được</span>
                            </v-card>

                            <button class="add-to-wl-btn ml-3" onclick="">
                                <v-icon color="#000">mdi-cart-arrow-down</v-icon> Đặt trước</button>

                            <button class="add-to-wl-btn mr-3 float-right" onclick="">
                                <v-icon color="#000">mdi-send-outline</v-icon> Nhắn tin</button>

                            <button class="add-to-wl-btn ml-3" onclick="">
                                <v-icon color="#000">mdi-handshake-outline</v-icon> Đăng ký reseller</button>
                        </v-col>
                    </v-row>

                    <v-divider style="margin-top: 50px; padding-bottom: 8px;"></v-divider>

                    <div class="mt-7" style="color: #7f8c8d;">
                        <v-row>
                            <v-col cols="12" md="8">
                                <h3 class="mb-3 black--text" style="text-transform: uppercase;">GIỚI THIỆU SẢN PHẨM {{
                                    item.title }}
                                </h3>

                                <span v-html="item.description" style="font-size: 15px;"></span>

                                <v-divider style="margin-top: 50px; padding-bottom: 15px;"></v-divider>

                                <h3 class="mb-3 black--text">Bạn cũng sẽ thích <v-chip class="ma-1" label>
                                        4
                                    </v-chip></h3>

                                <v-row>
                                    <v-col cols="3" v-for="(item, i) in 4" :key="i">
                                        <v-card>
                                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>

                                            <div class="pa-3">
                                                <div style="font-size: 17px; font-weight: bold">
                                                    Gmail 2019 2021 đã qua Premium
                                                </div>
                                                <div class="mt-2 error--text" style="font-size: 14px; font-weight: bold">
                                                    5.000 đ - 8.000 đ
                                                </div>
                                            </div>
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-divider style="margin-top: 50px; padding-bottom: 15px;"></v-divider>

                                <div class="pa-3">
                                    <div class="mb-3 black--text">27 Đánh giá sản phẩm này</div>

                                    <v-card class="mb-5 pa-3" outlined>
                                        <v-row>
                                            <v-col cols="12" md="3">
                                                <div
                                                    style="border-right: 1px solid #e4e4e4; text-align: center; align-items: center; align-content: center;">
                                                    <b style="color: #ffd600; font-size: 40px;">5/5</b>
                                                    <v-rating value="5" background-color="yellow" color="yellow accent-4"
                                                        dense half-increments hover size="18"></v-rating>
                                                    <small>27 đánh giá</small>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="5">
                                                <div
                                                    style="border-right: 1px solid #e4e4e4; text-align: center; align-items: center; align-content: center;">
                                                    <div class="d-flex">
                                                        <div> 5 <v-icon color="yellow accent-4" size="20"
                                                                class="ml-1">mdi-star</v-icon></div>

                                                        <v-progress-linear color="yellow accent-4" rounded value="100"
                                                            class="ml-2 mt-3" style="width: 150px;"></v-progress-linear>

                                                        <a style="font-size: 15px; color: #015494;" class="ml-2"><b>27</b>
                                                            đánh
                                                            giá</a>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div> 4 <v-icon color="yellow accent-4" size="20"
                                                                class="ml-1">mdi-star</v-icon></div>

                                                        <v-progress-linear color="yellow accent-4" rounded value="0"
                                                            class="ml-2 mt-3" style="width: 150px;"></v-progress-linear>

                                                        <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                                            giá</a>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div> 3 <v-icon color="yellow accent-4" size="20"
                                                                class="ml-1">mdi-star</v-icon></div>

                                                        <v-progress-linear color="yellow accent-4" rounded value="0"
                                                            class="ml-2 mt-3" style="width: 150px;"></v-progress-linear>

                                                        <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                                            giá</a>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div> 2 <v-icon color="yellow accent-4" size="20"
                                                                class="ml-1">mdi-star</v-icon></div>

                                                        <v-progress-linear color="yellow accent-4" rounded value="0"
                                                            class="ml-2 mt-3" style="width: 150px;"></v-progress-linear>

                                                        <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                                            giá</a>
                                                    </div>

                                                    <div class="d-flex">
                                                        <div> 1 <v-icon color="yellow accent-4" size="20"
                                                                class="ml-1">mdi-star</v-icon></div>

                                                        <v-progress-linear color="yellow accent-4" rounded value="0"
                                                            class="ml-2 mt-3" style="width: 150px;"></v-progress-linear>

                                                        <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                                            giá</a>
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" md="4">
                                                <a class="btn-rating">Gửi
                                                    đánh giá của bạn</a>
                                            </v-col>
                                        </v-row>
                                    </v-card>

                                    <!-- Contenedor Principal -->
                                    <div class="comments-container">
                                        <ul id="comments-list" class="comments-list">
                                            <li>
                                                <div class="comment-main-level d-flex">
                                                    <div class="comment-avatar"><img
                                                            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                                                            alt=""></div>

                                                    <div class="comment-box">
                                                        <div class="comment-head">
                                                            <h6 class="comment-name by-author"><a
                                                                    href="http://creaticode.com/blog">Agustin Ortiz</a></h6>

                                                            <span>27/12/2023</span>

                                                            <v-icon>mdi-reply-outline</v-icon>

                                                            <v-icon>mdi-heart-outline</v-icon>
                                                        </div>

                                                        <div class="comment-content">
                                                            <v-rating :value="item.rating" background-color="yellow"
                                                                color="yellow accent-4" dense half-increments hover
                                                                size="15"></v-rating>

                                                            <div class="ml-1">wow! giá tốt quá, 50$ mà chỉ còn 990k, trời ơi
                                                                tin được không.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <!--Reply-->
                                            <li class="mt-6 ml-7">
                                                <div class="comment-main-level d-flex" style="padding: 10px 0px 0px 20px">
                                                    <div class="comment-avatar"><img
                                                            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                                            alt=""></div>

                                                    <div class="comment-box">
                                                        <div class="comment-head">
                                                            <h6 class="comment-name by-author mt-1"><a
                                                                    href="http://creaticode.com/blog">Admin</a></h6>

                                                            <v-chip label small text-color="white" color="success" class="font-weight-bold">QTV</v-chip>

                                                            <span class="ml-3 mt-1">27/12/2023</span>

                                                            <v-icon>mdi-reply-outline</v-icon>

                                                            <v-icon>mdi-heart-outline</v-icon>
                                                        </div>

                                                        <div class="comment-content">

                                                            <div class="ml-1 mt-2">Chào bạn,
                                                                Các mặt hàng code, shop sẽ check kiểm tra trước khi
                                                                gửi, nên khi nhập vào 100% là được. Nếu nhập vào
                                                                không được thì thường là do khác hệ, lúc đó chỉ
                                                                cần tạo account hệ khác là nhập được.
                                                                Thông tin đến bạn.</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </v-col>

                            <v-col cols="12" md="4">
                                <div>
                                    <h3 class="black--text">Thông tin sản phẩm</h3>

                                    <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                    <div class="d-flex pa-0" style="font-size: 15px;">
                                        <v-col cols="12" md="4">
                                            <div>Tên sản phẩm:</div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <div class="black--text">{{ item.title }}</div>
                                        </v-col>
                                    </div>

                                    <v-divider></v-divider>

                                    <div class="d-flex pa-0" style="font-size: 15px;">
                                        <v-col cols="12" md="4">
                                            <div>Tính năng:</div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <div class="black--text">Sử dụng năng cấp tài khoản youtube premium để nghe
                                                nhạc,
                                                xem phim mà không cần
                                                phải chờ đợi quảng cáo</div>
                                        </v-col>
                                    </div>

                                    <v-divider></v-divider>

                                    <div class="d-flex pa-0" style="font-size: 15px;">
                                        <v-col cols="12" md="4">
                                            <div>Nền tảng:</div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <div class="black--text">Youtube</div>
                                        </v-col>
                                    </div>

                                    <v-divider></v-divider>

                                    <div class="d-flex pa-0" style="font-size: 15px;">
                                        <v-col cols="12" md="4">
                                            <div>Thể loại:</div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <div class="black--text">Gmail</div>
                                        </v-col>
                                    </div>
                                </div>

                                <div class="mt-5">
                                    <h3 class="black--text mb-3">Tin tức liên quan</h3>

                                    <div v-for="(item, i) in 5" :key="i">
                                        <v-card class="mb-5" outlined>
                                            <v-list-item three-line>
                                                <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                                                <v-list-item-content>
                                                    <b class="text-h7">
                                                        Gmail 2019 2021 đã qua Premium
                                                    </b>
                                                    <v-list-item-subtitle><span>9 tháng trước</span> - <span>Lượt xem:
                                                            190</span></v-list-item-subtitle>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-card>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>


                </div>
            </div>

            <!--Responsive-->
            <div style="padding: 100px 50px 50px 50px;" v-if="size.onsize < 1111">
                <div v-for="item in itemsEmail" :key="item.title">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item v-for="items in item.image" :key="items" :src="items.src">
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="card">
                                <p class="title">{{ item.title }}</p>

                                <div class="offer-info mt-2 mb-2">{{ item.content }}</div>

                                <div class="d-flex">
                                    <v-rating :value="item.rating" background-color="yellow" color="yellow accent-4" dense
                                        half-increments hover size="18"></v-rating>
                                    <a href="#" class="ml-2 mt-1" style="text-decoration: none; font-size: 17px;">
                                        ( <b>{{ item.review }}</b> đánh giá )
                                    </a>
                                </div>

                                <div class="ml-1 sold">
                                    <div class="mt-1 d-flex">
                                        <div>Đã bán:
                                            <b class="ml-1">{{ item.sold }}</b>
                                        </div>
                                        <div class="ml-2">|</div>
                                        <div class="ml-2">Khiếu nại: <b>{{ item.complain }}</b></div>
                                    </div>
                                </div>

                                <div class="ml-1 mt-3 d-flex">
                                    <div class="mt-2" style="font-size: 16px;">Giá bán:</div>
                                    <div class="price ml-5 red--text">{{ item.price }}</div>
                                </div>

                                <div class="ml-1 d-flex status"> <span style="font-size: 16px;">Trạng thái:</span>
                                    <b v-if="item.status == true" class="success--text ml-5">Còn hàng</b>
                                    <b v-else class="error--text ml-5">Hết hàng</b>
                                </div>

                                <div class="ml-2 mt-4 info-email" style="font-size: 15px;">
                                    <div><v-icon>mdi-account-circle</v-icon> Người đăng: <b class="ml-2">{{ item.seller
                                    }}</b>
                                    </div>
                                    <div class="mt-2"><v-icon>mdi-tag</v-icon> Sản phẩm: <b class="ml-2">{{ item.productName
                                    }}</b>
                                    </div>
                                    <div class="mt-2"><v-icon>mdi-storefront</v-icon> Kho: <b class="ml-2">{{ item.amount
                                    }}</b>
                                    </div>
                                </div>

                                <div class="ml-2 mt-6" style="color: #000; border: 1px solid #f1f1f1;">
                                    <div class="text-left text-h6"
                                        style="background-color: #f1f1f1; padding: 10px 20px 10px 20px;">
                                        THÔNG TIN
                                    </div>
                                    <div style="padding: 20px; font-size: 15px;">
                                        <li>Tài khoản sẽ gửi qua email và được hiển thị trong phần thanh toán của bạn.
                                        </li>
                                        <li><a href="#">Hướng dẫn thanh toán và nhận tài khoản</a></li>
                                    </div>
                                </div>

                                <v-row class="pa-0 mt-4 ml-1">
                                    <v-col>
                                        <v-chip color="success" label outlined> <v-checkbox color="success" hide-details
                                                style="margin-top: -5px !important;"></v-checkbox> Gmail random IP 7
                                            ngày++ email|pass|recovery|geo
                                        </v-chip>
                                    </v-col>
                                    <v-col>
                                        <v-chip color="success" label outlined>
                                            <v-checkbox color="success" hide-details
                                                style="margin-top: -5px !important;"></v-checkbox> Gmail Mỹ, 7 ngày+, reg
                                            GGVoice
                                            email|pass|recovery
                                        </v-chip>
                                    </v-col>
                                    <v-col>
                                        <v-chip color="success" label outlined>
                                            <v-checkbox color="success" hide-details
                                                style="margin-top: -5px !important;"></v-checkbox> Gmail random IP 1 tháng
                                            ++
                                            email|pass|recovery|geo
                                        </v-chip>
                                    </v-col>
                                    <v-col>
                                        <v-chip color="success" label outlined>
                                            <v-checkbox color="success" hide-details
                                                style="margin-top: -5px !important;"></v-checkbox> Gmail USA (Mỹ) , 7 ngày
                                            email|pass|recover
                                        </v-chip>
                                    </v-col>
                                </v-row>

                                <div class="wrapper mt-6 ml-3 mb-3">
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

                                <div class="mt-4 ml-3">
                                    <v-text-field append-icon="mdi-sale-outline" placeholder="Nhập mã giảm giá" outlined
                                        dense style="width: 200px;"></v-text-field>
                                </div>

                                <button href="#" class="buy-btn"><v-icon color="white">mdi-cart-outline</v-icon> Mua
                                    hàng</button>
                                <br>
                                <button class="add-to-wl-btn" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-cart-arrow-down</v-icon> Đặt trước</button>

                                <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-send-outline</v-icon> Nhắn tin</button>


                                <button class="add-to-wl-btn ml-5" onclick="showAlert('Product added to your Wishlist!')">
                                    <v-icon color="#000">mdi-handshake-outline</v-icon> Đăng ký reseller</button>

                                <!--Tab-->
                                <div style="padding: 50px 0px 30px 0px;">
                                    <v-tabs color="deep-purple accent-4">
                                        <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                            <span class="ml-2">Mô tả</span>
                                        </v-tab>
                                        <v-tab class="font-weight-medium" style="text-transform: none; font-size: 17px;">
                                            <v-icon>mdi-comment-text-multiple-outline</v-icon><span
                                                class="ml-2">Review</span>
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
                                                        <v-rating value="5" background-color="yellow"
                                                            color="yellow accent-4" dense half-increments hover
                                                            size="18"></v-rating>
                                                        <p class="ml-2">Sản phẩm chuẩn chất lượng. Hỗ trợ nhiệt tình.</p>
                                                    </div>
                                                    <p class="ml-auto" style="font-style: italic; color: #BDBDBD">28/09/2022
                                                    </p>
                                                </v-card>
                                                <v-divider></v-divider>
                                            </div>
                                        </v-tab-item>
                                        <!--Tab 3-->
                                        <v-tab-item>
                                            <div class="ml-5 mt-3" v-if="item.api == false">
                                                <h3 class="font-weight-bold green--text">Mua hàng bằng API:</h3>
                                                <p class="mt-2">Bạn chưa kích hoạt sử dụng API, nếu bạn chắc chắn muốn sử
                                                    dụng
                                                    tính
                                                    năng
                                                    này,
                                                    hãy vào mục thông tin cá nhân (profile) để active !</p>
                                            </div>
                                        </v-tab-item>
                                    </v-tabs>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-card outlined class="pa-3"
                                style="font-size: 14px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
                                <span><v-icon color="#6200ea" size="20">mdi-check-decagram-outline</v-icon> Bảo hành:
                                    <b>Trọn
                                        đời</b></span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-arrow-u-left-bottom</v-icon> 1 đổi 1 nếu thẻ bị
                                    lỗi</span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-facebook</v-icon> Fanpage: <span
                                        class="blue--text">@taisanso</span></span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-phone</v-icon> <i>Địa chỉ: 14 Hoa Sữa, Phường 7,
                                        Phú
                                        Nhuận,
                                        TPHCM</i>
                                    <br>
                                    <p style="font-size: 13px;">Hotline: 0903.199.997 (09:00 - 20:00)</p>
                                </span>

                                <v-divider style="margin-top: 8px; padding-bottom: 8px;"></v-divider>

                                <span><v-icon color="#6200ea" size="20">mdi-check-decagram-outline</v-icon> Hoàn tiền
                                    <b>100%</b> nếu tài khoản không sử dụng được</span>
                            </v-card>
                        </v-col>
                    </v-row>
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
        ex7: 'success',
        itemsEmail: [
            {
                title: 'Gmail 2019 2021 đã qua Premium . 6 - 7 tháng',
                image: [
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg', id: 'id1', for: 'id1' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg', id: 'id2', for: 'id2' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg', id: 'id3', for: 'id3' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg', id: 'id4', for: 'id4' },
                ],
                rating: '4.5',
                amount: 4540,
                price: '5.000 đ - 8.000 đ',
                status: true,
                review: '14',
                sold: ' 96562',
                complain: '0.0%',
                seller: 'ronboyngok',
                productName: 'Gmail',
                content: 'Gmail ngoại iOS, random IP, đã ngâm đủ 14 ngày',
                description: '<li>Gmail 2019 2021 đã qua Premium . 6 - 7 tháng .max trâu</ li ><br><li>Kinh doanh: Gmail IOS IP US.NGÂM TRÊN 30 NGÀY(REG GOOGLE VOICE) | Gmail IOS IP US.NGÂM 15 NGÀY. | Gmail 2023 đã qua Premium. 6 - 7 tháng | Gmail 2023 đã qua Premium. 6 - 8 tháng | GMAIL NGÂM 6 - 8 THÁNG.RANDOM QUA PRE</ li >',
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
.slider {
    width: 100%;
    position: relative;
    padding-top: 284px;
}

.slider>img {
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.5s;
}

.slider input[name='slide_switch'] {
    display: none;
}

.slider label {
    margin: 10px 0 0 19px;
    float: left;
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0.6;
}

.slider label img {
    display: block;
}

.slider input[name='slide_switch']:checked+label {
    border-color: #666;
    opacity: 1;
}

.slider input[name='slide_switch']~img {
    opacity: 0;
    transform: scale(1.1);
}

.slider input[name='slide_switch']:checked+label+img {
    opacity: 1;
    transform: scale(1);
}

.product-slider {
    padding: 45px;
}

.product-slider #carousel {
    border: 4px solid #1089c0;
    margin: 0;
}

.product-slider #thumbcarousel {
    margin: 12px 0 0;
    padding: 0 45px;
}

.product-slider #thumbcarousel .item {
    text-align: center;
}

.product-slider #thumbcarousel .item .thumb {
    border: 4px solid #cecece;
    width: 20%;
    margin: 0 2%;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    max-width: 98px;
}

.product-slider #thumbcarousel .item .thumb:hover {
    border-color: #1089c0;
}

.product-slider .item img {
    width: 100%;
    height: auto;
}

.carousel-control {
    color: #0284b8;
    text-align: center;
    text-shadow: none;
    font-size: 30px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    top: 23%;
}

.carousel-control:hover,
.carousel-control:focus,
.carousel-control:active {
    color: #333;
}

.carousel-caption,
.carousel-control .fa {
    font: normal normal normal 30px/26px FontAwesome;
}

.carousel-control {
    background-color: rgba(0, 0, 0, 0);
    bottom: auto;
    font-size: 20px;
    left: 0;
    position: absolute;
    top: 30%;
    width: auto;
}

.carousel-control.right,
.carousel-control.left {
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
}

.card {
    border-radius: 18px;
    background: #fff;
    position: inherit;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}

.price {
    font-weight: 600;
    font-size: 28px;
}

.offer-info {
    color: #86878c;
    font-size: 18px;
}

.sold {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}

.status {
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}

.info-email {
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e4e4;
}

.btn-check {
    word-wrap: break-word;
    border: 1px solid #7f8c8d;
    padding: 6px;
    border-radius: 5px;
    color: #7f8c8d;
    font-size: 15px;
    align-content: center;
    align-items: center;
    text-align: center;
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
    margin-top: 20px;
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

.btn-rating {
    display: block;
    width: 200px;
    margin: 45px auto 0 16px;
    padding: 10px;
    color: #fff;
    background-color: #cd1818;
    border-radius: 5px;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
}

.btn:hover {
    font-size: 20px;
    font-weight: bold;
}

button:focus,
input:focus {
    outline: 0;
}

a {
    color: #03658c;
    text-decoration: none;
}

ul {
    list-style-type: none;
}

.comments-container {
    margin: 60px auto 15px;
    width: 768px;
}

.comments-container h1 {
    font-size: 36px;
    color: #283035;
    font-weight: 400;
}

.comments-container h1 a {
    font-size: 18px;
    font-weight: 700;
}

.comments-list {
    margin-top: 30px;
    position: relative;
}

.reply-list:before,
.reply-list:after {
    display: none;
}

.comments-list .comment-avatar {
    width: 65px;
    height: 65px;
    position: relative;
    z-index: 99;
    float: left;
    border-radius: 8px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.comments-list .comment-avatar img {
    width: 100%;
    height: 100%;
}

.reply-list .comment-avatar {
    width: 50px;
    height: 50px;
}

.comment-main-level:after {
    content: '';
    width: 0;
    height: 0;
    display: block;
    clear: both;
}

.comments-list .comment-box {
    width: 600px;
    float: right;
    position: relative;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    margin-left: 20px;
    margin-top: 15px;
}

.comments-list .comment-box:before,
.comments-list .comment-box:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    display: block;
    border-width: 10px 12px 10px 0;
    border-style: solid;
    border-color: transparent #e7e7e7;
    top: 8px;
    left: -11px;
}

.comments-list .comment-box:before {
    border-width: 11px 13px 11px 0;
    border-color: transparent rgba(0, 0, 0, 0.05);
    left: -12px;
}

.comment-box .comment-head {
    background: #e7e7e7;
    padding: 10px 12px;
    border-bottom: 1px solid #E5E5E5;
    overflow: hidden;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
}

.comment-box .comment-head i {
    float: right;
    margin-left: 14px;
    position: relative;
    top: 2px;
    cursor: pointer;
    -webkit-transition: color 0.3s ease;
    -o-transition: color 0.3s ease;
    transition: color 0.3s ease;
}

.comment-box .comment-head i:hover {
    color: #03658c;
}

.comment-box .comment-name {
    color: #283035;
    font-size: 14px;
    font-weight: 700;
    float: left;
    margin-right: 10px;
}

.comment-box .comment-name a {
    color: #283035;
}

.comment-box .comment-head span {
    float: left;
    color: #999;
    font-size: 13px;
    position: relative;
    top: 1px;
}

.comment-box .comment-content {
    background: #FFF;
    padding: 1px 12px 12px 12px;
    font-size: 15px;
    color: #595959;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
    border-color: #f1f1f1;
}

@media only screen and (max-width: 766px) {
    .comments-container {
        width: 480px;
    }

    .comments-list .comment-box {
        width: 390px;
    }

    .reply-list .comment-box {
        width: 320px;
    }
}
</style>