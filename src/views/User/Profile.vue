<template>
    <XyzTransition xyz="fade-100%">
        <v-app app>
            <!--Responsive-->
            <XyzTransition xyz="fade-100%" v-if="size.onsize >= 1111">
                <div class="content">
                    <div class="container">
                        <v-row>
                            <v-col cols="4" md="4" lg="4">
                                <div class="dashboard">
                                    <div class="user mt-5" style="width: 310px;">
                                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
                                        <h3>Dagny Taggart</h3>
                                        <p class="text-online">Online</p>
                                    </div>

                                    <div class="pa-4 font-weight-bold mt-5">
                                        <span style="border-bottom: 2px solid blue;">Lịch sử đăng nhập</span>
                                    </div>

                                    <div class="d-flex flex-column mt-3" style="font-size: 16px;">
                                        <small class="ma-2"><v-icon>mdi-calendar-month</v-icon> 16-11-2023 14:25</small>
                                        <small class="ma-2"><v-icon>mdi-map-marker-outline</v-icon>IP:
                                            2402:9d80:c1e:cb00:5ef:1631:3e7c:f406</small>
                                        <small class="ma-2"><v-icon>mdi-cellphone-link</v-icon> Device: Chrome 119 on
                                            Windows</small>
                                    </div>

                                </div>
                            </v-col>
                            <v-col cols="8" md="8" lg="8">
                                <div class="level">
                                    <div class="status">
                                        <h1>LV 0</h1>
                                        <v-progress-linear color="light-blue" height="25" value="0"
                                            striped>0%</v-progress-linear>
                                        <em class="mt-1" style="color: red; text-align: center;">Hãy mua/bán thêm 100.000đ
                                            để
                                            đạt
                                            level
                                            tiếp
                                            theo.</em>
                                    </div>
                                    <div class="cards">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <tbody class="text-center">
                                                    <tr>
                                                        <td class="font-weight-bold">Tài khoản</td>
                                                        <td>@aryan_lql1m3</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Họ tên</td>
                                                        <td>@aryan_lql1m3</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số dư</td>
                                                        <td>0 VND</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Ngày đăng ký</td>
                                                        <td>16/11/2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Đã mua</td>
                                                        <td>0 sản phẩm</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số gian hàng</td>
                                                        <td>0 gian hàng</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Đã bán</td>
                                                        <td>0 sản phẩm</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số bài viết</td>
                                                        <td><a href="#" style="text-decoration: none; color: green;">0 bài
                                                                viết</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold" width="200">Mua hàng bằng API</td>
                                                        <td><span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Tắt</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Bảo mật 2 lớp</td>
                                                        <td class="pa-2">
                                                            <span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Chưa bật</span>
                                                            <br>
                                                            <small style="color: green;" class="font-weight-bold">(Hãy bảo
                                                                vệ
                                                                tài
                                                                khoản
                                                                của bạn bằng bảo mật 2FA)</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Kết nối Telegram</td>
                                                        <td class="pa-2">
                                                            <span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Chưa kết nối</span>
                                                            <br>
                                                            <small style="color: green;" class="font-weight-bold">(Bạn có
                                                                thể
                                                                gởi và
                                                                nhận được tin nhắn mới (chưa xem) qua Telegram nếu có kết
                                                                nối)</small>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <div class="text-center mt-8">
                                            <v-btn depressed color="primary">
                                                Chỉnh sửa
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </XyzTransition>

            <XyzTransition xyz="fade-100%" v-if="size.onsize < 1111">
                <div class="content">
                    <div class="container">
                        <v-row>
                            <v-col cols="12" md="12" lg="12">
                                <div class="dashboard">
                                    <div class="user" style="display: block !important;">
                                        <v-avatar size="150"><img src="https://randomuser.me/api/portraits/women/44.jpg"
                                                alt="" class="circle" /></v-avatar>

                                        <h3>Dagny Taggart</h3>
                                        <p class="text-online">Online</p>
                                    </div>

                                    <div class="pa-4 font-weight-bold">
                                        <span style="border-bottom: 2px solid blue;">Lịch sử đăng nhập</span>
                                    </div>

                                    <div class="d-flex flex-column mt-3" style="font-size: 16px">
                                        <small class="ma-2"><v-icon>mdi-calendar-month</v-icon> 16-11-2023 14:25</small>
                                        <small class="ma-2"><v-icon>mdi-map-marker-outline</v-icon>IP:
                                            2402:9d80:c1e:cb00:5ef:1631:3e7c:f406</small>
                                        <small class="ma-2"><v-icon>mdi-cellphone-link</v-icon> Device: Chrome 119 on
                                            Windows</small>
                                    </div>

                                </div>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <div class="level">
                                    <div class="status">
                                        <h1>LV 0</h1>
                                        <v-progress-linear color="light-blue" height="25" value="0"
                                            striped>0%</v-progress-linear>
                                        <em class="mt-1" style="color: red; text-align: center;">Hãy mua/bán thêm 100.000đ
                                            để
                                            đạt
                                            level
                                            tiếp
                                            theo.</em>
                                    </div>
                                    <div class="cards">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <tbody class="text-center">
                                                    <tr>
                                                        <td class="font-weight-bold">Tài khoản</td>
                                                        <td>@aryan_lql1m3</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Họ tên</td>
                                                        <td>@aryan_lql1m3</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số dư</td>
                                                        <td>0 VND</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Ngày đăng ký</td>
                                                        <td>16/11/2023</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Đã mua</td>
                                                        <td>0 sản phẩm</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số gian hàng</td>
                                                        <td>0 gian hàng</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Đã bán</td>
                                                        <td>0 sản phẩm</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Số bài viết</td>
                                                        <td><a href="#" style="text-decoration: none; color: green;">0 bài
                                                                viết</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold" width="200">Mua hàng bằng API</td>
                                                        <td><span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Tắt</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Bảo mật 2 lớp</td>
                                                        <td class="pa-2">
                                                            <span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Chưa bật</span>
                                                            <br>
                                                            <small style="color: green;" class="font-weight-bold">(Hãy bảo
                                                                vệ
                                                                tài
                                                                khoản
                                                                của bạn bằng bảo mật 2FA)</small>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="font-weight-bold">Kết nối Telegram</td>
                                                        <td class="pa-2">
                                                            <span style="color: red;"><v-icon color="error"
                                                                    size="20">mdi-close-circle</v-icon> Chưa kết nối</span>
                                                            <br>
                                                            <small style="color: green;" class="font-weight-bold">(Bạn có
                                                                thể
                                                                gởi và
                                                                nhận được tin nhắn mới (chưa xem) qua Telegram nếu có kết
                                                                nối)</small>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                        <div class="text-center mt-4">
                                            <v-btn depressed color="primary">
                                                Chỉnh sửa
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </XyzTransition>
            <!--Responsive-->
        </v-app>
    </XyzTransition>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Profile",
    props: ["size"],
    data: () => ({

    }),
});
</script>
  
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --main-bg-color: #65dfc9;
    --secondary-bg-color: #6cdbeb;
}

.content {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    background: var(--main-bg-color);
    background: linear-gradient(to right top,
            var(--main-bg-color),
            var(--secondary-bg-color));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    .container {
        background-color: rgba(255, 255, 255, 0.9);
        min-height: 80vh;
        width: 100%;
        border-radius: 2rem;
        z-index: 2;
        display: flex;
    }

    @supports ((backdrop-filter: blur(2rem)) or (-webkit-backdrop-filter: blur(2rem))) {
        .container {
            background: linear-gradient(to right bottom,
                    rgba(255, 255, 255, 0.7),
                    rgba(255, 255, 255, 0.3));
            -webkit-backdrop-filter: blur(2rem);
            backdrop-filter: blur(2rem);
        }
    }

    .dashboard {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        text-align: center;
        background: linear-gradient(to right bottom,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 0.3));
        border-radius: 2rem;
        padding: 30px;
    }

    .user,
    .h2,
    .progress {
        display: none;
    }

    .level {
        flex: 3;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .status {
        margin-bottom: 1rem;
    }

    .status input {
        background: linear-gradient(to right bottom,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 0.3));
        border: none;
        width: 50%;
        padding: 0.5rem;
        border-radius: 2rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        background: linear-gradient(to left top,
                rgba(255, 255, 255, 0.8),
                rgba(255, 255, 255, 0.5));
        border-radius: 1rem;
        margin: 2rem 0rem;
        padding: 2rem;
        box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
        justify-content: space-between;
    }

    .card img {
        width: 105px;
        height: 105px;
        border-radius: 1rem;
    }

    .text-online {
        color: green;
        font-weight: 500;
        opacity: 0.8;
    }

    @media screen and (min-width: 1024px) {
        .container {
            width: 80%;
        }

        .dashboard {
            justify-content: start;
        }

        .user {
            display: block;
        }

        .user img {
            border-radius: 50%;
        }

        .level {
            margin: 5rem;
        }

        h1 {
            font-size: 3rem;
        }

        .status {
            margin-bottom: 3rem;
        }

        .card {
            flex-direction: row;
        }

        .card img {
            margin-right: 0.5rem;
        }

        .progress {
            display: block;
            background: linear-gradient(to right top,
                    var(--main-bg-color),
                    var(--secondary-bg-color));
            width: 100%;
            height: 25%;
            border-radius: 1rem;
            position: relative;
            overflow: hidden;
        }

        .progress::after {
            content: "";
            width: 100%;
            height: 100%;
            background: rgb(236, 236, 236);
            position: absolute;
            left: 60%;
        }
    }
}
</style>