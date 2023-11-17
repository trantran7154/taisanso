<template>
    <XyzTransition xyz="fade-100%">
        <v-app app>
            <div v-if="size.onsize >= 1111">
                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(https://www.zdnet.com/a/img/resize/8bb559f79b143b6903e57460c40b96bd2dcc022c/2023/10/10/b43d51bd-78ec-47c2-ae7e-28a23bafc134/google-passkeys.jpg?auto=webp&fit=crop&height=1200&width=1200)">
                        </div>
                    </div>
                    <div class="description">
                        <h1>Thiết lập lại tài khoản, mật khẩu</h1>
                        <p class="mt-3 line"></p>

                        <v-form>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Tên tài khoản" prepend-inner-icon="mdi-account"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Mật khẩu" prepend-inner-icon="mdi-lock"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Nhập lại mật khẩu"
                                            prepend-inner-icon="mdi-lock"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>

                        <div class="read-more">
                            <a href="#"><v-btn class="font-weight-bold mb-3" outlined>Cập nhật</v-btn></a>
                        </div>
                    </div>
                </div>

                <div class="blog-card alt">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(https://www.callfocus.ie/content/files/choosing_phone_over_email.png)">
                        </div>
                    </div>
                    <div class="description">
                        <h1>Tài khoản: aryan_lql1m3</h1>

                        <p class="mt-3 line"></p>

                        <v-form>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Họ và tên" prepend-inner-icon="mdi-account"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Số điện thoại" prepend-inner-icon="mdi-phone"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Email" value="abc@gmail.com"
                                            prepend-inner-icon="mdi-email"></v-text-field>
                                    </v-col>

                                    <v-col cols="12" sm="6" class="pa-2 form">
                                        <v-text-field label="Facebook" prepend-inner-icon="mdi-facebook"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>

                        <div class="read-more">
                            <a href="#"><v-btn class="font-weight-bold mb-3" outlined>Cập nhật</v-btn></a>
                        </div>
                    </div>
                </div>

                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(https://www.challenges.fr/assets/img/2022/05/04/cover-r4x3w1200-6272a6f6b40b0-000-326t2k2.jpg)">
                        </div>
                    </div>
                    <div class="description">
                        <h1>Telegram: Kết nối và đẩy tin nhắn</h1>
                        <p class="mt-3 line"></p>


                        <ul style="font-size: 16px;">
                            <li class="mb-2">Kết nối với tài khoản Telegram của bạn, hệ thống sẽ thông báo cho bạn khi
                                có
                                tin
                                nhắn
                                mới từ khách
                                hàng hay phản hồi từ chủ shop (trong trường hợp bạn chưa xem tin nhắn đó).</li>
                            <li class="mb-2">Bấm vào <b>"Kết nối Telegram"</b>, trang sẽ tự động bật đoạn hội thoại với
                                <b>TaiSanSo</b>, sau đó
                                nhấn vào nút <b>"Start"</b> trên Telegram App để bắt đầu nhận thông báo. 30s sau, liên
                                kết
                                trên
                                site
                                sẽ được cập nhật.
                            </li>
                            <li class="mb-2">Bạn có thể trả lời trực tiếp từ Telegram bằng cách nhấn giữ vào tin nhắn đã
                                nhận và
                                chọn
                                <b>Reply</b>.
                            </li>
                        </ul>

                        <div class="read-more">
                            <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Kết nối telegram</v-btn></a>
                        </div>
                    </div>
                </div>

                <div class="blog-card alt">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(https://bloganchoi.com/wp-content/uploads/2019/06/xac-thuc-2-yeu-to.jpg)">
                        </div>
                    </div>
                    <div class="description">
                        <h1>Bảo mật 2 lớp</h1>

                        <p class="mt-3 line"></p>

                        <ul style="font-size: 16px;">
                            <li class="mb-2">Bật bảo mật hai lớp bằng code 2FA cho tài khoản của bạn.</li>
                            <li class="mb-2">Mỗi khi đăng nhập hệ thống sẽ yêu cầu 1 mã 6 số được tạo từ chuỗi 2FA. Đề
                                phòng
                                trường
                                hợp bạn bị lộ pass hoặc lộ email.
                            </li>
                        </ul>

                        <div class="read-more">
                            <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Bật</v-btn></a>
                        </div>
                    </div>
                </div>

                <div class="blog-card">
                    <div class="meta">
                        <div class="photo"
                            style="background-image: url(https://vtcc.vn/wp-content/uploads/2023/04/api-la-gi-3.png)">
                        </div>
                    </div>
                    <div class="description">
                        <h1>Mua hàng bằng API</h1>
                        <p class="mt-3 line"></p>


                        <ul style="font-size: 16px;">
                            <li class="mb-2">Hãy cẩn thận với tính năng này, nếu bạn để lộ token, người khác có thể dùng
                                nó
                                để
                                mua hàng. Nếu không hiểu rõ xin hãy để ở chế độ tắt!</li>
                            <li class="mb-2">Sau khi bật tính năng này, bạn có thể vào gian hàng bạn muốn mua, bên cạnh
                                phần
                                Mô
                                tả, Review sẽ có mục API của gian hàng đó.
                            </li>
                            <li class="mb-2">Để thay đổi token, vui lòng tắt bật lại.
                            </li>
                        </ul>

                        <div class="read-more">
                            <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Bật</v-btn></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pa-3" v-if="size.onsize < 1111">
                    <div class="blog-card">
                        <div class="meta">
                            <div class="photo"
                                style="background-image: url(https://www.zdnet.com/a/img/resize/8bb559f79b143b6903e57460c40b96bd2dcc022c/2023/10/10/b43d51bd-78ec-47c2-ae7e-28a23bafc134/google-passkeys.jpg?auto=webp&fit=crop&height=1200&width=1200)">
                            </div>
                        </div>
                        <div class="description">
                            <h1>Thiết lập lại tài khoản, mật khẩu</h1>
                            <p class="mt-3 line"></p>

                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Tên tài khoản"
                                                prepend-inner-icon="mdi-account"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Mật khẩu" prepend-inner-icon="mdi-lock"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Nhập lại mật khẩu"
                                                prepend-inner-icon="mdi-lock"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>

                            <div class="read-more">
                                <a href="#"><v-btn class="font-weight-bold mb-3" outlined>Cập nhật</v-btn></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog-card alt">
                        <div class="meta">
                            <div class="photo"
                                style="background-image: url(https://www.callfocus.ie/content/files/choosing_phone_over_email.png)">
                            </div>
                        </div>
                        <div class="description">
                            <h1>Tài khoản: aryan_lql1m3</h1>

                            <p class="mt-3 line"></p>

                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Họ và tên" prepend-inner-icon="mdi-account"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Số điện thoại"
                                                prepend-inner-icon="mdi-phone"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Email" value="abc@gmail.com"
                                                prepend-inner-icon="mdi-email"></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="6" class="pa-2 form">
                                            <v-text-field label="Facebook" prepend-inner-icon="mdi-facebook"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>

                            <div class="read-more">
                                <a href="#"><v-btn class="font-weight-bold mb-3" outlined>Cập nhật</v-btn></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="meta">
                            <div class="photo"
                                style="background-image: url(https://www.challenges.fr/assets/img/2022/05/04/cover-r4x3w1200-6272a6f6b40b0-000-326t2k2.jpg)">
                            </div>
                        </div>
                        <div class="description">
                            <h1>Telegram: Kết nối và đẩy tin nhắn</h1>
                            <p class="mt-3 line"></p>


                            <ul style="font-size: 16px;">
                                <li class="mb-2">Kết nối với tài khoản Telegram của bạn, hệ thống sẽ thông báo cho bạn khi
                                    có
                                    tin
                                    nhắn
                                    mới từ khách
                                    hàng hay phản hồi từ chủ shop (trong trường hợp bạn chưa xem tin nhắn đó).</li>
                                <li class="mb-2">Bấm vào <b>"Kết nối Telegram"</b>, trang sẽ tự động bật đoạn hội thoại với
                                    <b>TaiSanSo</b>, sau đó
                                    nhấn vào nút <b>"Start"</b> trên Telegram App để bắt đầu nhận thông báo. 30s sau, liên
                                    kết
                                    trên
                                    site
                                    sẽ được cập nhật.
                                </li>
                                <li class="mb-2">Bạn có thể trả lời trực tiếp từ Telegram bằng cách nhấn giữ vào tin nhắn đã
                                    nhận và
                                    chọn
                                    <b>Reply</b>.
                                </li>
                            </ul>

                            <div class="read-more">
                                <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Kết nối telegram</v-btn></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog-card alt">
                        <div class="meta">
                            <div class="photo"
                                style="background-image: url(https://bloganchoi.com/wp-content/uploads/2019/06/xac-thuc-2-yeu-to.jpg)">
                            </div>
                        </div>
                        <div class="description">
                            <h1>Bảo mật 2 lớp</h1>

                            <p class="mt-3 line"></p>

                            <ul style="font-size: 16px;">
                                <li class="mb-2">Bật bảo mật hai lớp bằng code 2FA cho tài khoản của bạn.</li>
                                <li class="mb-2">Mỗi khi đăng nhập hệ thống sẽ yêu cầu 1 mã 6 số được tạo từ chuỗi 2FA. Đề
                                    phòng
                                    trường
                                    hợp bạn bị lộ pass hoặc lộ email.
                                </li>
                            </ul>

                            <div class="read-more">
                                <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Bật</v-btn></a>
                            </div>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="meta">
                            <div class="photo"
                                style="background-image: url(https://vtcc.vn/wp-content/uploads/2023/04/api-la-gi-3.png)">
                            </div>
                        </div>
                        <div class="description">
                            <h1>Mua hàng bằng API</h1>
                            <p class="mt-3 line"></p>


                            <ul style="font-size: 16px;">
                                <li class="mb-2">Hãy cẩn thận với tính năng này, nếu bạn để lộ token, người khác có thể dùng
                                    nó
                                    để
                                    mua hàng. Nếu không hiểu rõ xin hãy để ở chế độ tắt!</li>
                                <li class="mb-2">Sau khi bật tính năng này, bạn có thể vào gian hàng bạn muốn mua, bên cạnh
                                    phần
                                    Mô
                                    tả, Review sẽ có mục API của gian hàng đó.
                                </li>
                                <li class="mb-2">Để thay đổi token, vui lòng tắt bật lại.
                                </li>
                            </ul>

                            <div class="read-more">
                                <a href="#"><v-btn class="font-weight-bold mb-3 mt-3" outlined>Bật</v-btn></a>
                            </div>
                        </div>
                    </div>
                </div>
        </v-app>
    </XyzTransition>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Edit",
    props: ["size"],
    data: () => ({

    }),
});
</script>
  
<style lang="scss" scoped>
body {
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

$color_white: #fff;
$color_prime: blue;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.blog-card {
    display: flex;
    flex-direction: column;
    margin: 1rem auto;
    box-shadow: 0 3px 7px -1px rgba(#000, .1);
    margin-bottom: 1.6%;
    background: $color_white;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 60px;

    a {
        color: inherit;

        &:hover {
            color: $color_prime;
        }
    }

    &:hover {
        .photo {
            transform: scale(1.3) rotate(3deg);
        }
    }

    .meta {
        position: relative;
        z-index: 0;
        height: 200px;
    }

    .photo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        transition: transform .2s;
    }

    .description {
        padding: 1rem;
        background: $color_white;
        position: relative;
        z-index: 1;

        h1,
        h2 {
            font-family: Poppins, sans-serif;
        }

        h1 {
            line-height: 1;
            margin: 0;
            font-size: 1.7rem;
        }

        h2 {
            font-size: 1rem;
            font-weight: 300;
            text-transform: uppercase;
            color: $color_grey_dark;
            margin-top: 5px;
        }

        .read-more {
            text-align: right;
        }
    }

    &:hover {
        .details {
            left: 0%;
        }
    }


    @media (min-width: 640px) {
        flex-direction: row;
        max-width: 900px;

        .meta {
            flex-basis: 40%;
            height: auto;
        }

        .description {
            flex-basis: 60%;

            &:before {
                transform: skewX(-3deg);
                content: "";
                background: #fff;
                width: 30px;
                position: absolute;
                left: -10px;
                top: 0;
                bottom: 0;
                z-index: -1;
            }
        }

        &.alt {
            flex-direction: row-reverse;

            .description {
                &:before {
                    left: inherit;
                    right: -10px;
                    transform: skew(3deg)
                }
            }

            .details {
                padding-left: 25px;
            }
        }
    }

    .form {
        width: 500px !important;
    }

    .line {
        border-bottom: 5px solid blue;
        width: 68px;
        border-radius: 4px;
    }
}
</style>