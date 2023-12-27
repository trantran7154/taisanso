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

                            <div class="product-slider">
                                <div id="carousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="item active"> <img src="http://placehold.it/1600x700?text=Product+01">
                                        </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+02"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+03"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+04"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+05"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+06"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+07"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+08"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+09"> </div>
                                        <div class="item"> <img src="http://placehold.it/1600x700?text=Product+10"> </div>
                                    </div>
                                </div>
                                <div class="clearfix">
                                    <div id="thumbcarousel" class="carousel slide" data-interval="false">
                                        <div class="carousel-inner">
                                            <div class="item active">
                                                <div data-target="#carousel" data-slide-to="0" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+01"></div>
                                                <div data-target="#carousel" data-slide-to="1" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+02"></div>
                                                <div data-target="#carousel" data-slide-to="2" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+03"></div>
                                                <div data-target="#carousel" data-slide-to="3" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+04"></div>
                                                <div data-target="#carousel" data-slide-to="4" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+05"></div>
                                            </div>
                                            <div class="item">
                                                <div data-target="#carousel" data-slide-to="5" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+06"></div>
                                                <div data-target="#carousel" data-slide-to="6" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+07"></div>
                                                <div data-target="#carousel" data-slide-to="7" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+08"></div>
                                                <div data-target="#carousel" data-slide-to="8" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+08"></div>
                                                <div data-target="#carousel" data-slide-to="9" class="thumb"><img
                                                        src="http://placehold.it/100x80?text=Thumb+10"></div>
                                            </div>
                                        </div>
                                        <!-- /carousel-inner -->
                                        <a class="left carousel-control" href="#thumbcarousel" role="button"
                                            data-slide="prev"> <i class="fa fa-angle-left" aria-hidden="true"></i> </a> <a
                                            class="right carousel-control" href="#thumbcarousel" role="button"
                                            data-slide="next"><i class="fa fa-angle-right" aria-hidden="true"></i> </a>
                                    </div>
                                    <!-- /thumbcarousel -->

                                </div>
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

                                <button href="#" onclick="showAlert('Product added to cart!')" class="buy-btn"><v-icon
                                        color="white">mdi-cart-outline</v-icon> Mua hàng</button>
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
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg' },
                    { src: 'https://www.heraldobinario.com.mx/u/fotografias/m/2022/2/2/f638x638-23635_81802_5050.jpg' },
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
}</style>