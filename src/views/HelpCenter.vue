<template>
    <XyzTransition xyz="fade-100%">
        <v-app app>
            <div class="banner">
                <v-container class="container-banner">
                    <h1 :style="size.onsize <= 960 ? 'font-size: 25px' : ''">
                        Làm thế nào chúng tôi có thể giúp bạn?
                    </h1>

                    <v-form class="mt-7">
                        <v-row>
                            <v-col cols="12" md="12" lg="10">
                                <v-text-field height="52" hide-details="" placeholder="Hãy nhập từ khóa để tìm" solo
                                    class="elevation-0" prepend-inner-icon="fi fi-rr-search"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>

                    <div class="static mt-5">
                        <v-row>
                            <v-col cols="6" lg="3">
                                <span>Vấn Đề Về Sản Phẩm</span>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <span>Vấn Đề Mua Hàng</span>
                            </v-col>
                            <v-col cols="6" lg="3">
                                <span>Sử Dụng Proxy ISP Tĩnh</span>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </div>

            <!--Responsive-->
            <XyzTransition xyz="fade-100%" v-if="size.onsize >= 1111">
                <div style="padding: 0px 147px 50px 147px; margin-top: -55px; display: flex;">
                    <v-row>
                        <v-col cols="12" md="4" lg="4" v-for="item in items" :key="item.title">
                            <v-card class="mx-auto" max-width="344">
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="80">
                                        <v-img :src="item.img"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <p class="mb-1 font-weight-bold">
                                            {{ item.title }}
                                        </p>

                                        <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </XyzTransition>

            <XyzTransition xyz="fade-100%" v-if="size.onsize < 1111">
                <div class="pa-4">
                    <v-row>
                        <v-col cols="12" md="4" lg="4" v-for="item in items" :key="item.title">
                            <v-card class="mx-auto">
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="80">
                                        <v-img :src="item.img"></v-img>
                                    </v-list-item-avatar>

                                    <v-list-item-content>
                                        <p class="mb-1 font-weight-bold">
                                            {{ item.title }}
                                        </p>

                                        <v-list-item-subtitle>{{ item.content }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </XyzTransition>
            <!--Responsive-->

            <div v-if="size.onsize >= 1111">
                <div class="content" v-for="item in itemsContent" :key="item.title">
                    <div class="d-flex" color="grey lighten-2">
                        <div class="pa-2">
                            <div class="d-flex">
                                <span class="border-title"></span>
                                <h3 class="ml-2">{{ item.title }}</h3>
                            </div>
                        </div>

                        <div class="pa-2 ml-auto">
                            <p>Xem Tất Cả >></p>
                        </div>
                    </div>

                    <v-expansion-panels class="pa-5">
                        <v-expansion-panel v-for="(item1, index) in item.itemsQuestion" :key="index">
                            <v-expansion-panel-header>
                                <div class="d-flex">
                                    <div class="icon">
                                        <b>{{ index + 1 }}</b>
                                    </div>

                                    <b class="mt-1 ml-2">
                                        {{ item1.question }}
                                    </b>
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="ml-8">
                                <span>{{ item1.description }}</span>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>

                <div class="content" v-for="(item, index) in 1" :key="index">
                    <div class="d-flex" color="grey lighten-2">
                        <div class="pa-2">
                            <div class="d-flex">
                                <span class="border-title"></span>
                                <h3 class="ml-2">Hướng dẫn bằng video</h3>
                            </div>
                        </div>

                        <div class="pa-2 ml-auto">
                            <p>Xem Tất Cả >></p>
                        </div>
                    </div>

                    <div id="app">
                        <v-app id="inspire">
                            <v-row>
                                <v-col cols="6" md="6" lg="3" v-for="item in itemsVideo" :key="item.title">
                                    <v-dialog v-model="dialogRoto" width="600">
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on">
                                                <v-img :src="item.img" class="white--text"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150">
                                                </v-img>
                                                <div
                                                    style="text-align: center; display: block; position: sticky; margin-top: -50px;">
                                                    <v-icon size="35" color="white">mdi-play-circle-outline</v-icon>
                                                </div>
                                                <v-card-actions class="mt-5">
                                                    {{ item.title }}
                                                </v-card-actions>
                                            </div>
                                        </template>

                                        <v-card>
                                            <iframe width="100%" height="315" :src="item.urlVideo" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" text @click="dialogRoto = false">
                                                    Đóng
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </v-app>
                    </div>
                </div>
            </div>

            <div v-if="size.onsize < 1111">
                <div class="content-res pa-2" v-for="item in itemsContent" :key="item.title">
                    <div class="d-flex" color="grey lighten-2">
                        <div class="pa-2">
                            <div class="d-flex">
                                <span class="border-title"></span>
                                <h3 class="ml-2">{{ item.title }}</h3>
                            </div>
                        </div>

                        <div class="pa-2 ml-auto">
                            <p>Xem Tất Cả >></p>
                        </div>
                    </div>

                    <v-expansion-panels class="pa-5">
                        <v-expansion-panel v-for="(item1, index) in item.itemsQuestion" :key="index">
                            <v-expansion-panel-header>
                                <div class="d-flex">
                                    <div class="icon">
                                        <b>{{ index + 1 }}</b>
                                    </div>

                                    <b class="mt-1 ml-2">
                                        {{ item1.question }}
                                    </b>
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="ml-8">
                                <span>{{ item1.description }}</span>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </div>

                <div class="content-res pa-2" v-for="(item, index) in 1" :key="index">
                    <div class="d-flex" color="grey lighten-2">
                        <div class="pa-2">
                            <div class="d-flex">
                                <span class="border-title"></span>
                                <h3 class="ml-2">Hướng dẫn bằng video</h3>
                            </div>
                        </div>

                        <div class="pa-2 ml-auto">
                            <p>Xem Tất Cả >></p>
                        </div>
                    </div>

                    <div class="pa-3" id="app">
                        <v-app id="inspire">
                            <v-row>
                                <v-col cols="6" md="6" lg="3" v-for="item in itemsVideo" :key="item.title">
                                    <v-dialog v-model="dialogRoto" width="600">
                                        <template v-slot:activator="{ on, attrs }">
                                            <div v-bind="attrs" v-on="on">
                                                <v-img :src="item.img" class="white--text"
                                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="150">
                                                </v-img>
                                                <div
                                                    style="text-align: center; display: block; position: sticky; margin-top: -50px;">
                                                    <v-icon size="35" color="white">mdi-play-circle-outline</v-icon>
                                                </div>
                                                <v-card-actions class="mt-5">
                                                    {{ item.title }}
                                                </v-card-actions>
                                            </div>
                                        </template>

                                        <v-card>
                                            <iframe width="100%" height="315" :src="item.urlVideo" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="primary" text @click="dialogRoto = false">
                                                    Đóng
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>
                        </v-app>
                    </div>
                </div>
            </div>
        </v-app>
    </XyzTransition>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "HelloWorld",
    props: ["size"],
    data: () => ({
        dialogRoto: false,
        showDialog: false,
        dialog3: false,
        items: [
            {
                img: "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-question-online-learning-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png",
                title: "Câu hỏi thường gặp",
                content: "Bạn có thể tìm hiểu cách sử dụng proxy khác thay vì proxy trong bài viết này.",
            },
            {
                img: "https://img.icons8.com/external-parzival-1997-outline-color-parzival-1997/64/external-solution-start-it-up-parzival-1997-outline-color-parzival-1997.png",
                title: "Hướng dẫn sử dụng",
                content: "Nhận trợ giúp kỹ thuật và hướng dẫn cách thực hiện.",
            },
            {
                img: "https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/external-video-online-marketing-xnimrodx-lineal-color-xnimrodx.png",
                title: "Hướng dẫn bằng video",
                content: "Hãy truy cập kênh youtube của chúng tôi để tìm video hướng dẫn thiết lập ngắn cho người mới bắt đầu.",
            },
        ],
        itemsContent: [
            {
                title: "Câu hỏi thường gặp",
                itemsQuestion: [
                    {
                        question: "Phương pháp chứng nhận nhà ở",
                        description: "Sử dụng proxy an toàn trên mọi thiết bị hoặc phần mềm"
                    },
                    {
                        question: "Máy chủ proxy là gì và nó hoạt động như thế nào?",
                        description: "Chúng ta hãy xem nó là gì và tại sao mọi người lại sử dụng máy chủ proxy."
                    },
                    {
                        question: "LunaProxy cung cấp những loại IP nào?",
                        description: "Khu dân cư động: Cung cấp IP người dùng thực, luân phiên để truy cập các trang web mục tiêu phức tạp khi bạn cần thu thập thông tin, xem và được coi là người dùng thực. Hơn 200 triệu IP duy nhất được xây dựng"
                    },
                    {
                        question: "Giới thiệu về cơ sở dữ liệu vị trí IP và cách xem thông tin IP proxy?",
                        description: "Các trang Internet sử dụng cơ sở dữ liệu vị trí (GeoDB) để truy vấn thông tin và vị trí IP của người dùng."
                    },
                    {
                        question: "Bạn có API không?",
                        description: "Có, chúng tôi có API công khai. Sử dụng API của chúng tôi, bạn sẽ có thể truy cập proxy và có toàn quyền kiểm soát tài khoản của mình"
                    },
                ]
            },
            {
                title: "Hướng dẫn sử dụng",
                itemsQuestion: [
                    {
                        question: "Phương pháp chứng nhận nhà ở",
                        description: "Sử dụng proxy an toàn trên mọi thiết bị hoặc phần mềm"
                    },
                    {
                        question: "Máy chủ proxy là gì và nó hoạt động như thế nào?",
                        description: "Chúng ta hãy xem nó là gì và tại sao mọi người lại sử dụng máy chủ proxy."
                    },
                    {
                        question: "LunaProxy cung cấp những loại IP nào?",
                        description: "Khu dân cư động: Cung cấp IP người dùng thực, luân phiên để truy cập các trang web mục tiêu phức tạp khi bạn cần thu thập thông tin, xem và được coi là người dùng thực. Hơn 200 triệu IP duy nhất được xây dựng"
                    },
                    {
                        question: "Giới thiệu về cơ sở dữ liệu vị trí IP và cách xem thông tin IP proxy?",
                        description: "Các trang Internet sử dụng cơ sở dữ liệu vị trí (GeoDB) để truy vấn thông tin và vị trí IP của người dùng."
                    },
                ]
            },
        ],
        itemsVideo: [
            {
                title: "Bravebrowser",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA1iuEKxjPgNkfdVAXZYcYFYl47XrOozMSA&usqp=CAU",
                urlVideo: "https://www.youtube.com/embed/NBLO6RpofIU?controls=0",
            },
            {
                title: "Edge",
                img: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/microsoft-edge-thumb.jpg",
                urlVideo: "https://www.youtube.com/embed/NBLO6RpofIU?controls=0",
            },
            {
                title: "Google",
                img: "https://vanphongchothue.vn/uploads/noidung/images/tru-so-cua-google-o-dau.png",
                urlVideo: "https://www.youtube.com/embed/NBLO6RpofIU?controls=0",
            },
            {
                title: "Firefox",
                img: "https://s3.cloud.cmctelecom.vn/tinhte2/2020/09/5146625_page-image-master.1b6efe3d5631.jpg",
                urlVideo: "https://www.youtube.com/embed/NBLO6RpofIU?controls=0",
            },
        ]
    }),
});
</script>
  
<style lang="scss" scoped>
.banner {
    width: 100%;
    padding: 100px 0px;
    background-image: url("https://wapi.lunaproxy.com/static/index/img/help/help_search_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .static {
        span {
            color: #90A4AE;
            font-size: 16px;
            text-decoration: none;
            padding: 4px;
            transition: box-shadow .4s, color .3s;
        }

        span:hover {
            color: blue;
            box-shadow: 0 2px blue;
        }
    }

    h1 {}

    p {
        opacity: 0.8;
    }

    .container-banner {
        width: 80%;
    }
}

.content {
    padding: 0px 135px 50px 135px;

    .border-title {
        border-left: 7px solid blue;
        height: 25px;
        margin-top: 2px;
    }

    p {
        font-size: 15px;
        text-decoration: none;
        transition: box-shadow .4s, color .3s;
    }

    p:hover {
        color: blue;
        box-shadow: 0 2px blue;
    }

    .icon {
        position: relative;
        display: flex;
        flex: none;
        justify-content: center;
        align-items: center;
        font-family: Poppins, alihp;
        font-weight: 500;
        font-size: 12px;
        line-height: 1px;
        width: 25px;
        height: 25px;
        color: #fff;
        background: #22264B;
        border-radius: 50%;

        b {
            font-size: 12px;
        }
    }
}

.content-res {
    .border-title {
        border-left: 7px solid blue;
        height: 25px;
        margin-top: 2px;
    }

    p {
        font-size: 15px;
        text-decoration: none;
        transition: box-shadow .4s, color .3s;
    }

    p:hover {
        color: blue;
        box-shadow: 0 2px blue;
    }

    .icon {
        position: relative;
        display: flex;
        flex: none;
        justify-content: center;
        align-items: center;
        font-family: Poppins, alihp;
        font-weight: 500;
        font-size: 12px;
        line-height: 1px;
        width: 25px;
        height: 25px;
        color: #fff;
        background: #22264B;
        border-radius: 50%;

        b {
            font-size: 12px;
        }
    }
}

.v-expansion-panel::before {
    border-radius: inherit;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: none;
}

.v-expansion-panel:not(:first-child)::after {
    border-top: none;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.2s border-color cubic-bezier(0.4, 0, 0.2, 1), 0.2s opacity cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
  