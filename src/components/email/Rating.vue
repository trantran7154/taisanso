<template>
    <v-app>
        <div class="mb-3 black--text">27 Đánh giá sản phẩm này</div>

        <v-card class="mb-5 pa-3" outlined>
            <v-row>
                <v-col cols="12" md="3">
                    <div
                        style="border-right: 1px solid #e4e4e4; text-align: center; align-items: center; align-content: center;">
                        <b style="color: #FF8F00; font-size: 40px;">5/5</b>
                        <v-rating value="5" background-color="amber darken-3" color="amber darken-3" dense half-increments
                            hover size="18"></v-rating>
                        <small>27 đánh giá</small>
                    </div>
                </v-col>
                <v-col cols="12" md="5">
                    <div
                        style="border-right: 1px solid #e4e4e4; text-align: center; align-items: center; align-content: center;">
                        <div class="d-flex">
                            <div> 5 <v-icon color="amber darken-3" size="20" class="ml-1">mdi-star</v-icon></div>

                            <v-progress-linear color="amber darken-3" rounded value="100" class="ml-2 mt-3"
                                style="width: 150px;"></v-progress-linear>

                            <a style="font-size: 15px; color: #015494;" class="ml-2"><b>27</b>
                                đánh
                                giá</a>
                        </div>

                        <div class="d-flex">
                            <div> 4 <v-icon color="amber darken-3" size="20" class="ml-1">mdi-star</v-icon></div>

                            <v-progress-linear color="amber darken-3" rounded value="0" class="ml-2 mt-3"
                                style="width: 150px;"></v-progress-linear>

                            <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                giá</a>
                        </div>

                        <div class="d-flex">
                            <div> 3 <v-icon color="amber darken-3" size="20" class="ml-1">mdi-star</v-icon></div>

                            <v-progress-linear color="amber darken-3" rounded value="0" class="ml-2 mt-3"
                                style="width: 150px;"></v-progress-linear>

                            <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                giá</a>
                        </div>

                        <div class="d-flex">
                            <div> 2 <v-icon color="amber darken-3" size="20" class="ml-1">mdi-star</v-icon></div>

                            <v-progress-linear color="amber darken-3" rounded value="0" class="ml-2 mt-3"
                                style="width: 150px;"></v-progress-linear>

                            <a style="font-size: 15px; color: #015494;" class="ml-2">0 đánh
                                giá</a>
                        </div>

                        <div class="d-flex">
                            <div> 1 <v-icon color="amber darken-3" size="20" class="ml-1">mdi-star</v-icon></div>

                            <v-progress-linear color="amber darken-3" rounded value="0" class="ml-2 mt-3"
                                style="width: 150px;"></v-progress-linear>

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
    </v-app>
</template>

<style scoped>
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
</style>