<template>
    <XyzTransition xyz="fade-100%">
        <v-app app>
            <!--Responsive-->
            <div class="content" v-if="size.onsize >= 1111" style="padding-top: 80px;">
                <div class="container">
                    <v-row>
                        <v-col cols="4" md="4" lg="4">
                            <div class="dashboard">
                                <div class="user mt-5" style="width: 310px;">
                                    <v-avatar size="150"><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLHZh0aF5Og2DF4G19yPVx_QGjXfaBByFZA&usqp=CAU"
                                            alt="" /></v-avatar>
                                    <h3 class="mt-3">Dagny Taggart</h3>
                                    <p class="text-online">Online</p>
                                </div>

                                <div class="font-weight-bold mt-5">
                                    <span style="color: blue;">--- Lịch sử đăng nhập ---</span>
                                </div>

                                <div class="d-flex flex-column mt-3" style="font-size: 16px;">
                                    <small class="ma-1"><v-icon>mdi-calendar-month</v-icon> 16-11-2023 14:25</small>
                                    <small class="ma-1"><v-icon>mdi-map-marker-outline</v-icon>IP:
                                        2901:9d70:c8e:cb00:5ef:1239:3e7c:f234</small>
                                    <small class="ma-1"><v-icon>mdi-cellphone-link</v-icon> Device: Chrome 119 on
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
                                    <em class="mt-1" style="color: red; text-align: center; font-size: 15px;">Hãy
                                        mua/bán thêm 100.000đ
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
                                                    <td><a href="#" style="text-decoration: none; color: limegreen;">0
                                                            bài
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
                                                        <small style="color: limegreen;" class="font-weight-bold">(Hãy
                                                            bảo
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
                                                        <small style="color: limegreen;" class="font-weight-bold">(Bạn
                                                            có
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

            <div class="content" v-if="size.onsize < 1111" style="padding: 50px 20px 10px 20px;">
                <div class="container">
                    <v-row>
                        <v-col cols="12" md="12" lg="12">
                            <div class="dashboard">
                                <div class="user" style="display: block !important; width: 100%;">
                                    <v-avatar size="120"><img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLHZh0aF5Og2DF4G19yPVx_QGjXfaBByFZA&usqp=CAU"
                                            alt="" /></v-avatar>

                                    <h3 class="mt-3">Dagny Taggart</h3>
                                    <p class="text-online">Online</p>
                                </div>

                                <div class="font-weight-bold mt-4">
                                    <span style="color: blue;">--- Lịch sử đăng nhập ---</span>
                                </div>

                                <div class="d-flex flex-column mt-3" style="font-size: 13px">
                                    <small class="ma-1"><v-icon>mdi-calendar-month</v-icon> 16-11-2023 14:25</small>
                                    <small class="ma-1"><v-icon>mdi-map-marker-outline</v-icon>IP:
                                        2901:9d70:c8e:cb00:5ef:1239:3e7c:f234</small>
                                    <small class="ma-1"><v-icon>mdi-cellphone-link</v-icon> Device: Chrome 119 on
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
                                    <em class="mt-1" style="color: red; text-align: center; font-size: 15px;">Hãy
                                        mua/bán thêm 100.000đ
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
                                                    <td><a href="#" style="text-decoration: none; color: limegreen;">0
                                                            bài
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
                                                        <small style="color: limegreen;" class="font-weight-bold">(Hãy
                                                            bảo
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
                                                        <small style="color: limegreen;" class="font-weight-bold">(Bạn
                                                            có
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
                                        <v-btn :to="{ path: '/user/profile/edit' }" depressed color="primary">
                                            Chỉnh sửa
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <!--Responsive-->
        </v-app>
    </XyzTransition>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Detail",
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.content {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

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
        border-radius: 30px;
        padding: 30px;
        background-color: paleturquoise;
    }

    .user {
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
        color: limegreen;
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
    }
}
</style>