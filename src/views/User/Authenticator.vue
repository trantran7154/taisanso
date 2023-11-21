<template>
    <XyzTransition xyz="fade-100%">
        <div v-if="size.onsize >= 1111">
            <v-form class="authenticator" ref="formAuthenticator" v-model="formAuthenticator.valid">
                <h3>Authenticator - Lấy mã code từ chuỗi 2FA</h3>

                <v-col cols="12" md="6" lg="6">
                    <label>Chuỗi mã 2FA</label>
                    <v-text-field class="mt-2" v-model="formAuthenticator.value.chain"
                        :rules="formAuthenticator.validate.chain" outlined dense></v-text-field>
                </v-col>

                <div class="d-flex">
                    <v-btn @click="submit()" class="white--text ml-2" color="green">Submit</v-btn>
                    <v-btn @click="save()" class="ml-4" color="grey lighten-4">Lưu</v-btn>
                </div>

                <div class="frame" v-if="show">
                    <h4>Lưu lại chuỗi này:</h4>

                    <div class="d-flex">
                        <v-col cols="12" md="6" lg="6">
                            <v-text-field class="mt-2" v-model="formAuthenticator.value.chainSave" placeholder="Tên gợi nhớ"
                                :rules="formAuthenticator.validate.chainSave" outlined dense></v-text-field>
                        </v-col>

                        <v-btn @click="chainSave()" class="white--text ml-2 mt-5" color="green">Lưu</v-btn>
                    </div>
                </div>

                <div class="frame">
                    <h4>Danh sách chuỗi mã đã lưu</h4>

                    <span class="red--text">*Lưu ý: Tính năng này sẽ lưu trên trình duyệt của bạn, nếu bạn đổi trình duyệt
                        hoặc
                        xóa
                        cookie sẽ bị mất.</span>

                    <v-simple-table class="mt-5">
                        <template v-slot:default>
                            <thead>
                                <tr style="background-color: #E0E0E0;">
                                    <th class="text-left font-weight-bold black--text">
                                        Thao tác
                                    </th>
                                    <th class="text-left font-weight-bold black--text">
                                        Tên
                                    </th>
                                    <th class="text-left font-weight-bold black--text">
                                        Chuỗi mã
                                    </th>
                                </tr>
                            </thead>
                        </template>
                    </v-simple-table>
                </div>

                <div class="frame">
                    <ul class="green--text">
                        <li>Authenticator là một ứng dụng tạo ra mã 2FA (mã code gồm 6 số ngẫu nhiên thay đổi ngẫu nhiên mỗi
                            30
                            giây) và được thiết kế để chỉ có bạn mới đăng nhập vào tài khoản của bạn được, kể cả nếu như có
                            người
                            khác biết mật khẩu của bạn.</li>
                        <li>Khi bạn đăng nhập vào tài khoản, có yêu cầu xác thực 2 yếu tố bằng chuỗi 2FA, bạn buộc phải sử
                            dụng
                            Authenticator để nhận mã đăng nhập.</li>
                        <li>Các gian hàng trên Tạp hóa MMO bán các sản phẩm thường kèm theo 2FA, hãy dùng ứng dụng này để
                            lấy mã
                            đăng nhập nhé.</li>
                    </ul>
                </div>
            </v-form>
        </div>

        <!--Responsive-->
        <div v-if="size.onsize < 1111">
            <v-form class="authenticator-res" ref="formAuthenticator" v-model="formAuthenticator.valid">
                <h3>Authenticator - Lấy mã code từ chuỗi 2FA</h3>

                <v-col cols="12" md="6" lg="6">
                    <label>Chuỗi mã 2FA</label>
                    <v-text-field class="mt-2" v-model="formAuthenticator.value.chain"
                        :rules="formAuthenticator.validate.chain" outlined dense></v-text-field>
                </v-col>

                <div class="d-flex">
                    <v-btn @click="submit()" class="white--text ml-2" color="green">Submit</v-btn>
                    <v-btn @click="save()" class="ml-4" color="grey lighten-4">Lưu</v-btn>
                </div>

                <div class="frame" v-if="show">
                    <h4>Lưu lại chuỗi này:</h4>

                    <v-col cols="12" md="6" lg="6">
                        <v-text-field class="mt-2" v-model="formAuthenticator.value.chainSave" placeholder="Tên gợi nhớ"
                            :rules="formAuthenticator.validate.chainSave" outlined dense></v-text-field>
                    </v-col>

                    <v-btn @click="chainSave()" class="white--text ml-2" color="green">Lưu</v-btn>
                </div>

                <div class="frame">
                    <h4>Danh sách chuỗi mã đã lưu</h4>

                    <span class="red--text">*Lưu ý: Tính năng này sẽ lưu trên trình duyệt của bạn, nếu bạn đổi trình duyệt
                        hoặc
                        xóa
                        cookie sẽ bị mất.</span>

                    <v-simple-table class="mt-5">
                        <template v-slot:default>
                            <thead>
                                <tr style="background-color: #E0E0E0;">
                                    <th class="text-left font-weight-bold black--text">
                                        Thao tác
                                    </th>
                                    <th class="text-left font-weight-bold black--text">
                                        Tên
                                    </th>
                                    <th class="text-left font-weight-bold black--text">
                                        Chuỗi mã
                                    </th>
                                </tr>
                            </thead>
                        </template>
                    </v-simple-table>
                </div>

                <div class="frame">
                    <ul class="green--text">
                        <li>Authenticator là một ứng dụng tạo ra mã 2FA (mã code gồm 6 số ngẫu nhiên thay đổi ngẫu nhiên mỗi
                            30
                            giây) và được thiết kế để chỉ có bạn mới đăng nhập vào tài khoản của bạn được, kể cả nếu như có
                            người
                            khác biết mật khẩu của bạn.</li>
                        <li>Khi bạn đăng nhập vào tài khoản, có yêu cầu xác thực 2 yếu tố bằng chuỗi 2FA, bạn buộc phải sử
                            dụng
                            Authenticator để nhận mã đăng nhập.</li>
                        <li>Các gian hàng trên Tạp hóa MMO bán các sản phẩm thường kèm theo 2FA, hãy dùng ứng dụng này để
                            lấy mã
                            đăng nhập nhé.</li>
                    </ul>
                </div>
            </v-form>
        </div>
    </XyzTransition>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
    name: "Authenticator",
    props: ["size"],
    data() {
        return {
            show: false,
            formAuthenticator: {
                valid: true,
                value: {
                    chain: "",
                    chainSave: "",
                },
                validate: {
                    chain: [
                        (v) => !!v || "Chưa nhập mã",
                    ],
                    chainSave: [
                        (v) => !!v || "Lỗi. Chưa điền đủ thông tin.",
                    ],
                },
            },
        };
    },
    methods: {
        submit() {
            let that = this;
            that.$refs.formAuthenticator.validate();
        },
        save() {
            let that = this;
            that.show = true;
            that.$refs.formAuthenticator.validate();
        },
        chainSave() {
            let that = this;
            that.$refs.formAuthenticator.validate();
        }
    },
});
</script>

<style lang="scss">
.authenticator {
    padding: 80px 80px 50px 80px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .v-btn {
        text-transform: none;
    }

    .frame {
        border: 1px solid #EEEEEE;
        margin-top: 30px;
        padding: 20px;
    }

    .frame:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
}

.authenticator-res {
    padding: 80px 20px 50px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .v-btn {
        text-transform: none;
    }

    .frame {
        border: 1px solid #EEEEEE;
        margin-top: 30px;
        padding: 20px;
    }

    .frame:hover {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
}
</style>